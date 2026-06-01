import { createClient } from "@supabase/supabase-js";

export type PostStatus = "draft" | "published";
export type PostSource = "git" | "api";

export type PostRecord = {
  id: string;
  slug: string;
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

export function getSupabaseAdmin() {
  const supabaseUrl = process.env.SUPABASE_URL;
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
