/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["react-daisyui"]);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  env: {
    CMS_API_TOKEN: process.env.CMS_API_TOKEN,
    CMS_ENDPOINT: process.env.CMS_ENDPOINT,

    REVALIDATE_TOKEN: process.env.REVALIDATE_TOKEN,
  },
};

module.exports = withTM(nextConfig);
