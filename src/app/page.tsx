import { type Metadata } from "next"

import { SliceZone } from "@prismicio/react"

import { Footer } from "@/components/Footer"
import { createClient } from "@/lib/prismic"
import { components } from "@/slices"

export default async function Home() {
	const client = createClient()
	const page = await client.getSingle("homepage")

	return (
		<>
			<SliceZone slices={page.data.slices} components={components} />
		</>
	)
}

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient()
	const page = await client.getSingle("homepage")

	return {
		title: page.data.meta_title,
		description: page.data.meta_description,
	}
}
