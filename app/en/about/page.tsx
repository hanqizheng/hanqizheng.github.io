import { LocalizedAboutPage, aboutMetadata } from "@/app/_localized/about";

export const metadata = aboutMetadata("en");

export default function EnAboutPage() {
  return <LocalizedAboutPage locale="en" />;
}
