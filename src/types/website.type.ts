import { AppIcon } from "@/config/icons/app-icons";
import { Image, Link } from "./common.type";

export type WebsiteTheme = "Dark" | "Light";

export type Website = {
  id: string;
  title: string;
  logo: Image;
  defaultTheme: WebsiteTheme;
  copyrightText: string;
  contactLinks: Link[];
  navigationLinks: Link<AppIcon>[];
  createdAt: string;
  updatedAt: string;
  ga_tracking_id: string;
};
