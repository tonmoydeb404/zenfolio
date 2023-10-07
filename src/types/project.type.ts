import { Content, Image, Meta } from "./common.type";

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
