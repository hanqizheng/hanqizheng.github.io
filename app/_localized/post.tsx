import { PostArticle } from "@/components/PostArticle";
import {
  getCachedPublishedPostByAnyLocaleSlugOrCanonicalSlug,
  getCachedPublishedPostBySlugOrCanonicalSlug
} from "@/lib/cached-posts";
import { localeHomePath, type Locale } from "@/lib/i18n";
import { createPostMetadata, localizedPostAlternates } from "@/lib/post-metadata";
import { canonicalPostSlug } from "@/lib/slug";
import { postPath } from "@/lib/urls";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { cache } from "react";

type PostParams = {
  slug: string;
};

export async function postMetadata(locale: Locale, params: PostParams): Promise<Metadata> {
  const post = await loadPost(locale, params.slug);

  if (!post) {
    return {
      title: "Post not found"
    };
  }

  return createPostMetadata(post, localizedPostAlternates(post));
}

export async function LocalizedPostPage({ locale, params }: { locale: Locale; params: PostParams }) {
  const post = await loadPost(locale, params.slug);

  if (!post) {
    const sourcePost = await loadAnyLocalePost(params.slug);

    if (sourcePost) {
      permanentRedirect(localeHomePath(locale));
    }

    notFound();
  }

  const path = postPath(post);

  if (path !== `/${locale}/posts/${encodeURIComponent(decodeURIComponent(params.slug))}`) {
    permanentRedirect(path);
  }

  return <PostArticle post={post} locale={locale} />;
}

const loadPost = cache(async (locale: Locale, slugParam: string) => {
  const slug = canonicalPostSlug(decodeURIComponent(slugParam));
  return getCachedPublishedPostBySlugOrCanonicalSlug(slug, locale);
});

const loadAnyLocalePost = cache(async (slugParam: string) => {
  const slug = canonicalPostSlug(decodeURIComponent(slugParam));
  return getCachedPublishedPostByAnyLocaleSlugOrCanonicalSlug(slug);
});
