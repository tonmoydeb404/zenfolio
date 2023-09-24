"use client";

import ProjectCard from "@/components/cards/ProjectCard";
import { Project } from "@/types/hygraph.type";
import { useState } from "react";
import ProjectFilter from "./ProjectFilter";

type Props = {
  projects: Project[];
};

const ProjectList = ({ projects }: Props) => {
  const [projectType, setProjectType] = useState("ALL");

  return (
    <>
      <ProjectFilter
        projectTypes={[
          { title: "ALL", value: "ALL" },
          { title: "FRONTEND", value: "FRONTEND" },
          { title: "BACKEND", value: "BACKEND" },
          { title: "FULLSTACK", value: "FULLSTACK" },
        ]}
        value={projectType}
        onChange={setProjectType}
      />

      <div className="grid sm:grid-cols-2 gap-3 mt-10">
        {projects
          ?.filter((p) => projectType == "ALL" || p.projectType == projectType)
          .map((project) => (
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
    </>
  );
};

export default ProjectList;
