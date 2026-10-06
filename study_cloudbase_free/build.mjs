import { cp, rm, mkdir, readFile, writeFile } from 'node:fs/promises';
import { Readable } from 'node:stream';
import readline from 'node:readline';
let parse, unbzip2, romanize, romanizeSentence;

const DATA_DIR = 'dist/data';
const UA = 'Study-Language-Personal/3.3 (+personal study build)';
const seed = JSON.parse(await readFile('public/data/seed-materials.json','utf8'));

if(process.env.SKIP_REMOTE_DATA!=='1'){
  ({ parse } = await import('csv-parse'));
  ({ default: unbzip2 } = await import('unbzip2-stream'));
  ({ romanize, romanizeSentence } = await import('@pcampus/thai-romanization'));
}

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('public', 'dist', { recursive: true });
await mkdir(DATA_DIR, { recursive: true });

const uniq = (items) => {
  const seen = new Set();
  return items.filter(x => {
    const k = `${x.type}|${String(x.front||'').trim().toLowerCase()}`;
    if (!x.front || seen.has(k)) return false;
    seen.add(k); return true;
  });
};
const clean = (s, n=220) => String(s||'').replace(/\s+/g,' ').trim().slice(0,n);
const safeFetch = async (url) => {
  const r = await fetch(url,{headers:{'user-agent':UA}});
  if(!r.ok) throw new Error(`${r.status} ${r.statusText}: ${url}`);
  return r;
};
const textFetch = async url => (await safeFetch(url)).text();

async function downloadBinaryWithMirrors(name, urls) {
  let lastError;
  for (const url of urls) {
    try {
      const r = await safeFetch(url);
      const bytes = new Uint8Array(await r.arrayBuffer());
      await writeFile(`dist/tts/${name}`, bytes);
      console.log(`[tts] ${name} ${bytes.length} bytes`);
      return;
    } catch (err) {
      lastError = err;
      console.warn(`[tts] download failed ${url}: ${err.message}`);
    }
  }
  throw lastError || new Error(`无法下载 ${name}`);
}

async function installBrowserFallbackTTS() {
  await mkdir('dist/tts', { recursive:true });
  const roots = [
    'https://cdn.jsdelivr.net/gh/steveseguin/espeakng.js@master/js',
    'https://raw.githubusercontent.com/steveseguin/espeakng.js/master/js'
  ];
  for (const name of ['espeakng-simple.js','espeakng.worker.js','espeakng.worker.data']) {
    await downloadBinaryWithMirrors(name, roots.map(root => `${root}/${name}`));
  }
  await downloadBinaryWithMirrors('LICENSE', [
    'https://cdn.jsdelivr.net/gh/steveseguin/espeakng.js@master/LICENSE',
    'https://raw.githubusercontent.com/steveseguin/espeakng.js/master/LICENSE'
  ]);
  await writeFile('dist/tts/README.txt', 'Browser fallback TTS: eSpeak-ng JavaScript port. GPLv3. Source: https://github.com/steveseguin/espeakng.js\n');
}

await installBrowserFallbackTTS();

function romanizeKorean(text='') {
  const L=['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h'];
  const V=['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i'];
  const T=['','k','k','k','n','n','n','t','l','k','m','l','l','p','l','m','p','p','t','t','ng','t','t','k','t','p','h'];
  let out='';
  for(const ch of String(text)){
    const c=ch.charCodeAt(0);
    if(c>=0xAC00&&c<=0xD7A3){const n=c-0xAC00;const li=Math.floor(n/588),vi=Math.floor((n%588)/28),ti=n%28;out+=L[li]+V[vi]+T[ti];}
    else if(/[A-Za-z0-9\s.,!?'-]/.test(ch)) out+=ch;
    else if(ch==='·') out+=' ';
  }
  return out.replace(/\s+/g,' ').trim();
}

async function streamCsv(url, onRow) {
  const r=await safeFetch(url);
  const parser=parse({columns:true,bom:true,relax_quotes:true,relax_column_count:true,skip_empty_lines:true});
  const src=Readable.fromWeb(r.body);
  src.pipe(parser);
  for await (const row of parser) await onRow(row);
}

async function buildKoreanWords() {
  const items=[];
  for(let v=1;v<=6;v++){
    const id=String(v).padStart(2,'0');
    const url=`https://raw.githubusercontent.com/sugalhjk-tech/yonsei-korean-vocabulary/main/data/csv/vol-${id}.csv`;
    await streamCsv(url,row=>{
      const front=clean(row.korean,100), meaning=clean(row.chinese,160);
      if(!front||!meaning) return;
      const isSentence=/[.!?。？！]$/.test(front) || (String(row.entry_kind)==='expression' && front.split(/\s+/).length>=4);
      const pron=clean(row.pronunciation,100) || front;
      items.push({
        type:isSentence?'sentence':'word', front, meaning,
        romanization:romanizeKorean(pron),
        topic:`延世开放词汇 · 第${v}册`, level:v<=2?'初级':v<=4?'中级':'中高级',
        source:'Open Yonsei Korean Vocabulary', sourceId:row.entry_id||'', pos:clean(row.pos_zh||row.pos,40)
      });
    });
  }
  return items;
}

function englishScore(row){
  const tags=String(row.tag||'').toLowerCase().split(/\s+/).filter(Boolean);
  let s=0;
  if(tags.includes('gre'))s+=70;if(tags.includes('toefl'))s+=55;if(tags.includes('ielts'))s+=45;if(tags.includes('ky'))s+=35;if(tags.includes('cet6'))s+=20;if(tags.includes('cet4'))s-=8;
  const frq=Number(row.frq)||999999,bnc=Number(row.bnc)||999999;
  s += Math.max(0,35-Math.log10(Math.min(frq,bnc,999999)+10)*7);
  if(Number(row.collins)>=3)s+=10;if(Number(row.oxford))s-=2;
  return s;
}
function englishTopic(row){
  const t=` ${String(row.tag||'').toLowerCase()} `;
  if(t.includes(' gre '))return 'GRE / C1+ 扩展';
  if(t.includes(' toefl '))return 'TOEFL 学术';
  if(t.includes(' ielts '))return 'IELTS 学术';
  if(t.includes(' ky '))return '考研 / 学术阅读';
  return '六级后进阶';
}
async function buildEnglishWords(){
  const c=[];
  await streamCsv('https://raw.githubusercontent.com/skywind3000/ECDICT/master/ecdict.csv', row=>{
    const word=clean(row.word,80);
    if(!word || !/^[A-Za-z][A-Za-z .'-]{1,79}$/.test(word)) return;
    const tag=String(row.tag||'').toLowerCase();
    if(!/(cet6|ky|ielts|toefl|gre)/.test(tag)) return;
    const translation=clean(String(row.translation||'').split(/\n|\\n/)[0],180);
    const def=clean(String(row.definition||'').split(/\n|\\n/)[0],180);
    if(!translation&&!def)return;
    c.push({
      type:'word',front:word,meaning:translation||def,romanization:clean(row.phonetic,80),
      topic:englishTopic(row),level:'B2→C1',source:'ECDICT',tags:clean(row.tag,80),score:englishScore(row)
    });
  });
  c.sort((a,b)=>b.score-a.score || a.front.localeCompare(b.front));
  return c.slice(0,12000).map(({score,...x})=>x);
}

async function findLexitronUrl(){
  const pkg=JSON.parse(await textFetch('https://opend.nstda.or.th/api/3/action/package_show?id=lexitron-2-0'));
  const rs=pkg?.result?.resources||[];
  const r=rs.find(x=>/telex/i.test(x.name||'') && /csv/i.test(x.format||x.mimetype||'')) || rs.find(x=>/telex/i.test(x.name||''));
  if(!r?.url) throw new Error('找不到 LEXiTRON telex CSV');
  return r.url;
}
async function buildThaiWords(){
  const items=[]; const url=await findLexitronUrl();
  await streamCsv(url,row=>{
    if(items.length>=22000)return;
    const front=clean(row['t-entry']||row.tentry||row['t-search'],100);
    const eng=clean(row['e-entry']||row.eentry,130);
    if(!front||!eng||front.length>45)return;
    let rtgs=''; try{rtgs=romanize(front,{separator:' '});}catch{}
    const cat=clean(row['t-cat']||row.tcat,30);
    items.push({type:'word',front,meaning:`英义：${eng}`,romanization:rtgs,topic:cat?`泰语大词库 · ${cat}`:'泰语大词库',level:'初级→中级',source:'LEXiTRON 2.0',sourceId:clean(row.id,30)});
  });
  return items;
}

async function readBz2Lines(url, onLine){
  const r=await safeFetch(url);
  const src=Readable.fromWeb(r.body).pipe(unbzip2());
  const rl=readline.createInterface({input:src,crlfDelay:Infinity});
  for await(const line of rl) await onLine(line);
}
async function tatoebaPairs(lang, limit=2500){
  const base=`https://downloads.tatoeba.org/exports/per_language/${lang}`;
  const pairs=[]; const wantTarget=new Set(), wantZh=new Set();
  await readBz2Lines(`${base}/${lang}-cmn_links.tsv.bz2`,line=>{
    if(pairs.length>=Math.max(limit*12,20000))return;
    const [a,b]=line.split('\t');if(a&&b){pairs.push([a,b]);wantTarget.add(a);wantZh.add(b);}
  });
  const target=new Map();
  await readBz2Lines(`${base}/${lang}_sentences.tsv.bz2`,line=>{
    const [id,,...rest]=line.split('\t');if(wantTarget.has(id))target.set(id,rest.join('\t'));
  });
  const zh=new Map();
  await readBz2Lines(`https://downloads.tatoeba.org/exports/per_language/cmn/cmn_sentences.tsv.bz2`,line=>{
    const [id,,...rest]=line.split('\t');if(wantZh.has(id))zh.set(id,rest.join('\t'));
  });
  const out=[]; const seen=new Set();
  for(const [a,b] of pairs){
    const front=clean(target.get(a),220), meaning=clean(zh.get(b),220);
    if(!front||!meaning)continue;
    if(front.length<4||front.length>180||meaning.length<2||meaning.length>180)continue;
    if(lang==='eng'){const wc=front.split(/\s+/).length;if(wc<7||wc>30)continue;}
    if(seen.has(front))continue;seen.add(front);
    let rom='';
    if(lang==='kor')rom=romanizeKorean(front);
    if(lang==='tha'){try{rom=romanizeSentence(front);}catch{try{rom=romanize(front,{separator:' '});}catch{}}}
    out.push({type:'sentence',front,meaning,romanization:rom,topic:'真实例句 · Tatoeba',level:lang==='eng'?'B2→C1':'初级→中级',source:'Tatoeba'});
    if(out.length>=limit)break;
  }
  return out;
}

function mergeWithSeed(lang, generated){
  const seeded=(seed[lang]||[]).map(x=>({...x,source:x.source||'Study 自编核心库',level:x.level||(lang==='en'?'B2→C1':'初级')}));
  return uniq([...seeded,...generated]);
}

const meta={version:'3.3.0',builtAt:new Date().toISOString(),libraries:{},sources:[
  {name:'Open Yonsei Korean Vocabulary',license:'CC BY-SA 3.0',url:'https://github.com/sugalhjk-tech/yonsei-korean-vocabulary'},
  {name:'ECDICT',license:'Open-source project; see upstream license/provenance',url:'https://github.com/skywind3000/ECDICT'},
  {name:'LEXiTRON 2.0',license:'Open Data Common',url:'https://opend.nstda.or.th/en/dataset/lexitron-2-0'},
  {name:'Tatoeba',license:'CC BY 2.0 FR / some CC0',url:'https://tatoeba.org/en/downloads'},
  {name:'eSpeak-ng JavaScript fallback TTS',license:'GPLv3',url:'https://github.com/steveseguin/espeakng.js'}
]};

async function buildLanguage(lang, wordBuilder){
  let words=[],sentences=[]; const errors=[];
  try{words=await wordBuilder();}catch(e){errors.push(`words: ${e.message}`);console.warn(`[${lang}] word source failed`,e.message);}
  try{sentences=await tatoebaPairs(lang==='ko'?'kor':lang==='th'?'tha':'eng',2500);}catch(e){errors.push(`sentences: ${e.message}`);console.warn(`[${lang}] Tatoeba failed`,e.message);}
  const items=mergeWithSeed(lang,[...words,...sentences]);
  const payload={meta:{lang,generatedAt:new Date().toISOString(),count:items.length,words:items.filter(x=>x.type==='word').length,sentences:items.filter(x=>x.type==='sentence').length,errors},items};
  await writeFile(`${DATA_DIR}/${lang}.json`,JSON.stringify(payload));
  meta.libraries[lang]=payload.meta;
  console.log(`[${lang}] ${payload.meta.words} words + ${payload.meta.sentences} sentences = ${payload.meta.count}`);
}

if(process.env.SKIP_REMOTE_DATA==='1'){
  for(const lang of ['ko','en','th']){
    const items=mergeWithSeed(lang,[]); const payload={meta:{lang,preview:true,count:items.length,words:items.filter(x=>x.type==='word').length,sentences:items.filter(x=>x.type==='sentence').length,errors:['Remote build skipped']},items};
    await writeFile(`${DATA_DIR}/${lang}.json`,JSON.stringify(payload));meta.libraries[lang]=payload.meta;
  }
}else{
  await buildLanguage('ko',buildKoreanWords);
  await buildLanguage('en',buildEnglishWords);
  await buildLanguage('th',buildThaiWords);
}
await writeFile(`${DATA_DIR}/meta.json`,JSON.stringify(meta,null,2));
console.log('Study V3.1 large library build complete.');
