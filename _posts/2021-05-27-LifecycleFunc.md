---
layout: post
title: "对类组件生命周期函数的思考"
author: "Qizheng Han"
---

新的需求是要用`Class Component`来写，说实话高举`hooks`真香旗帜的我已经有很长一段时间没有写过`Class Component`了。 

[React v16.3](https://github.com/facebook/react/blob/master/CHANGELOG.md#1630-march-29-2018)之后有几个生命周期被标记为`unsafe`，还添加了两个新的生命周期函数。 

为什么要这么做呢？ 

