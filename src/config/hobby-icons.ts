import { IconType } from "react-icons";
import { BiBookReader, BiCodeAlt } from "react-icons/bi";
import { MdOutlineDesignServices, MdTravelExplore } from "react-icons/md";

export type HobbyIcon = "READING_BOOKS" | "DESIGN" | "CODE" | "TRAVEL";

export const hobbyIcons: Record<HobbyIcon, IconType> = {
  CODE: BiCodeAlt,
  DESIGN: MdOutlineDesignServices,
  READING_BOOKS: BiBookReader,
  TRAVEL: MdTravelExplore,
};
