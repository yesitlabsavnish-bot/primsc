import React from 'react'
import ChhopedCarbonFiber from './ChhopedCarbonFiber'
import { createClient } from '@/lib/prismic'

const page = async() => {

    const client = createClient()

    const data = await client.getSingle('chhoped_carbon')
    return (
        <ChhopedCarbonFiber data={data?.data} />
    )
}

export default page