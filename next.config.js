/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/GDSC-web',
  assetPrefix: '/GDSC-web/',
};

module.exports = {
  nextConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
};
