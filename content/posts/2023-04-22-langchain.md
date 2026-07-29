---
title: Langchain
slug: langchain
author: Qizheng Han
publishedAt: 2023-04-22
status: published
excerpt: 最近在搞 AI 与业务结合的相关内容， 了解了一些 关于 `langchain` 的知识，前来分享。 你知道什么是LangChain吗？
  🦜️🔗 让我们一起来聊聊LangChain，这是一个框架，它设计用来简化使用大型语言模型(LLMs)创建应用程序。听起来有点难以理解？没关系，慢慢解释！
  LangChain的问题
---

最近在搞 AI 与业务结合的相关内容， 了解了一些 关于 `langchain` 的知识，前来分享。 

## 你知道什么是LangChain吗？ 🦜️🔗
让我们一起来聊聊LangChain，这是一个框架，它设计用来简化使用大型语言模型(LLMs)创建应用程序。听起来有点难以理解？没关系，慢慢解释！

## LangChain的问题解决方案
你是否曾经想过建立一个自动文档分析和摘要的系统？或者创建一个聊天机器人？或者一个能进行代码分析的工具？如果你有，那么LangChain就是为了解决这些问题而生的。LangChain的用例大部分与语言模型的用例重叠。

让我们想象一个场景：您正在处理一大堆复杂的工作，其中包括与各种 API 交互，对接多个数据库，执行搜索，处理文件，甚至还要调用聊天机器人来处理客户的请求。这一切的一切，都让您的代码变得混乱和难以维护。这时候，LangChain 就出现了，它像一个超级英雄一样，拯救了您混乱的代码世界。

**LangChain是一个设计用于简化使用大型语言模型（LLMs）创建应用的框架。**

开发过一些跟大语言模型有关的应用之后，会有这样一种感受：
- prompt好难写啊，LLM 不听自己的，该怎么写prompt才能让回答满意呢！？
- 为什么回答的内容与格式都这么随机，我没有办法在代码中对这些回答进行统一的处理
- 想要在调用api的过程中做一些别的操作，很难办到
- 等等

openai 改变了世界，让我们能用上 GPT 的 api 来开发一些不可思议的作品。但是开发的过程确实痛苦的，往往调用api是最后一步了，前面还有很多步骤要做。

langchain就是让很多需要非常复杂的实现方式，或者需要非常规范的prompt内容这类场景变得有迹可循，封装好了对应的能力。


## LangChain的核心概念
在LangChain中，有一些关键的概念需要我们理解：

### Component（组件）
LangChain的主要部分，例如Schema，它涵盖了整个代码库中使用的基本数据类型和模式。就像一辆汽车的零部件，每个部分都有其特定的作用。

以 PromptTemplate 为例。PromptTemplate 是一个允许你使用模板生成提示的组件，它可以用于多个地方，但某些值会发生变化：

```ts
import { PromptTemplate } from "langchain/prompts";

const template = "What is a good name for a company that makes {product}?";
const promptA = new PromptTemplate({ template, inputVariables: ["product"] });

const responseA = await promptA.format({ product: "colorful socks" });
console.log({ responseA });
// 输出: { responseA: 'What is a good name for a company that makes colorful socks?' }
```

### Chain（链）
在LangChain中，我们可以创建我们自己的序列链。例如，我们可以组合两个链：链1是我们刚刚创建的可以解决数学问题的agent，链2是一个LLM，它根据人的年龄建议适当的礼物。我们可以使用SimpleSequentialChain来组合他们【30†source】。就像在制作项链时，我们将各种珠子串在一起。

以 SimpleSequentialChain 为例。下面的代码示例演示了如何创建一个顺序链，该链首先通过一个agent解决年龄相关的数学问题，然后使用一个LLM根据得到的年龄推荐合适的礼物：
```ts
// 注意，以下代码只是一个示例，并非实际可运行的代码，因为它依赖于未定义的 'agent' 和 'llm' 对象。
import { PromptTemplate, LLMChain, SimpleSequentialChain } from "langchain";

// Chain1 - solve math problem, get the age
let chain_one = agent;

// Chain2 - suggest age-appropriate gift
let template = "You are a gift recommender. Given a person's age,\n" +
"it is your job to suggest an appropriate gift for them.\n\n" +
"Person Age:\n" +
"{age}\n" +
"Suggest gift:";
let prompt_template = new PromptTemplate({template, inputVariables: ["age"]});
let chain_two = new LLMChain(llm, prompt_template);

let overall_chain = new SimpleSequentialChain(chains=[chain_one, chain_two], verbose=True);
```

### Agent（代理
有些应用程序需要的不仅仅是对LLMs/其他工具的预定链式调用，而可能是根据用户输入决定的未知链。在这些链中，有一个“代理”，它可以访问一套工具。根据用户输入，代理可以决定调用哪些工具。你可以把它想象成一个指挥家，它知道何时该使用哪个乐器。

```ts
import { OpenAI, initializeAgentExecutor, SerpAPI, Calculator } from "langchain";

const run = async () => {
    const model = new OpenAI({ temperature: 0 });
    const tools = [new SerpAPI(), new Calculator()];

    const executor = await initializeAgentExecutor(tools, model, "zero-shot-react-description");

    console.log("Loaded agent.");

    const input = `What are the total number of countries in Africa raised to the power of 3?`;

    console.log(`Executing with input "${input}"...`);

    const result = await executor.call({ input });

    console.log(`Got output ${result.output}`);
    // 输出: "Got output, there are 54 countries in Africa. The number of countries raised to the power of 3 is 157464"
}
```

## 局限性

有的时候觉得并不是langchain的局限性，而是LLM本身，模型的好坏才是影响回答的最大因素，langchain都是些锦上添花的功能。


## 参考
- [LangChain - Wikipedia](https://en.wikipedia.org/wiki/LangChain)
