---
layout: post
title: "TS思考 - 逆变与协变"
author: "Qizheng Han"
---

TypeScript思考篇又来了 

之前听到同事分享`逆变与协变`，自己很感兴趣但一直没有去研究，今天就来康康～


# extends

开始前可能要准备一下基础知识。`extends`关键字在TS中非常常用，它有如下几个功能

- 继承类/类型
- 约束类型
- 分配律

`extends`在TS中不光可以表示`类`的继承和拓展，还可以表示`类型`的继承和拓展。

```ts
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit {
  name?: string;
  unit: string; // <--- 不同点
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
```

在日常的开发中很容易遇到这样的场景，我们有两个类型，但是大部分都是相同的属性，这个时候这么写是可以的，但是就很蠢。

有很多方法可以去简化这种写法。这时候引入一个插曲

## 交叉类型和继承有什么区别

```ts
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}
```

通过extends的方式可以继承某个类型的所有属性，新的类型只需要写自己`特有`的属性即可。

```ts
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

type AddressWithUnit = BasicAddress & {
  unit: string;
}
```
通过`&`可以做到同样的效果。

那么问题来了，这两种方式都能实现相同的效果，有什么区别吗？通过一个简单的例子来看看


现在有这样一个例子，类型`A`和类型`B`都有一个属性`test`

```ts
interface A {
    test: string;
}

interface B {
    test: number;
}
```

如果我用上述的`extends继承`方式，会出现这个错误

![](/assets/img/2022-01-31/extendsA.jpg)

**可以理解为继承方式，子类型只是能`使用`父类型的内容，而不能改变**

那么换成`交叉类型&`的方式来实现类型B

看似没什么异常

![](/assets/img/2022-01-31/type&B.jpg)

那么来定义一个变量看看

![](/assets/img/2022-01-31/typeBError.jpg)

这个时候出现问题了

**交叉类型可以理解为将两个类型做了交集，而属性test两个类型都有，string与number的交集就是空集(never)**

那么`function`呢？


```ts
interface A {
    test: string;
    func: (a: boolean) => number;
}

interface B extends A {
    func: (a: boolean) => string
}
```
![](/assets/img/2022-01-31/funcExtends.jpg)

是一样的问题，同样会被TS认为是修改了父类型的内容

```ts
interface A {
    test: string;
    func: (a: boolean) => number;
}


type B  = A & {
    test: number;
    func: (a: boolean) => string
}
```
![](/assets/img/2022-01-31/typeBFunc.jpg)

联合类型的结果也是一样的，会将类型A和类型B的`func`属性类型`取交集`


> 结论：
>
> extends是一种不允许改动的效果，盲猜因为继承本身就是有`层级关系`的，继承类型本身无法去左右父类型
>
> 而交叉类型更像是一种`平级关系`，两个类型的内容`取交集`就是新类型的结果。

# 言归正传，什么是`子类型`

`子类型`大概有两种形式

```ts 
interface Animal {
  age: number
}

interface Dog extends Animal {
  bark(): void
}
```

`Dog`就是`Animal`的子类型，因为`Dog`是继承自`Animal`，这个很好理解

另一种是

```ts
type A = 'a' | 'b';

type B = 'a' | 'b' | 'c';
```

但是这种，谁是谁的子类型呢？

答案是`B`是`A`的子类型。为什么呢？

用大白话解释一下就是，`B要比A松`，B比A多了一个`c`，就说明能接受比A更多的内容，所以更松。

那么可能又会出现一个疑问，那继承的列子里，Dog明显比Animal还要多个`bark`为什么反而是子类型？

因为`Dog`中多出来的属性，是一种限制，`让Dog更紧`的限制。

**所以判断哪个是子类型，就是比较谁更松，谁更紧，更紧的就是**

# 可赋值性

`子类型`的概念引入非常的重要，因为`协变`和`逆变`本身就是存在于`子类型(subType)`和`超类型(superType)`(就是我上面一直说的父类型，可能不够准确)之间。

现在有个例子

```ts
interface Animal {
  age: number
}

interface Dog extends Animal {
  bark(): void
}
```

如果用`子类型(Dog)`的变量赋值给`超类型(Animal)`的


# TS类型系统

在一些其他编程语言里面，使用的是名义类型 `Nominal type`，比如我们在 `Java` 中定义了一个`class Parent`，在语言运行时就是有这个`Parent`的类型。因此如果有一个继承自`Parent`的`Child`类型，则`Child`类型和`Parent`就是类型兼容的。但是如果`两个不同的class`，即使他们`内部结构完全一样`，他俩也是`完全不同的两个类型`。

但是我们知道 `JavaScript` 中的复杂数据类型Object是一种`结构化的类型`。哪怕使用了 ES6的 class 语法糖，创建的类型本质上还是Object，因此 `TypeScrip`t 使用的`也是一种结构化的类型`检查系统

因此在 TypeScript 中，判断两个类型是否兼容，`只需要`判断他们的“结构”是否一致，也就是说结构属性名和类型是否一致。而不需要关心他们的“名字”是否相同。





# 参考

- [Extending Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types)
- [extends Clauses](https://www.typescriptlang.org/docs/handbook/2/classes.html#extends-clauses)
- [TypeScript 中的子类型、逆变、协变是什么？](https://github.com/sl1673495/blogs/issues/54)
- [协变与逆变](https://zh.wikipedia.org/wiki/%E5%8D%8F%E5%8F%98%E4%B8%8E%E9%80%86%E5%8F%98)