---
layout: post
title: "TS思考 - 函数"
author: "Qizheng Han"
---

已经是 TS 思考篇的第三篇了，今天来说说`函数`。

自己在写 TS 的时候，有很多`困惑`都来自`函数`，也不是说都是在定义函数类型的时候遇到的困难，有很多地方都会涉及到`函数`。

所以今天，就来看一看之前一直弄不懂的一些概念和新学到的在写 TS 时，函数相关的注意事项。

# What is call signature?

一直不太明白`call signature`的作用是什么。

## 先来看看什么是call signature

```ts
interface TestType {
  (arg1: number): number;
  test1: string;
  test2: boolean;
}
```

例子中` (arg1: number): number;`就是类型`TestType`的call signature;

这有什么用呢？单独的把它拎出来看，其实

```ts
interface TestType {
  (arg1: number): number;
}

type TestType2 = (arg1: number) => number;
```

在上面这个例子中，`TestType` 和 `TestType2`其实是等价的，都是限定了一个函数的类型，接受一个参数，类型为`number`，返回值的类型为`number`。

**那么就有小伙伴问了，那call signature和函数类型的定义有什么区别呢？**

如果`单纯地`拿类似于`TestType`这样的类型（也就是interface中仅有一个call signature的定义）来和函数类型比较。

**我只能说call signature和函数类型完全一样，没啥区别。**

但是！！！！

我们不能忘了`interface`本身是定义一个对象的类型，它能做的事情，比单纯的函数类型的定义`要多`，所以这就是为什么call signature存在的意义了。

# 为什么带泛型的箭头函数必须加限制？

其实这个问题应该被再细化一些：

**函数 props 的类型定义带有泛型的函数组件**，在使用箭头函数方式书写时，泛型必须通过`extends`来进行一次类型收紧(收紧)。

```tsx
{% raw %}
// 错误
const TestComponent = <T>(props:T) => {
  // TODO
}
{% endraw %}
```

![](/assets/img/2021-09-25/arrowError.jpg)

就像上述的例子和图片里一样，如果使用箭头函数定义一个props是泛型类型的component，就会报错。

差了很多资料，找到了几种解决方式：

```tsx
const TestComponent1 = <T,>(props:T) => {
  // TODO
}

const TestComponent2 = <T extends unknown>(props:T) => {
  // TODO
}

const TestComponent3 = <T extends {}>(props:T) => {
  // TODO
}
```

到底是为什么必须要使用上述这种写法，才可以不报错呢？为什么必须要extends或者加一些东西才行呢？

最终还是决定来看看`React.FC`的类型定义

```ts
// FC
type FC<P = {}> = FunctionComponent<P>;

// FunctionComponent
interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}

// PropsWithChildren
type PropsWithChildren<P> = P & { children?: ReactNode };
```

可以看到其实`FC`是为了我们平时开发方便而给定的`类型简称`。真正的类型是`FunctionComponent`。我们来分析一下`FunctionComponent`的类型中的这句：

```ts
(props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
```

这是我们刚才刚刚说过的概念`call signature`，也就意味着`被声明为这个类型的值`是可以像函数一样被调用的。

根据查阅一些资料，了解到一些平时不知道的写法

比如现在假装忽略掉我们要写的泛型写法

```tsx
interface Ab {
  a: number;
  b: number;
}

return (
<DataList<Ab>
  collapsed={false}
  listOfData={[{a: 1, b: 2}, {a: 3, c: 4}]}
/>
```

上述这种写法，其实就如同我们想要实现的写法`MyProps<Ab>`，结合一下刚才我们一起看的`FunctionComponent`的定义，

**其实不是箭头函数的泛型要求有限制**，而是`FunctionComponent`不允许传递一个泛型类型作为自己的类型参数参数
，仅此而已。


# Generic Function 的好习惯

## 坐实类型参数

```ts
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}
 
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}
 
// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);
```

这个例子最开始猛地一看感觉差不多，后者比前者多了一个类型限制，但是恰恰是因为这个类型限制，导致`b`的类型TS只能推断出来是`any`而`a`会被TS推断出来是`number`。

是因为TS会根据`约束`的类型来推断`返回值`的类型，而不会`等待`真的调用这个函数的时候，去推导类型。

所以在写函数时，能单纯的使用`类型本身`，就不要去限制它。

## 用更少的类型参数

还是老样子，先上例子

```ts
function test1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}
 
function test2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}
```

可能（我是说可能），有同学认为第二种写法会高级一些（因为用到泛型总比不用高级）。

其实这个同学，就是最开始学习TS的我。总觉得`泛型比普通类型高级`，但其实，比如上面这个例子，

`Func`在函数中甚至就使用了一次，且`Func`甚至没有关联多种类型可能性（就是`Func`被`extends`后已经定死了）。

这样是完全没有必要的。

## 类型参数至少能接收2种不同的类型

```ts
function tired<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}
 
greet("but world sucks.");
```

这里其实有点像第二种情况，`泛型`本身有点像`函数重载`(参数个数位置相同类型不同的情况下)。我们至少允许这个`类型参数`能接受2种不同的类型，才能达到`泛型`最基本的功能。

例子中`Str`这个类型参数已经被限制为`仅是string`类型，完全失去了`泛型`基本的意义。

# 参考

- [More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [Typescript - JSX](https://www.typescriptlang.org/docs/handbook/jsx.html#function-component)
- [What is the syntax for Typescript arrow functions with generics?](https://stackoverflow.com/questions/32308370/what-is-the-syntax-for-typescript-arrow-functions-with-generics)
- [How to use generics in props in React in a functional component?](https://stackoverflow.com/questions/53958028/how-to-use-generics-in-props-in-react-in-a-functional-component)
