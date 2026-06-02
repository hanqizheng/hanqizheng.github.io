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

for (const file of files) {
  const post = parsePostFile(join(contentDir, file));

  if (!post.title) {
    throw new Error(`Missing title in ${file}`);
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

  for (const match of post.contentMarkdown.matchAll(/!\[[^\]]*]\(([^)]+)\)/g)) {
    const rawRef = match[1].split(/[?#]/)[0];

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

console.log(
  JSON.stringify(
    {
      postCount: files.length,
      uniqueLocaleSlugCount: localeSlugs.size,
      uniqueLocaleCanonicalSlugCount: localeCanonicalSlugs.size,
      missingImageCount: missingImages.length,
      missingImages
    },
    null,
    2
  )
);

if (missingImages.length > 0 && process.env.STRICT_CONTENT_VALIDATION === "1") {
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
