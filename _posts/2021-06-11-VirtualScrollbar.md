---
layout: post
title: "虚拟滚动 - 条！"
author: "Qizheng Han"
---

最近在写组件，遇到的第一个问题就是浏览器的`滚动条`。

记得之前就被滚动条长痛过一次了，这次决定短痛， 直接总计来写一个滚动条。

什么？为什么要这么大费周章？滚动条这个磨人的小妖精，我觉得她值得...

# 起因

最近写 Table 的虚拟化组件，因为 Table 实际是计算出位置的一个个 div 拼成的 Grid，所以在整个组件中，`位置`极为重要。

但是`滚动条`它出现了。最初你以为它是一个小天使，在你需要滚动的时候出现，没有滚动的时候消失，大概是这个样子的...

![](/assets/img/2021-06-14/expect.gif)

不不不不不不~ 他实际是这个样子的

![](/assets/img/2021-06-14/current.jpg)

甚至能在同一个浏览器窗口内出现`4个`滚动条....

甚至`还区分系统`，在一些老版本的`windows`系统中它甚至是这个样子的

![](/assets/img/2021-06-14/oldWindows.jpg)

WTF!

![](/assets/img/2021-06-14/wtfGirl.jpeg)

## Step 1: 干掉原有的滚动条

首先我们先搭个架子

```jsx
// App.js
{% raw %}
import "./TestBody.css";

function App() {
  const testData = new Array(50).fill('item');
  return (
    <div className="container">
      <div className="testContainer">
        <div className="testBody">
          {testData.map((item, index) => (
            <div key={index} className="testItem">{`${item} - ${index}`}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
{% endraw %}
```

说实话干掉滚动条的方法还`值得商榷`，因为当前开发的项目中`本身就有对滚动条的样式更改`。所以我这里只是单纯的给出自己的`禁用`原始滚动条的方法，`仅供参考`。

```css
/* TestBody.css */
::-webkit-scrollbar {
  display: none;
}
```

## Step2: 构建自己的 scrollbar 组件

首先我们先来明确一下滚动条由哪几部分组成。

![](/assets/img/2021-06-14/scrollbarStructure.jpg)

可以看到滚动条是由 3 部分组成的

- 滚动条容器(滚动条所能显示的区域，应该与视口一样高)
- 滚动条容器的实际高度(应该与视口内容的实际高度一致)
- 滚动条的 dragger(可拖拽的 bar，本身的高度应该与视口高度和实际高度之间的比例有关)

> 为了方便我默认 50 个 item，每个 item 高 50px，总高 2500px，视口高度为 300px

```jsx
// App.js
{% raw %}
function App() {
  const testData = new Array(50).fill('item');
  return (
    <div className="container">
      <div className="testContainer">
        <Scrollbar scrollbarContainerHeight={300} />
        <div className="testBody">
          {testData.map((item, index) => (
            <div key={index} className="testItem">{`${item} - ${index}`}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
{% endraw %}
```

```jsx
// App.js
{% raw %}
import React from 'react';

import "./scrollbar.css"

const Scrollbar = ({
  scrollbarContainerHeight, // 滚动条容器高度
  scrollbarRealHeight, // 滚动条真实的高度
}) => {

  return (
    <div className="scrollbar-viewer" style={{ height: scrollbarContainerHeight }}>
      <div className="scrollbar-container">
        <div className="scrollbar-dragger"></div>
      </div>
    </div>
  )
}

export default Scrollbar;
{% endraw %}
```

```css
.scrollbar-viewer {
  position: absolute;
  user-select: none;
  display: block;
  right: 0;
  width: 6px;
  transition: background-color 0.2s ease;
  z-index: 1;
}

.scrollbar-viewer:hover {
  width: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}

.scrollbar-container {
  position: relative;
  height: 100%;
  width: 100%;
  border: none;
  overflow: scroll;
}

.scrollbar-dragger {
  position: absolute;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease 0s;
}
```

![](/assets/img/2021-06-14/inital.gif)

这样一个大概的滚动条组件架子就搭起来了。但是现在显然是没有任何效果的，我们 hover 上去只能看到滚动条的轨道却看不到滚动条本身的样子。

## Step3: 计算 dragger 的高度

刚才说过滚动条的 dragger 的高度其实是与`滚动条容器的高度(scrollbarContainerHeight)` & `滚动条真实的高度(scrollbarRealHeight)`有关。

其实就是一个简单的`比例公式`

![](/assets/img/2021-06-14/draggerHeight.jpg)

其实根据这张图就能清楚的看出来比例关系了。

我们需要的是 dragger 的高度，`draggerHeight`其实在`视口高度(也就是滚动条容器高度)`的占比就应是`视口高度`在`总高度`中的占比。

通过下面这样一个公式就能求出`draggerHeight`

![](/assets/img/2021-06-14/draggerHeightFormula.jpg)

给出代码

```jsx
const draggerHeight = useMemo(() => {
  /**
   *  scrollbarContainerHeight                 x
   *  ------------------------   =   ----------------------
   *   scrollbarRealHeight          scrollbarContainerHeight
   */
  return Math.pow(scrollbarContainerHeight, 2) / scrollbarRealHeight;
}, [scrollbarContainerHeight, scrollbarRealHeight]);
```

就达到了如下效果

![](/assets/img/2021-06-14/draggerHeight.gif)

## Step 4: 让滚动条动起来

在上一步我们让滚动条的 dragger 有了正确的高度，但是滚动内容时滚动条显然还不会动，我们接下来就让他动起来！

怎么动呢？？？其实就是让`dragger绝对定位`，而我们只需要不断的根据滚动来计算`top`的偏移量即可。

首先我们需要先添加滚动事件

```jsx
{% raw %}
function App() {
  const testData = new Array(50).fill('item');
  const [topOffset, setTopOffset] = useState(0);

  const handleScroll = (e) => {
    setTopOffset(e.target.scrollTop);
  }
  return (
    <div className="container">
      <div className="testContainer" onScroll={handleScroll}>
        <Scrollbar topOffset={topOffset} scrollbarContainerHeight={300} scrollbarRealHeight={50 * 50} />
        <div className="testBody">
          {testData.map((item, index) => (
            <div key={index} className="testItem">{`${item} - ${index}`}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
{% endraw %}
```

然后我们将`topOffset`作为参数传入滚动条组件，用于后续计算。

![](/assets/img/2021-06-14/draggerOffset.jpg)

而滚动条的`偏移量`我们看这张图，`偏移距离`在`视口高度`的占比就是`滚动偏移量`在`总高度`中的占比

![](/assets/img/2021-06-14/draggerOffsetFormula.jpg)

```jsx
const draggerTop = useMemo(() => {
  /**
   *             x                      currentTopOffset
   *  -----------------------     =   --------------------
   *  scrollbarContainerHeight        scrollbarRealHeight
   */
  return (topOffset * scrollbarContainerHeight) / scrollbarRealHeight;
}, [topOffset, scrollbarContainerHeight, scrollbarRealHeight]);
```

然后写好之后兴奋的去滚动了一下内容，wait...滚动条根本没有出现啊。。。

我们漏了一个显示滚动条的逻辑（目前只有 hover 上去显示的逻辑）

## Step5: 滚动条的显隐

滚动条什么时候需要显示呢？

- hover 上去
- 我们滚动内容的时候

所以我们需要知道当前是否在滚动，其实就是对比一下`之前的topOffset`和`当前的topOffset`就可以了。

然后需要注意的一点是，我们想要的效果是，当我们不滚动，滚动条会在一定时间后`自动消失`，这个我们只需要加一个定时器即可。

```jsx
// Scrollbar.jsx
{% raw %}
const Scrollbar = ({
  scrollbarContainerHeight,
  scrollbarRealHeight,
  topOffset,
}) => {
  const [isShow, setIsShow] = useState(false);
  const [isHover, setIsHover] = useState(false);

  let timeoutRef = useRef();

  useEffect(() => {
    setIsShow(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsShow(false);
    }, 1000);
  }, [topOffset]);

  const draggerHeight = useMemo(() => {
    /**
     *  scrollbarContainerHeight                 x
     *  ------------------------   =   ----------------------
     *   scrollbarRealHeight          scrollbarContainerHeight
     */
    return Math.pow(scrollbarContainerHeight, 2) / scrollbarRealHeight;
  }, [scrollbarContainerHeight, scrollbarRealHeight]);

  const draggerTop = useMemo(() => {
    /**
     *             x                      currentTopOffset
     *  -----------------------     =   --------------------
     *  scrollbarContainerHeight        scrollbarRealHeight
     */
    return (topOffset * scrollbarContainerHeight) / scrollbarRealHeight;
  }, [topOffset, scrollbarContainerHeight, scrollbarRealHeight]);

  const handleMouseOutScrollbar = () => {
    setIsHover(false);
  }

  return (
    <div
      className="scrollbar-viewer"
      style={{ height: scrollbarContainerHeight }}
    >
      <div
        className="scrollbar-container"
        onMouseOver={() => setIsHover(true)}
        onMouseOut={handleMouseOutScrollbar}
      >
        <div
          className={classNames("scrollbar-dragger", {
            "scrollbar-dragger-show": isShow,
            "scrollbar-dragger-show-hover": isHover,
          })}
          style={{ height: draggerHeight, top: draggerTop }}
        ></div>
      </div>
    </div>
  );
}
{% endraw %}
```

可以看到现在实现的效果是这个样子，基本已经初具效果了。

![](/assets/img/2021-06-14/scroll.gif)

但是还差亿点点就是滚动条我们是可以用鼠标拖拽的。

## Step 6: 可拖拽的滚动条

首先我们需要监听到鼠标按下的事件

```jsx
{% raw %}
// 改造一下这里
const handleMouseOutScrollbar = () => {
  if (!isMouseDown) {
    setIsHover(false);
  }
}

const handleMouseDown = () => {
  setIsMouseDown(true);
}
{% endraw %}
```

需要注意的是之前我们写的监听`鼠标移出指定区域`的事件，现在，只要是按下鼠标的情况，就不能让滚动条消失，因为用户这个时候正在拖动滚动条。

但是遇到了新的问题，当鼠标移出规定区域，怎么获取`鼠标按键抬起事件`呢？否则滚动条将永久显示，这时候需要在全局的`document`上添加一个`mouseup`的事件监听，且我们只需要在`isMouseDown = true`的时候进行某些操作即可。

因为后面我们还要计算鼠标移动的距离之类的，所以这个时候再在`document`上加一个`mousemove`的事件监听。

```js
const handleMouseUp = useCallback(() => {
  if (isMouseDown) {
    setIsMouseDown(false);
  }
}, [isMouseDown]);

const handleMouseMove = useCallback(
  (e) => {
    if (isMouseDown) {
      const $Element = document.getElementById("scrollbar-dragger-container");
      if ($Element) {
        let tempOffset = 0;
        tempOffset = e.pageY - startDragPosition;
        // 在根据比例关系计算出应该在纵向top偏移多少
        let tempScrollTop =
          (tempOffset * scrollbarRealHeight) / scrollbarContainerHeight;
        // dragger的实际偏移量 = 拖拽产生的偏移量 + 原本dragger的偏移量
        tempScrollTop += startDragOffset;
        if (tempScrollTop < 0) {
          tempScrollTop = 0;
        }
        // TODO: 说实话是算出来的，不知道为什么减的正好是一个container的高度
        if (tempScrollTop > scrollbarRealHeight - scrollbarContainerHeight) {
          tempScrollTop = scrollbarRealHeight - scrollbarContainerHeight;
        }
        // 记得加上已有的纵向偏移
        handleScrollTo(tempScrollTop);
      }
    }
  },
  [
    isMouseDown,
    handleScrollTo,
    scrollbarRealHeight,
    startDragOffset,
    startDragPosition,
    scrollbarContainerHeight,
  ]
);

useEffect(() => {
  document.addEventListener("mouseup", handleMouseUp);
  document.addEventListener("mousemove", handleMouseMove);
  return () => {
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("mousemove", handleMouseMove);
  };
}, [handleMouseUp, handleMouseMove]);
```

然后就到了，整篇文章中我觉得最麻烦的地方了。还是先来一张图吧。

![](/assets/img/2021-06-14/draggerTopOffset.jpg)

我们的任务，是根据鼠标拖拽的距离，来推算出`dragger对应的偏移量`，然后再加上`dragger本身原有的偏移量`即可。具体公式如下：

![](/assets/img/2021-06-14/draggerTopOffsetFormula.jpg)

```jsx
// App.js

const handleScrollTo = useCallback((offset) => {
  const $Element = document.querySelector("#testContainer");
  if ($Element) {
    $Element.scrollTop = offset;
  }
}, []);
```

最终我们实现了如下效果。

![](/assets/img/2021-06-14/dragging.gif)

# 源代码

- [点击这里]()

# 参考

说实话这次没啥可以参考的东西...跟着思路一步步来即可。
