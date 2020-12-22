---
layout: post
title: "用Webpack把2020打包"
author: "Qizheng Han"
---

芜湖！！！这是2020年的最后一篇博客啦！双dan快乐～🎄🎄。

这是一篇及其入门级别的关于webpack的博客，也该补补这一块的知识盲区了...不要带到新的一年哈哈哈。

# 我真的很想知道webpack到底做了些什么？

你问我听说过webpack吗？我肯定会回答：“啊webpack，听说过，就是那个`打包用的`。“

其实内心慌的一p，`打包？`打什么包？什么打包？为什么要打包，打包意义何在？！？！

## 要从什么是webpack说起


> webpack官网给出的定义:
> 
> webpack is a `static module bundler` for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

大概的意思：

webpack 是一个用于现代 JavaScript 应用程序的`静态模块打包工具`。当 webpack 处理应用程序时，它会在内部构建一个 依赖图(dependency graph)，此依赖图对应映射到项目所需的每个模块，并生成一个或多个 bundle。

能从这个定义中得知道两个信息
- 又来了。。。webpack是一个`静态模块打包工具`。
- 会在处理时构建一个`依赖图(dependency graph)`。

但是貌似又回到了那个最初的问题？为什么需要webpack去打包这些静态资源？

## 为什么需要webpack去打包一些东西？？






