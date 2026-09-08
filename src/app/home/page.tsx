import React from 'react'
import HomePage from './HomePage'
import { createClient } from '@/lib/prismic'


const page = async () => {
  const client = createClient()
  const {data} = await client.getSingle("phlexhomepage")

  return (
   <>
    <HomePage data={data} />
   </>
  )
}

export default page


