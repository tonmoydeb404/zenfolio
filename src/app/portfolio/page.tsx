import PageHeader from "@/components/pages/common/PageHeader";
import ProjectList from "@/components/pages/projects/ProjectList";
import { pageSchema } from "@/lib/schema-markup";
import { getPage, getPagesSlug, getProjects } from "@/utils/app-request";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("portfolio");

  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description || page.description,
    keywords: page.meta?.keywords,
    alternates: {
      canonical: page.meta?.url,
    },
    openGraph: {
      images: page.meta?.thumbnail?.url,
      title: page.meta?.title,
      description: page.meta?.description,
      url: page.meta?.url,
      type: "website",
    },
    robots: {
      index: page.meta?.indexPage,
      follow: page.meta?.followPage,
    },
  };
}

const Portfolio = async () => {
  const portfolio = await getPage("portfolio");
  const pagesSlug = await getPagesSlug();
  const projects = await getProjects();

  return (
    <>
      {pageSchema(portfolio, pagesSlug).map((schema, index) => (
        <script
          key={`schema-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <PageHeader title={portfolio?.title} desc={portfolio?.description} />
      <ProjectList projects={projects} />
    </>
  );
};

export default Portfolio;
