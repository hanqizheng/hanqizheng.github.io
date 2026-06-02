import { createClient } from "@supabase/supabase-js";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { parsePostFile } from "../lib/content-parser.mjs";

const contentDir = join(process.cwd(), "content", "posts");
const supabaseUrl = normalizeSupabaseUrl(process.env.SUPABASE_URL);
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const databaseProvider = resolveDatabaseProvider();

if (databaseProvider === "supabase" && (!supabaseUrl || !serviceRoleKey)) {
  throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be configured.");
}

const writer = await createWriter();

const files = readdirSync(contentDir)
  .filter((file) => file.endsWith(".md"))
  .sort();

for (const file of files) {
  const post = parsePostFile(join(contentDir, file));

  if (!post.title) {
    throw new Error(`Missing title in ${post.fileName}`);
  }

  const payload = {
    slug: post.slug,
    locale: post.locale,
    translation_key: post.translationKey,
    title: post.title,
    author: post.author,
    excerpt: post.excerpt,
    content_markdown: post.contentMarkdown,
    status: post.status,
    published_at: post.publishedAt,
    source: "git",
    updated_at: new Date().toISOString()
  };

  try {
    await writer.upsert(payload);
  } catch (error) {
    throw new Error(`Failed to sync ${post.fileName}: ${error instanceof Error ? error.message : String(error)}`);
  }

  console.log(`Synced ${post.fileName}`);
}

await writer.close?.();
console.log(`Synced ${files.length} posts.`);

async function createWriter() {
  if (databaseProvider === "postgres") {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error("DATABASE_URL must be configured.");
    }

    const { Pool } = await import("pg");
    const pool = new Pool({
      connectionString,
      ssl: postgresNeedsSsl(connectionString) ? { rejectUnauthorized: false } : undefined
    });

    return {
      async upsert(payload) {
        await pool.query(
          `
            insert into public.posts (
              slug,
              locale,
              translation_key,
              title,
              author,
              excerpt,
              content_markdown,
              status,
              published_at,
              source,
              updated_at
            )
            values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            on conflict (locale, slug) do update set
              translation_key = excluded.translation_key,
              title = excluded.title,
              author = excluded.author,
              excerpt = excluded.excerpt,
              content_markdown = excluded.content_markdown,
              status = excluded.status,
              published_at = excluded.published_at,
              source = excluded.source,
              updated_at = excluded.updated_at
          `,
          [
            payload.slug,
            payload.locale,
            payload.translation_key,
            payload.title,
            payload.author,
            payload.excerpt,
            payload.content_markdown,
            payload.status,
            payload.published_at,
            payload.source,
            payload.updated_at
          ]
        );
      },
      close() {
        return pool.end();
      }
    };
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });

  return {
    async upsert(payload) {
      const { error } = await supabase.from("posts").upsert(payload, {
        onConflict: "locale,slug"
      });

      if (error) {
        throw new Error(error.message);
      }
    }
  };
}

function resolveDatabaseProvider() {
  const configured = process.env.BLOG_DATABASE_PROVIDER?.toLowerCase();

  if (configured === "postgres") {
    return "postgres";
  }

  return "supabase";
}

function normalizeSupabaseUrl(value) {
  return value?.trim().replace(/\/rest\/v1\/?$/, "").replace(/\/+$/, "");
}

function postgresNeedsSsl(value) {
  return /supabase\.(co|com)|pooler\.supabase\.com|sslmode=require/.test(value);
}
