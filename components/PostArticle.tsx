import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { markdownToPlainText } from "@/lib/excerpt";
import { getDictionary, localeHomePath, type Locale } from "@/lib/i18n";
import type { PublishedPost } from "@/lib/posts";
import { getPostCover } from "@/lib/post-visuals";
import { formatDisplayDate } from "@/lib/urls";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export function PostArticle({ post, locale }: { post: PublishedPost; locale: Locale }) {
  const dict = getDictionary(locale);
  const cover = getPostCover(post);

  return (
    <article className={`post-page ${cover ? "post-page-has-cover" : "post-page-no-cover"}`}>
      {cover ? (
        <div className="post-hero-stage">
          <header className={`post-hero-sticky post-hero-tone-${cover.textTone}`}>
            <div className="post-hero-media">
              <Image
                className="post-hero-image"
                src={cover.src}
                alt=""
                fill
                priority
                sizes="100vw"
                style={{ objectPosition: cover.position }}
              />
            </div>
            <div className="post-hero-copy">
              <h1 className="post-title">{post.title}</h1>
              {post.excerpt ? <p className="post-hero-deck">{markdownToPlainText(post.excerpt)}</p> : null}
              <div className="post-meta post-hero-meta">
                <span>
                  {dict.posts.writtenBy} {post.author}
                </span>
                <span aria-hidden="true"> · </span>
                <time dateTime={post.published_at ?? undefined}>
                  {formatDisplayDate(post.published_at, locale)}
                </time>
              </div>
            </div>
          </header>
        </div>
      ) : null}
      <div className="post-content-surface">
        <div className="post-reading-column">
          <Link className="post-back-link" href={localeHomePath(locale)}>
            <ArrowLeft aria-hidden="true" size={16} strokeWidth={1.6} />
            <span>{dict.posts.backToPosts}</span>
          </Link>
          {!cover ? (
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
          ) : null}
          <Suspense fallback={<PostBodyFallback label={dict.posts.loading} />}>
            <MarkdownRenderer markdown={post.content_markdown} locale={locale} />
          </Suspense>
        </div>
      </div>
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
