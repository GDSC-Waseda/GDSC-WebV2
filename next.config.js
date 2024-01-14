/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "agile-dawn-20856-3c917b85c4f4.herokuapp.com",
      "res.cloudinary.com",
    ],
  },
  i18n,
};
