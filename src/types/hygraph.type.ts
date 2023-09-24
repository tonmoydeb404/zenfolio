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

type SkillLevel = "JUNIOR" | "INTERMEDIATE" | "SENIOR" | "EXPERT";
type Skill = {
  title: string;
  level: SkillLevel;
};

type Hobby = {
  title: string;
  icon: string;
};

type Meta = {
  title: string;
  description: string;
  url: string;
  keywords: string[];
  thumbnail: Image;
  indexPage: boolean;
  followPage: boolean;
};

type Content = {
  html: string;
};

type ProjectType = "FRONTEND" | "BACKEND" | "FULLSTACK";

export type Website = {
  id: string;
  title: string;
  logo: Image;
  defaultTheme: "Dark" | "Light";
  copyrightText: string;
  contactLinks: Link[];
  navigationLinks: Link[];
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  projectType: ProjectType;
  previewLink: string;
  sourceLink: string;
  stacks: string[];
  thumbnail: Image;
  content: Content;
  meta: Meta;
};

export type Profile = {
  name: string;
  profession: string;
  bio: string;
  avatar: Image;
  ctaLinks: Link[];
  socialLinks: Link[];
  skillSectionTitle: string;
  skillSectionDescription: string;
  techSkills: Skill[];
  otherSkills: Skill[];
  featuredProjectsSectionTitle: string;
  featuredProjectsSectionDescription: string;
  featuredProjects: Project[];
  hobbySectionTitle: string;
  hobbySectionDescription: string;
  hobbies: Hobby[];
  contacts: Link[];
  meta: Meta;
};

export type Page = {
  title: string;
  description: string;
  slug: string;
  content?: Content;
  meta?: string;
};
