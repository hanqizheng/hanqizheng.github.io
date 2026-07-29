"use client";

import {
  getLocaleFromPathname,
  localeAboutPath,
  localeHomePath,
  type Locale
} from "@/lib/i18n";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const HEADER_LABELS: Record<
  Locale,
  {
    posts: string;
    about: string;
    switchTheme: string;
    lightTheme: string;
    darkTheme: string;
  }
> = {
  zh: {
    posts: "文章",
    about: "关于",
    switchTheme: "切换主题",
    lightTheme: "浅色主题",
    darkTheme: "深色主题"
  },
  en: {
    posts: "Posts",
    about: "About",
    switchTheme: "Switch theme",
    lightTheme: "Light theme",
    darkTheme: "Dark theme"
  }
};

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const labels = HEADER_LABELS[locale];
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme;
    setTheme(currentTheme === "dark" ? "dark" : "light");
  }, [pathname]);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    let animationFrame = 0;

    const updateHeaderState = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        setHasScrolled(window.scrollY > 8);
      });
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateHeaderState);
    };
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <header
      className={`site-header${hasScrolled ? " is-scrolled" : ""}${menuOpen ? " is-menu-open" : ""}`}
    >
      <div className="site-header-left">
        <Link className="site-brand" href={localeHomePath(locale)} aria-label="Handler home">
          <span className="site-title">Handler</span>
        </Link>
        <HeaderNav className="site-nav site-nav-desktop" locale={locale} pathname={pathname} />
      </div>
      <div className="site-header-right">
        <button
          className="site-action-button"
          type="button"
          onClick={toggleTheme}
          aria-label={labels.switchTheme}
          title={theme === "dark" ? labels.lightTheme : labels.darkTheme}
        >
          {theme === "dark" ? <Sun aria-hidden="true" size={17} strokeWidth={1.7} /> : <Moon aria-hidden="true" size={17} strokeWidth={1.7} />}
        </button>
        <button
          className="site-action-button site-menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-mobile-menu"
          aria-label={menuOpen ? "关闭导航" : "打开导航"}
        >
          {menuOpen ? <X aria-hidden="true" size={19} strokeWidth={1.7} /> : <Menu aria-hidden="true" size={19} strokeWidth={1.7} />}
        </button>
      </div>
      <div className="site-mobile-menu" id="site-mobile-menu" hidden={!menuOpen}>
        <HeaderNav className="site-nav site-nav-mobile" locale={locale} pathname={pathname} />
      </div>
    </header>
  );
}

function HeaderNav({ className, locale, pathname }: { className: string; locale: Locale; pathname: string }) {
  const labels = HEADER_LABELS[locale];

  return (
    <nav className={className} aria-label="Primary navigation">
      <Link href={localeHomePath(locale)} aria-current={isActive(pathname, locale, "posts") ? "page" : undefined}>
        {labels.posts}
      </Link>
      <Link href={localeAboutPath(locale)} aria-current={isActive(pathname, locale, "about") ? "page" : undefined}>
        {labels.about}
      </Link>
    </nav>
  );
}

function isActive(pathname: string, locale: Locale, item: "posts" | "about") {
  if (item === "about") {
    return pathname === localeAboutPath(locale);
  }

  return pathname === localeHomePath(locale) || pathname.startsWith(`/${locale}/posts/`);
}
