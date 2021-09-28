---
layout: post
title: "TS思考篇——函数"
author: "Qizheng Han"
---

已经是 TS 思考篇的第三篇了，今天来说说`函数`。

自己在写 TS 的时候，有很多`困惑`都来自`函数`，也不是说都是在定义函数类型的时候遇到的困难，有很多地方都会涉及到`函数`。

所以今天，就来看一看之前一直弄不懂的一些概念和新学到的在写 TS 时，函数相关的注意事项。

# What is call signature?

# 为什么带泛型的箭头函数必须加限制？

其实这个问题应该被再细化一些：

**函数 props 的类型定义带有泛型的函数组件**，在使用箭头函数方式书写时，泛型必须通过`extends`来进行一次类型收紧(收紧)。

```tsx
// 错误
```

```tsx
// 举例正确的方式
```

到底是为什么必须要使用上述这种写法，才可以不报错呢？

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

## 出现至少2次再用类型参数




# 参考

- [More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [Typescript - JSX](https://www.typescriptlang.org/docs/handbook/jsx.html#function-component)
- [What is the syntax for Typescript arrow functions with generics?](https://stackoverflow.com/questions/32308370/what-is-the-syntax-for-typescript-arrow-functions-with-generics)
- [How to use generics in props in React in a functional component?](https://stackoverflow.com/questions/53958028/how-to-use-generics-in-props-in-react-in-a-functional-component)
