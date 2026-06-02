import { PostArticle } from "@/components/PostArticle";
import { localeHomePath, localizedAlternates, type Locale } from "@/lib/i18n";
import { getPublishedPostByAnyLocaleSlugOrCanonicalSlug, getPublishedPostBySlugOrCanonicalSlug } from "@/lib/posts";
import { canonicalPostSlug } from "@/lib/slug";
import { postPath } from "@/lib/urls";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

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

  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    authors: [{ name: post.author }],
    alternates: {
      canonical: postPath(post),
      languages: localizedAlternates(`/posts/${canonicalPostSlug(post.translation_key)}`)
    }
  };
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

async function loadPost(locale: Locale, slugParam: string) {
  const slug = canonicalPostSlug(decodeURIComponent(slugParam));
  return getPublishedPostBySlugOrCanonicalSlug(slug, locale);
}

async function loadAnyLocalePost(slugParam: string) {
  const slug = canonicalPostSlug(decodeURIComponent(slugParam));
  return getPublishedPostByAnyLocaleSlugOrCanonicalSlug(slug);
}
