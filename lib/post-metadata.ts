import { localizedAlternates } from "@/lib/i18n";
import type { PublishedPost } from "@/lib/posts";
import { canonicalPostSlug } from "@/lib/slug";
import { postPath, siteUrl } from "@/lib/urls";
import type { Metadata } from "next";

type LanguageAlternates = NonNullable<Metadata["alternates"]>["languages"];

export function createPostMetadata(post: PublishedPost, languages?: LanguageAlternates): Metadata {
  const canonicalPath = postPath(post);
  const canonicalUrl = absoluteSiteUrl(canonicalPath);
  const description = summarizeMetadataText(post.excerpt ?? post.content_markdown);
  const imageUrl = findFirstMarkdownImageUrl(post.content_markdown);
  const images = imageUrl ? [{ url: imageUrl, alt: post.title }] : undefined;

  return {
    title: post.title,
    description,
    authors: [{ name: post.author }],
    alternates: {
      canonical: canonicalPath,
      languages
    },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: canonicalUrl,
      siteName: "「Handler」",
      locale: post.locale === "zh" ? "zh_CN" : "en_US",
      alternateLocale: [post.locale === "zh" ? "en_US" : "zh_CN"],
      authors: [post.author],
      publishedTime: post.published_at ?? undefined,
      images
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: post.title,
      description,
      images: imageUrl ? [imageUrl] : undefined
    }
  };
}

export function localizedPostAlternates(post: Pick<PublishedPost, "translation_key">) {
  return localizedAlternates(`/posts/${canonicalPostSlug(post.translation_key)}`);
}

function summarizeMetadataText(value: string) {
  const normalized = value
    .replace(/!\[[^\]]*]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
    .replace(/[#>*_`|~]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const characters = Array.from(normalized);

  return characters.length > 180 ? `${characters.slice(0, 180).join("").trimEnd()}...` : normalized;
}

function findFirstMarkdownImageUrl(markdown: string) {
  const match = markdown.match(/!\[[^\]]*]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/);

  if (!match) {
    return undefined;
  }

  return absoluteSiteUrl(normalizeImagePath(match[1]));
}

function normalizeImagePath(src: string) {
  const withoutQuery = src.split(/[?#]/)[0];
  const assetIndex = withoutQuery.indexOf("assets/img/");

  if (assetIndex >= 0) {
    return `/${withoutQuery.slice(assetIndex)}`;
  }

  return withoutQuery;
}

function absoluteSiteUrl(pathOrUrl: string) {
  return new URL(pathOrUrl, siteUrl()).toString();
}
