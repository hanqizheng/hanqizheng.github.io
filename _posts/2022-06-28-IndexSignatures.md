---
layout: post
title: "TS思考 - 索引签名"
author: "Qizheng Han"
---

久违的`TS思考`系列又来了。

今天带来的是`索引签名(Index Signatures)`。


# 什么是索引签名？

// 基本概念


// 签名的键只能是一个 string`、number或 symbol`。其他类型是不允许的。




# Record<Keys, Type>

```ts
const object1: Record<string, string> = { prop: 'Value' }; // OK
const object2: { [key: string]: string } = { prop: 'Value' }; // OK
```


```ts
interface C {
    [key: 'a' | 'b']: number;
}
```
![](/assets/img/2022-06-25/keyError.png)



```ts
type A = Record<string, string>;

interface B {
    b: string;
}

function test(arg: A) {
    console.log(arg);
}

const testArg: B = {
    b: '1',
}

test(testArg);
```

![](/assets/img/2022-06-25/signatureError.png)

# 映射类型







# 参考

- [Index Signatures](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)