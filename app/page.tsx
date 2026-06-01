import { listPublishedPosts } from "@/lib/posts";
import { formatDisplayDate, postPath } from "@/lib/urls";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await listPublishedPosts();

  if (posts.length === 0) {
    return (
      <div className="empty-state">
        <p>No posts yet.</p>
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
              {formatDisplayDate(post.published_at)}
            </time>
            {post.excerpt ? <p className="post-list-excerpt">{post.excerpt}</p> : null}
          </article>
        </Link>
      ))}
    </div>
  );
}
