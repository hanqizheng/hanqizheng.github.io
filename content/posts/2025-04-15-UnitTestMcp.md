---
title: 组件库单元测试完全自动化生成
slug: UnitTestMcp
author: Qizheng Han
publishedAt: 2025-04-15
status: draft
excerpt: 组件库单元测试完全自动化生成 TLDR; > 感兴趣的话，请看这里 unit_test_generator_mcp_server 通过构建
  MCP server 的方式，将组件库源代码进行暴露。原先的手动操作命令行的部分全部移除，变为 Cursor Agent 调用 mcp tools 的方式。
  AI 生成单元测进化史
---

## 组件库单元测试完全自动化生成

### TLDR;

> 感兴趣的话，请看这里 [unit_test_generator_mcp_server](https://github.com/hanqizheng/unit-test-generator-mcp-server)

通过构建 MCP server 的方式，将组件库源代码进行暴露。原先的手动操作命令行的部分全部移除，变为 Cursor Agent 调用 mcp tools 的方式。

### AI 生成单元测进化史

#### 初期

![初期](/assets/img/2025-04-15/prototype.PNG)

最初期的单元测试生成其实和其他任何 AI 场景一样，靠 chat。
甚至在早期，市面上的主流 AI 不支持附件上传，code 和 其他辅助性的上下文都需要通过文本的方式发送。

#### 进化

结合 Cursor AI 的组件库单元测试生成

![进化](/assets/img/2025-04-15/withAIButNotMuch.PNG)

完成进化后的单元测试生成基本上达到了半自动化
可以通过在控制台输入对应的命令，来完成相关 Context 的快速选择，无须自己在手动去完成 context 的搜集。

因为没有与 Cursor 建立直接的关联，还是需要手动将 prompt 复制粘贴到对话框中完成后续操作。

#### 现在

![引入 MCP Server](/assets/img/2025-04-15/currentMcp.PNG)

在引入 MCP Server 以后。
Context 搜集的工作变为了 MCP server 的特定 tool 会完成一系列操作：

1. 查询源代码
2. 查询类型定义代码
3. 查询是否有组件引用，如果有，会查询对应引用组件的类型定义代码
4. 使用 prompt template 拼凑最终单元测试生成的 prompt

借助 Cursor Agent 的能力，可以完全自动化的生成单元测试代码。

### Evaluated 效果衡量

| 组件名       | old                                                                | new                                                                | 提升   |
| ------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------ |
| CardSelect   | ![cardSelectOld.PNG](/assets/img/2025-04-15/cardSelectOld.png)     | ![cardSelectNew.PNG](/assets/img/2025-04-15/cardSelectNew.png)     | 40%    |
| ActionSwitch | ![actionSwitchOld.PNG](/assets/img/2025-04-15/actionSwitchOld.png) | ![actionSwitchNew.PNG](/assets/img/2025-04-15/actionSwitchNew.png) | 29.42% |
| Avatar       | ![avatarOld.PNG](/assets/img/2025-04-15/avatarOld.png)             | ![avatarNew.PNG](/assets/img/2025-04-15/avatarNew.png)             | 21.06% |
| AsyncConfirm | ![asyncConfirmOld.PNG](/assets/img/2025-04-15/asyncConfirmOld.png) | ![asyncConfirmNew.PNG](/assets/img/2025-04-15/asyncConfirmNew.png) | 36.36% |

### 说说未来

单元测试的场景，只是对组件库通过 MCP 的方式与 AI 交互的第一步。
如果 AI 可以通过 MCP 暴露的 codebase 生成单测，就能干其他事情。

后续可能会把每一个组件用某种统一的 metadata 进行描述，供 AI 良好的理解。用于后续类似 v0 等 AI 生成前端页面的能力建设。
