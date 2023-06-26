"use client";

import ProjectCard from "@/components/cards/ProjectCard";
import { useState } from "react";
import ProjectFilter from "./ProjectFilter";

const ProjectList = () => {
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
        <div>
          <ProjectCard
            title="Track Taka"
            desc="Track Taka is an expense tracker application to help you in daily life money management. It allows you to track your regular expenses"
            techs={["firebase", "react js", "indexddb", "tailwindcss", "pwa"]}
            detailsLink="#"
            previewLink="#"
            sourceLink="#"
            thumbnail="https://tonmoydeb.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FgnOIOnr8QjarjIjbF1xt&w=1920&q=75"
          />
        </div>
        <div>
          <ProjectCard
            title="Track Taka"
            desc="Track Taka is an expense tracker application to help you in daily life money management. It allows you to track your regular expenses"
            techs={["firebase", "react js", "indexddb", "tailwindcss", "pwa"]}
            detailsLink="#"
            previewLink="#"
            sourceLink="#"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectList;
