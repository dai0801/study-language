# Study Language V3.1 大资料库来源说明

本网站是个人学习工具。V3.1 在**部署构建阶段**自动从开放数据源整理词汇与例句，再把整理后的 JSON 与网站一起部署；日常使用时不需要再去这些站点实时请求。

## 韩语
- Open Yonsei Korean Vocabulary
  - https://github.com/sugalhjk-tech/yonsei-korean-vocabulary
  - 4,445 条词汇与表达，韩/中/英、词性、部分发音等。
  - 数据：CC BY-SA 3.0；项目代码：MIT。
  - 本项目不会复制教材课文、练习、音频或扫描页。

## 英语
- ECDICT
  - https://github.com/skywind3000/ECDICT
  - 本项目只筛选六级后、考研、IELTS、TOEFL、GRE 等标签中的一部分词条，用于个人学习；保留音标、中文释义和考试标签。
  - ECDICT 汇集了多来源词典数据；使用与再分发时应同时留意上游项目的许可与来源说明。本项目当前定位为个人学习版本。

## 泰语
- LEXiTRON 2.0 / NECTEC, NSTDA
  - https://opend.nstda.or.th/en/dataset/lexitron-2-0
  - 泰→英约 53,000 条，含词性、义项、同义词和例句字段。
  - 数据目录标注为 Public / Open Data Common。
- 泰语罗马字由 @pcampus/thai-romanization 在构建时按规则生成，仅作发音参考；真实发音以“聆听”和泰语声调规则为准。

## 真实例句
- Tatoeba
  - https://tatoeba.org/en/downloads
  - 使用韩→中、英→中、泰→中句对。
  - 下载页标注主要文本数据为 CC BY 2.0 FR，部分句子为 CC0 1.0。

## Study 自编核心库
网站还保留一小套自编核心词句，确保开放数据源临时不可访问时网站仍可正常使用。


## 手机浏览器备用聆听
- eSpeak-ng JavaScript fallback TTS
  - https://github.com/steveseguin/espeakng.js
  - GPLv3。用于任何未向网页开放系统 `speechSynthesis` 接口、或系统朗读启动失败的手机/电脑浏览器作为备用朗读。
  - 备用语音完全在浏览器本地生成，不调用付费 TTS API；声音会比系统语音更机械。
