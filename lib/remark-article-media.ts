type MarkdownNode = {
  type: string;
  alt?: string | null;
  title?: string | null;
  value?: string;
  children?: MarkdownNode[];
  data?: {
    hName?: string;
    hProperties?: Record<string, unknown>;
  };
};

const BANNER_PREFIX = /^\s*(?:\[banner\]|banner\s*[:：]|wide\s*[:：])\s*/iu;
const BANNER_TITLE = /^(?:banner|wide)$/iu;

export function remarkArticleMedia() {
  return (tree: MarkdownNode) => {
    if (!tree.children) {
      return;
    }

    const groupedChildren = groupImageRuns(tree.children);
    tree.children = wrapProseSections(groupedChildren);
  };
}

function groupImageRuns(children: MarkdownNode[]) {
  const output: MarkdownNode[] = [];

  for (let index = 0; index < children.length; ) {
    const node = children[index];

    if (!isRegularImageParagraph(node)) {
      output.push(toBannerStage(node));
      index += 1;
      continue;
    }

    const run: MarkdownNode[] = [];

    while (index < children.length && isRegularImageParagraph(children[index])) {
      run.push(children[index]);
      index += 1;
    }

    const images = run.flatMap(imageNodes);

    if (images.length < 2) {
      output.push(run[0]);
      continue;
    }

    output.push({
      type: "articleGallery",
      data: {
        hName: "div",
        hProperties: {
          className: ["article-gallery-source"]
        }
      },
      children: images.map((image) => toGallerySlide(image))
    });
  }

  return output;
}

function wrapProseSections(children: MarkdownNode[]) {
  const output: MarkdownNode[] = [];
  let prose: MarkdownNode[] = [];

  const flushProse = () => {
    if (prose.length === 0) {
      return;
    }

    output.push({
      type: "articleProseSection",
      data: {
        hName: "div",
        hProperties: {
          className: ["article-prose-section"]
        }
      },
      children: prose
    });
    prose = [];
  };

  for (const node of children) {
    if (hasClassName(node, "article-banner-stage")) {
      flushProse();
      output.push(node);
    } else {
      prose.push(node);
    }
  }

  flushProse();
  return output;
}

function toBannerStage(node: MarkdownNode) {
  if (!isBannerImageParagraph(node)) {
    return node;
  }

  const image = imageNodes(node)[0];

  if (image) {
    image.alt = image.alt?.replace(BANNER_PREFIX, "") ?? "";
    image.title = null;
  }

  return {
    type: "articleBanner",
    data: {
      hName: "div",
      hProperties: {
        className: ["article-banner-stage"]
      }
    },
    children: [
      {
        type: "articleBannerSticky",
        data: {
          hName: "div",
          hProperties: {
            className: ["article-banner-sticky"]
          }
        },
        children: image ? [image] : []
      }
    ]
  };
}

function toGallerySlide(image: MarkdownNode | undefined): MarkdownNode {
  const alt = image?.alt?.trim() ?? "";
  const children: MarkdownNode[] = image ? [image] : [];

  if (alt && !/^(?:image|图片|图)$/iu.test(alt)) {
    children.push({
      type: "articleGalleryCaption",
      data: {
        hName: "figcaption",
        hProperties: {
          className: ["article-gallery-caption"]
        }
      },
      children: [{ type: "text", value: alt } as MarkdownNode]
    });
  }

  return {
    type: "articleGallerySlide",
    data: {
      hName: "figure",
      hProperties: {
        className: ["article-gallery-slide"]
      }
    },
    children
  };
}

function isImageParagraph(node: MarkdownNode) {
  const images = imageNodes(node);

  return (
    node.type === "paragraph" &&
    images.length > 0 &&
    Boolean(node.children?.every((child) => child.type === "image" || (child.type === "text" && !child.value?.trim())))
  );
}

function isBannerImageParagraph(node: MarkdownNode) {
  const images = imageNodes(node);
  const image = images[0];

  return (
    isImageParagraph(node) &&
    images.length === 1 &&
    (BANNER_PREFIX.test(image?.alt ?? "") || BANNER_TITLE.test(image?.title?.trim() ?? ""))
  );
}

function isRegularImageParagraph(node: MarkdownNode) {
  return isImageParagraph(node) && !isBannerImageParagraph(node);
}

function hasClassName(node: MarkdownNode, className: string) {
  const value = node.data?.hProperties?.className;
  return Array.isArray(value) && value.includes(className);
}

function imageNodes(node: MarkdownNode) {
  return (node.children ?? []).filter((child) => child.type === "image");
}
