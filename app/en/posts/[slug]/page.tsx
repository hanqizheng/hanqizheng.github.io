import { LocalizedPostPage, postMetadata } from "@/app/_localized/post";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  return postMetadata("en", await params);
}

export default async function EnPostPage({ params }: Props) {
  return <LocalizedPostPage locale="en" params={await params} />;
}
