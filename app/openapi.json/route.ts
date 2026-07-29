export const dynamic = "force-static";

export function GET(request: Request) {
  const origin = new URL(request.url).origin;

  return Response.json({
    openapi: "3.1.0",
    info: {
      title: "Handler Blog Publishing API",
      version: "1.0.0"
    },
    servers: [{ url: origin }],
    paths: {
      "/api/posts": {
        post: {
          summary: "Create a blog post",
          security: [{ bearerAuth: [] }],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["title", "contentMarkdown"],
                  properties: {
                    title: { type: "string" },
                    slug: { type: "string" },
                    locale: { type: "string", enum: ["zh", "en"], default: "zh" },
                    translationKey: {
                      type: "string",
                      description: "Shared key that groups translated versions of the same post."
                    },
                    author: { type: "string", default: "Qizheng Han" },
                    excerpt: { type: ["string", "null"] },
                    cover: {
                      type: ["string", "null"],
                      description: "Root-relative path to a static asset under public/."
                    },
                    coverPosition: {
                      type: ["string", "null"],
                      description: "CSS object-position used when the cover is cropped."
                    },
                    coverTextTone: {
                      type: ["string", "null"],
                      enum: ["light", "dark", null],
                      description: "Foreground tone used for title and metadata over the cover."
                    },
                    featured: {
                      type: "boolean",
                      default: false,
                      description: "Editorial placement in the featured section; requires a cover."
                    },
                    contentMarkdown: {
                      type: "string",
                      description: "Raw Markdown. Whitespace, indentation, and newlines are preserved."
                    },
                    status: { type: "string", enum: ["draft", "published"], default: "published" },
                    publishedAt: {
                      type: "string",
                      description: "ISO datetime or YYYY-MM-DD date string."
                    }
                  }
                }
              }
            }
          },
          responses: {
            "201": { description: "Post created" },
            "400": { description: "Invalid request body" },
            "401": { description: "Unauthorized" },
            "409": { description: "Duplicate slug" }
          }
        }
      }
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer"
        }
      }
    }
  });
}
