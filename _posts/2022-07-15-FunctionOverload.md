---
layout: post
title: "TS思考 - 函数重载"
author: "Qizheng Han"
---

`TS思考`系列又与大家准时见面了～(其实是我没有别的系列可以写)

今天来看一看我一直搞不懂的，`函数重载`。

# 什么时候要用到函数重载呢？

其实我在看官网例子的时候，一头雾水

```ts
type User = {
    id: number,
    name: string,
    age: number,
    grades: number
}

const userList: User[] = [
    { id: 1, name: "小明", age: 20, grades: 89 },
    { id: 2, name: "小明", age: 20, grades: 89 },
    { id: 3, name: "小明", age: 20, grades: 89 },
    { id: 4, name: "小明", age: 20, grades: 89 }
]


function getUserInfo(value: number): User | undefined
function getUserInfo(value: string): User[]
function getUserInfo(value: number | string): User | User[] | undefined {
    if (typeof value === 'number') {
        return userList.find(item => item.id === value)
    } else {
        return userList.filter(item => item.grades === Number(value))
    }
}



function getUserInfo1(value:number|string) {
    if(typeof value==='number'){
        return userList.find(item=>item.id===value)
    }else{
        return userList.filter(item=>item.grades===Number(value))
    }
}

getUserInfo('1');
getUserInfo1('1')
```

先看看这个例子，我就想实现一个函数，他能做到这样的效果
- 输入数字，返回具体某个信息
- 输入字符串，返回一个数组

先做准备工作

```ts


```

这个时候肯定会想到`类型收紧`

```ts
function getUserInfo(value: number | string) {
    if (typeof value === 'number') {
        return userList.find(item => item.id === value)
    } else {
        return userList.filter(item => item.grades === Number(value))
    }
}
```

这个函数没有问题，能实现我们想要的效果，但是也有些美中不足

```ts
const result = getUserInfo(1);
```

![](/assets/img/2022-07-15/returnCombine.jpg)

`getUserInfo` 这个函数的返回值被推断成了 `User | User[] | undefined`。

抛开 `undefined` 不谈，我们其实在写代码的时候是知道不同输入类型对应的返回值类型的。

特别是像例子中这样拿着 `result` 返回值还要做后续操作的。

这个时候函数重载就派上用场了，我们可以定义两个函数签名，它们的输入将会决定它们的输出：

```ts
function getUserInfo(value: number): User | undefined
function getUserInfo(value: string): User[]
function getUserInfo(value: number | string) {
    if (typeof value === 'number') {
        return userList.find(item => item.id === value)
    } else {
        return userList.filter(item => item.grades === Number(value))
    }
}

const result = getUserInfo(1);
const result2 = getUserInfo('2');
```

![](/assets/img/2022-07-15/rightReturn.gif)

可以看到重载后，返回值的类型是可以明确推断出来的。

# 重载的顺序

TypeScript 重载的过程是，拿传入的参数和重载的方法签名列表中由上往下逐个匹配，直到找到一个完全匹配的函数签名，否则报错。所以推荐的做法是将签名更加具体的重载放上面，不那么具体的放后面。

```ts
interface ReadonlyArray<T> {
  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;
  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;
  reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;
}

const A = [1, '2', 3]
const str: string = A.reduce((str, a) => `${str} ${a.toString()}`, '')
```

![](/assets/img/2022-07-15/sortError.jpg)

我们来回顾一下为什么会报错：

- 因为调用 reduce 传入了第二个参数 `''` 作为 `initialValue`，所以直接跳过了第一个签名
- 走到第二个签名, A数组的类型是 `string | number`，所以 `T` 是 `string | number`
- 因为 `initialValue` 对应的范型是 `T`， 传入的实际类型是 `string`, `string` 类型是可以赋值给 `string | number` 类型的，所以第二个签名满足
- `T` 同样是 reduce 的返回值类型，所以推断出 reduce 返回 `string ｜ number` 类
- str 显示定义 `string` 类型。 返回值 `string ｜ number` 是不能直接赋值给 `string` 的，因为有可能是 `number`
- 报错
  
但是如果第三个签名 和 第二个签名交换顺序，就可以，来一起看一下交换后匹配过程

- 因为调用 reduce 传入了第二个参数 `''` 作为 `initialValue`，所以直接跳过了第一个签名
- 走到第二个签名, A数组的类型是 `string | number`，所以 `T` 是 `string | number`
- 因为 `initialValue` 对应的范型是 `U`， 且 `U` 是 reduce 的返回值类型，也就是说， `initialValue` 这个参数决定了 reduce 的返回值类型
- `initialValue` 是 `string` 类型， 所以 reduce 返回 `string` 与 str 的类型匹配


所以函数重载的签名顺序也有学问哈哈哈。

# 参考

- [Function Overloads](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)
- [Overloaded Functions](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#overloaded-functions)
