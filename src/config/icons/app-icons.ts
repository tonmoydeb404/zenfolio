import type { IconType } from "react-icons";
import {
  LuAlertCircle,
  LuArrowDown,
  LuArrowLeft,
  LuArrowRight,
  LuArrowUp,
  LuCopyright,
  LuFrown,
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
  | "LEFT";

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
};

export default appIcons;
