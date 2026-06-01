---
title: 资源池 Media Kit 关键信息提取
slug: MediaKitMcp
author: Qizheng Han
publishedAt: 2025-04-16
status: published
excerpt: TLDR; > 感兴趣的话，项目代码在这里：media_kit_mcp_server 什么是 Media Kit？ Media
  Kit（媒体资料包）是一种专业化的工具，用于向广告主、合作伙伴、媒体机构或其他利益相关方展示品牌、平台或个人的核心信息、受众数据和商业合作价值。
  可以简单的理解为一个自我推销介绍。 为什么要完
---

## TLDR;

> 感兴趣的话，项目代码在这里：media_kit_mcp_server

## 什么是 Media Kit？

Media Kit（媒体资料包）是一种专业化的工具，用于向广告主、合作伙伴、媒体机构或其他利益相关方展示品牌、平台或个人的核心信息、受众数据和商业合作价值。
可以简单的理解为一个自我推销介绍。

## 为什么要完成关键信息的提取？

![image](/assets/img/2025-04-16/mediaKit1.PNG)

![image](/assets/img/2025-04-16/mediaKit2.PNG)

![image](/assets/img/2025-04-16/mediaKit3.PNG)

![image](/assets/img/2025-04-16/mediaKit4.PNG)


### 实际业务场景

这是 4 份真实业务的 Media Kit。其内容都是高度自定义。
在业务侧，需要频繁的进行附件操作（下载、阅读），提取其内容的关键信息。

### 总结特性

1. 对于这类相对机械化、但需要分析的操作，就是 AI 最擅长的领域。
2. Media Kit 可以被元数据完成描述，也就说明不同的 pdf 内容可以被提取为相同数据结构的数据

## 如何实现？

### 如何抹平 Media Kit 的内容差异？

因为 pdf 文档的内容完全不同，所以直接提取 Media Kit 的关键信息并不一定是首选方案

#### 方案

| 方案 | 优势 | 劣势 |
| --- | --- | --- |
| 直接提取 | 1. 实现相对简单<br />2. 流程简单，损耗少<br />3. 依赖附件上传，部分厂商的 API 不支持<br />4. 速度较慢，等待时间久 | 依赖附件上传，部分厂商的 API 不支持 |
| 转换为 Markdown | 1. 可以抹平 pdf 之间的内容差异，因为都变成了文本<br />2. 依赖了三方库，解决了 AI api 不支持附件的问题<br />3. AI 处理的是文本信息，较为 AI 友好<br />4. 三方库对 pdf 的解析能力不是最佳<br />5. 代码实现较为复杂 | 依赖了三方库，解决了 AI api 不支持附件的问题 |
| AI 提取文本信息 | 1. AI 提取更为智能<br />2. 多次 AI 总结会导致数据失真<br />3. 多次 AI 请求会导致响应极慢<br />4. Token 耗损大<br />5. 依赖附件上传，部分厂商的 API 不支持 | 依赖附件上传，部分厂商的 API 不支持 |

优势
劣势
直接提取

1. 实现相对简单
2. 流程简单，损耗少
3. 依赖附件上传，部分厂商的 API 不支持
4. 速度较慢，等待时间久
   ✅ 转换为 Markdown
5. 依赖了三方库，解决了 AI api 不支持附件的问题
6. AI 处理的是文本信息，较为 AI 友好
7. 可以抹平 pdf 之间的内容差异，因为都变成了文本
8. 三方库对 pdf 的解析能力不是最佳
9. 代码实现较为复杂
   AI 提取文本信息
10. AI 提取更为智能
11. AI 使用程度高
12. 多次 AI 总结会导致数据失真
13. 多次 AI 请求会导致响应极慢
14. Token 耗损大
15. 依赖附件上传，部分厂商的 API 不支持
    [图片]

通过对比，选择了将 pdf 通过 python 的三方库转换为 markdown，再交由 AI 提取关键信息。

关键信息的提取既简单又复杂

信息提取，是对接 Deepseek 的 API，让 AI 帮忙完成内容总结。

但是目前的 demo 对 prompt 优化甚少，所以提取效果可能不尽如人意。

提取能力在一定程度上受到 pdf 转换 markdown 时内容耗损的影响。
所以为了提升提取的信息正确率，应该后续再引入一些 prompt engineering 相关的优化。

工程化（实际落地）
[图片]

Demo 侧重点
目前 Demo 的侧重点，是想验证其 MCP 核心流程可以走通
并没有对输入、 输出等交互逻辑进行细致化的开发。

落地需要做这些事

1. 需要将 VisionHub 作为一个 MCP Client 完成 Media Kit 解析流程的调度。
2. 需要优化解析信息的 UI 展示

Evaluated 效果衡量
参考维度：准确度、有效内容提取率

GSG_Cashback_DE_Packages.pdf
{
"basicInfo": {
"audience": {
"gender": null,
"age": null,
"location": null
},
"reach": {
"visitors": null,
"social": null,
"email": null
},
"packages": [
{
"name": "BRONZE",
"price": "1000€ + CPA increase*",
"features": [
"Merchant page",
"Deal page",
"Weekly Newsletter Integration",
"App Placement",
"New Partner Placement HP",
"New on Shoop Newsletter",
"Stage Banner (2-3 days)",
"Shoop Vouchers (500€)"
]
},
{
"name": "SILVER",
"price": "1500€ + CPA increase*",
"features": [
"Merchant page",
"Daily Deals Landing page",
"Daily Deals Slider HP",
"Daily Deal Newsletter",
"Daily Deals App",
"Banner HP logged",
"Sidebar Banner",
"App Push (targeted)",
"Banner APP Exclusive",
"Web Pop-up Banner"
]
},
{
"name": "GOLD",
"price": "3500€ + CPA increase*",
"features": [
"Dedicated cashback program page",
"Deals Newsletter",
"Standard Visibility*",
"Visibility Plus**",
"Premium Visibility\***"
]
}
]
},
"analysis": {
"advantages": [
"提供多种套餐选择，满足不同预算和需求",
"包含多种广告和推广方式，如新闻稿、横幅广告、应用推送等",
"提供 CPA 增加的可能性，有助于提高广告效果"
],
"risks": [
"缺乏受众的具体信息，如性别、年龄和地理位置，可能影响广告的精准投放",
"套餐价格较高，可能不适合小型企业或初创公司"
],
"suggestions": [
"提供更多关于受众的信息，以便广告主能够更精准地定位目标群体",
"考虑推出更适合小型企业或初创公司的低价套餐，以扩大客户基础"
]
}
}

Moral_Fibres_Media_Kit_Oct_2023.pdf
{
"basicInfo": {
"audience": {
"gender": "87% female",
"age": [
"25 - 34",
"35 - 44"
],
"location": "79.2% UK based"
},
"reach": {
"visitors": "82 K unique monthly visitors",
"social": "315.9 K followers on Facebook, 6.1 K on Instagram, 7.7 K on Pinterest",
"email": "14.5 K with 60% open rate"
},
"packages": [
{
"name": "Sponsored Post",
"price": "£750",
"features": [
"Social media promotion",
"Featured in email newsletter",
"Remains on blog for at least one year"
]
},
{
"name": "Inclusion in Brand Roundup Post",
"price": "£350",
"features": [
"12 months inclusion",
"Written about in conjunction with other brands"
]
},
{
"name": "Guest Post on Your Website",
"price": "£750",
"features": [
"One set of revisions included",
"Shared with audience through social media"
]
},
{
"name": "Sidebar Advert",
"price": "£50",
"features": [
"30 days display",
"300 x 200-pixel advert"
]
},
{
"name": "Instagram Giveaway",
"price": "£175",
"features": [
"1 week duration",
"Targets UK audience"
]
},
{
"name": "Newsletter Sponsorship",
"price": "£300",
"features": [
"Dedicated slot in monthly e-newsletter",
"Image and link to your site"
]
}
]
},
"analysis": {
"advantages": [
"High engagement with a specific demographic (87% female, primarily UK-based homeowners)",
"Strong social media presence and email newsletter with high open rates",
"Diverse content offerings that cater to a wide range of interests within sustainable living"
],
"risks": [
"Limited audience outside the UK (79.2% UK based)",
"Potential for high competition in the sustainability niche"
],
"suggestions": [
"Expand target audience by including more content relevant to non-UK readers",
"Leverage the high engagement rates by offering more interactive content or community-building initiatives"
]
}
}

Tarifas_Gizlogic_2023.pdf
{
"basicInfo": {
"audience": {
"gender": null,
"age": null,
"location": null
},
"reach": {
"visitors": null,
"social": null,
"email": null
},
"packages": [
{
"name": "ARTÍCULO PATROCINADO - SPONSORED POST",
"price": "50€-130€",
"features": [
"不同时间段价格不同",
"覆盖多个平台"
]
},
{
"name": "BILLBOARD BANNER (7-15 DÍAS)",
"price": "100€-500€",
"features": [
"不同时间段价格不同",
"覆盖多个平台"
]
},
{
"name": "EMISIÓN NOTIFICACIONES CHROME",
"price": "30€-50€",
"features": [
"不同时间段价格不同",
"覆盖多个平台"
]
}
]
},
"analysis": {
"advantages": [
"价格区间明确，便于预算规划",
"覆盖多个平台，增加曝光机会",
"不同时间段有不同的价格策略，灵活适应市场需求"
],
"risks": [
"缺乏受众数据，难以精准投放",
"价格波动可能影响长期合作意愿"
],
"suggestions": [
"补充受众分析数据，提高投放精准度",
"提供长期合作的价格优惠，增加客户粘性"
]
}
}

Coupert_Media_Kit_2023_Q4.pdf
{
"basicInfo": {
"audience": {
"gender": null,
"age": null,
"location": null
},
"reach": {
"visitors": null,
"social": null,
"email": null
},
"packages": null
},
"analysis": {
"advantages": null,
"risks": [
"无法解析 PDF 内容",
"无法提取有效信息"
],
"suggestions": [
"尝试提供其他格式的媒体资料包",
"确保 PDF 文件内容可提取"
]
}
}

汇总
PDF
准确度
有效内容
GSG_Cashback_DE_Packages.pdf
一般
一般
Moral_Fibres_Media_Kit_Oct_2023.pdf
较好
较好
Tarifas_Gizlogic_2023.pdf
一般
一般
Coupert_Media_Kit_2023_Q4.pdf
无法解析
无法解析
一些番外
在选择到底用什么 Host 来承载自己开发的 MCP server 时，尝试了几个现阶段很主流的 app。说说自己的感受。

Claude Desktop

1. MCP tools 在 UI 上没有 入参和返回值的执行过程，不是很友好
   [图片]
2. Claude 自己会对 MCP tools 的返回值进行再理解概述。这会导致一个相对严重的问题，就是很多时候想要得到特定数据结构的返回值很难在 Claude Desktop 做到
   tail -n 20 -f ~/Library/Logs/Claude/mcp*.log
   通过这个命令可以实时看到 claude desktop 的 mcp log 信息
   {"jsonrpc":"2.0","id":32,"result":{"content":[{"type":"text","text":"{\n \"basicInfo\": {\n \"audience\": {\n \"gender\": null,\n \"age\": null,\n \"location\": null\n },\n \"reach\": {\n \"visitors\": null,\n \"social\": null,\n \"email\": null\n },\n \"packages\": [\n {\n \"name\": \"BRONZE\",\n \"price\": \"1000€ + CPA increase*\",\n \"features\": [\n \"Merchant page\",\n \"Deal page\",\n \"Weekly Newsletter Integration\"\n ]\n },\n {\n \"name\": \"SILVER\",\n \"price\": \"1500€ + CPA increase*\",\n \"features\": [\n \"App Placement\",\n \"New Partner Placement HP\",\n \"New on Shoop Newsletter\"\n ]\n },\n {\n \"name\": \"GOLD\",\n \"price\": \"3500€ + CPA increase*\",\n \"features\": [\n \"Stage Banner (2-3 days)\",\n \"Shoop Vouchers (500€)\",\n \"Premium Visibility\"\n ]\n }\n ]\n },\n \"analysis\": {\n \"advantages\": [\n \"提供多种套餐选择，满足不同预算和需求\",\n \"包含多种广告位和推广方式，增加曝光机会\",\n \"提供 CPA 增加的可能性，激励广告效果\"\n ],\n \"risks\": [\n \"缺乏受众具体信息，难以精准定位\",\n \"CPA 增加的具体条件和幅度不明确\"\n ],\n \"suggestions\": [\n \"补充受众的性别、年龄和地理位置信息，以便更精准的广告投放\",\n \"明确 CPA 增加的具体条件和预期效果，增加透明度\",\n \"考虑提供更多定制化服务，以满足特定客户的需求\"\n ]\n }\n}"}]}}
   在 log 中可以清晰地看到 mcp server 的返回值已经是 JSON 数据了
   [图片]
   但是 Claude 还是会将结果再次总结，转换其内容

MCP Inspector

每次代码更新以后，如果重新 build，Inspector 刷新（reconnect or restart）必报错，像是个 bug。
