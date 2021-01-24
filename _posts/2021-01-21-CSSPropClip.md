---
layout: post
title: "CSS之带有clip的两个属性"
author: "Qizheng Han"
---

最近的我，有点才思枯竭的感觉 🤯。其实就是拖延。

众所周知喜欢搞一些花里胡哨的东西。 继上次的`gradient` & `hue-rotate`之后

今天我们引来了一个新的神级属性(自封)`clip`，ta ～ da ～!

## 先来个简单的

![](/assets/img/2021-01-24/text.jpg)

可以看到这是一段文本，但是这个文本`花里胡哨的`。

对，它是彩色的。

## background-clip

秘密就在这个属性`background-clip`。

```html
<span className="textContainer"> text </span>
```

```css
.textContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  font-size: 60px;
  font-weight: bold;

  /* 看下面，秘密在这 */
  background: linear-gradient(to right, rgb(42, 177, 1), blue);
  background-clip: text;
  color: transparent;
}
```

可以看到首先我给了 background 一个渐变。

**这里我最初犯了一个错误：**

`gradient`系列属性是`background-image`的一种属性！

`gradient`系列属性是`background-image`的一种属性！

`gradient`系列属性是`background-image`的一种属性！

### 这个属性是干什么的？

那么我更喜欢从`clip`这个词说起。

- `clip`: **n.** 夹子 ｜ **vt.** 把...夹住, 把夹子别上。

那么`background-clip`要怎么理解呢？

其实这里的`clip`显然是一个`名词`。当然在这里直接翻译成`背景-夹子`多少有点 der。可以意译为`背景-限制`。

它有 3 个属性。

- background-clip: border-box;

  ```css
  .textContainer {
    border: 10px solid #000000;
    background: linear-gradient(to right, rgb(42, 177, 1), blue);
    background-clip: border-box;
  }
  ```

  ![](/assets/img/2021-01-24/wrongBorderBox.jpg)

  wait a minute, what the hell am I doing...这样根本这样根本看不出来效果。

  改一下

  ```css
  .textContainer {
    border: 10px dashed #000000;
  }
  ```

  可以看到`border-box`是说允许背景色的范围到`border`

  ![](/assets/img/2021-01-24/borderBox.jpg)

- background-clip: padding-box;

  ![](/assets/img/2021-01-24/paddingBox.jpg)

  可以看到在设定了`padding-box`之后背景色的范围就仅限`除了`bordr 以外的范围。

- background-clip: content-box;

  为了能和上一个`padding-box`有所区别，我先加一些 padding 让 content 和 padding 不一样大。

  ```css
  .textContainer {
    padding: 50px;
    border: 10px dashed #000000;
    background: linear-gradient(to right, rgb(42, 177, 1), blue);
    background-clip: content-box;
  }
  ```

  ![](/assets/img/2021-01-24/contentBox.jpg)

- background-clip: text;

  那么这个就是仅限文字所显示的区域。

  ![](/assets/img/2021-01-24/textContent.jpg)

  但是这个情况就如同上述 border 的情况，text 本身把 background`挡住了`。

  加一句

  ```css
  .textContainer {
    color: transparent;
  }
  ```

  ![](/assets/img/2021-01-24/textTransparent.jpg)

## 当然还有另一种实现彩色字体的方法 - mask

CSS中的mask属性允许用户屏蔽或剪裁特定点的图像来实现，部分或完全隐藏某个元素的可见性。

![](/assets/img/2021-01-24/mask.jpg)

通过添加一个伪元素来完成mask的`半透明遮罩`效果，这样我们就能得到其中一个颜色的渐变效果，然后再把文本原有的颜色与之相结合，就能达到渐变特效。如上图大概就是`3层效果`叠加在一起。

```html
<span text="text" className="textContainer">
  text
</span>
```

```css
.textContainer {
  /* text原有的颜色 */
  color: green;
}

.textContainer::before {
  content: attr(text);
  position: absolute;
  z-index: 10;
  /* 伪元素的颜色(渐变色的另一色) */
  color: blue; 
  /* 渐变透明的遮罩 */
  mask: linear-gradient(to left, green, transparent);
}
```

效果如下

![](/assets/img/2021-01-24/maskText.jpg)





# 参考

- [简单说 通过 CSS 实现 文字渐变色 的两种方式](https://segmentfault.com/a/1190000011882933)
- [CSS —— gradient 渐变专题](https://juejin.cn/post/6844903593800105992)
- [CSS 奇思妙想边框动画](https://juejin.cn/post/6918921604160290830#heading-6)
- [mdn - linear-gradient](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient()>)
- [mdn - background-image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image)
