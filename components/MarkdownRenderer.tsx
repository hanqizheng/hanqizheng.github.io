/* eslint-disable @next/next/no-img-element */

import { ArticleGallery } from "@/components/ArticleGallery";
import { getDictionary, type Locale } from "@/lib/i18n";
import { remarkArticleMedia } from "@/lib/remark-article-media";
import { MarkdownAsync } from "react-markdown";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type MarkdownRendererProps = {
  markdown: string;
  locale: Locale;
};

const articleMediaSanitizeSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    div: [
      ...(defaultSchema.attributes?.div ?? []),
      [
        "className",
        "article-prose-section",
        "article-banner-stage",
        "article-banner-sticky",
        "article-gallery-source"
      ]
    ],
    figure: [
      ...(defaultSchema.attributes?.figure ?? []),
      ["className", "article-gallery-slide"]
    ],
    figcaption: [
      ...(defaultSchema.attributes?.figcaption ?? []),
      ["className", "article-gallery-caption"]
    ]
  }
};

export async function MarkdownRenderer({ markdown, locale }: MarkdownRendererProps) {
  const galleryLabels = getDictionary(locale).posts.gallery;

  return (
    <div className="markdown-body">
      <MarkdownAsync
        remarkPlugins={[remarkGfm, remarkArticleMedia]}
        rehypePlugins={[
          rehypeRaw,
          [rehypeSanitize, articleMediaSanitizeSchema],
          [
            rehypePrettyCode,
            {
              theme: {
                light: "github-light",
                dark: "github-dark"
              },
              keepBackground: false
            }
          ]
        ]}
        components={{
          div: ({ className, children, node, ...props }) => {
            void node;

            return className?.includes("article-gallery-source") ? (
              <ArticleGallery labels={galleryLabels}>{children}</ArticleGallery>
            ) : (
              <div className={className} {...props}>
                {children}
              </div>
            );
          },
          // Markdown image dimensions are not known ahead of time, so use plain img for faithful rendering.
          img: ({ src, alt, node, ...props }) => {
            void node;

            return (
              <img
                {...props}
                src={normalizeImageSrc(typeof src === "string" ? src : undefined)}
                alt={alt ?? ""}
                loading="lazy"
                decoding="async"
              />
            );
          }
        }}
      >
        {markdown}
      </MarkdownAsync>
    </div>
  );
}

function normalizeImageSrc(src: string | undefined) {
  if (!src) {
    return "";
  }

  const assetIndex = src.indexOf("assets/img/");

  if (assetIndex >= 0) {
    return `/${src.slice(assetIndex)}`;
  }

  return src;
}
