---
layout: post
title: "TS思考 - 索引签名与映射类型"
author: "Qizheng Han"
---

久违的`TS思考`系列又来了。

今天带来的是`索引签名(Index Signatures)`。

# 什么是索引签名？

一说起`索引签名(Index Signatures)`可能觉得自己没听说过。

但是我写一段 TS 代码，大概率见过。

```ts
interface Test {
  [key: string]: boolean;
}
```

对，这个就是索引签名。我们先来引入一下官方的概念。wait, 官方没有具体概念？只给出了大白话？那太好了。

> Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.
>
> In those cases you can use an index signature to describe the types of possible values.

粗翻环节：

有时候你不知道类型中所有属性的属性名，但你知道他们所对应的类型(shape of the values)，这个时候你就可以用`索引签名`来描述它们。

## index 的类型并非支持所有

![](/assets/img/2022-06-25/onlyType.png)

```ts
interface Test {
  [key: boolean]: boolean;
}
```

如果我是上述的代码，TS 是会报错。提示我们索引签名仅支持的几种类型

我想你一定注意到了`template literal type`，这个跟今天的重点有点关系。

## 能同时配置 2 个 index signature 吗？

答案是可以的。但是有一定的限制。

为什么是 2 个？我个人感觉只是因为`string / number`作为对象的 index 是有一些特殊型的。

**JS 中，普通对象的 key 都是 string。**

所以我们定一个 index signature 是 number

```ts
interface Test {
  [key: number]: any;
}

// 其实在js中，number类型的100会被变成string
const t: Test = {
  100: "test",
};

interface Test {
  name: string;
}

interface ExTest extends Test {
  breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Test!
interface NotOkay {
  [x: number]: Test;
  // Error: 'number' index type 'Test' is not assignable to 'string' index type 'ExTest'.
  [x: string]: ExTest;
}
```

所以如果我们同时给 2 个 index signature 的话，数字索引器返回的类型必须是从字符串索引器返回的类型的子类型。

来看一个例子

```ts
type ParentType = "a" | "b" | "c";

type SubType = "a" | "b";

// true
type A = SubType extends ParentType ? true : false;

interface Test {
  [key: string]: ParentType;
  [key: number]: SubType;
}
```

我再给一个错误的例子

![](/assets/img/2022-04-27/wrongSubType.jpg)

# Record<Keys, Type>

先看一个例子

```ts
const object1: Record<string, string> = { prop: "Value" }; // OK
const object2: { [key: string]: string } = { prop: "Value" }; // OK
```

看起来两个效果都一样，但其实有一些区别

**index signature 不能具体用字面量类型来限制 index 的 type。**

```ts
interface C {
  [key: "a" | "b"]: number;
}
```

![](/assets/img/2022-06-25/keyError.png)

但 Record 可以。

```ts
type C = Record<"a" | "b", number>;
```

## 小插曲 Record & type & interface

上例子

```ts
type A = Record<string, string>;

interface B {
  b: string;
}

function test(arg: A) {
  console.log(arg);
}

const testArg: B = {
  b: "1",
};

test(testArg);
```

![](/assets/img/2022-06-25/signatureError.png)

上面的例子，有一个类型是用 Record 定义的，如果我们用`interface`来定义一个类型去与之匹配，会报错。但是 type 定义却不会。

这种报错，仅需要给`interface`添加`index signature`即可解决。但是是为什么呢？有小伙伴知道吗？？

```ts
interface B {
  [key: string]: string;
  b: string;
}
```

# 映射类型

今天的主要谈论对象是`映射类型`。

## 什么是映射类型？

要解释映射类型，我想用一个实际场景来解释一下。

> 工作中有时候会请假，当我们提交完请假审批之后，我们的审批操作会对应着不同的状态。
>
> 不同的审批状态可以完成不同的操作
>
> 例子是有更好的写法，但是为了理解映射类型，采用了某种特定写法

```ts
const APPROVAL_STATUS = {
  /** 提交审批 */
  SUBMIT: 1,
  /** 审批通过 */
  APPROVAL: 2,
  /** 审批撤回 */
  REVOKE: 3,
} as const;
```

我们需要在 UI 层面，有一个 Tag 来提示用户对应状态，所以我们可以定义一个这样的类型

> 为了帮助理解我先平铺开来写类型

```ts
interface ApprovalStatus {
  [APPROVAL_STATUS.SUBMIT]: string;
  [APPROVAL_STATUS.APPROVAL]: string;
  [APPROVAL_STATUS.REVOKE]: string;
}

const TAG_STATUS: ApprovalStatus = {
  [APPROVAL_STATUS.SUBMIT]: "已提交",
  [APPROVAL_STATUS.APPROVAL]: "已通过",
  [APPROVAL_STATUS.REVOKE]: "已撤回",
};
```

这个时候还需要有一个不同的状态完成不同操作的类型

```ts
interface ApprovalOption {
  [APPROVAL_STATUS.SUBMIT]: () => void;
  [APPROVAL_STATUS.APPROVAL]: () => void;
  [APPROVAL_STATUS.REVOKE]: () => void;
}
```

你可以看到, 我们写了很多遍

```ts
[APPROVAL_STATUS.SUBMIT]
[APPROVAL_STATUS.APPROVAL]
[APPROVAL_STATUS.REVOKE];
```

映射类型这个时候就可以用得上。

```ts
interface ApprovalStatus {
  [APPROVAL_STATUS.SUBMIT]: string;
  [APPROVAL_STATUS.APPROVAL]: string;
  [APPROVAL_STATUS.REVOKE]: string;
}

type NewApprovalStatus = {
  [key in keyof typeof APPROVAL_STATUS]: string;
};

// 同理

interface ApprovalOption {
  [APPROVAL_STATUS.SUBMIT]: () => void;
  [APPROVAL_STATUS.APPROVAL]: () => void;
  [APPROVAL_STATUS.REVOKE]: () => void;
}

type NewApprovalOption = {
  [key in keyof typeof APPROVAL_STATUS]: () => void;
}
```

因为`APPROVAL_STATUS`通过`typeof`与`as const`变成字面量类型之后，就可以通过它的属性，作为新类型的属性，而新类型属性所对应的值则可以自己定义新的类型。


## 一些修饰符

接触过类型编程的小伙伴其实可能已经用过映射类型了，只不过不知道这种操作是映射类型。

那么在类型编程中有一道题，把所有属性变为readonly

```ts
type MyReadOnly<T> = {
    readonly [K in keyof T]: T[K];
}

interface A {
    a: string;
    b: number;
}

type B = MyReadOnly<A>;
```

这个就是用到了映射类型。而`readonly`就是在映射类型遍历所有属性的同时，所添加的修饰符。

![](/assets/img/2022-06-25/readonly.png)

## as 重新命名属性

可能上面的例子，每个类型的属性想更突出他本身的作用，那么就可以通过`as` + `模版字符串`

```ts
type NewApprovalStatus = {
  [key in keyof typeof APPROVAL_STATUS as `${key}_STATUS`]: string;
};
```

![](/assets/img/2022-06-25/asName.png)

## 映射不同的属性类型

可能并不是每个属性所对应的类型都是一样的，这种情况反而多一些。不过这样也能用映射类型

```ts
type NewApprovalStatus = {
  [key in ApprovalStatus]: key extends 'SUBMIT' ? true : false;
};
```

![](/assets/img/2022-06-25/extendsType.png)

我们可以通过一些类型判断甚至写别的范型来完成更复杂的类型推倒。


# 参考

- [Index Signatures](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
