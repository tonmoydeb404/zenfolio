import { Icon } from "@/config/icons";

export type MetadataProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// CMS DATA TYPES
export type Link<IconType = Icon | null> = {
  id: string;
  title: string;
  icon: IconType;
  newTab: boolean;
  path: string;
  text: string | null;
};

export type Image = {
  url: string;
  width: number;
  height: number;
};

export type Content = {
  html: string;
};

export type Meta = {
  title: string;
  description: string;
  url: string;
  keywords: string[];
  thumbnail: Image;
  indexPage: boolean;
  followPage: boolean;
};
