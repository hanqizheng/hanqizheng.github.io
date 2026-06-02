import { getDictionary, type Locale } from "@/lib/i18n";
import type { PublishedPost } from "@/lib/posts";
import { formatDisplayDate, postPath } from "@/lib/urls";
import Link from "next/link";

export function PostList({ posts, locale }: { posts: PublishedPost[]; locale: Locale }) {
  const dict = getDictionary(locale);

  if (posts.length === 0) {
    return (
      <div className="empty-state">
        <p>{dict.posts.empty}</p>
      </div>
    );
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <Link className="post-list-item" href={postPath(post)} key={post.id}>
          <article>
            <h2 className="post-list-title">{post.title}</h2>
            <time className="post-list-meta" dateTime={post.published_at ?? undefined}>
              {formatDisplayDate(post.published_at, locale)}
            </time>
            {post.excerpt ? <p className="post-list-excerpt">{post.excerpt}…</p> : null}
          </article>
        </Link>
      ))}
    </div>
  );
}
