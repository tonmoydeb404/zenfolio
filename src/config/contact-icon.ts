import { IconType } from "react-icons";
import { MdAlternateEmail, MdMyLocation, MdPhone } from "react-icons/md";

export type ContactIcon = "EMAIL" | "ADDRESS" | "PHONE";

export const contactIcons: Record<ContactIcon, IconType> = {
  ADDRESS: MdMyLocation,
  EMAIL: MdAlternateEmail,
  PHONE: MdPhone,
};
