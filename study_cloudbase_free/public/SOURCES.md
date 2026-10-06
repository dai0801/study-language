# Study Language 数据与语音来源说明

本网站当前定位为个人、非商业语言学习工具。

## 韩语词汇
- Open Yonsei Korean Vocabulary
  - https://github.com/sugalhjk-tech/yonsei-korean-vocabulary
  - 数据：CC BY-SA 3.0；项目代码：MIT。

## 英语词汇
- ECDICT
  - https://github.com/skywind3000/ECDICT
  - 本项目筛选六级后、考研、IELTS、TOEFL、GRE 等标签中的一部分词条用于个人学习。

## 泰语词汇
- LEXiTRON 2.0 / NECTEC, NSTDA
  - https://opend.nstda.or.th/en/dataset/lexitron-2-0
- 泰语罗马字由 @pcampus/thai-romanization 在构建时按规则生成，仅作发音参考。

## 真实例句
- Tatoeba
  - https://tatoeba.org/en/downloads
  - 使用韩→中、英→中、泰→中句对；具体句子依其各自许可使用。

## 本地神经语音（V3.6）
本版不再使用 eSpeak 作为手机备用语音，也不需要 Azure / Gemini / Cartesia API Key。
浏览器使用 Transformers.js + Meta MMS TTS 的 ONNX 转换模型，在用户设备本地生成语音。

- 英语：Xenova/mms-tts-eng
  - https://huggingface.co/Xenova/mms-tts-eng
- 韩语：Xenova/mms-tts-kor
  - https://huggingface.co/Xenova/mms-tts-kor
- 泰语：payam1394/traxlate-mms-tts-tha
  - https://huggingface.co/payam1394/traxlate-mms-tts-tha

MMS 模型许可：CC BY-NC 4.0（非商业）。
因此当前本地 TTS 方案适用于本项目的个人、非商业学习用途；如果未来做商业化版本，应更换为允许商业使用的语音方案。
