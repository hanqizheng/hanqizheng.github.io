# 博文编写约定

页面的文章标题会自动渲染为唯一的一级标题。正文从二级标题开始，并通过少量固定的 Markdown 约定选择普通图片、吸顶横幅和循环图片组。

## 1. 文件与 Front Matter

新文章使用中英文配对文件：

```text
content/posts/2026-06-01-my-post.zh.md
content/posts/2026-06-01-my-post.en.md
```

```yaml
---
title: 文章标题
slug: my-post
locale: zh
translationKey: my-post
author: Qizheng Han
publishedAt: 2026-06-01
status: draft
excerpt: 一到两句话的纯文本摘要，不要放标题、列表或图片。
cover: /covers/my-post.webp
coverPosition: center
coverTextTone: dark
featured: false
---
```

- 新文章必须提供 `.zh.md` / `.en.md` 配对；仓库内没有语言后缀的文件是历史内容，仍按中文读取并渐进整理。
- 封面是随代码部署到 Vercel 的静态资源，放在 `public/covers/`。
- 推荐尺寸为 `1600 × 900`，格式为 WebP，文件名使用稳定的 `translationKey`。
- `coverPosition` 使用 CSS `object-position` 语法，例如 `center`、`50% 35%`。
- `coverTextTone` 是封面必填项，决定标题使用深色还是浅色。淡色、大色块封面通常使用 `dark`；深色照片通常使用 `light`。
- `featured: true` 是编辑选择，控制文章是否进入首页“近期专题”。精选文章必须提供封面；普通文章不再因为有封面而自动成为精选。
- 数据库只保存静态路径和裁切位置，不保存图片文件。

可以从 [`content/post-template.zh.md`](../content/post-template.zh.md) 复制完整模板。

## 2. 正文层级

Front Matter 的 `title` 已经是页面的一级标题，正文不要再写 `#`：

```md
## 章节标题

正文段落。

### 小节标题
```

段落之间保留一个空行。列表标记、引用标记和标题标记后必须有空格。

## 3. 图片渲染

### 普通图片

普通图片跟随正文宽度：

```md
![图片的具体描述](/assets/img/2026-06-01/example.webp)
```

Alt 文本用于可访问性，也会作为图片组的说明文字；不要写“图片”或“image”这类无信息文本。

### 吸顶横幅

使用标准 Markdown 的图片 title `"banner"`。横幅进入视口后吸顶，随后被下一段正文覆盖：

```md
![横幅内容的具体描述](/assets/img/2026-06-01/banner.webp "banner")
```

旧的 `banner:` / `[banner]` Alt 前缀仍兼容，但新文章只使用上面的写法。

横幅不能是文章最后一个内容块；后面至少需要一段正文，作为覆盖横幅并结束 Sticky 交互的内容。

### 循环图片组

连续放置至少两张“只有图片的段落”，中间不要插入文字、标题或分隔线：

```md
![第一张图片的说明](/assets/img/2026-06-01/step-1.webp)

![第二张图片的说明](/assets/img/2026-06-01/step-2.webp)

![第三张图片的说明](/assets/img/2026-06-01/step-3.webp)
```

渲染器会自动把它们变成循环图片组：横向手势一次只切一张，快速手势会越过后回弹；桌面端也支持按钮和方向键。图片组不显示页码，下一张按钮的边界会显示 7 秒自动切换进度；悬停、聚焦或拖动时暂停。

如果两张图片不应组成图片组，在它们之间加入正文、标题或 `---`。

普通图片、横幅和图片组约定只作用于 Markdown 顶层的“只有图片的段落”。列表和引用中的图片保持普通正文布局，不要在嵌套结构中使用 `"banner"`。

## 4. 代码、引用与表格

代码块必须写语言名称：

````md
```ts
const answer = 42;
```
````

引用用于真正的引用或需要强调的一段话：

```md
> 一段完整的引用。
```

表格使用 GFM 管道语法。不要使用 HTML 标签控制页面布局；布局由渲染器负责。

## 5. 发布前检查

```bash
pnpm validate:content
pnpm lint
pnpm build
```

`validate:content` 会检查 Front Matter、双语配对、静态封面和正文图片路径，并拒绝不可见控制字符、末尾横幅、未闭合代码块、不成对的行内代码标记，以及缺少空格的标题或列表。

所有文章都禁止在正文中重复一级标题。对于使用 `.zh.md` / `.en.md` 新格式的文章，校验还会强制要求图片提供有效 Alt 文本、代码块提供语言。无语言后缀的历史文章在后两项上暂时使用兼容规则；编辑旧文章时应按本规范逐步整理。
