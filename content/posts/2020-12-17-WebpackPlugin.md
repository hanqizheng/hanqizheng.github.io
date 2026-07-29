---
title: 用Webpack把2020打包
slug: WebpackPlugin
author: Qizheng Han
publishedAt: 2020-12-17
status: published
excerpt: 芜湖！！！这是2020年的最后一篇博客啦！双dan快乐～ 🎄🎄。 这是一篇及其入门级别的关于webpack的博客，
  所以写起来会把很基础的细节也都写一下，争取每一步都弄明白为什么，一步一步来。也确实该补补这一块的知识盲区了...不要带到新的一年哈哈哈。 >
  因为是初学，文中有错误欢迎指正！ 我真的很想知道`webp
---

芜湖！！！这是2020年的最后一篇博客啦！双dan快乐～ 🎄🎄。 

这是一篇及其入门级别的关于webpack的博客， 所以写起来会把很基础的细节也都写一下，争取每一步都弄明白为什么，一步一步来。也确实该补补这一块的知识盲区了...不要带到新的一年哈哈哈。 

> 因为是初学，文中有错误欢迎指正！

## 我真的很想知道`webpack到底做了些什么`？

你问我听说过 webpack 吗？我肯定会回答：“啊 webpack，听说过，就是那个`打包用的`。“

其实内心慌的一 p，`打包？`打什么包？什么打包？为什么要打包，打包意义何在？！？！

### 要从什么是 webpack 说起

> webpack 官网给出的定义:
>
> webpack is a `static module bundler` for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

大概的意思：

webpack 是一个用于现代 JavaScript 应用程序的`静态模块打包工具`。当 webpack 处理应用程序时，它会在内部构建一个 依赖图(dependency graph)，此依赖图对应映射到项目所需的每个模块，并生成一个或多个 bundle。

能从这个定义中得知道两个信息

- 又来了。。。webpack 是一个`静态模块打包工具`。
- 会在处理时构建一个`依赖图(dependency graph)`。

但是貌似又回到了那个最初的问题？为什么需要 webpack 去打包这些静态资源？

### 为什么需要 webpack 去打包一些东西？？

上面说到 webpack 是一个`bundler`，*为什么需要 webpack*这个问题就变成了*为什么我需要用 bundler*。

写一个`hello, world!`可能只需要几行代码，但是如果我的功能很复杂，这时候需要的 JS 代码可能有 500 行。这时候还是勉强笑一笑`没事，500行代码可以放在一个文件里`(微笑.jpg)。

没想到写的代码有很多小伙伴都认真研读，自己做出来的东西真的有很多用户了。但是期间发现了许多 bug，还有很多人提出了一些他们想要的 feature。

修修补补，又添加更多的功能。眼看着 500 行的代码变成 1w 行了。这时候在开发的时候突然大喊了一句`卧槽...`

可能找一个变量要翻 2000 行的代码，一个函数是做什么的都要研究好久，这时候终于忍不住了，`要把这么大的一个文件拆分一下，根据功能拆分成若干小文件。`

`code spliting`的过程让我感到舒适，原来我的代码可以变得这么整洁有序，强迫症被治愈。

**但这个时候要值得注意的是，我还没有模块化这一说。**我只是单纯的拆分了自己的代码。那些被拆分好的一个个`.js`文件该以一种什么顺序去被引用到`最终的某一个文件(我就以一个总的html引用其他拆分好的js为想象案例)`呢？

比如这里我以一个html重的`<script></script>`标签包含的`js代码`来举例，当我们有2000行代码的时候，我们发现`不能再把代码对在一个文件`。这时候我们开始做`code spliting`，然后分成`20个js文件`。

这个时候就遇到问题了。我们要在最终的`index.html`中写`20个<script></script>`来包含这些被代码分割后的`js`。但是我们`该怎么去维护`这些代码之间的`执行顺序`？

保证谁先执行，谁后执行是一件很关键的事。

这时候可能会说`那我按顺序写好这20个script标签`不就好了吗？

但是我要是日后再需要扩展代码呢？我还需要去`考虑新代码和其他已有代码的相互顺序`。是一个非常麻烦且不好维护的事情。

#### 要是我们可以通过一种依赖关系，告诉我某个文件依赖着另外哪些文件，这样我就可以知道引用的顺序了。

`This is where webpack steps in.`

### ES6 or CommonJS 带来的转折

ES6的`import`和CommonJS的`require`带来了模块化的概念，也随之有了我们想要的那种文件与文件之间的引用关系。

webpackl就借助他们来生成依赖关系。随之将他们打包到一起还能保证其执行的顺序。

### 总结一下

代码太多了，我们需要把代码按照某种约定分割，这样好扩展也好维护，但是写好的代码我们其实希望他最终是整合在一起的，这时候我们`需要把一个项目打包`，但是我们想打包之后的文件还能确保被分割的代码按照规定的顺序执行(或者说正常执行)。而webpack可以根据`模块化`的规定来生成`dependency graph`来确保这一点。

### 接下来找点东西来打包

```
$ mkdir webpack-test

$ cd webpack-test

$ npm init

$ npm install webpack webpack-cli --save-dev
```

> 注意 这里的 webpack 还是标记好版本，4.44.2

建一个空项目，初始化一下，一路默认选项这样就有了一个空项目了。而且要用到 webpack，所以自然先要 install 一下。

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

写到这里突然想写`React`，毕竟来点能看到的会更直观，所以我们得把 React 需要的东西再准备一下。

```
$ npm install react react-dom --save
```

然后我们知道 React 最后会把对应的`jsx变成虚拟DOM树`，最后再插入到真的 DOM 树中，也就是根结点`root`里。所以我们得有一个`html`放这棵`DOM树`。

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

### 迫不及待的想打包一下

```
$ webpack --mode=development
```

`--mode=development`是为了能更好的看到打包后的代码，但是我却看到了一片红光 🤦‍♂️...

![](/assets/img/2020-12-28/webpackError.jpg)

`webpack`说它不认识你这种奇怪的写法(我是指 JSX)。`Yuo may need an apropriate loader to handle this file.`

### 我需要`loader`

需要的第一个`loader`就是`babel-loader`， Babel 是一个 JS 编译器。可以在后续的博客中一起学习一下(我已经欠了多少篇了哈哈哈哈哈哈)。

```
$ npm install babel-loader --save-dev

// 还需要安装一下babel，光安装babel对应的loader显然是不行的，真正编译jsx的代码还是要babel去做

$ npm install @babel/core @babel/preset-env @babel/plugin-transform-runtime -save-dev

$ npm install @babel/runtime @babel/runtime-corejs3
```

然后去创建一个 webpack 的配置文件

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

这个配置文件就是配置 webpack 最重要的几个概念的文件，这里我们先配置 loader。

```js
module.exports = {
  // mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}
```

这个时候配置好，迫不及待的敲下`$ webpack --mode=development`，然而...

![](/assets/img/2020-12-28/stillError.jpg)

这是因为，我配置了`webpack`对应`babel`的`loader`，但是 babel 本身也是有相关配置的，我得配置一下 babel，`让babel能认识jsx`。

> 再次声明，日后来一篇 babel 的博客。

```js
// .babelrc

{ "presets": ["@babel/react", "@babel/env"] }
```

> 说实话我不知道为什么要配置这么一句话，期待日后的babel学习。强颜欢笑.jpg

这个时候`再来build`一次。就可以看到是成功的了

![](/assets/img/2020-12-28/success.jpg)

### 有点不对劲儿？

我们之前说，想把自己的项目`打包成一个文件`，我们确实把自己所有的js都打包好了。但是这个js是要用在最后的`那个html`中的(分割了好多个js文件，最终打包成一个js在html中用script标签引用)。我们还需要来一个`html`啊！

### Loader说完说说Plugin

这个时候我们已经打包好`bundle.js`了，但是每次打包都有`唯一的hash`，每次我们都去自己写的html中修改引用的`js文件的名字`也太傻了，这时候就可以用`plugin`来帮我们解决这个问题。

```
$ npm install html-webpack-plugin --save-dev
```

然后我们去webpack的配置文件中添加plugin相关的配置。

```js
const path = require('path');
//首先引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',
  // other config...
  plugins: [
    //数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html', //打包后的文件名
      minify: {
        removeAttributeQuotes: false, //是否删除属性的双引号
        collapseWhitespace: false, //是否折叠空白
      },
      // hash: true //是否加上hash，默认是 false
    })
  ]
}
```

再来打包一遍，可以看到`dist`下多了一个`index.html`。

![](/assets/img/2020-12-28/distIndex.jpg)

### html有了可是咋看效果啊？

我们在最开始，`没有webpack`的时候，运行`npm run start`其实就是运行`react-scripts start`来启动项目查看效果。

现在我们把自己写的demo已经通过webpack打包好了，只有一个js和一个html。但是我们要怎么查看打包后的代码效果呢？`最好和之前效果一样`。

```json
"scripts": {
  // ...
  "dev": "NODE_ENV=development webpack serve",
},
```

之前还装了`webpack-dev-server`然而发现`4.x`版本貌似不需要，直接`webpack serve`即可。

![](/assets/img/2020-12-28/serve.jpg)
![](/assets/img/2020-12-28/servePage.jpg)

可以看到效果和之前一样。
### 说好的要把2020打包的 📦

哈哈哈哈啊哈哈记得这么一段对话

> 不了解Webpack
>
> 写一个plugin就差不多了解了。

所以我们接下来就写一个`能把2020打包的Plugin`。这个plugin的功能很简单很简单。

我对`Plugin`的理解就是:

**Plugin就是一个function，一个原型上有一个apply方法的function。**

我们使用Plugin`就是new一个对应的对象`，webpack会自动调用对象的`apply()`方法。

所以我们先来找个地方写一个最简单的`符合这个规则的class`。

```
// 创建一个plugin

|- ...
|- src
|   |- ...
|
|- public
|   |- ...
|
|- plugins
    |
    |- Pack2020Plugin.js
```

```js
// plugins/Pack2020Plugin.js

class Pack2020Plugin {
  apply() {
      console.log('I want to pack 2020!')
  }
}
module.exports = Pack2020Plugin;

// or

function Pack2020Plugin () {}

Pack2020Plugin.prototype.apply = function () {
  console.log('I want to pack 2020!')
}
module.exports = Pack2020Plugin;
```

### compiler & compilation

`compiler`就是一个`webpack的完整配置`以`对象形式`作为`参数`传入`plugin`。

`compilation`我理解是一个`回调函数`...

### 先来看看效果

```js
module.exports = {
  // mode: 'development',
  // ...
  plugins: [
    //数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html', //打包后的文件名
      minify: {
        removeAttributeQuotes: false, //是否删除属性的双引号
        collapseWhitespace: false, //是否折叠空白
      },
      // hash: true //是否加上hash，默认是 false
    }),
    new Pack2020Plugin()
  ]
}
// 。。。
```

运行了`npm run dev`之后可以看到命令行中多了一行

![](/assets/img/2020-12-28/pluginInit.jpg)

看来我的plugin起作用了。

接下来实现一个`打包生成一个2021许愿txt，里面记录了我的美好祝福。`

```js
class Pack2020Plugin {
  apply(compiler) {
    // emit 钩子是生成资源到 output 目录之前执行，emit 是一个异步串行钩子，需要用 tapAsync 来注册
    compiler.hooks.emit.tapAsync('Pack2020Plugin', (compilation, callback) => {
      // 回调方式注册异步钩子
      const hopeOf2021 = '把2020打包，2021，要努力加油！！'
      // compilation存放了这次打包的所有内容
      // 所有待生成的文件都在它的 assets 属性上
      compilation.assets['hope.txt'] = {
        // 添加copyright.txt
        source: function () {
          return hopeOf2021
        },
        size: function () {
          // 文件大小
          return hopeOf2021.length
        },
      }
      callback() // 必须调用
    })
  }
}

module.exports = Pack2020Plugin;
```

就是非常简单的，获取到`生成资源到 output 之前的时机`，然后执行。

这时候`npm run build`

![](/assets/img/2020-12-28/hope.jpg)

我甚至可以通过`config`中的plugin`传递参数`进去。

```js
module.exports = {
  // mode: 'development',
  // ...
  plugins: [
    //数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html', //打包后的文件名
      minify: {
        removeAttributeQuotes: false, //是否删除属性的双引号
        collapseWhitespace: false, //是否折叠空白
      },
      // hash: true //是否加上hash，默认是 false
    }),
    new Pack2020Plugin({ name: '韩启正' })
  ]
}
```

然后在`Plugin内部接住参数`。

```js
// 改变Pac2020Plugin内部代码
{% raw %}
constructor(option) {
  this.name = option.name;
}

const hopeOf2021 = `把2020打包，2021，${this.name}要努力加油！！`
{% endraw %}
```

然后再`build`一次。

![](/assets/img/2020-12-28/end.jpg)

这样就是一个非常非常简单的Plugin了。`当然这只是非常入门的`。想要了解Plugin还是要继续学习webpack。

### 插曲

[项目地址](https://github.com/hanqizheng/WebpackDemo)

2020也是满满收获的一年，2020年记即将发布～ 

ps: 其实就是我还没写完....



## 参考

- [Webpack — why and what](https://medium.com/js-imaginea/webpack-why-and-what-4948433cc2d3)
- [Webpack: When To Use And Why](https://blog.andrewray.me/webpack-when-to-use-and-why/)
- [Why webpack](https://webpack.js.org/concepts/why-webpack/)
- [Webpack Concepts](https://webpack.js.org/concepts/)
- [带你深度解锁 Webpack 系列(基础篇)](https://juejin.cn/post/6844904079219490830)
- [带你深度解锁 Webpack 系列(进阶篇)](https://juejin.cn/post/6844904084927938567)
- [带你深度解锁 Webpack 系列(优化篇)](https://juejin.cn/post/6844904093463347208)
- [不容错过的 Babel7 知识](https://juejin.cn/post/6844904008679686152)
- [如何编写一个 Webpack Plugin](https://juejin.cn/post/6884866016565084173)
