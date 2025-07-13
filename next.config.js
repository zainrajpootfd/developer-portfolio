/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.svg"],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
}

module.exports = nextConfig
