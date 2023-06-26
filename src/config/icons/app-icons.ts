import type { IconType } from "react-icons";
import {
  LuAlertCircle,
  LuCopyright,
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
  | "LOADER";

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
};

export default appIcons;
