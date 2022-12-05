const withTM = require("next-transpile-modules")(["react-daisyui"]);
/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  env: {
    CMS_ENDPOINT: process.env.CMS_ENDPOINT,
    REVALIDATE_TOKEN: process.env.REVALIDATE_TOKEN,
  },
};

module.exports = withTM(nextConfig);
