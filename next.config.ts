import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "/ai-body-coach-mvp",
  assetPrefix: "/ai-body-coach-mvp/",
};

export default nextConfig;
