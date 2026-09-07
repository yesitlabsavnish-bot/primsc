import { createClient } from "@/lib/prismic"
import PhlexCarbonfcm from "./PhlexCarbonfcm"

export default async function Page() {
  const client = createClient()

  const { data } = await client
    .getSingle("phlex_carbon_cfm")

  return <PhlexCarbonfcm data={data} />
}