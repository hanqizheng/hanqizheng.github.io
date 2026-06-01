import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Qizheng Han"
};

export default function AboutPage() {
  return (
    <article className="about-page">
      <p style={{ textAlign: "center" }}>你好，我是韩启正。</p>
      <p style={{ textAlign: "center" }}>Welcome to the real world,</p>
      <p style={{ textAlign: "center" }}>it sucks, you&apos;re gonna love it!</p>
    </article>
  );
}
