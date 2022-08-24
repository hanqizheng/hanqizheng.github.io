---
layout: post
title: "TS思考 - 类遗产"
author: "Qizheng Han"
---

`类遗产` 不是什么高级的词汇，所有 TS 类相关的都在这里了～

# implement

`implement` 可以用来检测一个类是否符合一个具体的 `interface` 的定义。

```ts
interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
 
class Ball implements Pingable {
  pong() {
    console.log("pong!");
  }
}
```

![](/assets/img/2022-08-30/implementError.jpg)

可以看到 `Ball` 这个类因为没有实现 `ping` 方法而被发现然后揭发。

那么 type 定义的类型可以被 implement 吗？

答案是 可以的！

## implement 只检查不做其他

```ts
interface Checkable {
  check(name: string): boolean;
}
 
class NameChecker implements Checkable {
  // Parameter 's' implicitly has an 'any' type.
  check(s) {
    // 但是这里没有错误
    return s.toLowercse() === "ok";
  }
}
```
TS 会检测 s 作为参数没有给具体的类型。而不会因为 类`NameChecker` implement `Checkable` 就会自动帮 check 函数的参数赋予类型。

implement 也不会帮助自动补全属性, 比如

```ts
interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
// Property 'y' does not exist on type 'C'.
c.y = 10;
```

y 属性没有因为 类C implement A 就自动生成。

# extends

`extends` 可能 更像我们平时理解的 `继承`。

会继承 基类 所有的属性 且可以自己定义额外的属性。

```ts
class Animal {
  move() {
    console.log("Moving along!");
  }
}
 
class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}
 
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
```

如果不遵循，则会报错

```ts
class Base {
  greet() {
    console.log("Hello, world!");
  }
}
 
class Derived extends Base {
  // Make this parameter required
  greet(name: string) {
    // Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'.
    // Type '(name: string) => void' is not assignable to type '() => void'.
    console.log(`Hello, ${name.toUpperCase()}`);
  }
}
```


# 参考

- [Class Heritage](https://www.typescriptlang.org/docs/handbook/2/classes.html#class-heritage)
- 