/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  output: "export",
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
