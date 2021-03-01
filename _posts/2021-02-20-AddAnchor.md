---
layout: post
title: "熟悉的陌生人Jekyll"
author: "Qizheng Han"
---

看似平淡无奇的2月突然急转直下，上个月还只是才思枯竭罢了，这个月就是`才思枯竭` + `时间紧迫`。 

但还是想跟自己说一句，不能把写博客变成自己的一种负担，还是要开开心心地写才能有好的效果。 

今天就来学习一下`Jekyll`。自己的博客就是用`Jekyll`写的，但因为之前都是拿来现有的theme一用就好，没有真的去了解过。现在就来一起学习一下。 

![](/assets/img/20201-02-28/blog.jpg)

# Jekyll是什么？

当然按照以往惯例是要先给出`官方定义: `

> Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, and more.


来简单的翻译一哈，提取关键信息出来：

> 首先要来科普一下里面的几个概念
> 
> `static site`: 直接把当前所要渲染的东西呈现到用户的浏览器上的界面。没有后端。
> 
> `markup language`: 是标记语言的意思，即在文本中加入一些说明符号来指示排版要求，字体大小，位置等。通过标记语法，使普通文本内容具有不同的格式。
>
> markdown就是一种标记语言，html也是。

- 是一个`静态的`网页生成器
- 这里的`take`姑且意译成`针对`，即是针对你最喜欢的`标记型语言`(恕我浅薄，本文主要以markdown为主)里的文本
- 那这个`静态`怎么体现呢？其实就是写好`layout文件`，把对应的`.md`文件按照layout所制定的规则进行`转换`，就可以"制造"出`静态的`界面(.html)。
- 你可以扭转界面的外观和感觉，也可以改变其对应的url，数据在界面的展示效果等等。

其实可以用这张图来简单说明一下：

你在`.md`文件中写好自己的markdown内容，然后通过规定的`layout`的文件，进行转换，最终生成`有独特样式的html文件`。

![](/assets/img/20201-02-28/conception.jpg)


# 话不多说创建项目

当然我们在创建项目之前要做一些`准备工作`来满足Jekyll的环境需求。

## 准备工作

### 首先我们要先安装`Ruby`

Mac是自动集成了Ruby的。


如果提示Ruby环境的报错大家可以自行谷歌度娘一下`ruby安装`或者点击[这里](https://www.ruby-lang.org/zh_cn/documentation/installation/)

> 其实事实是我老早就装过了，忘记怎么装了

### 然后我们来安装Jekyll

[神秘的指路链接](https://jekyllrb.com/docs/installation/)


```terminal
$ gem install --user-install bundler jekyll
```

然后你就可以查看自己的版本

```terminal
$ jekyll -v
```

## 进入正题

我们先来创建一个项目

```
$ jekyll new-theme my-theme
```

可以看到目录结构是这个样子。

![](/assets/img/20201-02-28/directory1.jpg)



接下来我们先运行项目，看看效果是什么。

首先我们需要先`install 对应的依赖`。有点类似于`npm`，jekyll也有自己依赖的包管理机制。

```
$ bundle install
```

但是遇到了这个问题

![](/assets/img/20201-02-28/installWrong.jpg)

这个因为gem.specific文件中有不支持的内容

![](/assets/img/20201-02-28/wrongPlace.jpg)

修改掉即可。

安装成功是这个样子。

![](/assets/img/20201-02-28/installSuccess.jpg)

然后启动！

```
$ bundle exec jekyll serve
```

![](/assets/img/20201-02-28/run.jpg)

打开`http://127.0.0.1:4000/`

![](/assets/img/20201-02-28/initalPage.jpg)

这样项目就算搭建完成了。芜湖！

# Jekyll是怎么工作的？

## 首先要看看什么是Liquid

我们不是在讨论Dota2战队(逃

当然我们要在这里系统的学习`Liquid`是一件费时的事情，我们只需要了解`Liquid`是什么，和它的一些关键的特性就足够了，我们的目的是能用它来写一个Jekyll的简单模版。

这是[Liquid官方仓库](https://github.com/Shopify/liquid)对`Liquid`的定义。

> Liquid is a template engine

其实大家如果写过Express就应该了解过`ejs`，这个`Liquid`和ejs非常相似。`模版引擎`我用大白话说一下就是在对应的地方填写好变量，这个时候就能把这个文件当成一个模版，变量的不同就能复用同样结构的一个文件。`有那么一丢丢像抽离出来的一个function`。

变量用`{{  }}`所包裹

```liquid
{% raw %}
<h1>{{ title }}</h1>
{% endraw %}
```

逻辑判断或者循则是这么写
```liquid
{% raw %}
<ul id="products">
  {% for product in products %}
    <li>
      <h2>{{ product.name }}</h2>
      Only {{ product.price | price }}

      {{ product.description | prettyprint | paragraph }}
    </li>
  {% endfor %}
</ul>
{% endraw %}
```

## 动手来写一段Liquid

我们在刚搭建的环境中先创建一个`_layouts`的目录，用来存放我们不同的layout文件。

```
// 新建一个_layouts文件夹，然后在该文件夹下创建home.html
|- other folder...
|- _layouts     <--here
  |
  |-home.html   <--here
|- _posts
|- ...
```

然后我们在根目录下再创建一个`index.html`作为博客的入口文件。

```
// 新建一个_layouts文件夹，然后在该文件夹下创建home.html
|- other folder...
|- _layouts
|- _posts
|- ...
|- index.html   <-- here
```

入口文件的内容很简单，只需要指明自己使用的是哪个模版即可。值得注意的一点是`根目录可能有一个index.markdown`的文件，和这个`index.html`的文件是类似作用，我们将其`删掉`即可。


```html
// index.html

---
layout: home
title: Home
---
```

然后我们制定好了首页的layout文件是哪一个，接下来就要具体去编写这个layout文件了。

```html
{% raw %}
<div>
  {% for post in site.posts %}
    <div>
      <div>{{ post.date | date: "%B %d, %Y" }}</div>
      <div>{{ post.title }}</div>
    </div>
  {% endfor %}
</div>
{% endraw %}
```
这里是比较重要的一环，把这里大概弄懂基本对Liquid就没什么难度了。

- 顶部的`---`所包裹的内容是配置内容，规定了`home.html`这个layout要使用`default.html`的layout。对没错，layout之间也可以互相引用。
- 我们用到了一个`for循环`来循环把我们的每篇博客循环展示在首页上。
- `site.posts | post.date | post.title`是`Jekyll`内置的一个`filter`或者说是变量。[点这里](https://jekyllrb.com/docs/liquid/filters/)看详情。
- 所以我这段代码就是在`首页`上循环`_posts`文件夹中的`post`，把他们的`date`和`title`展示在首页。

![](/assets/img/20201-02-28/step1.jpg)

可以看到红框中是我们循环出来的一片博客的日期和标题(创建项目自带的)


但是我不想要`默认的`Header和Footer，这个时候我们也可以去自定义。

## 自定义主页的全部

在`_layouts`文件夹里创建一个`default.html`

然后让我们的`home.html`引用这个layout作为其自身的layout。

**没错，layout还能引用别的layout**

```html
---
layout: default
---
{% raw %}
<div>
  {% for post in site.posts %}
    <div>
      <div>{{ post.date | date: "%B %d, %Y" }}</div>
      <div>{{ post.title }}</div>
    </div>
  {% endfor %}
</div>
{% endraw %}
```
然后我们来编辑一下`default.html`。

```html
{% raw %}
<!DOCTYPE html>
<html lang="en">
  <body>
    <main>
      {{ content }}
    </main>
  </body>
</html>
{% endraw %}
```

然后发现界面变成这个样子了

![](/assets/img/20201-02-28/step2.jpg)

这样看只剩下我们刚才写好的渲染内容，默认的东西都没了。

现在我们可以改动一下`default.html`来定义自己的header和footer

这时候我们需要再在根目录下创建一个`_includes`文件

```
|- other folder...
|- includes     <--here
  |
  |- header.html   <--here
  |- footer.html   <--here
|- ...
```

我们来自定义自己的header

```html
<header>
  This is github.com/hanqizheng header
</header>
```

然后是自己的footer
```html
<footer>
  This is github.com/hanqizheng footer
</footer>
```

可以看到现在我有自己的Header、Content、Footer了，但是太tm丑了！！！！

![](/assets/img/20201-02-28/step3.jpg)

## 如何给自己的博客界面添加样式呢？

既然是学习新东西，我们来写一下`sass`。

**其实。。。`sass`和`css`基本一摸一样。。。**

我们先来修改一下Header的样式

---
补充：

这个修改样式那叫个坑啊...

首先, 我们来写一下header的样式

```scss
// _sass/windranger/header.scss
.header {
  height: 70px;
  color: black;
  font-size: 25px;
  border-bottom: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

// _sass/windranger/footer.scss
.footer {
  height: 70px;
  display: flex;
  align-items: center;
  border-top: 1px solid #cccccc;
  justify-content: center;
}

// _sass/windranger/content.scss
.content {
  max-width: 800px;
  margin: 0 auto;
}

.post-list {
  &-item {
    padding: 20px 0;
    font-size: 30px;
  }
}
```

然后我们需要在`_config.yml`中添加一条关于`scss`的配置。

```
sass:
  sass_dir: _sass
  style: compressed
```

最后需要在header中link进来我本最终需要的那个最终的样式文件，而这个文件在哪里呢？我们还没有创建，先来创建一下`assets`文件夹。

```
|- other folder...
|- asstes     <--here
  |
  |- main.scss   <--here
|- ...
```

这个文件中只需要一句话

```scss
@import 'tale';
```

这个时候我们就去link进来

```html
<!-- _includes/header.html -->
<header>
  <!-- CSS -->
  <link rel="stylesheet" href="{{ "/assets/main.css" | relative_url }}">
  <div class="header">github.com/hanqizheng header</div>
</header>
```

这个时候样式就起作用了

![](/assets/img/20201-02-28/result.jpg)

# 总结

Jekyll我们只要接触过`github pages`就一定听说过。但是平时拿来直接用却很少关注过他是怎么写的。

但现在我们明白可以通过写Liquid来`生成对应的博客模版页面`，可以有多个模版，模版也能互相套用。

然后我们可以写`scss`来美化界面的样式。

## 但归根结底，大概流程就是下方这个图：

![](/assets/img/20201-02-28/final.jpg)

---


所以看完这篇博客的你是不是如下图呢？

![](../assets/img/20201-02-28/end.jpg)

## Demo链接

[点这里](https://github.com/hanqizheng/WindrangerTheme)


# 参考

- [Markdown 和 Markup](https://www.jianshu.com/p/c989f3ce1787)
- [Jekyll](https://jekyllrb.com/docs/)
- [一步一步创建Jekyll主题](http://jokinkuang.github.io/2016/09/03/how-to-create-the-jekyll-theme.html)
- [Making your first Jekyll theme: Part 1](https://www.siteleaf.com/blog/making-your-first-jekyll-theme-part-1/)
- [Making your first Jekyll theme: Part 2](https://www.siteleaf.com/blog/making-your-first-jekyll-theme-part-2/)
