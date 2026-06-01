---
title: 来自Serverless的一句hello, world!
slug: Serverless
author: Qizheng Han
publishedAt: 2020-11-15
status: published
excerpt: Severless的相关内容也是一个自己博客心愿单中的老钉子户了。
  但是一直迟迟没有写是因为自己一直不是很明白我用Serverless能做些什么， 就算我知道了它的概念。
  而且意识到Serverless可能还需要一定的Node技术栈， 又想起了曾经实习期的自己(当时实习写Node)，对Node浅入浅出的经历。🤦‍♂️
---

Severless的相关内容也是一个自己博客心愿单中的老钉子户了。 但是一直迟迟没有写是因为自己一直不是很明白我用Serverless能做些什么， 就算我知道了它的概念。 

而且意识到Serverless可能还需要一定的Node技术栈， 又想起了曾经实习期的自己(当时实习写Node)，对Node浅入浅出的经历。🤦‍♂️

也不由的就会把这件事拖延了。但是今天，我们拒绝❌拖延，node也好serverless也罢，我们就从一句`hello，world!`学起。


# 总得来点概念

感觉Serverless还是很有必要从基本概念聊起来(谁说我在混字数！！拖出去！)。咳～ 咱们继续。

像我这样从0基础开始了解serverless的人，真的是看到这个词仅限会读阶段，完全一脸懵逼。


## Serverless只是让Server became more and more less

猛地一看Serverless这个词，可能会认为是一个完全可以让前端抛弃后端技术栈的技术栈(滑稽.jpg)

很可惜，并不是，它只是让你不用那么在意后端，更关注本身的业务逻辑等等。具体，就来先看看它的定义：

> 引自Serverless handbook
> 
> Serverless（无服务器架构）是指服务端逻辑由开发者实现，运行在无状态的计算容器中，由事件触发，完全被第三方管理，其业务层面的状态则存储在数据库或其他介质中。
>
> Serverless 是云原生技术发展的高级阶段，可以使开发者更聚焦在业务逻辑，而减少对基础设施的关注。

`服务端逻辑由开发者实现，运行在无状态的计算容器中，由事件触发`这些都是是什么意思呢？？？

## Baas & Faas

### Baas(Backend as a Service)

意为`后端即服务`。它的应用架构由大量第三方云服务器和API组成的，使应用中关于服务器的逻辑和状态都由服务提供方来管理的。

可以简单理解为，我们的后端是使用一个完全第三方的后端构成的，而我们只需要使用这个第三方服务器提供的API或者其他服务。

引于[前端如何真正晋级成全栈：腾讯 Serverless 前端落地与实践](https://juejin.im/post/6844904082088411144)文中的一个引用：

> Assembly Language to high-level programming Languages.
>
> 「Serverless 给云计算带来的改变，就是相当于从汇编语言到高级语言」

汇编语言，首先需要了解 CPU 的结构，知道加法器、寄存器，需要自己管理内存、IO 设备等一些底层资源。但`开发者的目的并非如此`，开发者`应该是以业务为导向`的。而高级语言提供了诸多能力和框架支持，可以令开发者专注于更快地完成业务上的事情，这才是高级语言所具备的优点，而`不是让开发者把精力浪费在底层资源管理`。

**Serverless 的内涵就是对全部底层资源和运维工作的封装，让开发者专注于业务逻辑。**

### Faas(Function as a Service)

> FaaS 就是至今为止最细粒度的算力分配方式，我们先理解下什么叫算力分配方式。

`算力分配`其实就是`服务器资源`的分配，

意为`函数即服务`。

那这又是什么？？？？？

![](/assets/img/2020-11-15/concept.jpg)

就像这张图一样，在最开始程序员们需要去自己处理很多复杂的服务器相关的额外工作，包括维护服务器等等，`就像最开始自己去井里打水`，从工具到行为都要自己去挑选自己去完成。

后面有人看到了商机，就开始自己从井里打水装到`桶里`然后卖给需要的人。这个时候如果我需要水就可以`不需要自己再亲自动手去打水`，只需要买桶装水就好了。就好比后面有了`第三方的云服务厂商`，来出售自己的云服务器供他人使用。

但是`桶装水`有的时候还是不够方便，我们可能只需要一杯水，但是还需要买一桶水。这个时候水龙头就出现了，`我们需要多少水，只需要打开水龙头即可`。而这就是我们所说的`Faas`。

云上可以函数作为一个计算单元，变成每一次业务执行分配一次资源，没有业务就没有资源分配。所以，FaaS 是一个以函数（业务）为粒度的算力分配方式。


# 枯燥的概念到此为止，我们来写点东西

哈哈哈哈哈哈今天我们就用`Serverless`来写一个hello，world。

## 我终于用另一个命令搭项目了

因为`Vercel`简单易上手，所以选择在Vercel上来完成本次的Serverless探索。

```bash
npx create-next-app
# or
yarn create next-app
```

这只是一个简单的Next.js的架子，我们可以在它上面写些有趣的代码，比如`hello, world!`

> 悄悄立下了后面某一篇就是写SSR的了。对，我抽到SSR了，我没疯！

这里Next.js不是重点，所以我们直接把项目跑起来就好

```
$ npm install

$ npm run start
```

对这个时候可能会报错

```
npm ERR! code ENOENT
npm ERR! syscall open
npm ERR! path /Users/hanqizheng/Documents/临时图片/package.json
npm ERR! errno -2
npm ERR! enoent ENOENT: no such file or directory, open '/Users/hanqizheng/Documents/临时图片/package.json'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/hanqizheng/.npm/_logs/2020-11-16T16_23_41_701Z-debug.log
```

**对，你没有build!!!** 至于为什么，我们留到下一次讲SSR细说！


```jsx
// pages/index.js

{% raw %}
function Page() {
  return (
    <div className={styles.container}>
      hello, world!
    </div>
  )
}
{% endraw %}
```

![](/assets/img/2020-11-15/hello.jpg)

可以看到`Hello, World!`已经将hello, world打印，这篇博客结束了(逃去买奶茶...

接下来我们将这个项目部署到Vercel上

![](/assets/img/2020-11-15/vercel.jpg)

# 准备工作已经就绪，来开始写今天的hello，world

今天我的主要目的就是通过Serverless来实现一下`渲染界面`，`模拟一个表单提交`。

首先我们需要一个button

```jsx
{% raw %}
function Page({ data }) {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Click</button>
    </div>
  )
}
{% endraw %}
```

![](/assets/img/2020-11-15/hello.jpg)


这个Button是干什么的？还记得之前的`Faas`吗？我们把这个项目部署到Vercel上就是为了来体验一把`Faas`的

**而`Faas`是随调随用的，这个button就是为了用来让我们调取serverless function的开关**

但是在这之前，我们要先看看`next.js`怎么请求接口。

```js
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://test-serverless-inky.vercel.app/api/hello');
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
```

> If you export an async function called getServerSideProps from a page, Next.js will pre-render this page on each request using the data returned by getServerSideProps.

这个是Next官方文档给出的Server Side Render时使用这个函数`getServerSideProps()`的界面会在每次界面render之前调用这个界面内的函数。

这样这个函数就可以通过调用serverless function来填充`界面需要的初始数据`。


```js
const res = await fetch('https://test-serverless-inky.vercel.app/api/hello');
```

可以看到这里fetch的URL
- `https://test-serverless-inky.vercel.app`是我部署在vercel的这个项目的Domain

![](/assets/img/2020-11-15/domain.jpg)

- `/api/hello`是我们平时熟悉的API的url，这个url在Next.js中是根据自己的文件结构来判断的，有点像`umi的约定式路由`。`Next.js`规定所有的API都写在`/pages/api`文件夹下面，这个文件夹下面的api会被`vercel`自动识别成serverless function。

![](/assets/img/2020-11-15/url.jpg)

那么我们先来一个简单的

```js
// /pages/api/hello.js

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
```

就是一个很简单的返回一个对象`{ name: 'John Doe' }`。

然后我们在`getServerSideProps()`请求

```js
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://test-serverless-inky.vercel.app/api/hello');
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
```

可以看到`getServerSideProps()`最后返回的是一个对象`{ props: { data } }`， 这个`props`就作为`Page`这个组件的props传入。这样就能拿到对应的数据了。

```jsx
{% raw %}
function Page({ data }) {
  return (
    <div className={styles.container}>
      <span>{data.name}</span>
    </div>
  )
}
{% endraw %}
```

![](/assets/img/2020-11-15/name.jpg)

## 完成另一个目标，用Severless function来实现一个表单

```jsx
{% raw %}
function Page({ data }) {
  const [tempValue, setTempValue] = useState();
  const [realValue, setRealValue] = useState(data.value);

  const handleInputOnchange = (e) => {
    setTempValue(e.target.value);
  }

  const handleClick = async () => {
    const res = await fetch(`https://test-serverless-inky.vercel.app/api/click?input=${tempValue}`);
    const data = await res.json();
    setRealValue(data.value);
  }

  return (
    <div className={styles.container}>
      <span>{`value: ${realValue}`}</span>
      <input onChange={handleInputOnchange} />
      <button className={styles.button} onClick={handleClick}>Click</button>
    </div>
  )
}
{% endraw %}
```

我们把界面再添加一个Input输入框和一个按钮用于模拟提交表单

这时候还要改一下`/api/click`这个接口

```js
module.exports = (req, res) => {
  const { input } = req.query
  res.status(200).send({ value: input })
}
```

这个时候我满怀期待的点了一下Button，然后

![](/assets/img/2020-11-15/crossOrigin.jpg)

那我们就解决一下跨域

```
npm install express http-proxy-middleware --save
```

然后在跟目录创建文件

```js
// server.js
const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')

const devProxy = {
  '/api': {
    target: 'http://localhost:3000', // 端口自己配置合适的
    // pathRewrite: {
    //     '^/api': '/'
    // },
    changeOrigin: true
  }
}

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    if (dev && devProxy) {
      Object.keys(devProxy).forEach(function (context) {
        server.use(createProxyMiddleware(context, devProxy[context]))
      })
    }
    server.all('*', (req, res) => {
      handle(req, res)
    })

    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })
```
修改package.json

```json
"scripts": {
  "dev": "node server.js",
  "build": "next build",
  "start": "NODE_ENV=production node server.js"
}
```

这样跨域就没有了

大功告成

![](/assets/img/2020-11-15/result.gif)

![](/assets/img/2020-11-15/log.jpg)

其实感觉也没有什么特别的，后续Serverless的学习还需要继续深入下去。

# 小插曲

只是顺便把自己的博客也部署到了vercel，期间踩了几个小坑，在这里顺便记录一下。

- 因为自己用的是`Jekyll`的静态模版，`Liquid`语法中的变量是用`\{\{  \}\}`包裹的，这里会和`React`中的一些写法冲突，所以需要用`\{\% raw \%\} ... \{\% endraw \%\}`包裹
- 图片路径之前是在`github pages`上部署的，引入的路径都是`当前文件和图片的相对路径`。但是现在使用了Vercel，它会先把我的项目`build`然后再部署，所以之前的路径都是不对的。
   
  但是当时也不清楚为什么图片全部都崩了，都是404，就去看了图片请求的路径是像这个样子的

  `https://hanqizheng.vercel.app/2020/11/assets/img/2020-11-15/domain.jpg`

  发现总是会在url中多了类似`/2020/11`这一块，然后我发现我在本地是这么引图片的

  `![](./../../assets/...)`正好是往外层文件夹跳了两层(因为posts文件夹相对assets文件夹的位置)

  最终去掉，以`/assets`就好了！！！

![](/assets/img/2020-11-15/blog.jpg)
# 参考

- [入门 Serverless：如何实现 Hello World？](https://zhuanlan.zhihu.com/p/121544612)
- [Serverless Handbook](https://jimmysong.io/serverless-handbook/)
- [理解serverless无服务架构原理](https://www.cnblogs.com/tugenhua0707/p/10991363.html)
- [前端如何真正晋级成全栈：腾讯 Serverless 前端落地与实践](https://juejin.im/post/6844904082088411144)
- [Next.js](https://nextjs.org/docs)
