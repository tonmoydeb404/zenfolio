import request from "graphql-request";
import {
  authorQuery,
  blogPostQuery,
  blogQuery,
  pageQuery,
  pagesQuery,
  projectsQuery,
  snippetPostQuery,
  snippetQuery,
  websiteQuery,
} from "./querySchema";

const CMS_ENDPOINT = process.env.CMS_ENDPOINT;

const returnType = ({ data = undefined, error = { isError: false } }) => {
  return { data, error };
};

export const getWebsiteData = async (query = websiteQuery) => {
  // validate arguments
  if (!query) {
    return returnType({
      error: { isError: true, error: { message: "query document is invalid" } },
    });
  }

  try {
    const data = await request(CMS_ENDPOINT, query);

    // check query errors
    if (data?.errors && data?.errors?.length)
      throw {
        code: 500,
        message: data?.errors[0]?.message,
      };

    return returnType({ data: data.websites?.[0] });
  } catch (error) {
    return returnType({
      error: { isError: true, error: JSON.stringify(error) },
    });
  }
};

export const getAuthorData = async (query = authorQuery) => {
  // validate arguments
  if (!query) {
    return returnType({
      error: { isError: true, error: { message: "query document is invalid" } },
    });
  }

  try {
    const data = await request(CMS_ENDPOINT, query);

    // check query errors
    if (data?.errors && data?.errors?.length)
      throw {
        code: 500,
        message: data?.errors[0]?.message,
      };

    return returnType({ data: data.authors?.[0] });
  } catch (error) {
    return returnType({
      error: { isError: true, error: JSON.stringify(error) },
    });
  }
};

// fetch blog data
export const getBlogData = async (query = blogQuery) => {
  // validate arguments
  if (!query) {
    return returnType({
      error: { isError: true, error: { message: "query document is invalid" } },
    });
  }

  try {
    const data = await request(CMS_ENDPOINT, query);

    // check query errors
    if (data?.errors && data?.errors?.length)
      throw {
        code: 500,
        message: data?.errors[0]?.message,
      };

    return returnType({ data: data.blogs });
  } catch (error) {
    return returnType({
      error: { isError: true, error: { message: "query document is invalid" } },
    });
  }
};
export const getBlogPostData = async (slug = null, query = blogPostQuery) => {
  // validate arguments
  if (!query) {
    return returnType({
      error: { isError: true, error: { message: "query document is invalid" } },
    });
  }

  if (!slug || typeof slug != "string" || !slug.length) {
    return returnType({
      error: { isError: true, error: { message: "blog slug is invalid" } },
    });
  }

  try {
    const data = await request(CMS_ENDPOINT, query, { slug });

    // check query errors
    if (data?.errors && data?.errors?.length)
      throw {
        code: 500,
        message: data?.errors[0]?.message,
      };

    return returnType({ data: data.blog });
  } catch (error) {
    return returnType({
      error: { isError: true, error: JSON.stringify(error) },
    });
  }
};

// fetch snippet data
export const getSnippetData = async (query = snippetQuery) => {
  // validate arguments
  if (!query) {
    return returnType({
      error: { isError: true, error: { message: "query document is invalid" } },
    });
  }

  try {
    const data = await request(CMS_ENDPOINT, query);

    // check query errors
    if (data?.errors && data?.errors?.length)
      throw {
        code: 500,
        message: data?.errors[0]?.message,
      };

    return returnType({
      data: data.snippets,
    });
  } catch (error) {
    return returnType({
      error: { isError: true, error: JSON.stringify(error) },
    });
  }
};
export const getSnippetPostData = async (
  slug = null,
  query = snippetPostQuery
) => {
  // validate arguments
  if (!query) {
    return returnType({
      error: { isError: true, error: { message: "query document is invalid" } },
    });
  }

  if (!slug || typeof slug != "string" || !slug.length) {
    return returnType({
      error: { isError: true, error: { message: "snippet slug is invalid" } },
    });
  }

  try {
    const data = await request(CMS_ENDPOINT, query, { slug });

    // check query errors
    if (data?.errors && data?.errors?.length)
      throw {
        code: 500,
        message: data?.errors[0]?.message,
      };

    return returnType({ data: data.snippet });
  } catch (error) {
    return returnType({
      error: { isError: true, error: JSON.stringify(error) },
    });
  }
};

// fetch projects data
export const getProjectsData = async (query = projectsQuery) => {
  // validate arguments
  if (!query) {
    return returnType({
      error: { isError: true, error: { message: "query document is invalid" } },
    });
  }

  try {
    const data = await request(CMS_ENDPOINT, query);

    // check query errors
    if (data?.errors && data?.errors?.length)
      throw {
        code: 500,
        message: data?.errors[0]?.message,
      };

    return returnType({ data: data.projects });
  } catch (error) {
    return returnType({
      error: { isError: true, error: JSON.stringify(error) },
    });
  }
};

// fetch page data
export const getPagesData = async (query = pagesQuery) => {
  // validate arguments
  if (!query) {
    return returnType({
      error: { isError: true, error: { message: "query document is invalid" } },
    });
  }

  try {
    const data = await request(CMS_ENDPOINT, query);

    // check query errors
    if (data?.errors && data?.errors?.length)
      throw {
        code: 500,
        message: data?.errors[0]?.message,
      };

    return returnType({ data: data.pages });
  } catch (error) {
    return returnType({
      error: { isError: true, error: JSON.stringify(error) },
    });
  }
};

export const getPageData = async (slug = null, query = pageQuery) => {
  // validate arguments
  if (!query) {
    return returnType({
      error: { isError: true, error: { message: "query document is invalid" } },
    });
  }

  if (!slug || typeof slug != "string" || !slug.length) {
    return returnType({
      error: { isError: true, error: { message: "page slug is invalid" } },
    });
  }

  try {
    const data = await request(CMS_ENDPOINT, query, { slug });

    // check query errors
    if (data?.errors && data?.errors?.length)
      throw {
        code: 500,
        message: data?.errors[0]?.message,
      };

    return returnType({ data: data.page });
  } catch (error) {
    return returnType({
      error: { isError: true, error: JSON.stringify(error) },
    });
  }
};
