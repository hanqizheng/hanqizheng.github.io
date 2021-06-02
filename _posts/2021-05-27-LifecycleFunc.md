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

标记为了`UNSAFE`也就是`不安全的`。最先让我注意到这一操作是跑起项目后的大片金黄色的...warning。

![](/assets/img/2021-05-25/warning.jpg)

到`React v17`版本之后就算使用`UNSAFE`词缀开头的被遗弃的生命周期也都会直接在控制台报红色的warning。

![](/assets/img/2021-05-25/warning2.png)

## UNSAFE_componentWillMount

`componentWillMount()` 在挂载之前被调用。也就说明它是在`render()`之前被调用的。

**而且只会被`调用一次`**，接下来我们可以验证一下。

> 挂载到底是什么呢？
> 
> 用React小书中的话来说：
> 
> React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载

```jsx
{% raw %}
// App
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  // 因为新建的react是v17，所以只能加UNSAFE前缀
  UNSAFE_componentWillMount() {
    console.log('app will mount');
  }

  render() {
    return (
      <div className="appContainer">App</div>
    );
  }
}

export default App;
{% endraw %}
```

![](/assets/img/2021-05-25/willMount.png)

### 验证一下父组件更新会不会再次触发子组件的willMount

现在有一个父组件`App`

```jsx
{% raw %}
// App
import React from 'react';
import './App.css';
import Test1 from './Test1.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    }
  }

  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidUpdate() {
    console.log('father component update');
  }

  render() {
    return (
      <div className="appContainer">
        <button className="button" onClick={this.addCount}>Click</button>
        <div>Count: {this.state.count}</div>
        <Test1 />
      </div>
    );
  }
}

export default App;

{% endraw %}
```

有一个子组件`Test1`

```jsx
{% raw %}
import React from 'react';

class Test1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillMount() {
    console.log('test 1 will mount');
  }

  render() {
    return (
      <div>Test1{this.props.testCount}</div>
    );
  }
}

export default Test1;
{% endraw %}
```

![](/assets/img/2021-05-25/willMount.png)

点击按钮让父组件重新渲染，虽然`父组件的改变会导致子组件重新渲染`，但是！`并不会再触发componentWillMount()`。

### 对将componentWillMount()标为UNSAFE的一些思考

我们之前说过：

`componentWillMount()` 在挂载之前被调用。也就说明它是在`render()`之前被调用的。

而很多人认为数据请求放在`componentDidMount`里面，但放在`componentWillMount`不是会`更快`获取数据吗？

来模拟一下

```jsx
{% raw %}
import React from 'react';

class Test1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillMount() {
    console.log('test 1 will mount');
    setTimeout(() => {
      console.log('fake synchronous options');
    }, 0);
  }

  render() {
    console.log('test1 render');
    return (
      <div>Test1{this.props.testCount}</div>
    );
  }
}

export default Test1;
{% endraw %}
```

![](/assets/img/2021-05-25/willMount2.jpg)

可以看到，无论如何，`异步的操作`都是`晚于`render的执行，所以看似是更早的请求接口，但实时却并非如此。

还有一个原因，componentWillMount是服务端渲染唯一会调用的生命周期函数，如果你在此方法中请求数据，那么服务端渲染的时候，在服务端和客户端都会分别请求两次相同的数据，这显然也我们想看到的结果。

因为我没有研究过`服务端渲染`，所以结论只能源于其他blog。

## UNSAFE_componentWillReceiveProps

`componentWillReceiveProps`的官方定义是如果父组件导致组件重新渲染，即使 props 没有更改，也会调用此方法。如果只想处理更改，请确保进行当前值与变更值的比较。

我们先来验证一下：

```jsx
{% raw %}
import React from 'react';
import './App.css';
import Test1 from './Test1.jsx';
import Test2 from './Test2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      testProps: 'test',
    }
  }

  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidUpdate() {
    console.log('father component update');
  }

  render() {
    return (
      <div className="appContainer">
        <button className="button" onClick={this.addCount}>Click</button>
        <div>Count: {this.state.count}</div>
        <Test1 testProps={this.state.testProps} />
      </div>
    );
  }
}

export default App;

{% endraw %}
```

首先我们依旧需要父组件`App`来通过点击事件完成`state的更新`。这样就会触发`子组件的重新渲染`。

这个时候把一个不变的props传入子组件。就会发现虽然`props没有改变`，但是依然会`触发componentWillReceiveProps`， 如下图

![](/assets/img/2021-05-25/willReceive.gif)

还需要注意的一点是，`componentWillReceiveProps`在`挂载阶段不执行！！`

### 对将componentWillReceiveProps标记为UNSAFE的一些思考

`componentWillReceiveProps`能拿到下一次`最新的props`，就显然是要和`当前的props`做比较，这才是这个lifecycle的意义所在。

如果两个`props`的内容不一样，会做些什么事呢？？

**最常做的操作应该就是`更新某个与props相关性很强的state`**，也就是setState操作。

那么这个时候就出现问题了。

这个时候我们引入一个`componentDidUpdate`的生命周期

```jsx
{% raw %}
import React from 'react';

class Test1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('test1 component will receive props: ', this.props, nextProps);
  }

  componentDidUpdate() {
    console.log('test 1 update');
  }


  render() {
    return (
      <div>Test1{this.props.testCount}</div>  
        
    );
  }
}

export default Test1;
{% endraw %} 
```

![](/assets/img/2021-05-25/willReceive2.gif)

这个时候可以看到，在外部原因导致该组件重新渲染的时候，`componentDidUpdate`和`componentWillReceiveProps`**都会执行！**

这就会`产生不同的`可以`更新state`的途径。让state的数据源变得`不纯洁（单一）`。

而且需要区分`首次挂载`还是`后续更新`这种额外的逻辑总是会时不时的引发一些奇怪的bug。
## UNSAFE_componentWillUpdate

官方对`componentWillUpdate`的定义是：

当组件收到新的 props 或 state 时，会在渲染之前调用 UNSAFE_componentWillUpdate()。使用此作为在更新发生之前执行准备更新的机会。初始渲染不会调用此方法。

需要注意的是，`componentWillUpdate`中是不能进行任何`setState / dispatch`之类的操作。会直接报错！

![](/assets/img/2021-05-25/willUpdate.jpg)

### 对将componentWillUpdate标为UNSAFE的思考

其实说实话，我看了很久也没有搞懂为什么会把`componentWillUpdate`标记为UNSAFE

单纯是因为之前所说的它`不是每次渲染都执行`，而是`仅在后续update`时才触发这一点来说，确实可以算是一个原因。但还是感觉不足以致命。

然后看到了[谈谈对 React 新旧生命周期的理解](https://segmentfault.com/a/1190000038323258)中的这段描述

> componentWillUpdate方法常见的用法是在组件更新前，读取当前某个 DOM 元素的状态，并在 componentDidUpdate 中进行相应的处理。但 React 16 版本后有 `suspense`、`异步渲染机制`等等，render 过程可以`被分割成多次`完成，还可以被暂停甚至回溯，这导致 componentWillUpdate 和 componentDidUpdate 执行前后可能会间隔很长时间，这导致 DOM 元素状态是不安全的，因为这时的值很有可能已经失效了。

这段话中描述特别特别像`React Concurrent Mode`中提及的特性。

所以难道是为了给`Concurrent Mode`铺路(纯属推测无任何依据)？
# 新给出的两个生命周期

旧的不去，新的不来。

将3个生命周期标记为不安全之后，React官方也给出了两个新的生命周期函数。`getDerivedStateFromProps` 和 `getSnapshotBeforeUpdate`
## static getDerivedStateFromProps

`static getDerivedStateFromProps` 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。

我们先来用一下`static getDerivedStateFromProps()`

```jsx
{% raw %}
import React from 'react';

class Test1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testCount: 0,
    };
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    console.log('nextProps: ', nextProps, 'currentState: ', currentState);
    return {
      testCount: nextProps.testCount,
    }
  }

  render() {
    return (
      <div>Test1: {this.props.testCount}</div>
    );
  }
}

export default Test1;
{% endraw %} 
```

![](/assets/img/2021-05-25/getDerived.gif)

可以看到`初次渲染`的时候`getDerivedStateFromProps`就已经执行了一次，然后随着父组件的更新，触发了子组件`Test1`的重新渲染。

这个时候`getDerivedStateFromProps`每次渲染都会执行一次。

## getSnapshotBeforeUpdate

这个生命周期对我来说非常陌生，我基本没有怎么了解过它。

先看一下定义: 

> `getSnapshotBeforeUpdate` 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为第三个参数传入componentDidUpdate(prevProps, prevState, snapshot)

有点搞不明白是什么意思。。。可以根据定义来写个例子康康现象。

首先，`getSnapshotBeforeUpdate`必须有返回值，没有返回值是会报warning的。

![](/assets/img/2021-05-25/snapshotWarning.jpg)

```jsx
{% raw %}
import React from 'react';

import './Test2.css'

class Test2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('test snapshot -> preProps: ', preProps, 'preState: ', preState);
    return this.state.count
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log('test2 update -> preProps: ', preProps, 'preState: ', preState, 'snapshot: ', snapshot);
  }

  render() {
    console.log('test2 render', this.state.count)
    return (
      <div className="test2Container">
        <button onClick={() => this.setState({ count: this.state.count + 1 })} className="test2Button">test 2 add</button>
        <div className="text2">Test 2: {this.state.count}</div>
      </div>
    )
  }
}

export default Test2;
{% endraw %} 
```

![](/assets/img/2021-05-25/snapshot.gif)

`componentDidUpdate`肯定是在`render`之后才会执行的生命周期。可以看到上面动图中，`getSnapshotBeforeUpdate`是`晚于`render`早于`componentDidUpdate。

### 在render()的输出被渲染到DOM之前被调用之前

这句话其实值得好好揣摩一下，因为我们知道React是先操作`Virtual DOM`最终一系列操作之后将其渲染成真实的DOM。

所以`getSnapshotBeforeUpdate`的调用时机应该正好是 render() -> `getSnapshotBeforeUpdate` -> render DOM.

在这样一个时机提供一个生命周期到底是出于一种什么目的呢？

看了一些资料以后，得出的结论是`getSnapshotBeforeUpdate`能**保证**获取到的DOM是与`componentDidUpdate`中的结构**一致**。

这个时候就想到刚才在学习`componentWillUpdate`中提到的一句话

> React 16 版本后有 `suspense`、`异步渲染机制`等等，render 过程可以`被分割成多次`完成，还可以被暂停甚至回溯，这导致 componentWillUpdate 和 componentDidUpdate 执行前后可能会间隔很长时间，这导致 DOM 元素状态是不安全的，因为这时的值很有可能已经失效了。

所以我目前对这个生命周期的理解就是`componentWillUpdate`被标为`UNSAFE`之后的解决办法。给`componentWillUpdate`中一些`UNSAFE`的使用方法提供一了一个`SAFE`的解决方案。。

但说实话，我可能没有领悟到这个生命周期的真谛。

# 一些思考

在这个部分所说的话`纯属个人理解`，没有任何理论依据，也没有证实过，如果有错误欢迎指出。(hanqizheng598@gmail.com)

在写`hooks`的时候，特别强调一个概念叫做`数据驱动`。

页面就像是河床，而数据就像水流一样流过每个`页面(河床)`。某些作为依赖的数据改变了就会驱使对应的`hooks`执行一次，从而让界面重新渲染。

### 统一class中state的数据源

而前些日子，听一个大佬给讲class里他觉得特别好的一个写法就是去`善用getDerivedStateFromProps()`。

> 这也是为什么我写这篇的原因，就是想学习一下`getDerivedStateFromProps`

所有组件接收到的`props`都只是用于`更新state`的原料。

几乎很多的判断逻辑，计算逻辑，都可以从`render()`中解放出来，放入到`getDerivedStateFromProps`中去计算，判断，然后来更新state，来重新渲染。

这个操作有那么一点点类似于`数据驱动`。

一样的数据源，`没有引入额外的数据备份`，这是极其重要的一点，因为在实际的开发过程中，因为引入太多额外的数据备份导致更新了这份忘掉那份的情况屡次发生。

当数据源不纯的时候就会很容易引发种种bug。

1. React官方要求`getDerivedStateFromProps`的执行时期没有做特别的区分，无论初始化渲染还是后续的组件更新，**都会被调用**。这就是为了统一数据源的其中一项(因为在我看来，数据源不光是包含数据的来源，改变数据的途径也是其中需要考虑的)。

2. 将很多的判断逻辑和计算逻辑都放在`getDerivedStateFromProps`也是为了统一数据源，统一数据操作的途径。

给出一张特别不恰当的图，这张图`没有任何实际含义`，就是想让大家感受一下这种`数据驱动`的思想，感受一下Class也可以有类似的驱动操作。

![](/assets/img/2021-05-25/dataDriven.jpg)
![](/assets/img/2021-05-25/propsDriven.jpg)

--- 

新的生命周期，还是要真实的在开发中才能理解的更透彻一些，这些，只是开发前的理论基础吧。

# 参考

- [ECMAScript 6 入门](https://es6.ruanyifeng.com/)
- [Components and Props](https://reactjs.org/docs/components-and-props.html)
- [Update on Async Rendering](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)
- [You Probably Don't Need Derived State](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)
- [React concurrent Mode](https://reactjs.org/docs/concurrent-mode-intro.htmlhttps://reactjs.org/docs/concurrent-mode-intro.html)
- [Reconciliation - Dan's blog](https://overreacted.io/react-as-a-ui-runtime/#reconciliation)
- [Reconciliation - Official Document](https://reactjs.org/docs/reconciliation.html)