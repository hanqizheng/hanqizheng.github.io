---
layout: post
title: "组件库按需加载"
author: "Qizheng Han"
---

# 什么是按需加载？

对于 Sugar 这样体量较大的组件库，如果仅仅是使用一个 Button 组件就要把整个 sugar 引入进来，未免太过了。

所以想要的理想效果就是，使用了 Button 就仅仅将 Button 相关代码引入即可。

```js
import { Button } from 'sugar-design';
import Button from 'sugar-design/lib/button';
```

但是这样写，每一个引入的组件都要详细的给出具体的引入路径，感觉很麻烦。

希望是引入时还像原来的写法，但真实的效果又是仅引入了对应组件的代码。

```js
import { Button } from 'sugar-design';
 
//      ↓ ↓ ↓ ↓ ↓ ↓
 
// 不一定真的长这个样子，意思大概是这么个意思
var _button = require('sugar-design/lib/Button');
```

## 旧按需加载的原理简析

旧的按需加载，其实是 sugar 内部保存了一套查询组件的路径 Map。通过在使用到 sugar 的项目中配置好 babel 相关的内容，就可以完成按需加载。

```js
const COMPONENT_MAP = {
  Button: 'sugar-design/lib/components/Button',
  // ...
}

module.exports = function customComponentName(name) {
  return COMPONENT_MAP[name];
}
```

接下来是项目中对应的 babel 配置

```js
// .babelrc

// ...other babel config

const customComponentName = require('sugar-design/babel.import');

// ...other babel config

{
  libraryName: 'sugar-design',
  // ...other sugar babel config
  customName: (name) => customComponentName(name),
}

```

**这么做有两点不好：**
- 需要额外维护这份map，可能在共建的时候其他人都不知道这件事儿，忘记配置引发错误。
- map的更新需要手动更新这里


可以看到把这个组件路径map导入以后，根据具体使用的组件来查询需要引入的代码。



## 新按需加载的原理简析

新的按需加载原理，则是完全依赖 sugar 的目录结构，sugar 内部不需要再维护任何的路径文件，按需加载的组件查询**直接按照目录结构来**。

```js
// .babelrc

// ...other babel config
{
  libraryName: 'sugar-design',
  // ...other sugar babel config
  customName: (name) => {
    return `sugar-design/lib/components/${name}`;
  },
}
```

## 为什么要舍弃原先的按需加载方式？

- sugar内部维护一份路径Map，会在每次产生新组件时，或者有路径改动时，都去这份 babel.import.js 中进行修改，随着现在参与 sugar 共建的人变多，其实大家都不会注意到这里，一旦忘记配置，则会导致线上白屏。
- 新的按需加载方式，对sugar本身的目录结构有了一定的强限制，使得 sugar 目录结构更规范清晰，也使得组件导出时更加谨慎合理



## 产生的影响有哪些？

需要后续新增的组件也严格按照这种目录结构来导出组件

需要将所有目前有用到的组件，路径都要改动到契合 sugar-design/lib/component/xxxxx 

类似 openModal / sendMessage 这样的命令式方法，都需要依附在对应的组件上使用，而不是像原来一样直接从 sugar 中导入使用。