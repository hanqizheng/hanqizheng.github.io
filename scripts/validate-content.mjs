import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { parsePostFile } from "../lib/content-parser.mjs";

const contentDir = join(process.cwd(), "content", "posts");
const files = readdirSync(contentDir)
  .filter((file) => file.endsWith(".md"))
  .sort();

const localeSlugs = new Set();
const localeCanonicalSlugs = new Set();
const missingImages = [];
const missingCovers = [];
const metadataIssues = [];
const localizedTranslationKeys = new Map();

for (const file of files) {
  const post = parsePostFile(join(contentDir, file));
  const localizedFileMatch = file.match(/\.([a-z]{2})\.md$/u);

  if (!post.title) {
    throw new Error(`Missing title in ${file}`);
  }

  if (localizedFileMatch) {
    const locales = localizedTranslationKeys.get(post.translationKey) ?? new Set();
    locales.add(post.locale);
    localizedTranslationKeys.set(post.translationKey, locales);
  }

  if (post.coverTextTone !== null && !["light", "dark"].includes(post.coverTextTone)) {
    metadataIssues.push({
      file,
      field: "coverTextTone",
      detail: 'coverTextTone 只能是 "light" 或 "dark"。'
    });
  }

  if (post.coverSrc && !post.coverTextTone) {
    metadataIssues.push({
      file,
      field: "coverTextTone",
      detail: "提供封面时必须显式设置 coverTextTone。"
    });
  }

  if (typeof post.featured !== "boolean") {
    metadataIssues.push({
      file,
      field: "featured",
      detail: "featured 必须是布尔值。"
    });
  }

  if (post.featured && !post.coverSrc) {
    metadataIssues.push({
      file,
      field: "featured",
      detail: "精选文章必须提供静态封面。"
    });
  }

  const localeSlug = `${post.locale}:${post.slug}`;

  if (localeSlugs.has(localeSlug)) {
    throw new Error(`Duplicate slug: ${localeSlug}`);
  }

  localeSlugs.add(localeSlug);

  const canonicalSlug = canonicalPostSlug(post.slug);
  const localeCanonicalSlug = `${post.locale}:${canonicalSlug}`;

  if (localeCanonicalSlugs.has(localeCanonicalSlug)) {
    throw new Error(`Duplicate canonical slug: ${localeCanonicalSlug}`);
  }

  localeCanonicalSlugs.add(localeCanonicalSlug);

  if (post.coverSrc) {
    const coverPath = String(post.coverSrc);
    const localCoverPath = coverPath.startsWith("/") ? coverPath.slice(1) : coverPath;
    const publicCoverPath = join("public", localCoverPath);

    if (!coverPath.startsWith("/") || !existsSync(publicCoverPath)) {
      missingCovers.push({
        file,
        ref: coverPath,
        expected: publicCoverPath
      });
    }
  }

  for (const match of post.contentMarkdown.matchAll(/!\[[^\]]*]\(([^)]+)\)/g)) {
    const destination = match[1].trim();
    const rawRef = (destination.startsWith("<")
      ? destination.slice(1, destination.indexOf(">"))
      : destination.match(/^\S+/)?.[0] ?? destination
    ).split(/[?#]/)[0];

    if (!rawRef.includes("assets/img")) {
      continue;
    }

    const decoded = safeDecode(rawRef);
    const assetIndex = decoded.indexOf("assets/img/");
    const localPath = decoded.startsWith("/")
      ? decoded.slice(1)
      : assetIndex >= 0
        ? decoded.slice(assetIndex)
        : decoded;
    const publicPath = localPath.startsWith("assets/") ? join("public", localPath) : localPath;

    if (!existsSync(publicPath)) {
      missingImages.push({ file, ref: rawRef, expected: publicPath });
    }
  }
}

for (const [translationKey, locales] of localizedTranslationKeys) {
  if (!locales.has("zh") || !locales.has("en")) {
    metadataIssues.push({
      translationKey,
      field: "locale",
      detail: "使用语言后缀的新文章必须同时提供 .zh.md 与 .en.md。"
    });
  }
}

console.log(
  JSON.stringify(
    {
      postCount: files.length,
      uniqueLocaleSlugCount: localeSlugs.size,
      uniqueLocaleCanonicalSlugCount: localeCanonicalSlugs.size,
      missingImageCount: missingImages.length,
      missingImages,
      missingCoverCount: missingCovers.length,
      missingCovers,
      metadataIssueCount: metadataIssues.length,
      metadataIssues
    },
    null,
    2
  )
);

if (metadataIssues.length > 0) {
  process.exitCode = 1;
}

if ((missingImages.length > 0 || missingCovers.length > 0) && process.env.STRICT_CONTENT_VALIDATION === "1") {
  process.exitCode = 1;
}

function safeDecode(value) {
  try {
    return decodeURI(value);
  } catch {
    return value;
  }
}

function canonicalPostSlug(slug) {
  return slugify(
    slug
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
  );
}

function slugify(value) {
  const slug = value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^\w\s-]/g, " ")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return slug || `post-${Date.now()}`;
}
