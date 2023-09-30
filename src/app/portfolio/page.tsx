import PageHeader from "@/components/pages/common/PageHeader";
import ProjectList from "@/components/pages/projects/ProjectList";
import { pageSchema } from "@/lib/schema-markup";
import { getPage, getPagesSlug, getProjects } from "@/utils/app-request";

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
