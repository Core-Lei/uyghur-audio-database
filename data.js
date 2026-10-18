/* 只需要在这里修改音频文件名；文件放在同级 audio 文件夹中。 */
const samples = [
  {id:"U31", text:"医生建议患者每天服用3次，每次250 mg，最好在早餐、午餐和晚餐后30分钟服用。", category:"医疗用药", phenomena:["次数","剂量","单位mg","时间","复杂数字"], file:"U31.wav", format:"WAV"},
  {id:"U32", text:"这种口服液每瓶500 ml，成人每次服用10 ml，儿童每次只能服用5 ml。", category:"医疗用药", phenomena:["剂量","单位ml","成人/儿童","多个数值"], file:"U32.m4a", format:"M4A"},
  {id:"U33", text:"患者体重约为62.5 kg，身高为172 cm，建议每天饮水量不少于1500 ml。", category:"生理指标", phenomena:["小数","单位kg/cm/ml","最低限值","多个数值"], file:"U33.mp3", format:"MP3"},
  {id:"U35", text:"药品应储存在15℃至25℃之间的阴凉处，不能放在阳光直射或温度超过30℃的地方。", category:"温度与范围", phenomena:["温度","区间","阈值","单位℃"], file:"U35.m4a", format:"M4A"},
  {id:"U37", text:"检查结果显示，血糖为6.8 mmol/L，血压为135/85 mmHg，心率为每分钟92次。", category:"生理指标", phenomena:["小数","单位mmol/L","单位mmHg","斜杠","多个数值"], file:"U37.mp3", format:"MP3"},
  {id:"U42", text:"请在2026年4月28日之前完成检查，并在09:30到12:00之间把报告发送给负责人。", category:"日期与时间", phenomena:["日期","时间段","截止时间","冒号"], file:"U42.mp3", format:"MP3"},
  {id:"U46", text:"该设备的输入电压为220 V，允许范围是220±10 V，输出功率为1500 W，工作频率为50 Hz。", category:"工程参数", phenomena:["单位V/W/Hz","范围","±符号","多个数值"], file:"U46.mp3", format:"MP3"},
  {id:"U48", text:"统计结果表明，年龄在18至30岁之间的人群占总人数的56%，31至60岁的人群占32%，其余人群占12%。", category:"统计数据", phenomena:["百分数","年龄区间","比例关系","多个数值"], file:"U48.m4a", format:"M4A"},
  {id:"U49", text:"服药后如果出现持续头痛、呼吸困难、皮疹或体温超过39℃，应立即停止服药并联系医生。", category:"医疗用药", phenomena:["条件判断","症状","温度阈值","单位℃"], file:"U49.m4a", format:"M4A"},
  {id:"U50", text:"请记录每天的服药时间、服药剂量和身体反应；如果连续3天忘记服药，或者出现严重不适，应及时咨询医生。", category:"医疗用药", phenomena:["时间","剂量","条件判断","持续天数"], file:"U50.m4a", format:"M4A"}
];

