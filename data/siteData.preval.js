import { loadEnvConfig } from "@next/env";
import { request } from "graphql-request";
import preval from "next-plugin-preval";
import { websiteSchema } from "../lib/graphQL.js";

// load env
loadEnvConfig(process.cwd());
const WEBSITE_ID = process.env.WEBSITE_ID;
const CMS_ENDPOINT = process.env.CMS_ENDPOINT;

const fetchWebsite = async () => {
  // fetch data from server
  const { website } = await request(CMS_ENDPOINT, websiteSchema, {
    websiteID: WEBSITE_ID,
  });

  return website;
};

export default preval(fetchWebsite());
