---
layout: post
title: "让 GPT Code Review"
author: "Qizheng Han"
---

尝试让 GPT 进行 code review。

# 实现全过程

> 介绍如何实现用 GPT 做 code review 的全过程。

## 基础原理

让 GPT 帮我们 code review 的原理就像把大象装进冰箱一样简单：

- 把代码丢给 GPT
- 告诉它帮忙 code review
- 然后接收到 code review 结果

### 把代码丢给 GPT 前要做的事情（token count）

如果我们现在正在使用 ChatGPT 让他帮助我们进行 code review，那么操作真的很简单，就是复制代码，粘贴发送。

但是不知道你有没有遇到这样的报错信息呢？

![](/assets/img/2023-06-21/out_of_token.png)

当尝试用 GPT 去工程化的去做一些事情时，我们总想让它的答复更精准满足要求，就想给它更多的 context 来帮助它更好的理解。

但往往这个时候， token 限制成为最大的瓶颈。

prompt 构成

让 GPT 帮助 code review 的 prompt 本身就是一个字符串。 prompt 的构成其实就是指这个字符串包含哪些内容。

prompt 可以给一句非常简短的话

```
请帮我对这段代码进行 code review。
```

也可以是一段拥有固定格式，相对复杂的文本。这段文本本质上与那句简短的对话没有任何区别，他之所以更复杂，是因为我们想让 GPT 拥有更精准的回答。

```
作为一名程序员，你需要对以下代码进行审查。这是一个代码合并请求的相关改动数据：{diff}，并且这些改动发生在以下文件路径：{filePath}。

在审查过程中，请参考以下命名规范：{nameStandard}，并关注以下内容：
改动部分的代码与整个文件代码的关系，推测改动是否合理。
改动代码是否会影响已有代码，增加潜在的bug风险。
同时，你不需要关注以下内容：

无需对任何 import 语句进行审查。
无需对一些代码进行解释性评论。例如给某一行的代码添加类似注释的评论。
无需关心任何代码格式问题，例如缩进，空格，换行等。
无需评论符合规范或没有问题的代码。
无需对改动代码的描述。例如，不需要指出新增或删除了哪些代码。
请注意，你只需要对当前改动的代码进行审查，不需要对整个文件进行审查。每个审查评论请按照以下格式：{format_instructions}，并将所有的评论放入一个数组返回。如果代码没有任何问题，则返回空数组，无需任何其他描述内容。
```

上面这个例子中，除了被 {} 所包裹的变量无需关心（prompt template 后续会介绍），prompt 的构成大概是这个样子：

prompt = prompt 模版 + 嵌入内容 1 + 嵌入内容 2 + ... + 嵌入内容 n

这种内容的 prompt 是我们接下来要一直使用，一直不断完善修改的 prompt。

### 选择了 text completion 而非 chat

主要原因有两点：

- 目前 CR 的过程不是有来有回的聊天式。
- chat 接口本身不会记录聊天记录作为 context（待考证，我自己目前看是这样）需要自行处理组织聊天记录作为下次的参数进行传递。
- chat 聊天记录有更好的 context 环境，但是受限于每次 api token 数最大 4k 的限制，很难携带过长聊天记录

但是选择 text completion 也并非全是好处，有几点局限性：

- 单次的对话在某些时候很局限。
- 单词的对话决定了 context 不会被其他会话所共享。

还有一个比较疑惑的点是， chat 和 completion 的实现对于我来说是黑盒的，如果都是单次对话，输出的结果可能会差别较大（未大量验证），不知道内部实现有何区别。

### 缩减 token

上文中提到，一个最大的瓶颈，是 token 数不够，我们想传递给 GPT 的信息太多了，没办法都一次性发送。

对于 CR 这个场景来说，我们作为人类，进行 code review 的前提是：

- 我们对当前代码的功能了解
- 对当前代码所处的整个项目了解
- 对我们所秉持的代码 CR 规则所了解

但是这些 GPT 都不了解。我们需要在非常有限的 token 中将这些内容统统体现（或者放弃传递） ，这是让 GPT 帮忙 CR 的第一个难点。

当我们遇到一个 MR 的改动内容是这个样子

![](/assets/img/2023-06-21/mr_diff_size.png)

想要一次性把整个 MR 的相关代码改动扔给 GPT 基本是不可能了。更别说还要携带着改动相关的 context 一并传递。

上文中提到目前选择的 API 是 text completion， 所以每次调取接口都算是一次完整的会话且不在继续聊天。

diff 信息是我们第一个要缩减的内容

Gitlab 接口的返回数据里，对 MR 中每一个 diff 块是一个对象，如下：

```json
{
  "old_path": "apps/docs-pc/pageSrc/pageComponents/navRouter.js",
  "new_path": "apps/docs-pc/pageSrc/pageComponents/navRouter.js",
  "a_mode": "100644",
  "b_mode": "100644",
  "new_file": false,
  "renamed_file": false,
  "deleted_file": false,
  "diff": "@@ -59,6 +59,7 @@ export default [\n       { title: 'DatePicker', path: '/components/datePicker', subType: SUBTYPE.FORM_COMPONENT },\n       { title: 'Filter', path: '/components/filter', subType: 	SUBTYPE.FORM_COMPONENT },\n       { title: 'Form', path: '/components/form', subType: SUBTYPE.FORM_COMPONENT },\n+      { title: 'FormilyForm', path: '/components/FormilyForm', subType: SUBTYPE.FORM_COMPONENT },\n       { title: 'FormilyValidate', path: '/components/FormilyValidate', subType: SUBTYPE.FORM_COMPONENT },\n       { title: 'FormilyReaction', path: '/components/FormilyReaction', subType: SUBTYPE.FORM_COMPONENT },\n       { title: 'FormilyGrid', path: '/components/FormilyGrid', subType: SUBTYPE.FORM_COMPONENT },\n"
}
```

这样每次传递给 GPT 的内容，可以根据每一个 diff 块儿自行处理缩减 token 然后再丢给 GPT。

但是就算每一个 diff 块我们可以拆分，也还是不能覆盖全所有的场景，像这样的改动：

![](/assets/img/2023-06-21/big_diff_file.png)

常发生在新增文件的场景上，这样的一个 diff 块可能本身的文本量就已经超过 token 的限制了。

所以 diff 块还需要进一步完成拆分

diff 块可能存在多端改动，首要的标识就是类似于下方这段用 @@ 包裹的文本，每个代码段都会由一个这样的文本标识开头。

```
@@ -59,6 +59,7 @@
```

我们可以根据这样的标识继续对 diff 段拆分。

但是这样的拆分看起来更像是无奈地打补丁一样，本身有一些缺陷：

- 上文中提到 api 选择了 text completion，就意味着每次的 api 调用都是完全独立不享受 context 的对话。那么 diff 代码被拆分的粒度越小 completion 的调用次数会随之增多，会导致 GPT review 到相似问题会重复评论
- 即便这么拆分都有一些特殊情况无法满足，比如上图中的新增文件，无论代码段还是代码块都是一个，且 token 数超量，目前这种方法依然是无法 CR

**源文件代码是第二个要缩减的内容**

源文件的代码代表 diff 块中涉及到的改动文件所对应的全部源代码。以文件为单位，跟随 diff 代码块传递给 GPT，帮助完善 context 让 GPT 更好的理解上下文。

但是与上述遇到的问题类似，prompt 本身拥有一定的 token 数，再加上一个源码较多的文件内容，token 数是无法满足的，所以源文件的代码并不能每次都传递。

需要满足这个判断条件，源文件内容才会被携带。

```
prompt模版token数 + 源文件token数 < MAX_TOKEN_SIZE
```

## 让 GPT 帮忙 code review（prompt）

具体的 code review 过程都会在 evaluation 章节给出，本章节主要是阐述决定 prompt 的历程。

### 尝试 few shots

最初的 prompt 都是 zero shot 的，大体上带有一定规则模版，可以抽象为 “帮我完成 code review”。

效果很差，准确率仅 8.7%，召回率为 0 （evaluation 章节会详细介绍准确率和召回率的定义和计算方式）。

所以在讨论之后尝试 few shots 来给 prompt 增加一些明确性，让 code review 有方向。

我会给一些 good / bad cases (包括但不限这些)：

```ts
// good case

// 代码中没有任何遗留的console.log
function add(a, b) {
  return a + b;
}

// bad case
function add(a, b) {
  console.log("Adding numbers");
  return a + b;
}

// good case
const a = MAX_COUNT + MIN_COUNT;
const tip = `必须大于${MAX_COUNT}`;

if (a > MIN_COUNT) {
  // ...
}

// bad case
const a = 20 + 1;
const tip = "必须大于10";

if (a > 10) {
  // ...
}
```

但是输出的结果不是特别理想，主要原因有以下几点：

- good / bad cases 太少了，短时间又很难收集到很多质量高的 case
- good / bad cases 没有明确的方向引导性，提供的 case 最终都会揉杂成一个大的字符串塞到 prompt 里面。
- good / bad cases 没有一个合理的方式丢给 GPT ，且随着 case 的增多，占据 token 的比例也会越来越大，一定会出现超出 token 限制的情况

所以结合上述这些原因，个人认为 case 应该仅起到方向引导的作用而非具体案例。

方向引导是指：CR 主要测中的点，并不是具体的问题案例。

具体的 case 反而应该通过 embedding 后进行存储，最终在 CR 时通过比对，查找有无相似问题。这样才是一套好的 few shot 流程。

### 暂时选择 zero shot

处于上述的原因，最终还是选择继续 zero shot 只是尝试修改 prompt 来让输出结果更合理。

但是尝试 few shots 时给到了一些启发，比如 code review 需要有方向性，这些都会在 evaluation 章节体现。

### 英文转中文

在参考 langchain 的 prompt 之后，发现英文的 prompt 效果是要好于中文，所以决定 prompt 用英文，结果让 GTP 帮忙翻译成中文。

但是在使用过程中也发现一个问题， 随着 prompt 的措辞不一样， GPT 回答会有明显的区别

```
// not always working
Please answer the question in Chinese.

// working well
Please translate the comments into Chinese.
```

### 尝试分领域进行 CR

每次 code review 仅针对某一个领域：

- 代码风格
- 潜在 bug
- 性能问题
- 等

好处有如下几点：

- 更精确的 prompt，每个领域的 prompt 可以定制化
- 更专一的领域可以防止 CR 方向太泛以至于准确率不高

坏处也很明显：

- CR 一遍变多变，整个 CI 的流程耗时会变长
- 领域的划分不够明确会出现多次 CR 出现重复评论

### 引入 langchain

引入 `langchain` 最初是想使用其提供的一些功能，来方便做 completion， 甚至想使用 langchain 的内置 prompt。

但是随着功能的开发，langchain 的使用就仅限在流程便捷、数据结构转换等方面了，原因主要是想使用 langchain 特定的 prompt 需要用 langchain 内置的 agent，但是 CR 的场景并非是不确定可交互内容的场景，无法直接套用。

### prompt template

langchain 的 prompt template 支持向 prompt 中传入变量。

使用 prompt template 很大程度的提升了代码的灵活性。

这个大大提高了 Prompt 的维护性，因为我仅需要把 prompt 写在一处，变量由代码逻辑控制即可，而不是痛苦的拼接 prompt。

本身 langchain prompt template 的实现原理其实就是 langchain 帮我做了字符串拼接。

```ts
const zeroShotPrompt = `
As an experienced software engineer, you are tasked with reviewing a piece of diff code. 
Your mission is to identify potential issues, suggest improvements for readability and performance, and highlight any deviations from coding standards.

Here is the diff code to review:
{diff}

Please provide your review in this format:
{formatInstructions}

Remember:

Follow the output format.
DO NOT review any code that is not in the diff.
DO NOT comment on anything about code formatting, such as line breaks, indentation, etc.
Comment on a specific type of issue ONLY ONCE, regardless of how many times it appears.
Translate the comments to Chinese.
`;
```

上方代码片段中，所有用 `{}` 所包裹的都是模版变量。最终将由 langchain 完成变量拼接，输出最终的 prompt。

### output parser

GPT-3.5 的返回值格式是一个非常痛的点，因为拿到 response 并不意味着本次对话结束了，而是刚刚开始。

一个结构化的返回值非常重要。

通过 langchain + zod 的结合来规定返回值的数据结构

```ts
const parser = StructuredOutputParser.fromZodSchema(
  z.array(
    z
      .object({const zeroShotPrompt = `
As an experienced software engineer, you are tasked with reviewing a piece of diff code.
Your mission is to identify potential issues, suggest improvements for readability and performance, and highlight any deviations from coding standards.

Here is the diff code to review:
{diff}

Please provide your review in this format:
{formatInstructions}

Remember:

Follow the output format.
DO NOT review any code that is not in the diff.
DO NOT comment on anything about code formatting, such as line breaks, indentation, etc.
Comment on a specific type of issue ONLY ONCE, regardless of how many times it appears.
Translate the comments to Chinese.
`;         code: z.string().describe("original code in diff that you want to comment"),
        comment: z.string().describe("code review comment"),
      })
      .describe("all code review comments")
  )
);
```

这样的配置可以让 GPT 稳定的返回结构化数据格式

```json
[
  {
    "code": "+                {checkAuthority('staffManager_roster_edit') && (",
    "comment": "建议将checkAuthority('staffManager_roster_edit')提取为变量，以提高可读性。"
  }
]
```

### custom chain

custom chain 则是为了整个分模块 CR 代码的返回数据所创建的。

本项目用到的 custom chain 仅是负责了若干不同领域的 prompt 拼接流程等。

评测过程(evaluation)

选择几个 MR 作为测试样例，来完成对 CodeReviewGPT 效果的评判样本。

# 评测方式

评价 GPT 的 CR 结果选用了准确率、召回率、Fβ-Score 指标作为参考。

![](/assets/img/2023-06-21/evaluation_1.png)
![](/assets/img/2023-06-21/evaluation_2.png)

**准确率中 正确 的判断标准：**

comment 内容可行（按照 comment 指示修改代码不会报错）。

**召回率中 命中 的判断标准：**

- 先由人手工对目标 MR 进行 CR，收集一些评论
- 再由 GPT-4 对代码进行 CR，收集一些有价值的评论
- 综合上述评论作为样本评论

comment 如果评论内容与样本评论内容一致，则算为命中。

所以概括一下几个关键概念的计算公式：

```
准确率 = GPT回复内容正确的comment数 / GPT回复的总comment数

召回率 = GPT命中样本的comment数 / 样本comment总数

Fβ(加权调和平均值) = (1 + β²) * (准确率 * 召回率) / (β² * 准确率 + 召回率)
```

> 对于我们的 CR 场景来说，暂时认为准确率的权重 < 召回率的权重。
>
> 因为我们日常工作中对于 CR 的要求更多的是发现代码的问题，所以即便正确的评论，也有可能对我们来说是多余的。命中我们想要评论的点更重要。
>
> 所以调整 β = √2

## MR case

选择了比较有代表性的几次计算，并非所有输出的计算过程都会出现在此文档中，省略了给出的全部 CR 评论，仅给出全部 comment 的条数

| MR             | comment 总数（不包含样例） | 样例个数 | 正确个数 | 命中个数 | Precision | Recall | Fβ-Score |
| -------------- | -------------------------- | -------- | -------- | -------- | --------- | ------ | -------- |
| case1- 9931    | 6                          | 5        | 3        | 3        | 50.00%    | 40.00% | 42.86%   |
| case2 - 10042  | 24                         | 7        | 6        | 1        | 66.67%    | 14.29% | 19.35%   |
| case3 - 10068  | 40                         | 7        | 12       | 4        | 30.00%    | 80.00% | 51.43%   |
| case4 - 10055  | 6                          | 5        | 3        | 2        | 50.00%    | 40.00% | 42.86%   |
| 平均值         | -                          | -        | -        | -        | 49.17%    | 43.57% | 39.13%   |

注意：

结果可能受限于 openai 的 api 部分超时，具体个数存在一定的浮动。

# 留存的问题
1. 回复的准确率太低了，太多的干扰项会影响 pipeline 的运行时间，也会影响大家的 CR 耐心。
2. 很难去发现更深层次的代码问题。（主要是受 token 限制导致无法理解整个代码文件乃至项目）
3. 在解析一些回复时可能会无法解析导致无法确定评论位置，目前选择暂时略过这些 comment。

# TODO

## 功能改进方面

1. 增加 comment 反馈收集功能，需要持续反馈用于分析回复的正确性。
2. 通过搜集好的反馈来构建数据集，后续可以作为 few shots 的内容 甚至是 fine tune 的数据集。
3. 完善并汇总 evaluation 的详细过程，并记录。
4. 持续优化 prompt 不断改进 CR 产出内容。

## 功能扩展方面

1. 尝试增加共建能力，让大家可以轻松增加 CR 需要的 case
2. 增加更多语言的 prompt，目前仅支持 JS / TS
3. 通过 comment 数量来衡量代码质量，进行汇总分析(分析可以继续用 GPT)

## 安全可用方面

1. 需要考虑 gitlab 的 api 调用次数过多，防止打爆 gitlab


# 感受

GPT 的返回结果对 prompt 的要求非常高，也许仅仅是几个单词之间的差异（temprature = 0）都会影响到返回结果的不同
token 的限制非常大。受限于 token 很多想法的第一步是如何限制 token 的个数，保证不影响超过限制，要知道，GPT 的返回结果也是占用 token 个数的
整个依赖 GPT 的 CR 的过程相对黑盒，一切都只能通过调参数，调 prompt 来影响数据返回，但不能确保一定有作用。


# 参考

- [Gitlab Discussions API](https://docs.gitlab.com/ee/api/discussions.html#create-new-merge-request-thread)
- [langchain concept doc](https://docs.langchain.com/docs/)
- [langchain js 版文档](https://js.langchain.com/docs/)
- [langchain python 版文档](https://python.langchain.com/en/latest/index.html)
