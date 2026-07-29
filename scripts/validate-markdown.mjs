import { readdirSync } from "node:fs";
import { join } from "node:path";
import { parsePostFile } from "../lib/content-parser.mjs";

const contentDir = join(process.cwd(), "content", "posts");
const files = readdirSync(contentDir)
  .filter((file) => file.endsWith(".md"))
  .sort();
const issues = [];

for (const file of files) {
  const post = parsePostFile(join(contentDir, file));
  const lines = post.contentMarkdown.split(/\r?\n/);
  const strictAuthoring = /\.(?:zh|en)\.md$/u.test(file);
  let fence = null;

  lines.forEach((line, index) => {
    const lineNumber = index + frontMatterLineCount(post.raw) + 1;
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})(.*)$/u);

    if (fenceMatch) {
      const marker = fenceMatch[1];

      if (!fence) {
        fence = { character: marker[0], length: marker.length, line: lineNumber };

        if (strictAuthoring && !fenceMatch[2].trim()) {
          issues.push({
            file,
            line: lineNumber,
            rule: "code-fence-language",
            detail: "新文章的代码块必须标注语言。",
            source: line.trim().slice(0, 140)
          });
        }
      } else if (marker[0] === fence.character && marker.length >= fence.length) {
        fence = null;
      }

      return;
    }

    if (fence) {
      return;
    }

    checkLine({ file, line, lineNumber, strictAuthoring });
  });

  if (fence) {
    issues.push({
      file,
      line: fence.line,
      rule: "unclosed-code-fence",
      detail: "代码块缺少结束标记。"
    });
  }

  const lastContentLineIndex = findLastContentLineIndex(lines);
  const lastContentLine = lines[lastContentLineIndex] ?? "";

  if (isBannerImageLine(lastContentLine)) {
    issues.push({
      file,
      line: lastContentLineIndex + frontMatterLineCount(post.raw) + 1,
      rule: "banner-last-block",
      detail: "吸顶横幅后必须保留正文，不能作为文章最后一个内容块。",
      source: lastContentLine.trim().slice(0, 140)
    });
  }
}

console.log(
  JSON.stringify(
    {
      fileCount: files.length,
      issueCount: issues.length,
      issues
    },
    null,
    2
  )
);

if (issues.length > 0) {
  process.exitCode = 1;
}

function checkLine({ file, line, lineNumber, strictAuthoring }) {
  if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/u.test(line)) {
    addIssue("control-character", "包含不可见控制字符。");
  }

  if (/^\s*#{1,6}(?![#\s]|$)/u.test(line)) {
    addIssue("heading-spacing", "标题标记后需要空格。");
  }

  if (/^\s*#(?!#)\s+/u.test(line)) {
    addIssue("body-h1", "页面标题已经是一级标题，正文必须从二级标题开始。");
  }

  if (/^\s*[-+*](?![-+*\s]|$)/u.test(line) || /^\s*\d+[.)](?!\s|$)/u.test(line)) {
    addIssue("list-spacing", "列表标记后需要空格。");
  }

  if (/^\s*[-+*]\s*$/u.test(line) || /^\s*\d+[.)]\s*$/u.test(line)) {
    addIssue("empty-list-item", "空列表项应该删除。");
  }

  if (/https?:\/\/\S*https?:\/\//u.test(line)) {
    addIssue("duplicated-link-scheme", "链接中出现了重复的 URL。");
  }

  if (strictAuthoring && /!\[\s*\]\(/u.test(line)) {
    addIssue("image-alt", "新文章的图片必须提供具体的 Alt 文本。");
  }

  if (strictAuthoring && /!\[\s*(?:image|图片|图)\s*\]\(/iu.test(line)) {
    addIssue("image-alt", "图片 Alt 文本需要描述内容，不能只写“图片”或“image”。");
  }

  const inlineCodeMarkers = [...line.matchAll(/(?<!\\)(`+)/gu)].map((match) => match[1].length);
  const markerCounts = new Map();

  for (const markerLength of inlineCodeMarkers) {
    markerCounts.set(markerLength, (markerCounts.get(markerLength) ?? 0) + 1);
  }

  if ([...markerCounts.values()].some((count) => count % 2 !== 0)) {
    addIssue("inline-code-delimiter", "行内代码标记没有成对出现。");
  }

  function addIssue(rule, detail) {
    issues.push({
      file,
      line: lineNumber,
      rule,
      detail,
      source: line.trim().slice(0, 140)
    });
  }
}

function findLastContentLineIndex(lines) {
  for (let index = lines.length - 1; index >= 0; index -= 1) {
    if (lines[index].trim()) {
      return index;
    }
  }

  return -1;
}

function isBannerImageLine(line) {
  return (
    /^\s*!\[[^\x5d]*\]\([^)]*\s+["'](?:banner|wide)["']\s*\)\s*$/iu.test(line) ||
    /^\s*!\[\s*(?:\[banner\]|banner\s*[:：]|wide\s*[:：])/iu.test(line)
  );
}

function frontMatterLineCount(raw) {
  const lines = raw.split(/\r?\n/);

  for (let index = 1; index < lines.length; index += 1) {
    if (/^---\s*$/u.test(lines[index])) {
      return index + 1;
    }
  }

  return 0;
}
