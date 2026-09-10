import React from 'react'
import Contactus from './Contactus'
import { createClient } from '@/lib/prismic'

const page = async () => {

    const client = createClient()
     
    const data = await client.getSingle('contact_us')

  return (
   <> <Contactus  data={data?.data}/> </>
  )
}

export default page
