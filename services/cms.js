import request from "graphql-request";
import {
  articleListSchema,
  articleSchema,
  authorSchema,
  pageListSchema,
  pageSchema,
  projectListSchema,
  projectSchema,
  sitemapSchema,
  websiteSchema,
} from "../lib/graphQL.js";

const CMS_ENDPOINT = process.env.CMS_ENDPOINT;
const WEBSITE_ID = process.env.WEBSITE_ID;
const AUTHOR_ID = process.env.AUTHOR_ID;

// get website details
export const getWebsite = async () => {
  try {
    // parameter validations
    if (!WEBSITE_ID) {
      throw { message: "invalid website id" };
    }

    // execute query
    const data = await request(CMS_ENDPOINT, websiteSchema, {
      websiteID: WEBSITE_ID,
    });

    // handle author available or not
    if (!data.website) throw { message: "data not found", code: 404 };

    // handle query errors
    if (data.errors && data.errors?.length)
      throw { message: data.errors[0]?.message };

    return data;
  } catch (error) {
    // console.error(error);
    return { error };
  }
};

// get author details
export const getAuthor = async () => {
  try {
    // parameter validations
    if (!AUTHOR_ID) {
      throw { message: "invalid author id" };
    }

    // execute query
    const data = await request(CMS_ENDPOINT, authorSchema, {
      authorID: AUTHOR_ID,
    });

    // handle author available or not
    if (!data.author) throw { message: "data not found", code: 404 };

    // handle query errors
    if (data.errors && data.errors?.length)
      throw { message: data.errors[0]?.message };

    return data;
  } catch (error) {
    return { error };
  }
};

// get page details
export const getPage = async ({ slug = null }) => {
  try {
    // parameter validations
    if (!slug) {
      throw { message: "invalid page slug" };
    }

    // execute query
    const data = await request(CMS_ENDPOINT, pageSchema, { slug });

    // handle author available or not
    if (!data.page) throw { message: "data not found", code: 404 };

    // handle query errors
    if (data.errors && data.errors?.length)
      throw { message: data.errors[0]?.message };

    return data;
  } catch (error) {
    // console.error(error);
    return { error };
  }
};

// get project details
export const getProject = async ({ slug = null }) => {
  try {
    // parameter validations
    if (!slug) {
      throw { message: "invalid project slug" };
    }

    // execute query
    const data = await request(CMS_ENDPOINT, projectSchema, { slug });

    // handle author available or not
    if (!data.project) throw { message: "data not found", code: 404 };

    // handle query errors
    if (data.errors && data.errors?.length)
      throw { message: data.errors[0]?.message };

    return data;
  } catch (error) {
    // console.error(error);
    return { error };
  }
};

// get article details
export const getArticle = async ({ slug = null }) => {
  try {
    // parameter validations
    if (!slug) {
      throw { message: "invalid article slug" };
    }

    // execute query
    const data = await request(CMS_ENDPOINT, articleSchema, { slug });

    // handle author available or not
    if (!data.article) throw { message: "data not found", code: 404 };

    // handle query errors
    if (data.errors && data.errors?.length)
      throw { message: data.errors[0]?.message };

    return data;
  } catch (error) {
    console.error(error);
    return { error };
  }
};

// get page list
export const getPageList = async () => {
  try {
    // execute query
    const data = await request(CMS_ENDPOINT, pageListSchema);

    // handle query errors
    if (data.errors && data.errors?.length)
      throw { message: data.errors[0]?.message };

    return data;
  } catch (error) {
    // console.error(error);
    return { error };
  }
};

// get project list
export const getProjectList = async () => {
  try {
    // execute query
    const data = await request(CMS_ENDPOINT, projectListSchema);

    // handle query errors
    if (data.errors && data.errors?.length)
      throw { message: data.errors[0]?.message };

    return data;
  } catch (error) {
    // console.error(error);
    return { error };
  }
};

// get article list
export const getArticleList = async () => {
  try {
    // execute query
    const data = await request(CMS_ENDPOINT, articleListSchema);

    // handle query errors
    if (data.errors && data.errors?.length)
      throw { message: data.errors[0]?.message };

    return data;
  } catch (error) {
    // console.error(error);
    return { error };
  }
};

// get sitemap
export const getSiteMap = async () => {
  try {
    // execute query
    const data = await request(CMS_ENDPOINT, sitemapSchema);

    // handle query errors
    if (data.errors && data.errors?.length)
      throw { message: data.errors[0]?.message };

    return data;
  } catch (error) {
    // console.error(error);
    return { error };
  }
};
