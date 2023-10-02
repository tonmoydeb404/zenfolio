const imageProps = `
url
width
height
`;
const linkProps = `
id
title
icon
newTab
path
text
`;
const skillProps = `
id
title
level
`;
const projectMetaProps = `
name
type
category
operatingSystem
price
priceCurrency
rating
ratingCount
`;
const commonProjectProps = `
title
slug
description
previewLink
sourceLink
stacks
thumbnail {
  ${imageProps}
}
projectMeta {
  ${projectMetaProps}
}
createdAt
updatedAt
`;
const hobbyProps = `
id
title
icon
`;
const metaProps = `
title
description
url
keywords
thumbnail {
  ${imageProps}
}
indexPage
followPage
`;
const contentProps = `
html
`;

export const queryWrapper = (name: string, queries: string[]) => {
  return `query ${name}{
    ${queries.join("\n")}
  }`;
};

export const websiteQuery = (id: string) => {
  return `
  website(where: {id: "${id}"}, stage: PUBLISHED) {
    id
    title
    logo {
      ${imageProps}
    }
    defaultTheme
    copyrightText
    contactLinks {
      ${linkProps}
    }
    navigationLinks {
      ${linkProps}
    }
    createdAt
    updatedAt
  }
  `;
};

export const profileQuery = (id: string) => {
  return `
    profile(stage: PUBLISHED, where: {id: "${id}"}) {
      id
      name
      profession
      bio
      avatar {
        ${imageProps}
      }
      primaryCta {
        ${linkProps}
      }
      secondaryCta {
        ${linkProps}
      }
      socialLinks {
        ${linkProps}
      }
      skillSectionTitle
      skillSectionDescription
      techSkills {
        ${skillProps}
      }
      otherSkills {
        ${skillProps}
      }
      featuredProjectsSectionTitle
      featuredProjectsSectionDescription
      featuredProjects {
        ${commonProjectProps}
      }
      hobbySectionTitle
      hobbySectionDescription
      hobbies {
        ${hobbyProps}
      }
      contactSectionTitle
      contactSectionDescription
      contacts {
        ${linkProps}
      }
      meta {
        ${metaProps}
      }
      createdAt
      updatedAt
    }
  `;
};

export const pagesQuery = () => {
  return `
  pages {
    id
    title
    slug
    createdAt
    updatedAt
  }
  `;
};
export const pagesSlugQuery = () => {
  return `
  pages(stage: PUBLISHED) {
    slug
  }
  `;
};
export const pageQuery = (slug: string) => {
  return `
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
  `;
};

export const projectsQuery = () => {
  return `
  projects(stage: PUBLISHED) {
    ${commonProjectProps}
  }
  `;
};
export const projectsSlugQuery = () => {
  return `
  projects(stage: PUBLISHED) {
    slug
  }
  `;
};
export const projectQuery = (slug: string) => {
  return `
  project(where: {slug: "${slug}"}, stage: PUBLISHED) {
    ${commonProjectProps}
    content {
      ${contentProps}
    }
    meta {
      ${metaProps}
    }
  }
  `;
};
