import { getPages, getProjects } from "@/utils/app-request";
import { MetadataRoute } from "next";

const url = process.env.NEXT_PUBLIC_URL as string;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects(60);
  const pages = await getPages(60);

  const pagesXML: MetadataRoute.Sitemap = pages.map((p) => ({
    url: `${url}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));

  const projectsXML: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${url}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  return [
    {
      url: url,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...pagesXML,
    ...projectsXML,
  ];
}
