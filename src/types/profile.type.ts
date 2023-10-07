import { ContactIcon } from "@/config/icons/contact-icons";
import { HobbyIcon } from "@/config/icons/hobby-icons";
import { SocialIcon } from "@/config/icons/social-icons";
import { Image, Link, Meta } from "./common.type";
import { Project } from "./project.type";

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
