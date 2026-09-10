import React from 'react'
import About from './About'
import { createClient } from '@/lib/prismic'
  
const page = async() => {

  const client = createClient()
  const data = await client.getSingle('about_us')

  return (
        <div>
        <About data={data?.data} />
    </div>
  )
}

export default page

