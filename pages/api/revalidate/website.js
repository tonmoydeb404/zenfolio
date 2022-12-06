import { getWebsite } from "../../../services/cms";

const fs = require("fs");
const path = "data/data.json";

export default async function handler(req, res) {
  try {
    const response = await getWebsite({ websiteID: "tonmoydeb" });

    if (response.error) throw response.error;

    const jsonRes = JSON.stringify(response.website, null);

    fs.writeFileSync(path, jsonRes);

    await res.revalidate("/");

    return res.status(200).json(response.website);
  } catch (error) {
    res.status(400).json(error);
  }
}
