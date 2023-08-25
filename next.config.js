/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/GDSC-web/public/",
  assetPrefix: "/GDSC-web/",
};

module.exports = {
  nextConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: "akamai",
    path: "",
  },
};
