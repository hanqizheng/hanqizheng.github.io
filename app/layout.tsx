import { SiteHeader } from "@/components/SiteHeader";
import { ThemeScript } from "@/components/ThemeScript";
import { getDictionary } from "@/lib/i18n";
import type { Metadata } from "next";
import "./globals.css";

const defaultDictionary = getDictionary("zh");

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://hanqizheng.vercel.app"),
  title: {
    default: "「Handler」",
    template: "%s | 「Handler」"
  },
  description: defaultDictionary.meta.siteDescription,
  authors: [{ name: "Qizheng Han", url: "https://hanqizheng.github.io" }]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <ThemeScript />
        <SiteHeader />
        <main className="site-shell">{children}</main>
        <footer className="site-footer">
          <span>&copy; {new Date().getFullYear()} Qizheng Han.</span>
        </footer>
      </body>
    </html>
  );
}
