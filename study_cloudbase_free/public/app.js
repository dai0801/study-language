const STORAGE_KEY = 'study-personal-v1';
const LANGS = {
  ko: { name: '韩语', native: '한국어', flag: '🇰🇷', code: 'KR' },
  en: { name: '英语', native: 'English', flag: '🇺🇸', code: 'EN' },
  th: { name: '泰语', native: 'ภาษาไทย', flag: '🇹🇭', code: 'TH' },
};
const LEVELS = {
  ko: { label:'初级', detail:'从字母、发音和最常用语法开始' },
  en: { label:'六级后进阶', detail:'从六级以后继续提升到更自然、更准确的 B2→C1 词汇、阅读、口语和写作' },
  th: { label:'初级', detail:'从字母、发音、声调和日常表达开始' },
};
const AI_PROVIDERS = {
  openrouter: { name:'OpenRouter 免费模型', endpoint:'https://openrouter.ai/api/v1/chat/completions', defaultModel:'openrouter/free' },
  siliconflow: { name:'硅基流动', endpoint:'https://api.siliconflow.cn/v1/chat/completions', defaultModel:'deepseek-ai/DeepSeek-V4-Flash' },
};
const NAV = [
  ['home', '⌂', '首页'],
  ['learn', '▤', '学习'],
  ['words', '◫', '单词'],
  ['notes', '✎', '笔记'],
  ['ai', '✦', 'AI'],
];

const BUILTIN_LESSONS = {
  "ko": [
    {
      "id": "ko-roadmap",
      "category": "初级 · 学习路线",
      "title": "韩语初级怎么学",
      "summary": "先认读，再学最常用助词和句型，最后进入日常场景",
      "body": [
        "这套韩语初级课程按“发音 → 基础句型 → 常用语法 → 日常场景”安排。",
        "初级阶段音译只是辅助，看到韩文时仍要配合“聆听”反复模仿。",
        "遇到 -고 싶다、-(으)세요 这类前面带“-”的语法标题时，横线只是教材标记，不是实际句子的一部分。"
      ],
      "examples": [
        [
          "안녕하세요.",
          "你好。",
          "annyeonghaseyo"
        ],
        [
          "저는 학생이에요.",
          "我是学生。",
          "jeoneun haksaeng-ieyo"
        ]
      ],
      "quiz": {
        "q": "韩语语法标题前面的“-”通常表示什么？",
        "a": "表示这个语法形式要连接在前面的词或词干后面，实际句子里不写横线。"
      }
    },
    {
      "id": "ko-vowels",
      "category": "初级 · 发音",
      "title": "基础元音 ㅏ ㅓ ㅗ ㅜ ㅡ ㅣ",
      "summary": "先掌握最常见的6个基础元音",
      "body": [
        "ㅏ 接近 a；ㅓ 是韩语特有的 eo 音；ㅗ 接近 o；ㅜ 接近 u；ㅡ 是扁平的 eu 音；ㅣ 接近 i。",
        "先不要只靠拼音记，最好每个音都点“聆听”并模仿口型。"
      ],
      "examples": [
        [
          "아",
          "ㅏ 的音",
          "a"
        ],
        [
          "어",
          "ㅓ 的音",
          "eo"
        ],
        [
          "오",
          "ㅗ 的音",
          "o"
        ],
        [
          "우",
          "ㅜ 的音",
          "u"
        ],
        [
          "으",
          "ㅡ 的音",
          "eu"
        ],
        [
          "이",
          "ㅣ 的音",
          "i"
        ]
      ],
      "quiz": {
        "q": "韩语 ㅓ 常用什么罗马字表示？",
        "a": "eo"
      }
    },
    {
      "id": "ko-consonants",
      "category": "初级 · 发音",
      "title": "基础辅音 ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅎ",
      "summary": "认识最常见辅音及组合方式",
      "body": [
        "韩文不是按字母横着排，而是把辅音和元音组合成音节块。",
        "例如 ㄱ + ㅏ = 가，ㄴ + ㅏ = 나。ㅇ 放在音节开头时通常不发音，放在收音位置时读 ng。"
      ],
      "examples": [
        [
          "가",
          "ㄱ + ㅏ",
          "ga"
        ],
        [
          "나",
          "ㄴ + ㅏ",
          "na"
        ],
        [
          "마",
          "ㅁ + ㅏ",
          "ma"
        ],
        [
          "하",
          "ㅎ + ㅏ",
          "ha"
        ]
      ],
      "quiz": {
        "q": "“나”由哪两个基本字母组成？",
        "a": "ㄴ + ㅏ"
      }
    },
    {
      "id": "ko-batchim",
      "category": "初级 · 发音",
      "title": "收音（받침）入门",
      "summary": "理解音节块下面的辅音怎么读",
      "body": [
        "音节块下方的辅音叫收音（받침）。",
        "初级先学会识别，不要求一次掌握所有连音和音变。",
        "例如 밥 的下面 ㅂ 是收音；한국 的 국 下面 ㄱ 也是收音。"
      ],
      "examples": [
        [
          "밥",
          "饭",
          "bap"
        ],
        [
          "집",
          "家",
          "jip"
        ],
        [
          "한국",
          "韩国",
          "hanguk"
        ]
      ],
      "quiz": {
        "q": "韩语音节块下方的辅音叫什么？",
        "a": "收音（받침）"
      }
    },
    {
      "id": "ko-linking",
      "category": "初级 · 发音",
      "title": "连音先认识",
      "summary": "为什么写法和实际听到的声音有时不同",
      "body": [
        "当前一个音节有收音、后一个音节以元音开始时，口语里常出现连读。",
        "初级阶段先做到“知道有这个现象”，不要强行死记所有音变。"
      ],
      "examples": [
        [
          "한국어",
          "韩语",
          "hangugeo"
        ],
        [
          "먹어요",
          "吃（敬语）",
          "meogeoyo"
        ],
        [
          "있어요",
          "有 / 在",
          "isseoyo"
        ]
      ],
      "quiz": {
        "q": "初级遇到连音时最重要的是先做什么？",
        "a": "知道写法和听感可能不同，并结合聆听模仿。"
      }
    },
    {
      "id": "ko-greeting",
      "category": "初级 · 日常表达",
      "title": "问候与礼貌表达",
      "summary": "最先会用的一组日常韩语",
      "body": [
        "안녕하세요 是最通用的礼貌问候。",
        "감사합니다 更正式，고마워요 也表示谢谢但语气稍轻松。"
      ],
      "examples": [
        [
          "안녕하세요.",
          "你好。",
          "annyeonghaseyo"
        ],
        [
          "감사합니다.",
          "谢谢。",
          "gamsahamnida"
        ],
        [
          "죄송합니다.",
          "对不起。",
          "joesonghamnida"
        ],
        [
          "괜찮아요.",
          "没关系 / 可以。",
          "gwaenchanayo"
        ]
      ],
      "quiz": {
        "q": "较正式地说“谢谢”怎么说？",
        "a": "감사합니다"
      }
    },
    {
      "id": "ko-copula",
      "category": "初级 · 基础语法",
      "title": "이에요 / 예요",
      "summary": "表达“是……”",
      "notation": "이에요 / 예요 直接接在名词后面。名词有收音时常用 이에요，没有收音时常用 예요。这里没有前置“-”，因为它不是以语法词干连接符的形式标记。",
      "body": [
        "학생 + 이에요 → 학생이에요。",
        "의사 + 예요 → 의사예요。"
      ],
      "examples": [
        [
          "저는 학생이에요.",
          "我是学生。",
          "jeoneun haksaeng-ieyo"
        ],
        [
          "친구예요.",
          "是朋友。",
          "chingu-yeyo"
        ]
      ],
      "quiz": {
        "q": "“학생”后面通常接 이에요 还是 예요？",
        "a": "이에요，因为 학생 有收音。"
      }
    },
    {
      "id": "ko-topic",
      "category": "初级 · 基础语法",
      "title": "은 / 는",
      "summary": "标记句子的主题，“至于……”",
      "notation": "은/는 是助词，直接接在名词后面。名词有收音通常用 은，没有收音通常用 는。",
      "body": [
        "은/는 常用来提出话题或做对比。",
        "저 + 는 → 저는；오늘 + 은 → 오늘은。"
      ],
      "examples": [
        [
          "저는 학생이에요.",
          "我是学生。",
          "jeoneun haksaeng-ieyo"
        ],
        [
          "오늘은 바빠요.",
          "今天很忙。",
          "oneureun bappayo"
        ]
      ],
      "quiz": {
        "q": "“저”后面通常接 은 还是 는？",
        "a": "는，所以是 저는。"
      }
    },
    {
      "id": "ko-subject",
      "category": "初级 · 基础语法",
      "title": "이 / 가",
      "summary": "标记主语，强调“谁 / 什么”",
      "notation": "이/가 直接接名词。有收音用 이，没有收音用 가。",
      "body": [
        "이/가 常用于回答“谁/什么是……”或把注意力放在主语上。",
        "은/는 和 이/가 都很常见，初级不用追求一次把所有语感差别学透。"
      ],
      "examples": [
        [
          "비가 와요.",
          "下雨了。",
          "biga wayo"
        ],
        [
          "친구가 와요.",
          "朋友来了。",
          "chinguga wayo"
        ]
      ],
      "quiz": {
        "q": "“친구”后面通常接 이 还是 가？",
        "a": "가，所以是 친구가。"
      }
    },
    {
      "id": "ko-object",
      "category": "初级 · 基础语法",
      "title": "을 / 를",
      "summary": "标记动作的对象",
      "notation": "을/를 直接接名词。有收音用 을，没有收音用 를。",
      "body": [
        "想表达“吃什么、看什么、学什么”时，经常会用到 을/를。"
      ],
      "examples": [
        [
          "밥을 먹어요.",
          "吃饭。",
          "babeul meogeoyo"
        ],
        [
          "영화를 봐요.",
          "看电影。",
          "yeonghwareul bwayo"
        ],
        [
          "한국어를 공부해요.",
          "学韩语。",
          "hangugeoreul gongbuhaeyo"
        ]
      ],
      "quiz": {
        "q": "“커피”后面通常接 을 还是 를？",
        "a": "를，所以是 커피를。"
      }
    },
    {
      "id": "ko-location",
      "category": "初级 · 基础语法",
      "title": "에 / 에서",
      "summary": "区分“去/在某处”和“在某处做动作”",
      "notation": "에、에서 都是助词，直接接地点名词。에 常表示目的地、存在地点或时间；에서 常表示动作发生的地点。",
      "body": [
        "학교에 가요 = 去学校。",
        "학교에서 공부해요 = 在学校学习。"
      ],
      "examples": [
        [
          "학교에 가요.",
          "去学校。",
          "hakgyoe gayo"
        ],
        [
          "집에 있어요.",
          "在家。",
          "jibe isseoyo"
        ],
        [
          "카페에서 공부해요.",
          "在咖啡店学习。",
          "kape-eseo gongbuhaeyo"
        ]
      ],
      "quiz": {
        "q": "“在图书馆学习”地点后更常用 에 还是 에서？",
        "a": "에서。"
      }
    },
    {
      "id": "ko-present",
      "category": "初级 · 动词变化",
      "title": "-아/어요 现在时敬语",
      "summary": "最常用的日常礼貌句尾",
      "notation": "标题前的“-”表示要接在动词或形容词词干后面。实际句子中不写横线。词尾根据词干元音发生变化，如 가다 → 가요，먹다 → 먹어요。",
      "body": [
        "先把常用动词当成整体记，比一开始背所有变化规则更有效。",
        "가다 → 가요；먹다 → 먹어요；하다 → 해요。"
      ],
      "examples": [
        [
          "가요.",
          "去。",
          "gayo"
        ],
        [
          "먹어요.",
          "吃。",
          "meogeoyo"
        ],
        [
          "공부해요.",
          "学习。",
          "gongbuhaeyo"
        ]
      ],
      "quiz": {
        "q": "하다 的常用日常敬语形式是什么？",
        "a": "해요"
      }
    },
    {
      "id": "ko-exist",
      "category": "初级 · 动词变化",
      "title": "있다 / 없다",
      "summary": "表达“有 / 没有、在 / 不在”",
      "body": [
        "있어요 可以表示“有”或“在”；없어요 表示“没有”或“不在”。",
        "具体意思看前面的名词和地点。"
      ],
      "examples": [
        [
          "시간이 있어요.",
          "有时间。",
          "sigani isseoyo"
        ],
        [
          "돈이 없어요.",
          "没有钱。",
          "doni eopseoyo"
        ],
        [
          "집에 있어요.",
          "在家。",
          "jibe isseoyo"
        ]
      ],
      "quiz": {
        "q": "“没有时间”怎么说？",
        "a": "시간이 없어요."
      }
    },
    {
      "id": "ko-negation",
      "category": "初级 · 动词变化",
      "title": "안 / 못",
      "summary": "区分“不做”和“不能做”",
      "body": [
        "안 + 动词：不做 / 没做，强调否定。",
        "못 + 动词：不能做 / 做不到，强调能力或条件不允许。"
      ],
      "examples": [
        [
          "오늘 안 가요.",
          "今天不去。",
          "oneul an gayo"
        ],
        [
          "매운 음식을 못 먹어요.",
          "不能吃辣。",
          "maeun eumsigeul mot meogeoyo"
        ]
      ],
      "quiz": {
        "q": "“我不会/不能游泳”更适合用 안 还是 못？",
        "a": "못。"
      }
    },
    {
      "id": "ko-want",
      "category": "初级 · 常用语法",
      "title": "-고 싶다",
      "summary": "表达“想做……”",
      "notation": "前面的“-”不是实际句子里的横线，而是语法教材的连接标记。结构是“动词词干 + 고 싶다”。例如 먹다 去掉 다 得到 먹，再接 고 싶다 → 먹고 싶다。实际写 먹고 싶어요，不写 먹-고 싶어요。",
      "body": [
        "日常礼貌表达最常见的是 -고 싶어요。",
        "보다 + -고 싶다 → 보고 싶다；가다 + -고 싶다 → 가고 싶다。"
      ],
      "examples": [
        [
          "한국에 가고 싶어요.",
          "我想去韩国。",
          "hangug-e gago sipeoyo"
        ],
        [
          "커피를 마시고 싶어요.",
          "我想喝咖啡。",
          "keopireul masigo sipeoyo"
        ],
        [
          "보고 싶어요.",
          "我想见你 / 我想念你。",
          "bogo sipeoyo"
        ]
      ],
      "quiz": {
        "q": "“我想吃”怎么说？",
        "a": "먹고 싶어요."
      }
    },
    {
      "id": "ko-past",
      "category": "初级 · 常用语法",
      "title": "-았/었어요",
      "summary": "表达过去发生的事情",
      "notation": "“-았/었어요”中的“-”表示接在词干后面。元音变化较多，初级先从常用动词整体记。",
      "body": [
        "가다 → 갔어요（去了）；먹다 → 먹었어요（吃了）；하다 → 했어요（做了）。"
      ],
      "examples": [
        [
          "어제 학교에 갔어요.",
          "昨天去了学校。",
          "eoje hakgyoe gasseoyo"
        ],
        [
          "밥을 먹었어요.",
          "吃过饭了。",
          "babeul meogeosseoyo"
        ],
        [
          "공부했어요.",
          "学习了。",
          "gongbuhaesseoyo"
        ]
      ],
      "quiz": {
        "q": "하다 的过去时常用形式是什么？",
        "a": "했어요"
      }
    },
    {
      "id": "ko-request",
      "category": "初级 · 常用语法",
      "title": "-(으)세요",
      "summary": "礼貌地请求或提示“请……”",
      "notation": "括号里的“으”表示根据前面词干是否有收音来选择。教材写 -(으)세요，是在提醒你有 두 가지 连接形式；实际句子里不会写括号或横线。",
      "body": [
        "有收音的词干常接 으세요；无收音的词干常接 세요。",
        "请坐：앉으세요；请来：오세요。"
      ],
      "examples": [
        [
          "앉으세요.",
          "请坐。",
          "anjeuseyo"
        ],
        [
          "들어오세요.",
          "请进。",
          "deureo-oseyo"
        ],
        [
          "천천히 말하세요.",
          "请慢慢说。",
          "cheoncheonhi malhaseyo"
        ]
      ],
      "quiz": {
        "q": "语法标题 -(으)세요 里的括号表示什么？",
        "a": "表示“으”是否出现要根据前面的词干决定。"
      }
    },
    {
      "id": "ko-if",
      "category": "初级 · 常用语法",
      "title": "-(으)면",
      "summary": "表达“如果…… / ……的话”",
      "notation": "-(으)면 是连接词尾。前面的“-”表示要接词干，括号中的 으 根据词干是否有收音选择。",
      "body": [
        "가다 → 가면；먹다 → 먹으면。",
        "初级先会识别和套用常见句子。"
      ],
      "examples": [
        [
          "시간이 있으면 같이 가요.",
          "如果有时间，一起去吧。",
          "sigani isseumyeon gachi gayo"
        ],
        [
          "비가 오면 집에 있어요.",
          "如果下雨，就在家。",
          "biga omyeon jibe isseoyo"
        ]
      ],
      "quiz": {
        "q": "“如果吃”常见连接形式是什么？",
        "a": "먹으면"
      }
    },
    {
      "id": "ko-connectors",
      "category": "初级 · 日常表达",
      "title": "그리고 / 하지만 / 그래서",
      "summary": "把简单句连接起来",
      "body": [
        "그리고 = 而且 / 然后；하지만 = 但是；그래서 = 所以。",
        "学会这些连接词后，你就能把短句慢慢说成完整的小段。"
      ],
      "examples": [
        [
          "커피를 좋아해요. 그리고 차도 좋아해요.",
          "我喜欢咖啡，也喜欢茶。",
          "keopireul joahaeyo. geurigo chado joahaeyo"
        ],
        [
          "피곤해요. 하지만 공부해요.",
          "很累，但是学习。",
          "pigonhaeyo. hajiman gongbuhaeyo"
        ],
        [
          "비가 와요. 그래서 집에 있어요.",
          "下雨了，所以在家。",
          "biga wayo. geuraeseo jibe isseoyo"
        ]
      ],
      "quiz": {
        "q": "“所以”最常见的韩语连接词是什么？",
        "a": "그래서"
      }
    },
    {
      "id": "ko-numbers",
      "category": "初级 · 生活场景",
      "title": "数字、时间和数量词",
      "summary": "认识固有数词和汉字数词的常见使用场景",
      "body": [
        "韩语常见两套数词。初级先掌握时间、年龄、个数里最常遇到的形式。",
        "하나/둘/셋/넷 常用于数东西；일/이/삼/사 常见于日期、号码、分钟等。"
      ],
      "examples": [
        [
          "한 개",
          "一个",
          "han gae"
        ],
        [
          "두 명",
          "两个人",
          "du myeong"
        ],
        [
          "세 시",
          "三点",
          "se si"
        ],
        [
          "십 분",
          "十分钟",
          "sip bun"
        ]
      ],
      "quiz": {
        "q": "“三点”常说 세 시 还是 삼 시？",
        "a": "세 시"
      }
    },
    {
      "id": "ko-ordering",
      "category": "初级 · 生活场景",
      "title": "点餐：주세요",
      "summary": "在餐厅和咖啡店最实用的表达",
      "body": [
        "주세요 表示“请给我……”，可以直接接在名词后面。",
        "想更自然地表达数量，可以加 하나、두 개 等。"
      ],
      "examples": [
        [
          "아메리카노 한 잔 주세요.",
          "请给我一杯美式咖啡。",
          "amerikano han jan juseyo"
        ],
        [
          "물 주세요.",
          "请给我水。",
          "mul juseyo"
        ],
        [
          "이거 주세요.",
          "请给我这个。",
          "igeo juseyo"
        ]
      ],
      "quiz": {
        "q": "“请给我这个”怎么说？",
        "a": "이거 주세요."
      }
    },
    {
      "id": "ko-shopping",
      "category": "初级 · 生活场景",
      "title": "购物与价格",
      "summary": "问价格、大小和是否有货",
      "body": [
        "얼마예요? = 多少钱？",
        "있어요? = 有吗？없어요? = 没有吗？"
      ],
      "examples": [
        [
          "이거 얼마예요?",
          "这个多少钱？",
          "igeo eolmayeyo"
        ],
        [
          "더 큰 거 있어요?",
          "有更大的吗？",
          "deo keun geo isseoyo"
        ],
        [
          "카드 돼요?",
          "可以刷卡吗？",
          "kadeu dwaeyo"
        ]
      ],
      "quiz": {
        "q": "“这个多少钱？”怎么说？",
        "a": "이거 얼마예요?"
      }
    },
    {
      "id": "ko-directions",
      "category": "初级 · 生活场景",
      "title": "问路与交通",
      "summary": "去哪、在哪、怎么走",
      "body": [
        "어디 = 哪里；어떻게 = 怎么；왼쪽 = 左边；오른쪽 = 右边。"
      ],
      "examples": [
        [
          "화장실이 어디예요?",
          "洗手间在哪里？",
          "hwajangsiri eodiyeyo"
        ],
        [
          "지하철역이 어디예요?",
          "地铁站在哪里？",
          "jihacheol-yeogi eodiyeyo"
        ],
        [
          "왼쪽으로 가세요.",
          "请往左走。",
          "oenjjogeuro gaseyo"
        ]
      ],
      "quiz": {
        "q": "“哪里”用韩语怎么说？",
        "a": "어디"
      }
    }
  ],
  "en": [
    {
      "id": "en-roadmap",
      "category": "六级后 · 学习路线",
      "title": "英语六级后怎么继续学",
      "summary": "从“考试英语”转向更自然、更准确、更有深度的阅读、表达与沟通",
      "body": [
        "你已经通过英语六级，所以这套英语不再从基础词汇和基础语法重新开始。",
        "重点放在 B2→C1 的高频进阶词汇、固定搭配、自然口语、长文阅读、信息判断和写作表达。",
        "词句库里“六级后·”主题是主学习内容；“基础巩固·”只用于偶尔查漏补缺。"
      ],
      "examples": [
        [
          "The issue is more nuanced than it appears at first glance.",
          "这个问题比乍看之下更复杂细致。",
          ""
        ],
        [
          "We need to take the long-term implications into account.",
          "我们需要把长期影响考虑进去。",
          ""
        ]
      ],
      "quiz": {
        "q": "六级以后继续学英语，最值得优先提升什么？",
        "a": "高频进阶词汇与搭配、自然表达、长文理解和准确输出，而不是重新从基础语法开始。"
      }
    },
    {
      "id": "en-cet4-vocab1",
      "category": "进阶 · 高频词汇",
      "title": "高频词：影响、变化与趋势",
      "summary": "掌握阅读中反复出现的核心抽象词",
      "body": [
        "进阶英语词汇不要只背中文释义，同时记搭配和常见词性变化。",
        "influence / affect / effect 很容易一起出现。"
      ],
      "examples": [
        [
          "significant",
          "重要的；显著的"
        ],
        [
          "influence",
          "影响（名词/动词）"
        ],
        [
          "increase",
          "增加；增长"
        ],
        [
          "decline",
          "下降；衰退"
        ],
        [
          "The policy had a significant effect on employment.",
          "这项政策对就业产生了显著影响。"
        ]
      ],
      "quiz": {
        "q": "“显著的”常见进阶英语词是什么？",
        "a": "significant"
      }
    },
    {
      "id": "en-cet4-vocab2",
      "category": "进阶 · 高频词汇",
      "title": "高频词：学习、工作与能力",
      "summary": "教育和职场主题常见词",
      "body": [
        "重点掌握 achieve、improve、maintain、efficient、opportunity 等在句子里的搭配。"
      ],
      "examples": [
        [
          "achieve",
          "实现；取得"
        ],
        [
          "maintain",
          "维持；保持"
        ],
        [
          "efficient",
          "高效的"
        ],
        [
          "opportunity",
          "机会"
        ],
        [
          "Regular practice helps learners maintain their progress.",
          "规律练习帮助学习者保持进步。"
        ]
      ],
      "quiz": {
        "q": "“高效的”对应哪个词？",
        "a": "efficient"
      }
    },
    {
      "id": "en-cet4-vocab3",
      "category": "进阶 · 高频词汇",
      "title": "高频词：社会、科技与环境",
      "summary": "进阶英语阅读常见社会议题词汇",
      "body": [
        "technology、environment、resource、consume、access 等词经常出现在说明文。"
      ],
      "examples": [
        [
          "resource",
          "资源"
        ],
        [
          "consume",
          "消耗；消费"
        ],
        [
          "access",
          "使用权；获取机会"
        ],
        [
          "environmental",
          "环境的"
        ],
        [
          "Technology gives people easier access to information.",
          "科技让人们更容易获取信息。"
        ]
      ],
      "quiz": {
        "q": "“获取……的机会/渠道”常用哪个词？",
        "a": "access"
      }
    },
    {
      "id": "en-collocation",
      "category": "进阶 · 高频词汇",
      "title": "固定搭配与介词",
      "summary": "减少“单词认识但句子不会用”的问题",
      "body": [
        "进阶英语写作和翻译里，固定搭配比生僻词更重要。",
        "把 depend on、contribute to、be responsible for、be aware of 当成整体记。"
      ],
      "examples": [
        [
          "depend on",
          "依赖；取决于"
        ],
        [
          "contribute to",
          "促成；有助于"
        ],
        [
          "be responsible for",
          "对……负责"
        ],
        [
          "be aware of",
          "意识到"
        ],
        [
          "Good sleep contributes to better concentration.",
          "良好睡眠有助于提高注意力。"
        ]
      ],
      "quiz": {
        "q": "“有助于”常用哪个搭配？",
        "a": "contribute to"
      }
    },
    {
      "id": "en-wordformation",
      "category": "进阶 · 高频词汇",
      "title": "词性与词形变化",
      "summary": "用词根和词性识别陌生词",
      "body": [
        "阅读里常见同一词根的不同词性：decide / decision / decisive。",
        "看到 -tion 常提示名词，-ive 常提示形容词，但不要把词缀规则当绝对规律。"
      ],
      "examples": [
        [
          "decide → decision",
          "决定（动词）→ 决定（名词）"
        ],
        [
          "create → creative",
          "创造 → 有创造力的"
        ],
        [
          "possible → possibility",
          "可能的 → 可能性"
        ]
      ],
      "quiz": {
        "q": "decision 的词性是什么？",
        "a": "名词"
      }
    },
    {
      "id": "en-tense",
      "category": "进阶 · 语法与长难句",
      "title": "时态：先看时间线",
      "summary": "进阶英语里先判断动作发生时间，再判断完成与持续",
      "body": [
        "不要只背“时态公式”，先找 yesterday、since、by the time 等时间线索。",
        "现在完成时常连接过去和现在；过去完成时常表示“过去的过去”。"
      ],
      "examples": [
        [
          "I have studied English for four years.",
          "我已经学英语四年了。"
        ],
        [
          "By the time we arrived, the meeting had ended.",
          "我们到时，会议已经结束了。"
        ]
      ],
      "quiz": {
        "q": "“过去的过去”常用什么时态？",
        "a": "过去完成时"
      }
    },
    {
      "id": "en-nonfinite",
      "category": "进阶 · 语法与长难句",
      "title": "非谓语：to do / doing / done",
      "summary": "识别句子里不充当主要谓语的动词形式",
      "body": [
        "长句中先找到真正的谓语，再看 to do、doing、done 在句中作什么成分。",
        "非谓语经常压缩从句，让句子显得更长。"
      ],
      "examples": [
        [
          "To improve your English, read every day.",
          "为了提高英语，每天阅读。"
        ],
        [
          "Students preparing for the exam often feel stressed.",
          "正在备考的学生常感到压力。"
        ],
        [
          "The data collected last year are useful.",
          "去年收集的数据很有用。"
        ]
      ],
      "quiz": {
        "q": "分析非谓语前，第一步先找什么？",
        "a": "句子的真正谓语。"
      }
    },
    {
      "id": "en-relative",
      "category": "进阶 · 语法与长难句",
      "title": "定语从句 who / which / that",
      "summary": "看清从句修饰哪个名词",
      "body": [
        "who 常指人，which 常指物，that 可指人或物。",
        "阅读时把定语从句暂时括起来，先读主句主干，再回来补充修饰信息。"
      ],
      "examples": [
        [
          "People who exercise regularly tend to sleep better.",
          "经常锻炼的人往往睡得更好。"
        ],
        [
          "The book that I bought yesterday is useful.",
          "我昨天买的那本书很有用。"
        ]
      ],
      "quiz": {
        "q": "定语从句最重要的是找出它修饰什么？",
        "a": "前面的先行词（名词/代词）。"
      }
    },
    {
      "id": "en-nounclause",
      "category": "进阶 · 语法与长难句",
      "title": "名词性从句 that / whether / what",
      "summary": "识别“整段从句当名词用”的情况",
      "body": [
        "that 引导的从句常作宾语或主语；whether 表示“是否”；what 自身在从句里还充当成分。"
      ],
      "examples": [
        [
          "The report shows that prices are rising.",
          "报告显示价格正在上涨。"
        ],
        [
          "Whether the plan will work remains unclear.",
          "这个计划是否有效仍不明确。"
        ]
      ],
      "quiz": {
        "q": "whether 通常表示什么含义？",
        "a": "是否"
      }
    },
    {
      "id": "en-cet4-sentence",
      "category": "进阶 · 语法与长难句",
      "title": "长难句：先找主干，再拆修饰",
      "summary": "阅读长句时不要从头逐词翻译",
      "body": [
        "先圈出主句主语和谓语，再处理从句、非谓语、介词短语。",
        "如果一个句子很长，先问自己：“谁做了什么？”"
      ],
      "examples": [
        [
          "People who exercise regularly are more likely to stay healthy.",
          "经常锻炼的人更有可能保持健康。"
        ],
        [
          "The report, published last week, shows that the problem is more serious than expected.",
          "上周发布的报告显示，这个问题比预期更严重。"
        ]
      ],
      "quiz": {
        "q": "阅读长句的第一步是什么？",
        "a": "找主句主干。"
      }
    },
    {
      "id": "en-reading-locate",
      "category": "进阶 · 阅读",
      "title": "定位：先找关键词",
      "summary": "用数字、专有名词和核心概念快速回原文",
      "body": [
        "不要一做题就重新全文精读。",
        "先从题干里找最容易定位的词，再去原文附近比较信息。"
      ],
      "examples": [
        [
          "numbers / dates",
          "数字和日期很适合定位"
        ],
        [
          "names / places",
          "人名和地名通常比较醒目"
        ],
        [
          "key concepts",
          "核心概念可能会被同义替换"
        ]
      ],
      "quiz": {
        "q": "最适合快速定位的线索有哪些？",
        "a": "数字、日期、人名、地名、专有名词等。"
      }
    },
    {
      "id": "en-cet4-reading",
      "category": "进阶 · 阅读",
      "title": "同义替换",
      "summary": "题干和原文常故意不用同一个词",
      "body": [
        "increase → rise / grow；important → significant / essential。",
        "进阶英语阅读很多错误都来自“只找一模一样的词”。"
      ],
      "examples": [
        [
          "increase → rise / grow",
          "增加"
        ],
        [
          "important → significant / essential",
          "重要"
        ],
        [
          "reduce → decrease / cut",
          "减少"
        ]
      ],
      "quiz": {
        "q": "题干找不到原词时应该重点找什么？",
        "a": "同义词、近义表达和词性变化。"
      }
    },
    {
      "id": "en-reading-main",
      "category": "进阶 · 阅读",
      "title": "主旨与段落结构",
      "summary": "区分主题句、例子和细节",
      "body": [
        "说明文常在段首或段尾给出主题句，中间用例子和数据支撑。",
        "主旨题不要选只覆盖一个细节的选项。"
      ],
      "examples": [
        [
          "topic sentence",
          "主题句"
        ],
        [
          "supporting detail",
          "支撑细节"
        ],
        [
          "example / evidence",
          "例子 / 证据"
        ]
      ],
      "quiz": {
        "q": "主旨题最忌讳选什么样的答案？",
        "a": "只概括局部细节、不能覆盖全文或全段的答案。"
      }
    },
    {
      "id": "en-inference",
      "category": "进阶 · 阅读",
      "title": "推断题：只走一步",
      "summary": "根据原文合理推出，不要脑补",
      "body": [
        "正确推断必须有原文依据，只是换了表达方式。",
        "如果选项需要很多额外常识才能成立，通常要谨慎。"
      ],
      "examples": [
        [
          "The author implies that...",
          "作者暗示……"
        ],
        [
          "It can be inferred that...",
          "可以推断……"
        ]
      ],
      "quiz": {
        "q": "做推断题时最重要的原则是什么？",
        "a": "推断必须有原文证据，不要过度脑补。"
      }
    },
    {
      "id": "en-listening",
      "category": "进阶 · 听力",
      "title": "转折词后的信息更重要",
      "summary": "抓 but / however / actually / instead 后面的重点",
      "body": [
        "进阶英语听力里说话人常先给一个背景，再用转折表达真正态度。",
        "听到 but、however、actually 时要集中注意力。"
      ],
      "examples": [
        [
          "I planned to go, but I had to work.",
          "我本来打算去，但我得工作。"
        ],
        [
          "It looks expensive. Actually, it is on sale.",
          "看起来很贵，其实正在打折。"
        ]
      ],
      "quiz": {
        "q": "听到 but / however 后应该怎么做？",
        "a": "提高注意力，后面往往是重点或真实态度。"
      }
    },
    {
      "id": "en-listening-numbers",
      "category": "进阶 · 听力",
      "title": "数字、时间和否定信息",
      "summary": "避免把听到的第一个数字直接当答案",
      "body": [
        "对话里可能出现“原计划时间”和“实际时间”。",
        "not、hardly、rarely 等否定信息也容易改变句意。"
      ],
      "examples": [
        [
          "The meeting was moved from 2 p.m. to 3:30 p.m.",
          "会议从下午2点改到3点半。"
        ],
        [
          "She rarely eats out.",
          "她很少在外面吃饭。"
        ]
      ],
      "quiz": {
        "q": "听到两个时间时应该直接选第一个吗？",
        "a": "不能，要判断哪个是最终确认的信息。"
      }
    },
    {
      "id": "en-cet4-writing",
      "category": "进阶 · 写作",
      "title": "三段式：观点—原因—结论",
      "summary": "先写清楚，再追求高级表达",
      "body": [
        "第一段说明主题和立场；第二段给原因或例子；第三段总结。",
        "进阶英语写作更看重清晰、连贯和语法正确。"
      ],
      "examples": [
        [
          "In my view, good habits are essential to effective learning.",
          "在我看来，良好习惯对有效学习很重要。"
        ],
        [
          "One reason is that regular practice helps us remember more.",
          "一个原因是规律练习能帮助我们记住更多。"
        ],
        [
          "Therefore, it is important to build a sustainable routine.",
          "因此，建立可持续的习惯很重要。"
        ]
      ],
      "quiz": {
        "q": "进阶英语写作比堆难词更重要的是什么？",
        "a": "表达清楚、结构连贯、语法正确。"
      }
    },
    {
      "id": "en-writing-linkers",
      "category": "进阶 · 写作",
      "title": "连接词让文章更连贯",
      "summary": "用少量稳定连接表达组织逻辑",
      "body": [
        "补充：in addition / moreover；转折：however；结果：therefore；举例：for example。",
        "不要每句话都用一个连接词，适量即可。"
      ],
      "examples": [
        [
          "In addition, regular exercise improves sleep quality.",
          "此外，规律运动能改善睡眠质量。"
        ],
        [
          "However, too much screen time may reduce concentration.",
          "然而，过多屏幕时间可能降低注意力。"
        ]
      ],
      "quiz": {
        "q": "“然而”常用哪个连接词？",
        "a": "however"
      }
    },
    {
      "id": "en-translation",
      "category": "进阶 · 翻译",
      "title": "汉译英：先拆成简单逻辑",
      "summary": "先保证主谓清楚，再补修饰",
      "body": [
        "遇到很长的中文句子，可以先拆成两句或先确定主干。",
        "翻译时不要逐字对应，优先选择自然且自己确定的表达。"
      ],
      "examples": [
        [
          "越来越多的年轻人开始关注健康。",
          "More and more young people are beginning to pay attention to their health."
        ],
        [
          "科技改变了人们获取信息的方式。",
          "Technology has changed the way people access information."
        ]
      ],
      "quiz": {
        "q": "汉译英时第一步应该先确定什么？",
        "a": "句子主干和逻辑关系。"
      }
    }
  ],
  "th": [
    {
      "id": "th-roadmap",
      "category": "初级 · 学习路线",
      "title": "泰语初级怎么学",
      "summary": "先认字母与发音，再掌握最常用句型和生活表达",
      "body": [
        "泰语初级建议按“字母/发音 → 基础句型 → 问句否定 → 日常场景”学习。",
        "网站里的音译是简化发音参考，只帮助入门；真正发音仍以“聆听”和老师/母语音频为准。",
        "泰语没有韩语语法书里那种统一的前置“-”连接符体系，很多语法通过独立词或词序表达。"
      ],
      "examples": [
        [
          "สวัสดี",
          "你好",
          "sawatdi"
        ],
        [
          "ขอบคุณ",
          "谢谢",
          "khop khun"
        ],
        [
          "ไม่เป็นไร",
          "没关系",
          "mai pen rai"
        ]
      ],
      "quiz": {
        "q": "泰语初级的音译应该当作最终标准发音吗？",
        "a": "不应该，只是入门辅助，仍要结合聆听。"
      }
    },
    {
      "id": "th-consonants",
      "category": "初级 · 发音",
      "title": "常见辅音先认识",
      "summary": "先熟悉高频字母的形状和大致音值",
      "body": [
        "泰语共有较多辅音字母，初级不需要一次背完。",
        "先从 ก ข ค ง จ ช ด ต น บ ป ม ย ร ล ว ส ห อ 这些常见字母开始认形。"
      ],
      "examples": [
        [
          "ก",
          "常见辅音字母",
          "k / g 类音"
        ],
        [
          "น",
          "常见辅音字母",
          "n"
        ],
        [
          "ม",
          "常见辅音字母",
          "m"
        ],
        [
          "ร",
          "常见辅音字母",
          "r"
        ]
      ],
      "quiz": {
        "q": "初级学泰语辅音最重要的是一次背完44个吗？",
        "a": "不是，先认高频字母并结合词语反复见。"
      }
    },
    {
      "id": "th-vowels",
      "category": "初级 · 发音",
      "title": "常见元音 า ิ ี ุ ู เ แ โ",
      "summary": "认识元音可能写在辅音前后上下",
      "body": [
        "泰语元音符号的位置不像中文拼音那样固定，可能出现在辅音的前、后、上、下。",
        "看到单词时要把整个音节一起识别。"
      ],
      "examples": [
        [
          "กา",
          "示例音节",
          "kaa"
        ],
        [
          "มี",
          "有",
          "mii"
        ],
        [
          "ดู",
          "看",
          "duu"
        ],
        [
          "ไป",
          "去",
          "pai"
        ]
      ],
      "quiz": {
        "q": "泰语元音一定写在辅音后面吗？",
        "a": "不一定，可能写在前后上下。"
      }
    },
    {
      "id": "th-tones",
      "category": "初级 · 发音",
      "title": "声调先建立概念",
      "summary": "泰语声调由辅音类别、元音长短、尾音和声调符号共同决定",
      "body": [
        "泰语有5个声调。",
        "初级不要只看音译猜声调，要把单词整体和声音一起记。",
        "声调规则较多，本课先建立“声调不是只看一个符号”的概念。"
      ],
      "examples": [
        [
          "มา",
          "来",
          "maa"
        ],
        [
          "ไม่",
          "不",
          "mai"
        ],
        [
          "ไหม",
          "吗（疑问语气）",
          "mai"
        ]
      ],
      "quiz": {
        "q": "泰语声调只由声调符号决定吗？",
        "a": "不是，还与辅音类别、元音和尾音等有关。"
      }
    },
    {
      "id": "th-polite",
      "category": "初级 · 日常表达",
      "title": "ครับ / ค่ะ 礼貌语尾",
      "summary": "让日常表达听起来更礼貌",
      "body": [
        "男性说话者常用 ครับ（khrap），女性说话者常用 ค่ะ/คะ（kha）。",
        "在问候、感谢、回答等场景中很常见。"
      ],
      "examples": [
        [
          "สวัสดีครับ",
          "你好（男性说话者）",
          "sawatdi khrap"
        ],
        [
          "สวัสดีค่ะ",
          "你好（女性说话者）",
          "sawatdi kha"
        ],
        [
          "ขอบคุณครับ",
          "谢谢（男性说话者）",
          "khop khun khrap"
        ]
      ],
      "quiz": {
        "q": "女性说话者常见礼貌语尾是什么？",
        "a": "ค่ะ / คะ（kha）"
      }
    },
    {
      "id": "th-hello",
      "category": "初级 · 日常表达",
      "title": "问候、感谢与道歉",
      "summary": "最先能用起来的一组表达",
      "body": [
        "สวัสดี = 你好；ขอบคุณ = 谢谢；ขอโทษ = 对不起 / 不好意思。"
      ],
      "examples": [
        [
          "สวัสดี",
          "你好",
          "sawatdi"
        ],
        [
          "ขอบคุณ",
          "谢谢",
          "khop khun"
        ],
        [
          "ขอโทษ",
          "对不起 / 不好意思",
          "kho thot"
        ],
        [
          "ไม่เป็นไร",
          "没关系",
          "mai pen rai"
        ]
      ],
      "quiz": {
        "q": "“谢谢”用泰语怎么说？",
        "a": "ขอบคุณ"
      }
    },
    {
      "id": "th-pronouns",
      "category": "初级 · 基础句型",
      "title": "我、你、他：常用人称",
      "summary": "先掌握最常见的基础代词",
      "body": [
        "ผม 常用于男性自称“我”；ฉัน 常用于女性或较一般的“我”；คุณ = 您/你。",
        "真实泰语会根据关系和场合选择不同代词，初级先掌握这些通用形式。"
      ],
      "examples": [
        [
          "ผม",
          "我（男性常用）",
          "phom"
        ],
        [
          "ฉัน",
          "我（女性常用）",
          "chan"
        ],
        [
          "คุณ",
          "你 / 您",
          "khun"
        ],
        [
          "เขา",
          "他 / 她",
          "khao"
        ]
      ],
      "quiz": {
        "q": "比较通用的“你/您”怎么说？",
        "a": "คุณ"
      }
    },
    {
      "id": "th-be",
      "category": "初级 · 基础句型",
      "title": "เป็น / คือ：表达“是”",
      "summary": "身份、类别和定义里的常用词",
      "body": [
        "เป็น 常用于身份、职业、状态等；คือ 常用于解释或定义“也就是……”。",
        "泰语很多简单句不需要像英语一样每句都出现 be 动词。"
      ],
      "examples": [
        [
          "ฉันเป็นนักเรียน",
          "我是学生",
          "chan pen nakrian"
        ],
        [
          "เขาเป็นคนไทย",
          "他/她是泰国人",
          "khao pen khon thai"
        ],
        [
          "นี่คืออะไร",
          "这是什么",
          "nii khue arai"
        ]
      ],
      "quiz": {
        "q": "“我是学生”常用哪个词表示“是”？",
        "a": "เป็น"
      }
    },
    {
      "id": "th-have",
      "category": "初级 · 基础句型",
      "title": "มี / ไม่มี",
      "summary": "表达“有 / 没有”",
      "body": [
        "มี = 有；ไม่มี = 没有。",
        "泰语否定常在前面加 ไม่。"
      ],
      "examples": [
        [
          "มีเวลา",
          "有时间",
          "mii wela"
        ],
        [
          "ไม่มีเวลา",
          "没有时间",
          "mai mii wela"
        ],
        [
          "มีน้ำไหม",
          "有水吗？",
          "mii nam mai"
        ]
      ],
      "quiz": {
        "q": "“没有”怎么说？",
        "a": "ไม่มี（mai mii）"
      }
    },
    {
      "id": "th-negation",
      "category": "初级 · 基础句型",
      "title": "ไม่：最常用否定词",
      "summary": "放在动词或形容词前表达“不……”",
      "body": [
        "ไม่ 通常放在要否定的动词或形容词前面。",
        "ไม่ไป = 不去；ไม่รู้ = 不知道；ไม่แพง = 不贵。"
      ],
      "examples": [
        [
          "ไม่ไป",
          "不去",
          "mai pai"
        ],
        [
          "ไม่รู้",
          "不知道",
          "mai ruu"
        ],
        [
          "ไม่แพง",
          "不贵",
          "mai phaeng"
        ]
      ],
      "quiz": {
        "q": "泰语最常用的否定词是什么？",
        "a": "ไม่（mai）"
      }
    },
    {
      "id": "th-question-mai",
      "category": "初级 · 基础句型",
      "title": "ไหม：把陈述句变成一般疑问句",
      "summary": "句尾加 ไหม 表达“……吗？”",
      "body": [
        "很多情况下，在句末加 ไหม 就可以构成“是吗 / 做吗 / 有吗”一类问题。",
        "不要把 ไหม 和否定词 ไม่ 混淆，音译都可能写 mai，但泰文字不同、作用不同。"
      ],
      "examples": [
        [
          "สบายดีไหม",
          "你好吗？",
          "sabai dii mai"
        ],
        [
          "ชอบไหม",
          "喜欢吗？",
          "chop mai"
        ],
        [
          "มีไหม",
          "有吗？",
          "mii mai"
        ]
      ],
      "quiz": {
        "q": "表示一般疑问“……吗？”的常见句尾词是什么？",
        "a": "ไหม"
      }
    },
    {
      "id": "th-questionwords",
      "category": "初级 · 基础句型",
      "title": "什么、哪里、谁、什么时候",
      "summary": "用疑问词获取具体信息",
      "body": [
        "อะไร = 什么；ที่ไหน = 哪里；ใคร = 谁；เมื่อไหร่ = 什么时候。"
      ],
      "examples": [
        [
          "นี่คืออะไร",
          "这是什么？",
          "nii khue arai"
        ],
        [
          "ห้องน้ำอยู่ที่ไหน",
          "洗手间在哪里？",
          "hong nam yuu thii nai"
        ],
        [
          "เขาเป็นใคร",
          "他/她是谁？",
          "khao pen khrai"
        ]
      ],
      "quiz": {
        "q": "“哪里”怎么说？",
        "a": "ที่ไหน（thii nai）"
      }
    },
    {
      "id": "th-want",
      "category": "初级 · 常用表达",
      "title": "อยาก + 动词",
      "summary": "表达“想做……”",
      "notation": "泰语这里不使用韩语语法书那种前置“-”连接标记。อยาก 是独立词，直接放在动词前：อยาก + 动词。",
      "body": [
        "อยากกิน = 想吃；อยากไป = 想去；อยากเรียน = 想学。"
      ],
      "examples": [
        [
          "อยากกิน",
          "想吃",
          "yak kin"
        ],
        [
          "อยากไป",
          "想去",
          "yak pai"
        ],
        [
          "อยากเรียนภาษาไทย",
          "想学泰语",
          "yak rian phasa thai"
        ]
      ],
      "quiz": {
        "q": "“想去”怎么说？",
        "a": "อยากไป"
      }
    },
    {
      "id": "th-like",
      "category": "初级 · 常用表达",
      "title": "ชอบ / ไม่ชอบ",
      "summary": "表达喜欢和不喜欢",
      "body": [
        "ชอบ = 喜欢；ไม่ชอบ = 不喜欢。",
        "后面可以直接接名词或动词。"
      ],
      "examples": [
        [
          "ชอบกาแฟ",
          "喜欢咖啡",
          "chop kafae"
        ],
        [
          "ชอบดูหนัง",
          "喜欢看电影",
          "chop duu nang"
        ],
        [
          "ไม่ชอบเผ็ด",
          "不喜欢辣",
          "mai chop phet"
        ]
      ],
      "quiz": {
        "q": "“不喜欢”怎么说？",
        "a": "ไม่ชอบ"
      }
    },
    {
      "id": "th-numbers",
      "category": "初级 · 生活场景",
      "title": "数字 1–10 与价格",
      "summary": "购物、时间和数量最先用到的数字",
      "body": [
        "1–10：หนึ่ง สอง สาม สี่ ห้า หก เจ็ด แปด เก้า สิบ。",
        "初级先学听懂和认出常见价格。"
      ],
      "examples": [
        [
          "หนึ่ง",
          "一",
          "nueng"
        ],
        [
          "สอง",
          "二",
          "song"
        ],
        [
          "ห้า",
          "五",
          "ha"
        ],
        [
          "สิบ",
          "十",
          "sip"
        ],
        [
          "หนึ่งร้อย",
          "一百",
          "nueng roi"
        ]
      ],
      "quiz": {
        "q": "“十”怎么说？",
        "a": "สิบ（sip）"
      }
    },
    {
      "id": "th-time",
      "category": "初级 · 生活场景",
      "title": "今天、明天和时间",
      "summary": "约时间最常用的一组词",
      "body": [
        "วันนี้ = 今天；พรุ่งนี้ = 明天；เมื่อวาน = 昨天；ตอนนี้ = 现在。",
        "泰语报时体系有自己的习惯，初级先掌握整点和这些时间词。"
      ],
      "examples": [
        [
          "วันนี้",
          "今天",
          "wan nii"
        ],
        [
          "พรุ่งนี้",
          "明天",
          "phrung nii"
        ],
        [
          "ตอนนี้",
          "现在",
          "ton nii"
        ],
        [
          "กี่โมง",
          "几点？",
          "kii mong"
        ]
      ],
      "quiz": {
        "q": "“几点？”怎么说？",
        "a": "กี่โมง"
      }
    },
    {
      "id": "th-food",
      "category": "初级 · 生活场景",
      "title": "点餐：เอา / ขอ",
      "summary": "表达“我要……”和“请给我……”",
      "body": [
        "เอา… = 要……；ขอ… = 请给我…… / 我想要……，语气通常更礼貌自然。",
        "点餐时配合 ครับ/ค่ะ 会更礼貌。"
      ],
      "examples": [
        [
          "เอาอันนี้",
          "我要这个",
          "ao an nii"
        ],
        [
          "ขอน้ำหนึ่งขวด",
          "请给我一瓶水",
          "kho nam nueng khuat"
        ],
        [
          "ไม่เผ็ดครับ",
          "不要辣 / 不辣，谢谢（男性）",
          "mai phet khrap"
        ]
      ],
      "quiz": {
        "q": "“我要这个”怎么说？",
        "a": "เอาอันนี้"
      }
    },
    {
      "id": "th-shopping",
      "category": "初级 · 生活场景",
      "title": "购物：多少钱、太贵了",
      "summary": "市场和商店里最实用的表达",
      "body": [
        "เท่าไหร่ = 多少 / 多少钱；แพง = 贵；ลดได้ไหม = 可以便宜一点吗？"
      ],
      "examples": [
        [
          "อันนี้เท่าไหร่",
          "这个多少钱？",
          "an nii thao rai"
        ],
        [
          "แพงไป",
          "太贵了",
          "phaeng pai"
        ],
        [
          "ลดได้ไหม",
          "可以便宜一点吗？",
          "lot dai mai"
        ]
      ],
      "quiz": {
        "q": "“多少钱？”常用哪个词？",
        "a": "เท่าไหร่"
      }
    },
    {
      "id": "th-location",
      "category": "初级 · 生活场景",
      "title": "在哪里：อยู่ + 地点",
      "summary": "问位置和说明所在地点",
      "body": [
        "อยู่ 可以表示“在、位于”。",
        "问“在哪里”常用 อยู่ที่ไหน。"
      ],
      "examples": [
        [
          "ห้องน้ำอยู่ที่ไหน",
          "洗手间在哪里？",
          "hong nam yuu thii nai"
        ],
        [
          "ฉันอยู่ที่โรงแรม",
          "我在酒店。",
          "chan yuu thii rongraem"
        ],
        [
          "สถานีอยู่ใกล้ไหม",
          "车站近吗？",
          "sathanii yuu klai mai"
        ]
      ],
      "quiz": {
        "q": "“在哪里？”常见结构是什么？",
        "a": "อยู่ที่ไหน"
      }
    },
    {
      "id": "th-futurepast",
      "category": "初级 · 常用表达",
      "title": "จะ / แล้ว：将要与已经",
      "summary": "用简单时间词表达未来和完成",
      "body": [
        "จะ 放在动词前常表示将要 / 会；แล้ว 放在句中或句尾常表示“已经、……了”。",
        "泰语不像英语那样必须通过动词词形变化表达时态。"
      ],
      "examples": [
        [
          "จะไปพรุ่งนี้",
          "明天要去",
          "ja pai phrung nii"
        ],
        [
          "กินแล้ว",
          "已经吃了",
          "kin laeo"
        ],
        [
          "กลับแล้ว",
          "已经回去了",
          "klap laeo"
        ]
      ],
      "quiz": {
        "q": "表示“将要”常用哪个词？",
        "a": "จะ（ja）"
      }
    }
  ]
};


const BUILTIN_MATERIALS = {
  "ko": [
    {
      "type": "word",
      "front": "사람",
      "meaning": "人",
      "romanization": "saram",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "친구",
      "meaning": "朋友",
      "romanization": "chingu",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "가족",
      "meaning": "家人；家庭",
      "romanization": "gajok",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "엄마",
      "meaning": "妈妈",
      "romanization": "eomma",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "아빠",
      "meaning": "爸爸",
      "romanization": "appa",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "선생님",
      "meaning": "老师",
      "romanization": "seonsaengnim",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "학생",
      "meaning": "学生",
      "romanization": "haksaeng",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "학교",
      "meaning": "学校",
      "romanization": "hakgyo",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "회사",
      "meaning": "公司",
      "romanization": "hoesa",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "집",
      "meaning": "家",
      "romanization": "jip",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "방",
      "meaning": "房间",
      "romanization": "bang",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "가게",
      "meaning": "商店",
      "romanization": "gage",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "식당",
      "meaning": "餐厅",
      "romanization": "sikdang",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "카페",
      "meaning": "咖啡店",
      "romanization": "kape",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "병원",
      "meaning": "医院",
      "romanization": "byeongwon",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "은행",
      "meaning": "银行",
      "romanization": "eunhaeng",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "지하철",
      "meaning": "地铁",
      "romanization": "jihacheol",
      "topic": "交通"
    },
    {
      "type": "word",
      "front": "버스",
      "meaning": "公交车",
      "romanization": "beoseu",
      "topic": "交通"
    },
    {
      "type": "word",
      "front": "오늘",
      "meaning": "今天",
      "romanization": "oneul",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "내일",
      "meaning": "明天",
      "romanization": "naeil",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "어제",
      "meaning": "昨天",
      "romanization": "eoje",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "아침",
      "meaning": "早上；早餐",
      "romanization": "achim",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "점심",
      "meaning": "中午；午饭",
      "romanization": "jeomsim",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "저녁",
      "meaning": "晚上；晚饭",
      "romanization": "jeonyeok",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "지금",
      "meaning": "现在",
      "romanization": "jigeum",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "시간",
      "meaning": "时间",
      "romanization": "sigan",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "물",
      "meaning": "水",
      "romanization": "mul",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "밥",
      "meaning": "饭；米饭",
      "romanization": "bap",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "커피",
      "meaning": "咖啡",
      "romanization": "keopi",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "우유",
      "meaning": "牛奶",
      "romanization": "uyu",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "빵",
      "meaning": "面包",
      "romanization": "ppang",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "과일",
      "meaning": "水果",
      "romanization": "gwail",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "사과",
      "meaning": "苹果",
      "romanization": "sagwa",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "고기",
      "meaning": "肉",
      "romanization": "gogi",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "음식",
      "meaning": "食物",
      "romanization": "eumsik",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "가다",
      "meaning": "去",
      "romanization": "gada",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "오다",
      "meaning": "来",
      "romanization": "oda",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "먹다",
      "meaning": "吃",
      "romanization": "meokda",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "마시다",
      "meaning": "喝",
      "romanization": "masida",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "보다",
      "meaning": "看",
      "romanization": "boda",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "듣다",
      "meaning": "听",
      "romanization": "deutda",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "말하다",
      "meaning": "说",
      "romanization": "malhada",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "공부하다",
      "meaning": "学习",
      "romanization": "gongbuhada",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "일하다",
      "meaning": "工作",
      "romanization": "ilhada",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "자다",
      "meaning": "睡觉",
      "romanization": "jada",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "일어나다",
      "meaning": "起床",
      "romanization": "ireonada",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "좋아하다",
      "meaning": "喜欢",
      "romanization": "joahada",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "싫어하다",
      "meaning": "不喜欢；讨厌",
      "romanization": "sireohada",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "알다",
      "meaning": "知道",
      "romanization": "alda",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "모르다",
      "meaning": "不知道",
      "romanization": "moreuda",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "있다",
      "meaning": "有；在",
      "romanization": "itda",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "없다",
      "meaning": "没有；不在",
      "romanization": "eopda",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "크다",
      "meaning": "大",
      "romanization": "keuda",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "작다",
      "meaning": "小",
      "romanization": "jakda",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "좋다",
      "meaning": "好",
      "romanization": "jota",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "나쁘다",
      "meaning": "不好；坏",
      "romanization": "nappeuda",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "많다",
      "meaning": "多",
      "romanization": "manta",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "적다",
      "meaning": "少",
      "romanization": "jeokda",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "빠르다",
      "meaning": "快",
      "romanization": "ppareuda",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "느리다",
      "meaning": "慢",
      "romanization": "neurida",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "쉽다",
      "meaning": "容易",
      "romanization": "swipda",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "어렵다",
      "meaning": "难",
      "romanization": "eoryeopda",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "예쁘다",
      "meaning": "漂亮",
      "romanization": "yeppeuda",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "재미있다",
      "meaning": "有趣",
      "romanization": "jaemiitda",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "바쁘다",
      "meaning": "忙",
      "romanization": "bappeuda",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "피곤하다",
      "meaning": "累；疲惫",
      "romanization": "pigonhada",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "비싸다",
      "meaning": "贵",
      "romanization": "bissada",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "싸다",
      "meaning": "便宜",
      "romanization": "ssada",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "춥다",
      "meaning": "冷（天气）",
      "romanization": "chupda",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "덥다",
      "meaning": "热（天气）",
      "romanization": "deopda",
      "topic": "形容词"
    },
    {
      "type": "sentence",
      "front": "안녕하세요.",
      "meaning": "你好。",
      "romanization": "annyeonghaseyo",
      "topic": "问候"
    },
    {
      "type": "sentence",
      "front": "감사합니다.",
      "meaning": "谢谢。",
      "romanization": "gamsahamnida",
      "topic": "问候"
    },
    {
      "type": "sentence",
      "front": "죄송합니다.",
      "meaning": "对不起。",
      "romanization": "joesonghamnida",
      "topic": "问候"
    },
    {
      "type": "sentence",
      "front": "괜찮아요.",
      "meaning": "没关系 / 我没事。",
      "romanization": "gwaenchanayo",
      "topic": "问候"
    },
    {
      "type": "sentence",
      "front": "저는 학생이에요.",
      "meaning": "我是学生。",
      "romanization": "jeoneun haksaeng-ieyo",
      "topic": "自我介绍"
    },
    {
      "type": "sentence",
      "front": "저는 중국 사람입니다.",
      "meaning": "我是中国人。",
      "romanization": "jeoneun jung-guk saram-imnida",
      "topic": "自我介绍"
    },
    {
      "type": "sentence",
      "front": "이름이 뭐예요?",
      "meaning": "你叫什么名字？",
      "romanization": "ireumi mwoyeyo",
      "topic": "自我介绍"
    },
    {
      "type": "sentence",
      "front": "제 이름은 민지예요.",
      "meaning": "我的名字是敏智。",
      "romanization": "je ireumeun minji-yeyo",
      "topic": "自我介绍"
    },
    {
      "type": "sentence",
      "front": "어디에서 왔어요?",
      "meaning": "你从哪里来？",
      "romanization": "eodieseo wasseoyo",
      "topic": "自我介绍"
    },
    {
      "type": "sentence",
      "front": "한국어를 공부해요.",
      "meaning": "我学习韩语。",
      "romanization": "hangugeoreul gongbuhaeyo",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "영어도 공부해요.",
      "meaning": "英语也学习。",
      "romanization": "yeongeodo gongbuhaeyo",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "이 단어가 어려워요.",
      "meaning": "这个单词很难。",
      "romanization": "i daneoga eoryeowoyo",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "다시 말해 주세요.",
      "meaning": "请再说一遍。",
      "romanization": "dasi malhae juseyo",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "천천히 말해 주세요.",
      "meaning": "请慢一点说。",
      "romanization": "cheoncheonhi malhae juseyo",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "잘 모르겠어요.",
      "meaning": "我不太明白。",
      "romanization": "jal moreugesseoyo",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "오늘 학교에 가요.",
      "meaning": "今天去学校。",
      "romanization": "oneul hakgyoe gayo",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "지금 집에 있어요.",
      "meaning": "现在在家。",
      "romanization": "jigeum jibe isseoyo",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "아침에 커피를 마셔요.",
      "meaning": "早上喝咖啡。",
      "romanization": "achime keopireul masyeoyo",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "점심에 밥을 먹어요.",
      "meaning": "中午吃饭。",
      "romanization": "jeomsime babeul meogeoyo",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "저녁에 운동해요.",
      "meaning": "晚上运动。",
      "romanization": "jeonyeoge undonghaeyo",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "오늘은 조금 바빠요.",
      "meaning": "今天有点忙。",
      "romanization": "oneureun jogeum bappayo",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "내일 시간이 있어요?",
      "meaning": "明天有时间吗？",
      "romanization": "naeil sigani isseoyo",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "친구를 만나고 싶어요.",
      "meaning": "我想见朋友。",
      "romanization": "chingureul mannago sipeoyo",
      "topic": "愿望"
    },
    {
      "type": "sentence",
      "front": "한국에 가고 싶어요.",
      "meaning": "我想去韩国。",
      "romanization": "hanguge gago sipeoyo",
      "topic": "愿望"
    },
    {
      "type": "sentence",
      "front": "떡볶이를 먹고 싶어요.",
      "meaning": "我想吃辣炒年糕。",
      "romanization": "tteokbokkireul meokgo sipeoyo",
      "topic": "愿望"
    },
    {
      "type": "sentence",
      "front": "물을 마시고 싶어요.",
      "meaning": "我想喝水。",
      "romanization": "mureul masigo sipeoyo",
      "topic": "愿望"
    },
    {
      "type": "sentence",
      "front": "이거 주세요.",
      "meaning": "请给我这个。",
      "romanization": "igeo juseyo",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "얼마예요?",
      "meaning": "多少钱？",
      "romanization": "eolmayeyo",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "조금 비싸요.",
      "meaning": "有点贵。",
      "romanization": "jogeum bissayo",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "더 싼 거 있어요?",
      "meaning": "有更便宜的吗？",
      "romanization": "deo ssan geo isseoyo",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "메뉴 주세요.",
      "meaning": "请给我菜单。",
      "romanization": "menyu juseyo",
      "topic": "点餐"
    },
    {
      "type": "sentence",
      "front": "김치찌개 하나 주세요.",
      "meaning": "请给我一份泡菜汤。",
      "romanization": "gimchijjigae hana juseyo",
      "topic": "点餐"
    },
    {
      "type": "sentence",
      "front": "안 매운 음식 있어요?",
      "meaning": "有不辣的食物吗？",
      "romanization": "an maeun eumsik isseoyo",
      "topic": "点餐"
    },
    {
      "type": "sentence",
      "front": "맛있어요.",
      "meaning": "很好吃。",
      "romanization": "masisseoyo",
      "topic": "点餐"
    },
    {
      "type": "sentence",
      "front": "화장실이 어디예요?",
      "meaning": "洗手间在哪里？",
      "romanization": "hwajangsiri eodiyeyo",
      "topic": "问路"
    },
    {
      "type": "sentence",
      "front": "지하철역이 어디예요?",
      "meaning": "地铁站在哪里？",
      "romanization": "jihacheol-yeogi eodiyeyo",
      "topic": "问路"
    },
    {
      "type": "sentence",
      "front": "여기에서 멀어요?",
      "meaning": "离这里远吗？",
      "romanization": "yeogieseo meoreoyo",
      "topic": "问路"
    },
    {
      "type": "sentence",
      "front": "왼쪽으로 가세요.",
      "meaning": "请往左走。",
      "romanization": "oenjjogeuro gaseyo",
      "topic": "问路"
    },
    {
      "type": "sentence",
      "front": "오늘 날씨가 좋아요.",
      "meaning": "今天天气很好。",
      "romanization": "oneul nalssiga joayo",
      "topic": "天气"
    },
    {
      "type": "sentence",
      "front": "비가 와요.",
      "meaning": "下雨了。",
      "romanization": "biga wayo",
      "topic": "天气"
    },
    {
      "type": "sentence",
      "front": "너무 추워요.",
      "meaning": "太冷了。",
      "romanization": "neomu chuwoyo",
      "topic": "天气"
    },
    {
      "type": "sentence",
      "front": "사진을 찍어도 돼요?",
      "meaning": "可以拍照吗？",
      "romanization": "sajineul jjigeodo dwaeyo",
      "topic": "实用表达"
    },
    {
      "type": "sentence",
      "front": "도와주세요.",
      "meaning": "请帮帮我。",
      "romanization": "dowajuseyo",
      "topic": "实用表达"
    },
    {
      "type": "sentence",
      "front": "괜찮으면 같이 가요.",
      "meaning": "如果可以的话一起去吧。",
      "romanization": "gwaenchan-eumyeon gachi gayo",
      "topic": "实用表达"
    },
    {
      "type": "sentence",
      "front": "다음에 또 만나요.",
      "meaning": "下次再见。",
      "romanization": "daeume tto mannayo",
      "topic": "实用表达"
    },
    {
      "type": "word",
      "front": "씻다",
      "meaning": "洗；洗漱",
      "romanization": "ssitda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "샤워하다",
      "meaning": "洗澡",
      "romanization": "syawohada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "입다",
      "meaning": "穿",
      "romanization": "ipda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "벗다",
      "meaning": "脱",
      "romanization": "beotda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "앉다",
      "meaning": "坐",
      "romanization": "anjda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "서다",
      "meaning": "站",
      "romanization": "seoda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "걷다",
      "meaning": "走路",
      "romanization": "geotda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "뛰다",
      "meaning": "跑",
      "romanization": "ttwida",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "들어가다",
      "meaning": "进去",
      "romanization": "deuleogada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "나오다",
      "meaning": "出来",
      "romanization": "naoda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "열다",
      "meaning": "打开",
      "romanization": "yeolda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "닫다",
      "meaning": "关上",
      "romanization": "datda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "시작하다",
      "meaning": "开始",
      "romanization": "sijakhada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "끝나다",
      "meaning": "结束",
      "romanization": "kkeutnada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "준비하다",
      "meaning": "准备",
      "romanization": "junbihada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "기다리다",
      "meaning": "等待",
      "romanization": "gidarida",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "만나다",
      "meaning": "见面",
      "romanization": "mannada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "헤어지다",
      "meaning": "分别；分手",
      "romanization": "heeojida",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "전화하다",
      "meaning": "打电话",
      "romanization": "jeonhwahada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "보내다",
      "meaning": "发送；送走",
      "romanization": "bonaeda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "받다",
      "meaning": "收到；接受",
      "romanization": "batda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "만들다",
      "meaning": "制作",
      "romanization": "mandeulda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "사용하다",
      "meaning": "使用",
      "romanization": "sayonghada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "찾다",
      "meaning": "寻找",
      "romanization": "chatda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "잃어버리다",
      "meaning": "弄丢",
      "romanization": "ilheobeorida",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "고르다",
      "meaning": "挑选",
      "romanization": "goreuda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "바꾸다",
      "meaning": "更换；改变",
      "romanization": "bakkuda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "예약하다",
      "meaning": "预约",
      "romanization": "yeyakhada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "주문하다",
      "meaning": "点单；订购",
      "romanization": "jumunhada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "계산하다",
      "meaning": "结账；计算",
      "romanization": "gyesanhada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "기쁘다",
      "meaning": "开心",
      "romanization": "gippeuda",
      "topic": "情绪状态"
    },
    {
      "type": "word",
      "front": "슬프다",
      "meaning": "难过",
      "romanization": "seulpeuda",
      "topic": "情绪状态"
    },
    {
      "type": "word",
      "front": "화나다",
      "meaning": "生气",
      "romanization": "hwanada",
      "topic": "情绪状态"
    },
    {
      "type": "word",
      "front": "걱정하다",
      "meaning": "担心",
      "romanization": "geokjeonghada",
      "topic": "情绪状态"
    },
    {
      "type": "word",
      "front": "긴장하다",
      "meaning": "紧张",
      "romanization": "ginjanghada",
      "topic": "情绪状态"
    },
    {
      "type": "word",
      "front": "편하다",
      "meaning": "舒服；方便",
      "romanization": "pyeonhada",
      "topic": "情绪状态"
    },
    {
      "type": "word",
      "front": "불편하다",
      "meaning": "不方便；不舒服",
      "romanization": "bulpyeonhada",
      "topic": "情绪状态"
    },
    {
      "type": "word",
      "front": "졸리다",
      "meaning": "困",
      "romanization": "jolrida",
      "topic": "情绪状态"
    },
    {
      "type": "word",
      "front": "배고프다",
      "meaning": "饿",
      "romanization": "baegopeuda",
      "topic": "情绪状态"
    },
    {
      "type": "word",
      "front": "목마르다",
      "meaning": "口渴",
      "romanization": "mokmareuda",
      "topic": "情绪状态"
    },
    {
      "type": "word",
      "front": "재미없다",
      "meaning": "没意思",
      "romanization": "jaemieopsda",
      "topic": "情绪状态"
    },
    {
      "type": "word",
      "front": "깨끗하다",
      "meaning": "干净",
      "romanization": "kkaekkeuthada",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "더럽다",
      "meaning": "脏",
      "romanization": "deoreopda",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "조용하다",
      "meaning": "安静",
      "romanization": "joyonghada",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "시끄럽다",
      "meaning": "吵",
      "romanization": "sikkeureopda",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "친절하다",
      "meaning": "亲切",
      "romanization": "chinjeolhada",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "유명하다",
      "meaning": "有名",
      "romanization": "yumyeonghada",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "중요하다",
      "meaning": "重要",
      "romanization": "jungyohada",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "필요하다",
      "meaning": "需要；必要",
      "romanization": "pilyohada",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "가능하다",
      "meaning": "可能；可行",
      "romanization": "ganeunghada",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "차",
      "meaning": "茶",
      "romanization": "cha",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "바나나",
      "meaning": "香蕉",
      "romanization": "banana",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "닭고기",
      "meaning": "鸡肉",
      "romanization": "dalkgogi",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "돼지고기",
      "meaning": "猪肉",
      "romanization": "dwaejigogi",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "소고기",
      "meaning": "牛肉",
      "romanization": "sogogi",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "생선",
      "meaning": "鱼",
      "romanization": "saengseon",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "계란",
      "meaning": "鸡蛋",
      "romanization": "gyeran",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "채소",
      "meaning": "蔬菜",
      "romanization": "chaeso",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "김치",
      "meaning": "泡菜",
      "romanization": "gimchi",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "라면",
      "meaning": "方便面；拉面",
      "romanization": "ramyeon",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "국",
      "meaning": "汤",
      "romanization": "guk",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "맛",
      "meaning": "味道",
      "romanization": "mat",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "나중에",
      "meaning": "以后；待会",
      "romanization": "najunge",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "오전",
      "meaning": "上午",
      "romanization": "ojeon",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "오후",
      "meaning": "下午",
      "romanization": "ohu",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "밤",
      "meaning": "夜晚",
      "romanization": "bam",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "주말",
      "meaning": "周末",
      "romanization": "jumal",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "평일",
      "meaning": "工作日",
      "romanization": "pyeongil",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "월요일",
      "meaning": "星期一",
      "romanization": "wolyoil",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "화요일",
      "meaning": "星期二",
      "romanization": "hwayoil",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "수요일",
      "meaning": "星期三",
      "romanization": "suyoil",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "목요일",
      "meaning": "星期四",
      "romanization": "mokyoil",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "금요일",
      "meaning": "星期五",
      "romanization": "geumyoil",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "토요일",
      "meaning": "星期六",
      "romanization": "toyoil",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "일요일",
      "meaning": "星期日",
      "romanization": "ilyoil",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "이번 주",
      "meaning": "这周",
      "romanization": "ibeon ju",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "다음 주",
      "meaning": "下周",
      "romanization": "daeum ju",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "지난주",
      "meaning": "上周",
      "romanization": "jinanju",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "택시",
      "meaning": "出租车",
      "romanization": "taeksi",
      "topic": "交通旅行"
    },
    {
      "type": "word",
      "front": "기차",
      "meaning": "火车",
      "romanization": "gicha",
      "topic": "交通旅行"
    },
    {
      "type": "word",
      "front": "비행기",
      "meaning": "飞机",
      "romanization": "bihaenggi",
      "topic": "交通旅行"
    },
    {
      "type": "word",
      "front": "역",
      "meaning": "车站",
      "romanization": "yeok",
      "topic": "交通旅行"
    },
    {
      "type": "word",
      "front": "공항",
      "meaning": "机场",
      "romanization": "gonghang",
      "topic": "交通旅行"
    },
    {
      "type": "word",
      "front": "정류장",
      "meaning": "公交站",
      "romanization": "jeongryujang",
      "topic": "交通旅行"
    },
    {
      "type": "word",
      "front": "길",
      "meaning": "路",
      "romanization": "gil",
      "topic": "交通旅行"
    },
    {
      "type": "word",
      "front": "지도",
      "meaning": "地图",
      "romanization": "jido",
      "topic": "交通旅行"
    },
    {
      "type": "word",
      "front": "표",
      "meaning": "票",
      "romanization": "pyo",
      "topic": "交通旅行"
    },
    {
      "type": "word",
      "front": "여행",
      "meaning": "旅行",
      "romanization": "yeohaeng",
      "topic": "交通旅行"
    },
    {
      "type": "word",
      "front": "호텔",
      "meaning": "酒店",
      "romanization": "hotel",
      "topic": "交通旅行"
    },
    {
      "type": "word",
      "front": "약국",
      "meaning": "药店",
      "romanization": "yakguk",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "우체국",
      "meaning": "邮局",
      "romanization": "ucheguk",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "편의점",
      "meaning": "便利店",
      "romanization": "pyeonuijeom",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "화장실",
      "meaning": "洗手间",
      "romanization": "hwajangsil",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "공원",
      "meaning": "公园",
      "romanization": "gongwon",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "도서관",
      "meaning": "图书馆",
      "romanization": "doseogwan",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "영화관",
      "meaning": "电影院",
      "romanization": "yeonghwagwan",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "책",
      "meaning": "书",
      "romanization": "chaek",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "공책",
      "meaning": "笔记本",
      "romanization": "gongchaek",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "펜",
      "meaning": "笔",
      "romanization": "pen",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "컴퓨터",
      "meaning": "电脑",
      "romanization": "keompyuteo",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "휴대폰",
      "meaning": "手机",
      "romanization": "hyudaepon",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "인터넷",
      "meaning": "互联网",
      "romanization": "inteonet",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "이메일",
      "meaning": "电子邮件",
      "romanization": "imeil",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "회의",
      "meaning": "会议",
      "romanization": "hoeui",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "숙제",
      "meaning": "作业",
      "romanization": "sukje",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "시험",
      "meaning": "考试",
      "romanization": "siheom",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "수업",
      "meaning": "课",
      "romanization": "sueop",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "문제",
      "meaning": "问题；题目",
      "romanization": "munje",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "질문",
      "meaning": "提问",
      "romanization": "jilmun",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "답",
      "meaning": "答案",
      "romanization": "dap",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "공부",
      "meaning": "学习",
      "romanization": "gongbu",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "연습",
      "meaning": "练习",
      "romanization": "yeonseup",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "사무실",
      "meaning": "办公室",
      "romanization": "samusil",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "직원",
      "meaning": "职员",
      "romanization": "jikwon",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "돈",
      "meaning": "钱",
      "romanization": "don",
      "topic": "基础名词"
    },
    {
      "type": "word",
      "front": "사진",
      "meaning": "照片",
      "romanization": "sajin",
      "topic": "基础名词"
    },
    {
      "type": "word",
      "front": "음악",
      "meaning": "音乐",
      "romanization": "eumak",
      "topic": "兴趣"
    },
    {
      "type": "word",
      "front": "영화",
      "meaning": "电影",
      "romanization": "yeonghwa",
      "topic": "兴趣"
    },
    {
      "type": "word",
      "front": "드라마",
      "meaning": "电视剧",
      "romanization": "deurama",
      "topic": "兴趣"
    },
    {
      "type": "word",
      "front": "노래",
      "meaning": "歌曲",
      "romanization": "norae",
      "topic": "兴趣"
    },
    {
      "type": "word",
      "front": "운동",
      "meaning": "运动",
      "romanization": "undong",
      "topic": "兴趣"
    },
    {
      "type": "word",
      "front": "게임",
      "meaning": "游戏",
      "romanization": "geim",
      "topic": "兴趣"
    },
    {
      "type": "word",
      "front": "취미",
      "meaning": "爱好",
      "romanization": "chwimi",
      "topic": "兴趣"
    },
    {
      "type": "word",
      "front": "날씨",
      "meaning": "天气",
      "romanization": "nalssi",
      "topic": "天气"
    },
    {
      "type": "word",
      "front": "비",
      "meaning": "雨",
      "romanization": "bi",
      "topic": "天气"
    },
    {
      "type": "word",
      "front": "눈",
      "meaning": "雪",
      "romanization": "nun",
      "topic": "天气"
    },
    {
      "type": "word",
      "front": "바람",
      "meaning": "风",
      "romanization": "baram",
      "topic": "天气"
    },
    {
      "type": "word",
      "front": "따뜻하다",
      "meaning": "温暖",
      "romanization": "ttatteuthada",
      "topic": "天气"
    },
    {
      "type": "word",
      "front": "시원하다",
      "meaning": "凉爽",
      "romanization": "siwonhada",
      "topic": "天气"
    },
    {
      "type": "word",
      "front": "머리",
      "meaning": "头",
      "romanization": "meori",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "눈",
      "meaning": "眼睛",
      "romanization": "nun",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "코",
      "meaning": "鼻子",
      "romanization": "ko",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "입",
      "meaning": "嘴",
      "romanization": "ip",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "손",
      "meaning": "手",
      "romanization": "son",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "발",
      "meaning": "脚",
      "romanization": "bal",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "배",
      "meaning": "肚子",
      "romanization": "bae",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "아프다",
      "meaning": "疼；生病",
      "romanization": "apeuda",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "옷",
      "meaning": "衣服",
      "romanization": "ot",
      "topic": "穿着"
    },
    {
      "type": "word",
      "front": "신발",
      "meaning": "鞋",
      "romanization": "sinbal",
      "topic": "穿着"
    },
    {
      "type": "word",
      "front": "가방",
      "meaning": "包",
      "romanization": "gabang",
      "topic": "穿着"
    },
    {
      "type": "word",
      "front": "모자",
      "meaning": "帽子",
      "romanization": "moja",
      "topic": "穿着"
    },
    {
      "type": "word",
      "front": "색",
      "meaning": "颜色",
      "romanization": "saek",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "빨간색",
      "meaning": "红色",
      "romanization": "ppalgansaek",
      "topic": "颜色"
    },
    {
      "type": "word",
      "front": "파란색",
      "meaning": "蓝色",
      "romanization": "paransaek",
      "topic": "颜色"
    },
    {
      "type": "word",
      "front": "검은색",
      "meaning": "黑色",
      "romanization": "geomeunsaek",
      "topic": "颜色"
    },
    {
      "type": "word",
      "front": "흰색",
      "meaning": "白色",
      "romanization": "huinsaek",
      "topic": "颜色"
    },
    {
      "type": "word",
      "front": "같다",
      "meaning": "一样；像",
      "romanization": "gatda",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "다르다",
      "meaning": "不同",
      "romanization": "dareuda",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "생각하다",
      "meaning": "想；认为",
      "romanization": "saenggakhada",
      "topic": "思考交流"
    },
    {
      "type": "word",
      "front": "기억하다",
      "meaning": "记得",
      "romanization": "gieokhada",
      "topic": "思考交流"
    },
    {
      "type": "word",
      "front": "잊다",
      "meaning": "忘记",
      "romanization": "itda",
      "topic": "思考交流"
    },
    {
      "type": "word",
      "front": "읽다",
      "meaning": "读",
      "romanization": "ilkda",
      "topic": "思考交流"
    },
    {
      "type": "word",
      "front": "쓰다",
      "meaning": "写；使用",
      "romanization": "sseuda",
      "topic": "思考交流"
    },
    {
      "type": "word",
      "front": "묻다",
      "meaning": "问",
      "romanization": "mutda",
      "topic": "思考交流"
    },
    {
      "type": "word",
      "front": "대답하다",
      "meaning": "回答",
      "romanization": "daedaphada",
      "topic": "思考交流"
    },
    {
      "type": "sentence",
      "front": "오늘 일찍 일어났어요.",
      "meaning": "我今天起得很早。",
      "romanization": "oneul iljjik ileonateoyo.",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "아침을 먹고 학교에 갔어요.",
      "meaning": "吃完早饭后去了学校。",
      "romanization": "achimeul meokgo hakgyoe gateoyo.",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "지금 뭐 하고 있어요?",
      "meaning": "你现在在做什么？",
      "romanization": "jigeum mwo hago iteoyo?",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "잠깐만 기다려 주세요.",
      "meaning": "请稍等一下。",
      "romanization": "jamkkanman gidaryeo juseyo.",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "오늘은 조금 피곤해요.",
      "meaning": "今天有点累。",
      "romanization": "oneuleun jogeum pigonhaeyo.",
      "topic": "状态"
    },
    {
      "type": "sentence",
      "front": "어제 너무 늦게 잤어요.",
      "meaning": "昨天睡得太晚了。",
      "romanization": "eoje neomu neutge jateoyo.",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "배가 고파서 밥을 먹고 싶어요.",
      "meaning": "因为饿了，所以想吃饭。",
      "romanization": "baega gopaseo bapeul meokgo sipeoyo.",
      "topic": "饮食"
    },
    {
      "type": "sentence",
      "front": "목이 말라서 물을 마시고 싶어요.",
      "meaning": "因为口渴，所以想喝水。",
      "romanization": "moki malraseo muleul masigo sipeoyo.",
      "topic": "饮食"
    },
    {
      "type": "sentence",
      "front": "커피 한 잔 주세요.",
      "meaning": "请给我一杯咖啡。",
      "romanization": "keopi han jan juseyo.",
      "topic": "点餐"
    },
    {
      "type": "sentence",
      "front": "이거 하나 주세요.",
      "meaning": "请给我一个这个。",
      "romanization": "igeo hana juseyo.",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "이거 얼마예요?",
      "meaning": "这个多少钱？",
      "romanization": "igeo eolmayeyo?",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "조금 더 싼 거 있어요?",
      "meaning": "有再便宜一点的吗？",
      "romanization": "jogeum deo ssan geo iteoyo?",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "카드로 계산할게요.",
      "meaning": "我用卡结账。",
      "romanization": "kadeuro gyesanhalgeyo.",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "매운 음식 잘 먹어요?",
      "meaning": "你能吃辣吗？",
      "romanization": "maeun eumsik jal meokeoyo?",
      "topic": "饮食"
    },
    {
      "type": "sentence",
      "front": "저는 매운 음식을 잘 못 먹어요.",
      "meaning": "我不太能吃辣。",
      "romanization": "jeoneun maeun eumsikeul jal mot meokeoyo.",
      "topic": "饮食"
    },
    {
      "type": "sentence",
      "front": "이 음식 정말 맛있어요.",
      "meaning": "这个食物真的很好吃。",
      "romanization": "i eumsik jeongmal matiteoyo.",
      "topic": "饮食"
    },
    {
      "type": "sentence",
      "front": "예약했어요.",
      "meaning": "我预约过了。",
      "romanization": "yeyakhaeteoyo.",
      "topic": "旅行"
    },
    {
      "type": "sentence",
      "front": "두 명이에요.",
      "meaning": "两个人。",
      "romanization": "du myeongieyo.",
      "topic": "点餐"
    },
    {
      "type": "sentence",
      "front": "창가 자리 있어요?",
      "meaning": "有靠窗的位置吗？",
      "romanization": "changga jari iteoyo?",
      "topic": "点餐"
    },
    {
      "type": "sentence",
      "front": "지하철역까지 어떻게 가요?",
      "meaning": "去地铁站怎么走？",
      "romanization": "jihacheolyeokkkaji eotteotge gayo?",
      "topic": "问路"
    },
    {
      "type": "sentence",
      "front": "오른쪽으로 가세요.",
      "meaning": "请往右走。",
      "romanization": "oreunjjokeuro gaseyo.",
      "topic": "问路"
    },
    {
      "type": "sentence",
      "front": "곧 도착해요.",
      "meaning": "马上就到了。",
      "romanization": "got dochakhaeyo.",
      "topic": "交通"
    },
    {
      "type": "sentence",
      "front": "버스를 놓쳤어요.",
      "meaning": "我错过公交车了。",
      "romanization": "beoseureul notchyeoteoyo.",
      "topic": "交通"
    },
    {
      "type": "sentence",
      "front": "택시를 불러 주세요.",
      "meaning": "请帮我叫出租车。",
      "romanization": "taeksireul bulreo juseyo.",
      "topic": "交通"
    },
    {
      "type": "sentence",
      "front": "공항에 몇 시까지 가야 해요?",
      "meaning": "几点之前要到机场？",
      "romanization": "gonghange myeot sikkaji gaya haeyo?",
      "topic": "旅行"
    },
    {
      "type": "sentence",
      "front": "표를 어디에서 살 수 있어요?",
      "meaning": "在哪里可以买票？",
      "romanization": "pyoreul eodieseo sal su iteoyo?",
      "topic": "旅行"
    },
    {
      "type": "sentence",
      "front": "호텔 체크인은 몇 시예요?",
      "meaning": "酒店几点办理入住？",
      "romanization": "hotel chekeuineun myeot siyeyo?",
      "topic": "旅行"
    },
    {
      "type": "sentence",
      "front": "도와주실 수 있어요?",
      "meaning": "可以帮帮我吗？",
      "romanization": "dowajusil su iteoyo?",
      "topic": "实用表达"
    },
    {
      "type": "sentence",
      "front": "잘 못 들었어요.",
      "meaning": "我没听清。",
      "romanization": "jal mot deuleoteoyo.",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "무슨 뜻이에요?",
      "meaning": "是什么意思？",
      "romanization": "museun tteutieyo?",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "한국어로 어떻게 말해요?",
      "meaning": "用韩语怎么说？",
      "romanization": "hangukeoro eotteotge malhaeyo?",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "이 단어를 어떻게 읽어요?",
      "meaning": "这个单词怎么读？",
      "romanization": "i daneoreul eotteotge ilkeoyo?",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "발음이 어려워요.",
      "meaning": "发音很难。",
      "romanization": "baleumi eoryeowoyo.",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "매일 조금씩 연습하고 있어요.",
      "meaning": "我每天都在练一点。",
      "romanization": "maeil jogeumssik yeonseuphago iteoyo.",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "오늘 수업이 몇 시에 시작해요?",
      "meaning": "今天几点上课？",
      "romanization": "oneul sueopi myeot sie sijakhaeyo?",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "숙제를 아직 안 했어요.",
      "meaning": "作业还没做。",
      "romanization": "sukjereul ajik an haeteoyo.",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "시험이 다음 주에 있어요.",
      "meaning": "考试在下周。",
      "romanization": "siheomi daeum jue iteoyo.",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "이 문제는 조금 어려워요.",
      "meaning": "这道题有点难。",
      "romanization": "i munjeneun jogeum eoryeowoyo.",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "질문이 하나 있어요.",
      "meaning": "我有一个问题。",
      "romanization": "jilmuni hana iteoyo.",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "회의가 오후 세 시에 있어요.",
      "meaning": "下午三点有会议。",
      "romanization": "hoeuiga ohu se sie iteoyo.",
      "topic": "工作"
    },
    {
      "type": "sentence",
      "front": "이메일을 보냈어요.",
      "meaning": "邮件已经发了。",
      "romanization": "imeileul bonaeteoyo.",
      "topic": "工作"
    },
    {
      "type": "sentence",
      "front": "오늘 일이 많아요.",
      "meaning": "今天工作很多。",
      "romanization": "oneul ili manhayo.",
      "topic": "工作"
    },
    {
      "type": "sentence",
      "front": "내일까지 끝낼게요.",
      "meaning": "我会在明天之前做完。",
      "romanization": "naeilkkaji kkeutnaelgeyo.",
      "topic": "工作"
    },
    {
      "type": "sentence",
      "front": "잠깐 이야기할 수 있어요?",
      "meaning": "可以聊一下吗？",
      "romanization": "jamkkan iyagihal su iteoyo?",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "주말에 뭐 할 거예요?",
      "meaning": "周末打算做什么？",
      "romanization": "jumale mwo hal geoyeyo?",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "친구를 만나러 갈 거예요.",
      "meaning": "我要去见朋友。",
      "romanization": "chingureul mannareo gal geoyeyo.",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "영화를 보고 싶어요.",
      "meaning": "我想看电影。",
      "romanization": "yeonghwareul bogo sipeoyo.",
      "topic": "兴趣"
    },
    {
      "type": "sentence",
      "front": "요즘 이 드라마를 자주 봐요.",
      "meaning": "最近经常看这部剧。",
      "romanization": "yojeum i deuramareul jaju bwayo.",
      "topic": "兴趣"
    },
    {
      "type": "sentence",
      "front": "이 노래를 정말 좋아해요.",
      "meaning": "我真的很喜欢这首歌。",
      "romanization": "i noraereul jeongmal jotahaeyo.",
      "topic": "兴趣"
    },
    {
      "type": "sentence",
      "front": "운동을 자주 해요?",
      "meaning": "你经常运动吗？",
      "romanization": "undongeul jaju haeyo?",
      "topic": "兴趣"
    },
    {
      "type": "sentence",
      "front": "저는 걷는 것을 좋아해요.",
      "meaning": "我喜欢散步。",
      "romanization": "jeoneun geotneun geoteul jotahaeyo.",
      "topic": "兴趣"
    },
    {
      "type": "sentence",
      "front": "오늘 날씨가 정말 좋아요.",
      "meaning": "今天天气真好。",
      "romanization": "oneul nalssiga jeongmal jotayo.",
      "topic": "天气"
    },
    {
      "type": "sentence",
      "front": "밖에 비가 와요.",
      "meaning": "外面在下雨。",
      "romanization": "bake biga wayo.",
      "topic": "天气"
    },
    {
      "type": "sentence",
      "front": "오늘은 어제보다 추워요.",
      "meaning": "今天比昨天冷。",
      "romanization": "oneuleun eojeboda chuwoyo.",
      "topic": "天气"
    },
    {
      "type": "sentence",
      "front": "내일은 더 따뜻할 거예요.",
      "meaning": "明天会更暖和。",
      "romanization": "naeileun deo ttatteuthal geoyeyo.",
      "topic": "天气"
    },
    {
      "type": "sentence",
      "front": "머리가 조금 아파요.",
      "meaning": "头有点疼。",
      "romanization": "meoriga jogeum apayo.",
      "topic": "健康"
    },
    {
      "type": "sentence",
      "front": "약국에 가야 할 것 같아요.",
      "meaning": "我觉得得去一趟药店。",
      "romanization": "yakguke gaya hal geot gatayo.",
      "topic": "健康"
    },
    {
      "type": "sentence",
      "front": "어제부터 감기 기운이 있어요.",
      "meaning": "从昨天开始有点感冒症状。",
      "romanization": "eojebuteo gamgi giuni iteoyo.",
      "topic": "健康"
    },
    {
      "type": "sentence",
      "front": "괜찮아요. 걱정하지 마세요.",
      "meaning": "没关系，别担心。",
      "romanization": "gwaenchanhayo. geokjeonghaji maseyo.",
      "topic": "情绪"
    },
    {
      "type": "sentence",
      "front": "오늘 기분이 좋아요.",
      "meaning": "今天心情很好。",
      "romanization": "oneul gibuni jotayo.",
      "topic": "情绪"
    },
    {
      "type": "sentence",
      "front": "조금 긴장되지만 괜찮아요.",
      "meaning": "虽然有点紧张，但没事。",
      "romanization": "jogeum ginjangdoejiman gwaenchanhayo.",
      "topic": "情绪"
    },
    {
      "type": "sentence",
      "front": "왜 이렇게 조용해요?",
      "meaning": "为什么这么安静？",
      "romanization": "wae ireotge joyonghaeyo?",
      "topic": "描述"
    },
    {
      "type": "sentence",
      "front": "여기는 사람이 너무 많아요.",
      "meaning": "这里人太多了。",
      "romanization": "yeogineun sarami neomu manhayo.",
      "topic": "描述"
    },
    {
      "type": "sentence",
      "front": "이 가방이 더 예뻐요.",
      "meaning": "这个包更好看。",
      "romanization": "i gabangi deo yeppeoyo.",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "검은색이 더 좋아요.",
      "meaning": "我更喜欢黑色。",
      "romanization": "geomeunsaeki deo jotayo.",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "사이즈가 조금 작아요.",
      "meaning": "尺码有点小。",
      "romanization": "saijeuga jogeum jakayo.",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "다른 사이즈 있어요?",
      "meaning": "有别的尺码吗？",
      "romanization": "dareun saijeu iteoyo?",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "이걸로 할게요.",
      "meaning": "我就要这个。",
      "romanization": "igeolro halgeyo.",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "오늘 정말 즐거웠어요.",
      "meaning": "今天真的很开心。",
      "romanization": "oneul jeongmal jeulgeowoteoyo.",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "집에 도착하면 연락해 주세요.",
      "meaning": "到家后请联系我。",
      "romanization": "jipe dochakhamyeon yeonrakhae juseyo.",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "늦어서 미안해요.",
      "meaning": "对不起，我迟到了。",
      "romanization": "neuteoseo mianhaeyo.",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "괜찮으면 같이 갈까요?",
      "meaning": "如果方便的话，要一起去吗？",
      "romanization": "gwaenchanheumyeon gati galkkayo?",
      "topic": "邀请"
    },
    {
      "type": "sentence",
      "front": "시간 있으면 커피 마실래요?",
      "meaning": "有时间的话要不要喝咖啡？",
      "romanization": "sigan iteumyeon keopi masilraeyo?",
      "topic": "邀请"
    },
    {
      "type": "sentence",
      "front": "저도 그렇게 생각해요.",
      "meaning": "我也这么觉得。",
      "romanization": "jeodo geureotge saenggakhaeyo.",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "제 생각은 조금 달라요.",
      "meaning": "我的想法有点不同。",
      "romanization": "je saenggakeun jogeum dalrayo.",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "정확히는 잘 모르겠어요.",
      "meaning": "具体我也不太清楚。",
      "romanization": "jeonghwakhineun jal moreugeteoyo.",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "한번 확인해 볼게요.",
      "meaning": "我确认一下。",
      "romanization": "hanbeon hwakinhae bolgeyo.",
      "topic": "实用表达"
    },
    {
      "type": "sentence",
      "front": "필요하면 말씀해 주세요.",
      "meaning": "如果需要请告诉我。",
      "romanization": "pilyohamyeon malsseumhae juseyo.",
      "topic": "实用表达"
    },
    {
      "type": "sentence",
      "front": "지금은 시간이 없어요.",
      "meaning": "现在没时间。",
      "romanization": "jigeumeun sigani eopseoyo.",
      "topic": "时间"
    },
    {
      "type": "sentence",
      "front": "나중에 다시 연락할게요.",
      "meaning": "我之后再联系你。",
      "romanization": "najunge dasi yeonrakhalgeyo.",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "이번 주는 조금 바빠요.",
      "meaning": "这周有点忙。",
      "romanization": "ibeon juneun jogeum bappayo.",
      "topic": "时间"
    },
    {
      "type": "sentence",
      "front": "다음 주에 시간이 있어요.",
      "meaning": "下周有时间。",
      "romanization": "daeum jue sigani iteoyo.",
      "topic": "时间"
    },
    {
      "type": "sentence",
      "front": "오늘은 여기까지 할게요.",
      "meaning": "今天就到这里。",
      "romanization": "oneuleun yeogikkaji halgeyo.",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "남자",
      "meaning": "男人",
      "romanization": "namja",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "여자",
      "meaning": "女人",
      "romanization": "yeoja",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "아이",
      "meaning": "孩子",
      "romanization": "ai",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "부모님",
      "meaning": "父母",
      "romanization": "bumonim",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "형",
      "meaning": "哥哥（男性称）",
      "romanization": "hyeong",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "오빠",
      "meaning": "哥哥/男友式称呼（女性称）",
      "romanization": "oppa",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "누나",
      "meaning": "姐姐（男性称）",
      "romanization": "nuna",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "언니",
      "meaning": "姐姐（女性称）",
      "romanization": "eonni",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "동생",
      "meaning": "弟弟妹妹",
      "romanization": "dongsaeng",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "사장님",
      "meaning": "老板",
      "romanization": "sajangnim",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "손님",
      "meaning": "客人",
      "romanization": "sonnim",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "의사",
      "meaning": "医生",
      "romanization": "uisa",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "간호사",
      "meaning": "护士",
      "romanization": "ganhosa",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "경찰",
      "meaning": "警察",
      "romanization": "gyeongchal",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "이웃",
      "meaning": "邻居",
      "romanization": "iut",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "부엌",
      "meaning": "厨房",
      "romanization": "bueok",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "거실",
      "meaning": "客厅",
      "romanization": "geosil",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "침대",
      "meaning": "床",
      "romanization": "chimdae",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "책상",
      "meaning": "书桌",
      "romanization": "chaeksang",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "의자",
      "meaning": "椅子",
      "romanization": "uija",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "문",
      "meaning": "门",
      "romanization": "mun",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "창문",
      "meaning": "窗户",
      "romanization": "changmun",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "냉장고",
      "meaning": "冰箱",
      "romanization": "naengjanggo",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "세탁기",
      "meaning": "洗衣机",
      "romanization": "setakgi",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "에어컨",
      "meaning": "空调",
      "romanization": "eeokeon",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "수건",
      "meaning": "毛巾",
      "romanization": "sugeon",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "비누",
      "meaning": "肥皂",
      "romanization": "binu",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "칫솔",
      "meaning": "牙刷",
      "romanization": "chitsol",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "치약",
      "meaning": "牙膏",
      "romanization": "chiyak",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "우산",
      "meaning": "雨伞",
      "romanization": "usan",
      "topic": "日用品"
    },
    {
      "type": "word",
      "front": "열쇠",
      "meaning": "钥匙",
      "romanization": "yeolsoe",
      "topic": "日用品"
    },
    {
      "type": "word",
      "front": "지갑",
      "meaning": "钱包",
      "romanization": "jigap",
      "topic": "日用品"
    },
    {
      "type": "word",
      "front": "안경",
      "meaning": "眼镜",
      "romanization": "angyeong",
      "topic": "日用品"
    },
    {
      "type": "word",
      "front": "충전기",
      "meaning": "充电器",
      "romanization": "chungjeongi",
      "topic": "日用品"
    },
    {
      "type": "word",
      "front": "배터리",
      "meaning": "电池",
      "romanization": "baeteori",
      "topic": "日用品"
    },
    {
      "type": "word",
      "front": "주소",
      "meaning": "地址",
      "romanization": "juso",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "이름",
      "meaning": "名字",
      "romanization": "ireum",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "번호",
      "meaning": "号码",
      "romanization": "beonho",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "생일",
      "meaning": "生日",
      "romanization": "saengil",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "나이",
      "meaning": "年龄",
      "romanization": "nai",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "나라",
      "meaning": "国家",
      "romanization": "nara",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "도시",
      "meaning": "城市",
      "romanization": "dosi",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "한국",
      "meaning": "韩国",
      "romanization": "hanguk",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "중국",
      "meaning": "中国",
      "romanization": "jungguk",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "외국",
      "meaning": "外国",
      "romanization": "oeguk",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "봄",
      "meaning": "春天",
      "romanization": "bom",
      "topic": "季节"
    },
    {
      "type": "word",
      "front": "여름",
      "meaning": "夏天",
      "romanization": "yeoreum",
      "topic": "季节"
    },
    {
      "type": "word",
      "front": "가을",
      "meaning": "秋天",
      "romanization": "gaeul",
      "topic": "季节"
    },
    {
      "type": "word",
      "front": "겨울",
      "meaning": "冬天",
      "romanization": "gyeoul",
      "topic": "季节"
    },
    {
      "type": "word",
      "front": "하늘",
      "meaning": "天空",
      "romanization": "haneul",
      "topic": "自然"
    },
    {
      "type": "word",
      "front": "바다",
      "meaning": "大海",
      "romanization": "bada",
      "topic": "自然"
    },
    {
      "type": "word",
      "front": "산",
      "meaning": "山",
      "romanization": "san",
      "topic": "自然"
    },
    {
      "type": "word",
      "front": "강",
      "meaning": "河",
      "romanization": "gang",
      "topic": "自然"
    },
    {
      "type": "word",
      "front": "나무",
      "meaning": "树",
      "romanization": "namu",
      "topic": "自然"
    },
    {
      "type": "word",
      "front": "꽃",
      "meaning": "花",
      "romanization": "kkot",
      "topic": "自然"
    },
    {
      "type": "word",
      "front": "강아지",
      "meaning": "小狗",
      "romanization": "gangaji",
      "topic": "动物"
    },
    {
      "type": "word",
      "front": "고양이",
      "meaning": "猫",
      "romanization": "goyangi",
      "topic": "动物"
    },
    {
      "type": "word",
      "front": "동물",
      "meaning": "动物",
      "romanization": "dongmul",
      "topic": "动物"
    },
    {
      "type": "word",
      "front": "건강",
      "meaning": "健康",
      "romanization": "geongang",
      "topic": "健康"
    },
    {
      "type": "word",
      "front": "감기",
      "meaning": "感冒",
      "romanization": "gamgi",
      "topic": "健康"
    },
    {
      "type": "word",
      "front": "열",
      "meaning": "发烧；热度",
      "romanization": "yeol",
      "topic": "健康"
    },
    {
      "type": "word",
      "front": "기침",
      "meaning": "咳嗽",
      "romanization": "gichim",
      "topic": "健康"
    },
    {
      "type": "word",
      "front": "약",
      "meaning": "药",
      "romanization": "yak",
      "topic": "健康"
    },
    {
      "type": "word",
      "front": "운전하다",
      "meaning": "开车",
      "romanization": "unjeonhada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "요리하다",
      "meaning": "做饭",
      "romanization": "yorihada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "청소하다",
      "meaning": "打扫",
      "romanization": "cheongsohada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "빨래하다",
      "meaning": "洗衣服",
      "romanization": "ppalraehada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "쇼핑하다",
      "meaning": "购物",
      "romanization": "syopinghada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "산책하다",
      "meaning": "散步",
      "romanization": "sanchaekhada",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "사진을 찍다",
      "meaning": "拍照",
      "romanization": "sajineul jjikda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "쉬다",
      "meaning": "休息",
      "romanization": "swida",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "도착하다",
      "meaning": "到达",
      "romanization": "dochakhada",
      "topic": "交通旅行"
    },
    {
      "type": "word",
      "front": "출발하다",
      "meaning": "出发",
      "romanization": "chulbalhada",
      "topic": "交通旅行"
    },
    {
      "type": "word",
      "front": "빌리다",
      "meaning": "借入",
      "romanization": "bilrida",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "빌려주다",
      "meaning": "借给",
      "romanization": "bilryeojuda",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "가르치다",
      "meaning": "教",
      "romanization": "gareuchida",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "배우다",
      "meaning": "学习",
      "romanization": "baeuda",
      "topic": "学习工作"
    },
    {
      "type": "word",
      "front": "설명하다",
      "meaning": "说明",
      "romanization": "seolmyeonghada",
      "topic": "交流"
    },
    {
      "type": "word",
      "front": "이해하다",
      "meaning": "理解",
      "romanization": "ihaehada",
      "topic": "思考交流"
    },
    {
      "type": "word",
      "front": "결정하다",
      "meaning": "决定",
      "romanization": "gyeoljeonghada",
      "topic": "思考交流"
    },
    {
      "type": "word",
      "front": "추천하다",
      "meaning": "推荐",
      "romanization": "chucheonhada",
      "topic": "交流"
    },
    {
      "type": "word",
      "front": "약속하다",
      "meaning": "约定；答应",
      "romanization": "yaksokhada",
      "topic": "交流"
    },
    {
      "type": "word",
      "front": "확인하다",
      "meaning": "确认",
      "romanization": "hwakinhada",
      "topic": "交流"
    },
    {
      "type": "word",
      "front": "신청하다",
      "meaning": "申请",
      "romanization": "sincheonghada",
      "topic": "工作"
    },
    {
      "type": "word",
      "front": "취소하다",
      "meaning": "取消",
      "romanization": "chwisohada",
      "topic": "实用表达"
    },
    {
      "type": "word",
      "front": "꼭",
      "meaning": "一定",
      "romanization": "kkok",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "아마",
      "meaning": "大概；也许",
      "romanization": "ama",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "먼저",
      "meaning": "先",
      "romanization": "meonjeo",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "같이",
      "meaning": "一起",
      "romanization": "gati",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "혼자",
      "meaning": "独自",
      "romanization": "honja",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "자주",
      "meaning": "经常",
      "romanization": "jaju",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "가끔",
      "meaning": "偶尔",
      "romanization": "gakkeum",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "항상",
      "meaning": "总是",
      "romanization": "hangsang",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "아직",
      "meaning": "还；尚未",
      "romanization": "ajik",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "벌써",
      "meaning": "已经",
      "romanization": "beolsseo",
      "topic": "副词"
    }
  ],
  "en": [
    {
      "type": "word",
      "front": "acknowledge",
      "meaning": "承认；认可",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "advocate",
      "meaning": "提倡；支持者",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "allocate",
      "meaning": "分配",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "anticipate",
      "meaning": "预期；预见",
      "romanization": "",
      "topic": "六级后·思维与判断"
    },
    {
      "type": "word",
      "front": "articulate",
      "meaning": "清晰表达；表达清楚的",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "assess",
      "meaning": "评估",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "attain",
      "meaning": "达到；获得",
      "romanization": "",
      "topic": "六级后·发展与结果"
    },
    {
      "type": "word",
      "front": "attribute",
      "meaning": "归因于；属性",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "coherent",
      "meaning": "连贯的；有条理的",
      "romanization": "",
      "topic": "六级后·写作表达"
    },
    {
      "type": "word",
      "front": "compelling",
      "meaning": "令人信服的；引人注目的",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "comprehensive",
      "meaning": "全面的",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "constrain",
      "meaning": "限制；约束",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "contemplate",
      "meaning": "认真考虑",
      "romanization": "",
      "topic": "六级后·思维与判断"
    },
    {
      "type": "word",
      "front": "controversial",
      "meaning": "有争议的",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "word",
      "front": "conventional",
      "meaning": "传统的；常规的",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "word",
      "front": "convey",
      "meaning": "传达",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "credible",
      "meaning": "可信的",
      "romanization": "",
      "topic": "六级后·信息判断"
    },
    {
      "type": "word",
      "front": "crucial",
      "meaning": "至关重要的",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "cumulative",
      "meaning": "累积的",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "derive",
      "meaning": "获得；源自",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "diminish",
      "meaning": "减少；削弱",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "distort",
      "meaning": "歪曲；扭曲",
      "romanization": "",
      "topic": "六级后·信息判断"
    },
    {
      "type": "word",
      "front": "diverse",
      "meaning": "多样的",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "word",
      "front": "elaborate",
      "meaning": "详细说明；复杂的",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "empirical",
      "meaning": "实证的",
      "romanization": "",
      "topic": "六级后·学术阅读"
    },
    {
      "type": "word",
      "front": "enhance",
      "meaning": "提升；增强",
      "romanization": "",
      "topic": "六级后·发展与结果"
    },
    {
      "type": "word",
      "front": "entail",
      "meaning": "意味着；需要",
      "romanization": "",
      "topic": "六级后·学术阅读"
    },
    {
      "type": "word",
      "front": "explicit",
      "meaning": "明确的",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "feasible",
      "meaning": "可行的",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "foster",
      "meaning": "促进；培养",
      "romanization": "",
      "topic": "六级后·发展与结果"
    },
    {
      "type": "word",
      "front": "framework",
      "meaning": "框架",
      "romanization": "",
      "topic": "六级后·学术阅读"
    },
    {
      "type": "word",
      "front": "fundamental",
      "meaning": "根本的；基础的",
      "romanization": "",
      "topic": "六级后·学术阅读"
    },
    {
      "type": "word",
      "front": "inhibit",
      "meaning": "抑制；阻碍",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "inherent",
      "meaning": "内在的；固有的",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "integrate",
      "meaning": "整合",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "interpret",
      "meaning": "解释；理解",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "justify",
      "meaning": "证明……合理",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "legitimate",
      "meaning": "合理的；合法的",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "word",
      "front": "marginal",
      "meaning": "边缘的；微小的",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "mitigate",
      "meaning": "缓解；减轻",
      "romanization": "",
      "topic": "六级后·解决问题"
    },
    {
      "type": "word",
      "front": "nuanced",
      "meaning": "细致入微的；有细微差别的",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "obtain",
      "meaning": "获得",
      "romanization": "",
      "topic": "六级后·学术阅读"
    },
    {
      "type": "word",
      "front": "perceive",
      "meaning": "感知；认为",
      "romanization": "",
      "topic": "六级后·思维与判断"
    },
    {
      "type": "word",
      "front": "persistent",
      "meaning": "持续的；顽固的",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "plausible",
      "meaning": "看似合理的",
      "romanization": "",
      "topic": "六级后·信息判断"
    },
    {
      "type": "word",
      "front": "preliminary",
      "meaning": "初步的",
      "romanization": "",
      "topic": "六级后·学术阅读"
    },
    {
      "type": "word",
      "front": "prevalent",
      "meaning": "普遍存在的",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "word",
      "front": "profound",
      "meaning": "深刻的；重大的",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "prompt",
      "meaning": "促使；提示",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "reinforce",
      "meaning": "加强；强化",
      "romanization": "",
      "topic": "六级后·发展与结果"
    },
    {
      "type": "word",
      "front": "reluctant",
      "meaning": "不情愿的",
      "romanization": "",
      "topic": "六级后·情绪态度"
    },
    {
      "type": "word",
      "front": "resolve",
      "meaning": "解决；决心",
      "romanization": "",
      "topic": "六级后·解决问题"
    },
    {
      "type": "word",
      "front": "retain",
      "meaning": "保留；记住",
      "romanization": "",
      "topic": "六级后·学习与认知"
    },
    {
      "type": "word",
      "front": "rigorous",
      "meaning": "严谨的；严格的",
      "romanization": "",
      "topic": "六级后·学术阅读"
    },
    {
      "type": "word",
      "front": "substantial",
      "meaning": "大量的；实质性的",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "sustain",
      "meaning": "维持；支撑",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "tentative",
      "meaning": "暂定的；试探性的",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "undergo",
      "meaning": "经历",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "valid",
      "meaning": "有效的；合理的",
      "romanization": "",
      "topic": "六级后·信息判断"
    },
    {
      "type": "word",
      "front": "vulnerable",
      "meaning": "脆弱的；易受影响的",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "word",
      "front": "ambiguous",
      "meaning": "含糊的；有歧义的",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "arbitrary",
      "meaning": "任意的；武断的",
      "romanization": "",
      "topic": "六级后·信息判断"
    },
    {
      "type": "word",
      "front": "autonomous",
      "meaning": "自主的",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "word",
      "front": "counterpart",
      "meaning": "对应的人或事物",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "deteriorate",
      "meaning": "恶化",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "discrepancy",
      "meaning": "差异；不一致",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "disseminate",
      "meaning": "传播；散布",
      "romanization": "",
      "topic": "六级后·信息传播"
    },
    {
      "type": "word",
      "front": "distinctive",
      "meaning": "有特色的；独特的",
      "romanization": "",
      "topic": "六级后·描述"
    },
    {
      "type": "word",
      "front": "dominant",
      "meaning": "占主导的",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "word",
      "front": "elicit",
      "meaning": "引出；诱发",
      "romanization": "",
      "topic": "六级后·研究与分析"
    },
    {
      "type": "word",
      "front": "encompass",
      "meaning": "包含；涵盖",
      "romanization": "",
      "topic": "六级后·学术阅读"
    },
    {
      "type": "word",
      "front": "exacerbate",
      "meaning": "加剧",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "facilitate",
      "meaning": "促进；使便利",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "fluctuate",
      "meaning": "波动",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "formulate",
      "meaning": "制定；构想",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "impartial",
      "meaning": "公正的",
      "romanization": "",
      "topic": "六级后·信息判断"
    },
    {
      "type": "word",
      "front": "implicit",
      "meaning": "含蓄的；隐含的",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "inevitable",
      "meaning": "不可避免的",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "innovative",
      "meaning": "创新的",
      "romanization": "",
      "topic": "六级后·科技与发展"
    },
    {
      "type": "word",
      "front": "intact",
      "meaning": "完整无损的",
      "romanization": "",
      "topic": "六级后·描述"
    },
    {
      "type": "word",
      "front": "intricate",
      "meaning": "复杂精细的",
      "romanization": "",
      "topic": "六级后·描述"
    },
    {
      "type": "word",
      "front": "manifest",
      "meaning": "显现；明显的",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "negligible",
      "meaning": "微不足道的",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "notable",
      "meaning": "显著的；值得注意的",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "obsolete",
      "meaning": "过时的",
      "romanization": "",
      "topic": "六级后·科技与发展"
    },
    {
      "type": "word",
      "front": "paradox",
      "meaning": "悖论",
      "romanization": "",
      "topic": "六级后·思维与判断"
    },
    {
      "type": "word",
      "front": "predominantly",
      "meaning": "主要地",
      "romanization": "",
      "topic": "六级后·写作表达"
    },
    {
      "type": "word",
      "front": "prohibit",
      "meaning": "禁止",
      "romanization": "",
      "topic": "六级后·社会规则"
    },
    {
      "type": "word",
      "front": "prospective",
      "meaning": "潜在的；未来的",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "reconcile",
      "meaning": "调和；使一致",
      "romanization": "",
      "topic": "六级后·解决问题"
    },
    {
      "type": "word",
      "front": "redundant",
      "meaning": "多余的；被裁减的",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "refine",
      "meaning": "改进；提炼",
      "romanization": "",
      "topic": "六级后·发展与结果"
    },
    {
      "type": "word",
      "front": "resilient",
      "meaning": "有韧性的；恢复力强的",
      "romanization": "",
      "topic": "六级后·个人发展"
    },
    {
      "type": "word",
      "front": "robust",
      "meaning": "稳健的；强健的",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "scrutinize",
      "meaning": "仔细审查",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "skeptical",
      "meaning": "持怀疑态度的",
      "romanization": "",
      "topic": "六级后·情绪态度"
    },
    {
      "type": "word",
      "front": "sophisticated",
      "meaning": "复杂精密的；老练的",
      "romanization": "",
      "topic": "六级后·科技与发展"
    },
    {
      "type": "word",
      "front": "trigger",
      "meaning": "引发；触发",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "undermine",
      "meaning": "削弱",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "viable",
      "meaning": "可行的；能存活的",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "withstand",
      "meaning": "承受；抵御",
      "romanization": "",
      "topic": "六级后·个人发展"
    },
    {
      "type": "word",
      "front": "adapt",
      "meaning": "适应",
      "romanization": "",
      "topic": "六级后·个人发展"
    },
    {
      "type": "word",
      "front": "address",
      "meaning": "处理；应对",
      "romanization": "",
      "topic": "六级后·解决问题"
    },
    {
      "type": "word",
      "front": "align",
      "meaning": "使一致；对齐",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "amplify",
      "meaning": "放大；增强",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "compromise",
      "meaning": "妥协；损害",
      "romanization": "",
      "topic": "六级后·解决问题"
    },
    {
      "type": "word",
      "front": "consolidate",
      "meaning": "巩固；合并",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "cultivate",
      "meaning": "培养",
      "romanization": "",
      "topic": "六级后·个人发展"
    },
    {
      "type": "word",
      "front": "defer",
      "meaning": "推迟；遵从",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "delegate",
      "meaning": "委派",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "deploy",
      "meaning": "部署；调配",
      "romanization": "",
      "topic": "六级后·科技与工作"
    },
    {
      "type": "word",
      "front": "differentiate",
      "meaning": "区分；使差异化",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "disrupt",
      "meaning": "扰乱；颠覆",
      "romanization": "",
      "topic": "六级后·科技与发展"
    },
    {
      "type": "word",
      "front": "divert",
      "meaning": "转移；使改道",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "embed",
      "meaning": "嵌入；深植",
      "romanization": "",
      "topic": "六级后·科技与发展"
    },
    {
      "type": "word",
      "front": "emerge",
      "meaning": "出现；显现",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "evaluate",
      "meaning": "评价；评估",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "exceed",
      "meaning": "超过",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "exploit",
      "meaning": "利用；剥削",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "word",
      "front": "expose",
      "meaning": "暴露；揭露",
      "romanization": "",
      "topic": "六级后·信息判断"
    },
    {
      "type": "word",
      "front": "extract",
      "meaning": "提取",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "generate",
      "meaning": "产生",
      "romanization": "",
      "topic": "六级后·科技与发展"
    },
    {
      "type": "word",
      "front": "highlight",
      "meaning": "突出；强调",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "implement",
      "meaning": "实施",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "infer",
      "meaning": "推断",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "leverage",
      "meaning": "利用；发挥优势",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "monitor",
      "meaning": "监测",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "navigate",
      "meaning": "应对；导航",
      "romanization": "",
      "topic": "六级后·解决问题"
    },
    {
      "type": "word",
      "front": "offset",
      "meaning": "抵消",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "overlook",
      "meaning": "忽视",
      "romanization": "",
      "topic": "六级后·思维与判断"
    },
    {
      "type": "word",
      "front": "prioritize",
      "meaning": "优先处理",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "quantify",
      "meaning": "量化",
      "romanization": "",
      "topic": "六级后·研究与分析"
    },
    {
      "type": "word",
      "front": "reassess",
      "meaning": "重新评估",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "reframe",
      "meaning": "重新表述；重构视角",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "regulate",
      "meaning": "监管；调节",
      "romanization": "",
      "topic": "六级后·社会规则"
    },
    {
      "type": "word",
      "front": "reshape",
      "meaning": "重塑",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "streamline",
      "meaning": "精简；提高效率",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "tackle",
      "meaning": "处理；应对",
      "romanization": "",
      "topic": "六级后·解决问题"
    },
    {
      "type": "word",
      "front": "transcend",
      "meaning": "超越",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "validate",
      "meaning": "验证",
      "romanization": "",
      "topic": "六级后·研究与分析"
    },
    {
      "type": "word",
      "front": "account for",
      "meaning": "解释；占比",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "adhere to",
      "meaning": "遵守；坚持",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "be prone to",
      "meaning": "容易……",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "be subject to",
      "meaning": "受……影响；受制于",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "bring about",
      "meaning": "导致；带来",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "come to terms with",
      "meaning": "接受并面对",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "draw on",
      "meaning": "利用；借鉴",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "give rise to",
      "meaning": "引起；导致",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "in light of",
      "meaning": "鉴于；考虑到",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "in the wake of",
      "meaning": "在……之后；受……影响",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "keep pace with",
      "meaning": "跟上",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "lay the groundwork for",
      "meaning": "为……奠定基础",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "make sense of",
      "meaning": "理解",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "on the grounds that",
      "meaning": "基于……理由",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "pave the way for",
      "meaning": "为……铺平道路",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "pose a challenge",
      "meaning": "构成挑战",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "shed light on",
      "meaning": "阐明",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "stem from",
      "meaning": "源于",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "take into account",
      "meaning": "把……考虑在内",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "with regard to",
      "meaning": "关于；就……而言",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "at odds with",
      "meaning": "与……不一致；冲突",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "by no means",
      "meaning": "绝不；并非",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "for the most part",
      "meaning": "大体上",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "in hindsight",
      "meaning": "事后看来",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "in practical terms",
      "meaning": "从实际角度说",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "to a large extent",
      "meaning": "在很大程度上",
      "romanization": "",
      "topic": "六级后·高频搭配"
    },
    {
      "type": "word",
      "front": "underlying assumption",
      "meaning": "潜在假设",
      "romanization": "",
      "topic": "六级后·学术搭配"
    },
    {
      "type": "word",
      "front": "compelling evidence",
      "meaning": "有力证据",
      "romanization": "",
      "topic": "六级后·学术搭配"
    },
    {
      "type": "word",
      "front": "long-term implication",
      "meaning": "长期影响",
      "romanization": "",
      "topic": "六级后·学术搭配"
    },
    {
      "type": "word",
      "front": "broader context",
      "meaning": "更广泛的背景",
      "romanization": "",
      "topic": "六级后·学术搭配"
    },
    {
      "type": "word",
      "front": "critical thinking",
      "meaning": "批判性思维",
      "romanization": "",
      "topic": "六级后·学习与认知"
    },
    {
      "type": "word",
      "front": "cognitive bias",
      "meaning": "认知偏差",
      "romanization": "",
      "topic": "六级后·学习与认知"
    },
    {
      "type": "word",
      "front": "decision-making",
      "meaning": "决策过程",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "trade-off",
      "meaning": "权衡；取舍",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "bottleneck",
      "meaning": "瓶颈",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "stakeholder",
      "meaning": "利益相关者",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "consensus",
      "meaning": "共识",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "accountability",
      "meaning": "责任制；问责",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "initiative",
      "meaning": "主动性；项目",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "word",
      "front": "momentum",
      "meaning": "势头；动力",
      "romanization": "",
      "topic": "六级后·变化趋势"
    },
    {
      "type": "word",
      "front": "backlash",
      "meaning": "强烈反弹",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "word",
      "front": "misconception",
      "meaning": "误解",
      "romanization": "",
      "topic": "六级后·学习与认知"
    },
    {
      "type": "word",
      "front": "perspective",
      "meaning": "视角",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "rationale",
      "meaning": "理由；依据",
      "romanization": "",
      "topic": "六级后·表达与论证"
    },
    {
      "type": "word",
      "front": "benchmark",
      "meaning": "基准",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "outcome",
      "meaning": "结果",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "insight",
      "meaning": "洞见",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "constraint",
      "meaning": "限制条件",
      "romanization": "",
      "topic": "六级后·分析"
    },
    {
      "type": "word",
      "front": "incentive",
      "meaning": "激励因素",
      "romanization": "",
      "topic": "六级后·社会与经济"
    },
    {
      "type": "word",
      "front": "inequality",
      "meaning": "不平等",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "word",
      "front": "sustainability",
      "meaning": "可持续性",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "word",
      "front": "privacy",
      "meaning": "隐私",
      "romanization": "",
      "topic": "六级后·科技与社会"
    },
    {
      "type": "word",
      "front": "literacy",
      "meaning": "素养",
      "romanization": "",
      "topic": "六级后·学习与认知"
    },
    {
      "type": "word",
      "front": "proficiency",
      "meaning": "熟练程度",
      "romanization": "",
      "topic": "六级后·学习与认知"
    },
    {
      "type": "sentence",
      "front": "The evidence is compelling, but the conclusion is still tentative.",
      "meaning": "证据很有说服力，但结论仍然只是暂定的。",
      "romanization": "",
      "topic": "六级后·学术表达"
    },
    {
      "type": "sentence",
      "front": "The report provides a comprehensive overview of the issue.",
      "meaning": "这份报告对该问题进行了全面概述。",
      "romanization": "",
      "topic": "六级后·学术表达"
    },
    {
      "type": "sentence",
      "front": "A plausible explanation is that people adapt to new conditions over time.",
      "meaning": "一个合理的解释是，人们会随着时间适应新的条件。",
      "romanization": "",
      "topic": "六级后·分析表达"
    },
    {
      "type": "sentence",
      "front": "The findings should be interpreted in a broader social context.",
      "meaning": "这些发现应放在更广泛的社会背景中理解。",
      "romanization": "",
      "topic": "六级后·学术表达"
    },
    {
      "type": "sentence",
      "front": "The study does not establish a direct causal relationship.",
      "meaning": "这项研究并未确立直接的因果关系。",
      "romanization": "",
      "topic": "六级后·学术表达"
    },
    {
      "type": "sentence",
      "front": "The distinction may seem subtle, but it has important implications.",
      "meaning": "这种区别看似细微，却有重要影响。",
      "romanization": "",
      "topic": "六级后·分析表达"
    },
    {
      "type": "sentence",
      "front": "We need to take both short-term costs and long-term benefits into account.",
      "meaning": "我们需要同时考虑短期成本和长期收益。",
      "romanization": "",
      "topic": "六级后·分析表达"
    },
    {
      "type": "sentence",
      "front": "The policy was introduced to mitigate the risks rather than eliminate them entirely.",
      "meaning": "这项政策旨在缓解风险，而不是完全消除风险。",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "sentence",
      "front": "The argument is coherent, although some assumptions remain questionable.",
      "meaning": "这个论证很连贯，不过其中一些假设仍值得质疑。",
      "romanization": "",
      "topic": "六级后·论证"
    },
    {
      "type": "sentence",
      "front": "The data reveal a persistent gap between expectation and reality.",
      "meaning": "数据显示，预期与现实之间存在持续差距。",
      "romanization": "",
      "topic": "六级后·分析表达"
    },
    {
      "type": "sentence",
      "front": "A single example is not sufficient to justify such a broad conclusion.",
      "meaning": "单个例子不足以证明如此宽泛的结论合理。",
      "romanization": "",
      "topic": "六级后·论证"
    },
    {
      "type": "sentence",
      "front": "The benefits are substantial, but they are not evenly distributed.",
      "meaning": "收益很可观，但分配并不均衡。",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "sentence",
      "front": "The proposal is feasible in principle, but implementation may be difficult.",
      "meaning": "这个方案原则上可行，但实施起来可能很困难。",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "sentence",
      "front": "The new system is designed to streamline routine tasks.",
      "meaning": "新系统旨在简化日常任务。",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "sentence",
      "front": "We should reassess our priorities before allocating more resources.",
      "meaning": "在分配更多资源之前，我们应该重新评估优先级。",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "sentence",
      "front": "The project has gained momentum over the past few months.",
      "meaning": "这个项目在过去几个月里势头越来越强。",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "sentence",
      "front": "The team reached a consensus after several rounds of discussion.",
      "meaning": "团队经过几轮讨论后达成了共识。",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "sentence",
      "front": "Please clarify the rationale behind this decision.",
      "meaning": "请说明这个决定背后的理由。",
      "romanization": "",
      "topic": "六级后·工作沟通"
    },
    {
      "type": "sentence",
      "front": "The deadline is tight, so we need to prioritize the most critical tasks.",
      "meaning": "截止时间很紧，所以我们需要优先处理最关键的任务。",
      "romanization": "",
      "topic": "六级后·工作沟通"
    },
    {
      "type": "sentence",
      "front": "I would rather refine the current solution than start from scratch.",
      "meaning": "我更愿意完善现有方案，而不是从头开始。",
      "romanization": "",
      "topic": "六级后·工作沟通"
    },
    {
      "type": "sentence",
      "front": "Let's identify the bottleneck before we add more people to the project.",
      "meaning": "在给项目增加人手前，我们先找出瓶颈。",
      "romanization": "",
      "topic": "六级后·工作沟通"
    },
    {
      "type": "sentence",
      "front": "The two teams need to align their expectations before moving forward.",
      "meaning": "两个团队在继续推进前需要统一预期。",
      "romanization": "",
      "topic": "六级后·工作沟通"
    },
    {
      "type": "sentence",
      "front": "This approach may work in theory, but we need to test it in practice.",
      "meaning": "这种方法理论上可能可行，但我们需要在实践中测试。",
      "romanization": "",
      "topic": "六级后·工作沟通"
    },
    {
      "type": "sentence",
      "front": "There is a trade-off between speed and accuracy.",
      "meaning": "速度和准确性之间存在权衡。",
      "romanization": "",
      "topic": "六级后·工作与管理"
    },
    {
      "type": "sentence",
      "front": "The issue is more nuanced than it appears at first glance.",
      "meaning": "这个问题比乍看之下更复杂细致。",
      "romanization": "",
      "topic": "六级后·自然表达"
    },
    {
      "type": "sentence",
      "front": "I can see where you're coming from, but I don't fully agree.",
      "meaning": "我能理解你的出发点，但我并不完全同意。",
      "romanization": "",
      "topic": "六级后·自然表达"
    },
    {
      "type": "sentence",
      "front": "That makes sense to some extent, but there is another factor to consider.",
      "meaning": "这在一定程度上说得通，但还有另一个因素需要考虑。",
      "romanization": "",
      "topic": "六级后·自然表达"
    },
    {
      "type": "sentence",
      "front": "I wouldn't rule out that possibility just yet.",
      "meaning": "我暂时不会排除那种可能性。",
      "romanization": "",
      "topic": "六级后·自然表达"
    },
    {
      "type": "sentence",
      "front": "In hindsight, I should have asked more questions before making a decision.",
      "meaning": "事后看来，我在做决定前应该多问一些问题。",
      "romanization": "",
      "topic": "六级后·自然表达"
    },
    {
      "type": "sentence",
      "front": "I'm not entirely convinced that this is the best option.",
      "meaning": "我并不完全相信这是最好的选择。",
      "romanization": "",
      "topic": "六级后·自然表达"
    },
    {
      "type": "sentence",
      "front": "What I find most compelling is the way the idea is supported by evidence.",
      "meaning": "我觉得最有说服力的是这个观点有证据支撑。",
      "romanization": "",
      "topic": "六级后·自然表达"
    },
    {
      "type": "sentence",
      "front": "I may have overlooked an important detail.",
      "meaning": "我可能忽略了一个重要细节。",
      "romanization": "",
      "topic": "六级后·自然表达"
    },
    {
      "type": "sentence",
      "front": "Could you elaborate on what you mean by that?",
      "meaning": "你能详细说明一下你的意思吗？",
      "romanization": "",
      "topic": "六级后·自然表达"
    },
    {
      "type": "sentence",
      "front": "I understand the general idea, but I'm struggling with the details.",
      "meaning": "大体思路我明白，但细节上还有些困难。",
      "romanization": "",
      "topic": "六级后·自然表达"
    },
    {
      "type": "sentence",
      "front": "The article sheds light on a problem that is often overlooked.",
      "meaning": "这篇文章阐明了一个经常被忽视的问题。",
      "romanization": "",
      "topic": "六级后·阅读表达"
    },
    {
      "type": "sentence",
      "front": "The author draws on several studies to support the main argument.",
      "meaning": "作者引用了多项研究来支持主要论点。",
      "romanization": "",
      "topic": "六级后·阅读表达"
    },
    {
      "type": "sentence",
      "front": "The final paragraph reinforces the central message of the passage.",
      "meaning": "最后一段强化了文章的核心信息。",
      "romanization": "",
      "topic": "六级后·阅读表达"
    },
    {
      "type": "sentence",
      "front": "The claim sounds convincing, but the source is not particularly credible.",
      "meaning": "这个说法听起来很有说服力，但来源并不特别可信。",
      "romanization": "",
      "topic": "六级后·信息判断"
    },
    {
      "type": "sentence",
      "front": "We should distinguish between correlation and causation.",
      "meaning": "我们应该区分相关关系和因果关系。",
      "romanization": "",
      "topic": "六级后·信息判断"
    },
    {
      "type": "sentence",
      "front": "The headline may distort the findings by removing important context.",
      "meaning": "标题可能因为省略重要背景而歪曲研究结果。",
      "romanization": "",
      "topic": "六级后·信息判断"
    },
    {
      "type": "sentence",
      "front": "The conclusion is based on an underlying assumption that may not be valid.",
      "meaning": "结论建立在一个可能并不成立的潜在假设上。",
      "romanization": "",
      "topic": "六级后·信息判断"
    },
    {
      "type": "sentence",
      "front": "The sample is too small to support a robust conclusion.",
      "meaning": "样本太小，不足以支持稳健的结论。",
      "romanization": "",
      "topic": "六级后·信息判断"
    },
    {
      "type": "sentence",
      "front": "Technology can enhance productivity, but it can also amplify existing problems.",
      "meaning": "技术能提高生产力，也可能放大已有问题。",
      "romanization": "",
      "topic": "六级后·科技与社会"
    },
    {
      "type": "sentence",
      "front": "Rapid innovation can make existing skills obsolete faster than expected.",
      "meaning": "快速创新可能让现有技能比预期更快过时。",
      "romanization": "",
      "topic": "六级后·科技与社会"
    },
    {
      "type": "sentence",
      "front": "Privacy concerns have become more prevalent as digital services expand.",
      "meaning": "随着数字服务扩张，隐私问题变得更加普遍。",
      "romanization": "",
      "topic": "六级后·科技与社会"
    },
    {
      "type": "sentence",
      "front": "The platform was designed to facilitate collaboration across different teams.",
      "meaning": "这个平台旨在促进不同团队之间的协作。",
      "romanization": "",
      "topic": "六级后·科技与社会"
    },
    {
      "type": "sentence",
      "front": "Automation is likely to reshape some jobs rather than eliminate all of them.",
      "meaning": "自动化更可能重塑一些工作，而不是把它们全部消灭。",
      "romanization": "",
      "topic": "六级后·科技与社会"
    },
    {
      "type": "sentence",
      "front": "The debate often overlooks how differently people are affected by the same technology.",
      "meaning": "这场讨论常常忽视同一种技术对不同人的影响差异。",
      "romanization": "",
      "topic": "六级后·科技与社会"
    },
    {
      "type": "sentence",
      "front": "Learning a language requires sustained exposure, not just occasional memorization.",
      "meaning": "学语言需要持续接触，而不仅是偶尔背诵。",
      "romanization": "",
      "topic": "六级后·学习"
    },
    {
      "type": "sentence",
      "front": "I retain new vocabulary better when I encounter it in several contexts.",
      "meaning": "当我在多个语境中遇到新词时，我记得更牢。",
      "romanization": "",
      "topic": "六级后·学习"
    },
    {
      "type": "sentence",
      "front": "A good example can make an abstract concept much easier to grasp.",
      "meaning": "一个好例子能让抽象概念更容易理解。",
      "romanization": "",
      "topic": "六级后·学习"
    },
    {
      "type": "sentence",
      "front": "It helps to reframe mistakes as feedback rather than failure.",
      "meaning": "把错误重新看作反馈而不是失败，会更有帮助。",
      "romanization": "",
      "topic": "六级后·学习"
    },
    {
      "type": "sentence",
      "front": "Progress is often cumulative and difficult to notice from day to day.",
      "meaning": "进步通常是累积的，很难每天都明显感觉到。",
      "romanization": "",
      "topic": "六级后·学习"
    },
    {
      "type": "sentence",
      "front": "Critical thinking involves questioning assumptions as well as checking evidence.",
      "meaning": "批判性思维既包括质疑假设，也包括核查证据。",
      "romanization": "",
      "topic": "六级后·学习"
    },
    {
      "type": "sentence",
      "front": "Fluency does not mean speaking without mistakes; it means communicating effectively.",
      "meaning": "流利并不意味着完全不犯错，而是能有效沟通。",
      "romanization": "",
      "topic": "六级后·学习"
    },
    {
      "type": "sentence",
      "front": "The ability to articulate an idea clearly is as important as having the idea itself.",
      "meaning": "清楚表达一个想法，和拥有这个想法本身同样重要。",
      "romanization": "",
      "topic": "六级后·学习"
    },
    {
      "type": "sentence",
      "front": "Economic growth alone does not necessarily lead to greater equality.",
      "meaning": "单纯的经济增长并不一定会带来更大的平等。",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "sentence",
      "front": "Public trust can deteriorate when institutions lack transparency.",
      "meaning": "当机构缺乏透明度时，公众信任可能恶化。",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "sentence",
      "front": "The measure may have unintended consequences for vulnerable groups.",
      "meaning": "这项措施可能给弱势群体带来意料之外的后果。",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "sentence",
      "front": "Sustainability requires balancing environmental, social, and economic concerns.",
      "meaning": "可持续发展需要平衡环境、社会和经济方面的考虑。",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "sentence",
      "front": "The problem stems from several factors rather than a single cause.",
      "meaning": "这个问题源于多个因素，而不是单一原因。",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "sentence",
      "front": "The reform could pave the way for broader changes in the future.",
      "meaning": "这项改革可能为未来更广泛的变化铺平道路。",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "sentence",
      "front": "The proposal has triggered a strong backlash from some groups.",
      "meaning": "这项提议引发了一些群体的强烈反弹。",
      "romanization": "",
      "topic": "六级后·社会议题"
    },
    {
      "type": "sentence",
      "front": "The company needs a more resilient strategy for dealing with uncertainty.",
      "meaning": "公司需要一种更有韧性的策略来应对不确定性。",
      "romanization": "",
      "topic": "六级后·商业表达"
    },
    {
      "type": "sentence",
      "front": "The new initiative is intended to foster innovation across the organization.",
      "meaning": "这项新计划旨在促进整个组织的创新。",
      "romanization": "",
      "topic": "六级后·商业表达"
    },
    {
      "type": "sentence",
      "front": "A clear benchmark makes it easier to evaluate progress objectively.",
      "meaning": "明确的基准更容易让我们客观评估进展。",
      "romanization": "",
      "topic": "六级后·商业表达"
    },
    {
      "type": "sentence",
      "front": "Managers should delegate responsibility without giving up accountability.",
      "meaning": "管理者应该委派责任，但不能放弃问责。",
      "romanization": "",
      "topic": "六级后·商业表达"
    },
    {
      "type": "sentence",
      "front": "The long-term outcome will depend on how consistently the plan is implemented.",
      "meaning": "长期结果将取决于计划执行得是否持续一致。",
      "romanization": "",
      "topic": "六级后·商业表达"
    },
    {
      "type": "sentence",
      "front": "The company is trying to leverage its existing strengths in a new market.",
      "meaning": "公司正试图利用现有优势进入新市场。",
      "romanization": "",
      "topic": "六级后·商业表达"
    },
    {
      "type": "sentence",
      "front": "The initial results exceeded our expectations.",
      "meaning": "初步结果超出了我们的预期。",
      "romanization": "",
      "topic": "六级后·商业表达"
    },
    {
      "type": "sentence",
      "front": "We need more empirical evidence before scaling the program.",
      "meaning": "在扩大这个项目之前，我们需要更多实证证据。",
      "romanization": "",
      "topic": "六级后·商业表达"
    },
    {
      "type": "sentence",
      "front": "The change may be uncomfortable at first, but it is not necessarily harmful.",
      "meaning": "变化一开始可能让人不舒服，但并不一定有害。",
      "romanization": "",
      "topic": "六级后·自然表达"
    },
    {
      "type": "sentence",
      "front": "There is no point in pretending the problem does not exist.",
      "meaning": "假装问题不存在没有意义。",
      "romanization": "",
      "topic": "六级后·自然表达"
    },
    {
      "type": "sentence",
      "front": "What matters is not whether the plan is perfect, but whether it is viable.",
      "meaning": "重要的不是计划是否完美，而是它是否可行。",
      "romanization": "",
      "topic": "六级后·自然表达"
    },
    {
      "type": "sentence",
      "front": "The situation is still evolving, so any prediction should remain tentative.",
      "meaning": "情况仍在变化，因此任何预测都应该保持谨慎。",
      "romanization": "",
      "topic": "六级后·自然表达"
    },
    {
      "type": "word",
      "front": "significant",
      "meaning": "重要的；显著的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "influence",
      "meaning": "影响；影响力",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "benefit",
      "meaning": "益处；使受益",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "challenge",
      "meaning": "挑战",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "improve",
      "meaning": "改善；提高",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "opportunity",
      "meaning": "机会",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "environment",
      "meaning": "环境",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "technology",
      "meaning": "技术",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "education",
      "meaning": "教育",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "society",
      "meaning": "社会",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "resource",
      "meaning": "资源",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "increase",
      "meaning": "增加",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "reduce",
      "meaning": "减少",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "require",
      "meaning": "需要；要求",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "provide",
      "meaning": "提供",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "involve",
      "meaning": "涉及；包含",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "achieve",
      "meaning": "实现；达到",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "consider",
      "meaning": "考虑；认为",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "suggest",
      "meaning": "建议；表明",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "indicate",
      "meaning": "表明；指出",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "maintain",
      "meaning": "保持；维持",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "develop",
      "meaning": "发展；培养",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "affect",
      "meaning": "影响",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "support",
      "meaning": "支持",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "compare",
      "meaning": "比较",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "prefer",
      "meaning": "更喜欢",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "avoid",
      "meaning": "避免",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "recognize",
      "meaning": "认识到；认出",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "respond",
      "meaning": "回应；反应",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "contribute",
      "meaning": "贡献；促成",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "establish",
      "meaning": "建立；确立",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "determine",
      "meaning": "决定；确定",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "available",
      "meaning": "可获得的；有空的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "effective",
      "meaning": "有效的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "essential",
      "meaning": "必要的；本质的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "individual",
      "meaning": "个人；个体的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "various",
      "meaning": "各种各样的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "likely",
      "meaning": "可能的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "recent",
      "meaning": "最近的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "similar",
      "meaning": "相似的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "necessary",
      "meaning": "必要的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "responsible",
      "meaning": "负责的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "convenient",
      "meaning": "方便的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "positive",
      "meaning": "积极的；正面的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "negative",
      "meaning": "消极的；负面的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "global",
      "meaning": "全球的",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "local",
      "meaning": "当地的",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "economic",
      "meaning": "经济的",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "cultural",
      "meaning": "文化的",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "traditional",
      "meaning": "传统的",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "modern",
      "meaning": "现代的",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "experience",
      "meaning": "经历；经验",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "research",
      "meaning": "研究",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "information",
      "meaning": "信息",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "knowledge",
      "meaning": "知识",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "ability",
      "meaning": "能力",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "solution",
      "meaning": "解决办法",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "pressure",
      "meaning": "压力",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "behavior",
      "meaning": "行为",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "relationship",
      "meaning": "关系",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "communication",
      "meaning": "交流；沟通",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "population",
      "meaning": "人口",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "quality",
      "meaning": "质量；品质",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "condition",
      "meaning": "条件；状况",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "purpose",
      "meaning": "目的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "result",
      "meaning": "结果",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "method",
      "meaning": "方法",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "process",
      "meaning": "过程",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "access",
      "meaning": "获取；使用权",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "demand",
      "meaning": "需求；要求",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "choice",
      "meaning": "选择",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "value",
      "meaning": "价值；重视",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "advantage",
      "meaning": "优势",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "disadvantage",
      "meaning": "劣势",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "concern",
      "meaning": "担忧；关注",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "reason",
      "meaning": "原因；理由",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "impact",
      "meaning": "影响；冲击",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "trend",
      "meaning": "趋势",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "issue",
      "meaning": "问题；议题",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "approach",
      "meaning": "方法；接近",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "attitude",
      "meaning": "态度",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "average",
      "meaning": "平均的；平均数",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "community",
      "meaning": "社区；群体",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "consume",
      "meaning": "消费；消耗",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "creative",
      "meaning": "有创造力的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "encourage",
      "meaning": "鼓励",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "factor",
      "meaning": "因素",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "focus",
      "meaning": "聚焦；重点",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "frequent",
      "meaning": "频繁的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "function",
      "meaning": "功能；起作用",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "generally",
      "meaning": "通常；一般来说",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "independent",
      "meaning": "独立的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "manage",
      "meaning": "设法做到；管理",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "measure",
      "meaning": "衡量；措施",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "observe",
      "meaning": "观察",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "participate",
      "meaning": "参加",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "potential",
      "meaning": "潜在的；潜力",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "practical",
      "meaning": "实用的",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "prevent",
      "meaning": "防止",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "promote",
      "meaning": "促进；推广",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "recommend",
      "meaning": "推荐；建议",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "replace",
      "meaning": "替代",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "respect",
      "meaning": "尊重",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "response",
      "meaning": "回应；反应",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "situation",
      "meaning": "情况",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "strategy",
      "meaning": "策略",
      "romanization": "",
      "topic": "基础巩固·核心词汇"
    },
    {
      "type": "word",
      "front": "survey",
      "meaning": "调查",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "transportation",
      "meaning": "交通",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "word",
      "front": "volunteer",
      "meaning": "志愿者；志愿服务",
      "romanization": "",
      "topic": "基础巩固·主题词"
    },
    {
      "type": "sentence",
      "front": "The new policy may have a significant impact on students.",
      "meaning": "这项新政策可能会对学生产生显著影响。",
      "romanization": "",
      "topic": "基础巩固·阅读"
    },
    {
      "type": "sentence",
      "front": "Regular exercise can improve both physical and mental health.",
      "meaning": "规律锻炼可以改善身心健康。",
      "romanization": "",
      "topic": "基础巩固·健康"
    },
    {
      "type": "sentence",
      "front": "Technology provides people with easier access to information.",
      "meaning": "科技让人们更容易获取信息。",
      "romanization": "",
      "topic": "基础巩固·科技"
    },
    {
      "type": "sentence",
      "front": "Many students face pressure when preparing for important exams.",
      "meaning": "许多学生在准备重要考试时会面临压力。",
      "romanization": "",
      "topic": "基础巩固·教育"
    },
    {
      "type": "sentence",
      "front": "It is important to develop the ability to think independently.",
      "meaning": "培养独立思考的能力很重要。",
      "romanization": "",
      "topic": "基础巩固·教育"
    },
    {
      "type": "sentence",
      "front": "The survey shows that young people prefer convenient services.",
      "meaning": "调查显示，年轻人更喜欢便利的服务。",
      "romanization": "",
      "topic": "基础巩固·调查"
    },
    {
      "type": "sentence",
      "front": "This method is effective because it saves both time and energy.",
      "meaning": "这个方法很有效，因为它既节省时间又节省精力。",
      "romanization": "",
      "topic": "基础巩固·写作"
    },
    {
      "type": "sentence",
      "front": "We should consider both the advantages and disadvantages before making a choice.",
      "meaning": "做选择前，我们应该同时考虑优点和缺点。",
      "romanization": "",
      "topic": "基础巩固·写作"
    },
    {
      "type": "sentence",
      "front": "A good learning environment can encourage students to participate more actively.",
      "meaning": "良好的学习环境可以鼓励学生更积极参与。",
      "romanization": "",
      "topic": "基础巩固·教育"
    },
    {
      "type": "sentence",
      "front": "The result suggests that communication plays an important role in relationships.",
      "meaning": "结果表明，沟通在人际关系中起着重要作用。",
      "romanization": "",
      "topic": "基础巩固·阅读"
    },
    {
      "type": "sentence",
      "front": "Online learning offers more flexibility, but it also requires self-discipline.",
      "meaning": "在线学习更灵活，但也需要自律。",
      "romanization": "",
      "topic": "基础巩固·教育"
    },
    {
      "type": "sentence",
      "front": "Environmental problems have become a global concern in recent years.",
      "meaning": "近年来，环境问题已经成为全球关注的话题。",
      "romanization": "",
      "topic": "基础巩固·环境"
    },
    {
      "type": "sentence",
      "front": "Reducing waste is a practical way to protect the environment.",
      "meaning": "减少浪费是保护环境的一种实用方式。",
      "romanization": "",
      "topic": "基础巩固·环境"
    },
    {
      "type": "sentence",
      "front": "Public transportation can help reduce traffic pressure in large cities.",
      "meaning": "公共交通可以帮助缓解大城市的交通压力。",
      "romanization": "",
      "topic": "基础巩固·交通"
    },
    {
      "type": "sentence",
      "front": "People are more likely to change their behavior when they understand the reason.",
      "meaning": "当人们理解原因时，更有可能改变自己的行为。",
      "romanization": "",
      "topic": "基础巩固·阅读"
    },
    {
      "type": "sentence",
      "front": "The company plans to provide more opportunities for young employees.",
      "meaning": "公司计划为年轻员工提供更多机会。",
      "romanization": "",
      "topic": "基础巩固·工作"
    },
    {
      "type": "sentence",
      "front": "It is necessary to maintain a balance between work and rest.",
      "meaning": "保持工作与休息之间的平衡是必要的。",
      "romanization": "",
      "topic": "基础巩固·生活"
    },
    {
      "type": "sentence",
      "front": "Different cultures may have different attitudes toward time.",
      "meaning": "不同文化对时间可能有不同态度。",
      "romanization": "",
      "topic": "基础巩固·文化"
    },
    {
      "type": "sentence",
      "front": "The internet has changed the way people communicate with each other.",
      "meaning": "互联网改变了人们彼此交流的方式。",
      "romanization": "",
      "topic": "基础巩固·科技"
    },
    {
      "type": "sentence",
      "front": "Students should learn how to manage their time effectively.",
      "meaning": "学生应该学会如何有效管理时间。",
      "romanization": "",
      "topic": "基础巩固·教育"
    },
    {
      "type": "sentence",
      "front": "The quality of a product is often more important than its price.",
      "meaning": "产品质量往往比价格更重要。",
      "romanization": "",
      "topic": "基础巩固·阅读"
    },
    {
      "type": "sentence",
      "front": "More people are beginning to recognize the value of lifelong learning.",
      "meaning": "越来越多的人开始认识到终身学习的价值。",
      "romanization": "",
      "topic": "基础巩固·教育"
    },
    {
      "type": "sentence",
      "front": "The research indicates that sleep can affect memory and attention.",
      "meaning": "研究表明，睡眠会影响记忆和注意力。",
      "romanization": "",
      "topic": "基础巩固·健康"
    },
    {
      "type": "sentence",
      "front": "Volunteering can provide valuable experience for college students.",
      "meaning": "志愿服务可以为大学生提供宝贵经验。",
      "romanization": "",
      "topic": "基础巩固·校园"
    },
    {
      "type": "sentence",
      "front": "A positive attitude can help people deal with difficult situations.",
      "meaning": "积极的态度可以帮助人们应对困难情况。",
      "romanization": "",
      "topic": "基础巩固·生活"
    },
    {
      "type": "sentence",
      "front": "The purpose of this report is to compare two different methods.",
      "meaning": "这份报告的目的是比较两种不同的方法。",
      "romanization": "",
      "topic": "基础巩固·写作"
    },
    {
      "type": "sentence",
      "front": "There are various reasons why people choose to study abroad.",
      "meaning": "人们选择出国留学有各种各样的原因。",
      "romanization": "",
      "topic": "基础巩固·教育"
    },
    {
      "type": "sentence",
      "front": "The number of online shoppers has increased rapidly in recent years.",
      "meaning": "近年来网购人数增长很快。",
      "romanization": "",
      "topic": "基础巩固·社会"
    },
    {
      "type": "sentence",
      "front": "This trend is likely to continue as technology develops.",
      "meaning": "随着科技发展，这一趋势很可能继续。",
      "romanization": "",
      "topic": "基础巩固·阅读"
    },
    {
      "type": "sentence",
      "front": "Parents can influence children's habits through their own behavior.",
      "meaning": "父母可以通过自己的行为影响孩子的习惯。",
      "romanization": "",
      "topic": "基础巩固·家庭"
    },
    {
      "type": "sentence",
      "front": "The city is trying to improve public services for local residents.",
      "meaning": "这座城市正在努力改善面向当地居民的公共服务。",
      "romanization": "",
      "topic": "基础巩固·社会"
    },
    {
      "type": "sentence",
      "front": "We need a practical solution rather than a temporary answer.",
      "meaning": "我们需要一个实际的解决办法，而不是临时应对。",
      "romanization": "",
      "topic": "基础巩固·写作"
    },
    {
      "type": "sentence",
      "front": "The program was established to support students with financial difficulties.",
      "meaning": "这个项目建立的目的是帮助有经济困难的学生。",
      "romanization": "",
      "topic": "基础巩固·教育"
    },
    {
      "type": "sentence",
      "front": "People should avoid making decisions when they are under too much pressure.",
      "meaning": "人们应避免在压力过大时做决定。",
      "romanization": "",
      "topic": "基础巩固·生活"
    },
    {
      "type": "sentence",
      "front": "The teacher recommended several useful resources for further study.",
      "meaning": "老师推荐了几种有用的资料供进一步学习。",
      "romanization": "",
      "topic": "基础巩固·教育"
    },
    {
      "type": "sentence",
      "front": "The demand for convenient digital services continues to grow.",
      "meaning": "对便捷数字服务的需求持续增长。",
      "romanization": "",
      "topic": "基础巩固·科技"
    },
    {
      "type": "sentence",
      "front": "Social media has both positive and negative effects on communication.",
      "meaning": "社交媒体对沟通既有积极影响，也有消极影响。",
      "romanization": "",
      "topic": "基础巩固·科技"
    },
    {
      "type": "sentence",
      "front": "A person's experience can shape the way he or she understands a problem.",
      "meaning": "一个人的经历会影响其理解问题的方式。",
      "romanization": "",
      "topic": "基础巩固·阅读"
    },
    {
      "type": "sentence",
      "front": "The main issue is not lack of information but how to use it effectively.",
      "meaning": "主要问题不是缺少信息，而是如何有效利用信息。",
      "romanization": "",
      "topic": "基础巩固·阅读"
    },
    {
      "type": "sentence",
      "front": "This change may contribute to better communication between teachers and students.",
      "meaning": "这一变化可能有助于改善师生沟通。",
      "romanization": "",
      "topic": "基础巩固·教育"
    },
    {
      "type": "sentence",
      "front": "If we focus only on results, we may ignore the learning process.",
      "meaning": "如果只关注结果，我们可能会忽略学习过程。",
      "romanization": "",
      "topic": "基础巩固·教育"
    },
    {
      "type": "sentence",
      "front": "The article discusses how modern technology affects traditional lifestyles.",
      "meaning": "这篇文章讨论了现代科技如何影响传统生活方式。",
      "romanization": "",
      "topic": "基础巩固·阅读"
    },
    {
      "type": "sentence",
      "front": "It is widely believed that education can create more opportunities for individuals.",
      "meaning": "人们普遍认为教育可以为个人创造更多机会。",
      "romanization": "",
      "topic": "基础巩固·写作"
    },
    {
      "type": "sentence",
      "front": "Although the task was challenging, the team managed to complete it on time.",
      "meaning": "尽管任务很有挑战性，团队还是设法按时完成了。",
      "romanization": "",
      "topic": "基础巩固·长难句"
    },
    {
      "type": "sentence",
      "front": "The more clearly we understand our goals, the easier it is to choose an effective strategy.",
      "meaning": "我们越清楚自己的目标，就越容易选择有效策略。",
      "romanization": "",
      "topic": "基础巩固·长难句"
    }
  ],
  "th": [
    {
      "type": "word",
      "front": "ฉัน",
      "meaning": "我（常见女性自称）",
      "romanization": "chan",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "ผม",
      "meaning": "我（常见男性自称）",
      "romanization": "phom",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "คุณ",
      "meaning": "你；您",
      "romanization": "khun",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "เขา",
      "meaning": "他；她",
      "romanization": "khao",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "เรา",
      "meaning": "我们；我（口语也可）",
      "romanization": "rao",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "เพื่อน",
      "meaning": "朋友",
      "romanization": "phuean",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "ครอบครัว",
      "meaning": "家庭；家人",
      "romanization": "khrop khrua",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "พ่อ",
      "meaning": "爸爸",
      "romanization": "pho",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "แม่",
      "meaning": "妈妈",
      "romanization": "mae",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "บ้าน",
      "meaning": "家；房子",
      "romanization": "ban",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "โรงเรียน",
      "meaning": "学校",
      "romanization": "rong rian",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "ร้านอาหาร",
      "meaning": "餐厅",
      "romanization": "ran ahan",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "ร้านค้า",
      "meaning": "商店",
      "romanization": "ran kha",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "ตลาด",
      "meaning": "市场",
      "romanization": "talat",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "โรงพยาบาล",
      "meaning": "医院",
      "romanization": "rong phayaban",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "ธนาคาร",
      "meaning": "银行",
      "romanization": "thanakhan",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "ห้อง",
      "meaning": "房间",
      "romanization": "hong",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "ห้องน้ำ",
      "meaning": "洗手间",
      "romanization": "hong nam",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "วันนี้",
      "meaning": "今天",
      "romanization": "wan ni",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "พรุ่งนี้",
      "meaning": "明天",
      "romanization": "phrung ni",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "เมื่อวาน",
      "meaning": "昨天",
      "romanization": "muea wan",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "ตอนเช้า",
      "meaning": "早上",
      "romanization": "ton chao",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "ตอนเย็น",
      "meaning": "傍晚；晚上",
      "romanization": "ton yen",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "เวลา",
      "meaning": "时间",
      "romanization": "wela",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "ตอนนี้",
      "meaning": "现在",
      "romanization": "ton ni",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "น้ำ",
      "meaning": "水",
      "romanization": "nam",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "ข้าว",
      "meaning": "米饭；饭",
      "romanization": "khao",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "กาแฟ",
      "meaning": "咖啡",
      "romanization": "kafae",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "นม",
      "meaning": "牛奶",
      "romanization": "nom",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "ขนมปัง",
      "meaning": "面包",
      "romanization": "khanom pang",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "ผลไม้",
      "meaning": "水果",
      "romanization": "phonlamai",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "แอปเปิล",
      "meaning": "苹果",
      "romanization": "aeppoen",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "อาหาร",
      "meaning": "食物",
      "romanization": "ahan",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "ไก่",
      "meaning": "鸡肉；鸡",
      "romanization": "kai",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "หมู",
      "meaning": "猪肉；猪",
      "romanization": "mu",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "ไป",
      "meaning": "去",
      "romanization": "pai",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "มา",
      "meaning": "来",
      "romanization": "ma",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "กิน",
      "meaning": "吃",
      "romanization": "kin",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "ดื่ม",
      "meaning": "喝",
      "romanization": "duem",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "ดู",
      "meaning": "看",
      "romanization": "du",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "ฟัง",
      "meaning": "听",
      "romanization": "fang",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "พูด",
      "meaning": "说",
      "romanization": "phut",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "เรียน",
      "meaning": "学习",
      "romanization": "rian",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "ทำงาน",
      "meaning": "工作",
      "romanization": "tham ngan",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "นอน",
      "meaning": "睡觉",
      "romanization": "non",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "ตื่น",
      "meaning": "起床；醒",
      "romanization": "tuen",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "ชอบ",
      "meaning": "喜欢",
      "romanization": "chop",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "ไม่ชอบ",
      "meaning": "不喜欢",
      "romanization": "mai chop",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "รู้",
      "meaning": "知道",
      "romanization": "ru",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "ไม่รู้",
      "meaning": "不知道",
      "romanization": "mai ru",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "มี",
      "meaning": "有",
      "romanization": "mi",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "ไม่มี",
      "meaning": "没有",
      "romanization": "mai mi",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "อยาก",
      "meaning": "想要",
      "romanization": "yak",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "ซื้อ",
      "meaning": "买",
      "romanization": "sue",
      "topic": "动词"
    },
    {
      "type": "word",
      "front": "ดี",
      "meaning": "好",
      "romanization": "di",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "ไม่ดี",
      "meaning": "不好",
      "romanization": "mai di",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "ใหญ่",
      "meaning": "大",
      "romanization": "yai",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "เล็ก",
      "meaning": "小",
      "romanization": "lek",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "มาก",
      "meaning": "多；很",
      "romanization": "mak",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "น้อย",
      "meaning": "少",
      "romanization": "noi",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "เร็ว",
      "meaning": "快",
      "romanization": "reo",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "ช้า",
      "meaning": "慢",
      "romanization": "cha",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "ง่าย",
      "meaning": "容易",
      "romanization": "ngai",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "ยาก",
      "meaning": "难",
      "romanization": "yak",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "ร้อน",
      "meaning": "热",
      "romanization": "ron",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "เย็น",
      "meaning": "凉；冷",
      "romanization": "yen",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "สวย",
      "meaning": "漂亮",
      "romanization": "suai",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "แพง",
      "meaning": "贵",
      "romanization": "phaeng",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "ถูก",
      "meaning": "便宜；正确",
      "romanization": "thuk",
      "topic": "形容词"
    },
    {
      "type": "word",
      "front": "อร่อย",
      "meaning": "好吃",
      "romanization": "aroi",
      "topic": "形容词"
    },
    {
      "type": "sentence",
      "front": "สวัสดีค่ะ",
      "meaning": "你好。（女性常用）",
      "romanization": "sawatdi kha",
      "topic": "问候"
    },
    {
      "type": "sentence",
      "front": "สวัสดีครับ",
      "meaning": "你好。（男性常用）",
      "romanization": "sawatdi khrap",
      "topic": "问候"
    },
    {
      "type": "sentence",
      "front": "ขอบคุณค่ะ",
      "meaning": "谢谢。（女性常用）",
      "romanization": "khop khun kha",
      "topic": "问候"
    },
    {
      "type": "sentence",
      "front": "ขอบคุณครับ",
      "meaning": "谢谢。（男性常用）",
      "romanization": "khop khun khrap",
      "topic": "问候"
    },
    {
      "type": "sentence",
      "front": "ขอโทษค่ะ",
      "meaning": "对不起。（女性常用）",
      "romanization": "kho thot kha",
      "topic": "问候"
    },
    {
      "type": "sentence",
      "front": "ไม่เป็นไรค่ะ",
      "meaning": "没关系。（女性常用）",
      "romanization": "mai pen rai kha",
      "topic": "问候"
    },
    {
      "type": "sentence",
      "front": "คุณชื่ออะไรคะ",
      "meaning": "你叫什么名字？",
      "romanization": "khun chue arai kha",
      "topic": "自我介绍"
    },
    {
      "type": "sentence",
      "front": "ฉันชื่อมินค่ะ",
      "meaning": "我叫敏。",
      "romanization": "chan chue min kha",
      "topic": "自我介绍"
    },
    {
      "type": "sentence",
      "front": "คุณมาจากไหนคะ",
      "meaning": "你从哪里来？",
      "romanization": "khun ma chak nai kha",
      "topic": "自我介绍"
    },
    {
      "type": "sentence",
      "front": "ฉันเรียนภาษาไทยค่ะ",
      "meaning": "我学习泰语。",
      "romanization": "chan rian phasa thai kha",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "คำนี้แปลว่าอะไรคะ",
      "meaning": "这个词是什么意思？",
      "romanization": "kham ni plae wa arai kha",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "พูดอีกครั้งได้ไหมคะ",
      "meaning": "可以再说一遍吗？",
      "romanization": "phut ik khrang dai mai kha",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "พูดช้าๆ ได้ไหมคะ",
      "meaning": "可以说慢一点吗？",
      "romanization": "phut cha cha dai mai kha",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "ฉันไม่เข้าใจค่ะ",
      "meaning": "我不明白。",
      "romanization": "chan mai khao chai kha",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "วันนี้ฉันไปโรงเรียนค่ะ",
      "meaning": "今天我去学校。",
      "romanization": "wan ni chan pai rong rian kha",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "ตอนนี้ฉันอยู่บ้านค่ะ",
      "meaning": "现在我在家。",
      "romanization": "ton ni chan yu ban kha",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "ตอนเช้าฉันดื่มกาแฟค่ะ",
      "meaning": "早上我喝咖啡。",
      "romanization": "ton chao chan duem kafae kha",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "ฉันกินข้าวตอนเที่ยงค่ะ",
      "meaning": "我中午吃饭。",
      "romanization": "chan kin khao ton thiang kha",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "วันนี้ฉันยุ่งนิดหน่อยค่ะ",
      "meaning": "今天我有点忙。",
      "romanization": "wan ni chan yung nit noi kha",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "พรุ่งนี้คุณว่างไหมคะ",
      "meaning": "你明天有空吗？",
      "romanization": "phrung ni khun wang mai kha",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "ฉันอยากไปประเทศไทยค่ะ",
      "meaning": "我想去泰国。",
      "romanization": "chan yak pai prathet thai kha",
      "topic": "愿望"
    },
    {
      "type": "sentence",
      "front": "ฉันอยากกินอาหารไทยค่ะ",
      "meaning": "我想吃泰国菜。",
      "romanization": "chan yak kin ahan thai kha",
      "topic": "愿望"
    },
    {
      "type": "sentence",
      "front": "ฉันอยากดื่มน้ำค่ะ",
      "meaning": "我想喝水。",
      "romanization": "chan yak duem nam kha",
      "topic": "愿望"
    },
    {
      "type": "sentence",
      "front": "ฉันชอบกาแฟค่ะ",
      "meaning": "我喜欢咖啡。",
      "romanization": "chan chop kafae kha",
      "topic": "喜好"
    },
    {
      "type": "sentence",
      "front": "ฉันไม่ชอบอาหารเผ็ดค่ะ",
      "meaning": "我不喜欢辣的食物。",
      "romanization": "chan mai chop ahan phet kha",
      "topic": "喜好"
    },
    {
      "type": "sentence",
      "front": "อันนี้เท่าไหร่คะ",
      "meaning": "这个多少钱？",
      "romanization": "an ni thao rai kha",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "แพงไปหน่อยค่ะ",
      "meaning": "有点太贵了。",
      "romanization": "phaeng pai noi kha",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "มีอันที่ถูกกว่านี้ไหมคะ",
      "meaning": "有更便宜的吗？",
      "romanization": "mi an thi thuk kwa ni mai kha",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "เอาอันนี้ค่ะ",
      "meaning": "我要这个。",
      "romanization": "ao an ni kha",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "ขอเมนูหน่อยค่ะ",
      "meaning": "请给我菜单。",
      "romanization": "kho menu noi kha",
      "topic": "点餐"
    },
    {
      "type": "sentence",
      "front": "ขอน้ำหนึ่งแก้วค่ะ",
      "meaning": "请给我一杯水。",
      "romanization": "kho nam nueng kaeo kha",
      "topic": "点餐"
    },
    {
      "type": "sentence",
      "front": "ไม่เผ็ดได้ไหมคะ",
      "meaning": "可以不辣吗？",
      "romanization": "mai phet dai mai kha",
      "topic": "点餐"
    },
    {
      "type": "sentence",
      "front": "อร่อยมากค่ะ",
      "meaning": "非常好吃。",
      "romanization": "aroi mak kha",
      "topic": "点餐"
    },
    {
      "type": "sentence",
      "front": "ห้องน้ำอยู่ที่ไหนคะ",
      "meaning": "洗手间在哪里？",
      "romanization": "hong nam yu thi nai kha",
      "topic": "问路"
    },
    {
      "type": "sentence",
      "front": "สถานีรถไฟฟ้าอยู่ที่ไหนคะ",
      "meaning": "轻轨/地铁站在哪里？",
      "romanization": "sathani rot fai fa yu thi nai kha",
      "topic": "问路"
    },
    {
      "type": "sentence",
      "front": "ไกลจากที่นี่ไหมคะ",
      "meaning": "离这里远吗？",
      "romanization": "klai chak thi ni mai kha",
      "topic": "问路"
    },
    {
      "type": "sentence",
      "front": "เลี้ยวซ้ายค่ะ",
      "meaning": "向左转。",
      "romanization": "liao sai kha",
      "topic": "问路"
    },
    {
      "type": "sentence",
      "front": "วันนี้อากาศดีค่ะ",
      "meaning": "今天天气很好。",
      "romanization": "wan ni akat di kha",
      "topic": "天气"
    },
    {
      "type": "sentence",
      "front": "วันนี้ร้อนมากค่ะ",
      "meaning": "今天很热。",
      "romanization": "wan ni ron mak kha",
      "topic": "天气"
    },
    {
      "type": "sentence",
      "front": "ฝนตกค่ะ",
      "meaning": "下雨了。",
      "romanization": "fon tok kha",
      "topic": "天气"
    },
    {
      "type": "sentence",
      "front": "ถ่ายรูปได้ไหมคะ",
      "meaning": "可以拍照吗？",
      "romanization": "thai rup dai mai kha",
      "topic": "实用表达"
    },
    {
      "type": "sentence",
      "front": "ช่วยหน่อยได้ไหมคะ",
      "meaning": "可以帮我一下吗？",
      "romanization": "chuai noi dai mai kha",
      "topic": "实用表达"
    },
    {
      "type": "sentence",
      "front": "ฉันไม่รู้ค่ะ",
      "meaning": "我不知道。",
      "romanization": "chan mai ru kha",
      "topic": "实用表达"
    },
    {
      "type": "sentence",
      "front": "เจอกันพรุ่งนี้นะคะ",
      "meaning": "明天见。",
      "romanization": "choe kan phrung ni na kha",
      "topic": "实用表达"
    },
    {
      "type": "sentence",
      "front": "ยินดีที่ได้รู้จักค่ะ",
      "meaning": "很高兴认识你。",
      "romanization": "yin di thi dai ru chak kha",
      "topic": "实用表达"
    },
    {
      "type": "word",
      "front": "คน",
      "meaning": "人",
      "romanization": "khon",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "พี่",
      "meaning": "哥哥/姐姐；年长同辈",
      "romanization": "phi",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "น้อง",
      "meaning": "弟弟/妹妹；年幼同辈",
      "romanization": "nong",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "ครู",
      "meaning": "老师",
      "romanization": "khru",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "นักเรียน",
      "meaning": "学生",
      "romanization": "nak rian",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "นักศึกษา",
      "meaning": "大学生",
      "romanization": "nak sueksa",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "ผู้ชาย",
      "meaning": "男性",
      "romanization": "phu chai",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "ผู้หญิง",
      "meaning": "女性",
      "romanization": "phu ying",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "เด็ก",
      "meaning": "孩子",
      "romanization": "dek",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "หมอ",
      "meaning": "医生",
      "romanization": "mo",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "พนักงาน",
      "meaning": "职员",
      "romanization": "phanak ngan",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "มหาวิทยาลัย",
      "meaning": "大学",
      "romanization": "maha witthayalai",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "บริษัท",
      "meaning": "公司",
      "romanization": "borisat",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "สำนักงาน",
      "meaning": "办公室",
      "romanization": "samnak ngan",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "ร้าน",
      "meaning": "店",
      "romanization": "ran",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "ร้านขายยา",
      "meaning": "药店",
      "romanization": "ran khai ya",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "สนามบิน",
      "meaning": "机场",
      "romanization": "sanam bin",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "สถานี",
      "meaning": "车站",
      "romanization": "sathani",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "โรงแรม",
      "meaning": "酒店",
      "romanization": "rong raem",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "คาเฟ่",
      "meaning": "咖啡馆",
      "romanization": "kha-fe",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "ถนน",
      "meaning": "道路",
      "romanization": "thanon",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "สวน",
      "meaning": "公园；花园",
      "romanization": "suan",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "ห้าง",
      "meaning": "商场",
      "romanization": "hang",
      "topic": "地点"
    },
    {
      "type": "word",
      "front": "ซ้าย",
      "meaning": "左边",
      "romanization": "sai",
      "topic": "方向"
    },
    {
      "type": "word",
      "front": "ขวา",
      "meaning": "右边",
      "romanization": "khwa",
      "topic": "方向"
    },
    {
      "type": "word",
      "front": "ตรง",
      "meaning": "直；正对",
      "romanization": "trong",
      "topic": "方向"
    },
    {
      "type": "word",
      "front": "ข้างหน้า",
      "meaning": "前面",
      "romanization": "khang na",
      "topic": "方向"
    },
    {
      "type": "word",
      "front": "ข้างหลัง",
      "meaning": "后面",
      "romanization": "khang lang",
      "topic": "方向"
    },
    {
      "type": "word",
      "front": "ใกล้",
      "meaning": "近",
      "romanization": "klai",
      "topic": "方向"
    },
    {
      "type": "word",
      "front": "ไกล",
      "meaning": "远",
      "romanization": "klai",
      "topic": "方向"
    },
    {
      "type": "word",
      "front": "กลับ",
      "meaning": "回去；回来",
      "romanization": "klap",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "อาบน้ำ",
      "meaning": "洗澡",
      "romanization": "ap nam",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "แต่งตัว",
      "meaning": "穿衣打扮",
      "romanization": "taeng tua",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "อ่าน",
      "meaning": "读",
      "romanization": "an",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "เขียน",
      "meaning": "写",
      "romanization": "khian",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "ขาย",
      "meaning": "卖",
      "romanization": "khai",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "จ่าย",
      "meaning": "支付",
      "romanization": "chai",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "เปิด",
      "meaning": "打开",
      "romanization": "poet",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "ปิด",
      "meaning": "关闭",
      "romanization": "pit",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "รอ",
      "meaning": "等待",
      "romanization": "ro",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "หา",
      "meaning": "找",
      "romanization": "ha",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "เจอ",
      "meaning": "找到；遇见",
      "romanization": "choe",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "ช่วย",
      "meaning": "帮助",
      "romanization": "chuai",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "ใช้",
      "meaning": "使用",
      "romanization": "chai",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "รัก",
      "meaning": "爱",
      "romanization": "rak",
      "topic": "情绪想法"
    },
    {
      "type": "word",
      "front": "เข้าใจ",
      "meaning": "理解",
      "romanization": "khao chai",
      "topic": "情绪想法"
    },
    {
      "type": "word",
      "front": "จำ",
      "meaning": "记得",
      "romanization": "cham",
      "topic": "情绪想法"
    },
    {
      "type": "word",
      "front": "ลืม",
      "meaning": "忘记",
      "romanization": "luem",
      "topic": "情绪想法"
    },
    {
      "type": "word",
      "front": "คิด",
      "meaning": "想；认为",
      "romanization": "khit",
      "topic": "情绪想法"
    },
    {
      "type": "word",
      "front": "ถาม",
      "meaning": "问",
      "romanization": "tham",
      "topic": "交流"
    },
    {
      "type": "word",
      "front": "ตอบ",
      "meaning": "回答",
      "romanization": "top",
      "topic": "交流"
    },
    {
      "type": "word",
      "front": "บอก",
      "meaning": "告诉",
      "romanization": "bok",
      "topic": "交流"
    },
    {
      "type": "word",
      "front": "คุย",
      "meaning": "聊天",
      "romanization": "khui",
      "topic": "交流"
    },
    {
      "type": "word",
      "front": "โทร",
      "meaning": "打电话",
      "romanization": "tho",
      "topic": "交流"
    },
    {
      "type": "word",
      "front": "ส่ง",
      "meaning": "发送",
      "romanization": "song",
      "topic": "交流"
    },
    {
      "type": "word",
      "front": "รับ",
      "meaning": "接收；接受",
      "romanization": "rap",
      "topic": "交流"
    },
    {
      "type": "word",
      "front": "เริ่ม",
      "meaning": "开始",
      "romanization": "roem",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "เสร็จ",
      "meaning": "完成",
      "romanization": "set",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "เลือก",
      "meaning": "选择",
      "romanization": "lueak",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "เปลี่ยน",
      "meaning": "改变；更换",
      "romanization": "plian",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "จอง",
      "meaning": "预订",
      "romanization": "chong",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "สั่ง",
      "meaning": "点单；命令",
      "romanization": "sang",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "แย่",
      "meaning": "差；不好",
      "romanization": "yae",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "หล่อ",
      "meaning": "帅",
      "romanization": "lo",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "ใหม่",
      "meaning": "新",
      "romanization": "mai",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "เก่า",
      "meaning": "旧",
      "romanization": "kao",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "หนาว",
      "meaning": "冷",
      "romanization": "nao",
      "topic": "天气状态"
    },
    {
      "type": "word",
      "front": "หิว",
      "meaning": "饿",
      "romanization": "hiu",
      "topic": "身体状态"
    },
    {
      "type": "word",
      "front": "อิ่ม",
      "meaning": "饱",
      "romanization": "im",
      "topic": "身体状态"
    },
    {
      "type": "word",
      "front": "เหนื่อย",
      "meaning": "累",
      "romanization": "nueai",
      "topic": "身体状态"
    },
    {
      "type": "word",
      "front": "ง่วง",
      "meaning": "困",
      "romanization": "nguang",
      "topic": "身体状态"
    },
    {
      "type": "word",
      "front": "สนุก",
      "meaning": "有趣；好玩",
      "romanization": "sanuk",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "สะอาด",
      "meaning": "干净",
      "romanization": "sa-at",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "สกปรก",
      "meaning": "脏",
      "romanization": "sokkaprok",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "เงียบ",
      "meaning": "安静",
      "romanization": "ngiap",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "ดัง",
      "meaning": "响；有名",
      "romanization": "dang",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "เผ็ด",
      "meaning": "辣",
      "romanization": "phet",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "หวาน",
      "meaning": "甜",
      "romanization": "wan",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "เค็ม",
      "meaning": "咸",
      "romanization": "khem",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "เปรี้ยว",
      "meaning": "酸",
      "romanization": "priao",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "ชา",
      "meaning": "茶",
      "romanization": "cha",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "กล้วย",
      "meaning": "香蕉",
      "romanization": "kluai",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "เนื้อ",
      "meaning": "肉；牛肉",
      "romanization": "nuea",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "ปลา",
      "meaning": "鱼",
      "romanization": "pla",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "ไข่",
      "meaning": "鸡蛋",
      "romanization": "khai",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "ผัก",
      "meaning": "蔬菜",
      "romanization": "phak",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "ข้าวเช้า",
      "meaning": "早餐",
      "romanization": "khao chao",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "ข้าวกลางวัน",
      "meaning": "午餐",
      "romanization": "khao klang wan",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "ข้าวเย็น",
      "meaning": "晚餐",
      "romanization": "khao yen",
      "topic": "饮食"
    },
    {
      "type": "word",
      "front": "ทีหลัง",
      "meaning": "以后；稍后",
      "romanization": "thi lang",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "เช้า",
      "meaning": "早晨",
      "romanization": "chao",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "บ่าย",
      "meaning": "下午",
      "romanization": "bai",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "กลางคืน",
      "meaning": "夜晚",
      "romanization": "klang khuen",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "สัปดาห์",
      "meaning": "星期；周",
      "romanization": "sapda",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "วันจันทร์",
      "meaning": "星期一",
      "romanization": "wan chan",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "วันอังคาร",
      "meaning": "星期二",
      "romanization": "wan angkhan",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "วันพุธ",
      "meaning": "星期三",
      "romanization": "wan phut",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "วันพฤหัสบดี",
      "meaning": "星期四",
      "romanization": "wan pharuehat",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "วันศุกร์",
      "meaning": "星期五",
      "romanization": "wan suk",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "วันเสาร์",
      "meaning": "星期六",
      "romanization": "wan sao",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "วันอาทิตย์",
      "meaning": "星期日",
      "romanization": "wan athit",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "รถเมล์",
      "meaning": "公交车",
      "romanization": "rot me",
      "topic": "交通"
    },
    {
      "type": "word",
      "front": "รถไฟฟ้า",
      "meaning": "轻轨/地铁",
      "romanization": "rot fai fa",
      "topic": "交通"
    },
    {
      "type": "word",
      "front": "แท็กซี่",
      "meaning": "出租车",
      "romanization": "thaeksi",
      "topic": "交通"
    },
    {
      "type": "word",
      "front": "รถไฟ",
      "meaning": "火车",
      "romanization": "rot fai",
      "topic": "交通"
    },
    {
      "type": "word",
      "front": "เครื่องบิน",
      "meaning": "飞机",
      "romanization": "khrueang bin",
      "topic": "交通"
    },
    {
      "type": "word",
      "front": "ตั๋ว",
      "meaning": "票",
      "romanization": "tua",
      "topic": "交通"
    },
    {
      "type": "word",
      "front": "แผนที่",
      "meaning": "地图",
      "romanization": "phaen thi",
      "topic": "交通"
    },
    {
      "type": "word",
      "front": "เดินทาง",
      "meaning": "旅行；出行",
      "romanization": "doen thang",
      "topic": "交通"
    },
    {
      "type": "word",
      "front": "กระเป๋า",
      "meaning": "包；行李",
      "romanization": "krapao",
      "topic": "旅行"
    },
    {
      "type": "word",
      "front": "หนังสือ",
      "meaning": "书",
      "romanization": "nang sue",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "สมุด",
      "meaning": "本子",
      "romanization": "samut",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "ปากกา",
      "meaning": "笔",
      "romanization": "pakka",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "คอมพิวเตอร์",
      "meaning": "电脑",
      "romanization": "khomphio toe",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "โทรศัพท์",
      "meaning": "手机；电话",
      "romanization": "thorasap",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "อินเทอร์เน็ต",
      "meaning": "互联网",
      "romanization": "internet",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "การบ้าน",
      "meaning": "作业",
      "romanization": "kan ban",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "สอบ",
      "meaning": "考试",
      "romanization": "sop",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "คำถาม",
      "meaning": "问题",
      "romanization": "kham tham",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "คำตอบ",
      "meaning": "答案",
      "romanization": "kham top",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "ภาษา",
      "meaning": "语言",
      "romanization": "phasa",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "คำ",
      "meaning": "词",
      "romanization": "kham",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "ประโยค",
      "meaning": "句子",
      "romanization": "prayok",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "เสียง",
      "meaning": "声音",
      "romanization": "siang",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "เพลง",
      "meaning": "歌曲",
      "romanization": "phleng",
      "topic": "兴趣"
    },
    {
      "type": "word",
      "front": "หนัง",
      "meaning": "电影",
      "romanization": "nang",
      "topic": "兴趣"
    },
    {
      "type": "word",
      "front": "ละคร",
      "meaning": "电视剧；戏剧",
      "romanization": "lakhon",
      "topic": "兴趣"
    },
    {
      "type": "word",
      "front": "กีฬา",
      "meaning": "运动",
      "romanization": "kila",
      "topic": "兴趣"
    },
    {
      "type": "word",
      "front": "เกม",
      "meaning": "游戏",
      "romanization": "kem",
      "topic": "兴趣"
    },
    {
      "type": "word",
      "front": "รูป",
      "meaning": "照片；图",
      "romanization": "rup",
      "topic": "兴趣"
    },
    {
      "type": "word",
      "front": "ฝน",
      "meaning": "雨",
      "romanization": "fon",
      "topic": "天气"
    },
    {
      "type": "word",
      "front": "ลม",
      "meaning": "风",
      "romanization": "lom",
      "topic": "天气"
    },
    {
      "type": "word",
      "front": "แดด",
      "meaning": "阳光",
      "romanization": "daet",
      "topic": "天气"
    },
    {
      "type": "word",
      "front": "อากาศ",
      "meaning": "天气；空气",
      "romanization": "akat",
      "topic": "天气"
    },
    {
      "type": "word",
      "front": "หัว",
      "meaning": "头",
      "romanization": "hua",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "ตา",
      "meaning": "眼睛",
      "romanization": "ta",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "จมูก",
      "meaning": "鼻子",
      "romanization": "chamuk",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "ปาก",
      "meaning": "嘴",
      "romanization": "pak",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "มือ",
      "meaning": "手",
      "romanization": "mue",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "เท้า",
      "meaning": "脚",
      "romanization": "thao",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "ท้อง",
      "meaning": "肚子",
      "romanization": "thong",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "ป่วย",
      "meaning": "生病",
      "romanization": "puai",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "เจ็บ",
      "meaning": "疼",
      "romanization": "chep",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "ยา",
      "meaning": "药",
      "romanization": "ya",
      "topic": "身体"
    },
    {
      "type": "word",
      "front": "เสื้อ",
      "meaning": "上衣",
      "romanization": "suea",
      "topic": "穿着"
    },
    {
      "type": "word",
      "front": "กางเกง",
      "meaning": "裤子",
      "romanization": "kang keng",
      "topic": "穿着"
    },
    {
      "type": "word",
      "front": "รองเท้า",
      "meaning": "鞋",
      "romanization": "rong thao",
      "topic": "穿着"
    },
    {
      "type": "word",
      "front": "หมวก",
      "meaning": "帽子",
      "romanization": "muak",
      "topic": "穿着"
    },
    {
      "type": "word",
      "front": "สี",
      "meaning": "颜色",
      "romanization": "si",
      "topic": "颜色"
    },
    {
      "type": "word",
      "front": "แดง",
      "meaning": "红色",
      "romanization": "daeng",
      "topic": "颜色"
    },
    {
      "type": "word",
      "front": "น้ำเงิน",
      "meaning": "蓝色",
      "romanization": "nam ngoen",
      "topic": "颜色"
    },
    {
      "type": "word",
      "front": "ดำ",
      "meaning": "黑色",
      "romanization": "dam",
      "topic": "颜色"
    },
    {
      "type": "word",
      "front": "ขาว",
      "meaning": "白色",
      "romanization": "khao",
      "topic": "颜色"
    },
    {
      "type": "word",
      "front": "นิดหน่อย",
      "meaning": "一点点",
      "romanization": "nit noi",
      "topic": "程度"
    },
    {
      "type": "word",
      "front": "จริง",
      "meaning": "真的",
      "romanization": "ching",
      "topic": "程度"
    },
    {
      "type": "word",
      "front": "เหมือน",
      "meaning": "像；一样",
      "romanization": "muean",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "ต่าง",
      "meaning": "不同",
      "romanization": "tang",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "สำคัญ",
      "meaning": "重要",
      "romanization": "samkhan",
      "topic": "描述"
    },
    {
      "type": "word",
      "front": "จำเป็น",
      "meaning": "必要",
      "romanization": "champen",
      "topic": "描述"
    },
    {
      "type": "sentence",
      "front": "วันนี้ตื่นเช้ามากค่ะ",
      "meaning": "今天起得很早。",
      "romanization": "wan ni tuen chao mak kha",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "ตอนนี้กำลังทำอะไรอยู่คะ",
      "meaning": "现在在做什么？",
      "romanization": "ton ni kamlang tham arai yu kha",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "รอสักครู่นะคะ",
      "meaning": "请稍等一下。",
      "romanization": "ro sak khru na kha",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "วันนี้เหนื่อยนิดหน่อยค่ะ",
      "meaning": "今天有点累。",
      "romanization": "wan ni nueai nit noi kha",
      "topic": "状态"
    },
    {
      "type": "sentence",
      "front": "เมื่อวานนอนดึกมากค่ะ",
      "meaning": "昨天睡得很晚。",
      "romanization": "muea wan non duek mak kha",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "หิวแล้วค่ะ",
      "meaning": "我饿了。",
      "romanization": "hiu laeo kha",
      "topic": "饮食"
    },
    {
      "type": "sentence",
      "front": "อยากดื่มน้ำค่ะ",
      "meaning": "我想喝水。",
      "romanization": "yak duem nam kha",
      "topic": "饮食"
    },
    {
      "type": "sentence",
      "front": "ขอกาแฟหนึ่งแก้วค่ะ",
      "meaning": "请给我一杯咖啡。",
      "romanization": "kho kafae nueng kaeo kha",
      "topic": "点餐"
    },
    {
      "type": "sentence",
      "front": "อันนี้ราคาเท่าไหร่คะ",
      "meaning": "这个多少钱？",
      "romanization": "an ni rakha thao rai kha",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "มีถูกกว่านี้ไหมคะ",
      "meaning": "有更便宜的吗？",
      "romanization": "mi thuk kwa ni mai kha",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "จ่ายด้วยบัตรได้ไหมคะ",
      "meaning": "可以刷卡吗？",
      "romanization": "chai duai bat dai mai kha",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "กินเผ็ดได้ไหมคะ",
      "meaning": "能吃辣吗？",
      "romanization": "kin phet dai mai kha",
      "topic": "饮食"
    },
    {
      "type": "sentence",
      "front": "ฉันกินเผ็ดไม่ค่อยได้ค่ะ",
      "meaning": "我不太能吃辣。",
      "romanization": "chan kin phet mai khoi dai kha",
      "topic": "饮食"
    },
    {
      "type": "sentence",
      "front": "อาหารนี้อร่อยมากค่ะ",
      "meaning": "这个菜很好吃。",
      "romanization": "ahaan ni aroi mak kha",
      "topic": "饮食"
    },
    {
      "type": "sentence",
      "front": "จองไว้แล้วค่ะ",
      "meaning": "我已经预约了。",
      "romanization": "chong wai laeo kha",
      "topic": "旅行"
    },
    {
      "type": "sentence",
      "front": "สองคนค่ะ",
      "meaning": "两个人。",
      "romanization": "song khon kha",
      "topic": "点餐"
    },
    {
      "type": "sentence",
      "front": "มีที่นั่งริมหน้าต่างไหมคะ",
      "meaning": "有靠窗座位吗？",
      "romanization": "mi thi nang rim na tang mai kha",
      "topic": "点餐"
    },
    {
      "type": "sentence",
      "front": "ไปสถานีรถไฟฟ้ายังไงคะ",
      "meaning": "去地铁站怎么走？",
      "romanization": "pai sathani rot fai fa yang ngai kha",
      "topic": "问路"
    },
    {
      "type": "sentence",
      "front": "เลี้ยวขวาค่ะ",
      "meaning": "向右转。",
      "romanization": "liao khwa kha",
      "topic": "问路"
    },
    {
      "type": "sentence",
      "front": "ตรงไปค่ะ",
      "meaning": "直走。",
      "romanization": "trong pai kha",
      "topic": "问路"
    },
    {
      "type": "sentence",
      "front": "ใกล้ถึงแล้วค่ะ",
      "meaning": "快到了。",
      "romanization": "klai thueng laeo kha",
      "topic": "交通"
    },
    {
      "type": "sentence",
      "front": "พลาดรถเมล์ค่ะ",
      "meaning": "错过公交车了。",
      "romanization": "phlat rot me kha",
      "topic": "交通"
    },
    {
      "type": "sentence",
      "front": "ช่วยเรียกแท็กซี่ให้หน่อยได้ไหมคะ",
      "meaning": "可以帮我叫出租车吗？",
      "romanization": "chuai riak thaeksi hai noi dai mai kha",
      "topic": "交通"
    },
    {
      "type": "sentence",
      "front": "ต้องไปถึงสนามบินกี่โมงคะ",
      "meaning": "几点要到机场？",
      "romanization": "tong pai thueng sanam bin ki mong kha",
      "topic": "旅行"
    },
    {
      "type": "sentence",
      "front": "ซื้อตั๋วได้ที่ไหนคะ",
      "meaning": "在哪里可以买票？",
      "romanization": "sue tua dai thi nai kha",
      "topic": "旅行"
    },
    {
      "type": "sentence",
      "front": "เช็กอินโรงแรมกี่โมงคะ",
      "meaning": "酒店几点入住？",
      "romanization": "check in rong raem ki mong kha",
      "topic": "旅行"
    },
    {
      "type": "sentence",
      "front": "ช่วยฉันหน่อยได้ไหมคะ",
      "meaning": "可以帮我一下吗？",
      "romanization": "chuai chan noi dai mai kha",
      "topic": "实用表达"
    },
    {
      "type": "sentence",
      "front": "พูดช้าๆ หน่อยได้ไหมคะ",
      "meaning": "可以说慢一点吗？",
      "romanization": "phut cha cha noi dai mai kha",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "ฟังไม่ทันค่ะ",
      "meaning": "我没听清/没跟上。",
      "romanization": "fang mai than kha",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "แปลว่าอะไรคะ",
      "meaning": "是什么意思？",
      "romanization": "plae wa arai kha",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "ภาษาไทยพูดยังไงคะ",
      "meaning": "用泰语怎么说？",
      "romanization": "phasa thai phut yang ngai kha",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "คำนี้อ่านยังไงคะ",
      "meaning": "这个词怎么读？",
      "romanization": "kham ni an yang ngai kha",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "ออกเสียงยากค่ะ",
      "meaning": "发音很难。",
      "romanization": "ok siang yak kha",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "ฝึกนิดหน่อยทุกวันค่ะ",
      "meaning": "每天练一点。",
      "romanization": "fuek nit noi thuk wan kha",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "วันนี้เรียนกี่โมงคะ",
      "meaning": "今天几点上课？",
      "romanization": "wan ni rian ki mong kha",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "ยังไม่ได้ทำการบ้านค่ะ",
      "meaning": "作业还没做。",
      "romanization": "yang mai dai tham kan ban kha",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "อาทิตย์หน้ามีสอบค่ะ",
      "meaning": "下周有考试。",
      "romanization": "athit na mi sop kha",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "ข้อนี้ยากนิดหน่อยค่ะ",
      "meaning": "这道题有点难。",
      "romanization": "kho ni yak nit noi kha",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "มีคำถามหนึ่งข้อค่ะ",
      "meaning": "我有一个问题。",
      "romanization": "mi kham tham nueng kho kha",
      "topic": "学习"
    },
    {
      "type": "sentence",
      "front": "วันนี้งานเยอะมากค่ะ",
      "meaning": "今天工作很多。",
      "romanization": "wan ni ngan yoe mak kha",
      "topic": "工作"
    },
    {
      "type": "sentence",
      "front": "จะทำให้เสร็จพรุ่งนี้ค่ะ",
      "meaning": "明天会做完。",
      "romanization": "cha tham hai set phrung ni kha",
      "topic": "工作"
    },
    {
      "type": "sentence",
      "front": "คุยกันสักครู่ได้ไหมคะ",
      "meaning": "可以聊一下吗？",
      "romanization": "khui kan sak khru dai mai kha",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "สุดสัปดาห์นี้จะทำอะไรคะ",
      "meaning": "这个周末要做什么？",
      "romanization": "sut sapda ni cha tham arai kha",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "จะไปเจอเพื่อนค่ะ",
      "meaning": "要去见朋友。",
      "romanization": "cha pai choe phuean kha",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "อยากดูหนังค่ะ",
      "meaning": "我想看电影。",
      "romanization": "yak du nang kha",
      "topic": "兴趣"
    },
    {
      "type": "sentence",
      "front": "ช่วงนี้ดูละครเรื่องนี้บ่อยค่ะ",
      "meaning": "最近经常看这部剧。",
      "romanization": "chuang ni du lakhon rueang ni boi kha",
      "topic": "兴趣"
    },
    {
      "type": "sentence",
      "front": "ชอบเพลงนี้มากค่ะ",
      "meaning": "很喜欢这首歌。",
      "romanization": "chop phleng ni mak kha",
      "topic": "兴趣"
    },
    {
      "type": "sentence",
      "front": "เล่นกีฬาบ่อยไหมคะ",
      "meaning": "经常运动吗？",
      "romanization": "len kila boi mai kha",
      "topic": "兴趣"
    },
    {
      "type": "sentence",
      "front": "ฉันชอบเดินเล่นค่ะ",
      "meaning": "我喜欢散步。",
      "romanization": "chan chop doen len kha",
      "topic": "兴趣"
    },
    {
      "type": "sentence",
      "front": "วันนี้อากาศดีมากค่ะ",
      "meaning": "今天天气很好。",
      "romanization": "wan ni akat di mak kha",
      "topic": "天气"
    },
    {
      "type": "sentence",
      "front": "ข้างนอกฝนตกค่ะ",
      "meaning": "外面下雨了。",
      "romanization": "khang nok fon tok kha",
      "topic": "天气"
    },
    {
      "type": "sentence",
      "front": "วันนี้หนาวกว่าเมื่อวานค่ะ",
      "meaning": "今天比昨天冷。",
      "romanization": "wan ni nao kwa muea wan kha",
      "topic": "天气"
    },
    {
      "type": "sentence",
      "front": "พรุ่งนี้น่าจะร้อนขึ้นค่ะ",
      "meaning": "明天可能会更热。",
      "romanization": "phrung ni na cha ron khuen kha",
      "topic": "天气"
    },
    {
      "type": "sentence",
      "front": "ปวดหัวนิดหน่อยค่ะ",
      "meaning": "头有点疼。",
      "romanization": "puat hua nit noi kha",
      "topic": "健康"
    },
    {
      "type": "sentence",
      "front": "น่าจะต้องไปร้านขายยาค่ะ",
      "meaning": "可能得去药店。",
      "romanization": "na cha tong pai ran khai ya kha",
      "topic": "健康"
    },
    {
      "type": "sentence",
      "front": "ไม่เป็นไร ไม่ต้องกังวลค่ะ",
      "meaning": "没关系，不用担心。",
      "romanization": "mai pen rai mai tong kangwon kha",
      "topic": "情绪"
    },
    {
      "type": "sentence",
      "front": "วันนี้อารมณ์ดีค่ะ",
      "meaning": "今天心情很好。",
      "romanization": "wan ni arom di kha",
      "topic": "情绪"
    },
    {
      "type": "sentence",
      "front": "ตื่นเต้นนิดหน่อยแต่โอเคค่ะ",
      "meaning": "有点紧张/兴奋，但还好。",
      "romanization": "tuen ten nit noi tae okay kha",
      "topic": "情绪"
    },
    {
      "type": "sentence",
      "front": "ที่นี่คนเยอะมากค่ะ",
      "meaning": "这里人很多。",
      "romanization": "thi ni khon yoe mak kha",
      "topic": "描述"
    },
    {
      "type": "sentence",
      "front": "กระเป๋าใบนี้สวยกว่าค่ะ",
      "meaning": "这个包更好看。",
      "romanization": "krapao bai ni suai kwa kha",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "ชอบสีดำมากกว่าค่ะ",
      "meaning": "更喜欢黑色。",
      "romanization": "chop si dam mak kwa kha",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "ไซซ์นี้เล็กไปนิดค่ะ",
      "meaning": "这个尺码有点小。",
      "romanization": "size ni lek pai nit kha",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "มีไซซ์อื่นไหมคะ",
      "meaning": "有别的尺码吗？",
      "romanization": "mi size uen mai kha",
      "topic": "购物"
    },
    {
      "type": "sentence",
      "front": "วันนี้สนุกมากค่ะ",
      "meaning": "今天很开心。",
      "romanization": "wan ni sanuk mak kha",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "ไว้เจอกันใหม่นะคะ",
      "meaning": "下次见。",
      "romanization": "wai choe kan mai na kha",
      "topic": "日常"
    },
    {
      "type": "sentence",
      "front": "ถึงบ้านแล้วบอกด้วยนะคะ",
      "meaning": "到家后告诉我。",
      "romanization": "thueng ban laeo bok duai na kha",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "ขอโทษที่มาสายค่ะ",
      "meaning": "对不起，我迟到了。",
      "romanization": "kho thot thi ma sai kha",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "ถ้าว่าง ไปด้วยกันไหมคะ",
      "meaning": "如果有空，要一起去吗？",
      "romanization": "tha wang pai duai kan mai kha",
      "topic": "邀请"
    },
    {
      "type": "sentence",
      "front": "ถ้ามีเวลา ไปดื่มกาแฟกันไหมคะ",
      "meaning": "有时间的话一起喝咖啡吗？",
      "romanization": "tha mi wela pai duem kafae kan mai kha",
      "topic": "邀请"
    },
    {
      "type": "sentence",
      "front": "ฉันก็คิดแบบนั้นค่ะ",
      "meaning": "我也这么想。",
      "romanization": "chan ko khit baep nan kha",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "ฉันคิดต่างนิดหน่อยค่ะ",
      "meaning": "我的想法有点不同。",
      "romanization": "chan khit tang nit noi kha",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "ยังไม่แน่ใจค่ะ",
      "meaning": "还不确定。",
      "romanization": "yang mai nae chai kha",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "ขอเช็กก่อนนะคะ",
      "meaning": "我先确认一下。",
      "romanization": "kho check kon na kha",
      "topic": "实用表达"
    },
    {
      "type": "sentence",
      "front": "ถ้าต้องการ บอกได้เลยนะคะ",
      "meaning": "如果需要可以直接告诉我。",
      "romanization": "tha tongkan bok dai loei na kha",
      "topic": "实用表达"
    },
    {
      "type": "sentence",
      "front": "ตอนนี้ไม่มีเวลาค่ะ",
      "meaning": "现在没时间。",
      "romanization": "ton ni mai mi wela kha",
      "topic": "时间"
    },
    {
      "type": "sentence",
      "front": "เดี๋ยวติดต่อกลับนะคะ",
      "meaning": "待会再联系。",
      "romanization": "diao tit to klap na kha",
      "topic": "交流"
    },
    {
      "type": "sentence",
      "front": "อาทิตย์นี้ยุ่งนิดหน่อยค่ะ",
      "meaning": "这周有点忙。",
      "romanization": "athit ni yung nit noi kha",
      "topic": "时间"
    },
    {
      "type": "sentence",
      "front": "อาทิตย์หน้าว่างค่ะ",
      "meaning": "下周有空。",
      "romanization": "athit na wang kha",
      "topic": "时间"
    },
    {
      "type": "word",
      "front": "พี่ชาย",
      "meaning": "哥哥",
      "romanization": "phi chai",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "พี่สาว",
      "meaning": "姐姐",
      "romanization": "phi sao",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "น้องชาย",
      "meaning": "弟弟",
      "romanization": "nong chai",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "น้องสาว",
      "meaning": "妹妹",
      "romanization": "nong sao",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "ลูก",
      "meaning": "孩子；子女",
      "romanization": "luk",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "สามี",
      "meaning": "丈夫",
      "romanization": "sami",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "ภรรยา",
      "meaning": "妻子",
      "romanization": "phanraya",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "แฟน",
      "meaning": "恋人",
      "romanization": "faen",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "เพื่อนร่วมงาน",
      "meaning": "同事",
      "romanization": "phuean ruam ngan",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "ลูกค้า",
      "meaning": "顾客",
      "romanization": "luk kha",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "เจ้านาย",
      "meaning": "老板；上司",
      "romanization": "chao nai",
      "topic": "人物"
    },
    {
      "type": "word",
      "front": "ห้องครัว",
      "meaning": "厨房",
      "romanization": "hong khrua",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "ห้องนั่งเล่น",
      "meaning": "客厅",
      "romanization": "hong nang len",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "ห้องนอน",
      "meaning": "卧室",
      "romanization": "hong non",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "เตียง",
      "meaning": "床",
      "romanization": "tiang",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "โต๊ะ",
      "meaning": "桌子",
      "romanization": "to",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "เก้าอี้",
      "meaning": "椅子",
      "romanization": "kao-i",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "ประตู",
      "meaning": "门",
      "romanization": "pratu",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "หน้าต่าง",
      "meaning": "窗户",
      "romanization": "na tang",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "ตู้เย็น",
      "meaning": "冰箱",
      "romanization": "tu yen",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "เครื่องซักผ้า",
      "meaning": "洗衣机",
      "romanization": "khrueang sak pha",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "แอร์",
      "meaning": "空调",
      "romanization": "ae",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "ผ้าเช็ดตัว",
      "meaning": "毛巾",
      "romanization": "pha chet tua",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "สบู่",
      "meaning": "肥皂",
      "romanization": "sabu",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "แปรงสีฟัน",
      "meaning": "牙刷",
      "romanization": "praeng si fan",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "ยาสีฟัน",
      "meaning": "牙膏",
      "romanization": "ya si fan",
      "topic": "家居"
    },
    {
      "type": "word",
      "front": "ร่ม",
      "meaning": "雨伞",
      "romanization": "rom",
      "topic": "日用品"
    },
    {
      "type": "word",
      "front": "กุญแจ",
      "meaning": "钥匙",
      "romanization": "kunchae",
      "topic": "日用品"
    },
    {
      "type": "word",
      "front": "กระเป๋าสตางค์",
      "meaning": "钱包",
      "romanization": "krapao satang",
      "topic": "日用品"
    },
    {
      "type": "word",
      "front": "แว่นตา",
      "meaning": "眼镜",
      "romanization": "waen ta",
      "topic": "日用品"
    },
    {
      "type": "word",
      "front": "ที่ชาร์จ",
      "meaning": "充电器",
      "romanization": "thi chat",
      "topic": "日用品"
    },
    {
      "type": "word",
      "front": "แบตเตอรี่",
      "meaning": "电池",
      "romanization": "baet toe ri",
      "topic": "日用品"
    },
    {
      "type": "word",
      "front": "ชื่อ",
      "meaning": "名字",
      "romanization": "chue",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "ที่อยู่",
      "meaning": "地址",
      "romanization": "thi yu",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "เบอร์โทร",
      "meaning": "电话号码",
      "romanization": "boe tho",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "วันเกิด",
      "meaning": "生日",
      "romanization": "wan koet",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "อายุ",
      "meaning": "年龄",
      "romanization": "ayu",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "ประเทศ",
      "meaning": "国家",
      "romanization": "prathet",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "เมือง",
      "meaning": "城市",
      "romanization": "mueang",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "ประเทศไทย",
      "meaning": "泰国",
      "romanization": "prathet thai",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "จีน",
      "meaning": "中国",
      "romanization": "chin",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "ต่างประเทศ",
      "meaning": "国外",
      "romanization": "tang prathet",
      "topic": "实用信息"
    },
    {
      "type": "word",
      "front": "ฤดูร้อน",
      "meaning": "夏季",
      "romanization": "ru du ron",
      "topic": "季节"
    },
    {
      "type": "word",
      "front": "ฤดูฝน",
      "meaning": "雨季",
      "romanization": "ru du fon",
      "topic": "季节"
    },
    {
      "type": "word",
      "front": "ฤดูหนาว",
      "meaning": "冬季",
      "romanization": "ru du nao",
      "topic": "季节"
    },
    {
      "type": "word",
      "front": "ท้องฟ้า",
      "meaning": "天空",
      "romanization": "thong fa",
      "topic": "自然"
    },
    {
      "type": "word",
      "front": "ทะเล",
      "meaning": "海",
      "romanization": "thale",
      "topic": "自然"
    },
    {
      "type": "word",
      "front": "ภูเขา",
      "meaning": "山",
      "romanization": "phukhao",
      "topic": "自然"
    },
    {
      "type": "word",
      "front": "แม่น้ำ",
      "meaning": "河",
      "romanization": "mae nam",
      "topic": "自然"
    },
    {
      "type": "word",
      "front": "ต้นไม้",
      "meaning": "树",
      "romanization": "ton mai",
      "topic": "自然"
    },
    {
      "type": "word",
      "front": "ดอกไม้",
      "meaning": "花",
      "romanization": "dok mai",
      "topic": "自然"
    },
    {
      "type": "word",
      "front": "สุนัข",
      "meaning": "狗",
      "romanization": "sunak",
      "topic": "动物"
    },
    {
      "type": "word",
      "front": "แมว",
      "meaning": "猫",
      "romanization": "maeo",
      "topic": "动物"
    },
    {
      "type": "word",
      "front": "สัตว์",
      "meaning": "动物",
      "romanization": "sat",
      "topic": "动物"
    },
    {
      "type": "word",
      "front": "สุขภาพ",
      "meaning": "健康",
      "romanization": "sukkhaphap",
      "topic": "健康"
    },
    {
      "type": "word",
      "front": "หวัด",
      "meaning": "感冒",
      "romanization": "wat",
      "topic": "健康"
    },
    {
      "type": "word",
      "front": "ไข้",
      "meaning": "发烧",
      "romanization": "khai",
      "topic": "健康"
    },
    {
      "type": "word",
      "front": "ไอ",
      "meaning": "咳嗽",
      "romanization": "ai",
      "topic": "健康"
    },
    {
      "type": "word",
      "front": "ปวด",
      "meaning": "疼",
      "romanization": "puat",
      "topic": "健康"
    },
    {
      "type": "word",
      "front": "ขับรถ",
      "meaning": "开车",
      "romanization": "khap rot",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "ทำอาหาร",
      "meaning": "做饭",
      "romanization": "tham ahaan",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "ทำความสะอาด",
      "meaning": "打扫",
      "romanization": "tham khwam sa-at",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "ซักผ้า",
      "meaning": "洗衣服",
      "romanization": "sak pha",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "ช้อปปิ้ง",
      "meaning": "购物",
      "romanization": "shopping",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "เดินเล่น",
      "meaning": "散步",
      "romanization": "doen len",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "ถ่ายรูป",
      "meaning": "拍照",
      "romanization": "thai rup",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "พัก",
      "meaning": "休息",
      "romanization": "phak",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "ถึง",
      "meaning": "到达",
      "romanization": "thueng",
      "topic": "交通旅行"
    },
    {
      "type": "word",
      "front": "ออกเดินทาง",
      "meaning": "出发",
      "romanization": "ok doen thang",
      "topic": "交通旅行"
    },
    {
      "type": "word",
      "front": "ยืม",
      "meaning": "借入",
      "romanization": "yuem",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "ให้ยืม",
      "meaning": "借给",
      "romanization": "hai yuem",
      "topic": "日常动作"
    },
    {
      "type": "word",
      "front": "สอน",
      "meaning": "教",
      "romanization": "son",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "ฝึก",
      "meaning": "练习",
      "romanization": "fuek",
      "topic": "学习"
    },
    {
      "type": "word",
      "front": "อธิบาย",
      "meaning": "解释",
      "romanization": "athibai",
      "topic": "交流"
    },
    {
      "type": "word",
      "front": "ตัดสินใจ",
      "meaning": "决定",
      "romanization": "tat sin chai",
      "topic": "思考交流"
    },
    {
      "type": "word",
      "front": "แนะนำ",
      "meaning": "推荐；介绍",
      "romanization": "nae nam",
      "topic": "交流"
    },
    {
      "type": "word",
      "front": "สัญญา",
      "meaning": "约定；承诺",
      "romanization": "sanya",
      "topic": "交流"
    },
    {
      "type": "word",
      "front": "ตรวจสอบ",
      "meaning": "检查；确认",
      "romanization": "truat sop",
      "topic": "交流"
    },
    {
      "type": "word",
      "front": "สมัคร",
      "meaning": "申请；报名",
      "romanization": "samak",
      "topic": "工作"
    },
    {
      "type": "word",
      "front": "ยกเลิก",
      "meaning": "取消",
      "romanization": "yok loek",
      "topic": "实用表达"
    },
    {
      "type": "word",
      "front": "แน่นอน",
      "meaning": "当然；一定",
      "romanization": "nae non",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "อาจจะ",
      "meaning": "可能",
      "romanization": "at cha",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "ก่อน",
      "meaning": "先；以前",
      "romanization": "kon",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "ด้วยกัน",
      "meaning": "一起",
      "romanization": "duai kan",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "คนเดียว",
      "meaning": "独自",
      "romanization": "khon diao",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "บ่อย",
      "meaning": "经常",
      "romanization": "boi",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "บางครั้ง",
      "meaning": "有时",
      "romanization": "bang khrang",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "เสมอ",
      "meaning": "总是",
      "romanization": "samoe",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "ยัง",
      "meaning": "还；尚未",
      "romanization": "yang",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "แล้ว",
      "meaning": "已经；了",
      "romanization": "laeo",
      "topic": "副词"
    },
    {
      "type": "word",
      "front": "เพราะ",
      "meaning": "因为",
      "romanization": "phro",
      "topic": "连接词"
    },
    {
      "type": "word",
      "front": "แต่",
      "meaning": "但是",
      "romanization": "tae",
      "topic": "连接词"
    },
    {
      "type": "word",
      "front": "ถ้า",
      "meaning": "如果",
      "romanization": "tha",
      "topic": "连接词"
    },
    {
      "type": "word",
      "front": "หรือ",
      "meaning": "或者",
      "romanization": "rue",
      "topic": "连接词"
    },
    {
      "type": "word",
      "front": "และ",
      "meaning": "和",
      "romanization": "lae",
      "topic": "连接词"
    },
    {
      "type": "word",
      "front": "ดังนั้น",
      "meaning": "因此",
      "romanization": "dang nan",
      "topic": "连接词"
    }
  ]
};

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,'0');
  const day = String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function addDaysISO(n) {
  const d = new Date(); d.setHours(12,0,0,0); d.setDate(d.getDate()+n);
  const y = d.getFullYear(); const m=String(d.getMonth()+1).padStart(2,'0'); const day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function uid(prefix='id') { return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`; }
function escapeHTML(v='') { return String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function nl2br(v='') { return escapeHTML(v).replace(/\n/g,'<br>'); }

function seedState() {
  return {
    version: 3,
    lang: 'ko',
    levels: { ko:'初级', en:'六级后进阶', th:'初级' },
    theme: 'system',
    ai: { provider:'openrouter', key:'', model:'openrouter/free' },
    progress: {
      ko: { lastLesson:'ko-want', completed:['ko-alpha'], lessonNotes:{} },
      en: { lastLesson:'en-cet4-vocab', completed:[], lessonNotes:{} },
      th: { lastLesson:'th-hello', completed:[], lessonNotes:{} },
    },
    customLessons: { ko:[], en:[], th:[] },
    items: {
      ko: [
        { id:uid('w'), type:'word', front:'괜찮다', meaning:'没关系 / 可以', romanization:'gwaenchan-ta', note:'', status:'learning', interval:0, nextReview:todayISO(), createdAt:Date.now()-3000 },
        { id:uid('w'), type:'word', front:'약속', meaning:'约定 / 约会', romanization:'yak-ssok', note:'', status:'learning', interval:1, nextReview:todayISO(), createdAt:Date.now()-2000 },
        { id:uid('s'), type:'sentence', front:'보고 싶어요.', meaning:'我想见你 / 我想念你。', romanization:'bogo sipeoyo', note:'', status:'learning', interval:0, nextReview:todayISO(), createdAt:Date.now()-1000 },
      ],
      en: [
        { id:uid('w'), type:'word', front:'significant', meaning:'重要的；显著的', romanization:'', note:'六级后进阶词', status:'learning', interval:0, nextReview:todayISO(), createdAt:Date.now()-2000 },
        { id:uid('s'), type:'sentence', front:'The change had a significant influence on students.', meaning:'这个变化对学生产生了显著影响。', romanization:'', note:'进阶阅读句', status:'learning', interval:0, nextReview:todayISO(), createdAt:Date.now()-1000 },
      ],
      th: [
        { id:uid('w'), type:'word', front:'ขอบคุณ', meaning:'谢谢', romanization:'khop khun', note:'', status:'learning', interval:0, nextReview:todayISO(), createdAt:Date.now()-1000 },
      ],
    },
    notes: { ko:[], en:[], th:[] },
    chat: { ko:[], en:[], th:[] },
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seedState();
    const parsed = JSON.parse(raw);
    const base = seedState();
    const mergedLevels = {...base.levels, ...(parsed.levels || {})};
    if (!mergedLevels.en || mergedLevels.en === '四级起步') mergedLevels.en = '六级后进阶';
    return {
      ...base, ...parsed,
      ai: {...base.ai, ...(parsed.ai || {})},
      levels: mergedLevels,
      progress: {...base.progress, ...(parsed.progress || {})},
      customLessons: {...base.customLessons, ...(parsed.customLessons || {})},
      items: {...base.items, ...(parsed.items || {})},
      notes: {...base.notes, ...(parsed.notes || {})},
      chat: {...base.chat, ...(parsed.chat || {})},
    };
  } catch { return seedState(); }
}

let state = loadState();
let route = { page:'home', lessonId:null };
let wordFilter = 'all';
let searchText = '';
let materialFilter = 'all';
let materialTopic = 'all';
let materialSearch = '';
let materialVisibleCount = 40;
let reviewSession = null;

// V3.1 大资料库：部署构建时会把开放数据源整理成本地 JSON。
// 页面先用内置核心库秒开，大库加载完成后无刷新切换，避免手机首屏卡顿。
const materialBankCache = {};
const materialBankLoading = {};
function currentMaterialBank(lang=state.lang) { return materialBankCache[lang]?.items || BUILTIN_MATERIALS[lang] || []; }
function currentMaterialMeta(lang=state.lang) { return materialBankCache[lang]?.meta || null; }
async function ensureMaterialBank(lang=state.lang) {
  if (materialBankCache[lang]) return materialBankCache[lang];
  if (materialBankLoading[lang]) return materialBankLoading[lang];
  materialBankLoading[lang] = fetch(`./data/${lang}.json`)
    .then(r => { if(!r.ok) throw new Error(`资料库 ${r.status}`); return r.json(); })
    .then(data => {
      const payload = Array.isArray(data) ? {meta:{count:data.length},items:data} : data;
      if (!Array.isArray(payload?.items) || !payload.items.length) throw new Error('资料库为空');
      materialBankCache[lang] = payload;
      delete materialBankLoading[lang];
      if (state.lang===lang && (route.page==='learn' || route.page==='materials')) render();
      return payload;
    })
    .catch(err => { console.warn('大资料库加载失败，继续使用内置核心库：', err); delete materialBankLoading[lang]; return null; });
  return materialBankLoading[lang];
}
function pronunciationLabel(){ return state.lang==='en' ? '音标参考' : state.lang==='th' ? 'RTGS / 音译参考' : '罗马字参考'; }

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function langInfo() { return LANGS[state.lang]; }
function aiProviderInfo() { return AI_PROVIDERS[state.ai.provider] || AI_PROVIDERS.openrouter; }

const SPEECH_LANGS = { ko:'ko-KR', en:'en-US', th:'th-TH' };
const FALLBACK_SPEECH_VOICES = { ko:'ko', en:'en', th:'th' };
let speechVoices = [];
let speechVoiceCache = {};
let speechWarmTimer = null;
let fallbackTtsPromise = null;
let fallbackTts = null;
let fallbackAudioContext = null;
let fallbackAudioSource = null;

function speechAPI() {
  const synth = window.speechSynthesis || globalThis.speechSynthesis || null;
  const Utterance = window.SpeechSynthesisUtterance || globalThis.SpeechSynthesisUtterance || null;
  return { synth, Utterance };
}

function hasNativeSpeech() {
  const { synth, Utterance } = speechAPI();
  return !!(synth && typeof synth.speak === 'function' && typeof Utterance === 'function');
}

function refreshSpeechVoices() {
  const { synth } = speechAPI();
  if (!synth || typeof synth.getVoices !== 'function') return [];
  try {
    const voices = synth.getVoices() || [];
    if (voices.length) {
      speechVoices = voices;
      speechVoiceCache = {};
    }
    return voices;
  } catch {
    return [];
  }
}

function warmSpeechVoices() {
  const { synth } = speechAPI();
  if (!synth) return;
  refreshSpeechVoices();
  const update = () => refreshSpeechVoices();
  if (typeof synth.addEventListener === 'function') synth.addEventListener('voiceschanged', update);
  else if ('onvoiceschanged' in synth) synth.onvoiceschanged = update;
  let attempts = 0;
  clearInterval(speechWarmTimer);
  speechWarmTimer = setInterval(() => {
    attempts += 1;
    const voices = refreshSpeechVoices();
    if (voices.length || attempts >= 12) {
      clearInterval(speechWarmTimer);
      speechWarmTimer = null;
    }
  }, 250);
}

function bestVoiceFor(langCode) {
  if (speechVoiceCache[langCode]) return speechVoiceCache[langCode];
  const prefix = langCode.slice(0,2).toLowerCase();
  const live = refreshSpeechVoices();
  const list = live.length ? live : speechVoices;
  const candidates = list.filter(v => String(v.lang || '').toLowerCase().startsWith(prefix));
  const chosen = candidates.find(v => v.localService && String(v.lang).toLowerCase() === langCode.toLowerCase())
    || candidates.find(v => String(v.lang).toLowerCase() === langCode.toLowerCase())
    || candidates.find(v => v.localService)
    || candidates[0]
    || null;
  if (chosen) speechVoiceCache[langCode] = chosen;
  return chosen;
}

function primeFallbackAudio() {
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) return null;
  try {
    if (!fallbackAudioContext) fallbackAudioContext = new AudioContextCtor();
    if (fallbackAudioContext.state === 'suspended') fallbackAudioContext.resume().catch(()=>{});
    return fallbackAudioContext;
  } catch (err) {
    console.warn('fallback audio context unavailable', err);
    return null;
  }
}

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-study-src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === '1') return resolve();
      existing.addEventListener('load', resolve, { once:true });
      existing.addEventListener('error', reject, { once:true });
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.dataset.studySrc = src;
    script.onload = () => { script.dataset.loaded = '1'; resolve(); };
    script.onerror = () => reject(new Error('备用语音脚本加载失败'));
    document.head.appendChild(script);
  });
}

function ensureFallbackTTS() {
  if (fallbackTts) return Promise.resolve(fallbackTts);
  if (fallbackTtsPromise) return fallbackTtsPromise;

  fallbackTtsPromise = (async () => {
    if (typeof Worker !== 'function') throw new Error('当前浏览器不支持 Web Worker');
    if (!primeFallbackAudio()) throw new Error('当前浏览器不支持 Web Audio');

    const scriptUrl = new URL('./tts/espeakng-simple.js', location.href).href;
    const workerUrl = new URL('./tts/espeakng.worker.js', location.href).href;
    await loadScriptOnce(scriptUrl);
    if (typeof globalThis.SimpleTTS !== 'function') throw new Error('备用语音引擎初始化失败');

    const tts = new globalThis.SimpleTTS({
      workerPath: workerUrl,
      defaultVoice: 'en',
      defaultRate: 165,
      defaultPitch: 50,
      defaultVolume: 1,
      enhanceAudio: false
    });

    return await new Promise((resolve, reject) => {
      let settled = false;
      const timer = setTimeout(() => {
        if (!settled) { settled = true; reject(new Error('备用语音加载超时')); }
      }, 25000);
      try {
        tts.onReady(() => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          fallbackTts = tts;
          resolve(tts);
        });
      } catch (err) {
        clearTimeout(timer);
        reject(err);
      }
    });
  })().catch(err => {
    fallbackTtsPromise = null;
    throw err;
  });

  return fallbackTtsPromise;
}

function playFallbackSamples(audioData, sampleRate) {
  const ctx = primeFallbackAudio();
  if (!ctx) throw new Error('当前浏览器不能播放备用语音');
  if (!audioData || !audioData.length) throw new Error('没有生成语音数据');

  try { fallbackAudioSource?.stop?.(); } catch {}
  const samples = audioData instanceof Float32Array ? audioData : Float32Array.from(audioData);
  const buffer = ctx.createBuffer(1, samples.length, Number(sampleRate) || 11025);
  buffer.copyToChannel(samples, 0);
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);
  source.onended = () => { if (fallbackAudioSource === source) fallbackAudioSource = null; };
  fallbackAudioSource = source;
  if (ctx.state === 'suspended') ctx.resume().catch(()=>{});
  source.start(0);
}

async function speakWithFallback(value, { announce=true } = {}) {
  if (announce) showToast('正在切换到网站备用语音…');
  try {
    const tts = await ensureFallbackTTS();
    const voice = FALLBACK_SPEECH_VOICES[state.lang] || 'en';
    const rate = state.lang === 'en' ? 165 : 150;
    tts.speak(value, { voice, rate, pitch:50, volume:1, enhance:false }, (audioData, sampleRate) => {
      try { playFallbackSamples(audioData, sampleRate); }
      catch (err) { console.warn('fallback playback failed', err); showToast('备用语音生成成功，但当前浏览器阻止了播放'); }
    });
  } catch (err) {
    console.warn('fallback tts failed', err);
    showToast(`备用语音暂不可用：${err.message || '请稍后重试'}`);
  }
}

function warmFallbackTTS() {
  if (hasNativeSpeech()) return;
  setTimeout(() => ensureFallbackTTS().catch(err => console.warn('fallback tts warmup failed', err)), 600);
}

function speakText(text) {
  const value = String(text || '').trim();
  if (!value) { showToast('没有可聆听的内容'); return; }

  // 在真实用户点击期间先解锁 Web Audio；若系统接口不可用，备用语音也能在异步生成后播放。
  primeFallbackAudio();

  const { synth, Utterance } = speechAPI();
  if (!synth || typeof synth.speak !== 'function' || typeof Utterance !== 'function') {
    speakWithFallback(value);
    return;
  }

  const speechLang = SPEECH_LANGS[state.lang] || 'en-US';
  let utter;
  try { utter = new Utterance(value); }
  catch {
    speakWithFallback(value);
    return;
  }

  utter.lang = speechLang;
  utter.rate = state.lang === 'en' ? 0.94 : 0.88;
  utter.pitch = 1;
  utter.volume = 1;

  const voice = bestVoiceFor(speechLang);
  if (voice) utter.voice = voice;

  let started = false;
  let fallbackStarted = false;
  const fallbackOnce = () => {
    if (fallbackStarted) return;
    fallbackStarted = true;
    speakWithFallback(value);
  };

  utter.onstart = () => { started = true; };
  utter.onerror = event => {
    const reason = String(event?.error || '').toLowerCase();
    if (reason === 'canceled' || reason === 'interrupted') return;
    console.warn('native speech failed', reason || event);
    fallbackOnce();
  };

  try {
    synth.resume?.();
    if (synth.speaking || synth.pending) synth.cancel();
    synth.speak(utter);

    if (!voice) {
      setTimeout(() => refreshSpeechVoices(), 120);
      setTimeout(() => refreshSpeechVoices(), 500);
    }
    // 个别内核存在 speechSynthesis 对象但永远不触发 start/error；短暂等待后自动兜底。
    setTimeout(() => {
      if (!started && !fallbackStarted && !synth.speaking && !synth.pending) fallbackOnce();
    }, 1200);
  } catch (err) {
    console.warn('speech synthesis failed', err);
    fallbackOnce();
  }
}

function currentLevel(lang=state.lang) {
  return state.levels?.[lang] || LEVELS[lang]?.label || '';
}
function lessonsFor(lang=state.lang) { return [...BUILTIN_LESSONS[lang], ...(state.customLessons[lang] || [])]; }
function dueItems(lang=state.lang) { const t=todayISO(); return (state.items[lang]||[]).filter(x => x.nextReview && x.nextReview <= t); }
function startReviewSession() {
  const ids = dueItems().map(x => x.id);
  reviewSession = { lang: state.lang, ids, initialTotal: ids.length, completed: 0 };
}
function ensureReviewSession() {
  if (!reviewSession || reviewSession.lang !== state.lang) startReviewSession();
  return reviewSession;
}
function reviewPlanDays(item, rating) {
  const current = Math.max(0, Number(item?.interval || 0));
  if (rating === 'forgot') return 1;
  if (rating === 'familiar') return current < 3 ? 3 : Math.min(45, Math.max(3, Math.round(current * 1.8)));
  if (rating === 'remembered') return current < 7 ? 7 : Math.min(180, Math.max(7, Math.round(current * 2.4)));
  return 1;
}
function friendlyDate(iso) {
  if (!iso) return '';
  const [y,m,d] = iso.split('-').map(Number);
  const target = new Date(y, m-1, d, 12);
  const now = new Date(); now.setHours(12,0,0,0);
  const diff = Math.round((target-now)/86400000);
  if (diff === 1) return '明天';
  if (diff > 1 && diff <= 7) return `${diff}天后`;
  return `${m}月${d}日`;
}
function currentLesson() {
  const lessons = lessonsFor();
  const id = state.progress[state.lang]?.lastLesson;
  return lessons.find(x=>x.id===id) || lessons.find(x=>!state.progress[state.lang].completed.includes(x.id)) || lessons[0];
}
function showToast(message) {
  const el = document.getElementById('toast'); el.textContent = message; el.classList.add('show');
  clearTimeout(showToast._t); showToast._t=setTimeout(()=>el.classList.remove('show'),1800);
}

function applyTheme() {
  document.body.classList.remove('dark','auto-dark');
  if (state.theme === 'dark') document.body.classList.add('dark');
  if (state.theme === 'system') document.body.classList.add('auto-dark');
}

function renderNav() {
  const make = ([id,icon,label]) => `<button class="nav-button ${route.page===id?'active':''}" data-nav="${id}"><span class="nav-icon">${icon}</span><span class="nav-label">${label}</span></button>`;
  document.getElementById('mobileNav').innerHTML = NAV.map(make).join('');
  document.getElementById('desktopNav').innerHTML = NAV.map(make).join('');
}

function renderTopbar() {
  const l = langInfo();
  document.getElementById('languageButton').innerHTML = `<span class="language-code">${l.code}</span><span>${l.name}</span><span class="language-caret" aria-hidden="true">⌄</span>`;
}

function render() {
  applyTheme(); renderTopbar(); renderNav();
  const page = document.getElementById('page');
  if (route.page === 'home') page.innerHTML = homeHTML();
  else if (route.page === 'learn') page.innerHTML = route.lessonId ? lessonHTML(route.lessonId) : learnHTML();
  else if (route.page === 'review') page.innerHTML = reviewHTML();
  else if (route.page === 'materials') page.innerHTML = materialsHTML();
  else if (route.page === 'words') page.innerHTML = wordsHTML();
  else if (route.page === 'notes') page.innerHTML = notesHTML();
  else if (route.page === 'ai') page.innerHTML = aiHTML();
  bindPageEvents();
}

function homeHTML() {
  const l=langInfo(); const lesson=currentLesson(); const due=dueItems();
  const words=due.filter(x=>x.type==='word').length, sentences=due.filter(x=>x.type==='sentence').length;
  const recent=(state.items[state.lang]||[]).slice().sort((a,b)=>b.createdAt-a.createdAt).slice(0,4);
  const totalDue=due.length;
  return `
    <div class="home-intro">
      <div>
        <div class="home-kicker">${l.code} · ${escapeHTML(currentLevel())} · ${escapeHTML(l.native)}</div>
        <h1 class="page-title">今天学一点${l.name}</h1>
        <p class="page-subtitle">不用打卡。打开、学一点、留下记录就够了。</p>
      </div>
      <button class="quick-add-top" id="quickAddTop" aria-label="快速记录">＋ 记录</button>
    </div>

    <div class="home-main-grid">
      <section class="home-panel continue-panel">
        <div class="panel-label">继续学习</div>
        <div class="continue-category">${escapeHTML(lesson?.category || '学习')}</div>
        <div class="continue-title">${escapeHTML(lesson?.title || '开始学习')}</div>
        <div class="continue-desc">${escapeHTML(lesson?.summary || '从你自己的内容开始。')}</div>
        <button class="primary continue-button" data-open-lesson="${lesson?.id || ''}">继续学习 <span>→</span></button>
      </section>

      <section class="home-panel review-panel ${totalDue ? 'has-due' : ''}">
        <div class="row-between review-panel-head">
          <div class="panel-label">今日复习</div>
          <span class="review-status">${totalDue ? `${totalDue} 项待复习` : '今天已清空'}</span>
        </div>
        <div class="review-number">${totalDue}</div>
        <div class="review-breakdown"><span>${words} 个单词</span><span class="dot-sep">·</span><span>${sentences} 个句子</span></div>
        ${totalDue
          ? '<button class="secondary wide review-start" data-nav="review">开始复习</button>'
          : '<div class="review-done">今天没有到期内容，可以继续学习或随手记一点。</div>'}
      </section>
    </div>

    <section class="section recent-section">
      <div class="section-head"><div><div class="section-title">最近记录</div><div class="section-caption">刚遇到的词和句子先放这里，之后再慢慢消化。</div></div><button class="section-link" id="quickAdd">＋ 快速记录</button></div>
      ${recent.length ? `<div class="recent-list">${recent.map(item=>`<button class="recent-item word-card" data-item-id="${item.id}"><span class="recent-type">${item.type==='sentence'?'句':'词'}</span><span class="recent-copy"><strong>${escapeHTML(item.front)}</strong><small>${escapeHTML(item.meaning || item.note || (item.type==='sentence'?'句子':'单词'))}</small></span><span class="chev">›</span></button>`).join('')}</div>` : '<div class="empty">还没有记录。遇到单词或句子时，点“快速记录”就可以。</div>'}
    </section>

    <button class="mobile-quick-add" id="mobileQuickAdd" aria-label="快速记录">＋</button>`;
}

function learnHTML() {
  const lessons = lessonsFor().filter(x => !searchText || `${x.title} ${x.summary} ${x.category}`.toLowerCase().includes(searchText.toLowerCase()));
  const groups = [...new Set(lessons.map(x=>x.category))];
  const done = state.progress[state.lang].completed || [];
  return `
    <div class="row-between learn-title-row"><div><div class="home-kicker">${langInfo().code} · ${escapeHTML(currentLevel())}</div><h1 class="page-title">${langInfo().name}学习</h1><p class="page-subtitle">${escapeHTML(LEVELS[state.lang]?.detail || '按自己的节奏学习。')} · 内置课程已经准备好，导入资料只用于补充。</p></div><button id="importMaterials" class="secondary small">⇧ 补充资料</button></div>
    <input id="learnSearch" class="search" value="${escapeHTML(searchText)}" placeholder="搜索学习内容" />
    ${(() => {
      const bank = currentMaterialBank();
      const wc = bank.filter(x=>x.type==='word').length;
      const sc = bank.filter(x=>x.type==='sentence').length;
      const meta = currentMaterialMeta();
      const loading = !meta && !!materialBankLoading[state.lang];
      return `<section class="material-summary-card">
        <div>
          <div class="panel-label">${meta?.preview?'内置预览库':'大资料库'}</div>
          <div class="material-summary-title">${wc.toLocaleString()} 个单词 · ${sc.toLocaleString()} 个句子</div>
          <div class="material-summary-desc">${loading?'正在后台加载完整资料库，当前先显示核心内容，不影响继续学习。':state.lang==='en'?'你已通过六级：大库以六级后、考研、IELTS/TOEFL、GRE 和 B2→C1 表达为主，并配真实中英例句。':state.lang==='ko'?'韩语从初级一路扩到中高级：开放词汇、表达和真实中韩例句；词句尽量附罗马字参考。':'泰语以初级核心为入口，同时提供大型泰英词库与真实泰中例句；词句尽量附 RTGS / 音译参考。'}</div>
          ${meta?.errors?.length?`<div class="help">部分开放数据源本次构建未取到，已自动保留可用资料，不影响使用。</div>`:''}
        </div>
        <button class="primary small" data-nav="materials">打开大资料库 →</button>
      </section>`;
    })()}
    ${groups.map(group=>`<div class="lesson-group"><div class="lesson-group-title">${escapeHTML(group)}</div><div class="list">${lessons.filter(x=>x.category===group).map(x=>`<div class="list-item lesson-item" data-open-lesson="${x.id}"><div class="row"><span class="lesson-status ${done.includes(x.id)?'done':''}">${done.includes(x.id)?'✓':'○'}</span><div class="list-main"><div class="list-title">${escapeHTML(x.title)}</div><div class="list-meta">${escapeHTML(x.summary)}</div></div></div><span class="chev">›</span></div>`).join('')}</div></div>`).join('')}
    <section class="section"><button id="addLesson" class="secondary wide">＋ 添加自己的学习内容</button></section>`;
}

function materialsHTML() {
  const all = currentMaterialBank();
  const topics = [...new Set(all.map(x=>x.topic).filter(Boolean))];
  const mine = state.items[state.lang] || [];
  let items = all.filter(x => materialFilter==='all' || x.type===materialFilter);
  if (materialTopic !== 'all') items = items.filter(x=>x.topic===materialTopic);
  if (materialSearch.trim()) {
    const q = materialSearch.trim().toLowerCase();
    items = items.filter(x => `${x.front} ${x.meaning} ${x.romanization||''} ${x.topic||''}`.toLowerCase().includes(q));
  }
  const countWord = all.filter(x=>x.type==='word').length;
  const countSentence = all.filter(x=>x.type==='sentence').length;
  const visibleItems = items.slice(0, materialVisibleCount);
  const hasMoreMaterials = items.length > visibleItems.length;
  const isAdded = x => mine.some(m => m.type===x.type && String(m.front).trim()===String(x.front).trim());
  return `<div class="materials-page">
    <button class="ghost small" data-nav="learn">‹ 返回学习</button>
    <div class="materials-head">
      <div class="home-kicker">${langInfo().code} · ${escapeHTML(currentLevel())}</div>
      <h1 class="page-title">词句学习库</h1>
      <p class="page-subtitle">这里是主要学习资料：${countWord.toLocaleString()} 个单词 + ${countSentence.toLocaleString()} 个句子。资料很多，不需要一次学完；搜索、按主题筛选，遇到想重点记的再加入“今日复习”。</p>
    </div>
    <input id="materialSearchInput" class="search" value="${escapeHTML(materialSearch)}" placeholder="搜索单词、句子或中文意思" />
    <div class="chips material-filter-row">
      <button class="chip ${materialFilter==='all'?'active':''}" data-material-filter="all">全部 ${all.length.toLocaleString()}</button>
      <button class="chip ${materialFilter==='word'?'active':''}" data-material-filter="word">单词 ${countWord.toLocaleString()}</button>
      <button class="chip ${materialFilter==='sentence'?'active':''}" data-material-filter="sentence">句子 ${countSentence.toLocaleString()}</button>
    </div>
    <div class="chips topic-row">
      <button class="chip ${materialTopic==='all'?'active':''}" data-material-topic="all">全部主题</button>
      ${topics.map(t=>`<button class="chip ${materialTopic===t?'active':''}" data-material-topic="${escapeHTML(t)}">${escapeHTML(t)}</button>`).join('')}
    </div>
    <div class="material-list">
      ${items.length ? visibleItems.map((x,i)=>`<article class="material-card">
        <div class="material-card-top">
          <span class="material-type">${x.type==='word'?'单词':'句子'} · ${escapeHTML(x.topic||'常用')}</span>
          <button class="speak-button" type="button" data-speak="${encodeURIComponent(x.front)}">🔊 聆听</button>
        </div>
        <div class="material-front">${escapeHTML(x.front)}</div>
        ${x.romanization?`<div class="romanization">${pronunciationLabel()}：${escapeHTML(x.romanization)}</div>`:''}
        <div class="material-meaning">${escapeHTML(x.meaning)}</div>
        ${x.source?`<div class="material-source">来源：${escapeHTML(x.source)}</div>`:''}
        <button class="${isAdded(x)?'ghost':'secondary'} small material-add" data-material-index="${all.indexOf(x)}" ${isAdded(x)?'disabled':''}>${isAdded(x)?'✓ 已在复习':'＋ 加入复习'}</button>
      </article>`).join('') : '<div class="empty">没有找到匹配内容。</div>'}
    </div>
    ${hasMoreMaterials?`<button id="loadMoreMaterials" class="secondary wide material-load-more">再显示 ${Math.min(40, items.length-visibleItems.length)} 条</button>`:''}
    <div class="library-attribution">资料来源包含开放词汇/语料：Open Yonsei Korean Vocabulary、ECDICT、LEXiTRON 2.0、Tatoeba。不同来源遵循各自许可；完整说明见 SOURCES.md。</div>
  </div>`;
}

function lessonHTML(id) {
  const lesson=lessonsFor().find(x=>x.id===id);
  if (!lesson) return '<div class="empty">没有找到这节内容。</div>';
  const p=state.progress[state.lang]; const done=p.completed.includes(id); const note=p.lessonNotes[id]||'';
  return `<div class="lesson-page">
    <button class="ghost small" data-back-learn>‹ 返回学习</button>
    <div class="lesson-head">
      <div class="eyebrow" style="margin-top:18px">${escapeHTML(lesson.category)} · ${done?'已学习':'未完成'}</div>
      <h1 class="page-title">${escapeHTML(lesson.title)}</h1>
      <p class="page-subtitle">${escapeHTML(lesson.summary)}</p>
    </div>
    <div class="card">
      <h2>01 先理解</h2>
      ${lesson.notation?`<div class="notation-box"><strong>写法说明</strong><p>${escapeHTML(lesson.notation)}</p></div>`:''}
      ${(lesson.body||[]).map(p=>`<p>${escapeHTML(p)}</p>`).join('')}
      ${(lesson.examples||[]).length?`<h2>02 看几个例子</h2>${lesson.examples.map(ex=>`<div class="example"><div class="example-top"><div class="foreign">${escapeHTML(ex[0])}</div><button class="speak-button" type="button" data-speak="${encodeURIComponent(ex[0])}" aria-label="聆听例句">🔊 聆听</button></div>${ex[2]?`<div class="romanization">${pronunciationLabel()}：${escapeHTML(ex[2])}</div>`:''}<div class="meaning">${escapeHTML(ex[1])}</div><button class="section-link" data-save-example-front="${encodeURIComponent(ex[0])}" data-save-example-meaning="${encodeURIComponent(ex[1])}" data-save-example-romanization="${encodeURIComponent(ex[2]||'')}">＋ 收进复习</button></div>`).join('')}`:''}
      <h2>03 自己记一下</h2>
      <textarea id="lessonNote" class="note-box" placeholder="写下自己的理解……">${escapeHTML(note)}</textarea>
      <div class="help">输入后自动保存。</div>
      ${lesson.quiz?`<h2>04 简单练一下</h2><p>${escapeHTML(lesson.quiz.q)}</p><input id="quizAnswer" class="form-control" placeholder="写下你的答案" /><div class="row" style="margin-top:10px"><button id="checkQuiz" class="secondary small" data-answer="${encodeURIComponent(lesson.quiz.a)}">检查</button><button class="ghost small" data-ask-ai="请根据我正在学习的“${encodeURIComponent(lesson.title)}”，再给我出3道适合当前水平的练习题，并在我作答后纠正。">让 AI 继续练</button></div><div id="quizFeedback" class="help"></div>`:''}
      ${String(lesson.id).startsWith('lesson-')?`<div class="custom-lesson-tools"><button class="ghost small" data-edit-lesson="${lesson.id}">编辑这节内容</button><button class="danger small" data-delete-lesson="${lesson.id}">删除</button></div>`:''}
      <div class="divider"></div>
      <div class="chips"><button class="chip" data-ask-ai="请用非常简单的中文重新解释我正在学习的“${encodeURIComponent(lesson.title)}”。如果是韩语语法，请解释标题中连接符号的含义；韩语或泰语例子请附发音参考。">✨ 再讲简单一点</button><button class="chip" data-ask-ai="请围绕“${encodeURIComponent(lesson.title)}”给我5个适合当前水平、自然常用的例句，给中文意思；如果是韩语或泰语，请附音译/罗马字发音参考。">更多例句</button></div>
      <div style="margin-top:18px"><button id="toggleDone" class="primary wide" data-lesson-id="${id}">${done?'✓ 已学过（点此取消）':'✓ 学完了'}</button></div>
    </div>
  </div>`;
}

function reviewHTML() {
  const session = ensureReviewSession();
  const allItems = state.items[state.lang] || [];
  session.ids = session.ids.filter(id => allItems.some(x => x.id === id));
  const item = session.ids.length ? allItems.find(x => x.id === session.ids[0]) : null;
  const total = session.initialTotal;
  const completed = session.completed;

  if (!item) {
    const title = total ? '今天复习完成了' : '今天没有待复习';
    const desc = total ? `刚刚复习了 ${completed} 项，之后到期的内容会自动回到这里。` : '没有到期内容，可以继续学习或随手记一点。';
    return `<button class="ghost small" data-nav="home">‹ 回首页</button><div class="review-page-head"><div class="home-kicker">${langInfo().code} · 今日复习</div><h1 class="page-title">${title}</h1><p class="page-subtitle">${desc}</p></div><div class="card review-complete"><div class="complete-mark">✓</div><div class="complete-title">${total ? '今天先到这里' : '今天很轻松'}</div><div class="complete-desc">${total ? '复习记录已经保存，下次会按你的熟悉程度再出现。' : '等有内容到期时，首页会自动提醒你。'}</div><div class="row review-complete-actions"><button class="secondary" data-nav="learn">继续学习</button><button class="ghost" id="quickAdd">快速记录</button></div></div>`;
  }

  const forgotDays = reviewPlanDays(item,'forgot');
  const familiarDays = reviewPlanDays(item,'familiar');
  const rememberedDays = reviewPlanDays(item,'remembered');
  const currentNo = completed + 1;
  const progress = total ? Math.round((completed / total) * 100) : 0;

  return `<button class="ghost small" data-nav="home">‹ 回首页</button><div class="review-page-head"><div class="home-kicker">${langInfo().code} · 今日复习</div><div class="row-between review-heading-row"><div><h1 class="page-title">先回忆，再看答案</h1><p class="page-subtitle">第 ${currentNo} / ${total} 项 · 不需要追求一次记住。</p></div><span class="review-counter">${Math.max(0,total-currentNo)} 项在后面</span></div></div><div class="review-track" aria-label="复习进度"><span style="width:${Math.max(4, progress)}%"></span></div><div class="card flashcard"><div class="eyebrow">${item.type==='sentence'?'句子':'单词'}</div><div class="flash-word">${escapeHTML(item.front)}</div>${item.romanization?`<div class="romanization review-romanization">${pronunciationLabel()}：${escapeHTML(item.romanization)}</div>`:''}<button class="speak-button speak-review" type="button" data-speak="${encodeURIComponent(item.front)}">🔊 聆听</button><div class="flash-hint">先自己想一下意思，不着急。</div><button id="revealMeaning" class="primary reveal-button">显示答案</button><div id="reviewMeaning" class="review-answer" hidden><div class="flash-meaning">${escapeHTML(item.meaning || '暂无释义')}</div>${item.note?`<div class="review-note">${escapeHTML(item.note)}</div>`:''}</div><div id="reviewActions" class="review-actions" hidden><button class="danger small" data-review="forgot" data-item-id="${item.id}"><strong>不记得</strong><span>${forgotDays===1?'明天':forgotDays+'天后'}</span></button><button class="ghost small" data-review="familiar" data-item-id="${item.id}"><strong>有点熟</strong><span>${familiarDays}天后</span></button><button class="secondary small" data-review="remembered" data-item-id="${item.id}"><strong>记住了</strong><span>${rememberedDays}天后</span></button></div><button class="review-edit-link" data-edit-review-item="${item.id}">编辑这条记录</button></div>`;
}

function wordsHTML() {
  let items=(state.items[state.lang]||[]).filter(x=>x.type==='word' || x.type==='sentence');
  if (wordFilter==='due') items=items.filter(x=>x.nextReview<=todayISO());
  if (wordFilter==='mastered') items=items.filter(x=>x.status==='mastered');
  if (searchText) items=items.filter(x=>`${x.front} ${x.meaning} ${x.romanization||''} ${x.note}`.toLowerCase().includes(searchText.toLowerCase()));
  return `<h1 class="page-title">单词与句子</h1><p class="page-subtitle">把真正遇到的内容收进来，之后按时间复习。</p><input id="wordSearch" class="search" value="${escapeHTML(searchText)}" placeholder="搜索单词、句子或释义"/><div class="chips" style="margin:12px 0"><button class="chip ${wordFilter==='all'?'active':''}" data-filter="all">全部</button><button class="chip ${wordFilter==='due'?'active':''}" data-filter="due">待复习</button><button class="chip ${wordFilter==='mastered'?'active':''}" data-filter="mastered">已掌握</button></div><button id="quickAdd" class="secondary wide" style="margin-bottom:14px">＋ 添加单词 / 句子</button>${items.length?`<div class="list">${items.slice().sort((a,b)=>b.createdAt-a.createdAt).map(x=>`<div class="list-item word-card" data-item-id="${x.id}"><div class="list-main"><div class="list-title">${escapeHTML(x.front)}</div>${x.romanization?`<div class="romanization">${pronunciationLabel()}：${escapeHTML(x.romanization)}</div>`:''}<div class="list-meta">${escapeHTML(x.meaning||'暂无释义')} · 下次 ${escapeHTML(x.nextReview||'未安排')}</div></div><span class="tag">${x.type==='sentence'?'句子':x.status==='mastered'?'已掌握':'单词'}</span></div>`).join('')}</div>`:'<div class="empty">没有符合条件的内容。</div>'}`;
}

function notesHTML() {
  let notes=(state.notes[state.lang]||[]).slice().sort((a,b)=>b.updatedAt-a.updatedAt);
  if (searchText) notes=notes.filter(n=>`${n.title} ${n.body} ${n.tag}`.toLowerCase().includes(searchText.toLowerCase()));
  return `<h1 class="page-title">笔记</h1><p class="page-subtitle">这里是自己的语言知识库，不追求格式，能看懂就好。</p><input id="noteSearch" class="search" value="${escapeHTML(searchText)}" placeholder="搜索笔记"/><button id="addNote" class="secondary wide" style="margin:14px 0">＋ 新建笔记</button>${notes.length?`<div class="list">${notes.map(n=>`<div class="list-item note-card" data-note-id="${n.id}"><div class="list-main"><div class="list-title">${escapeHTML(n.title)}</div><div class="list-meta">${escapeHTML(n.body.slice(0,70) || '空白笔记')}</div></div>${n.tag?`<span class="tag">${escapeHTML(n.tag)}</span>`:'<span class="chev">›</span>'}</div>`).join('')}</div>`:'<div class="empty">还没有笔记。遇到容易混淆的语法或表达时，记在这里。</div>'}`;
}

function aiHTML() {
  const chat=state.chat[state.lang]||[];
  const provider=aiProviderInfo();
  const connected=Boolean(state.ai.key);
  return `<div class="chat-wrap"><div><div class="row-between ai-title-row"><div><h1 class="page-title">AI 学习助手</h1><p class="page-subtitle">自由提问、纠错、翻译或练习对话。当前：${langInfo().flag} ${langInfo().name}</p></div>${chat.length?'<button class="ghost small" id="clearChat">清空对话</button>':''}</div>${!connected?`<div class="ai-setup-card"><div><strong>先连接一次免费 AI</strong><p>不用给 Study 注册账号。OpenRouter 的免费模型本身为 $0，但需要你授权一个 OpenRouter 账号来生成 API Key。</p></div><div class="ai-setup-actions"><button class="primary" id="connectOpenRouterInline">一键连接 OpenRouter</button><button class="ghost" id="openAISettingsInline">其他 AI 设置</button></div></div>`:''}<div class="chips"><button class="chip" data-ai-prompt="请解释一个适合我当前水平（${currentLevel()}）的${langInfo().name}知识点，并给3个例句。${state.lang==='ko'||state.lang==='th'?'每个例子附音译/罗马字发音参考。':''}">解释知识点</button><button class="chip" data-ai-prompt="我想练习${langInfo().name}日常对话。请从简单的一句话开始和我聊天，发现错误时用中文简短纠正。">对话练习</button><button class="chip" data-ai-prompt="请帮我纠正下面这句话。先给自然版本，再用中文简短说明哪里需要改：">帮我纠错</button><button class="chip" data-ai-prompt="请给我5道适合${currentLevel()}的${langInfo().name}小练习，一次只出一道，等我回答后再继续。">出题</button></div></div><div id="chatMessages" class="chat-messages">${chat.length?chat.map(m=>`<div class="message ${m.role==='user'?'user':'assistant'}">${nl2br(m.content)}</div>`).join(''):'<div class="empty">可以直接问：<br>“这个语法是什么意思？”<br>“和我进行5分钟韩语对话。”</div>'}</div><div class="chat-input"><div class="chat-input-row"><textarea id="chatInput" placeholder="${connected?'问我任何学习问题……':'先连接 AI，再开始聊天'}" ${connected?'':'disabled'}></textarea><button id="sendChat" class="send-button" aria-label="发送" ${connected?'':'disabled'}>↑</button></div><div class="ai-note">${connected?`<span class="ai-dot ok"></span>已连接：${escapeHTML(provider.name)} · ${escapeHTML(state.ai.model)}`:'<span class="ai-dot"></span>未连接 AI'}</div></div></div>`;
}

function bindPageEvents() {
  document.querySelectorAll('[data-nav]').forEach(el=>el.onclick=()=>navigate(el.dataset.nav));
  document.querySelectorAll('[data-open-lesson]').forEach(el=>el.onclick=()=>{ if(!el.dataset.openLesson)return; state.progress[state.lang].lastLesson=el.dataset.openLesson; saveState(); route={page:'learn',lessonId:el.dataset.openLesson}; render(); });
  document.querySelector('[data-back-learn]')?.addEventListener('click',()=>{route={page:'learn',lessonId:null};render();});
  document.querySelectorAll('.word-card').forEach(el=>el.onclick=()=>openItemModal(el.dataset.itemId));
  document.getElementById('quickAdd')?.addEventListener('click',openQuickAdd);
  document.getElementById('quickAddTop')?.addEventListener('click',openQuickAdd);
  document.getElementById('mobileQuickAdd')?.addEventListener('click',openQuickAdd);
  document.getElementById('addNote')?.addEventListener('click',()=>openNoteModal());
  document.querySelectorAll('.note-card').forEach(el=>el.onclick=()=>openNoteModal(el.dataset.noteId));
  document.getElementById('addLesson')?.addEventListener('click',()=>openLessonModal());
  document.getElementById('importMaterials')?.addEventListener('click',openMaterialImport);
  document.querySelector('[data-edit-lesson]')?.addEventListener('click',e=>openLessonModal(e.currentTarget.dataset.editLesson));
  document.querySelector('[data-delete-lesson]')?.addEventListener('click',e=>deleteCustomLesson(e.currentTarget.dataset.deleteLesson));
  document.getElementById('learnSearch')?.addEventListener('input',e=>{searchText=e.target.value; render(); document.getElementById('learnSearch')?.focus();});
  document.getElementById('wordSearch')?.addEventListener('input',e=>{searchText=e.target.value; render(); document.getElementById('wordSearch')?.focus();});
  document.getElementById('noteSearch')?.addEventListener('input',e=>{searchText=e.target.value; render(); document.getElementById('noteSearch')?.focus();});
  document.querySelectorAll('[data-filter]').forEach(el=>el.onclick=()=>{wordFilter=el.dataset.filter;render();});
  document.getElementById('materialSearchInput')?.addEventListener('input',e=>{materialSearch=e.target.value;materialVisibleCount=40;render();document.getElementById('materialSearchInput')?.focus();});
  document.querySelectorAll('[data-material-filter]').forEach(el=>el.onclick=()=>{materialFilter=el.dataset.materialFilter;materialVisibleCount=40;render();});
  document.querySelectorAll('[data-material-topic]').forEach(el=>el.onclick=()=>{materialTopic=el.dataset.materialTopic;materialVisibleCount=40;render();});
  document.getElementById('loadMoreMaterials')?.addEventListener('click',()=>{materialVisibleCount+=40;render();requestAnimationFrame(()=>document.getElementById('loadMoreMaterials')?.scrollIntoView({block:'nearest'}));});
  document.querySelectorAll('[data-material-index]').forEach(el=>el.onclick=()=>{const bank=currentMaterialBank();const x=bank[Number(el.dataset.materialIndex)];if(!x)return;addStudyItem(x.type,x.front,x.meaning,`内置词句库 · ${x.topic||''}`,x.romanization||'');showToast('已加入今日复习');render();});
  document.getElementById('lessonNote')?.addEventListener('input',e=>{ const id=route.lessonId; state.progress[state.lang].lessonNotes[id]=e.target.value; saveState(); });
  document.getElementById('toggleDone')?.addEventListener('click',e=>{ const id=e.currentTarget.dataset.lessonId; const arr=state.progress[state.lang].completed; const i=arr.indexOf(id); i>=0?arr.splice(i,1):arr.push(id); saveState(); showToast(i>=0?'已取消完成':'已记录学习完成'); render(); });
  document.querySelectorAll('[data-save-example-front]').forEach(el=>el.onclick=()=>{ const front=decodeURIComponent(el.dataset.saveExampleFront), meaning=decodeURIComponent(el.dataset.saveExampleMeaning), romanization=decodeURIComponent(el.dataset.saveExampleRomanization||''); addStudyItem('sentence',front,meaning,'',romanization); showToast('已加入复习'); });
  document.getElementById('checkQuiz')?.addEventListener('click',e=>{ const ans=decodeURIComponent(e.currentTarget.dataset.answer); const mine=document.getElementById('quizAnswer').value.trim(); document.getElementById('quizFeedback').innerHTML= mine ? `参考答案：<strong>${escapeHTML(ans)}</strong><br>你的答案：${escapeHTML(mine)}` : `参考答案：<strong>${escapeHTML(ans)}</strong>`; });
  document.querySelectorAll('[data-ask-ai]').forEach(el=>el.onclick=()=>{ const prompt=decodeURIComponent(el.dataset.askAi); route={page:'ai',lessonId:null}; render(); setTimeout(()=>sendAI(prompt),50); });
  document.querySelectorAll('[data-speak]').forEach(el=>el.onclick=e=>{ e.preventDefault(); e.stopPropagation(); speakText(decodeURIComponent(el.dataset.speak)); });
  document.getElementById('revealMeaning')?.addEventListener('click',()=>{ document.getElementById('reviewMeaning').hidden=false; document.getElementById('reviewActions').hidden=false; document.getElementById('revealMeaning').hidden=true; });
  document.querySelectorAll('[data-review]').forEach(el=>el.onclick=()=>rateReview(el.dataset.itemId,el.dataset.review));
  document.querySelector('[data-edit-review-item]')?.addEventListener('click',e=>openItemModal(e.currentTarget.dataset.editReviewItem));
  document.querySelectorAll('[data-ai-prompt]').forEach(el=>el.onclick=()=>{ document.getElementById('chatInput').value=el.dataset.aiPrompt; document.getElementById('chatInput').focus(); });
  document.getElementById('sendChat')?.addEventListener('click',()=>sendAI());
  document.getElementById('connectOpenRouterInline')?.addEventListener('click',connectOpenRouter);
  document.getElementById('openAISettingsInline')?.addEventListener('click',openSettings);
  document.getElementById('clearChat')?.addEventListener('click',()=>{ if(confirm('清空当前语言的 AI 对话记录吗？')){ state.chat[state.lang]=[]; saveState(); render(); } });
  document.getElementById('chatInput')?.addEventListener('keydown',e=>{ if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendAI();} });
  if(route.page==='ai') requestAnimationFrame(()=>document.getElementById('chatMessages')?.lastElementChild?.scrollIntoView({behavior:'smooth'}));
}

function navigate(page) {
  searchText='';
  if (page==='learn' || page==='materials') ensureMaterialBank(state.lang);
  if (page !== 'materials') materialSearch='';
  if (page === 'materials') materialVisibleCount=40;
  if (page === 'review') startReviewSession();
  else if (route.page === 'review') reviewSession = null;
  route={page,lessonId:null};
  render();
  window.scrollTo({top:0,behavior:'smooth'});
}

function openModal(title, body) {
  document.getElementById('modalRoot').innerHTML = `<div class="modal-backdrop" id="backdrop"><div class="modal" role="dialog" aria-modal="true"><div class="modal-head"><div class="modal-title">${escapeHTML(title)}</div><button class="close" id="modalClose">×</button></div>${body}</div></div>`;
  document.getElementById('modalClose').onclick=closeModal;
  document.getElementById('backdrop').onclick=e=>{if(e.target.id==='backdrop')closeModal();};
}
function closeModal(){document.getElementById('modalRoot').innerHTML='';}

function openLanguageModal(){
  openModal('切换学习语言', `<div class="language-menu">${Object.entries(LANGS).map(([id,l])=>`<button class="language-choice ${state.lang===id?'active':''}" data-lang="${id}"><span><strong class="language-option-code">${l.code}</strong> ${l.name}<br><span class="help">${l.native}</span></span><strong>${state.lang===id?'✓':''}</strong></button>`).join('')}</div><p class="help">会自动记住你最后一次使用的语言，下次打开仍然停在这里。</p>`);
  document.querySelectorAll('[data-lang]').forEach(el=>el.onclick=()=>{state.lang=el.dataset.lang;reviewSession=null;saveState();closeModal();route={page:'home',lessonId:null};searchText='';ensureMaterialBank(state.lang);render();});
}

function addStudyItem(type,front,meaning,note,romanization=''){
  state.items[state.lang].push({id:uid(type==='word'?'w':'s'),type,front,meaning,romanization,note,status:'learning',interval:0,nextReview:todayISO(),createdAt:Date.now()}); saveState();
}

function openQuickAdd(){
  const showRoman = state.lang === 'ko' || state.lang === 'th';
  openModal('快速记录', `<div class="form-group"><label class="form-label">类型</label><select id="qaType" class="form-control"><option value="word">单词</option><option value="sentence">句子</option><option value="note">笔记</option></select></div><div class="form-group"><label class="form-label">内容</label><input id="qaFront" class="form-control" placeholder="${state.lang==='ko'?'例如：설레다':state.lang==='th'?'例如：ขอบคุณ':'例如：nuanced'}"/></div><div class="form-group"><label class="form-label">意思 / 标题</label><input id="qaMeaning" class="form-control" placeholder="中文意思"/></div>${showRoman?`<div class="form-group"><label class="form-label">音译 / 发音参考（可选）</label><input id="qaRomanization" class="form-control" placeholder="${state.lang==='ko'?'例如：seolleda':'例如：khop khun'}"/><div class="help">音译只做初级辅助，聆听仍以真实语音为准。</div></div>`:''}<div class="form-group"><label class="form-label">备注（可选）</label><textarea id="qaNote" class="form-control" placeholder="自己的理解、例句、来源……"></textarea></div><button id="qaSave" class="primary wide">保存</button>`);
  document.getElementById('qaSave').onclick=()=>{ const type=document.getElementById('qaType').value, front=document.getElementById('qaFront').value.trim(), meaning=document.getElementById('qaMeaning').value.trim(), note=document.getElementById('qaNote').value.trim(), romanization=document.getElementById('qaRomanization')?.value.trim()||''; if(!front){showToast('先写一点内容');return;} if(type==='note'){state.notes[state.lang].push({id:uid('n'),title:meaning||front,body:note || front,tag:'快速记录',updatedAt:Date.now()});saveState();} else addStudyItem(type,front,meaning,note,romanization); closeModal();showToast('已保存');render(); };
}


function parseCSV(text) {
  const rows=[]; let row=[], cell='', quote=false;
  for(let i=0;i<text.length;i++){
    const c=text[i], n=text[i+1];
    if(c==='"' && quote && n==='"'){cell+='"';i++;continue;}
    if(c==='"'){quote=!quote;continue;}
    if(c===',' && !quote){row.push(cell.trim());cell='';continue;}
    if((c==='\n'||c==='\r') && !quote){if(c==='\r'&&n==='\n')i++;row.push(cell.trim());cell='';if(row.some(x=>x!==''))rows.push(row);row=[];continue;}
    cell+=c;
  }
  row.push(cell.trim()); if(row.some(x=>x!==''))rows.push(row);
  return rows;
}
function downloadMaterialTemplate(mode){
  let content='', name='';
  if(mode==='vocab') { content='type,content,meaning,romanization,note\nword,괜찮다,没关系 / 可以,gwaenchan-ta,韩剧里常见\nsentence,보고 싶어요.,我想见你 / 我想念你。,bogo sipeoyo,\n'; name='Study-单词句子模板.csv'; }
  else if(mode==='lessons') { content='category,title,summary,notation,body\n初级 · 语法,-고 싶다,表达想做……,前面的-表示要接在动词词干后面,结构：动词词干 + -고 싶다||日常敬语常用 -고 싶어요\n'; name='Study-课程模板.csv'; }
  else { content='我的学习笔记标题\n\n从第二行开始写正文。\n可以直接粘贴老师资料、自己整理的重点。'; name='Study-笔记模板.txt'; }
  const blob=new Blob([content],{type:'text/plain;charset=utf-8'}); const url=URL.createObjectURL(blob); const a=document.createElement('a');a.href=url;a.download=name;a.click();URL.revokeObjectURL(url);
}
function importMaterialsFromText(mode,text){
  const value=String(text||'').trim(); if(!value) throw new Error('还没有可导入的内容');
  if(mode==='vocab'){
    const rows=parseCSV(value); if(rows.length<2) throw new Error('CSV 至少需要表头和一行内容');
    const headers=rows[0].map(x=>x.toLowerCase());
    const idx=n=>headers.indexOf(n);
    const contentIdx=idx('content'), meaningIdx=idx('meaning');
    if(contentIdx<0||meaningIdx<0) throw new Error('表头需要包含 content 和 meaning');
    let count=0;
    rows.slice(1).forEach(r=>{const front=r[contentIdx]?.trim();if(!front)return;const rawType=(r[idx('type')]||'word').toLowerCase();const type=(rawType==='sentence'||rawType==='句子')?'sentence':'word';addStudyItem(type,front,r[meaningIdx]||'',r[idx('note')]||'',r[idx('romanization')]||'');count++;});
    return `已导入 ${count} 条单词 / 句子`;
  }
  if(mode==='lessons'){
    const rows=parseCSV(value); if(rows.length<2) throw new Error('CSV 至少需要表头和一行课程');
    const headers=rows[0].map(x=>x.toLowerCase()); const idx=n=>headers.indexOf(n);
    if(idx('title')<0) throw new Error('表头需要包含 title');
    let count=0;
    rows.slice(1).forEach(r=>{const title=r[idx('title')]?.trim();if(!title)return;const fresh={id:uid('lesson'),category:r[idx('category')]||'我的资料',title,summary:r[idx('summary')]||'',notation:r[idx('notation')]||'',body:String(r[idx('body')]||'').split('||').map(x=>x.trim()).filter(Boolean),examples:[]};state.customLessons[state.lang].push(fresh);count++;});
    if(count) state.progress[state.lang].lastLesson=state.customLessons[state.lang].slice(-1)[0].id;
    saveState(); return `已导入 ${count} 节学习内容`;
  }
  if(mode==='note'){
    const lines=value.split(/\r?\n/); const title=(lines.shift()||'导入资料').trim()||'导入资料'; const body=lines.join('\n').trim();state.notes[state.lang].push({id:uid('n'),title,tag:'导入资料',body,updatedAt:Date.now()});saveState();return '已导入为一篇笔记';
  }
  throw new Error('暂不支持这个格式');
}
function openMaterialImport(){
  openModal('导入学习资料', `<div class="import-intro"><strong>不用一条条手录</strong><p>单词/句子适合 CSV；课程适合课程 CSV；整段老师资料或文章可以先作为 TXT 笔记导入。以后也可以把资料文件发给我，我帮你整理成这里能直接导入的格式。</p></div><div class="form-group"><label class="form-label">导入类型</label><select id="materialMode" class="form-control"><option value="vocab">单词 / 句子 CSV</option><option value="lessons">课程 CSV</option><option value="note">整篇资料 / 笔记 TXT</option></select></div><div class="row import-actions"><label class="secondary" style="cursor:pointer;flex:1;text-align:center">选择文件<input id="materialFile" type="file" accept=".csv,.txt,text/csv,text/plain" hidden></label><button id="materialTemplate" class="ghost" type="button">下载模板</button></div><div class="form-group"><label class="form-label">或者直接粘贴内容</label><textarea id="materialText" class="form-control import-textarea" placeholder="选择文件后内容会显示在这里，也可以直接粘贴"></textarea></div><button id="materialImportGo" class="primary wide">导入到当前${langInfo().name}</button><p class="help">韩语/泰语的单词 CSV 可以填写 romanization（音译/发音参考）。不会覆盖已有资料，只会追加。</p>`);
  const mode=document.getElementById('materialMode');
  document.getElementById('materialTemplate').onclick=()=>downloadMaterialTemplate(mode.value);
  document.getElementById('materialFile').onchange=e=>{const f=e.target.files?.[0];if(!f)return;const reader=new FileReader();reader.onload=()=>{document.getElementById('materialText').value=String(reader.result||'');};reader.readAsText(f,'utf-8');};
  document.getElementById('materialImportGo').onclick=()=>{try{const message=importMaterialsFromText(mode.value,document.getElementById('materialText').value);closeModal();showToast(message);render();}catch(err){showToast(err.message);}};
}

function openItemModal(id){
  const item=state.items[state.lang].find(x=>x.id===id); if(!item)return;
  const showRoman = state.lang === 'ko' || state.lang === 'th';
  openModal(item.type==='sentence'?'句子':'单词', `<button id="itemSpeak" class="secondary wide speak-modal" type="button">🔊 聆听</button><div class="form-group"><label class="form-label">内容</label><input id="itemFront" class="form-control" value="${escapeHTML(item.front)}"/></div><div class="form-group"><label class="form-label">意思</label><input id="itemMeaning" class="form-control" value="${escapeHTML(item.meaning||'')}"/></div>${showRoman?`<div class="form-group"><label class="form-label">音译 / 发音参考</label><input id="itemRomanization" class="form-control" value="${escapeHTML(item.romanization||'')}"/></div>`:''}<div class="form-group"><label class="form-label">备注</label><textarea id="itemNote" class="form-control">${escapeHTML(item.note||'')}</textarea></div><div class="form-group"><label class="form-label">下次复习</label><input id="itemReview" type="date" class="form-control" value="${escapeHTML(item.nextReview||todayISO())}"/></div><div class="row"><button id="itemSave" class="primary" style="flex:1">保存</button><button id="itemDelete" class="danger">删除</button></div>`);
  document.getElementById('itemSpeak').onclick=()=>speakText(document.getElementById('itemFront').value);
  document.getElementById('itemSave').onclick=()=>{item.front=document.getElementById('itemFront').value.trim();item.meaning=document.getElementById('itemMeaning').value.trim();item.romanization=document.getElementById('itemRomanization')?.value.trim()||'';item.note=document.getElementById('itemNote').value.trim();item.nextReview=document.getElementById('itemReview').value;saveState();closeModal();showToast('已保存');render();};
  document.getElementById('itemDelete').onclick=()=>{ if(confirm('确定删除这条记录吗？')){state.items[state.lang]=state.items[state.lang].filter(x=>x.id!==id);saveState();closeModal();render();} };
}

function rateReview(id,rating){
  const item=state.items[state.lang].find(x=>x.id===id); if(!item)return;
  const days = reviewPlanDays(item, rating);
  item.interval = days;
  item.status = rating === 'remembered' && days >= 30 ? 'mastered' : 'learning';
  item.nextReview = addDaysISO(days);
  if (reviewSession && reviewSession.lang === state.lang) {
    reviewSession.ids = reviewSession.ids.filter(x=>x!==id);
    reviewSession.completed += 1;
  }
  saveState();
  showToast(`已安排到${friendlyDate(item.nextReview)}复习`);
  render();
}

function openNoteModal(id=null){
  const note=id?state.notes[state.lang].find(x=>x.id===id):null;
  openModal(note?'编辑笔记':'新建笔记', `<div class="form-group"><label class="form-label">标题</label><input id="noteTitle" class="form-control" value="${escapeHTML(note?.title||'')}" placeholder="例如：은/는 和 이/가"/></div><div class="form-group"><label class="form-label">标签（可选）</label><input id="noteTag" class="form-control" value="${escapeHTML(note?.tag||'')}" placeholder="语法 / 发音 / 易错"/></div><div class="form-group"><label class="form-label">内容</label><textarea id="noteBody" class="form-control" placeholder="写下自己的理解……">${escapeHTML(note?.body||'')}</textarea></div><div class="row"><button id="noteSave" class="primary" style="flex:1">保存</button>${note?'<button id="noteDelete" class="danger">删除</button>':''}</div>`);
  document.getElementById('noteSave').onclick=()=>{const title=document.getElementById('noteTitle').value.trim(),tag=document.getElementById('noteTag').value.trim(),body=document.getElementById('noteBody').value.trim();if(!title){showToast('先写标题');return;}if(note){Object.assign(note,{title,tag,body,updatedAt:Date.now()});}else state.notes[state.lang].push({id:uid('n'),title,tag,body,updatedAt:Date.now()});saveState();closeModal();showToast('笔记已保存');render();};
  if(note) document.getElementById('noteDelete').onclick=()=>{if(confirm('确定删除这篇笔记吗？')){state.notes[state.lang]=state.notes[state.lang].filter(x=>x.id!==id);saveState();closeModal();render();}};
}

function openLessonModal(id=null){
  const lesson=id?(state.customLessons[state.lang]||[]).find(x=>x.id===id):null;
  openModal(lesson?'编辑学习内容':'添加学习内容', `<div class="form-group"><label class="form-label">分类</label><input id="lessonCategory" class="form-control" value="${escapeHTML(lesson?.category||'')}" placeholder="语法 / 发音 / 日常表达"/></div><div class="form-group"><label class="form-label">标题</label><input id="lessonTitle" class="form-control" value="${escapeHTML(lesson?.title||'')}" placeholder="今天想学什么？"/></div><div class="form-group"><label class="form-label">一句说明</label><input id="lessonSummary" class="form-control" value="${escapeHTML(lesson?.summary||'')}" placeholder="简单说明这节内容"/></div><div class="form-group"><label class="form-label">写法 / 符号说明（可选）</label><textarea id="lessonNotation" class="form-control" placeholder="例如：标题前面的 - 表示要连接在前面的词干后面">${escapeHTML(lesson?.notation||'')}</textarea></div><div class="form-group"><label class="form-label">正文</label><textarea id="lessonBody" class="form-control" placeholder="每一行写一个要点">${escapeHTML((lesson?.body||[]).join('\n'))}</textarea></div><button id="lessonSave" class="primary wide">${lesson?'保存修改':'添加'}</button>`);
  document.getElementById('lessonSave').onclick=()=>{const category=document.getElementById('lessonCategory').value.trim()||'我的内容',title=document.getElementById('lessonTitle').value.trim(),summary=document.getElementById('lessonSummary').value.trim(),notation=document.getElementById('lessonNotation').value.trim(),body=document.getElementById('lessonBody').value.split('\n').map(x=>x.trim()).filter(Boolean);if(!title){showToast('先写标题');return;}if(lesson){Object.assign(lesson,{category,title,summary,notation,body});}else{const fresh={id:uid('lesson'),category,title,summary,notation,body,examples:[]};state.customLessons[state.lang].push(fresh);state.progress[state.lang].lastLesson=fresh.id;}saveState();closeModal();showToast(lesson?'已保存修改':'已添加');render();};
}

function deleteCustomLesson(id){
  const lesson=(state.customLessons[state.lang]||[]).find(x=>x.id===id); if(!lesson)return;
  if(!confirm(`确定删除“${lesson.title}”吗？`)) return;
  state.customLessons[state.lang]=state.customLessons[state.lang].filter(x=>x.id!==id);
  const p=state.progress[state.lang];
  p.completed=(p.completed||[]).filter(x=>x!==id);
  if(p.lessonNotes) delete p.lessonNotes[id];
  if(p.lastLesson===id) p.lastLesson=lessonsFor()[0]?.id || null;
  saveState();
  route={page:'learn',lessonId:null};
  showToast('已删除');
  render();
}

function openSettings(){
  const provider=aiProviderInfo();
  const openRouterConnected=state.ai.provider==='openrouter' && Boolean(state.ai.key);
  openModal('设置', `<div class="form-group"><label class="form-label">学习起点</label><div class="level-summary"><span>韩语 <strong>初级</strong></span><span>英语 <strong>六级后进阶</strong></span><span>泰语 <strong>初级</strong></span></div><div class="help">当前内置资料和 AI 默认按这三个起点安排。</div></div><div class="divider"></div><div class="form-group"><label class="form-label">显示</label><select id="themeSelect" class="form-control"><option value="system" ${state.theme==='system'?'selected':''}>跟随系统</option><option value="light" ${state.theme==='light'?'selected':''}>浅色</option><option value="dark" ${state.theme==='dark'?'selected':''}>深色</option></select></div><div class="divider"></div><div class="form-group"><label class="form-label">AI 服务</label><select id="aiProvider" class="form-control"><option value="openrouter" ${state.ai.provider==='openrouter'?'selected':''}>OpenRouter（免费模型路由）</option><option value="siliconflow" ${state.ai.provider==='siliconflow'?'selected':''}>硅基流动（国内访问更方便）</option></select></div><div id="openRouterConnectBox" class="ai-connect-box" ${state.ai.provider==='openrouter'?'':'hidden'}><div><strong>${openRouterConnected?'OpenRouter 已连接':'推荐：一键连接 OpenRouter'}</strong><p>${openRouterConnected?'已经可以使用免费模型聊天。':'免费模型本身不收费，但 OpenRouter 仍需要一次账号授权；不要求给 Study 注册账号。'}</p></div><button id="connectOpenRouter" class="${openRouterConnected?'secondary':'primary'} wide">${openRouterConnected?'重新连接 OpenRouter':'一键连接免费 AI'}</button></div><div class="form-group"><label class="form-label">AI API Key <span class="optional">（高级 / 备用）</span></label><input id="apiKey" class="form-control" type="password" value="${escapeHTML(state.ai.key||'')}" placeholder="也可以手动粘贴 Key"/><div class="help">只保存在当前浏览器；导出学习数据时不会导出 Key。</div></div><div class="form-group"><label class="form-label">模型</label><input id="aiModel" class="form-control" value="${escapeHTML(state.ai.model||provider.defaultModel)}"/><div class="help" id="modelHelp">当前建议：${escapeHTML(provider.defaultModel)}</div></div><div class="row ai-settings-actions"><button id="settingsSave" class="primary" style="flex:1">保存设置</button><button id="testAI" class="secondary">测试连接</button></div><div id="aiTestStatus" class="help"></div><div class="divider"></div><div class="stack"><button id="exportData" class="secondary wide">导出全部学习数据</button><label class="ghost wide" style="text-align:center;cursor:pointer">导入学习数据<input id="importData" type="file" accept="application/json" hidden></label><button id="resetData" class="danger wide">恢复到初始体验数据</button></div><p class="help">V1 数据在浏览器本机。换手机或电脑前，建议先导出备份。</p>`);
  const providerSelect=document.getElementById('aiProvider');
  const updateProviderUI=()=>{ const cfg=AI_PROVIDERS[providerSelect.value]; document.getElementById('aiModel').value=cfg.defaultModel; document.getElementById('modelHelp').textContent=`当前建议：${cfg.defaultModel}`; document.getElementById('openRouterConnectBox').hidden=providerSelect.value!=='openrouter'; };
  providerSelect.onchange=updateProviderUI;
  document.getElementById('connectOpenRouter').onclick=connectOpenRouter;
  document.getElementById('settingsSave').onclick=()=>{state.theme=document.getElementById('themeSelect').value;state.ai.provider=providerSelect.value;state.ai.key=document.getElementById('apiKey').value.trim();state.ai.model=document.getElementById('aiModel').value.trim()||AI_PROVIDERS[state.ai.provider].defaultModel;saveState();closeModal();showToast(state.ai.key?'AI 设置已保存':'设置已保存；AI 还未连接');render();};
  document.getElementById('testAI').onclick=async()=>{ const status=document.getElementById('aiTestStatus'); const providerId=providerSelect.value; const key=document.getElementById('apiKey').value.trim(); const model=document.getElementById('aiModel').value.trim()||AI_PROVIDERS[providerId].defaultModel; if(!key){status.textContent='还没有 Key。OpenRouter 可以直接点“一键连接免费 AI”。';return;} status.textContent='正在测试连接……'; try{await testAIConnection(providerId,key,model);status.textContent='✓ 连接正常，可以聊天了。';}catch(err){status.textContent=`连接失败：${err.message}`;} };
  document.getElementById('exportData').onclick=exportData;
  document.getElementById('importData').onchange=importData;
  document.getElementById('resetData').onclick=()=>{if(confirm('会清空当前学习数据并恢复体验内容，确定吗？')){const ai={...state.ai};state=seedState();state.ai=ai;saveState();closeModal();navigate('home');}};
}

function exportData(){
  const copy=JSON.parse(JSON.stringify(state)); copy.ai.key='';
  const blob=new Blob([JSON.stringify(copy,null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=`study-backup-${todayISO()}.json`; a.click(); URL.revokeObjectURL(url); showToast('已导出备份');
}
function importData(e){
  const file=e.target.files?.[0]; if(!file)return; const reader=new FileReader(); reader.onload=()=>{try{const data=JSON.parse(reader.result);const key=state.ai.key;state={...seedState(),...data};state.ai={...(data.ai||{}),key};saveState();closeModal();showToast('导入成功');render();}catch{showToast('文件格式不正确');}};reader.readAsText(file);
}

async function createOpenRouterChallenge(verifier){
  const data=new TextEncoder().encode(verifier);
  const hash=await crypto.subtle.digest('SHA-256',data);
  return btoa(String.fromCharCode(...new Uint8Array(hash))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
}
function randomVerifier(){
  const bytes=new Uint8Array(32); crypto.getRandomValues(bytes);
  return Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');
}
async function connectOpenRouter(){
  if(location.protocol!=='https:' && location.hostname!=='localhost' && location.hostname!=='127.0.0.1'){
    showToast('一键连接需要在已部署的网站上使用'); return;
  }
  const verifier=randomVerifier();
  const challenge=await createOpenRouterChallenge(verifier);
  sessionStorage.setItem('study-openrouter-verifier',verifier);
  sessionStorage.setItem('study-openrouter-return',location.href.split('?')[0]);
  const callback=`${location.origin}${location.pathname}`;
  location.href=`https://openrouter.ai/auth?callback_url=${encodeURIComponent(callback)}&code_challenge=${encodeURIComponent(challenge)}&code_challenge_method=S256&key_label=${encodeURIComponent('Study Language')}`;
}
async function handleOpenRouterCallback(){
  const params=new URLSearchParams(location.search);
  const code=params.get('code');
  if(!code) return;
  const verifier=sessionStorage.getItem('study-openrouter-verifier');
  try{
    if(!verifier) throw new Error('授权信息已过期，请重新连接');
    const res=await fetch('https://openrouter.ai/api/v1/auth/keys',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code,code_verifier:verifier,code_challenge_method:'S256'})});
    const data=await res.json();
    if(!res.ok || !data?.key) throw new Error(data?.error?.message || data?.message || `授权失败 ${res.status}`);
    state.ai.provider='openrouter'; state.ai.key=data.key; state.ai.model='openrouter/free'; saveState();
    sessionStorage.removeItem('study-openrouter-verifier');
    const clean=`${location.pathname}${location.hash||''}`; history.replaceState({},'',clean);
    route={page:'ai',lessonId:null}; render(); showToast('免费 AI 已连接');
  }catch(err){
    history.replaceState({},'',location.pathname); render(); showToast(`AI 连接失败：${err.message}`);
  }
}
async function testAIConnection(providerId,key,model){
  const provider=AI_PROVIDERS[providerId] || AI_PROVIDERS.openrouter;
  const headers={'Authorization':`Bearer ${key}`,'Content-Type':'application/json'};
  if(providerId==='openrouter') headers['X-Title']='Study Personal Language Learning';
  const res=await fetch(provider.endpoint,{method:'POST',headers,body:JSON.stringify({model:model||provider.defaultModel,messages:[{role:'user',content:'只回复 OK'}],temperature:0,max_tokens:8})});
  const data=await res.json().catch(()=>({}));
  if(!res.ok) throw new Error(data?.error?.message || data?.message || `请求失败 ${res.status}`);
  return true;
}

async function sendAI(prefill=null){
  const input=document.getElementById('chatInput'); const text=(prefill ?? input?.value ?? '').trim(); if(!text)return;
  if(!state.ai.key){ openSettings(); setTimeout(()=>showToast('AI 还没连接。OpenRouter 可以一键授权，不用手动找 Key。'),100); return; }
  state.chat[state.lang].push({role:'user',content:text}); saveState(); if(input)input.value=''; render();
  const system=`你是用户的私人${langInfo().name}学习助手。用户主要使用中文。当前学习起点是：${currentLevel()}。回答要清楚、简洁、适合长期自学。${state.lang==='en'?'英语默认按六级以后（约 B2→C1）的词汇、阅读、口语和写作难度，不要从 CET-4、ABC 或过度基础语法重新讲起；优先教自然搭配、语义细微差别和真实表达。':''}${state.lang==='ko'?'韩语按初级讲解；遇到 -고 싶다、-(으)면 等带连接符的语法标题，要明确说明连接符只是教材标记，表示需要接在前面的词干/成分后，实际句子不输入横线；韩语词句默认附罗马字发音参考。':''}${state.lang==='th'?'泰语按初级讲解；泰语词句默认附罗马字/音译发音参考，同时提醒音译只是辅助，真实发音以聆听和声调规则为准。':''}对话练习时不要一次说太多，优先让用户开口。发现语言错误时简短纠正并给更自然的版本。`;
  const history=state.chat[state.lang].slice(-12);
  try{
    const provider=aiProviderInfo();
    const headers={'Authorization':`Bearer ${state.ai.key}`,'Content-Type':'application/json'};
    if(state.ai.provider==='openrouter') headers['X-Title']='Study Personal Language Learning';
    const res=await fetch(provider.endpoint,{method:'POST',headers,body:JSON.stringify({model:state.ai.model||provider.defaultModel,messages:[{role:'system',content:system},...history],temperature:.7})});
    const data=await res.json(); if(!res.ok) throw new Error(data?.error?.message || `请求失败 ${res.status}`);
    const reply=data?.choices?.[0]?.message?.content || '这次没有收到文本回复。'; state.chat[state.lang].push({role:'assistant',content:reply}); saveState(); render();
  }catch(err){state.chat[state.lang].push({role:'assistant',content:`AI 暂时没有连上：${err.message}\n\n你可以检查 API Key、网络，或稍后重试。`});saveState();render();}
}

document.getElementById('languageButton').onclick=openLanguageModal;
document.getElementById('settingsButton').onclick=openSettings;
document.addEventListener('click',e=>{ const nav=e.target.closest('[data-nav]'); if(nav && !nav.closest('#page')) navigate(nav.dataset.nav); });

if ('serviceWorker' in navigator && (location.protocol==='https:' || location.hostname==='localhost' || location.hostname==='127.0.0.1')) {
  window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
}

warmSpeechVoices();
warmFallbackTTS();
ensureMaterialBank(state.lang);
render();
handleOpenRouterCallback();
