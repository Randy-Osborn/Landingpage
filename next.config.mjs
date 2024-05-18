/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add any other Next.js configuration options here
output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true, // Necessary because GitHub Pages doesn't support dynamic image optimization
  },
};

export default nextConfig;