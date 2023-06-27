/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tonmoydeb.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
