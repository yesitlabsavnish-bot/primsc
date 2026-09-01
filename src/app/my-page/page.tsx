import { createClient } from "@/prismicio";

export default async function MyPage() {
  const client = createClient();

  const page = await client.getSingle("my_page");

  return (
    <main>
      <h1>{page.data.title}</h1>
      <p>{page.data.description}</p>
    </main>
  );
}