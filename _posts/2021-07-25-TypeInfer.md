---
layout: post
title: "TS思考篇——泛型与类型推断"
author: "Qizheng Han"
---

最近在写 Table 的过程中了解到一些关于TypeScript的`类型推断`的一些知识。 

> 前排提示：这篇博客包含大量的`TypeScript`报错截图，可能会引起不适。

# 类型和值

其实在最开始接触`TS`的时候，没有`区分`值和类型的概念。

因为最开始作为一个TS的初学者，下意识的会认为类型就是`number` / `string` / `boolean`，etc.

但是随后就会遇到很多这样的报错

![](/assets/img/2021-07-25/valueType1.png)

还有这样的报错...

![](/assets/img/2021-07-25/valueType2.png)

长话短说，在`TypeScript`的世界里，值和类型是需要根据不同的使用情况去判断的。

```typescript
1

true

{ a: 1 }

[1, 2, 3]
```

就像上述给定的这些例子，它们可以是value，也可以是type

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

而是想传达一种，在`TypeScript`中，我们需要`时刻具备类型意识`。

可能听起来很玄学，但一旦有了类型的意识，就会越来越觉得TypeScript really make sense.

# TypeScript !== JavaScript + type

往往在刚才我们说的`类型意识`之后，就会自然而然的认为`我只是在原来代码的基础上添加了类型`。

但其实不是的。

我个人的理解就是，如果把`TypeScript`理解成`JavaScript + type`，那么这里的`type`在脱离了`JavaScript`之后就什么都不是，它`没办法独立`出来。

**但`TypeScript`其实是一个具有``图林完备的编程语言**，大白话就是，想想之前的类型体操训练，写的每一行代码都是TS根本没JS啥事。

引用一张之前组里分享的图片，和一段话：

![](/assets/img/2021-07-25/tsjs.png)

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

![](/assets/img/2021-07-25/likeFunc.jpeg)

> 图片源自[你不知道的 TypeScript 泛型（万字长文，建议收藏）](https://segmentfault.com/a/1190000022993503)

把`Function`和`Generic(泛型)`放在一起比较就会发现，这俩东西不能说毫不相干，只能说一摸一样。

当我们把`泛型`当作是一个`函数`去理解(不太确定这样是不是好的，但是对我理解泛型很有帮助)就会容易很多。

```ts
type ToValueUnion<T> = T[keyof T];
```

这里给出一个简单的例子，`ToValueUnion`可以理解为函数的名称，`T`就是函数的参数，剩下就是函数体的相关操作。


**但是泛型真的不止于此**

# 我学到的一些泛型的使用场景

## Narrowing(紧化类型)

首先我想先解释一下什么是`Narrowing`。

假如现在有一个方法，是计算元素padding的

```ts
function padLeft(padding: number | string, input: string): string {
  // Do something but not important at here.
}
```

如果这个时候`padding`是`number`，那么将在函数体内，一切对padding的操作将会按照number来进行操作，

然后到了今天的重点，用泛型去做一些事情，比如，你想通过padding的个数来添加空格然后形成缩进

```ts
function padLeft(padding: number | string, input: string): string {
  // Do something but not important at here.
  return new Array(padding + 1).join(" ") + input
}
```
这时候就会出现报错

![](/assets/img/2021-07-25/narrowing1.png)

TS会产生一条警告，提醒你`+`运算符如果将一个`number`和一个`number | string`类型的变量相加可能会得到你不期望的结果。

这个时候就说明，我定义的padding这个类型`不够紧`。

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
  }
  return padding + input;
}
```

如果这个时候要是我们主动的去`narrow`一下，让每一个分支更细化，应对的情况更清晰，这个时候就不会有问题。

而这个将一个更宽泛的范围变窄，变得更明确的过程就是`narrowing`。

## 给自己的泛型加一些限制

> [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)

比如现在有这样一种情况

```ts
function test<Type>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
```
我希望这个函数的参数

这个函数的泛型接受一个`Type`，按照这个函数的功能来说，`至少`我是需要它是数组类型，至于是什么类型的数组，可能不去关心。

但现在，由于我们没有对泛型做任何的限制，它`不光可能是数组`，也可能是`number` / `string`...

这时候就要对泛型做限制，其实我理解也是一种`narrowing`.

```ts
function test<Type extends Array<any>>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
```

在我们限制了Type必须是Array类型时，一切都正常了。

## 重头戏：组件中的类型反推断

友情提示接下来的内容可能会让你有这种感觉

![](/assets/img/2021-07-25/difficult.png)

其实这里主要想讲述的就是在写组件的过程中，经常`会暴露出一些回调函数`来供组件使用者去使用。

但有的时候回调函数的参数类型没有给出对应的类型，而是any之类的，这样组件在使用的过程中其实就会`不好用`。

我来举一个非常具体的例子

```tsx
{% raw %}
// AddUser.tsx
import React from 'react';
import './test.css';

export interface User {
  name: string;
  age: number | string;
}

export interface NormalUser {
  name: string;
  age: number | string;
  nickName: string;
}

interface AppProps {
  users: Array<User>
  onChange: (age: string | number) => void;
}


class AddUser extends React.Component<AppProps> {
  state = {
    count: 0,
  }

  _handleAddUser() {
    const { users } = this.props;
    const { count } = this.state;
    this.setState({ count: count + 1 });
    this.props.onChange(users[count + 1 % 2].age);
  }

  render() {
    return <button className="button" onClick={this._handleAddUser}>Add User</button>;
  }
}

export default AddUser;
{% endraw %}
```

然后来使用一下这个组件

```tsx
{% raw %}
import React from 'react';
import { User, NormalUser }, AddUser from './AddUser';
import './test.css';

const users: Array<User> = [
  { name: 'Adam', age: 27 },
  { name: 'Adam', age: '38岁' },
]

class App extends React.Component {
  _handleAddUser(user: User | NormalUser) {
    // something you wanna do but not comfortable.
  }

  render() {
    return (
      <div className="container">
        <AddUser users={users} onChange={this._handleAddUser} />
      </div>
    );
  }
}
export default App;
{% endraw %}
```

这个时候我更希望`onChange`暴露出来以后，参数应该是跟随我所传的参数来给出更紧的类型

这个时候就要引入一个概念，叫做`泛型组件`

## 泛型组件

```tsx
{% raw %}
// AddUser
import React from 'react';
import './test.css';

export interface User {
  name: string;
  age: number | string;
}

export interface NormalUser {
  name: string;
  age: number | string;
  nickName: string;
}

interface AppProps<U extends User> {
  users: Array<U>
  onChange: (user: U) => void;
}


class AddUser<U extends User> extends React.Component<AppProps<U>> {
  state = {
    count: 0,
  }

  _handleAddUser() {
    const { users } = this.props;
    const { count } = this.state;
    this.setState({ count: count + 1 });
    this.props.onChange(users[count + 1 % 2]);
  }

  render() {
    return <button className="button" onClick={this._handleAddUser}>Add User</button>;
  }
}

export default AddUser;
{% endraw %}
```

```tsx
{% raw %}
import React from 'react';
import { User, NormalUser } from './AddUser';
import './test.css';
import AddUser from './AddUser';

const users: Array<User> = [
  { name: 'Adam', age: 27 },
  { name: 'Adam', age: '38岁' },
]

const normalUsers: Array<NormalUser> = [
  { name: 'Adam', age: 27, nickName: 'aaa' },
  { name: 'Adam', age: '38岁', nickName: 'bbb' },
]

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <AddUser users={users} onChange={(user) => console.log(user.name)} />
        <AddUser users={normalUsers} onChange={(user) => console.log(user.nickName)} />
      </div>
    );
  }
}

export default App;
{% endraw %}
```
这么写就是让TypeScript自己去推断传入的类型，然后回调函数就可以根据传入的类型来推断出回调函数参数的类型。

![](/assets/img/2021-07-25/infer1.png)
![](/assets/img/2021-07-25/infer2.png)

### 到底是怎么做到的呢？

最开始让我迷惑的是

我确实让组件变成了`泛型组件`，泛型接受一个参数`U`，甚至后续会有更多的参数传入泛型之中。

那这些参数是怎么关联上回调的参数类型的呢？

其实远离特别特别简单

就是我们把传入的参数类型`“赋值”`给了某一个`prop`当作它的类型，这样就建立了关联

TypeScript会根据传入泛型的类型就开始推断，直到顺着prop在组件中的应用路径，走到了回到函数的参数类型这里。自然是可以推断出来。


# 参考

- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [你不知道的 TypeScript 泛型（万字长文，建议收藏）](https://segmentfault.com/a/1190000022993503)
- 