import { createClient } from "@/lib/prismic";
import Hero from "@/slices/Hero";

export default async function MyPage() {
  const client = createClient();

  const page = await client.getSingle("my_page");

  const heroSlice = page.data.slices[0];

  return (
    <main>
      <h1>{page.data.title}</h1>
      <p>{page.data.description}</p>

      <Hero slice={heroSlice} index={0} context={{}} />
    </main>
  );
}
