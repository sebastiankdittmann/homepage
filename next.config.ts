import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        // Add MDX options here if needed
    },
});

const nextConfig: NextConfig = {
    pageExtensions: ["tsx", "ts", "mdx"],
    experimental: {
        mdxRs: true, // Enable the MDX Rust compiler for the app directory
    },
}

export default withMDX(nextConfig);