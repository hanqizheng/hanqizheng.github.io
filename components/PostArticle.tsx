import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { getDictionary, type Locale } from "@/lib/i18n";
import type { PublishedPost } from "@/lib/posts";
import { formatDisplayDate } from "@/lib/urls";

export function PostArticle({ post, locale }: { post: PublishedPost; locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <article className="post-page">
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
      <MarkdownRenderer markdown={post.content_markdown} />
    </article>
  );
}
