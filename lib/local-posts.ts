import type { PostRecord } from "@/lib/db";
import { canonicalPostSlug } from "@/lib/slug";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import YAML from "yaml";

export function hasSupabaseEnv() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export function listLocalPublishedPosts() {
  return readLocalPosts()
    .filter((post) => post.status === "published")
    .sort((a, b) => String(b.published_at).localeCompare(String(a.published_at)));
}

export function getLocalPostBySlug(slug: string) {
  return readLocalPosts().find((post) => post.slug === slug) ?? null;
}

export function getLocalPostBySlugOrCanonicalSlug(slug: string) {
  return readLocalPosts().find((post) => post.slug === slug || canonicalPostSlug(post.slug) === slug) ?? null;
}

export function getLocalPublishedPostBySlugOrCanonicalSlug(slug: string) {
  return (
    listLocalPublishedPosts().find((post) => post.slug === slug || canonicalPostSlug(post.slug) === slug) ?? null
  );
}

export function getLocalPublishedPostByLegacyPath(params: {
  year: string;
  month: string;
  day: string;
  slug: string;
}) {
  const publishedDate = `${params.year}-${params.month}-${params.day}`;
  return (
    listLocalPublishedPosts().find((post) => {
      return post.slug === params.slug && post.published_at?.startsWith(publishedDate);
    }) ?? null
  );
}

function readLocalPosts(): PostRecord[] {
  const contentDir = join(process.cwd(), "content", "posts");
  const files = readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"))
    .sort();

  return files.map((file) => {
    const raw = readFileSync(join(contentDir, file), "utf8");
    const parsed = parseFrontMatter(raw, file);
    const fileMatch = file.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);

    if (!fileMatch) {
      throw new Error(`Post filename must be YYYY-MM-DD-slug.md: ${file}`);
    }

    const [, year, month, day, fileSlug] = fileMatch;
    const publishedAt = normalizePublishedAt(parsed.data.publishedAt ?? `${year}-${month}-${day}`);

    return {
      id: file,
      slug: parsed.data.slug ?? fileSlug,
      title: parsed.data.title,
      author: parsed.data.author ?? "Qizheng Han",
      excerpt: parsed.data.excerpt ?? null,
      content_markdown: parsed.body,
      status: parsed.data.status ?? "published",
      published_at: publishedAt,
      created_at: publishedAt,
      updated_at: publishedAt,
      source: "git"
    };
  });
}

function parseFrontMatter(raw: string, filePath: string) {
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

  return {
    data: YAML.parse(yamlText) ?? {},
    body: raw.slice(bodyStart)
  };
}

function normalizePublishedAt(value: unknown) {
  const text = String(value);

  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    return `${text}T00:00:00.000Z`;
  }

  return new Date(text).toISOString();
}
