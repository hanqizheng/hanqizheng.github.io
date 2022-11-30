---
layout: post
title: "记录命令式唤起Drawer/Modal与redux联合使用的冲突"
author: "Qizheng Han"
---

前些日子开发了一个 Drawer 组件的命令式使用方式，然后业务侧使用却发现了一个奇怪的问题。

# 起因

sugar 的 Drawer 组件一直是这么使用的：

```jsx
{% raw %}
<Drawer
  isOpen={isOpen}
  // ...other drawer props
>
{% endraw %}
```

这么写本身没啥问题，但是随着业务的复杂性越来越高，可能某一个页面会用到 2-3 个甚至更多个 Drawer。

如果每一个 Drawer 都需要去维护一个 state 来管理打开收起就会显得很麻烦。

这时候，命令式 Drawer 的需求就呼之欲出，这种只关心内容，打开收起都交给组件本身去维护，用起来就会方便很多。

# 问题本身

当然今天我们的关键不是在如何实现命令时操作 Drawer 组件，而是想说一下这个功能带来的一个 bug。

我们先来定义一个内容组件，我们假设这个内容组件很复杂，而且用到了`withRouter`这个高阶函数。

```jsx
{% raw %}
const CustomContent = () => {
  return <div>custom content</div>;
}

export default withRouter(CustomContent);
{% endraw %}
```

然后，我们来看看命令式的用法

```jsx
{% raw %}
import CustomContent from './CustomContent';

const Page = () => {
  return (
    <Button
      onClick={() => {
        Drawer.open({
          // ...other props
          content: <CustomContent />,
        });
      }}
    >
      Open Drawer
    </Button>
  );
}
{% endraw %}
```

这个时候我们点击 Button 就会报错

![](/assets/img/2022-11-29/routerReduxError.png)

如果使用了其他的 Redux HOC 或者三方库也可能报这个错

![](/assets/img/2022-11-29/reduxError.png)

# 原因

为什么会出现这个错误呢？

先来看看 Drawer.open 的实现方式，这里不会写具体的实现方式，简单的说就是新打开的 Drawer 会被放在 body 下面。

```js
$body.append($drawer);
```

而且，可以注意到， Drawer.open 其实是一个函数，函数的功能是直接把 Drawer 插在 body 上。

所以这段可执行的代码，或者说新绘制的 Drawer 本身，已经错过了 JSX 的解析阶段，来到了代码执行阶段。

也正因为如此， Redux 所产生的 Provider 包裹的元素中，并没有这段可执行代码刚刚插入的全新的 Drawer。

通过 ReactDOM.render 动态创建新的 React 实体。其 context 与当前代码所在 context 并不相同，因而无法获取 context 信息。

**这个 Drawer 相当于没有被 Provider 包裹**。 自然拿不到数据。

# 解决

## 修改 Drawer 渲染位置 (未解决)

解决办法尝试了很多，最开始尝试提供一个修改 Drawer 层级的配置项， 因为最开始猜测是 Drawer 不在当前页面的层级 (在 body 下)。

```jsx
if (appendElement) {
  appendElement.append($drawer);
} else {
  $body.append($drawer);
}
```

但其实并非这个原因导致，所以改变层级并不能解决这个问题。

## 组件哪获取 redux 数据改为 props 传递 (解决)

另一个方法就是，既然使用 redux 会报错，那就不要使用了。想在 Content 获取的数据，都在外层调用 Drawer 的页面中获取，然后作为 `CustomContent` 的 props 传进去。

这样是可以的，但是这种方法终究是低效且重复的，业务中使用到的 redux 场景有很多种，每一个都要变成 props 传入又是额外的工作量。

## 真正的解决方案 (解决)

这个时候去参考了一下 antd 的解决方案，给了我很大的启发。

```jsx
{% raw %}
import CustomContent from './CustomContent';

const Page = () => {
  const [drawerApi, ContextHolder] = Drawer.useDrawer();

  return (
    <>
      {ContextHolder}
      <Button
        onClick={() => {
          drawerApi.open({
            // ...other props
            content: <CustomContent />,
          });
        }}
      >
        Open Drawer
      </Button>
    </>
  );
}
{% endraw %}
```

`ContextHolder` 不是什么特别的东西，就是我们创建的 Drawer 实例。 只是他的渲染方式不再依赖 `ReactDOM.render` 而是组件使用者自己把他安放在需要绘制的地方，跟随界面一起绘制，这样就没有问题了。

# 参考

- [antd - Moadl](https://ant.design/components/modal-cn#%E4%B8%BA%E4%BB%80%E4%B9%88-modal-%E6%96%B9%E6%B3%95%E4%B8%8D%E8%83%BD%E8%8E%B7%E5%8F%96-contextredux%E7%9A%84%E5%86%85%E5%AE%B9%E5%92%8C-configprovider-localeprefixclstheme-%E7%AD%89%E9%85%8D%E7%BD%AE)

