import { LocalizedPostPage, postMetadata } from "@/app/_localized/post";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  return postMetadata("zh", await params);
}

export default async function ZhPostPage({ params }: Props) {
  return <LocalizedPostPage locale="zh" params={await params} />;
}
