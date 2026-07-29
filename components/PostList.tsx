import { formatPostExcerpt } from "@/lib/excerpt";
import { getDictionary, type Locale } from "@/lib/i18n";
import type { PublishedPostSummary } from "@/lib/posts";
import { getPostCover, type PostCover } from "@/lib/post-visuals";
import { formatDisplayDate, postPath } from "@/lib/urls";
import Image from "next/image";
import Link from "next/link";

export function PostList({ posts, locale }: { posts: PublishedPostSummary[]; locale: Locale }) {
  const dict = getDictionary(locale);

  if (posts.length === 0) {
    return (
      <div className="empty-state">
        <p>{dict.posts.empty}</p>
      </div>
    );
  }

  const featuredPosts = posts
    .map((post) => ({ post, cover: getPostCover(post) }))
    .filter(
      (entry): entry is { post: PublishedPostSummary; cover: PostCover } =>
        entry.post.featured && Boolean(entry.cover)
    )
    .slice(0, 3);
  const featuredIds = new Set(featuredPosts.map(({ post }) => post.id));
  const archivePosts = posts.filter((post) => !featuredIds.has(post.id));

  return (
    <div className="post-index">
      <header className="post-index-header">
        <p className="post-index-kicker">{dict.posts.journal}</p>
        <h1>{dict.posts.collectionTitle}</h1>
        <p>{dict.posts.collectionIntro}</p>
      </header>

      {featuredPosts.length > 0 ? (
        <section className="featured-posts" aria-labelledby="featured-posts-title">
          <div className="post-section-heading">
            <h2 id="featured-posts-title">{dict.posts.featured}</h2>
            <span>{String(featuredPosts.length).padStart(2, "0")}</span>
          </div>
          <div className="featured-post-grid">
            {featuredPosts.map(({ post, cover }, index) => (
              <Link
                className={`featured-post-card${index === 0 ? " featured-post-card-primary" : ""}`}
                href={postPath(post)}
                key={post.id}
              >
                <article>
                  <div className="featured-post-media">
                    <Image
                      src={cover.src}
                      alt=""
                      fill
                      priority={index === 0}
                      sizes={index === 0 ? "(max-width: 700px) 100vw, 1200px" : "(max-width: 700px) 100vw, 600px"}
                      style={{ objectPosition: cover.position }}
                    />
                  </div>
                  <div className="featured-post-copy">
                    <div className="featured-post-meta">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <time dateTime={post.published_at ?? undefined}>
                        {formatDisplayDate(post.published_at, locale)}
                      </time>
                    </div>
                    <h3>{post.title}</h3>
                    {post.excerpt ? <p>{formatPostExcerpt(post.excerpt)}</p> : null}
                    <span className="featured-post-read">{dict.posts.readArticle}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {archivePosts.length > 0 ? (
        <section className="post-archive" aria-labelledby="post-archive-title">
          <div className="post-section-heading">
            <h2 id="post-archive-title">{dict.posts.archive}</h2>
            <span>{String(archivePosts.length).padStart(2, "0")}</span>
          </div>
          <div className="post-list">
            {archivePosts.map((post, index) => (
              <Link className="post-list-item" href={postPath(post)} key={post.id}>
                <article>
                  <span className="post-list-index">
                    {String(featuredPosts.length + index + 1).padStart(2, "0")}
                  </span>
                  <div className="post-list-copy">
                    <h3 className="post-list-title">{post.title}</h3>
                    {post.excerpt ? <p className="post-list-excerpt">{formatPostExcerpt(post.excerpt)}</p> : null}
                  </div>
                  <time className="post-list-meta" dateTime={post.published_at ?? undefined}>
                    {formatDisplayDate(post.published_at, locale)}
                  </time>
                </article>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
