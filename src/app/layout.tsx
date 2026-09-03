import "@/app/globals.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header/Header"

import { repositoryName, createClient } from "@/lib/prismic"
import { PrismicPreview } from "@prismicio/next"
import { Inter } from "next/font/google"



const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter-family",
})

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const client = createClient()
	const page = await client.getSingle("homepage").catch(() => null)
	return (
		<html lang="en" className={inter.variable}>

			<head>

				  <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
                 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                 <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />

				<link rel="stylesheet" href="css/style.css"></link>
				<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
				<script src="js/main.js"></script>

			</head>
			<body className="font-sans bg-white text-[#0d0d0d] antialiased selection:bg-black selection:text-white">
				<Header />

				<main className="min-h-screen">
					{children}
				</main>

				<Footer />

				<PrismicPreview repositoryName={repositoryName} />
			</body>
		</html>
	)
}
