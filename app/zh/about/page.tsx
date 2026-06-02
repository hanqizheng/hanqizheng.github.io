import { LocalizedAboutPage, aboutMetadata } from "@/app/_localized/about";

export const metadata = aboutMetadata("zh");

export default function ZhAboutPage() {
  return <LocalizedAboutPage locale="zh" />;
}
