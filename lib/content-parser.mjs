import { readFileSync } from "node:fs";
import { basename } from "node:path";
import YAML from "yaml";

export function parsePostFile(filePath) {
  const raw = readFileSync(filePath, "utf8");
  const fileName = basename(filePath);
  const match = fileName.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);

  if (!match) {
    throw new Error(`Post filename must be YYYY-MM-DD-slug.md: ${fileName}`);
  }

  const [, year, month, day, fileSlug] = match;
  const parsed = parseFrontMatter(raw, filePath);
  const publishedAt = parsed.data.publishedAt ?? `${year}-${month}-${day}`;

  return {
    filePath,
    fileName,
    raw,
    frontMatter: parsed.data,
    contentMarkdown: parsed.body,
    title: parsed.data.title,
    slug: parsed.data.slug ?? fileSlug,
    author: parsed.data.author ?? "Qizheng Han",
    excerpt: parsed.data.excerpt ?? null,
    status: parsed.data.status ?? "published",
    publishedAt: normalizePublishedAt(publishedAt)
  };
}

export function parseFrontMatter(raw, filePath = "markdown file") {
  if (!raw.startsWith("---")) {
    throw new Error(`Missing front matter in ${filePath}`);
  }

  const firstLineEnd = raw.indexOf("\n");
  const closingMatch = raw.slice(firstLineEnd + 1).match(/\n---[ \t]*\r?\n/);

  if (!closingMatch || closingMatch.index === undefined) {
    throw new Error(`Missing closing front matter delimiter in ${filePath}`);
  }

  const closingStart = firstLineEnd + 1 + closingMatch.index;
  const bodyStart = closingStart + closingMatch[0].length;
  const yamlText = raw.slice(firstLineEnd + 1, closingStart);
  const body = raw.slice(bodyStart);

  return {
    data: YAML.parse(yamlText) ?? {},
    body
  };
}

function normalizePublishedAt(value) {
  const text = String(value);

  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    return `${text}T00:00:00.000Z`;
  }

  return new Date(text).toISOString();
}
