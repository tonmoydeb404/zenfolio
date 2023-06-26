import type { IconType } from "react-icons";
import { LuCopyright, LuMenu, LuMoon, LuSun } from "react-icons/lu";

export type AppIconType = IconType;

export type AppIcon = "MENU" | "LIGHT_MODE" | "DARK_MODE" | "COPYRIGHT";

const appIcons: Record<AppIcon, AppIconType> = {
  MENU: LuMenu,
  LIGHT_MODE: LuSun,
  DARK_MODE: LuMoon,
  COPYRIGHT: LuCopyright,
};

export default appIcons;
