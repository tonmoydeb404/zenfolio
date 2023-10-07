import {
  pageQuery,
  pagesQuery,
  pagesSlugQuery,
} from "@/lib/queries/page.query";
import { profileQuery } from "@/lib/queries/profile.query";
import {
  projectQuery,
  projectsQuery,
  projectsSlugQuery,
} from "@/lib/queries/project.query";
import { websiteQuery } from "@/lib/queries/website.query";
import { Page } from "@/types/page.type";
import { Profile } from "@/types/profile.type";
import { Project } from "@/types/project.type";
import { Website } from "@/types/website.type";

const CMS_ENDPOINT = process.env.CMS_ENDPOINT as string;
const PROFILE_ID = process.env.PROFILE_ID as string;
const WEBSITE_ID = process.env.WEBSITE_ID as string;

export const getPagesSlug = async () => {
  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: pagesSlugQuery(),
    }),
  });

  const { data } = await response.json();

  return data.pages as Pick<Page, "slug">[];
};

export const getPages = async (revalidate: undefined | number = undefined) => {
  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: pagesQuery(),
    }),
    next: {
      revalidate,
    },
  });

  const { data } = await response.json();

  return data.pages as Page[];
};

export const getPage = async (slug: string) => {
  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: pageQuery(slug),
    }),
  });

  const { data } = await response.json();

  return data.page as Page;
};

export const getProfile = async () => {
  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: profileQuery(PROFILE_ID),
    }),
    next: {
      tags: ["profile"],
    },
  });

  const { data } = await response.json();

  return data.profile as Profile;
};

export const getProjects = async (
  revalidate: undefined | number = undefined
) => {
  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: projectsQuery(),
    }),
    next: {
      tags: ["projects"],
      revalidate,
    },
  });

  const { data } = await response.json();

  return data.projects as Project[];
};

export const getProject = async (slug: string) => {
  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: projectQuery(slug),
    }),
  });

  const { data } = await response.json();

  return data.project as Project;
};

export const getProjectsSlug = async () => {
  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: projectsSlugQuery(),
    }),
  });

  const { data } = await response.json();

  return data.projects as Pick<Project, "slug">[];
};

export const getWebsite = async () => {
  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: websiteQuery(WEBSITE_ID),
    }),
    next: {
      tags: ["website"],
    },
  });

  const { data } = await response.json();

  return data.website as Website;
};
