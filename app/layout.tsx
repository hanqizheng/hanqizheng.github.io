import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://hanqizheng.vercel.app"),
  title: {
    default: "「Handler」",
    template: "%s | 「Handler」"
  },
  description: "物华天宝，龙光射牛斗之墟。",
  authors: [{ name: "Qizheng Han", url: "https://hanqizheng.github.io" }]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="site-header">
          <Link href="/" aria-label="Handler home">
            <h1 className="site-title">「Handler」</h1>
          </Link>
          <nav className="site-nav" aria-label="Primary navigation">
            <Link href="/">Posts</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        <main className="site-shell">{children}</main>
        <footer className="site-footer">
          <span>&copy; {new Date().getFullYear()} Qizheng Han.</span>
        </footer>
      </body>
    </html>
  );
}
