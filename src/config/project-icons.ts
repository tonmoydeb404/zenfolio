import type { IconType } from "react-icons";
import { LuBookOpen, LuExternalLink, LuGitBranch } from "react-icons/lu";

export type ProjectIconType = IconType;

export type ProjectIcon = "VIEW_MORE" | "SOURCE" | "PREVIEW";

const projectIcons: Record<ProjectIcon, ProjectIconType> = {
  VIEW_MORE: LuBookOpen,
  PREVIEW: LuExternalLink,
  SOURCE: LuGitBranch,
};

export default projectIcons;
