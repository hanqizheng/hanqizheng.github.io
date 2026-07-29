export const LOCALES = ["zh", "en"] as const;
export const DEFAULT_LOCALE = "zh";

export type Locale = (typeof LOCALES)[number];

type Dictionary = {
  nav: {
    posts: string;
    about: string;
  };
  meta: {
    siteDescription: string;
    postsTitle: string;
    aboutTitle: string;
    aboutDescription: string;
  };
  posts: {
    empty: string;
    draft: string;
    journal: string;
    collectionTitle: string;
    collectionIntro: string;
    featured: string;
    archive: string;
    readArticle: string;
    writtenBy: string;
    publishedOn: string;
    backToPosts: string;
    loading: string;
    gallery: {
      previous: string;
      next: string;
      status: string;
    };
  };
  about: {
    paragraphs: string[];
  };
  actions: {
    switchTheme: string;
    lightTheme: string;
    darkTheme: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  zh: {
    nav: {
      posts: "文章",
      about: "关于"
    },
    meta: {
      siteDescription: "物华天宝，龙光射牛斗之墟。",
      postsTitle: "文章",
      aboutTitle: "关于",
      aboutDescription: "关于韩启正"
    },
    posts: {
      empty: "还没有文章。",
      draft: "草稿",
      journal: "Handler Journal",
      collectionTitle: "文章与思考",
      collectionIntro: "关于前端工程、人工智能与持续构建的个人记录。",
      featured: "近期专题",
      archive: "全部文章",
      readArticle: "阅读文章",
      writtenBy: "作者",
      publishedOn: "发布于",
      backToPosts: "返回文章",
      loading: "文章加载中",
      gallery: {
        previous: "上一张",
        next: "下一张",
        status: "图片组，第 {current} 张，共 {total} 张"
      }
    },
    about: {
      paragraphs: ["你好，我是韩启正。", "Welcome to the real world,", "it sucks, you're gonna love it!"]
    },
    actions: {
      switchTheme: "切换主题",
      lightTheme: "浅色主题",
      darkTheme: "深色主题"
    }
  },
  en: {
    nav: {
      posts: "Posts",
      about: "About"
    },
    meta: {
      siteDescription: "Personal notes on engineering, product, and the web.",
      postsTitle: "Posts",
      aboutTitle: "About",
      aboutDescription: "About Qizheng Han"
    },
    posts: {
      empty: "No posts yet.",
      draft: "Draft",
      journal: "Handler Journal",
      collectionTitle: "Notes & essays",
      collectionIntro: "Personal writing on frontend engineering, artificial intelligence, and the practice of building.",
      featured: "Featured",
      archive: "Archive",
      readArticle: "Read article",
      writtenBy: "Written by",
      publishedOn: "on",
      backToPosts: "Back to posts",
      loading: "Loading post",
      gallery: {
        previous: "Previous slide",
        next: "Next slide",
        status: "Gallery, slide {current} of {total}"
      }
    },
    about: {
      paragraphs: ["Hi, I am Qizheng Han.", "Welcome to the real world,", "it sucks, you're gonna love it!"]
    },
    actions: {
      switchTheme: "Switch theme",
      lightTheme: "Light theme",
      darkTheme: "Dark theme"
    }
  }
};

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function normalizeLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getLocaleFromPathname(pathname: string) {
  const segment = pathname.split("/").filter(Boolean)[0];
  return normalizeLocale(segment);
}

export function localePath(locale: Locale, path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;
}

export function localeHomePath(locale: Locale) {
  return localePath(locale);
}

export function localeAboutPath(locale: Locale) {
  return localePath(locale, "/about");
}

export function localizedAlternates(path: string) {
  return Object.fromEntries(LOCALES.map((locale) => [locale, localePath(locale, path)]));
}
