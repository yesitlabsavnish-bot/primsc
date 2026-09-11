import React from 'react'
import HomePage from './HomePage'
import { createClient } from '@/lib/prismic'


const page = async () => {
  const client = createClient()
  const {data} = await client.getSingle("phlexhomepage")
  const blogsResponse = await client.getByType("blog", {
    orderings: {
      field: "my.blog.publication_date",
      direction: "desc",
    },
    pageSize: 4,
  });
    const blogs = blogsResponse.results;

  return (
   <>
    <HomePage data={data} blogs={blogs} />
   </>
  )
}

export default page


