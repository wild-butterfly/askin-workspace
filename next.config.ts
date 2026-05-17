import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/askin-workspace",
  assetPrefix: "/askin-workspace/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
