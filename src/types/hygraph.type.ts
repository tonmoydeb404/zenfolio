import { Icon } from "@/config/icons";

export type Link = {
  id: string;
  title: string;
  icon: Icon | null;
  newTab: boolean;
  path: string;
  text: string | null;
};

type Image = {
  url: string;
  width: number;
  height: number;
};

export type Website = {
  id: string;
  title: string;
  logo: Image;
  defaultTheme: "Dark" | "Light";
  copyrightText: string;
  contactLinks: Link[];
  navigationLinks: Link[];
};
