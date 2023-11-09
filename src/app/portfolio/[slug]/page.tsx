import BreadCrumbs from "@/components/pages/common/BreadCrumbs";
import ProjectDetailsHeader from "@/components/pages/project-details/ProjectDetailsHeader";
import ProjectStacks from "@/components/pages/project-details/ProjectStacks";
import projectBreadCrumbs from "@/config/breadcrumbs/project-breadcrumb";
import { projectSchema } from "@/lib/schema-markup";
import { MetadataProps } from "@/types/common.type";

import { getProject, getProjectsSlug } from "@/utils/app-request";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const project = await getProject(params.slug);

  if (!project) return {};

  return {
    title: project.meta?.title || project.title,
    description: project.meta?.description || project.description,
    keywords: project.meta?.keywords,
    alternates: {
      canonical: project.meta?.url,
    },
    openGraph: {
      images: project.meta?.thumbnail?.url,
      title: project.meta?.title,
      description: project.meta?.description,
      url: project.meta?.url,
      type: "website",
    },
    robots: {
      index: project.meta?.indexPage,
      follow: project.meta?.followPage,
    },
  };
}

export async function generateStaticParams() {
  const projects = await getProjectsSlug();

  return projects.map((project) => ({
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
        className="prose dark:prose-invert w-full overflow-x-hidden"
        dangerouslySetInnerHTML={{ __html: project.content.html }}
      ></article>

      <ProjectStacks stacks={project.stacks} className="mt-16" />
    </>
  );
};

export default ProjectDetails;
