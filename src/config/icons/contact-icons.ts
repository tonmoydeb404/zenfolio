import type { IconType } from "react-icons";
import { LuAtSign, LuMapPin, LuPhone } from "react-icons/lu";

export type ContactIconType = IconType;

export type ContactIcon = "EMAIL" | "ADDRESS" | "PHONE";

const contactIcons: Record<ContactIcon, ContactIconType> = {
  ADDRESS: LuMapPin,
  EMAIL: LuAtSign,
  PHONE: LuPhone,
};

export default contactIcons;
