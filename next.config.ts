import type { NextConfig } from "next";

// GitHub Pages serves the site under https://kromz-dev.github.io/Portfolio
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolio",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
