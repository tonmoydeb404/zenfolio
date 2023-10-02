import { Icon } from "@/config/icons";
import { ContactIcon } from "@/config/icons/contact-icons";
import { HobbyIcon } from "@/config/icons/hobby-icons";
import { SocialIcon } from "@/config/icons/social-icons";

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

export type SkillLevel = "JUNIOR" | "INTERMEDIATE" | "SENIOR" | "EXPERT";
export type Skill = {
  id: string;
  title: string;
  level: SkillLevel;
};

export type Hobby = {
  id: string;
  title: string;
  icon: HobbyIcon;
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

export type Content = {
  html: string;
};

export type ProjectType =
  | "WebApplication"
  | "SoftwareApplication"
  | "MobileApplication";

export type ProjectCategory =
  | "GameApplication"
  | "SocialNetworkingApplication"
  | "TravelApplication"
  | "ShoppingApplication"
  | "SportsApplication"
  | "LifestyleApplication"
  | "BusinessApplication"
  | "DesignApplication"
  | "DeveloperApplication"
  | "DriverApplication"
  | "EducationalApplication"
  | "HealthApplication"
  | "FinanceApplication"
  | "SecurityApplication"
  | "BrowserApplication"
  | "CommunicationApplication"
  | "DesktopEnhancementApplication"
  | "EntertainmentApplication"
  | "MultimediaApplication"
  | "HomeApplication"
  | "UtilitiesApplication"
  | "ReferenceApplication";

export type ProjectCurrency = "USD" | "BDT";

export type ProjectMeta = {
  name: string;
  type: ProjectType;
  category: ProjectCategory;
  operatingSystem: string;
  price: number;
  priceCurrency: ProjectCurrency;
  rating: number;
  ratingCount: number;
};

export type Website = {
  id: string;
  title: string;
  logo: Image;
  defaultTheme: "Dark" | "Light";
  copyrightText: string;
  contactLinks: Link[];
  navigationLinks: Link[];
  createdAt: string;
  updatedAt: string;
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  previewLink: string;
  sourceLink: string;
  stacks: string[];
  thumbnail: Image | null;
  content: Content;
  meta: Meta;
  projectMeta: ProjectMeta;
  createdAt: string;
  updatedAt: string;
};

export type Profile = {
  name: string;
  profession: string;
  bio: string;
  avatar: Image;
  primaryCta: Link | null;
  secondaryCta: Link | null;
  socialLinks: Link<SocialIcon>[];
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
  contactSectionTitle: string;
  contactSectionDescription: string;
  contacts: Link<ContactIcon>[];
  meta: Meta;
  createdAt: string;
  updatedAt: string;
};

export type Page = {
  title: string;
  description: string;
  slug: string;
  content?: Content;
  meta?: Meta;
  createdAt: string;
  updatedAt: string;
};
