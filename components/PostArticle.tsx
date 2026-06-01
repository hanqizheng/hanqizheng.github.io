import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import type { PublishedPost } from "@/lib/posts";
import { formatDisplayDate } from "@/lib/urls";

export function PostArticle({ post }: { post: PublishedPost }) {
  return (
    <article className="post-page">
      <header className="post-header">
        <div className="post-meta">
          <span>Written by {post.author}</span>
          <br />
          <time dateTime={post.published_at ?? undefined}>on {formatDisplayDate(post.published_at)}</time>
        </div>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-divider" />
      </header>
      <MarkdownRenderer markdown={post.content_markdown} />
    </article>
  );
}
