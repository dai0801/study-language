# Study Language 项目交接说明

> 用途：给未来继续修改本项目的 AI / 开发者快速了解当前状态。  
> 原则：请在现有版本上继续修改，不要重新设计整个项目，也不要擅自恢复已删除的旧语音方案。

## 1. 项目定位

这是一个个人长期使用的语言学习网站，当前支持：

- 韩语
- 英语
- 泰语

用户一次选择一种语言学习，不是三种同时学习。

目标是：
- 手机端和电脑端都可用
- 简洁、非 Duolingo 风格
- 以词汇、句子、复习、笔记、AI 辅助为核心
- 当前优先低成本 / 零成本
- 当前不需要登录

---

## 2. 当前仓库与部署

GitHub 仓库：

`dai0801/study-language`

主分支：

`main`

CloudBase 当前服务：

`study-language-web`

CloudBase 线上地址：

`https://study-language-d6gw2ym9x1760ec72-1501039795.tcloudbaseapp.com/`

当前 CloudBase 已部署成功的干净版本：

`study-language-web-009`

---

## 3. 当前页面与交互状态

当前版本已经确定的 UI / UX：

- 词句学习库采用“单卡片模式”
- 一次只显示 1 个单词或句子
- 底部有：
  - 上一个
  - 当前进度，例如 `2 / 6744`
  - 下一个
- “筛选与主题”默认收起
- 用户需要时自己展开
- 手机端不再一进入就显示很长的主题列表
- 搜索、单词/句子筛选、主题筛选仍保留
- “加入复习”仍保留
- 今日复习仍是核心功能
- 罗马字 / 音译仍保留
- 韩语语法说明中，类似 `-고 싶다` 的前导 `-` 要解释为语法附着标记，不是实际输入字符

不要把词句页改回多列卡片瀑布流，除非用户明确要求。

---

## 4. 当前聆听方案

当前正式版本使用：

`window.speechSynthesis`

也就是浏览器 / 操作系统提供的 Web Speech 系统语音。

当前要求：

- 韩语：1.0×
- 英语：1.0×
- 泰语：1.0×
- 不提供倍速设置
- 使用正常语速

重要：

不要自动恢复下面这些已放弃的旧方案：

- eSpeak
- eSpeak-NG
- MMS 本地实时 TTS
- GitHub Actions 预生成静态音频
- `dist/audio`
- `dist/tts`
- Azure Speech
- Gemini TTS
- Cartesia TTS

这些方案都曾尝试过，但由于手机兼容性、延迟、额度或体验问题，当前版本已经移除。

如果未来用户明确要求重新设计语音方案，可以重新评估，但不要默认恢复。

---

## 5. 当前已清理内容

当前 GitHub `main` 已清理：

- `study_cloudbase_free/dist/audio/`
- `study_cloudbase_free/dist/tts/`
- `study_cloudbase_free/scripts/`
- `study_cloudbase_free/requirements-tts.txt`

当前 GitHub Actions 也已经恢复为普通网站构建，不再生成静态语音。

如果后续构建后又出现 `audio/` 或 `tts/`，应视为异常，先检查构建脚本和 workflow。

---

## 6. 主要目录

核心项目目录：

`study_cloudbase_free/`

重要文件：

- `study_cloudbase_free/build.mjs`
- `study_cloudbase_free/package.json`
- `study_cloudbase_free/public/app.js`
- `study_cloudbase_free/public/styles.css`
- `study_cloudbase_free/public/sw.js`
- `study_cloudbase_free/public/index.html`
- `study_cloudbase_free/public/manifest.json`
- `study_cloudbase_free/public/SOURCES.md`

构建输出：

`study_cloudbase_free/dist/`

大资料库数据：

- `dist/data/ko.json`
- `dist/data/en.json`
- `dist/data/th.json`

---

## 7. 当前资料库方向

内置资料是主要学习内容，用户导入资料只是补充。

### 韩语

使用开放数据为主，包括 Open Yonsei Korean Vocabulary 等。

当前曾构建出大约：

- 4,000+ 韩语词汇
- 2,600+ 韩语句子

### 英语

用户已经通过 CET-6。

所以英语内容定位是：

- B2 → C1
- 六级后
- 考研 / IELTS / TOEFL / GRE 等进阶词汇
- 不要把英语改回 CET-4 基础内容

主要词汇来源包括 ECDICT。

### 泰语

使用 LEXiTRON 等开放词汇资源。

### 例句

真实例句来源包括 Tatoeba。

不要直接复制完整版权教材或付费词库。

---

## 8. 当前主要功能

导航模块：

- 首页
- 学习
- 单词
- 笔记
- AI

首页重点：

- 继续学习
- 今日复习
- 最近记录
- 快速记录

复习机制：

- 不记得
- 有点熟
- 记住了

学习流程方向：

解释 → 例子 → 笔记 → 简单练习 → 可继续问 AI

单词 / 句子 / 笔记应继续支持：

- 搜索
- 编辑
- 删除
- 加入复习

---

## 9. 本地数据与换电脑注意事项

当前学习记录主要保存在浏览器本地。

因此：

- GitHub 保存的是代码和资料库
- GitHub 不等于学习进度同步
- 换电脑后代码可以从 GitHub 继续
- 学习记录、笔记、复习进度需要通过网站导出 / 导入备份

如果未来增加跨设备同步功能，优先：
- 低成本
- 用户主动开启
- 不破坏现有本地数据
- 支持手机和电脑同步

---

## 10. GitHub 构建方式

当前 workflow：

`.github/workflows/build-large-library.yml`

当前 workflow 名称：

`Build Study Large Library`

当前是普通网站构建流程。

运行方式：

GitHub → Actions → Build Study Large Library → Run workflow

正常情况下只需要看到普通 `build` 任务成功。

不要再添加：

- `full-audio`
- `smoke-audio`
- `fast-ui`

这些是之前静态语音实验阶段使用的旧模式。

---

## 11. CloudBase 部署配置

CloudBase 部署时保持：

目标目录：

`./study_cloudbase_free`

安装命令：

留空

构建命令：

留空

构建产物目录：

`./dist`

部署路径：

`/`

CloudBase 只负责托管 GitHub Actions 已经生成好的 `dist`。

---

## 12. 修改时的基本规则

未来 AI / 开发者修改项目时：

1. 先阅读本文件
2. 先检查现有代码
3. 在现有功能上增量修改
4. 不要重新搭一套新项目
5. 不要擅自改产品方向
6. 不要删除现有大资料库
7. 不要重新加入旧 TTS 方案
8. 不要把单卡片学习页改回多卡片列表
9. 不要取消“今日复习”
10. 不要破坏手机端布局
11. 修改 `app.js` / `sw.js` 后注意缓存版本
12. 不要把任何 API Key 写进公开 GitHub

---

## 13. 如果让另一个 AI 接手，可以直接发这句话

可以把下面这段复制给新的 AI：

> 这是我已经做好的语言学习网站项目。请先完整阅读 `PROJECT-HANDOFF.md`，再检查现有代码。  
> 必须在当前版本基础上继续修改，不要重新设计，不要删除现有功能，也不要恢复已经废弃的 eSpeak、MMS、静态音频等 TTS 方案。  
> 我会逐条告诉你新的修改需求，你只做增量修改，并尽量保留当前手机端和电脑端体验。

---

## 14. 安全与隐私

不要提交到 GitHub：

- API Key
- Token
- 密码
- 私人账号凭证
- 微信二维码原始敏感信息（若未来加入付费功能，应谨慎处理）

公开仓库里的代码应默认任何人都能看到。

---

## 15. 当前最终状态总结

当前项目已经处于“可继续迭代”的稳定基线：

- GitHub 当前 `main` 是干净版本
- CloudBase 已成功部署
- 大资料库已生成
- 单卡片词句学习已上线
- 筛选主题默认收起
- 系统语音恢复为 1.0×
- 旧静态音频已清理
- 旧 TTS 构建逻辑已清理
- 以后换电脑或换 AI，都可以直接从当前 GitHub 版本继续
