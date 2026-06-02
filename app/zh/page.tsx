import { LocalizedHomePage, homeMetadata } from "@/app/_localized/home";

export const dynamic = "force-dynamic";
export const metadata = homeMetadata("zh");

export default function ZhHomePage() {
  return <LocalizedHomePage locale="zh" />;
}
