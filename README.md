# 「Handler」

Minimal personal blog built with Next.js App Router and Supabase Postgres.

## Write and publish

Create Markdown files under `content/posts`. New posts should be written as a bilingual pair:

```text
content/posts/2026-06-01-my-post.zh.md
content/posts/2026-06-01-my-post.en.md
```

The date and base slug identify the same article across languages. Existing legacy files named `YYYY-MM-DD-slug.md` are treated as `zh`, so old content does not need to be renamed immediately.

```md
---
title: "My post"
slug: "my-post"
locale: "en"
translationKey: "my-post"
author: "Qizheng Han"
publishedAt: "2026-06-01"
status: "published"
excerpt: "Short summary"
cover: "/covers/my-post.webp"
coverPosition: "center"
coverTextTone: "dark"
featured: false
---

Raw Markdown content goes here.
```

`locale` can be `zh` or `en`. `translationKey` groups translated versions of the same article; keep it identical in both files. If both language versions can share the same URL slug, `translationKey` and `slug` can be the same value. If the English and Chinese URL slugs differ, keep `translationKey` stable so localized canonical URLs and alternate-language metadata remain aligned.

The complete authoring contract is documented in [`docs/post-authoring.md`](docs/post-authoring.md), with a copyable template at [`content/post-template.zh.md`](content/post-template.zh.md). It defines the static cover fields, editorial `featured` flag, heading hierarchy, normal images, sticky full-width banners, and looping image groups. Covers live under `public/covers/` and are deployed as static Vercel assets; Markdown and the database store only their root-relative paths and presentation metadata.

Publish through Git:

```bash
git add content/posts/2026-06-01-my-post.zh.md content/posts/2026-06-01-my-post.en.md
git commit -m "Add blog post"
git push
```

GitHub Actions syncs Markdown into Supabase. The Markdown body is stored as raw text in `content_markdown`; whitespace, newlines, indentation, tables, and code blocks are preserved.

Published posts use canonical URLs like `/zh/posts/my-post` and `/en/posts/my-post`. Legacy URLs such as `/posts/my-post` and `/2026/06/01/MyPost.html` redirect permanently to the canonical localized post URL.

Before syncing content to an existing database, apply every migration in `supabase/migrations` so the `posts` table includes localization and cover presentation fields.

## Development

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

By default, local development falls back to reading Markdown files directly when no database environment is configured. To simulate the production database path locally, use the included Postgres service:

```bash
cp .env.local.example .env.local
pnpm db:local:up
set -a; source .env.local; set +a; pnpm db:migrate
set -a; source .env.local; set +a; pnpm sync:posts
pnpm dev
```

`pnpm db:local:down` stops the local database without deleting its data. The Docker volume is persistent.

Environment variables:

- `NEXT_PUBLIC_SITE_URL`
- `BLOG_DATABASE_PROVIDER`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `BLOG_WRITE_TOKEN`
- `DATABASE_URL` for local Postgres or SQL migrations

## Deployment (Vercel)

The site is server-rendered (App Router) and reads from Supabase at request time, so it runs on Vercel rather than GitHub Pages. Published post reads use a five-minute server data cache; `POST /api/posts` invalidates that cache immediately after a successful publish. List queries fetch only card and metadata fields, while full Markdown is loaded only for an article page and rendered on the server. Once the repo is connected to Vercel, every push to `master` deploys to production and every pull request gets its own preview deployment — no extra workflow is needed.

One-time setup:

1. **Create the Supabase project** and apply the migrations:

   ```bash
   export DATABASE_URL="postgresql://postgres:<password>@db.<project>.supabase.co:5432/postgres"
   pnpm db:migrate   # runs supabase/migrations/*.sql in order (idempotent)
   ```

   Then seed existing content into the database:

   ```bash
   export SUPABASE_URL="https://<project>.supabase.co"
   export SUPABASE_SERVICE_ROLE_KEY="<service-role-key>"
   pnpm sync:posts
   ```

   The `public.posts` table has Row-Level Security enabled. Anonymous and
   authenticated Supabase clients may only read rows where
   `status = 'published'`; inserts, updates, and deletes must go through the
   server-side service role key or the direct migration connection.

2. **Connect the repo to Vercel** (Add New → Project → import this repo). Vercel auto-detects Next.js and pnpm; keep the default build (`next build`) and output settings. Set the production branch to `master`.

3. **Set Vercel environment variables** (Project → Settings → Environment Variables, apply to Production and Preview):

   | Variable | Value |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | `https://hanqizheng.vercel.app` |
   | `SUPABASE_URL` | `https://<project>.supabase.co` |
   | `SUPABASE_SERVICE_ROLE_KEY` | the Supabase service role key |
   | `DATABASE_URL` | the Supabase Postgres connection string used by production migrations |
   | `BLOG_WRITE_TOKEN` | a long random token (only if you use `POST /api/posts`) |
   | `CRON_SECRET` | a random string of at least 16 characters used to authenticate the database keep-alive cron |

   Leave `BLOG_DATABASE_PROVIDER` unset — it auto-selects `supabase` when `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are present. `DATABASE_URL` is used by the production build to run migrations, while requests use the Supabase client.

   The Vercel cron invokes `GET /api/cron/keep-alive` once per day. The endpoint
   performs one minimal query against Supabase so a low-traffic Free Plan project
   still has regular external database activity. Vercel automatically sends
   `CRON_SECRET` as a Bearer token; do not expose this value through a
   `NEXT_PUBLIC_` environment variable.

4. **Set the GitHub Actions secret** so the content-sync workflow (`.github/workflows/sync-posts.yml`) can write to Supabase (Repo → Settings → Secrets and variables → Actions):

   - `DATABASE_URL`

5. **Disable GitHub Pages** for this repo (Settings → Pages → Source: *None*). This repo previously served a static site from `master`; after the Next.js refactor lands, Pages can no longer build it, so production should come from Vercel only.

After the first production deploy, the publishing loop is fully automatic: commit a bilingual Markdown pair under `content/posts`, open a PR (Vercel builds a preview), and merge to `master` — the merge triggers the Vercel production deploy, and the `sync-posts` workflow loads the new Markdown into Supabase.

## API publishing

`POST /api/posts` is the auxiliary publishing path for trusted automation.

```bash
curl -X POST "$SITE_URL/api/posts" \
  -H "Authorization: Bearer $BLOG_WRITE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"Hello","contentMarkdown":"Opening paragraph.\n\n## Section\n\nRaw markdown.","cover":"/covers/hello.webp","coverTextTone":"dark","featured":true}'
```

The OpenAPI schema is available at `/openapi.json`.
