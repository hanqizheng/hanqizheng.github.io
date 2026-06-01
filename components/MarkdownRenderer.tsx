import { MarkdownAsync } from "react-markdown";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type MarkdownRendererProps = {
  markdown: string;
};

export async function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  return (
    <div className="markdown-body">
      <MarkdownAsync
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeRaw,
          rehypeSanitize,
          [
            rehypePrettyCode,
            {
              theme: "github-light",
              keepBackground: false
            }
          ]
        ]}
        components={{
          // Markdown image dimensions are not known ahead of time, so use plain img for faithful rendering.
          // eslint-disable-next-line @next/next/no-img-element
          img: ({ src, alt }) => <img src={normalizeImageSrc(typeof src === "string" ? src : undefined)} alt={alt ?? ""} />
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
