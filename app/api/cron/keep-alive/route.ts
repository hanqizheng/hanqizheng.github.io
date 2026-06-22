import { getSupabaseAdmin } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    console.error("Database keep-alive is disabled because CRON_SECRET is not configured.");
    return noStoreJson({ ok: false, error: "Keep-alive is not configured" }, 503);
  }

  if (request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return noStoreJson({ ok: false, error: "Unauthorized" }, 401);
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("posts").select("id").limit(1);

    if (error) {
      throw new Error(error.message);
    }

    return noStoreJson({ ok: true, checkedAt: new Date().toISOString() });
  } catch (error) {
    console.error("Database keep-alive query failed.", error);
    return noStoreJson({ ok: false, error: "Database keep-alive failed" }, 503);
  }
}

function noStoreJson(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store"
    }
  });
}
