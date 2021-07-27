---
layout: post
title: "TS中的类型推断应用"
author: "Qizheng Han"
---

最近在写Table的过程中了解到一些关于TypeScript的`类型推断`的一些知识。 

> 前排提示：这篇博客包含大量的`TypeScript`报错截图，可能会引起不适。

# 类型和值

其实在最开始接触`TS`的时候，没有`区分`值和类型的概念。

因为最开始作为一个TS的初学者，下意识的会认为类型就是`number` / `string` / `boolean`，etc.

但是随后就会遇到很多这样的报错

![]()

还有这样的报错...

![]()

长话短说，在`TypeScript`的世界里，值和类型是需要根据不同的使用情况去判断的。

```typescript
1

true

{ a: 1 }

[1, 2, 3]
```

就像上述给定的这些例子，它们可以是Value，也可以是Type

```ts
// 1 as a type
type LiteralNumberType = 1;

function Test() {
  // at here you will get an error tip
  const a: LiteralNumberType = 2;
}

// 1 as a value, you are definitely familiar with this.
const a = 1;
```

简单的举一个例子，这些在我们常写的JavaScript中明明看起来是最常见不过的值，到了`TypeScript`中就变成了`type`。

Why？？？？？

Because this is [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types), 这里就不展开说了，是TS中非常基础的一个知识点。

这里的例子并不是想要你学会literal type。

而是想传达一种，在`TypeScript`中，我们需要`时刻都要有类型的意识`。可能听起来很玄学，但一旦有了类型的意识，就会越来越觉得TypeScript really make sense.

# TypeScript !== JavaScript + type

往往在刚才我们说的`类型意识`之后，就会自然而然的认为`我只是在原来代码的基础上添加了类型`。

但其实不是的。

我个人的理解就是，如果把`TypeScript`理解成`JavaScript + type`，那么这里的`type`在脱离了`JavaScript`之后就什么都不是，它`没办法独立`出来。

**但`TypeScript`其实是一个具有``图林完备的编程语言**，大白话就是，想想之前的类型体操训练，写的每一行代码都是TS根本没JS啥事。

引用一张之前组里分享的图片，和一段话：

**TypeScript是隐藏在JavaScript中的关于type的编程语言。**有一种TypeScript让JavaScript更完整的感觉。
# 什么是泛型？

可能在最开始的时候，我对泛型的理解是`复用`

比如有一个函数叫`id`，可以接`any`类型的参数，返回值的类型也是`any`。

```ts
const id = (arg) => arg;
```  

那么如果我再加一点代码，改造一下这个`id函数`。

```ts
type idBoolean = (arg: boolean) => boolean;
type idNumber = (arg: number) => number;
type idString = (arg: string) => string;
```
可以看到改装后的函数因传参类型不同返回值也不同就生成了不同的函数，可是这样就会多写很多代码。

这个时候`复用`的功能就出现了。

```ts
type id<T> = (arg: T) => T
```

## 把泛型理解成函数

我从学习TS到现在对

我想，了解过TS的小伙伴一定知道这种写法，我就不解释了。

**但是泛型真的不止于此**

# 有趣的类型推断


# 参考

- []()