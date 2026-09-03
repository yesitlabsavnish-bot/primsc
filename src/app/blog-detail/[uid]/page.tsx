import BlogDetail from "./BlogDetail";

type PageProps = {
  params: Promise<{
    uid: any;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { uid } = await params;

  return <BlogDetail uid={uid} />;

}