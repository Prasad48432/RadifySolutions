import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com", // Corrected hostname
      },
      {
        protocol: "https",
        hostname: "aceternity.com", // Corrected hostname
      },
    ],
  },
};

export default nextConfig;
