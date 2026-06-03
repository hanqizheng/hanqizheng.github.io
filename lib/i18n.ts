export const LOCALES = ["zh", "en"] as const;
export const DEFAULT_LOCALE = "zh";

export type Locale = (typeof LOCALES)[number];

type Dictionary = {
  localeName: string;
  alternateLocaleLabel: string;
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
    writtenBy: string;
    publishedOn: string;
    backToPosts: string;
    loading: string;
  };
  about: {
    paragraphs: string[];
  };
  actions: {
    switchLanguage: string;
    switchTheme: string;
    lightTheme: string;
    darkTheme: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  zh: {
    localeName: "中文",
    alternateLocaleLabel: "EN",
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
      writtenBy: "作者",
      publishedOn: "发布于",
      backToPosts: "返回文章",
      loading: "文章加载中"
    },
    about: {
      paragraphs: ["你好，我是韩启正。", "Welcome to the real world,", "it sucks, you're gonna love it!"]
    },
    actions: {
      switchLanguage: "Switch to English",
      switchTheme: "切换主题",
      lightTheme: "浅色主题",
      darkTheme: "深色主题"
    }
  },
  en: {
    localeName: "English",
    alternateLocaleLabel: "中",
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
      writtenBy: "Written by",
      publishedOn: "on",
      backToPosts: "Back to posts",
      loading: "Loading post"
    },
    about: {
      paragraphs: ["Hi, I am Qizheng Han.", "Welcome to the real world,", "it sucks, you're gonna love it!"]
    },
    actions: {
      switchLanguage: "切换到中文",
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

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
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

export function switchLocalePath(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/");
  const firstSegment = parts[1];

  if (isLocale(firstSegment)) {
    parts[1] = nextLocale;
    return parts.join("/") || `/${nextLocale}`;
  }

  if (pathname === "/") {
    return localeHomePath(nextLocale);
  }

  if (pathname === "/about" || pathname.startsWith("/posts/")) {
    return localePath(nextLocale, pathname);
  }

  return localeHomePath(nextLocale);
}

export function localizedAlternates(path: string) {
  return Object.fromEntries(LOCALES.map((locale) => [locale, localePath(locale, path)]));
}
