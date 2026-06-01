import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import YAML from "yaml";
import { parseFrontMatter } from "../lib/content-parser.mjs";

const sourceDir = join(process.cwd(), "_posts");
const targetDir = join(process.cwd(), "content", "posts");

mkdirSync(targetDir, { recursive: true });

const files = readdirSync(sourceDir)
  .filter((file) => file.endsWith(".md"))
  .sort();

for (const file of files) {
  const match = file.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);

  if (!match) {
    throw new Error(`Unexpected post filename: ${file}`);
  }

  const [, year, month, day, slug] = match;
  const raw = readFileSync(join(sourceDir, file), "utf8");
  const parsed = parseFrontMatter(raw, file);
  const data = parsed.data;
  const title = data.title;

  if (!title) {
    throw new Error(`Missing title in ${file}`);
  }

  const frontMatter = {
    title,
    slug,
    author: data.author ?? "Qizheng Han",
    publishedAt: `${year}-${month}-${day}`,
    status: data.status ?? "published",
    excerpt: data.excerpt ?? createExcerpt(parsed.body)
  };

  const nextRaw = `---\n${YAML.stringify(frontMatter)}---\n${parsed.body}`;
  writeFileSync(join(targetDir, basename(file)), nextRaw, "utf8");
  console.log(`Migrated ${file}`);
}

console.log(`Migrated ${files.length} posts.`);

function createExcerpt(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .replace(/\[[^\]]+]\([^)]+\)/g, (match) => match.replace(/^\[/, "").replace(/]\([^)]+\)$/, ""))
    .replace(/^#+\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
}
