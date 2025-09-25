import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // disable image optimization
    domains: ["i.ibb.co"], // keep your external domain whitelist
  },
};

export default nextConfig;
