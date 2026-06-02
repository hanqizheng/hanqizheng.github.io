import { createClient } from "@supabase/supabase-js";
import { Pool } from "pg";

export type PostStatus = "draft" | "published";
export type PostSource = "git" | "api";
export type PostLocale = "zh" | "en";

export type PostRecord = {
  id: string;
  slug: string;
  locale: PostLocale;
  translation_key: string;
  title: string;
  author: string;
  excerpt: string | null;
  content_markdown: string;
  status: PostStatus;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  source: PostSource;
};

export type DatabaseProvider = "local" | "postgres" | "supabase";

const globalForPostgres = globalThis as unknown as {
  handlerBlogPostgresPool?: Pool;
};

export function databaseProvider(): DatabaseProvider {
  const configured = process.env.BLOG_DATABASE_PROVIDER?.toLowerCase();

  if (configured === "postgres") {
    return "postgres";
  }

  if (configured === "supabase") {
    return "supabase";
  }

  if (hasSupabaseEnv()) {
    return "supabase";
  }

  if (hasPostgresEnv()) {
    return "postgres";
  }

  return "local";
}

export function hasSupabaseEnv() {
  return Boolean(getSupabaseUrl() && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export function hasPostgresEnv() {
  return Boolean(process.env.DATABASE_URL);
}

export function getSupabaseAdmin() {
  const supabaseUrl = getSupabaseUrl();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be configured.");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}

export function getPostgresPool() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL must be configured.");
  }

  if (!globalForPostgres.handlerBlogPostgresPool) {
    globalForPostgres.handlerBlogPostgresPool = new Pool({
      connectionString,
      ssl: postgresNeedsSsl(connectionString) ? { rejectUnauthorized: false } : undefined
    });
  }

  return globalForPostgres.handlerBlogPostgresPool;
}

export function getSupabaseUrl() {
  return process.env.SUPABASE_URL?.trim().replace(/\/rest\/v1\/?$/, "").replace(/\/+$/, "");
}

function postgresNeedsSsl(connectionString: string) {
  return /supabase\.(co|com)|pooler\.supabase\.com|sslmode=require/.test(connectionString);
}
