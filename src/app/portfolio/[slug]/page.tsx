import BreadCrumbs from "@/components/pages/common/BreadCrumbs";
import ProjectDetailsHeader from "@/components/pages/project-details/ProjectDetailsHeader";
import ProjectStacks from "@/components/pages/project-details/ProjectStacks";
import projectBreadCrumbs from "@/config/breadcrumbs/project-breadcrumb";
import {
  projectQuery,
  projectsSlugQuery,
  queryWrapper,
} from "@/lib/hygraph-queries";
import { projectSchema } from "@/lib/schema-markup";
import { Project } from "@/types/hygraph.type";

export async function generateStaticParams() {
  const CMS_ENDPOINT = process.env.CMS_ENDPOINT as string;
  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: queryWrapper("getProjectsSlug", [projectsSlugQuery()]),
    }),
  });

  const { data } = await response.json();

  return data.projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

const getData = async (slug: string) => {
  const CMS_ENDPOINT = process.env.CMS_ENDPOINT as string;

  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: queryWrapper("getProject", [projectQuery(slug)]),
    }),
  });

  const { data } = await response.json();

  return {
    project: data.project as Project,
  };
};

const ProjectDetails = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);

  return (
    <>
      <script
        key="schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema(data.project)),
        }}
      />
      <BreadCrumbs links={projectBreadCrumbs} />
      <ProjectDetailsHeader
        title={data.project.title}
        desc={data.project.description}
        thumbnail={
          data.project.meta?.thumbnail?.url || data.project.thumbnail?.url
        }
        previewLink={data.project.previewLink}
        sourceLink={data.project.sourceLink}
        className="mb-16"
      />
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: data.project.content.html }}
      ></article>

      <ProjectStacks stacks={data.project.stacks} className="mt-16" />
    </>
  );
};

export default ProjectDetails;
