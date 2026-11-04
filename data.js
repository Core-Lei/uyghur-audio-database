/* U1–U68: existing recordings. U69–U500: authored text examples without audio. */
const samples = [
  {
    "id": "U1",
    "text": "医生建议患者每天服用3次，每次250 mg，最好在早餐、午餐和晚餐后30分钟服用。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位mg",
      "时间",
      "复杂数字"
    ],
    "file": "U31.wav",
    "format": "WAV",
    "originalId": "U31",
    "kind": "recorded"
  },
  {
    "id": "U2",
    "text": "这种口服液每瓶500 ml，成人每次服用10 ml，儿童每次只能服用5 ml。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位ml",
      "成人/儿童",
      "多个数值"
    ],
    "file": "U32.m4a",
    "format": "M4A",
    "originalId": "U32",
    "kind": "recorded"
  },
  {
    "id": "U3",
    "text": "患者体重约为62.5 kg，身高为172 cm，建议每天饮水量不少于1500 ml。",
    "category": "生理指标",
    "phenomena": [
      "小数",
      "单位kg/cm/ml",
      "最低限值",
      "多个数值"
    ],
    "file": "U33.mp3",
    "format": "MP3",
    "originalId": "U33",
    "kind": "recorded"
  },
  {
    "id": "U4",
    "text": "药品应储存在15℃至25℃之间的阴凉处，不能放在阳光直射或温度超过30℃的地方。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "区间",
      "阈值",
      "单位℃"
    ],
    "file": "U35.m4a",
    "format": "M4A",
    "originalId": "U35",
    "kind": "recorded"
  },
  {
    "id": "U5",
    "text": "检查结果显示，血糖为6.8 mmol/L，血压为135/85 mmHg，心率为每分钟92次。",
    "category": "生理指标",
    "phenomena": [
      "小数",
      "单位mmol/L",
      "单位mmHg",
      "斜杠",
      "多个数值"
    ],
    "file": "U37.mp3",
    "format": "MP3",
    "originalId": "U37",
    "kind": "recorded"
  },
  {
    "id": "U6",
    "text": "该营养液含有0.5 g蛋白质、2.5 g脂肪和12.04 g碳水化合物，每100 ml约含85 kcal。",
    "category": "营养与成分",
    "phenomena": [
      "小数",
      "单位g",
      "单位kcal",
      "多个数值"
    ],
    "file": "U38.m4a",
    "format": "M4A",
    "originalId": "U38",
    "kind": "recorded"
  },
  {
    "id": "U7",
    "text": "研究结果显示，实验组的准确率从45.3%提高到89.7%，错误率下降了44.4个百分点。",
    "category": "统计数据",
    "phenomena": [
      "百分数",
      "小数",
      "比例关系",
      "多个数值"
    ],
    "file": "U40.mp3",
    "format": "MP3",
    "originalId": "U40",
    "kind": "recorded"
  },
  {
    "id": "U8",
    "text": "当温度低于-5℃或高于40℃时，设备会自动停止工作，并在屏幕上显示警告符号。",
    "category": "温度与范围",
    "phenomena": [
      "负数",
      "温度",
      "阈值",
      "单位℃"
    ],
    "file": "U41.m4a",
    "format": "M4A",
    "originalId": "U41",
    "kind": "recorded"
  },
  {
    "id": "U9",
    "text": "请在2026年4月28日之前完成检查，并在09:30到12:00之间把报告发送给负责人。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间段",
      "截止时间",
      "冒号"
    ],
    "file": "U42.m4a",
    "format": "M4A",
    "originalId": "U42",
    "kind": "recorded"
  },
  {
    "id": "U10",
    "text": "这项研究从2024年1月开始，到2026年6月结束，整个项目预计持续约30个月。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "区间",
      "月数"
    ],
    "file": "U43.m4a",
    "format": "M4A",
    "originalId": "U43",
    "kind": "recorded"
  },
  {
    "id": "U11",
    "text": "该设备的输入电压为220 V，允许范围是220±10 V，输出功率为1500 W，工作频率为50 Hz。",
    "category": "工程参数",
    "phenomena": [
      "单位V/W/Hz",
      "范围",
      "±符号",
      "多个数值"
    ],
    "file": "U46.m4a",
    "format": "M4A",
    "originalId": "U46",
    "kind": "recorded"
  },
  {
    "id": "U12",
    "text": "统计结果表明，年龄在18至30岁之间的人群占总人数的56%，31至60岁的人群占32%，其余人群占12%。",
    "category": "统计数据",
    "phenomena": [
      "百分数",
      "年龄区间",
      "比例关系",
      "多个数值"
    ],
    "file": "U48.m4a",
    "format": "M4A",
    "originalId": "U48",
    "kind": "recorded"
  },
  {
    "id": "U13",
    "text": "服药后如果出现持续头痛、呼吸困难、皮疹或体温超过39℃，应立即停止服药并联系医生。",
    "category": "医疗用药",
    "phenomena": [
      "条件判断",
      "症状",
      "温度阈值",
      "单位℃"
    ],
    "file": "U49.m4a",
    "format": "M4A",
    "originalId": "U49",
    "kind": "recorded"
  },
  {
    "id": "U14",
    "text": "请记录每天的服药时间、服药剂量和身体反应；如果连续3天忘记服药，或者出现严重不适，应及时咨询医生。",
    "category": "医疗用药",
    "phenomena": [
      "时间",
      "剂量",
      "条件判断",
      "持续天数"
    ],
    "file": "U50.m4a",
    "format": "M4A",
    "originalId": "U50",
    "kind": "recorded"
  },
  {
    "id": "U15",
    "text": "医生叮嘱一天吃1次药片，每次150毫克，固定在晚饭之后服用。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位mg",
      "时间"
    ],
    "file": "U51.m4a",
    "format": "M4A",
    "originalId": "U51",
    "kind": "recorded"
  },
  {
    "id": "U16",
    "text": "这款糖浆一瓶容量100毫升，成人一次喝6毫升，儿童一次只用3毫升。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位ml",
      "成人/儿童",
      "多个数值"
    ],
    "file": "U52.wav",
    "format": "WAV",
    "originalId": "U52",
    "kind": "recorded"
  },
  {
    "id": "U17",
    "text": "每粒软胶囊含有效成分200毫克，24小时最多服用3粒，不要擅自加量。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位mg",
      "时间",
      "上限值"
    ],
    "file": "U53.wav",
    "format": "WAV",
    "originalId": "U53",
    "kind": "recorded"
  },
  {
    "id": "U18",
    "text": "药膏需要放在阴凉避光处保存，环境温度不能高于28℃，开封后两个月内用完。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "单位℃",
      "阈值",
      "时间"
    ],
    "file": "U54.wav",
    "format": "WAV",
    "originalId": "U54",
    "kind": "recorded"
  },
  {
    "id": "U19",
    "text": "用药之后如果感觉恶心、皮肤发痒，要暂停使用，尽快咨询医师。",
    "category": "医疗用药",
    "phenomena": [
      "条件判断",
      "症状",
      "用药安全"
    ],
    "file": "U55.mp3",
    "format": "MP3",
    "originalId": "U55",
    "kind": "recorded"
  },
  {
    "id": "U20",
    "text": "记得记下每次用药的时间，要是漏服一次，下次不要一次性吃双倍药量。",
    "category": "医疗用药",
    "phenomena": [
      "时间",
      "条件判断",
      "剂量安全"
    ],
    "file": "U56.m4a",
    "format": "M4A",
    "originalId": "U56",
    "kind": "recorded"
  },
  {
    "id": "U21",
    "text": "医生嘱咐这个药一天服用2次，每次100毫克，两次服药间隔至少8小时，建议午餐、晚餐后温水送服。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位mg",
      "时间"
    ],
    "file": "U59.m4a",
    "format": "M4A",
    "originalId": "U59",
    "kind": "recorded"
  },
  {
    "id": "U22",
    "text": "这款口服悬浊液一瓶180毫升，成人一次取用9毫升，儿童用量减半，24小时最多服用3次。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位ml",
      "成人/儿童",
      "次数"
    ],
    "file": "U60.m4a",
    "format": "M4A",
    "originalId": "U60",
    "kind": "recorded"
  },
  {
    "id": "U23",
    "text": "用药后如果持续头晕超过2小时、出现轻微腹泻，先暂停用药，在24小时内向医生咨询情况。",
    "category": "医疗用药",
    "phenomena": [
      "时间",
      "症状",
      "条件判断"
    ],
    "file": "U63.mp3",
    "format": "MP3",
    "originalId": "U63",
    "kind": "recorded"
  },
  {
    "id": "U24",
    "text": "平时做好用药记录，万一漏掉一次服药，距离下次吃药不足4小时的话，直接跳过，下次千万不要一次性吃两份。",
    "category": "医疗用药",
    "phenomena": [
      "时间",
      "条件判断",
      "剂量安全"
    ],
    "file": "U64.m4a",
    "format": "M4A",
    "originalId": "U64",
    "kind": "recorded"
  },
  {
    "id": "U25",
    "text": "服药7天内尽量不饮酒，清淡饮食，每日额外饮用不少于1200毫升温水，减少肠胃刺激。",
    "category": "医疗用药",
    "phenomena": [
      "持续天数",
      "单位ml",
      "最低限值",
      "条件判断"
    ],
    "file": "U67.m4a",
    "format": "M4A",
    "originalId": "U67",
    "kind": "recorded"
  },
  {
    "id": "U26",
    "text": "医生叮嘱该药品每日服用1次，每次130毫克，早餐后温水送服，连续服用最多12天。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位mg",
      "时间",
      "持续天数",
      "阈值",
      "饮水"
    ],
    "file": "U69.m4a",
    "format": "M4A",
    "originalId": "U69",
    "kind": "recorded"
  },
  {
    "id": "U27",
    "text": "这款口服糖浆一瓶220毫升，成人一次取用11毫升，青少年单次6毫升，24小时最多服用2次。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "成人/儿童",
      "时间",
      "阈值"
    ],
    "file": "U70.mp3",
    "format": "MP3",
    "originalId": "U70",
    "kind": "recorded"
  },
  {
    "id": "U28",
    "text": "每粒软胶囊含有效成分220毫克，24小时内最多吃3粒，单日总药量不能超过660毫克，不可嚼破外壳。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位mg",
      "时间",
      "阈值",
      "剂量安全"
    ],
    "file": "U71-音频.wav",
    "format": "WAV",
    "originalId": "U71",
    "kind": "recorded"
  },
  {
    "id": "U29",
    "text": "外用洗液需避光密封存放，储存温度保持12～24℃，开封后45天内用完，过期直接丢弃。",
    "category": "温度与范围",
    "phenomena": [
      "时间",
      "持续天数",
      "温度",
      "区间",
      "保存条件"
    ],
    "file": "U72.m4a",
    "format": "M4A",
    "originalId": "U72",
    "kind": "recorded"
  },
  {
    "id": "U30",
    "text": "用药后如果持续恶心超过3小时、皮肤出现成片红疹，立刻停药，12小时内联系医师评估情况。",
    "category": "医疗用药",
    "phenomena": [
      "时间",
      "阈值",
      "条件判断",
      "症状"
    ],
    "file": "U73.m4a",
    "format": "M4A",
    "originalId": "U73",
    "kind": "recorded"
  },
  {
    "id": "U31",
    "text": "输液药液总量180毫升，滴速控制在每分钟35滴左右，大约90分钟缓慢输注完毕。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位ml",
      "时间",
      "输液与滴速"
    ],
    "file": "U76.mp3",
    "format": "MP3",
    "originalId": "U76",
    "kind": "recorded"
  },
  {
    "id": "U32",
    "text": "服药10天内尽量不吃重油食物，每日饮用不少于1100毫升温水，减轻脏器代谢负担。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "时间",
      "持续天数",
      "阈值",
      "饮食限制",
      "饮水"
    ],
    "file": "U77.m4a",
    "format": "M4A",
    "originalId": "U77",
    "kind": "recorded"
  },
  {
    "id": "U33",
    "text": "这款鼻腔喷雾每瓶12ml，成人每侧鼻孔喷1下，全天最多使用4次，两次使用间隔至少6小时。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "成人/儿童",
      "时间",
      "间隔",
      "阈值"
    ],
    "file": "U78.mp3",
    "format": "MP3",
    "originalId": "U78",
    "kind": "recorded"
  },
  {
    "id": "U34",
    "text": "医嘱安排每日服药3次，单次剂量80毫克，三次服药间隔至少6小时，饭后服用减少肠胃刺激。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位mg",
      "时间",
      "间隔"
    ],
    "file": "U79.mp3",
    "format": "MP3",
    "originalId": "U79",
    "kind": "recorded"
  },
  {
    "id": "U35",
    "text": "这款滴剂一瓶30毫升，成人一次滴入5滴，儿童一次2滴，24小时使用不超过4次。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "成人/儿童",
      "时间",
      "阈值"
    ],
    "file": "U80.mp3",
    "format": "MP3",
    "originalId": "U80",
    "kind": "recorded"
  },
  {
    "id": "U36",
    "text": "每片素片含有效成分280毫克，24小时最多服用3片，单日药量上限840毫克，禁止自行增加药量。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位mg",
      "时间",
      "阈值"
    ],
    "file": "U81.m4a",
    "format": "M4A",
    "originalId": "U81",
    "kind": "recorded"
  },
  {
    "id": "U37",
    "text": "皮肤涂抹药膏需要阴凉保存，环境温度不高于27℃，开封后50天内用完。",
    "category": "温度与范围",
    "phenomena": [
      "时间",
      "持续天数",
      "温度",
      "保存条件"
    ],
    "file": "U82.mp3",
    "format": "MP3",
    "originalId": "U82",
    "kind": "recorded"
  },
  {
    "id": "U38",
    "text": "用药之后如果视线模糊、持续腹痛，暂停用药，20小时内前往门诊检查。",
    "category": "医疗用药",
    "phenomena": [
      "时间",
      "条件判断",
      "症状"
    ],
    "file": "U83.m4a",
    "format": "M4A",
    "originalId": "U83",
    "kind": "recorded"
  },
  {
    "id": "U39",
    "text": "每次服药做好记录，漏服之后，若距离下一次吃药大于5小时，可以及时补服一次。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "时间",
      "阈值",
      "条件判断"
    ],
    "file": "U84.mp3",
    "format": "MP3",
    "originalId": "U84",
    "kind": "recorded"
  },
  {
    "id": "U40",
    "text": "药用粉剂每袋6克，加入180毫升温凉水溶解，一天3袋，早中晚分开服用。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "单位g",
      "饮水"
    ],
    "file": "U85.m4a",
    "format": "M4A",
    "originalId": "U85",
    "kind": "recorded"
  },
  {
    "id": "U41",
    "text": "输液药液300毫升，滴速每分钟45滴，大约75分钟输完。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位ml",
      "时间",
      "输液与滴速"
    ],
    "file": "U86.m4a",
    "format": "M4A",
    "originalId": "U86",
    "kind": "recorded"
  },
  {
    "id": "U42",
    "text": "服药5天内禁止饮用含酒精饮品，每日补水不少于1300毫升，保护胃肠黏膜。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "时间",
      "持续天数",
      "阈值",
      "饮食限制",
      "饮水"
    ],
    "file": "U87.mp3",
    "format": "MP3",
    "originalId": "U87",
    "kind": "recorded"
  },
  {
    "id": "U43",
    "text": "口腔喷雾每瓶20ml，每次对着患处喷射3下，一天最多2次，两次间隔至少8小时。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "时间",
      "间隔",
      "阈值"
    ],
    "file": "U88.mp3",
    "format": "MP3",
    "originalId": "U88",
    "kind": "recorded"
  },
  {
    "id": "U44",
    "text": "医生建议每天吃1次药片，单次240毫克，晚餐后半小时服用，连续服用最多14天。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位mg",
      "时间",
      "持续天数",
      "阈值"
    ],
    "file": "U89.wav",
    "format": "WAV",
    "originalId": "U89",
    "kind": "recorded"
  },
  {
    "id": "U45",
    "text": "这款口服混悬剂一瓶150毫升，成人一次10毫升，儿童一次4毫升，24小时不超过3次。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "成人/儿童",
      "时间",
      "阈值"
    ],
    "file": "U90.m4a",
    "format": "M4A",
    "originalId": "U90",
    "kind": "recorded"
  },
  {
    "id": "U46",
    "text": "每粒肠溶胶囊含有效成分260毫克，24小时最多2粒，总剂量不能超过520毫克，不可掰开胶囊。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位mg",
      "时间",
      "阈值",
      "剂量安全"
    ],
    "file": "U91.m4a",
    "format": "M4A",
    "originalId": "U91",
    "kind": "recorded"
  },
  {
    "id": "U47",
    "text": "外用凝胶存放于8～22℃环境，避光保存，开封后28天内用完。",
    "category": "温度与范围",
    "phenomena": [
      "时间",
      "持续天数",
      "温度",
      "区间",
      "保存条件"
    ],
    "file": "U92.m4a",
    "format": "M4A",
    "originalId": "U92",
    "kind": "recorded"
  },
  {
    "id": "U48",
    "text": "服药后如果胸闷、持续乏力超过4小时，马上停药，尽快前往医院就诊。",
    "category": "医疗用药",
    "phenomena": [
      "时间",
      "阈值",
      "条件判断",
      "症状"
    ],
    "file": "U93.m4a",
    "format": "M4A",
    "originalId": "U93",
    "kind": "recorded"
  },
  {
    "id": "U49",
    "text": "日常记录用药时间，忘记服药，距离下次服药大于7小时，才可以补服。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "时间",
      "阈值",
      "条件判断"
    ],
    "file": "U94.m4a",
    "format": "M4A",
    "originalId": "U94",
    "kind": "recorded"
  },
  {
    "id": "U50",
    "text": "中药颗粒每袋9克，使用140毫升温水冲泡，一天2袋，早晚饭后服用。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "单位g",
      "时间",
      "饮水"
    ],
    "file": "U95.m4a",
    "format": "M4A",
    "originalId": "U95",
    "kind": "recorded"
  },
  {
    "id": "U51",
    "text": "输液药液200毫升，滴速每分钟30滴，约110分钟输完。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位ml",
      "时间",
      "输液与滴速"
    ],
    "file": "U96.m4a",
    "format": "M4A",
    "originalId": "U96",
    "kind": "recorded"
  },
  {
    "id": "U52",
    "text": "服药9天内清淡饮食，每日饮水量不少于950毫升。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "时间",
      "持续天数",
      "阈值",
      "饮食限制",
      "饮水"
    ],
    "file": "U97.m4a",
    "format": "M4A",
    "originalId": "U97",
    "kind": "recorded"
  },
  {
    "id": "U53",
    "text": "耳部滴液每瓶8ml，成人每次向耳内滴3滴，一天使用2次，两次间隔不少于7小时。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "成人/儿童",
      "时间",
      "间隔",
      "阈值"
    ],
    "file": "U98.wav",
    "format": "WAV",
    "originalId": "U98",
    "kind": "recorded"
  },
  {
    "id": "U54",
    "text": "医生嘱咐每日服药2次，单次95毫克，早晚两餐之后服用，两次间隔不能低于7小时。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位mg",
      "时间",
      "间隔",
      "阈值"
    ],
    "file": "U99.mp3",
    "format": "MP3",
    "originalId": "U99",
    "kind": "recorded"
  },
  {
    "id": "U55",
    "text": "这款止咳口服液容量260毫升，成人单次13毫升，7到12岁儿童单次6毫升，24小时最多3次。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "成人/儿童",
      "时间",
      "阈值"
    ],
    "file": "U100.mp3",
    "format": "MP3",
    "originalId": "U100",
    "kind": "recorded"
  },
  {
    "id": "U56",
    "text": "每片咀嚼片含有有效成分190毫克，24小时最多4片，单日总量不超过760毫克，咀嚼后咽下。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位mg",
      "时间",
      "阈值"
    ],
    "file": "U101.m4a",
    "format": "M4A",
    "originalId": "U101",
    "kind": "recorded"
  },
  {
    "id": "U57",
    "text": "消毒软膏存放环境维持11~23℃，避光密封，开封后40天内使用完毕。",
    "category": "温度与范围",
    "phenomena": [
      "时间",
      "持续天数",
      "温度",
      "区间",
      "保存条件"
    ],
    "file": "U102.mp3",
    "format": "MP3",
    "originalId": "U102",
    "kind": "recorded"
  },
  {
    "id": "U58",
    "text": "用药后如果持续头晕超过2.5小时，或者口唇肿胀，立刻停药并在8小时内咨询医生。",
    "category": "医疗用药",
    "phenomena": [
      "时间",
      "阈值",
      "条件判断",
      "症状"
    ],
    "file": "U103.m4a",
    "format": "M4A",
    "originalId": "U103",
    "kind": "recorded"
  },
  {
    "id": "U59",
    "text": "如果忘记吃药，距离下次服药不足5小时，直接跳过本次，不要叠加双倍剂量。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "时间",
      "阈值",
      "条件判断",
      "剂量安全"
    ],
    "file": "U104.wav",
    "format": "WAV",
    "originalId": "U104",
    "kind": "recorded"
  },
  {
    "id": "U60",
    "text": "速溶药粉每袋5克，倒入160毫升温水搅匀，每日3袋，三餐后分别服用。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "单位g",
      "时间",
      "饮水"
    ],
    "file": "U105.m4a",
    "format": "M4A",
    "originalId": "U105",
    "kind": "recorded"
  },
  {
    "id": "U61",
    "text": "输液药液350毫升，滴速每分钟50滴，大约85分钟输注完成。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位ml",
      "时间",
      "输液与滴速"
    ],
    "file": "U106.m4a",
    "format": "M4A",
    "originalId": "U106",
    "kind": "recorded"
  },
  {
    "id": "U62",
    "text": "服药12天内少吃辛辣食物，每日饮水不少于1050毫升，降低身体不适感。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "时间",
      "持续天数",
      "阈值",
      "饮食限制",
      "饮水"
    ],
    "file": "U107.m4a",
    "format": "M4A",
    "originalId": "U107",
    "kind": "recorded"
  },
  {
    "id": "U63",
    "text": "咽喉滴剂每瓶10ml，成人一次滴4滴，一天最多4次，相邻两次间隔至少5小时。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "成人/儿童",
      "时间",
      "间隔",
      "阈值"
    ],
    "file": "U108.m4a",
    "format": "M4A",
    "originalId": "U108",
    "kind": "recorded"
  },
  {
    "id": "U64",
    "text": "医嘱要求每日1次服药，单次210毫克，午餐后服用，最长连续服用16天。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位mg",
      "时间",
      "持续天数"
    ],
    "file": "U109.m4a",
    "format": "M4A",
    "originalId": "U109",
    "kind": "recorded"
  },
  {
    "id": "U65",
    "text": "这款混悬滴剂一瓶40毫升，成人单次7毫升，幼儿单次2毫升，24小时最多2次。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位ml",
      "成人/儿童",
      "时间",
      "阈值"
    ],
    "file": "U110.mp3",
    "format": "MP3",
    "originalId": "U110",
    "kind": "recorded"
  },
  {
    "id": "U66",
    "text": "每粒缓释胶囊含有效成分320毫克，24小时最多2粒，单日上限640毫克，严禁碾碎。",
    "category": "医疗用药",
    "phenomena": [
      "次数",
      "剂量",
      "单位mg",
      "时间",
      "阈值",
      "剂量安全"
    ],
    "file": "U111.m4a",
    "format": "M4A",
    "originalId": "U111",
    "kind": "recorded"
  },
  {
    "id": "U67",
    "text": "外用洗剂保存温度控制在9~26℃，避光存放，开封后35天内用完。",
    "category": "温度与范围",
    "phenomena": [
      "时间",
      "持续天数",
      "温度",
      "区间",
      "保存条件"
    ],
    "file": "U112.m4a",
    "format": "M4A",
    "originalId": "U112",
    "kind": "recorded"
  },
  {
    "id": "U68",
    "text": "用药后出现皮肤瘙痒、持续呕吐超过1.5小时，立即停药，尽快就医。",
    "category": "医疗用药",
    "phenomena": [
      "时间",
      "阈值",
      "条件判断",
      "症状"
    ],
    "file": "U113.m4a",
    "format": "M4A",
    "originalId": "U113",
    "kind": "recorded"
  },
  {
    "id": "U69",
    "text": "模拟处方记录：样品甲每片标示180 mg，每盒12片，包装批号为RX-1201。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位mg",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U70",
    "text": "虚构体检记录1201：身高162 cm，体重52.5 kg，测量时间为08:10。",
    "category": "生理指标",
    "phenomena": [
      "单位kg/cm",
      "小数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U71",
    "text": "仓库甲的温度应记录在8℃至22℃的区间内，传感器每隔25分钟保存一次读数。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "区间",
      "间隔",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U72",
    "text": "虚构食品标签：每100 g含蛋白质2.35 g、脂肪2 g，一袋净含量为180 g。",
    "category": "营养与成分",
    "phenomena": [
      "小数",
      "单位g",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U73",
    "text": "模拟实验中，A组共180条记录，B组共12条记录，两组合计192条。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U74",
    "text": "活动甲计划在2027年1月10日的08:10开始，预计持续25分钟，请按先后顺序复述。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "持续时长"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U75",
    "text": "虚构设备甲输入电压为110 V，额定功率为300 W，工作频率为50 Hz。",
    "category": "工程参数",
    "phenomena": [
      "单位V/W/Hz",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U76",
    "text": "虚构车次TR-1201计划于2027年1月10日的08:10从甲站发车，检票提前2分钟结束。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "日期",
      "时间",
      "提前量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U77",
    "text": "模拟采购清单列出180本笔记本和12支笔，合计192件，订单编号ORD-1201。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U78",
    "text": "药品标签听读示例：溶液甲每瓶180 ml，每箱12瓶，生产日期记为2027年1月10日。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "日期"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U79",
    "text": "模拟运动日志：第2组受试者的步数为3250步，行走距离2.35 km，用时25分钟。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "小数",
      "单位km",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U80",
    "text": "气象模拟数据：清晨最低温为-2℃，午后最高温为22℃，温差为24℃。",
    "category": "温度与范围",
    "phenomena": [
      "负数",
      "温度",
      "差值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U81",
    "text": "样品甲每100 ml标示能量180 kcal，一瓶200 ml，听测时需区分这两个单位。",
    "category": "营养与成分",
    "phenomena": [
      "单位ml",
      "单位kcal",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U82",
    "text": "虚构评测表显示，系统甲的准确率为68%，另一指标记为2.35分。",
    "category": "统计数据",
    "phenomena": [
      "百分数",
      "小数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U83",
    "text": "编号CAL-1201的会议预留25分钟，提醒将在开始前2分钟发出。",
    "category": "日期与时间",
    "phenomena": [
      "时间",
      "提前量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U84",
    "text": "测试模块ENG-1201的长度为180 mm，宽度为12 mm，尺寸误差不超过±2 mm。",
    "category": "工程参数",
    "phenomena": [
      "单位mm",
      "±符号",
      "阈值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U85",
    "text": "模拟导航提示：沿主路行驶2.35 km后右转，再前行180 m到达甲广场。",
    "category": "交通与出行",
    "phenomena": [
      "小数",
      "单位km/m",
      "顺序"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U86",
    "text": "图书馆甲分馆计划在2027年1月10日归还12本图书，读者预约号为LIB-1201。",
    "category": "日常与事务",
    "phenomena": [
      "日期",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U87",
    "text": "模拟药房盘点显示，第2号柜共有180盒片剂和12瓶糖浆，合计192件。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U88",
    "text": "听测示例中，记录员将晨间心率记为每分钟66次，复测时间记为08:10。",
    "category": "生理指标",
    "phenomena": [
      "次数",
      "时间",
      "单位次/分钟"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U89",
    "text": "实验箱1201设定为22±2℃，连续运行25分钟后输出检查报告。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "±符号",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U90",
    "text": "模拟配方需要180 g谷物和12 g坚果，混合后的总质量为192 g。",
    "category": "营养与成分",
    "phenomena": [
      "单位g",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U91",
    "text": "问卷练习共发放180份，回收12份，统计截止时间为2027年1月10日的08:10。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "日期",
      "截止时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U92",
    "text": "档案从2027年1月保存至2028年1月，保管周期为12个月。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "区间",
      "月数"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U93",
    "text": "模拟水泵以每分钟180转运行25分钟，随后降低到每分钟12转。",
    "category": "工程参数",
    "phenomena": [
      "速度",
      "时间",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U94",
    "text": "训练航班FL-1201安排在2号登机口，托运行李限重12 kg，登机时间为08:10。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "单位kg",
      "阈值",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U95",
    "text": "训练快递单写明包裹质量2.35 kg，箱体长180 cm、宽12 cm。",
    "category": "日常与事务",
    "phenomena": [
      "小数",
      "单位kg/cm",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U96",
    "text": "虚构冷链记录：箱号MED-1201的温度从8℃升至22℃，记录时间为08:10。",
    "category": "医疗用药",
    "phenomena": [
      "温度",
      "区间",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U97",
    "text": "虚构健康问卷共180份，其中12份需要补录身高，完成比例为68%。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "百分数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U98",
    "text": "冷藏运输训练记录中，箱内温度低于8℃时亮蓝灯，高于22℃时亮红灯。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "阈值",
      "条件判断"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U99",
    "text": "虚构营养表第2栏写有钠180 mg、钙12 mg，数据批次为NUT-1201。",
    "category": "营养与成分",
    "phenomena": [
      "单位mg",
      "编号",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U100",
    "text": "训练图表将第2季度的样本量标为180条，并将下一季度目标设为192条。",
    "category": "统计数据",
    "phenomena": [
      "季度",
      "统计数量",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U101",
    "text": "模拟排班表规定，甲岗每隔25分钟巡查一次，当日计划巡查12次。",
    "category": "日期与时间",
    "phenomena": [
      "间隔",
      "次数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U102",
    "text": "传感器甲每秒采集180次数据，单个数据包大小为12 KB，缓存上限为192 KB。",
    "category": "工程参数",
    "phenomena": [
      "频率",
      "单位KB",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U103",
    "text": "公交模拟时刻表显示，线路1201的发车间隔为2分钟，全程共有12个站点。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "间隔",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U104",
    "text": "模拟课程安排在2号教室，开始时间为08:10，本次共有12名学员参加。",
    "category": "日常与事务",
    "phenomena": [
      "编号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U105",
    "text": "模拟说明书中的规格为每支12 ml、每盒2支；请在听测表中分别填写这两个数值。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U106",
    "text": "模拟检测仪显示测量值2.35 mmol/L，样本编号BIO-1201，本次数据仅为读数练习。",
    "category": "生理指标",
    "phenomena": [
      "小数",
      "单位mmol/L",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U107",
    "text": "模拟湿度表显示68%，允许误差为±2个百分点，采样地点是甲站。",
    "category": "温度与范围",
    "phenomena": [
      "百分数",
      "±符号",
      "误差"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U108",
    "text": "食品包装训练文本中，果汁含量为68%，每盒200 ml，每箱12盒。",
    "category": "营养与成分",
    "phenomena": [
      "百分数",
      "单位ml",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U109",
    "text": "模拟分组比例为2∶3，总共安排180个样本，组别编号为STAT-1201。",
    "category": "统计数据",
    "phenomena": [
      "比例",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U110",
    "text": "预约训练记录为2027年1月10日 08:10，若迟到超过2分钟，则在系统中标记待确认。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "条件判断",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U111",
    "text": "训练图纸标注连接线长度2.35 m，线缆编号为CAB-1201，接口数量为2个。",
    "category": "工程参数",
    "phenomena": [
      "小数",
      "单位m",
      "编号",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U112",
    "text": "虚构运输订单需将180件货物送往甲仓，已装车12件，剩余168件。",
    "category": "交通与出行",
    "phenomena": [
      "数量",
      "减法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U113",
    "text": "虚构用水台账记录本月180 m³、上月12 m³，两个月合计192 m³。",
    "category": "日常与事务",
    "phenomena": [
      "单位m³",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U114",
    "text": "药房训练数据中，样品甲的库存由180盒调整为192盒，本次补入12盒。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "变化关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U115",
    "text": "训练表第2行列出收缩压112 mmHg、舒张压70 mmHg，并标注为模拟数据。",
    "category": "生理指标",
    "phenomena": [
      "单位mmHg",
      "多个数值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U116",
    "text": "温控测试从08:10开始，目标范围为8～22℃，计划收集180组读数。",
    "category": "温度与范围",
    "phenomena": [
      "时间",
      "区间",
      "单位℃",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U117",
    "text": "样品甲的保质期标示为6个月，生产日期为2027年1月10日，储存温度标示为8～22℃。",
    "category": "营养与成分",
    "phenomena": [
      "日期",
      "月数",
      "温度",
      "区间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U118",
    "text": "虚构评估记录显示平均耗时2.35秒，重复运行12次，误差范围为±2秒。",
    "category": "统计数据",
    "phenomena": [
      "小数",
      "时间",
      "次数",
      "±符号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U119",
    "text": "第2批资料须在2027年1月10日之前归档，每份资料附12张表格，截止时刻为08:10。",
    "category": "日期与时间",
    "phenomena": [
      "截止时间",
      "日期",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U120",
    "text": "模拟供电测试要求电压保持在110±2 V，累计运行25分钟并生成12条日志。",
    "category": "工程参数",
    "phenomena": [
      "单位V",
      "±符号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U121",
    "text": "停车场训练记录：车辆停放25分钟，车位编号P-1201，驶离时间为08:10。",
    "category": "交通与出行",
    "phenomena": [
      "持续时长",
      "编号",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U122",
    "text": "资料柜甲共有12层，每层放置2个文件盒，总容量为24盒。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "乘法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U123",
    "text": "模拟处方记录：样品乙每片标示215 mg，每盒15片，包装批号为RX-1338。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位mg",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U124",
    "text": "虚构体检记录1338：身高164 cm，体重55.7 kg，测量时间为09:15。",
    "category": "生理指标",
    "phenomena": [
      "单位kg/cm",
      "小数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U125",
    "text": "仓库乙的温度应记录在9℃至24℃的区间内，传感器每隔35分钟保存一次读数。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "区间",
      "间隔",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U126",
    "text": "虚构食品标签：每100 g含蛋白质3.07 g、脂肪3 g，一袋净含量为215 g。",
    "category": "营养与成分",
    "phenomena": [
      "小数",
      "单位g",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U127",
    "text": "模拟实验中，A组共215条记录，B组共15条记录，两组合计230条。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U128",
    "text": "活动乙计划在2027年2月11日的09:15开始，预计持续35分钟，请按先后顺序复述。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "持续时长"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U129",
    "text": "虚构设备乙输入电压为120 V，额定功率为400 W，工作频率为50 Hz。",
    "category": "工程参数",
    "phenomena": [
      "单位V/W/Hz",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U130",
    "text": "虚构车次TR-1338计划于2027年2月11日的09:15从乙站发车，检票提前3分钟结束。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "日期",
      "时间",
      "提前量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U131",
    "text": "模拟采购清单列出215本笔记本和15支笔，合计230件，订单编号ORD-1338。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U132",
    "text": "药品标签听读示例：溶液乙每瓶215 ml，每箱15瓶，生产日期记为2027年2月11日。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "日期"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U133",
    "text": "模拟运动日志：第3组受试者的步数为3860步，行走距离3.07 km，用时35分钟。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "小数",
      "单位km",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U134",
    "text": "气象模拟数据：清晨最低温为-3℃，午后最高温为24℃，温差为27℃。",
    "category": "温度与范围",
    "phenomena": [
      "负数",
      "温度",
      "差值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U135",
    "text": "样品乙每100 ml标示能量215 kcal，一瓶250 ml，听测时需区分这两个单位。",
    "category": "营养与成分",
    "phenomena": [
      "单位ml",
      "单位kcal",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U136",
    "text": "虚构评测表显示，系统乙的准确率为71%，另一指标记为3.07分。",
    "category": "统计数据",
    "phenomena": [
      "百分数",
      "小数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U137",
    "text": "编号CAL-1338的会议预留35分钟，提醒将在开始前3分钟发出。",
    "category": "日期与时间",
    "phenomena": [
      "时间",
      "提前量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U138",
    "text": "测试模块ENG-1338的长度为215 mm，宽度为15 mm，尺寸误差不超过±3 mm。",
    "category": "工程参数",
    "phenomena": [
      "单位mm",
      "±符号",
      "阈值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U139",
    "text": "模拟导航提示：沿主路行驶3.07 km后右转，再前行215 m到达乙广场。",
    "category": "交通与出行",
    "phenomena": [
      "小数",
      "单位km/m",
      "顺序"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U140",
    "text": "图书馆乙分馆计划在2027年2月11日归还15本图书，读者预约号为LIB-1338。",
    "category": "日常与事务",
    "phenomena": [
      "日期",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U141",
    "text": "模拟药房盘点显示，第3号柜共有215盒片剂和15瓶糖浆，合计230件。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U142",
    "text": "听测示例中，记录员将晨间心率记为每分钟69次，复测时间记为09:15。",
    "category": "生理指标",
    "phenomena": [
      "次数",
      "时间",
      "单位次/分钟"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U143",
    "text": "实验箱1338设定为24±3℃，连续运行35分钟后输出检查报告。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "±符号",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U144",
    "text": "模拟配方需要215 g谷物和15 g坚果，混合后的总质量为230 g。",
    "category": "营养与成分",
    "phenomena": [
      "单位g",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U145",
    "text": "问卷练习共发放215份，回收15份，统计截止时间为2027年2月11日的09:15。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "日期",
      "截止时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U146",
    "text": "档案从2027年2月保存至2028年2月，保管周期为12个月。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "区间",
      "月数"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U147",
    "text": "模拟水泵以每分钟215转运行35分钟，随后降低到每分钟15转。",
    "category": "工程参数",
    "phenomena": [
      "速度",
      "时间",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U148",
    "text": "训练航班FL-1338安排在3号登机口，托运行李限重15 kg，登机时间为09:15。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "单位kg",
      "阈值",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U149",
    "text": "训练快递单写明包裹质量3.07 kg，箱体长215 cm、宽15 cm。",
    "category": "日常与事务",
    "phenomena": [
      "小数",
      "单位kg/cm",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U150",
    "text": "虚构冷链记录：箱号MED-1338的温度从9℃升至24℃，记录时间为09:15。",
    "category": "医疗用药",
    "phenomena": [
      "温度",
      "区间",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U151",
    "text": "虚构健康问卷共215份，其中15份需要补录身高，完成比例为71%。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "百分数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U152",
    "text": "冷藏运输训练记录中，箱内温度低于9℃时亮蓝灯，高于24℃时亮红灯。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "阈值",
      "条件判断"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U153",
    "text": "虚构营养表第3栏写有钠215 mg、钙15 mg，数据批次为NUT-1338。",
    "category": "营养与成分",
    "phenomena": [
      "单位mg",
      "编号",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U154",
    "text": "训练图表将第3季度的样本量标为215条，并将下一季度目标设为230条。",
    "category": "统计数据",
    "phenomena": [
      "季度",
      "统计数量",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U155",
    "text": "模拟排班表规定，乙岗每隔35分钟巡查一次，当日计划巡查15次。",
    "category": "日期与时间",
    "phenomena": [
      "间隔",
      "次数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U156",
    "text": "传感器乙每秒采集215次数据，单个数据包大小为15 KB，缓存上限为230 KB。",
    "category": "工程参数",
    "phenomena": [
      "频率",
      "单位KB",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U157",
    "text": "公交模拟时刻表显示，线路1338的发车间隔为3分钟，全程共有15个站点。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "间隔",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U158",
    "text": "模拟课程安排在3号教室，开始时间为09:15，本次共有15名学员参加。",
    "category": "日常与事务",
    "phenomena": [
      "编号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U159",
    "text": "模拟说明书中的规格为每支15 ml、每盒3支；请在听测表中分别填写这两个数值。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U160",
    "text": "模拟检测仪显示测量值3.07 mmol/L，样本编号BIO-1338，本次数据仅为读数练习。",
    "category": "生理指标",
    "phenomena": [
      "小数",
      "单位mmol/L",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U161",
    "text": "模拟湿度表显示71%，允许误差为±3个百分点，采样地点是乙站。",
    "category": "温度与范围",
    "phenomena": [
      "百分数",
      "±符号",
      "误差"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U162",
    "text": "食品包装训练文本中，果汁含量为71%，每盒250 ml，每箱15盒。",
    "category": "营养与成分",
    "phenomena": [
      "百分数",
      "单位ml",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U163",
    "text": "模拟分组比例为3∶4，总共安排215个样本，组别编号为STAT-1338。",
    "category": "统计数据",
    "phenomena": [
      "比例",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U164",
    "text": "预约训练记录为2027年2月11日 09:15，若迟到超过3分钟，则在系统中标记待确认。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "条件判断",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U165",
    "text": "训练图纸标注连接线长度3.07 m，线缆编号为CAB-1338，接口数量为3个。",
    "category": "工程参数",
    "phenomena": [
      "小数",
      "单位m",
      "编号",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U166",
    "text": "虚构运输订单需将215件货物送往乙仓，已装车15件，剩余200件。",
    "category": "交通与出行",
    "phenomena": [
      "数量",
      "减法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U167",
    "text": "虚构用水台账记录本月215 m³、上月15 m³，两个月合计230 m³。",
    "category": "日常与事务",
    "phenomena": [
      "单位m³",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U168",
    "text": "药房训练数据中，样品乙的库存由215盒调整为230盒，本次补入15盒。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "变化关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U169",
    "text": "训练表第3行列出收缩压114 mmHg、舒张压71 mmHg，并标注为模拟数据。",
    "category": "生理指标",
    "phenomena": [
      "单位mmHg",
      "多个数值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U170",
    "text": "温控测试从09:15开始，目标范围为9～24℃，计划收集215组读数。",
    "category": "温度与范围",
    "phenomena": [
      "时间",
      "区间",
      "单位℃",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U171",
    "text": "样品乙的保质期标示为7个月，生产日期为2027年2月11日，储存温度标示为9～24℃。",
    "category": "营养与成分",
    "phenomena": [
      "日期",
      "月数",
      "温度",
      "区间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U172",
    "text": "虚构评估记录显示平均耗时3.07秒，重复运行15次，误差范围为±3秒。",
    "category": "统计数据",
    "phenomena": [
      "小数",
      "时间",
      "次数",
      "±符号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U173",
    "text": "第3批资料须在2027年2月11日之前归档，每份资料附15张表格，截止时刻为09:15。",
    "category": "日期与时间",
    "phenomena": [
      "截止时间",
      "日期",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U174",
    "text": "模拟供电测试要求电压保持在120±3 V，累计运行35分钟并生成15条日志。",
    "category": "工程参数",
    "phenomena": [
      "单位V",
      "±符号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U175",
    "text": "停车场训练记录：车辆停放35分钟，车位编号P-1338，驶离时间为09:15。",
    "category": "交通与出行",
    "phenomena": [
      "持续时长",
      "编号",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U176",
    "text": "资料柜乙共有15层，每层放置3个文件盒，总容量为45盒。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "乘法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U177",
    "text": "模拟处方记录：样品丙每片标示250 mg，每盒18片，包装批号为RX-1475。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位mg",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U178",
    "text": "虚构体检记录1475：身高166 cm，体重58.9 kg，测量时间为10:20。",
    "category": "生理指标",
    "phenomena": [
      "单位kg/cm",
      "小数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U179",
    "text": "仓库丙的温度应记录在10℃至26℃的区间内，传感器每隔45分钟保存一次读数。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "区间",
      "间隔",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U180",
    "text": "虚构食品标签：每100 g含蛋白质3.79 g、脂肪4 g，一袋净含量为250 g。",
    "category": "营养与成分",
    "phenomena": [
      "小数",
      "单位g",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U181",
    "text": "模拟实验中，A组共250条记录，B组共18条记录，两组合计268条。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U182",
    "text": "活动丙计划在2027年3月12日的10:20开始，预计持续45分钟，请按先后顺序复述。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "持续时长"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U183",
    "text": "虚构设备丙输入电压为130 V，额定功率为500 W，工作频率为50 Hz。",
    "category": "工程参数",
    "phenomena": [
      "单位V/W/Hz",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U184",
    "text": "虚构车次TR-1475计划于2027年3月12日的10:20从丙站发车，检票提前4分钟结束。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "日期",
      "时间",
      "提前量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U185",
    "text": "模拟采购清单列出250本笔记本和18支笔，合计268件，订单编号ORD-1475。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U186",
    "text": "药品标签听读示例：溶液丙每瓶250 ml，每箱18瓶，生产日期记为2027年3月12日。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "日期"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U187",
    "text": "模拟运动日志：第4组受试者的步数为4470步，行走距离3.79 km，用时45分钟。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "小数",
      "单位km",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U188",
    "text": "气象模拟数据：清晨最低温为-4℃，午后最高温为26℃，温差为30℃。",
    "category": "温度与范围",
    "phenomena": [
      "负数",
      "温度",
      "差值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U189",
    "text": "样品丙每100 ml标示能量250 kcal，一瓶300 ml，听测时需区分这两个单位。",
    "category": "营养与成分",
    "phenomena": [
      "单位ml",
      "单位kcal",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U190",
    "text": "虚构评测表显示，系统丙的准确率为74%，另一指标记为3.79分。",
    "category": "统计数据",
    "phenomena": [
      "百分数",
      "小数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U191",
    "text": "编号CAL-1475的会议预留45分钟，提醒将在开始前4分钟发出。",
    "category": "日期与时间",
    "phenomena": [
      "时间",
      "提前量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U192",
    "text": "测试模块ENG-1475的长度为250 mm，宽度为18 mm，尺寸误差不超过±4 mm。",
    "category": "工程参数",
    "phenomena": [
      "单位mm",
      "±符号",
      "阈值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U193",
    "text": "模拟导航提示：沿主路行驶3.79 km后右转，再前行250 m到达丙广场。",
    "category": "交通与出行",
    "phenomena": [
      "小数",
      "单位km/m",
      "顺序"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U194",
    "text": "图书馆丙分馆计划在2027年3月12日归还18本图书，读者预约号为LIB-1475。",
    "category": "日常与事务",
    "phenomena": [
      "日期",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U195",
    "text": "模拟药房盘点显示，第4号柜共有250盒片剂和18瓶糖浆，合计268件。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U196",
    "text": "听测示例中，记录员将晨间心率记为每分钟72次，复测时间记为10:20。",
    "category": "生理指标",
    "phenomena": [
      "次数",
      "时间",
      "单位次/分钟"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U197",
    "text": "实验箱1475设定为26±4℃，连续运行45分钟后输出检查报告。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "±符号",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U198",
    "text": "模拟配方需要250 g谷物和18 g坚果，混合后的总质量为268 g。",
    "category": "营养与成分",
    "phenomena": [
      "单位g",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U199",
    "text": "问卷练习共发放250份，回收18份，统计截止时间为2027年3月12日的10:20。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "日期",
      "截止时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U200",
    "text": "档案从2027年3月保存至2028年3月，保管周期为12个月。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "区间",
      "月数"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U201",
    "text": "模拟水泵以每分钟250转运行45分钟，随后降低到每分钟18转。",
    "category": "工程参数",
    "phenomena": [
      "速度",
      "时间",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U202",
    "text": "训练航班FL-1475安排在4号登机口，托运行李限重18 kg，登机时间为10:20。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "单位kg",
      "阈值",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U203",
    "text": "训练快递单写明包裹质量3.79 kg，箱体长250 cm、宽18 cm。",
    "category": "日常与事务",
    "phenomena": [
      "小数",
      "单位kg/cm",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U204",
    "text": "虚构冷链记录：箱号MED-1475的温度从10℃升至26℃，记录时间为10:20。",
    "category": "医疗用药",
    "phenomena": [
      "温度",
      "区间",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U205",
    "text": "虚构健康问卷共250份，其中18份需要补录身高，完成比例为74%。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "百分数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U206",
    "text": "冷藏运输训练记录中，箱内温度低于10℃时亮蓝灯，高于26℃时亮红灯。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "阈值",
      "条件判断"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U207",
    "text": "虚构营养表第4栏写有钠250 mg、钙18 mg，数据批次为NUT-1475。",
    "category": "营养与成分",
    "phenomena": [
      "单位mg",
      "编号",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U208",
    "text": "训练图表将第4季度的样本量标为250条，并将下一季度目标设为268条。",
    "category": "统计数据",
    "phenomena": [
      "季度",
      "统计数量",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U209",
    "text": "模拟排班表规定，丙岗每隔45分钟巡查一次，当日计划巡查18次。",
    "category": "日期与时间",
    "phenomena": [
      "间隔",
      "次数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U210",
    "text": "传感器丙每秒采集250次数据，单个数据包大小为18 KB，缓存上限为268 KB。",
    "category": "工程参数",
    "phenomena": [
      "频率",
      "单位KB",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U211",
    "text": "公交模拟时刻表显示，线路1475的发车间隔为4分钟，全程共有18个站点。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "间隔",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U212",
    "text": "模拟课程安排在4号教室，开始时间为10:20，本次共有18名学员参加。",
    "category": "日常与事务",
    "phenomena": [
      "编号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U213",
    "text": "模拟说明书中的规格为每支18 ml、每盒4支；请在听测表中分别填写这两个数值。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U214",
    "text": "模拟检测仪显示测量值3.79 mmol/L，样本编号BIO-1475，本次数据仅为读数练习。",
    "category": "生理指标",
    "phenomena": [
      "小数",
      "单位mmol/L",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U215",
    "text": "模拟湿度表显示74%，允许误差为±4个百分点，采样地点是丙站。",
    "category": "温度与范围",
    "phenomena": [
      "百分数",
      "±符号",
      "误差"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U216",
    "text": "食品包装训练文本中，果汁含量为74%，每盒300 ml，每箱18盒。",
    "category": "营养与成分",
    "phenomena": [
      "百分数",
      "单位ml",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U217",
    "text": "模拟分组比例为4∶5，总共安排250个样本，组别编号为STAT-1475。",
    "category": "统计数据",
    "phenomena": [
      "比例",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U218",
    "text": "预约训练记录为2027年3月12日 10:20，若迟到超过4分钟，则在系统中标记待确认。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "条件判断",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U219",
    "text": "训练图纸标注连接线长度3.79 m，线缆编号为CAB-1475，接口数量为4个。",
    "category": "工程参数",
    "phenomena": [
      "小数",
      "单位m",
      "编号",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U220",
    "text": "虚构运输订单需将250件货物送往丙仓，已装车18件，剩余232件。",
    "category": "交通与出行",
    "phenomena": [
      "数量",
      "减法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U221",
    "text": "虚构用水台账记录本月250 m³、上月18 m³，两个月合计268 m³。",
    "category": "日常与事务",
    "phenomena": [
      "单位m³",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U222",
    "text": "药房训练数据中，样品丙的库存由250盒调整为268盒，本次补入18盒。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "变化关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U223",
    "text": "训练表第4行列出收缩压116 mmHg、舒张压72 mmHg，并标注为模拟数据。",
    "category": "生理指标",
    "phenomena": [
      "单位mmHg",
      "多个数值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U224",
    "text": "温控测试从10:20开始，目标范围为10～26℃，计划收集250组读数。",
    "category": "温度与范围",
    "phenomena": [
      "时间",
      "区间",
      "单位℃",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U225",
    "text": "样品丙的保质期标示为8个月，生产日期为2027年3月12日，储存温度标示为10～26℃。",
    "category": "营养与成分",
    "phenomena": [
      "日期",
      "月数",
      "温度",
      "区间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U226",
    "text": "虚构评估记录显示平均耗时3.79秒，重复运行18次，误差范围为±4秒。",
    "category": "统计数据",
    "phenomena": [
      "小数",
      "时间",
      "次数",
      "±符号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U227",
    "text": "第4批资料须在2027年3月12日之前归档，每份资料附18张表格，截止时刻为10:20。",
    "category": "日期与时间",
    "phenomena": [
      "截止时间",
      "日期",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U228",
    "text": "模拟供电测试要求电压保持在130±4 V，累计运行45分钟并生成18条日志。",
    "category": "工程参数",
    "phenomena": [
      "单位V",
      "±符号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U229",
    "text": "停车场训练记录：车辆停放45分钟，车位编号P-1475，驶离时间为10:20。",
    "category": "交通与出行",
    "phenomena": [
      "持续时长",
      "编号",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U230",
    "text": "资料柜丙共有18层，每层放置4个文件盒，总容量为72盒。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "乘法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U231",
    "text": "模拟处方记录：样品丁每片标示285 mg，每盒21片，包装批号为RX-1612。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位mg",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U232",
    "text": "虚构体检记录1612：身高168 cm，体重62.1 kg，测量时间为11:25。",
    "category": "生理指标",
    "phenomena": [
      "单位kg/cm",
      "小数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U233",
    "text": "仓库丁的温度应记录在11℃至28℃的区间内，传感器每隔55分钟保存一次读数。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "区间",
      "间隔",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U234",
    "text": "虚构食品标签：每100 g含蛋白质4.51 g、脂肪5 g，一袋净含量为285 g。",
    "category": "营养与成分",
    "phenomena": [
      "小数",
      "单位g",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U235",
    "text": "模拟实验中，A组共285条记录，B组共21条记录，两组合计306条。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U236",
    "text": "活动丁计划在2027年4月13日的11:25开始，预计持续55分钟，请按先后顺序复述。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "持续时长"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U237",
    "text": "虚构设备丁输入电压为140 V，额定功率为600 W，工作频率为50 Hz。",
    "category": "工程参数",
    "phenomena": [
      "单位V/W/Hz",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U238",
    "text": "虚构车次TR-1612计划于2027年4月13日的11:25从丁站发车，检票提前5分钟结束。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "日期",
      "时间",
      "提前量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U239",
    "text": "模拟采购清单列出285本笔记本和21支笔，合计306件，订单编号ORD-1612。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U240",
    "text": "药品标签听读示例：溶液丁每瓶285 ml，每箱21瓶，生产日期记为2027年4月13日。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "日期"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U241",
    "text": "模拟运动日志：第5组受试者的步数为5080步，行走距离4.51 km，用时55分钟。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "小数",
      "单位km",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U242",
    "text": "气象模拟数据：清晨最低温为-5℃，午后最高温为28℃，温差为33℃。",
    "category": "温度与范围",
    "phenomena": [
      "负数",
      "温度",
      "差值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U243",
    "text": "样品丁每100 ml标示能量285 kcal，一瓶350 ml，听测时需区分这两个单位。",
    "category": "营养与成分",
    "phenomena": [
      "单位ml",
      "单位kcal",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U244",
    "text": "虚构评测表显示，系统丁的准确率为77%，另一指标记为4.51分。",
    "category": "统计数据",
    "phenomena": [
      "百分数",
      "小数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U245",
    "text": "编号CAL-1612的会议预留55分钟，提醒将在开始前5分钟发出。",
    "category": "日期与时间",
    "phenomena": [
      "时间",
      "提前量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U246",
    "text": "测试模块ENG-1612的长度为285 mm，宽度为21 mm，尺寸误差不超过±5 mm。",
    "category": "工程参数",
    "phenomena": [
      "单位mm",
      "±符号",
      "阈值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U247",
    "text": "模拟导航提示：沿主路行驶4.51 km后右转，再前行285 m到达丁广场。",
    "category": "交通与出行",
    "phenomena": [
      "小数",
      "单位km/m",
      "顺序"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U248",
    "text": "图书馆丁分馆计划在2027年4月13日归还21本图书，读者预约号为LIB-1612。",
    "category": "日常与事务",
    "phenomena": [
      "日期",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U249",
    "text": "模拟药房盘点显示，第5号柜共有285盒片剂和21瓶糖浆，合计306件。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U250",
    "text": "听测示例中，记录员将晨间心率记为每分钟75次，复测时间记为11:25。",
    "category": "生理指标",
    "phenomena": [
      "次数",
      "时间",
      "单位次/分钟"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U251",
    "text": "实验箱1612设定为28±5℃，连续运行55分钟后输出检查报告。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "±符号",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U252",
    "text": "模拟配方需要285 g谷物和21 g坚果，混合后的总质量为306 g。",
    "category": "营养与成分",
    "phenomena": [
      "单位g",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U253",
    "text": "问卷练习共发放285份，回收21份，统计截止时间为2027年4月13日的11:25。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "日期",
      "截止时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U254",
    "text": "档案从2027年4月保存至2028年4月，保管周期为12个月。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "区间",
      "月数"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U255",
    "text": "模拟水泵以每分钟285转运行55分钟，随后降低到每分钟21转。",
    "category": "工程参数",
    "phenomena": [
      "速度",
      "时间",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U256",
    "text": "训练航班FL-1612安排在5号登机口，托运行李限重21 kg，登机时间为11:25。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "单位kg",
      "阈值",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U257",
    "text": "训练快递单写明包裹质量4.51 kg，箱体长285 cm、宽21 cm。",
    "category": "日常与事务",
    "phenomena": [
      "小数",
      "单位kg/cm",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U258",
    "text": "虚构冷链记录：箱号MED-1612的温度从11℃升至28℃，记录时间为11:25。",
    "category": "医疗用药",
    "phenomena": [
      "温度",
      "区间",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U259",
    "text": "虚构健康问卷共285份，其中21份需要补录身高，完成比例为77%。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "百分数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U260",
    "text": "冷藏运输训练记录中，箱内温度低于11℃时亮蓝灯，高于28℃时亮红灯。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "阈值",
      "条件判断"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U261",
    "text": "虚构营养表第5栏写有钠285 mg、钙21 mg，数据批次为NUT-1612。",
    "category": "营养与成分",
    "phenomena": [
      "单位mg",
      "编号",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U262",
    "text": "训练图表将第5季度的样本量标为285条，并将下一季度目标设为306条。",
    "category": "统计数据",
    "phenomena": [
      "季度",
      "统计数量",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U263",
    "text": "模拟排班表规定，丁岗每隔55分钟巡查一次，当日计划巡查21次。",
    "category": "日期与时间",
    "phenomena": [
      "间隔",
      "次数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U264",
    "text": "传感器丁每秒采集285次数据，单个数据包大小为21 KB，缓存上限为306 KB。",
    "category": "工程参数",
    "phenomena": [
      "频率",
      "单位KB",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U265",
    "text": "公交模拟时刻表显示，线路1612的发车间隔为5分钟，全程共有21个站点。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "间隔",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U266",
    "text": "模拟课程安排在5号教室，开始时间为11:25，本次共有21名学员参加。",
    "category": "日常与事务",
    "phenomena": [
      "编号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U267",
    "text": "模拟说明书中的规格为每支21 ml、每盒5支；请在听测表中分别填写这两个数值。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U268",
    "text": "模拟检测仪显示测量值4.51 mmol/L，样本编号BIO-1612，本次数据仅为读数练习。",
    "category": "生理指标",
    "phenomena": [
      "小数",
      "单位mmol/L",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U269",
    "text": "模拟湿度表显示77%，允许误差为±5个百分点，采样地点是丁站。",
    "category": "温度与范围",
    "phenomena": [
      "百分数",
      "±符号",
      "误差"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U270",
    "text": "食品包装训练文本中，果汁含量为77%，每盒350 ml，每箱21盒。",
    "category": "营养与成分",
    "phenomena": [
      "百分数",
      "单位ml",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U271",
    "text": "模拟分组比例为5∶6，总共安排285个样本，组别编号为STAT-1612。",
    "category": "统计数据",
    "phenomena": [
      "比例",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U272",
    "text": "预约训练记录为2027年4月13日 11:25，若迟到超过5分钟，则在系统中标记待确认。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "条件判断",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U273",
    "text": "训练图纸标注连接线长度4.51 m，线缆编号为CAB-1612，接口数量为5个。",
    "category": "工程参数",
    "phenomena": [
      "小数",
      "单位m",
      "编号",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U274",
    "text": "虚构运输订单需将285件货物送往丁仓，已装车21件，剩余264件。",
    "category": "交通与出行",
    "phenomena": [
      "数量",
      "减法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U275",
    "text": "虚构用水台账记录本月285 m³、上月21 m³，两个月合计306 m³。",
    "category": "日常与事务",
    "phenomena": [
      "单位m³",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U276",
    "text": "药房训练数据中，样品丁的库存由285盒调整为306盒，本次补入21盒。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "变化关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U277",
    "text": "训练表第5行列出收缩压118 mmHg、舒张压73 mmHg，并标注为模拟数据。",
    "category": "生理指标",
    "phenomena": [
      "单位mmHg",
      "多个数值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U278",
    "text": "温控测试从11:25开始，目标范围为11～28℃，计划收集285组读数。",
    "category": "温度与范围",
    "phenomena": [
      "时间",
      "区间",
      "单位℃",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U279",
    "text": "样品丁的保质期标示为9个月，生产日期为2027年4月13日，储存温度标示为11～28℃。",
    "category": "营养与成分",
    "phenomena": [
      "日期",
      "月数",
      "温度",
      "区间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U280",
    "text": "虚构评估记录显示平均耗时4.51秒，重复运行21次，误差范围为±5秒。",
    "category": "统计数据",
    "phenomena": [
      "小数",
      "时间",
      "次数",
      "±符号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U281",
    "text": "第5批资料须在2027年4月13日之前归档，每份资料附21张表格，截止时刻为11:25。",
    "category": "日期与时间",
    "phenomena": [
      "截止时间",
      "日期",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U282",
    "text": "模拟供电测试要求电压保持在140±5 V，累计运行55分钟并生成21条日志。",
    "category": "工程参数",
    "phenomena": [
      "单位V",
      "±符号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U283",
    "text": "停车场训练记录：车辆停放55分钟，车位编号P-1612，驶离时间为11:25。",
    "category": "交通与出行",
    "phenomena": [
      "持续时长",
      "编号",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U284",
    "text": "资料柜丁共有21层，每层放置5个文件盒，总容量为105盒。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "乘法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U285",
    "text": "模拟处方记录：样品戊每片标示320 mg，每盒24片，包装批号为RX-1749。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位mg",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U286",
    "text": "虚构体检记录1749：身高170 cm，体重65.3 kg，测量时间为12:30。",
    "category": "生理指标",
    "phenomena": [
      "单位kg/cm",
      "小数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U287",
    "text": "仓库戊的温度应记录在12℃至30℃的区间内，传感器每隔65分钟保存一次读数。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "区间",
      "间隔",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U288",
    "text": "虚构食品标签：每100 g含蛋白质5.23 g、脂肪6 g，一袋净含量为320 g。",
    "category": "营养与成分",
    "phenomena": [
      "小数",
      "单位g",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U289",
    "text": "模拟实验中，A组共320条记录，B组共24条记录，两组合计344条。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U290",
    "text": "活动戊计划在2027年5月14日的12:30开始，预计持续65分钟，请按先后顺序复述。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "持续时长"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U291",
    "text": "虚构设备戊输入电压为150 V，额定功率为700 W，工作频率为50 Hz。",
    "category": "工程参数",
    "phenomena": [
      "单位V/W/Hz",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U292",
    "text": "虚构车次TR-1749计划于2027年5月14日的12:30从戊站发车，检票提前6分钟结束。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "日期",
      "时间",
      "提前量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U293",
    "text": "模拟采购清单列出320本笔记本和24支笔，合计344件，订单编号ORD-1749。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U294",
    "text": "药品标签听读示例：溶液戊每瓶320 ml，每箱24瓶，生产日期记为2027年5月14日。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "日期"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U295",
    "text": "模拟运动日志：第6组受试者的步数为5690步，行走距离5.23 km，用时65分钟。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "小数",
      "单位km",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U296",
    "text": "气象模拟数据：清晨最低温为-6℃，午后最高温为30℃，温差为36℃。",
    "category": "温度与范围",
    "phenomena": [
      "负数",
      "温度",
      "差值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U297",
    "text": "样品戊每100 ml标示能量320 kcal，一瓶400 ml，听测时需区分这两个单位。",
    "category": "营养与成分",
    "phenomena": [
      "单位ml",
      "单位kcal",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U298",
    "text": "虚构评测表显示，系统戊的准确率为80%，另一指标记为5.23分。",
    "category": "统计数据",
    "phenomena": [
      "百分数",
      "小数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U299",
    "text": "编号CAL-1749的会议预留65分钟，提醒将在开始前6分钟发出。",
    "category": "日期与时间",
    "phenomena": [
      "时间",
      "提前量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U300",
    "text": "测试模块ENG-1749的长度为320 mm，宽度为24 mm，尺寸误差不超过±6 mm。",
    "category": "工程参数",
    "phenomena": [
      "单位mm",
      "±符号",
      "阈值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U301",
    "text": "模拟导航提示：沿主路行驶5.23 km后右转，再前行320 m到达戊广场。",
    "category": "交通与出行",
    "phenomena": [
      "小数",
      "单位km/m",
      "顺序"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U302",
    "text": "图书馆戊分馆计划在2027年5月14日归还24本图书，读者预约号为LIB-1749。",
    "category": "日常与事务",
    "phenomena": [
      "日期",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U303",
    "text": "模拟药房盘点显示，第6号柜共有320盒片剂和24瓶糖浆，合计344件。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U304",
    "text": "听测示例中，记录员将晨间心率记为每分钟78次，复测时间记为12:30。",
    "category": "生理指标",
    "phenomena": [
      "次数",
      "时间",
      "单位次/分钟"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U305",
    "text": "实验箱1749设定为30±6℃，连续运行65分钟后输出检查报告。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "±符号",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U306",
    "text": "模拟配方需要320 g谷物和24 g坚果，混合后的总质量为344 g。",
    "category": "营养与成分",
    "phenomena": [
      "单位g",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U307",
    "text": "问卷练习共发放320份，回收24份，统计截止时间为2027年5月14日的12:30。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "日期",
      "截止时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U308",
    "text": "档案从2027年5月保存至2028年5月，保管周期为12个月。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "区间",
      "月数"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U309",
    "text": "模拟水泵以每分钟320转运行65分钟，随后降低到每分钟24转。",
    "category": "工程参数",
    "phenomena": [
      "速度",
      "时间",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U310",
    "text": "训练航班FL-1749安排在6号登机口，托运行李限重24 kg，登机时间为12:30。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "单位kg",
      "阈值",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U311",
    "text": "训练快递单写明包裹质量5.23 kg，箱体长320 cm、宽24 cm。",
    "category": "日常与事务",
    "phenomena": [
      "小数",
      "单位kg/cm",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U312",
    "text": "虚构冷链记录：箱号MED-1749的温度从12℃升至30℃，记录时间为12:30。",
    "category": "医疗用药",
    "phenomena": [
      "温度",
      "区间",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U313",
    "text": "虚构健康问卷共320份，其中24份需要补录身高，完成比例为80%。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "百分数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U314",
    "text": "冷藏运输训练记录中，箱内温度低于12℃时亮蓝灯，高于30℃时亮红灯。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "阈值",
      "条件判断"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U315",
    "text": "虚构营养表第6栏写有钠320 mg、钙24 mg，数据批次为NUT-1749。",
    "category": "营养与成分",
    "phenomena": [
      "单位mg",
      "编号",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U316",
    "text": "训练图表将第6季度的样本量标为320条，并将下一季度目标设为344条。",
    "category": "统计数据",
    "phenomena": [
      "季度",
      "统计数量",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U317",
    "text": "模拟排班表规定，戊岗每隔65分钟巡查一次，当日计划巡查24次。",
    "category": "日期与时间",
    "phenomena": [
      "间隔",
      "次数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U318",
    "text": "传感器戊每秒采集320次数据，单个数据包大小为24 KB，缓存上限为344 KB。",
    "category": "工程参数",
    "phenomena": [
      "频率",
      "单位KB",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U319",
    "text": "公交模拟时刻表显示，线路1749的发车间隔为6分钟，全程共有24个站点。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "间隔",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U320",
    "text": "模拟课程安排在6号教室，开始时间为12:30，本次共有24名学员参加。",
    "category": "日常与事务",
    "phenomena": [
      "编号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U321",
    "text": "模拟说明书中的规格为每支24 ml、每盒6支；请在听测表中分别填写这两个数值。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U322",
    "text": "模拟检测仪显示测量值5.23 mmol/L，样本编号BIO-1749，本次数据仅为读数练习。",
    "category": "生理指标",
    "phenomena": [
      "小数",
      "单位mmol/L",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U323",
    "text": "模拟湿度表显示80%，允许误差为±6个百分点，采样地点是戊站。",
    "category": "温度与范围",
    "phenomena": [
      "百分数",
      "±符号",
      "误差"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U324",
    "text": "食品包装训练文本中，果汁含量为80%，每盒400 ml，每箱24盒。",
    "category": "营养与成分",
    "phenomena": [
      "百分数",
      "单位ml",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U325",
    "text": "模拟分组比例为6∶7，总共安排320个样本，组别编号为STAT-1749。",
    "category": "统计数据",
    "phenomena": [
      "比例",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U326",
    "text": "预约训练记录为2027年5月14日 12:30，若迟到超过6分钟，则在系统中标记待确认。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "条件判断",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U327",
    "text": "训练图纸标注连接线长度5.23 m，线缆编号为CAB-1749，接口数量为6个。",
    "category": "工程参数",
    "phenomena": [
      "小数",
      "单位m",
      "编号",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U328",
    "text": "虚构运输订单需将320件货物送往戊仓，已装车24件，剩余296件。",
    "category": "交通与出行",
    "phenomena": [
      "数量",
      "减法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U329",
    "text": "虚构用水台账记录本月320 m³、上月24 m³，两个月合计344 m³。",
    "category": "日常与事务",
    "phenomena": [
      "单位m³",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U330",
    "text": "药房训练数据中，样品戊的库存由320盒调整为344盒，本次补入24盒。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "变化关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U331",
    "text": "训练表第6行列出收缩压120 mmHg、舒张压74 mmHg，并标注为模拟数据。",
    "category": "生理指标",
    "phenomena": [
      "单位mmHg",
      "多个数值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U332",
    "text": "温控测试从12:30开始，目标范围为12～30℃，计划收集320组读数。",
    "category": "温度与范围",
    "phenomena": [
      "时间",
      "区间",
      "单位℃",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U333",
    "text": "样品戊的保质期标示为10个月，生产日期为2027年5月14日，储存温度标示为12～30℃。",
    "category": "营养与成分",
    "phenomena": [
      "日期",
      "月数",
      "温度",
      "区间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U334",
    "text": "虚构评估记录显示平均耗时5.23秒，重复运行24次，误差范围为±6秒。",
    "category": "统计数据",
    "phenomena": [
      "小数",
      "时间",
      "次数",
      "±符号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U335",
    "text": "第6批资料须在2027年5月14日之前归档，每份资料附24张表格，截止时刻为12:30。",
    "category": "日期与时间",
    "phenomena": [
      "截止时间",
      "日期",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U336",
    "text": "模拟供电测试要求电压保持在150±6 V，累计运行65分钟并生成24条日志。",
    "category": "工程参数",
    "phenomena": [
      "单位V",
      "±符号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U337",
    "text": "停车场训练记录：车辆停放65分钟，车位编号P-1749，驶离时间为12:30。",
    "category": "交通与出行",
    "phenomena": [
      "持续时长",
      "编号",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U338",
    "text": "资料柜戊共有24层，每层放置6个文件盒，总容量为144盒。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "乘法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U339",
    "text": "模拟处方记录：样品己每片标示355 mg，每盒27片，包装批号为RX-1886。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位mg",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U340",
    "text": "虚构体检记录1886：身高172 cm，体重68.5 kg，测量时间为13:35。",
    "category": "生理指标",
    "phenomena": [
      "单位kg/cm",
      "小数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U341",
    "text": "仓库己的温度应记录在13℃至32℃的区间内，传感器每隔75分钟保存一次读数。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "区间",
      "间隔",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U342",
    "text": "虚构食品标签：每100 g含蛋白质5.95 g、脂肪7 g，一袋净含量为355 g。",
    "category": "营养与成分",
    "phenomena": [
      "小数",
      "单位g",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U343",
    "text": "模拟实验中，A组共355条记录，B组共27条记录，两组合计382条。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U344",
    "text": "活动己计划在2027年6月15日的13:35开始，预计持续75分钟，请按先后顺序复述。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "持续时长"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U345",
    "text": "虚构设备己输入电压为160 V，额定功率为800 W，工作频率为50 Hz。",
    "category": "工程参数",
    "phenomena": [
      "单位V/W/Hz",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U346",
    "text": "虚构车次TR-1886计划于2027年6月15日的13:35从己站发车，检票提前7分钟结束。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "日期",
      "时间",
      "提前量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U347",
    "text": "模拟采购清单列出355本笔记本和27支笔，合计382件，订单编号ORD-1886。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U348",
    "text": "药品标签听读示例：溶液己每瓶355 ml，每箱27瓶，生产日期记为2027年6月15日。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "日期"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U349",
    "text": "模拟运动日志：第7组受试者的步数为6300步，行走距离5.95 km，用时75分钟。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "小数",
      "单位km",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U350",
    "text": "气象模拟数据：清晨最低温为-7℃，午后最高温为32℃，温差为39℃。",
    "category": "温度与范围",
    "phenomena": [
      "负数",
      "温度",
      "差值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U351",
    "text": "样品己每100 ml标示能量355 kcal，一瓶450 ml，听测时需区分这两个单位。",
    "category": "营养与成分",
    "phenomena": [
      "单位ml",
      "单位kcal",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U352",
    "text": "虚构评测表显示，系统己的准确率为83%，另一指标记为5.95分。",
    "category": "统计数据",
    "phenomena": [
      "百分数",
      "小数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U353",
    "text": "编号CAL-1886的会议预留75分钟，提醒将在开始前7分钟发出。",
    "category": "日期与时间",
    "phenomena": [
      "时间",
      "提前量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U354",
    "text": "测试模块ENG-1886的长度为355 mm，宽度为27 mm，尺寸误差不超过±7 mm。",
    "category": "工程参数",
    "phenomena": [
      "单位mm",
      "±符号",
      "阈值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U355",
    "text": "模拟导航提示：沿主路行驶5.95 km后右转，再前行355 m到达己广场。",
    "category": "交通与出行",
    "phenomena": [
      "小数",
      "单位km/m",
      "顺序"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U356",
    "text": "图书馆己分馆计划在2027年6月15日归还27本图书，读者预约号为LIB-1886。",
    "category": "日常与事务",
    "phenomena": [
      "日期",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U357",
    "text": "模拟药房盘点显示，第7号柜共有355盒片剂和27瓶糖浆，合计382件。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U358",
    "text": "听测示例中，记录员将晨间心率记为每分钟81次，复测时间记为13:35。",
    "category": "生理指标",
    "phenomena": [
      "次数",
      "时间",
      "单位次/分钟"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U359",
    "text": "实验箱1886设定为32±7℃，连续运行75分钟后输出检查报告。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "±符号",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U360",
    "text": "模拟配方需要355 g谷物和27 g坚果，混合后的总质量为382 g。",
    "category": "营养与成分",
    "phenomena": [
      "单位g",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U361",
    "text": "问卷练习共发放355份，回收27份，统计截止时间为2027年6月15日的13:35。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "日期",
      "截止时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U362",
    "text": "档案从2027年6月保存至2028年6月，保管周期为12个月。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "区间",
      "月数"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U363",
    "text": "模拟水泵以每分钟355转运行75分钟，随后降低到每分钟27转。",
    "category": "工程参数",
    "phenomena": [
      "速度",
      "时间",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U364",
    "text": "训练航班FL-1886安排在7号登机口，托运行李限重27 kg，登机时间为13:35。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "单位kg",
      "阈值",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U365",
    "text": "训练快递单写明包裹质量5.95 kg，箱体长355 cm、宽27 cm。",
    "category": "日常与事务",
    "phenomena": [
      "小数",
      "单位kg/cm",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U366",
    "text": "虚构冷链记录：箱号MED-1886的温度从13℃升至32℃，记录时间为13:35。",
    "category": "医疗用药",
    "phenomena": [
      "温度",
      "区间",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U367",
    "text": "虚构健康问卷共355份，其中27份需要补录身高，完成比例为83%。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "百分数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U368",
    "text": "冷藏运输训练记录中，箱内温度低于13℃时亮蓝灯，高于32℃时亮红灯。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "阈值",
      "条件判断"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U369",
    "text": "虚构营养表第7栏写有钠355 mg、钙27 mg，数据批次为NUT-1886。",
    "category": "营养与成分",
    "phenomena": [
      "单位mg",
      "编号",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U370",
    "text": "训练图表将第7季度的样本量标为355条，并将下一季度目标设为382条。",
    "category": "统计数据",
    "phenomena": [
      "季度",
      "统计数量",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U371",
    "text": "模拟排班表规定，己岗每隔75分钟巡查一次，当日计划巡查27次。",
    "category": "日期与时间",
    "phenomena": [
      "间隔",
      "次数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U372",
    "text": "传感器己每秒采集355次数据，单个数据包大小为27 KB，缓存上限为382 KB。",
    "category": "工程参数",
    "phenomena": [
      "频率",
      "单位KB",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U373",
    "text": "公交模拟时刻表显示，线路1886的发车间隔为7分钟，全程共有27个站点。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "间隔",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U374",
    "text": "模拟课程安排在7号教室，开始时间为13:35，本次共有27名学员参加。",
    "category": "日常与事务",
    "phenomena": [
      "编号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U375",
    "text": "模拟说明书中的规格为每支27 ml、每盒7支；请在听测表中分别填写这两个数值。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U376",
    "text": "模拟检测仪显示测量值5.95 mmol/L，样本编号BIO-1886，本次数据仅为读数练习。",
    "category": "生理指标",
    "phenomena": [
      "小数",
      "单位mmol/L",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U377",
    "text": "模拟湿度表显示83%，允许误差为±7个百分点，采样地点是己站。",
    "category": "温度与范围",
    "phenomena": [
      "百分数",
      "±符号",
      "误差"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U378",
    "text": "食品包装训练文本中，果汁含量为83%，每盒450 ml，每箱27盒。",
    "category": "营养与成分",
    "phenomena": [
      "百分数",
      "单位ml",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U379",
    "text": "模拟分组比例为7∶8，总共安排355个样本，组别编号为STAT-1886。",
    "category": "统计数据",
    "phenomena": [
      "比例",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U380",
    "text": "预约训练记录为2027年6月15日 13:35，若迟到超过7分钟，则在系统中标记待确认。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "条件判断",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U381",
    "text": "训练图纸标注连接线长度5.95 m，线缆编号为CAB-1886，接口数量为7个。",
    "category": "工程参数",
    "phenomena": [
      "小数",
      "单位m",
      "编号",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U382",
    "text": "虚构运输订单需将355件货物送往己仓，已装车27件，剩余328件。",
    "category": "交通与出行",
    "phenomena": [
      "数量",
      "减法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U383",
    "text": "虚构用水台账记录本月355 m³、上月27 m³，两个月合计382 m³。",
    "category": "日常与事务",
    "phenomena": [
      "单位m³",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U384",
    "text": "药房训练数据中，样品己的库存由355盒调整为382盒，本次补入27盒。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "变化关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U385",
    "text": "训练表第7行列出收缩压122 mmHg、舒张压75 mmHg，并标注为模拟数据。",
    "category": "生理指标",
    "phenomena": [
      "单位mmHg",
      "多个数值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U386",
    "text": "温控测试从13:35开始，目标范围为13～32℃，计划收集355组读数。",
    "category": "温度与范围",
    "phenomena": [
      "时间",
      "区间",
      "单位℃",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U387",
    "text": "样品己的保质期标示为11个月，生产日期为2027年6月15日，储存温度标示为13～32℃。",
    "category": "营养与成分",
    "phenomena": [
      "日期",
      "月数",
      "温度",
      "区间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U388",
    "text": "虚构评估记录显示平均耗时5.95秒，重复运行27次，误差范围为±7秒。",
    "category": "统计数据",
    "phenomena": [
      "小数",
      "时间",
      "次数",
      "±符号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U389",
    "text": "第7批资料须在2027年6月15日之前归档，每份资料附27张表格，截止时刻为13:35。",
    "category": "日期与时间",
    "phenomena": [
      "截止时间",
      "日期",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U390",
    "text": "模拟供电测试要求电压保持在160±7 V，累计运行75分钟并生成27条日志。",
    "category": "工程参数",
    "phenomena": [
      "单位V",
      "±符号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U391",
    "text": "停车场训练记录：车辆停放75分钟，车位编号P-1886，驶离时间为13:35。",
    "category": "交通与出行",
    "phenomena": [
      "持续时长",
      "编号",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U392",
    "text": "资料柜己共有27层，每层放置7个文件盒，总容量为189盒。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "乘法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U393",
    "text": "模拟处方记录：样品庚每片标示390 mg，每盒30片，包装批号为RX-2023。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位mg",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U394",
    "text": "虚构体检记录2023：身高174 cm，体重71.7 kg，测量时间为14:40。",
    "category": "生理指标",
    "phenomena": [
      "单位kg/cm",
      "小数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U395",
    "text": "仓库庚的温度应记录在14℃至34℃的区间内，传感器每隔85分钟保存一次读数。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "区间",
      "间隔",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U396",
    "text": "虚构食品标签：每100 g含蛋白质6.67 g、脂肪8 g，一袋净含量为390 g。",
    "category": "营养与成分",
    "phenomena": [
      "小数",
      "单位g",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U397",
    "text": "模拟实验中，A组共390条记录，B组共30条记录，两组合计420条。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U398",
    "text": "活动庚计划在2027年7月16日的14:40开始，预计持续85分钟，请按先后顺序复述。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "持续时长"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U399",
    "text": "虚构设备庚输入电压为170 V，额定功率为900 W，工作频率为50 Hz。",
    "category": "工程参数",
    "phenomena": [
      "单位V/W/Hz",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U400",
    "text": "虚构车次TR-2023计划于2027年7月16日的14:40从庚站发车，检票提前8分钟结束。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "日期",
      "时间",
      "提前量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U401",
    "text": "模拟采购清单列出390本笔记本和30支笔，合计420件，订单编号ORD-2023。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U402",
    "text": "药品标签听读示例：溶液庚每瓶390 ml，每箱30瓶，生产日期记为2027年7月16日。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "日期"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U403",
    "text": "模拟运动日志：第8组受试者的步数为6910步，行走距离6.67 km，用时85分钟。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "小数",
      "单位km",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U404",
    "text": "气象模拟数据：清晨最低温为-8℃，午后最高温为34℃，温差为42℃。",
    "category": "温度与范围",
    "phenomena": [
      "负数",
      "温度",
      "差值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U405",
    "text": "样品庚每100 ml标示能量390 kcal，一瓶500 ml，听测时需区分这两个单位。",
    "category": "营养与成分",
    "phenomena": [
      "单位ml",
      "单位kcal",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U406",
    "text": "虚构评测表显示，系统庚的准确率为86%，另一指标记为6.67分。",
    "category": "统计数据",
    "phenomena": [
      "百分数",
      "小数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U407",
    "text": "编号CAL-2023的会议预留85分钟，提醒将在开始前8分钟发出。",
    "category": "日期与时间",
    "phenomena": [
      "时间",
      "提前量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U408",
    "text": "测试模块ENG-2023的长度为390 mm，宽度为30 mm，尺寸误差不超过±8 mm。",
    "category": "工程参数",
    "phenomena": [
      "单位mm",
      "±符号",
      "阈值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U409",
    "text": "模拟导航提示：沿主路行驶6.67 km后右转，再前行390 m到达庚广场。",
    "category": "交通与出行",
    "phenomena": [
      "小数",
      "单位km/m",
      "顺序"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U410",
    "text": "图书馆庚分馆计划在2027年7月16日归还30本图书，读者预约号为LIB-2023。",
    "category": "日常与事务",
    "phenomena": [
      "日期",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U411",
    "text": "模拟药房盘点显示，第8号柜共有390盒片剂和30瓶糖浆，合计420件。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U412",
    "text": "听测示例中，记录员将晨间心率记为每分钟84次，复测时间记为14:40。",
    "category": "生理指标",
    "phenomena": [
      "次数",
      "时间",
      "单位次/分钟"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U413",
    "text": "实验箱2023设定为34±8℃，连续运行85分钟后输出检查报告。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "±符号",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U414",
    "text": "模拟配方需要390 g谷物和30 g坚果，混合后的总质量为420 g。",
    "category": "营养与成分",
    "phenomena": [
      "单位g",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U415",
    "text": "问卷练习共发放390份，回收30份，统计截止时间为2027年7月16日的14:40。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "日期",
      "截止时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U416",
    "text": "档案从2027年7月保存至2028年7月，保管周期为12个月。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "区间",
      "月数"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U417",
    "text": "模拟水泵以每分钟390转运行85分钟，随后降低到每分钟30转。",
    "category": "工程参数",
    "phenomena": [
      "速度",
      "时间",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U418",
    "text": "训练航班FL-2023安排在8号登机口，托运行李限重30 kg，登机时间为14:40。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "单位kg",
      "阈值",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U419",
    "text": "训练快递单写明包裹质量6.67 kg，箱体长390 cm、宽30 cm。",
    "category": "日常与事务",
    "phenomena": [
      "小数",
      "单位kg/cm",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U420",
    "text": "虚构冷链记录：箱号MED-2023的温度从14℃升至34℃，记录时间为14:40。",
    "category": "医疗用药",
    "phenomena": [
      "温度",
      "区间",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U421",
    "text": "虚构健康问卷共390份，其中30份需要补录身高，完成比例为86%。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "百分数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U422",
    "text": "冷藏运输训练记录中，箱内温度低于14℃时亮蓝灯，高于34℃时亮红灯。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "阈值",
      "条件判断"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U423",
    "text": "虚构营养表第8栏写有钠390 mg、钙30 mg，数据批次为NUT-2023。",
    "category": "营养与成分",
    "phenomena": [
      "单位mg",
      "编号",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U424",
    "text": "训练图表将第8季度的样本量标为390条，并将下一季度目标设为420条。",
    "category": "统计数据",
    "phenomena": [
      "季度",
      "统计数量",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U425",
    "text": "模拟排班表规定，庚岗每隔85分钟巡查一次，当日计划巡查30次。",
    "category": "日期与时间",
    "phenomena": [
      "间隔",
      "次数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U426",
    "text": "传感器庚每秒采集390次数据，单个数据包大小为30 KB，缓存上限为420 KB。",
    "category": "工程参数",
    "phenomena": [
      "频率",
      "单位KB",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U427",
    "text": "公交模拟时刻表显示，线路2023的发车间隔为8分钟，全程共有30个站点。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "间隔",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U428",
    "text": "模拟课程安排在8号教室，开始时间为14:40，本次共有30名学员参加。",
    "category": "日常与事务",
    "phenomena": [
      "编号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U429",
    "text": "模拟说明书中的规格为每支30 ml、每盒8支；请在听测表中分别填写这两个数值。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U430",
    "text": "模拟检测仪显示测量值6.67 mmol/L，样本编号BIO-2023，本次数据仅为读数练习。",
    "category": "生理指标",
    "phenomena": [
      "小数",
      "单位mmol/L",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U431",
    "text": "模拟湿度表显示86%，允许误差为±8个百分点，采样地点是庚站。",
    "category": "温度与范围",
    "phenomena": [
      "百分数",
      "±符号",
      "误差"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U432",
    "text": "食品包装训练文本中，果汁含量为86%，每盒500 ml，每箱30盒。",
    "category": "营养与成分",
    "phenomena": [
      "百分数",
      "单位ml",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U433",
    "text": "模拟分组比例为8∶9，总共安排390个样本，组别编号为STAT-2023。",
    "category": "统计数据",
    "phenomena": [
      "比例",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U434",
    "text": "预约训练记录为2027年7月16日 14:40，若迟到超过8分钟，则在系统中标记待确认。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "条件判断",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U435",
    "text": "训练图纸标注连接线长度6.67 m，线缆编号为CAB-2023，接口数量为8个。",
    "category": "工程参数",
    "phenomena": [
      "小数",
      "单位m",
      "编号",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U436",
    "text": "虚构运输订单需将390件货物送往庚仓，已装车30件，剩余360件。",
    "category": "交通与出行",
    "phenomena": [
      "数量",
      "减法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U437",
    "text": "虚构用水台账记录本月390 m³、上月30 m³，两个月合计420 m³。",
    "category": "日常与事务",
    "phenomena": [
      "单位m³",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U438",
    "text": "药房训练数据中，样品庚的库存由390盒调整为420盒，本次补入30盒。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "变化关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U439",
    "text": "训练表第8行列出收缩压124 mmHg、舒张压76 mmHg，并标注为模拟数据。",
    "category": "生理指标",
    "phenomena": [
      "单位mmHg",
      "多个数值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U440",
    "text": "温控测试从14:40开始，目标范围为14～34℃，计划收集390组读数。",
    "category": "温度与范围",
    "phenomena": [
      "时间",
      "区间",
      "单位℃",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U441",
    "text": "样品庚的保质期标示为12个月，生产日期为2027年7月16日，储存温度标示为14～34℃。",
    "category": "营养与成分",
    "phenomena": [
      "日期",
      "月数",
      "温度",
      "区间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U442",
    "text": "虚构评估记录显示平均耗时6.67秒，重复运行30次，误差范围为±8秒。",
    "category": "统计数据",
    "phenomena": [
      "小数",
      "时间",
      "次数",
      "±符号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U443",
    "text": "第8批资料须在2027年7月16日之前归档，每份资料附30张表格，截止时刻为14:40。",
    "category": "日期与时间",
    "phenomena": [
      "截止时间",
      "日期",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U444",
    "text": "模拟供电测试要求电压保持在170±8 V，累计运行85分钟并生成30条日志。",
    "category": "工程参数",
    "phenomena": [
      "单位V",
      "±符号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U445",
    "text": "停车场训练记录：车辆停放85分钟，车位编号P-2023，驶离时间为14:40。",
    "category": "交通与出行",
    "phenomena": [
      "持续时长",
      "编号",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U446",
    "text": "资料柜庚共有30层，每层放置8个文件盒，总容量为240盒。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "乘法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U447",
    "text": "模拟处方记录：样品辛每片标示425 mg，每盒33片，包装批号为RX-2160。",
    "category": "医疗用药",
    "phenomena": [
      "剂量",
      "单位mg",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U448",
    "text": "虚构体检记录2160：身高176 cm，体重74.9 kg，测量时间为15:45。",
    "category": "生理指标",
    "phenomena": [
      "单位kg/cm",
      "小数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U449",
    "text": "仓库辛的温度应记录在15℃至36℃的区间内，传感器每隔95分钟保存一次读数。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "区间",
      "间隔",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U450",
    "text": "虚构食品标签：每100 g含蛋白质7.39 g、脂肪9 g，一袋净含量为425 g。",
    "category": "营养与成分",
    "phenomena": [
      "小数",
      "单位g",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U451",
    "text": "模拟实验中，A组共425条记录，B组共33条记录，两组合计458条。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U452",
    "text": "活动辛计划在2027年8月17日的15:45开始，预计持续95分钟，请按先后顺序复述。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "持续时长"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U453",
    "text": "虚构设备辛输入电压为180 V，额定功率为1000 W，工作频率为50 Hz。",
    "category": "工程参数",
    "phenomena": [
      "单位V/W/Hz",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U454",
    "text": "虚构车次TR-2160计划于2027年8月17日的15:45从辛站发车，检票提前9分钟结束。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "日期",
      "时间",
      "提前量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U455",
    "text": "模拟采购清单列出425本笔记本和33支笔，合计458件，订单编号ORD-2160。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U456",
    "text": "药品标签听读示例：溶液辛每瓶425 ml，每箱33瓶，生产日期记为2027年8月17日。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "日期"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U457",
    "text": "模拟运动日志：第9组受试者的步数为7520步，行走距离7.39 km，用时95分钟。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "小数",
      "单位km",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U458",
    "text": "气象模拟数据：清晨最低温为-9℃，午后最高温为36℃，温差为45℃。",
    "category": "温度与范围",
    "phenomena": [
      "负数",
      "温度",
      "差值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U459",
    "text": "样品辛每100 ml标示能量425 kcal，一瓶550 ml，听测时需区分这两个单位。",
    "category": "营养与成分",
    "phenomena": [
      "单位ml",
      "单位kcal",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U460",
    "text": "虚构评测表显示，系统辛的准确率为89%，另一指标记为7.39分。",
    "category": "统计数据",
    "phenomena": [
      "百分数",
      "小数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U461",
    "text": "编号CAL-2160的会议预留95分钟，提醒将在开始前9分钟发出。",
    "category": "日期与时间",
    "phenomena": [
      "时间",
      "提前量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U462",
    "text": "测试模块ENG-2160的长度为425 mm，宽度为33 mm，尺寸误差不超过±9 mm。",
    "category": "工程参数",
    "phenomena": [
      "单位mm",
      "±符号",
      "阈值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U463",
    "text": "模拟导航提示：沿主路行驶7.39 km后右转，再前行425 m到达辛广场。",
    "category": "交通与出行",
    "phenomena": [
      "小数",
      "单位km/m",
      "顺序"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U464",
    "text": "图书馆辛分馆计划在2027年8月17日归还33本图书，读者预约号为LIB-2160。",
    "category": "日常与事务",
    "phenomena": [
      "日期",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U465",
    "text": "模拟药房盘点显示，第9号柜共有425盒片剂和33瓶糖浆，合计458件。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "加法关系",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U466",
    "text": "听测示例中，记录员将晨间心率记为每分钟87次，复测时间记为15:45。",
    "category": "生理指标",
    "phenomena": [
      "次数",
      "时间",
      "单位次/分钟"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U467",
    "text": "实验箱2160设定为36±9℃，连续运行95分钟后输出检查报告。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "±符号",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U468",
    "text": "模拟配方需要425 g谷物和33 g坚果，混合后的总质量为458 g。",
    "category": "营养与成分",
    "phenomena": [
      "单位g",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U469",
    "text": "问卷练习共发放425份，回收33份，统计截止时间为2027年8月17日的15:45。",
    "category": "统计数据",
    "phenomena": [
      "统计数量",
      "日期",
      "截止时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U470",
    "text": "档案从2027年8月保存至2028年8月，保管周期为12个月。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "区间",
      "月数"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U471",
    "text": "模拟水泵以每分钟425转运行95分钟，随后降低到每分钟33转。",
    "category": "工程参数",
    "phenomena": [
      "速度",
      "时间",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U472",
    "text": "训练航班FL-2160安排在9号登机口，托运行李限重33 kg，登机时间为15:45。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "单位kg",
      "阈值",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U473",
    "text": "训练快递单写明包裹质量7.39 kg，箱体长425 cm、宽33 cm。",
    "category": "日常与事务",
    "phenomena": [
      "小数",
      "单位kg/cm",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U474",
    "text": "虚构冷链记录：箱号MED-2160的温度从15℃升至36℃，记录时间为15:45。",
    "category": "医疗用药",
    "phenomena": [
      "温度",
      "区间",
      "时间",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U475",
    "text": "虚构健康问卷共425份，其中33份需要补录身高，完成比例为89%。",
    "category": "生理指标",
    "phenomena": [
      "数量",
      "百分数",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U476",
    "text": "冷藏运输训练记录中，箱内温度低于15℃时亮蓝灯，高于36℃时亮红灯。",
    "category": "温度与范围",
    "phenomena": [
      "温度",
      "阈值",
      "条件判断"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U477",
    "text": "虚构营养表第9栏写有钠425 mg、钙33 mg，数据批次为NUT-2160。",
    "category": "营养与成分",
    "phenomena": [
      "单位mg",
      "编号",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U478",
    "text": "训练图表将第9季度的样本量标为425条，并将下一季度目标设为458条。",
    "category": "统计数据",
    "phenomena": [
      "季度",
      "统计数量",
      "变化关系"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U479",
    "text": "模拟排班表规定，辛岗每隔95分钟巡查一次，当日计划巡查33次。",
    "category": "日期与时间",
    "phenomena": [
      "间隔",
      "次数",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U480",
    "text": "传感器辛每秒采集425次数据，单个数据包大小为33 KB，缓存上限为458 KB。",
    "category": "工程参数",
    "phenomena": [
      "频率",
      "单位KB",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U481",
    "text": "公交模拟时刻表显示，线路2160的发车间隔为9分钟，全程共有33个站点。",
    "category": "交通与出行",
    "phenomena": [
      "编号",
      "间隔",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U482",
    "text": "模拟课程安排在9号教室，开始时间为15:45，本次共有33名学员参加。",
    "category": "日常与事务",
    "phenomena": [
      "编号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U483",
    "text": "模拟说明书中的规格为每支33 ml、每盒9支；请在听测表中分别填写这两个数值。",
    "category": "医疗用药",
    "phenomena": [
      "单位ml",
      "数量",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U484",
    "text": "模拟检测仪显示测量值7.39 mmol/L，样本编号BIO-2160，本次数据仅为读数练习。",
    "category": "生理指标",
    "phenomena": [
      "小数",
      "单位mmol/L",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U485",
    "text": "模拟湿度表显示89%，允许误差为±9个百分点，采样地点是辛站。",
    "category": "温度与范围",
    "phenomena": [
      "百分数",
      "±符号",
      "误差"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U486",
    "text": "食品包装训练文本中，果汁含量为89%，每盒550 ml，每箱33盒。",
    "category": "营养与成分",
    "phenomena": [
      "百分数",
      "单位ml",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U487",
    "text": "模拟分组比例为9∶10，总共安排425个样本，组别编号为STAT-2160。",
    "category": "统计数据",
    "phenomena": [
      "比例",
      "数量",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U488",
    "text": "预约训练记录为2027年8月17日 15:45，若迟到超过9分钟，则在系统中标记待确认。",
    "category": "日期与时间",
    "phenomena": [
      "日期",
      "时间",
      "条件判断",
      "阈值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U489",
    "text": "训练图纸标注连接线长度7.39 m，线缆编号为CAB-2160，接口数量为9个。",
    "category": "工程参数",
    "phenomena": [
      "小数",
      "单位m",
      "编号",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U490",
    "text": "虚构运输订单需将425件货物送往辛仓，已装车33件，剩余392件。",
    "category": "交通与出行",
    "phenomena": [
      "数量",
      "减法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U491",
    "text": "虚构用水台账记录本月425 m³、上月33 m³，两个月合计458 m³。",
    "category": "日常与事务",
    "phenomena": [
      "单位m³",
      "加法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U492",
    "text": "药房训练数据中，样品辛的库存由425盒调整为458盒，本次补入33盒。",
    "category": "医疗用药",
    "phenomena": [
      "数量",
      "变化关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U493",
    "text": "训练表第9行列出收缩压126 mmHg、舒张压77 mmHg，并标注为模拟数据。",
    "category": "生理指标",
    "phenomena": [
      "单位mmHg",
      "多个数值",
      "编号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U494",
    "text": "温控测试从15:45开始，目标范围为15～36℃，计划收集425组读数。",
    "category": "温度与范围",
    "phenomena": [
      "时间",
      "区间",
      "单位℃",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U495",
    "text": "样品辛的保质期标示为13个月，生产日期为2027年8月17日，储存温度标示为15～36℃。",
    "category": "营养与成分",
    "phenomena": [
      "日期",
      "月数",
      "温度",
      "区间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U496",
    "text": "虚构评估记录显示平均耗时7.39秒，重复运行33次，误差范围为±9秒。",
    "category": "统计数据",
    "phenomena": [
      "小数",
      "时间",
      "次数",
      "±符号"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U497",
    "text": "第9批资料须在2027年8月17日之前归档，每份资料附33张表格，截止时刻为15:45。",
    "category": "日期与时间",
    "phenomena": [
      "截止时间",
      "日期",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U498",
    "text": "模拟供电测试要求电压保持在180±9 V，累计运行95分钟并生成33条日志。",
    "category": "工程参数",
    "phenomena": [
      "单位V",
      "±符号",
      "时间",
      "数量"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U499",
    "text": "停车场训练记录：车辆停放95分钟，车位编号P-2160，驶离时间为15:45。",
    "category": "交通与出行",
    "phenomena": [
      "持续时长",
      "编号",
      "时间"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  },
  {
    "id": "U500",
    "text": "资料柜辛共有33层，每层放置9个文件盒，总容量为297盒。",
    "category": "日常与事务",
    "phenomena": [
      "数量",
      "乘法关系",
      "多个数值"
    ],
    "kind": "text-example",
    "file": null,
    "format": null
  }
];
