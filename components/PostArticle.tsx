import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { getDictionary, localeHomePath, type Locale } from "@/lib/i18n";
import type { PublishedPost } from "@/lib/posts";
import { formatDisplayDate } from "@/lib/urls";
import Link from "next/link";
import { Suspense } from "react";

export function PostArticle({ post, locale }: { post: PublishedPost; locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <article className="post-page">
      <Link className="post-back-link" href={localeHomePath(locale)}>
        <span aria-hidden="true">←</span>
        <span>{dict.posts.backToPosts}</span>
      </Link>
      <header className="post-header">
        <div className="post-meta">
          <span>
            {dict.posts.writtenBy} {post.author}
          </span>
          <br />
          <time dateTime={post.published_at ?? undefined}>
            {dict.posts.publishedOn} {formatDisplayDate(post.published_at, locale)}
          </time>
        </div>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-divider" />
      </header>
      <Suspense fallback={<PostBodyFallback label={dict.posts.loading} />}>
        <MarkdownRenderer markdown={post.content_markdown} />
      </Suspense>
    </article>
  );
}

function PostBodyFallback({ label }: { label: string }) {
  return (
    <div className="post-body-loading" role="status" aria-live="polite" aria-label={label}>
      <span>{label}</span>
      <div className="post-loading-line" />
      <div className="post-loading-line post-loading-line-short" />
      <div className="post-loading-block" />
      <div className="post-loading-line" />
      <div className="post-loading-line post-loading-line-mid" />
    </div>
  );
}
