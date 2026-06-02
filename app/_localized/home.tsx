import { PostList } from "@/components/PostList";
import { getDictionary, localizedAlternates, localeHomePath, type Locale } from "@/lib/i18n";
import { listPublishedPosts } from "@/lib/posts";
import type { Metadata } from "next";

export function homeMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);

  return {
    title: dict.meta.postsTitle,
    description: dict.meta.siteDescription,
    alternates: {
      canonical: localeHomePath(locale),
      languages: localizedAlternates("/")
    }
  };
}

export async function LocalizedHomePage({ locale }: { locale: Locale }) {
  const posts = await listPublishedPosts(locale);

  return <PostList posts={posts} locale={locale} />;
}
