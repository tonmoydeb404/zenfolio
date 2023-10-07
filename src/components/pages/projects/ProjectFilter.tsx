"use client";

import { ProjectType } from "@/types/project.type";

type FilterType = ProjectType | "ALL";

type Props = {
  value: FilterType;
  onChange?: (value: FilterType) => any;
};

const projectTypes: { title: string; value: FilterType }[] = [
  { title: "ALL", value: "ALL" },
  { title: "Web App", value: "WebApplication" },
  { title: "Mobile App", value: "MobileApplication" },
  { title: "Software", value: "SoftwareApplication" },
];

const ProjectFilter = ({ value, onChange = () => {} }: Props) => {
  return (
    <ul className="flex gap-0.5 flex-wrap">
      {projectTypes &&
        projectTypes.map((project) => (
          <li
            className={`px-4 py-2 text-sm sm:text-base font-medium cursor-pointer ${
              value === project.value
                ? "bg-primary text-primary-foreground"
                : "bg-accent dark:hover:bg-white/10 hover:bg-black/20"
            }`}
            onClick={() => onChange(project.value)}
            key={project.value}
          >
            {project.title}
          </li>
        ))}
    </ul>
  );
};

export default ProjectFilter;
