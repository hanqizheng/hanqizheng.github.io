import { getDictionary, type Locale } from "@/lib/i18n";

export function PostArticleLoading({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <div className="post-page post-page-loading" role="status" aria-live="polite" aria-label={dict.posts.loading}>
      <div className="post-back-link post-back-link-loading">
        <span aria-hidden="true">←</span>
        <span>{dict.posts.backToPosts}</span>
      </div>
      <header className="post-header">
        <div className="post-loading-meta" />
        <div className="post-loading-title" />
        <div className="post-divider post-divider-loading" />
      </header>
      <div className="post-body-loading">
        <span>{dict.posts.loading}</span>
        <div className="post-loading-line" />
        <div className="post-loading-line post-loading-line-short" />
        <div className="post-loading-block" />
        <div className="post-loading-line" />
        <div className="post-loading-line post-loading-line-mid" />
      </div>
    </div>
  );
}
