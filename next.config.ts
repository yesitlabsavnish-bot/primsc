// import type { NextConfig } from "next"
// import { dirname } from "node:path"
// import { fileURLToPath } from "node:url"

// const nextConfig: NextConfig = {
// 	turbopack: {
// 		root: dirname(fileURLToPath(import.meta.url)),
// 	},
// }

// export default nextConfig

import type { NextConfig } from "next"

import { dirname } from "node:path"

import { fileURLToPath } from "node:url"

const nextConfig: NextConfig = {
    turbopack: {
        root: dirname(fileURLToPath(import.meta.url)),
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.prismic.io",
                pathname: "/**",
            },
        ],
    },
}

export default nextConfig
