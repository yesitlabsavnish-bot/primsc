import { createClient } from "@/lib/prismic";
import Blog from "./Blog";


export default async function BlogPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {

  
  const searchParams = await props.searchParams;
  const pageParam = searchParams?.page;
  const page = typeof pageParam === "string" ? parseInt(pageParam, 10) : 1;

  const client = createClient();

      const blogsResponse = await client.getByType("blog", {
        orderings: {
          field: "my.blog.publication_date",
          direction: "desc",
        },
        page,
        pageSize: 9,
      });


      const blogData= await client.getSingle("blogpage");

  const blogs = blogsResponse.results;
  const totalPages = blogsResponse.total_pages;

    console.log("Blogs Response:", blogs);

  return (
       <Blog blogs={blogs} page={page} totalPages={totalPages} blogData={blogData?.data} />
  );
}