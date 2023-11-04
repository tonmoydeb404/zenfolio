"use client";

import ProjectCard from "@/components/cards/ProjectCard";
import StatusCard from "@/components/cards/StatusCard";
import { Project, ProjectType } from "@/types/project.type";
import { useMemo, useState } from "react";
import ProjectFilter from "./ProjectFilter";

type Props = {
  projects: Project[];
};

const ProjectList = ({ projects }: Props) => {
  const [projectType, setProjectType] = useState<ProjectType | "ALL">("ALL");

  const filterProjects = useMemo(
    () =>
      projects.filter(
        (p) => projectType === "ALL" || p.projectMeta?.type === projectType
      ),
    [projectType, projects]
  );

  return (
    <>
      <ProjectFilter value={projectType} onChange={setProjectType} />

      {!filterProjects.length ? (
        <StatusCard status="ERROR" text="Nothing is Here" className="mt-10" />
      ) : (
        <div className="grid sm:grid-cols-2 gap-3 mt-10">
          {filterProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              desc={project.description}
              techs={project.stacks}
              path={project.slug}
              previewLink={project.previewLink}
              sourceLink={project.sourceLink}
              thumbnail={project.thumbnail?.url}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectList;
