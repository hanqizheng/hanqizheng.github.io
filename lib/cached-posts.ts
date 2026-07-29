import "server-only";

import { type Locale } from "@/lib/i18n";
import {
  getPublishedPostByAnyLocaleSlugOrCanonicalSlug,
  getPublishedPostBySlugOrCanonicalSlug,
  listAllPublishedPosts,
  listPublishedPosts
} from "@/lib/posts";
import { unstable_cache } from "next/cache";

export const PUBLISHED_POSTS_CACHE_TAG = "published-posts";
const REVALIDATE_SECONDS = 300;

const cachedPublishedPosts = unstable_cache(
  async (locale: Locale) => listPublishedPosts(locale),
  ["published-posts-by-locale"],
  { revalidate: REVALIDATE_SECONDS, tags: [PUBLISHED_POSTS_CACHE_TAG] }
);

const cachedAllPublishedPosts = unstable_cache(
  async () => listAllPublishedPosts(),
  ["all-published-posts"],
  { revalidate: REVALIDATE_SECONDS, tags: [PUBLISHED_POSTS_CACHE_TAG] }
);

const cachedPublishedPost = unstable_cache(
  async (slug: string, locale: Locale) => getPublishedPostBySlugOrCanonicalSlug(slug, locale),
  ["published-post-by-slug"],
  { revalidate: REVALIDATE_SECONDS, tags: [PUBLISHED_POSTS_CACHE_TAG] }
);

const cachedPublishedPostInAnyLocale = unstable_cache(
  async (slug: string) => getPublishedPostByAnyLocaleSlugOrCanonicalSlug(slug),
  ["published-post-by-slug-in-any-locale"],
  { revalidate: REVALIDATE_SECONDS, tags: [PUBLISHED_POSTS_CACHE_TAG] }
);

export function listCachedPublishedPosts(locale: Locale) {
  return process.env.NODE_ENV === "production" ? cachedPublishedPosts(locale) : listPublishedPosts(locale);
}

export function listCachedAllPublishedPosts() {
  return process.env.NODE_ENV === "production" ? cachedAllPublishedPosts() : listAllPublishedPosts();
}

export function getCachedPublishedPostBySlugOrCanonicalSlug(slug: string, locale: Locale) {
  return process.env.NODE_ENV === "production"
    ? cachedPublishedPost(slug, locale)
    : getPublishedPostBySlugOrCanonicalSlug(slug, locale);
}

export function getCachedPublishedPostByAnyLocaleSlugOrCanonicalSlug(slug: string) {
  return process.env.NODE_ENV === "production"
    ? cachedPublishedPostInAnyLocale(slug)
    : getPublishedPostByAnyLocaleSlugOrCanonicalSlug(slug);
}
