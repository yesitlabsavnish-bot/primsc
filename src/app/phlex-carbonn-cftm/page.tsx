import React from 'react'
import PhlexCarbonCftm from './PhlexCarbonCftm'
import { createClient } from '@/lib/prismic'


const page = async () => {

  const client = createClient()
  const data = await client.getSingle('phlex_carbon_fctm').catch(() => null)
  return (
    <>
      <PhlexCarbonCftm data={data?.data} />
    </>
  )
}

export default page
