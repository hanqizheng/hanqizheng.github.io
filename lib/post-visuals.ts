import type { PublishedPost } from "@/lib/posts";
import type { PostCoverTextTone } from "@/lib/db";

export type PostCover = {
  src: string;
  position?: string;
  textTone: PostCoverTextTone;
};

const POST_COVERS: Record<string, PostCover> = {
  "prompt-optimize": {
    src: "/covers/prompt-optimize.webp",
    position: "center",
    textTone: "dark"
  },
  "code-review-gpt-workflow": {
    src: "/covers/code-review-gpt-workflow.webp",
    position: "center",
    textTone: "dark"
  },
  "code-review": {
    src: "/covers/code-review.webp",
    position: "center",
    textTone: "dark"
  }
};

export function getPostCover(
  post: Pick<
    PublishedPost,
    "slug" | "translation_key" | "cover_src" | "cover_position" | "cover_text_tone"
  >
) {
  if (post.cover_src) {
    return {
      src: post.cover_src,
      position: post.cover_position ?? "center",
      textTone: post.cover_text_tone ?? "light"
    };
  }

  return POST_COVERS[post.translation_key] ?? POST_COVERS[post.slug] ?? null;
}
