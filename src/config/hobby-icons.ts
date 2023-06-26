import type { IconType } from "react-icons";
import { LuBookOpen, LuCode2, LuPenTool, LuPlane } from "react-icons/lu";

export type HobbyIconType = IconType;

export type HobbyIcon = "READING_BOOKS" | "DESIGN" | "CODE" | "TRAVEL";

const hobbyIcons: Record<HobbyIcon, HobbyIconType> = {
  CODE: LuCode2,
  DESIGN: LuPenTool,
  READING_BOOKS: LuBookOpen,
  TRAVEL: LuPlane,
};

export default hobbyIcons;
