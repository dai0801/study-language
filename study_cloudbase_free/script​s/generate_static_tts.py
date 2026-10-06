#!/usr/bin/env python3
import argparse, json, os, subprocess, tempfile, wave, hashlib
from pathlib import Path

import numpy as np
import torch
from transformers import AutoTokenizer, VitsModel

MODELS = {
    'ko': 'facebook/mms-tts-kor',
    'en': 'facebook/mms-tts-eng',
    'th': 'facebook/mms-tts-tha',
}

def audio_key(lang, text):
    value = f"{lang}\0{' '.join(str(text or '').split())}"
    h1 = 0x811c9dc5
    h2 = 0x9e3779b9
    for ch in value:
        c = ord(ch)
        h1 = (((h1 ^ c) * 0x01000193) & 0xffffffff)
        h2 = (((h2 ^ c) * 0x85ebca6b) & 0xffffffff)
    return f'{h1:08x}{h2:08x}'

def write_wav(path, samples, rate):
    x = np.clip(samples, -1.0, 1.0)
    pcm = (x * 32767.0).astype(np.int16)
    with wave.open(str(path), 'wb') as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(int(rate))
        w.writeframes(pcm.tobytes())

def encode_m4a(wav_path, out_path, bitrate):
    cmd = [
        'ffmpeg','-y','-hide_banner','-loglevel','error',
        '-i',str(wav_path),'-vn','-ac','1',
        '-c:a','aac','-b:a',bitrate,'-movflags','+faststart',str(out_path)
    ]
    subprocess.run(cmd, check=True)

def synthesize(model, tokenizer, text):
    inputs = tokenizer(text, return_tensors='pt')
    with torch.inference_mode():
        wav = model(**inputs).waveform.squeeze().detach().cpu().numpy().astype(np.float32)
    if wav.size == 0:
        raise RuntimeError('empty waveform')
    peak = float(np.max(np.abs(wav)))
    if peak > 0.03:
        wav = wav * min(1.8, 0.88 / peak)
    return np.clip(wav, -0.98, 0.98)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--lang', choices=['ko','en','th'], required=True)
    ap.add_argument('--dist', default='study_cloudbase_free/dist')
    ap.add_argument('--shard-size', type=int, default=60)
    ap.add_argument('--bitrate', default='32k')
    ap.add_argument('--limit', type=int, default=0)
    args = ap.parse_args()

    torch.set_num_threads(max(1, min(4, os.cpu_count() or 2)))
    torch.manual_seed(7)

    dist = Path(args.dist)
    data_path = dist / 'data' / f'{args.lang}.json'
    payload = json.loads(data_path.read_text('utf-8'))
    items = payload.get('items', payload if isinstance(payload, list) else [])

    unique = []
    seen = set()
    for item in items:
        text = ' '.join(str(item.get('front','')).split()).strip()
        if not text:
            continue
        key = audio_key(args.lang, text)
        if key in seen:
            continue
        seen.add(key)
        unique.append((key, text))
    if args.limit:
        unique = unique[:args.limit]

    out_dir = dist / 'audio' / args.lang
    out_dir.mkdir(parents=True, exist_ok=True)

    model_id = MODELS[args.lang]
    print(f'[{args.lang}] Loading {model_id} ...', flush=True)
    tokenizer = AutoTokenizer.from_pretrained(model_id)
    model = VitsModel.from_pretrained(model_id)
    model.eval()
    rate = int(model.config.sampling_rate)
    print(f'[{args.lang}] {len(unique)} unique texts, sample rate {rate}', flush=True)

    manifest = {}
    pre = np.zeros(int(rate * 0.045), dtype=np.float32)
    gap = np.zeros(int(rate * 0.115), dtype=np.float32)

    shard_size = max(20, args.shard_size)
    for shard_no, start_idx in enumerate(range(0, len(unique), shard_size)):
        group = unique[start_idx:start_idx+shard_size]
        filename = f's{shard_no:04d}.m4a'
        parts = []
        cursor = 0.0
        ok = 0
        for local_idx, (key, text) in enumerate(group):
            try:
                torch.manual_seed(7)
                speech = synthesize(model, tokenizer, text)
                clip_start = cursor + len(pre) / rate
                clip_end = clip_start + len(speech) / rate
                parts.extend([pre, speech, gap])
                cursor += (len(pre) + len(speech) + len(gap)) / rate
                manifest[key] = [filename, round(max(0, clip_start - 0.015), 3), round(clip_end + 0.045, 3)]
                ok += 1
            except Exception as exc:
                print(f'[{args.lang}] skip: {text[:60]!r}: {exc}', flush=True)

            done = start_idx + local_idx + 1
            if done % 100 == 0 or done == len(unique):
                print(f'[{args.lang}] generated {done}/{len(unique)}', flush=True)

        if not parts:
            continue
        merged = np.concatenate(parts)
        with tempfile.TemporaryDirectory() as td:
            wav_path = Path(td) / 'sprite.wav'
            write_wav(wav_path, merged, rate)
            encode_m4a(wav_path, out_dir / filename, args.bitrate)
        print(f'[{args.lang}] shard {filename}: {ok} clips, {cursor:.1f}s', flush=True)

    meta = {
        'version': '3.7',
        'lang': args.lang,
        'model': model_id,
        'codec': 'AAC-LC',
        'bitrate': args.bitrate,
        'shardSize': shard_size,
        'count': len(manifest),
        'items': manifest,
    }
    (out_dir / 'manifest.json').write_text(json.dumps(meta, ensure_ascii=False, separators=(',',':')), 'utf-8')
    print(f'[{args.lang}] done: {len(manifest)} audio entries', flush=True)

if __name__ == '__main__':
    main()
