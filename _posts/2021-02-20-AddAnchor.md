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
> `markup language`: 是标记语言的意思，即在文本中加入一些说明符号来指示排版要求，字体大小，位置等。通过标记语法，使普通文本内容具有不同的格式。
>
> markdown就是一种标记语言，html也是。

- 是一个`静态的`网页生成器
- 这里的`take`姑且意译成`针对`，即是针对你最喜欢的`标记型语言`(恕我浅薄，本文主要以markdown为主)里的文本
- 那这个`静态`怎么提现呢？其实就是写好`layout文件`，把对应的`.md`文件按照layout所制定的规则进行`转换`，就可以"制造"出`静态的`界面(.html)。
- 你可以扭转界面的外观和感觉，也可以改变其对应的url，数据在界面的展示效果等等。

其实可以用这张图来简单说明一下：

你在`.md`文件中写好自己的markdown内容，然后通过规定的`layout`的文件，进行转换，最终生成`有独特样式的html文件`。

![](/assets/img/20201-02-28/conception.jpg)


# 话不多说创建项目

当然我们在创建项目之前要做一些`准备工作`来满足Jekyll的环境需求。

## 准备工作

### 首先我们要先安装`Ruby`

Mac是自动集成了Ruby的。

TODO: 润色 搞笑不知道ruby

如果提示Ruby环境的报错大家可以自行谷歌度娘一下`ruby安装`或者点击[这里](https://www.ruby-lang.org/zh_cn/documentation/installation/)

> 其实是我老早就装过了，忘记怎么装了

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

![](/assets/img/20201-02-28/directory.jpg)

TODO：来解释一下目录结构


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

其实大家如果写过Express就应该了解过`ejs`，这个`Liquid`和ejs非常相似。

```liquid
<!-- 变量用{{  }} 所包裹 -->

{% raw %}
<h1>{{ title }}</h1>
{% endraw %}
```










所以看完这篇博客的你是不是如下图呢？

![](../assets/img/20201-02-28/end.jpg)


# 参考

- [Markdown 和 Markup](https://www.jianshu.com/p/c989f3ce1787)
- [Jekyll](https://jekyllrb.com/docs/)
- [一步一步创建Jekyll主题](http://jokinkuang.github.io/2016/09/03/how-to-create-the-jekyll-theme.html)
- [Making your first Jekyll theme: Part 1](https://www.siteleaf.com/blog/making-your-first-jekyll-theme-part-1/)
- [Making your first Jekyll theme: Part 2](https://www.siteleaf.com/blog/making-your-first-jekyll-theme-part-2/)
