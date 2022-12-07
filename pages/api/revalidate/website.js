import { getWebsite } from "../../../services/cms";

const fs = require("fs");
const path = "data/data.json";

export default async function handler(req, res) {
  try {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
      throw { message: "invalid key" };
    }
    // fetch data from server
    const response = await getWebsite();
    // check data availble or not
    if (response.error) throw response.error;
    // stringify data
    const jsonRes = JSON.stringify(response.website, null);
    // write a file
    fs.writeFileSync(path, jsonRes);

    console.log("website data generated");
  } catch (error) {
    // log the error
    console.error(error);
  } finally {
    // return user to index page
    return res.redirect(307, "/");
  }
}
