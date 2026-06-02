import { LocalizedHomePage, homeMetadata } from "@/app/_localized/home";

export const dynamic = "force-dynamic";
export const metadata = homeMetadata("en");

export default function EnHomePage() {
  return <LocalizedHomePage locale="en" />;
}
