import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { parsePostFile } from "../lib/content-parser.mjs";

const contentDir = join(process.cwd(), "content", "posts");
const files = readdirSync(contentDir)
  .filter((file) => file.endsWith(".md"))
  .sort();

const slugs = new Set();
const canonicalSlugs = new Set();
const missingImages = [];

for (const file of files) {
  const post = parsePostFile(join(contentDir, file));

  if (!post.title) {
    throw new Error(`Missing title in ${file}`);
  }

  if (slugs.has(post.slug)) {
    throw new Error(`Duplicate slug: ${post.slug}`);
  }

  slugs.add(post.slug);

  const canonicalSlug = canonicalPostSlug(post.slug);

  if (canonicalSlugs.has(canonicalSlug)) {
    throw new Error(`Duplicate canonical slug: ${canonicalSlug}`);
  }

  canonicalSlugs.add(canonicalSlug);

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
      uniqueSlugCount: slugs.size,
      uniqueCanonicalSlugCount: canonicalSlugs.size,
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
