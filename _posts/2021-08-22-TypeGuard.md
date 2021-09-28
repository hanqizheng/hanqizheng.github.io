---
layout: post
title: "TS思考篇——Type Guard "
author: "Qizheng Han"
---

为什么突然要学`type guard`呢？

突然有一天被问到了`type guard`是什么？

在写Table的时候其实很多地方都用了只是自己不太知道这个就是`type guard`。

那么今天就来好好的了解一下什么是`type guard`。

# 一个场景

```ts
interface A {
  name: string;
  code: number;
}

interface B {
  name: string;
  birthday: Date;
}

type Test = A | B;

function Func(param: Test) {
  if (param.code) {
    // error: Property 'code' does not exist on type 'B'.
    console.log(param.code);
  }
}
```

其实这个场景很多情况下都会存在，一个`union`类型的变量想要用其中一个分支的属性，但是这个时候就会报错。

# narrowing(类型收紧) 和 type guard(类型保护)是什么关系？

其实最开始迷惑这两个概念是因为`typescript`的官方文档。

在网上搜索到的一些关于`type guard`的文章，给出的官方文档链接都清一色的指向了这个旧文档。

![](/assets/img/2021-08-22/oldDoc.png)

而新的文档中，能找到的关于`type guard`的内容仅在`narrowing`的章节中可以看到。

![](/assets/img/2021-08-22/newDoc.png)

### 难道是`type guard`被`narrowing`取代了吗？

个人认为：

**`type guard`的本质其实就是在当前分枝收紧类型的范围，让类型更近则TS可以推断出更详细的内容。**

所以narrowing所做的操作，是包含`type guard`的相关操作，且更丰富了。

> 盲猜这也是官方把`type guard`的文档废弃而编写了`narrowing`的文档的原因。

# typeof type guards

```ts
function padLeft(padding: number | string, input: string) {
  return new Array(padding + 1).join(' ') + input;
  // Operator '+' cannot be applied to types 'string | number' and 'number'.
}
```

上面这个例子中`padding + 1`这个操作对于`string`或者`number`来说是有**不同的**结果的。所以TS告诉我们，你确定要这么做吗？

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === 'number') {
    return new Array(padding + 1).join(' ') + input;
  }
  return padding + input;
}
```

通过`typeof`来判断当前参数`padding`的类型，从而可以通过**产生不同的分支来收紧类型**。

这个过程我们其实是在narrow the type.

但是是不是和我们之前说的通过`typeof`来完成的`type guard`一摸一样。

和通过`typeof`来建立不同分支，在每个分支中类型都更紧的这种操作类似的还有

## Truthiness narrowing

一说到if来创建条件语句，那么就离不开`true` or `false`。

JavaScript中有很多的值会被转为`false`

- 0
- NaN
- "" (the empty string)
- 0n (the bigint version of zero)
- null
- undefined

同样是创建分支来完成类型收紧，排除可能为`false`的值，来进行后续的操作。


# in操作符

个人认为，`in`操作符其实就是判断当前这个类型中有无此属性。

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}
```

上述这个例子，通过判断`"swim"`属性是否在当前变量中，来**让TS自己推断出**具体的类型。因为swim可以`唯一标识`一个类型。

## 不得不说的 never

我们还使用一下开头那个例子

```ts
interface A {
  name: string;
  code: number;
}

interface B {
  name: string;
  birthday: Date;
}

type Test = A | B;

function Func(param: Test) {
  if ('code' in param) {
    console.log(param.code);
  } else if ('birthday' in param) {
    console.log(param.birthday);
  } else {
    console.log(param);
  }
}
```

其实在这个例子中，param类型为`Test`, 本质上就是`A | B`。

我们在Func函数中给出了`3`个分支。一个是narrowing到了`A`，另一个是`B`。

其实至此为止，param的全部情况的类型都已经被TS推断出来了。

但是这个时候最终的`else`分支是**一定不会走到的**

这个时候TS就会认为这个分支中的param类型为`never`。

![](/assets/img/2021-08-22/never.jpg)

> TS 文档给出的never的定义：
> 
> The never type is assignable to every type; however, no type is assignable to never (except never itself). This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement.

大致翻译一下就是：

类型为`never`的变量可以赋值给任意类型的其他变量，但是只有`never`类型的变量可以赋值给`never`类型。

你可以利用`never`来检查是否narrowing的每种类型都走过了(如果没有走全是不会出现`never`的)。

wait a minute... `exhaustive checking`这是个撒子？


# Exhaustiveness checking

`exhaust`有`精疲力尽的，用尽`的意思。

其实就如同上面`never`章节所说到的，如果没有把`当前变量`类型的所有情况都考虑到，TS是不可能推断出`当前变量`的类型为`never`。

所以当分支能让TS类型推断出`never`那说明类型检查真的**走到头**了。

# 参考

-[Type Guards and Differentiating Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types)
-[Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

