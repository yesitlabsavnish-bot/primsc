import React from 'react'
import PhlexCarbonSpcf from './PhlexCarbonSpcf'
import { createClient } from '@/lib/prismic'

const page = async () => {
  const client = createClient()

  const {data} = await client.getSingle("spcf_12_k_tow")
  return (
  <>
     <PhlexCarbonSpcf data={data}/>
  </>
  )
}

export default page
