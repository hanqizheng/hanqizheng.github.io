import { DEFAULT_LOCALE, localeHomePath } from "@/lib/i18n";
import { permanentRedirect } from "next/navigation";

export default function HomePage() {
  permanentRedirect(localeHomePath(DEFAULT_LOCALE));
}
