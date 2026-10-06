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

## 静态预生成神经语音（V3.7）
为保证手机和电脑点击“聆听”后快速播放，本版不在手机端实时运行神经语音模型，
而是在 GitHub Actions 构建阶段用 MMS TTS 预生成 AAC 音频分片，再作为普通静态音频由 CloudBase 托管。

- 英语模型：facebook/mms-tts-eng
- 韩语模型：facebook/mms-tts-kor
- 泰语模型：facebook/mms-tts-tha
- 模型许可：CC BY-NC 4.0（非商业）
- 浏览器端不需要 API Key，不存在按分钟的 TTS API 免费额度。

MMS 模型适用于本项目当前的个人、非商业学习用途。如果未来商业化，应更换允许商业使用的语音模型或服务。
