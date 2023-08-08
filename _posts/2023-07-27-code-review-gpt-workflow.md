---
layout: post
title: "CodeReviewGPT系列（一）：工作流程"
author: "Qizheng Han"
---

旨在以简单的描述来解释 CodeReviewGPT 的工作流程（因为没啥难的东西）。

# 让 GPT-3.5 进行 CR需要几步？

![](/assets/img/2023-07-27/simpleWorkflow.png)

答案是3步，打开冰箱门 → 放进冰箱 → 关上冰箱门 （不是）

DiffCode 的准备工作

当然如果真的这么简单，也就没有这篇文章了。


diff code在丢给 GPT 前有很多准备工作要做～ 这些事情可以被统称为 build prompt（构建prompt）。


CodeReviewGPT在构建prompt时，主要做了以下几步：

- 区分 programming language（编程语言）
- 根据编程语言区分 code review standard（CR标准）

  
## 区分编程语言

![](/assets/img/2023-07-27/distinguish%20Language.png)

当拿到一个Merge Request时，若干的代码改动（code diff）其实都会映射到所属的文件。

为了让 CodeReviewGPT 有更好的拓展性，将来能支持更多仓库的 MR，首要任务就是支持多种编程语言且可扩展。

CodeReviewGPT所做的，就是每个文件将对应一次单独 prompt， 进行一次单独的CR

![](/assets/img/2023-07-27/separateFile.png)

（因为Gitlab的diff可能每个文件有多段，所以实际运行是一段 code diff 一个特定的prompt）**


## 通过CR标准进一步衍生prompt

![](/assets/img/2023-07-27/seperateStandard.png)

因为文件对应了编程语言，显然每种编程语言 CR 所侧重的点都可能不同。

那么就需要再进一次让不同的编程语言和 CR 标准进行映射（实际是通过代码配置的方式完成）。

  

## 那么prompt的结构是什么样子的？

![](/assets/img/2023-07-27/promptStructure.png)

prompt 本身是通过 langchain 的[prompt template](https://js.langchain.com/docs/modules/model_io/prompts/prompt_templates/)实现。

prompt 的主体 question prompt 中，最灵活的就是 review standard 这部分 prompt。他是决定 prompt 区分了编程语言的关键。

  

经过这次区分，基本上就得到了最后要丢给 GPT 的 prompt。 一个文件对应一类 code review standard， 而每一个 standard 都会对应一个拼凑好的 prompt。

  

最终，我们得到了若干个 prompt。可以理解成 prompt 数组。

![](/assets/img/2023-07-27/promptArray.png)

丢给 GPT

丢给 GPT 其实也有一些工作要做，不是简单的丢给他。

这里我使用了 langchain 的 [chain](https://js.langchain.com/docs/modules/chains/) 。因为这种有固定步骤的流程，最适合用 chain 来托管。

![](/assets/img/2023-07-27/chainContent.png)

一次完整的 completion 其实包含了 code review + translate 两步。这个固定的流程就可以内置在 自定义 chain 中。

![](/assets/img/2023-07-27/severalChain.png)

就这样，把若干个 prompt 按顺序丢给 GPT 就得到了最终的结果。

# 总结

![](/assets/img/2023-07-27/conclusion.png)

把每一步抽象出来，大概就是这样的流程。这样 CodeReviewGPT 就完成了。