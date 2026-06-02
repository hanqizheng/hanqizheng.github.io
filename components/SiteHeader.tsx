"use client";

import {
  getAlternateLocale,
  getDictionary,
  getLocaleFromPathname,
  localeAboutPath,
  localeHomePath,
  switchLocalePath,
  type Locale
} from "@/lib/i18n";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const nextLocale = getAlternateLocale(locale);
  const dict = getDictionary(locale);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme;
    setTheme(currentTheme === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <header className="site-header">
      <Link href={localeHomePath(locale)} aria-label="Handler home">
        <h1 className="site-title">「Handler」</h1>
      </Link>
      <div className="site-header-right">
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href={localeHomePath(locale)} aria-current={isActive(pathname, locale, "posts") ? "page" : undefined}>
            {dict.nav.posts}
          </Link>
          <Link href={localeAboutPath(locale)} aria-current={isActive(pathname, locale, "about") ? "page" : undefined}>
            {dict.nav.about}
          </Link>
        </nav>
        <div className="site-actions" aria-label="Display settings">
          <button
            className="site-action-button"
            type="button"
            onClick={toggleTheme}
            aria-label={dict.actions.switchTheme}
            title={theme === "dark" ? dict.actions.lightTheme : dict.actions.darkTheme}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          </button>
          <Link
            className="site-action-button"
            href={switchLocalePath(pathname, nextLocale)}
            aria-label={dict.actions.switchLanguage}
            hrefLang={nextLocale}
            title={dict.actions.switchLanguage}
          >
            <span aria-hidden="true">{dict.alternateLocaleLabel}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function isActive(pathname: string, locale: Locale, item: "posts" | "about") {
  if (item === "about") {
    return pathname === localeAboutPath(locale);
  }

  return pathname === localeHomePath(locale) || pathname.startsWith(`/${locale}/posts/`);
}
