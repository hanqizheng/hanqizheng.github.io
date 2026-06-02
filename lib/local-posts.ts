import type { PostRecord } from "@/lib/db";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n";
import { canonicalPostSlug } from "@/lib/slug";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import YAML from "yaml";

export function listLocalPublishedPosts(locale?: Locale) {
  return readLocalPosts()
    .filter((post) => post.status === "published" && (!locale || post.locale === locale))
    .sort((a, b) => String(b.published_at).localeCompare(String(a.published_at)));
}

export function getLocalPostBySlug(slug: string, locale: Locale = DEFAULT_LOCALE) {
  return readLocalPosts().find((post) => post.locale === locale && post.slug === slug) ?? null;
}

export function getLocalPostBySlugOrCanonicalSlug(slug: string, locale: Locale = DEFAULT_LOCALE) {
  return readLocalPosts().find((post) => post.locale === locale && matchesPostSlug(post, slug)) ?? null;
}

export function getLocalPublishedPostBySlugOrCanonicalSlug(slug: string, locale: Locale = DEFAULT_LOCALE) {
  return listLocalPublishedPosts(locale).find((post) => matchesPostSlug(post, slug)) ?? null;
}

export function getLocalPublishedPostByLegacyPath(params: {
  year: string;
  month: string;
  day: string;
  slug: string;
}) {
  const publishedDate = `${params.year}-${params.month}-${params.day}`;
  return (
    listLocalPublishedPosts()
      .sort((a, b) => Number(b.locale === DEFAULT_LOCALE) - Number(a.locale === DEFAULT_LOCALE))
      .find((post) => {
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
    const fileMatch = file.match(/^(\d{4})-(\d{2})-(\d{2})-(.+?)(?:\.([a-z]{2}))?\.md$/);

    if (!fileMatch) {
      throw new Error(`Post filename must be YYYY-MM-DD-slug.md or YYYY-MM-DD-slug.locale.md: ${file}`);
    }

    const [, year, month, day, fileSlug, fileLocale] = fileMatch;
    const locale = parsed.data.locale ?? fileLocale ?? DEFAULT_LOCALE;

    if (!isLocale(locale)) {
      throw new Error(`Unsupported locale "${locale}" in ${file}`);
    }

    const publishedAt = normalizePublishedAt(parsed.data.publishedAt ?? `${year}-${month}-${day}`);

    return {
      id: file,
      slug: parsed.data.slug ?? fileSlug,
      locale,
      translation_key: parsed.data.translationKey ?? fileSlug,
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

function matchesPostSlug(post: Pick<PostRecord, "slug" | "translation_key">, slug: string) {
  return post.slug === slug || canonicalPostSlug(post.slug) === slug || canonicalPostSlug(post.translation_key) === slug;
}

function normalizePublishedAt(value: unknown) {
  const text = String(value);

  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    return `${text}T00:00:00.000Z`;
  }

  return new Date(text).toISOString();
}
