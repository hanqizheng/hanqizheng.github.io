---
layout: post
title: "用Webpack把2020打包"
author: "Qizheng Han"
---

芜湖！！！这是2020年的最后一篇博客啦！双dan快乐～🎄🎄。

这是一篇及其入门级别的关于webpack的博客，所以写起来会把很基础的细节也都写一下，争取每一步都弄明白为什么，一步一步来。也确实该补补这一块的知识盲区了...不要带到新的一年哈哈哈。

> 因为是初学，文中有错误欢迎指正！

# 我真的很想知道`webpack到底做了些什么`？

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

上面说到webpack是一个`bundler`，*为什么需要webpack*这个问题就变成了*为什么我需要用bundler*。

写一个`hello, world!`可能只需要几行代码，但是如果我的功能很复杂，这时候需要的JS代码可能有500行。这时候还是勉强笑一笑`没事，500行代码可以放在一个文件里`(微笑.jpg)。

没想到写的代码有很多小伙伴都认真研读，自己做出来的东西真的有很多用户了。但是期间发现了许多bug，还有很多人提出了一些他们想要的feature。

修修补补，又添加更多的功能。眼看着500行的代码变成1w行了。这时候在开发的时候突然大喊了一句`卧槽...`

可能找一个变量要翻2000行的代码，一个函数是做什么的都要研究好久，这时候终于忍不住了，`要把这么大的一个文件拆分一下，根据功能拆分成若干小文件。`

`code spliting`的过程让我感到舒适，原来我的代码可以变得这么整洁有序，强迫症被治愈。

**但这个时候要值得注意的是，我还没有模块化这一说。**我只是单纯的拆分了自己的代码。那些被拆分好的一个个`.js`文件该以一种什么顺序去被引用到`最终的某一个文件(我就以一个总的html引用其他拆分好的js为想象案例)`呢？



## 找点东西来打包

```
$ mkdir webpack-test

$ cd webpack-test

$ npm init

$ npm install webpack webpack-cli --save-dev
```
> 注意 这里的webpack还是标记好版本，4.44.2

建一个空项目，初始化一下，一路默认选项这样就有了一个空项目了。而且要用到webpack，所以自然先要install一下。

`项目空空如也`，我们随便给他塞点东西，有东西才能打包。

```
// 新建一个src
|- other folder
|- ...
|- src
    |
    |- page1
    |    |- index.js
    |- page2
    |    |-index.js
    |- index.js
```
新建一个`src`文件夹，解构是这个样子。我多建两个`page`文件夹是后续会用到。

随便给这些文件写点东西。

写到这里突然想写`React`，毕竟来点能看到的会更直观，所以我们得把React需要的东西再准备一下。

```
$ npm install react react-dom --save
```

然后我们知道React最后会把对应的`jsx变成虚拟DOM树`，最后再插入到真的DOM树中，也就是根结点`root`里。所以我们得有一个`html`放这棵`DOM树`。

我直接复制的

```html
<!-- public/index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

目录结构变成

```
|- ...
|- src
|   |- ...
|
|- public
    |- index.html
```

然后我们需要

```jsx
// src/index.js

{% raw %}
import React from 'react';
import ReactDOM from 'react-dom';

import Page1 from './page1/index.jsx';

ReactDOM.render(
  <Page1 />,
  document.getElementById('root') 
);
{% endraw %}
```


既然要渲染`Page1`，我们去往`Page1`中写点东西。

```jsx
// src/page1/index.jsx

{% raw %}
import React from 'react';

const Page1 = () => {
  return (
    <div>
      Page 1
    </div>
  )
}

export default Page1;
{% endraw %}
```

这个时候可以看到项目已经跑起来了

![](/assets/img/2020-12-28/init.jpg)

## 迫不及待的想打包一下

```
$ webpack --mode=development
```

`--mode=development`是为了能更好的看到打包后的代码，但是我却看到了一片红光🤦‍♂️...

![](/assets/img/2020-12-28/webpackError.jpg)

`webpack`说它不认识你这种奇怪的写法(我是指JSX)。`Yuo may need an apropriate loader to handle this file.`


## 我需要`loader`

需要的第一个`loader`就是`babel-loader`， Babel 是一个 JS 编译器。可以在后续的博客中一起学习一下(我已经欠了多少篇了哈哈哈哈哈哈)。
```
$ npm install babel-loader --save-dev

// 还需要安装一下babel，光安装babel对应的loader显然是不行的，真正编译jsx的代码还是要babel去做

$ npm install @babel/core @babel/preset-env @babel/plugin-transform-runtime -save-dev

$ npm install @babel/runtime @babel/runtime-corejs3
```

然后去创建一个webpack的配置文件

```
// 创建一个webpack的配置文件

|- ...
|- src
|   |- ...
|
|- public
|   |- ...
|
|- webpackc.config.js
```

这个配置文件就是配置webpack最重要的几个概念的文件，这里我们先配置loader。

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/ //排除 node_modules 目录
      }
    ]
  }
}
```

这个时候配置好，迫不及待的敲下`$ webpack --mode=development`，然而...

![](/assets/img/2020-12-28/stillError.jpg)









# 参考

- [Webpack — why and what](https://medium.com/js-imaginea/webpack-why-and-what-4948433cc2d3)
- [Webpack: When To Use And Why](https://blog.andrewray.me/webpack-when-to-use-and-why/)
- [Why webpack](https://webpack.js.org/concepts/why-webpack/)
- [Webpack Concepts](https://webpack.js.org/concepts/)
- [带你深度解锁Webpack系列(基础篇)](https://juejin.cn/post/6844904079219490830)
- [带你深度解锁Webpack系列(进阶篇)](https://juejin.cn/post/6844904084927938567)
- [带你深度解锁Webpack系列(优化篇)](https://juejin.cn/post/6844904093463347208)
- [不容错过的 Babel7 知识](https://juejin.cn/post/6844904008679686152)
