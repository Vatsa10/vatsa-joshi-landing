import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed distDir to use the default .next directory
  // This is the standard for Next.js on Vercel.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
