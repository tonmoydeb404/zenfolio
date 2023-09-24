import PageHeader from "@/components/pages/common/PageHeader";
import ProjectList from "@/components/pages/projects/ProjectList";
import { pageQuery, projectsQuery, queryWrapper } from "@/lib/hygraph-queries";
import { Page, Project } from "@/types/hygraph.type";

const getData = async () => {
  const CMS_ENDPOINT = process.env.CMS_ENDPOINT as string;

  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: queryWrapper("getPortfolio", [
        pageQuery("portfolio"),
        projectsQuery(),
      ]),
    }),
  });

  const { data } = await response.json();

  return {
    page: data.page as Page,
    projects: data.projects as Project[],
  };
};

const Portfolio = async () => {
  const data = await getData();

  return (
    <>
      <PageHeader title={data.page?.title} desc={data.page?.description} />
      <ProjectList projects={data.projects} />
    </>
  );
};

export default Portfolio;
