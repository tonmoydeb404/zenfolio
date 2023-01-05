import DB from "../data/siteData.preval";
import { getSiteMap } from "../services/cms";

function generateSiteMap(blog = [], portfolio = [], pages = []) {
  const generateUrl = (arr) => {
    return arr
      .map((item) => {
        const lastMod = new Date(item.updatedAt).toLocaleDateString("fr-CA");
        return `
             <url>
                <loc>${`${DB.baseUrl}/${item.slug}`}</loc>
                <lastmod>${lastMod}</lastmod>
            </url>
             `;
      })
      .join("");
  };

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!--main route-->
        <url>
        <loc>${DB.baseUrl}</loc>
        </url>
        <!--pages-->
        ${generateUrl(pages)}
        <!--portfolio-->
        ${generateUrl(portfolio)}
        <!--blog-->
        ${generateUrl(blog)}
    </urlset>
 `;
}

function SiteMapXML() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const response = await getSiteMap();

  if (!response.error) {
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(
      response.articles,
      response.projects,
      response.pages
    );

    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
  }
  res.end();

  return {
    props: {},
  };
}

export default SiteMapXML;
