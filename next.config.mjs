/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hides the floating Next.js logo button in the corner during `pnpm dev`.
  // It never appeared in production builds anyway.
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
