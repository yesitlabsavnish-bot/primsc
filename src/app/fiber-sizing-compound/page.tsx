import React from 'react'
import FiberSizingCompound from './FiberSizingCompound'
import { createClient } from '@/lib/prismic'

const page = async () => {
  const client = createClient()

  const {data} =await client.getSingle("fiber_sizing")
  return (
      <>
     <FiberSizingCompound data={data}/>
  </>
  )
}

export default page
