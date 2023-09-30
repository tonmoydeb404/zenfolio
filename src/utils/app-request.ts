import {
  pageQuery,
  pagesQuery,
  pagesSlugQuery,
  profileQuery,
  projectsQuery,
  queryWrapper,
} from "@/lib/hygraph-queries";
import { Page, Profile, Project } from "@/types/hygraph.type";

const CMS_ENDPOINT = process.env.CMS_ENDPOINT as string;
const PROFILE_ID = process.env.PROFILE_ID as string;

export const getPagesSlug = async () => {
  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: queryWrapper("getPagesSlug", [pagesSlugQuery()]),
    }),
  });

  const { data } = await response.json();

  return data.pages as Page[];
};

export const getPages = async (revalidate: undefined | number = undefined) => {
  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: queryWrapper("getPages", [pagesQuery()]),
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
      query: queryWrapper("getPage", [pageQuery(slug)]),
    }),
  });

  const { data } = await response.json();

  return data.page as Page;
};

export const getProfile = async () => {
  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: queryWrapper("getProfile", [profileQuery(PROFILE_ID)]),
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
      query: queryWrapper("getProjects", [projectsQuery()]),
    }),
    next: {
      tags: ["projects"],
      revalidate,
    },
  });

  const { data } = await response.json();

  return data.projects as Project[];
};
