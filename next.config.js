const withTM = require("next-transpile-modules")(["react-daisyui"]);
const createNextPluginPreval = require("next-plugin-preval/config");
const withNextPluginPreval = createNextPluginPreval();

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  i18n: {
    locales: ["en", "bn"],
    defaultLocale: "en",
  },
  env: {
    CMS_ENDPOINT: process.env.CMS_ENDPOINT,
    REVALIDATE_TOKEN: process.env.REVALIDATE_TOKEN,

    WEBSITE_ID: process.env.WEBSITE_ID,
    AUTHOR_ID: process.env.AUTHOR_ID,
  },
};

module.exports = withNextPluginPreval(withTM(nextConfig));
