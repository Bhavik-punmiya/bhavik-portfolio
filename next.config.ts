import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compress: true, // Enable gzip compression
  reactStrictMode: true,
  productionBrowserSourceMaps: false, // Disable source maps in production for faster builds
  images: {
    unoptimized: false, // Ensure Next.js optimizes images
  },
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
