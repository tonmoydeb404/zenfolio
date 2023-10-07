import { commonProjectProps, contentProps, metaProps } from "./common.query";

export const projectsQuery = () => {
  return `query projectsQuery{
    projects(stage: PUBLISHED) {
      ${commonProjectProps}
    }
  }
  `;
};
export const projectsSlugQuery = () => {
  return `query projectsSlugQuery{
    projects(stage: PUBLISHED) {
      slug
    }
  }
  `;
};
export const projectQuery = (slug: string) => {
  return `query projectQuery{
    project(where: {slug: "${slug}"}, stage: PUBLISHED) {
      ${commonProjectProps}
      content {
        ${contentProps}
      }
      meta {
        ${metaProps}
      }
    }
  }
  `;
};
