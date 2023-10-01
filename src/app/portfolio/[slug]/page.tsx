import BreadCrumbs from "@/components/pages/common/BreadCrumbs";
import ProjectDetailsHeader from "@/components/pages/project-details/ProjectDetailsHeader";
import ProjectStacks from "@/components/pages/project-details/ProjectStacks";
import projectBreadCrumbs from "@/config/breadcrumbs/project-breadcrumb";
import { projectSchema } from "@/lib/schema-markup";
import { Project } from "@/types/hygraph.type";
import { getProject, getProjectsSlug } from "@/utils/app-request";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = await getProjectsSlug();

  return projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

const ProjectDetails = async ({ params }: { params: { slug: string } }) => {
  const project = await getProject(params.slug);

  if (!project) notFound();

  return (
    <>
      {projectSchema(project).map((schema, index) => (
        <script
          key={`schema-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <BreadCrumbs links={projectBreadCrumbs} />
      <ProjectDetailsHeader
        title={project.title}
        desc={project.description}
        thumbnail={project.meta?.thumbnail?.url || project.thumbnail?.url}
        previewLink={project.previewLink}
        sourceLink={project.sourceLink}
        className="mb-16"
      />
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: project.content.html }}
      ></article>

      <ProjectStacks stacks={project.stacks} className="mt-16" />
    </>
  );
};

export default ProjectDetails;
