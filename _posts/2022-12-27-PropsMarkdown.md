---
layout: post
title: "类型定义转换组件props描述文档"
author: "Qizheng Han"
---

维护组件库的过程总是充满惊喜的。

但有时候随着频繁的操作一些流程内的东西，会发现很多低效的事情。

今天想说一下的，就是在开发组件的同时，必不可少的一步 - 编写组件说明文档。

而编写文档中，特别特别特别繁琐的一件事就是 编写 props 说明表格。

# 什么是 props 说明表格？

这里就拿 `ant-design` 里面的 props 说明来看一下。

![](/assets/img/2022-12-28/props.png)

> 图片源于：https://ant.design/components/breadcrumb-cn

对，就是这个，每次在维护文档的时候都要写，是一件繁琐且需要细心的事情。

# 可以可以自动生成呢？

其实有遇到过一些可以自动生成 props 说明文档的框架，很好奇怎么实现的。

至少说明一件事情，答案一定可以的。

# 类型定义

首先，组件库得是 `TypeScript` 写的。

类型的定义没有什么可以展开说的，如果不是特别了解 TS 建议先学习一下再来这里～

```ts
interface BreadcrumbProps {
  prefixCls?: string;
  routes?: Route[];
  params?: any;
  separator?: React.ReactNode;
  itemRender?: (
    route: Route,
    params: any,
    routes: Array<Route>,
    paths: Array<string>,
  ) => React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}
```
> 代码段来自：https://github.com/ant-design/ant-design/blob/master/components/breadcrumb/Breadcrumb.tsx

# 解析类型

自动生成文档的第一步，就是要解析组件的类型定义，能够识别出哪个是 prop 的名字，哪个是 prop 对应的类型。

这个涉及到`语法解析`。靠自己来造轮子有点太复杂了，如果时间允许可以研究，既然现在是想提效，那就借助一下3方库`typedoc`。

这个库可其实很强大，可以直接生成具体类型的描述网页，仅需运行即可。

但是因为组件库一般都有自己的官方网站，我们需要的只是解析出来的信息。这里我选择了 json 数据结构

## 入口

typedoc 需要一个入口配置，告诉它从哪里开始查找类型，解析类型。

默认是自动寻找`tsconfig.json`中的配置，但是 **每个组件都有自己所属的文件夹，类型文件又都在每个具体的文件夹中，所以入口就变成多个了**。

typedoc 如果在项目中 找到了 `typedoc.json` 这个文件，则会`优先`按照这个文件的配置来

```json
// typedoc.json
{
    "entryPoints": ["./src/index.ts", "./src/secondary-entry.ts"],
    "out": "doc"
}
```

多入口给 `entryPoints` 传递一个数组即可。

wait wait 胃特 胃

难不成我得手动维护这个配置文件？有新的组件加一个入口？

拒绝！

## 自动生成typedoc.json

`typedoc.json` 这个配置文件，其实就 2 个配置，一个入口，一个出口。

入口是存在动态改变的可能性，那我们就去动态读目录，获取所有组件的文件夹，拼接好入口数组即可

这个需要的先决条件:
- 存放组件的若干文件夹在一个特定的目录下。 (栗子中是 lib/components)
- 每一个组件需要构建文档的类型在特定文件内定义。 (栗子中选择了 type.ts)

```js
async function generateTypeJsonFile() {
  const COMPONENT_DIR_PATH = `${ROOT_PATH}/lib/components`;
  try {
    const files = await fs.readdirSync(COMPONENT_DIR_PATH);
    const tempEntryPoints = [];
    // 构建typedoc需要的多入口
    for (const file of files) {
      const isExistTypeFile = await fs.existsSync(`${COMPONENT_DIR_PATH}/${file}/type.ts`);
      if (isExistTypeFile) {
        tempEntryPoints.push(`"lib/components/${file}/type.ts"`);
      } else {
        console.log(`[ ${file} ] 没有找到对应类型文件，请检查。\n`);
      }
    }

    // 将构建好的配置内容写入文件
    await fs.writeFileSync(
      './typedoc.json',
      ['{', `  "entryPoints": [${tempEntryPoints.join(', ')}],`, '  "out": "type-docs"', '}'].join('\n')
    );
  } catch (err) {
    console.error(err);
    return '读取组件文档失败!';
  }
}
```

## 生成类型描述的 json 文件

这个在配置好配置文件之后很简单，只需要运行命令

```
$ npx typedoc --json [typedoc.json path]
```

这个也要自动化运行

```js
shell.exec(`npx typedoc --json ${TYPE_JSON_DOC_PATH}`);
```

会得到一个类型描述的json文件，类似下面这样

```json
{
  "id": 8,
  "name": "Separator",
  "kind": 4194304,
  "kindString": "Type alias",
  "flags": {},
  "sources": [
    {
      "fileName": "packages/sugar-design/lib/components/Breadcrumb/type.ts",
      "line": 13,
      "character": 12
    }
  ],
  "type": {
    "type": "union",
    "types": [
      {
        "type": "reference",
        "typeArguments": [
          {
            "type": "query",
            "queryType": {
              "type": "reference",
              "name": "BUILT_IN_SEPARATOR"
            }
          }
        ],
        "name": "ValueOf",
        "qualifiedName": "ValueOf",
        "package": "type-fest"
      },
      {
        "type": "reference",
        "name": "React.ReactNode",
        "qualifiedName": "React.ReactNode",
        "package": "@types/react"
      }
    ]
  }
}
```

## 读取描述 json 文件

读取 json 文件是整个环节里最重要，也是主要的开发量。

读取，其实就是解析，TS的所有类型写法都会以一种不同的type来展示

```ts
const TYPE_MAP = {
  // 基础类型
  INTRINSIC: 'intrinsic',
  // 定义一个对象的具体类型(暂时这么认为)
  REFLECTION: 'reflection',
  // 引用别的类型
  REFERENCE: 'reference',
  // 联合类型
  UNION: 'union',
  // 交叉类型
  INTERSECTION: 'intersection',
  // 数组
  ARRAY: 'array',
  // 条件类型
  CONDITIONAL: 'conditional',
};
```

通过递归去解析拼凑字符串

```js
function propTypeIdentify(argumentType) {
  if (argumentType.type === ARGUMENT_TYPE.INTRINSIC) {
    /**
     * 基础类型
     */
    return argumentType.name;
  } else if (argumentType.type === ARGUMENT_TYPE.LITERAL) {
    /**
     * 字面量类型
     * type A = 'a' / interface Test { a: true; b: '11'; c: 12 } 等
     */
    return argumentType.value;
  } else if (argumentType.type === ARGUMENT_TYPE.REFERENCE) {
    /**
     * 类型引用
     */
    return argumentType.name;
  } else if (argumentType.type === ARGUMENT_TYPE.UNION) {
    /**
     * 联合类型
     */
    return argumentType?.types?.map((type) => propTypeIdentify(type));
  } else if (argumentType.type === ARGUMENT_TYPE.QUERY) {
    /**
     * TODO: 暂时理解成ValueOf类似的第三方包提供的范型
     */
    return `${argumentType.name}\\<typeof ${argumentType?.queryType?.name}\\>`;
  } else if (argumentType.type === ARGUMENT_TYPE.REFLECTION && argumentType?.declaration?.children) {
    /**
     * 对象类型
     */
    const objectType = argumentType?.declaration?.children?.map(
      // 这里因为数据结构与props的reflection类型数据结构相同，直接复用
      (typeItem) => `${typeItem.name}: ${propTypeIdentify(typeItem)}`
    );
    return `{ ${objectType.join(', ')} }`;
  } else if (argumentType.type === ARGUMENT_TYPE.REFLECTION && argumentType?.declaration?.signatures) {
    /**
     * 函数类型
     */
    const params = argumentType?.declaration?.signatures?.[0]?.parameters?.map(
      (param) => `${param.name}: ${propTypeIdentify(param)}`
    );
    const returnType = argumentType?.declaration?.signatures?.[0]?.type?.name;
    return `\\(${params ? params?.join(', ') : ''}\\) => ${returnType}`;
  } else if (argumentType.type === ARGUMENT_TYPE.ARRAY) {
    /**
     * 数组类型
     */
    return `${simpleTypeObjectIdentify(argumentType?.elementType)}\\[\\]`;
  } else {
    return 'TestArgument';
  }
}

```

# 拼凑

然后，我们解析出的每一个类型都会被拼接成字符串

```js
// 类型文档拼接
function typeDocConcat(componentTypeJson) {
  let typeDocTemplate = [];

  const templateHeader = ['| 参数 | 说明 | 类型 | 必填 | 默认值 |', '| ----- | ------ | ------ | ---- | ------ |'];

  for (const componentType of componentTypeJson?.children || []) {
    if (canBuildDoc(componentType)) {
      typeDocTemplate.push(`\n### ${componentType.name}\n`);

      // interface类型
      if (componentType.kindString === TYPE_DEFINITION_WAY.INTERFACE) {
        const resultString = reflectionTypeStringConcat(componentType.children || []);
        typeDocTemplate.push(...templateHeader, ...resultString);
      } else if (
        componentType.kindString === TYPE_DEFINITION_WAY.TYPE &&
        componentType?.type?.type === TYPE_MAP.REFERENCE
      ) {
        // type 方式定义的类型引用场景 (type A = B)
        typeDocTemplate.push(`\n请参考${componentType?.type?.name}`);
      } else if (
        componentType.kindString === TYPE_DEFINITION_WAY.TYPE &&
        componentType?.type?.type === TYPE_MAP.REFLECTION
      ) {
        /**
         * type 方式定义的对象类型
         * type A = { a: string; b: number };
         */
        const resultString = reflectionTypeStringConcat(componentType?.type?.declaration?.children || []);
        typeDocTemplate.push(...templateHeader, ...resultString);
      } else if (
        componentType.kindString === TYPE_DEFINITION_WAY.TYPE &&
        componentType?.type?.type === TYPE_MAP.INTERSECTION
      ) {
        /**
         * type 方式定义的交叉类型
         * type A = B & C;
         */
        typeDocTemplate.push(...templateHeader);
        componentType?.type?.types.forEach((aliasItem) => {
          if (aliasItem.type === TYPE_MAP.REFLECTION) {
            const resultString = reflectionTypeStringConcat(aliasItem?.declaration?.children || []);
            typeDocTemplate.push(...resultString);
          } else if (aliasItem.type === TYPE_MAP.REFERENCE) {
            typeDocTemplate.push(
              `|${aliasItem.name}| 请参考 ${aliasItem.name} 组成交叉类型 | ${aliasItem.name}  | - | - |`
            );
          }
        });
      } else if (
        componentType.kindString === TYPE_DEFINITION_WAY.TYPE &&
        componentType?.type?.type === TYPE_MAP.UNION
      ) {
        /**
         * type 方式定义的联合类型
         * type A = B | C;
         */
        componentType?.type?.types.forEach((aliasItem) => {
          typeDocTemplate.push(...templateHeader);
          if (aliasItem.type === TYPE_MAP.REFLECTION) {
            const resultString = reflectionTypeStringConcat(aliasItem?.declaration?.children || []);
            typeDocTemplate.push(...resultString);
          } else if (aliasItem.type === TYPE_MAP.REFERENCE) {
            typeDocTemplate.push(
              `|${aliasItem.name}| 请参考 ${aliasItem.name} 组成联合类型 | ${aliasItem.name}  | - | - |`
            );
          }
        });
      }
    }
  }
}
```

# 结果

拼凑的字符串会被写入特定文件

```md
### BreadcrumbProps

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| ----- | ------ | ------ | ---- | ------ |
|activeId|activeId|T|否|-|
|className|className|string|否|-|
|clickLastOption|当前节点是否可以点击(仅影响末尾节点，对手动active节点无效)|boolean|否|-|
|onChange|onChange|\(id: T, event: MouseEvent\<HTMLElement, MouseEvent\>\) => void|否|-|
|options|options|BreadcrumbItem\[\]|否|-|
|separator|自定义分隔符|Separator|否|-|
|size|size|BreadcrumbSize|否|-|
|style|style|CSSProperties|否|-|
|withEllipsis|withEllipsis|boolean|否|-|

### DefaultBreadcrumbProps

| 参数 | 说明 | 类型 | 必填 | 默认值 |
| ----- | ------ | ------ | ---- | ------ |
|separator|separator|Separator|是|-|
|size|size|BreadcrumbSize|是|-|
```

这样就大功告成了。

# 参考

- [typedoc](https://typedoc.org/)