import ProjectCard from "@/components/cards/ProjectCard";
import { Project } from "@/types/project.type";

type Props = {
  title: string;
  description: string;
  projects: Project[];
};

const HomeProjects = ({ title, description, projects = [] }: Props) => {
  return (
    <section className="py-16">
      <h2 className="block_heading mb-1">{title}</h2>
      <p className="block_desc mb-10">{description}</p>

      <div className="grid sm:grid-cols-2 gap-3">
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard
              title={project.title}
              desc={project.description}
              techs={project.stacks}
              path={project.slug}
              previewLink={project.previewLink}
              sourceLink={project.sourceLink}
              thumbnail={project.thumbnail?.url}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProjects;
