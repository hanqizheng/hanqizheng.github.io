import { getDictionary, localizedAlternates, localeAboutPath, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";

export function aboutMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);

  return {
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
    alternates: {
      canonical: localeAboutPath(locale),
      languages: localizedAlternates("/about")
    }
  };
}

export function LocalizedAboutPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <article className="about-page">
      {dict.about.paragraphs.map((paragraph) => (
        <p key={paragraph} style={{ textAlign: "center" }}>
          {paragraph}
        </p>
      ))}
    </article>
  );
}
