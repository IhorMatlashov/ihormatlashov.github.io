/** @type {import('next').NextConfig} */

// Deployed to GitHub Pages from the IhorMatlashov.github.io repo, which serves
// at the domain root. That keeps every /media/... path in lib/site-data.ts
// valid as-is — no basePath or assetPrefix needed. If this ever moves to a
// project repo (served from /<repo>/), the raw <img>/<video> src values would
// need prefixing too; Next only rewrites next/image, next/link and _next URLs.
const nextConfig = {
  // Emit a plain static site into ./out — no Node server needed to host it.
  output: 'export',
  // Static hosts have no directory-index rewriting, so emit /about/index.html
  // rather than /about.html.
  trailingSlash: true,
  // Hides the floating Next.js logo button in the corner during `npm run dev`.
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
