import type { IconType } from "react-icons";
import {
  LuAlertCircle,
  LuArrowDown,
  LuArrowLeft,
  LuArrowRight,
  LuArrowUp,
  LuBriefcase,
  LuContact,
  LuCopyright,
  LuFrown,
  LuHome,
  LuInfo,
  LuLoader2,
  LuMenu,
  LuMoon,
  LuPartyPopper,
  LuSend,
  LuSun,
  LuX,
} from "react-icons/lu";

export type AppIconType = IconType;

export type AppIcon =
  | "MENU"
  | "LIGHT_MODE"
  | "DARK_MODE"
  | "COPYRIGHT"
  | "SEND"
  | "SUCCESS"
  | "ERROR"
  | "CLOSE"
  | "LOADER"
  | "SAD"
  | "RIGHT"
  | "UP"
  | "BOTTOM"
  | "LEFT"
  | "HOME"
  | "ABOUT"
  | "PORTFOLIO"
  | "CONTACT";

const appIcons: Record<AppIcon, AppIconType> = {
  MENU: LuMenu,
  LIGHT_MODE: LuSun,
  DARK_MODE: LuMoon,
  COPYRIGHT: LuCopyright,
  SEND: LuSend,
  SUCCESS: LuPartyPopper,
  ERROR: LuAlertCircle,
  CLOSE: LuX,
  LOADER: LuLoader2,
  SAD: LuFrown,
  BOTTOM: LuArrowDown,
  LEFT: LuArrowLeft,
  RIGHT: LuArrowRight,
  UP: LuArrowUp,
  HOME: LuHome,
  ABOUT: LuInfo,
  CONTACT: LuContact,
  PORTFOLIO: LuBriefcase,
};

export default appIcons;
