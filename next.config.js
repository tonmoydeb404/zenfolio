const withTM = require("next-transpile-modules")(["react-daisyui"]);
/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  env: {
    CMS_ENDPOINT: process.env.CMS_ENDPOINT,
    REVALIDATE_TOKEN: process.env.REVALIDATE_TOKEN,

    WEBSITE_ID: process.env.WEBSITE_ID,
    AUTHOR_ID: process.env.AUTHOR_ID,
  },
};

module.exports = withTM(nextConfig);
