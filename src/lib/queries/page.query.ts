import { contentProps, metaProps } from "./common.query";

export const pagesQuery = () => {
  return `query pagesQuery{
    pages {
      id
      title
      slug
      createdAt
      updatedAt
    }
  }
  `;
};
export const pagesSlugQuery = () => {
  return `query pagesSlugQuery{
    pages(stage: PUBLISHED) {
      slug
    }
  }
  `;
};
export const pageQuery = (slug: string) => {
  return `query pageQuery{
    page(where: {slug: "${slug}"}, stage: PUBLISHED) {
      title
      description
      slug
      content {
        ${contentProps}
      }
      meta {
        ${metaProps}
      }
      createdAt
      updatedAt
    }
  }
  `;
};
