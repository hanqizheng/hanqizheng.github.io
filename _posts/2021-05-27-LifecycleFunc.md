---
layout: post
title: "对类组件生命周期函数的思考"
author: "Qizheng Han"
---

新的需求是要用`Class Component`来写，说实话高举`hooks`真香旗帜的我已经有很长一段时间没有写过`Class Component`了。

[React v16.3](https://github.com/facebook/react/blob/master/CHANGELOG.md#1630-march-29-2018)之后有几个生命周期被标记为`unsafe`，还添加了两个新的生命周期函数。 

为什么有的生命周期被标记为了`UNSAFE`?

新的生命周期又与之前有什么不同？

今天就主题就来研究一下`Class Component`的新旧生命周期。

# 被标记为UNSAFE的三个生命周期

在`React v16`之后，将3个生命周期

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

标记为了`UNSAFE`也就是`不安全的`。最先让我注意到这一操作是跑起项目后的大片金黄色的...warning

![](/assets/img/2021-05-25/warning.jpg)

## UNSAFE_componentWillMount

## UNSAFE_componentWillReceiveProps

## UNSAFE_componentWillUpdate

# 新给出的两个生命周期

## getDerivedStateFromProps

## getSnapshotBeforeUpdate

# 一些额外的思考

其实看到很多`生命周期更迭`的文章中，都有说到了是为了防止使用这些废弃的生命周期会因`React 异步渲染`而带来很多其他问题。

## Concurrent Mode

## 在下一盘大棋


# 参考

- [ECMAScript 6 入门](https://es6.ruanyifeng.com/)
- [Components and Props](https://reactjs.org/docs/components-and-props.html)
- [Update on Async Rendering](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html) <-- maybe this is the reason.
- [You Probably Don't Need Derived State](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)
- [React concurrent Mode](https://reactjs.org/docs/concurrent-mode-intro.htmlhttps://reactjs.org/docs/concurrent-mode-intro.html)
- [Reconciliation - Dan's blog](https://overreacted.io/react-as-a-ui-runtime/#reconciliation)
- [Reconciliation - Official Document](https://reactjs.org/docs/reconciliation.html)


