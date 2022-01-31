---
layout: post
title: "TS思考 - 逆变与协变"
author: "Qizheng Han"
---

TypeScript思考篇又来了 

之前听到同事分享`逆变与协变`，自己很感兴趣但一直没有去研究，今天就来康康～


# `extends`

开始前可能要准备一下基础知识。`extends`关键字在TS中非常常用，它有如下几个功能

- 表示继承/拓展的含义
- 表示约束的含义
- 表示分配的含义

`extends`在TS中不光可以表示`类`的继承和拓展，还可以表示`类型`的继承和拓展。

```ts
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
```





# 参考

- [Extending Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types)
- [extends Clauses](https://www.typescriptlang.org/docs/handbook/2/classes.html#extends-clauses)