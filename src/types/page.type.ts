import { Content, Meta } from "./common.type";

export type Page = {
  title: string;
  description: string;
  slug: string;
  content?: Content;
  meta?: Meta;
  createdAt: string;
  updatedAt: string;
};
