import { gql } from "graphql-request";

// website model schema
export const websiteSchema = gql`
  query websiteQuery($websiteID: String!) {
    website(where: { websiteID: $websiteID }, stage: PUBLISHED) {
      websiteID
      logo {
        url
        width
      }
      websiteColor {
        hex
        css
      }
      title
      description
      siteData
      seo {
        title
        description
        thumbnail {
          id
        }
        indexPage
        followPage
        url
        keywords
      }
      navLinks {
        id
        title
        path
        newTab
      }
      pages {
        id
        title
        path
        newTab
      }
      socials {
        id
        title
        path
        newTab
      }
      legalLinks {
        id
        title
        path
        newTab
      }
    }
  }
`;

// author model schema
export const authorSchema = gql`
  query AuthorQuery($authorID: String!) {
    author(where: { authorID: $authorID }, stage: PUBLISHED) {
      image {
        url
        width
      }
      authorID
      name
      tagLine
      description
      cvLink
      email
      cta {
        title
        path
        newTab
      }
      socialLinks {
        iconName
        id
        title
        path
      }
      devSkills {
        id
        name
        level
      }
      otherSkills {
        id
        name
        level
      }
      hobbies {
        id
        title
        iconName
      }
      contacts {
        id
        iconName
        title
        path
        text
      }
      seo {
        title
        description
        thumbnail {
          url
          width
        }
        indexPage
        followPage
        url
        keywords
      }
      projects {
        id
        thumbnail {
          url
          width
        }
        title
        description
        demoLink
        sourceLink
        slug
        stacks
      }
    }
  }
`;

// page model schema
export const pageSchema = gql`
  query pageQuery($slug: String!) {
    page(where: { slug: $slug }, stage: PUBLISHED) {
      content {
        html
      }
      id
      description
      slug
      title
      seo {
        followPage
        description
        indexPage
        keywords
        title
        url
        thumbnail {
          url
          width
        }
      }
    }
  }
`;

// project model schema
export const projectSchema = gql`
  query projectQuery($slug: String!) {
    project(where: { slug: $slug }, stage: PUBLISHED) {
      id
      slug
      title
      description
      demoLink
      sourceLink
      images {
        width
        url
      }
      stacks
      thumbnail {
        url
        width
      }
      type
      content {
        html
      }
      seo {
        title
        url
        keywords
        indexPage
        followPage
        description
        thumbnail {
          url
          width
        }
      }
    }
  }
`;

// article model schema
export const articleSchema = gql`
  query articleQuery($slug: String!) {
    article(where: { slug: $slug }, stage: PUBLISHED) {
      author {
        name
        image {
          width
          url
        }
        authorID
      }
      content {
        html
      }
      date
      description
      featured
      id
      slug
      tags
      thumbnail {
        url
        width
      }
      title
      seo {
        description
        followPage
        indexPage
        keywords
        title
        url
        thumbnail {
          url
          width
        }
      }
    }
  }
`;

// page list schema
export const pageListSchema = gql`
  query pageListQuery {
    pages(stage: PUBLISHED) {
      id
      slug
      title
    }
  }
`;

// project list schema
export const projectListSchema = gql`
  query projectListQuery {
    projects(orderBy: publishedAt_DESC, stage: PUBLISHED) {
      id
      slug
      title
      type
      description
      demoLink
      sourceLink
      stacks
      thumbnail {
        width
        url
      }
    }
    __type(name: "ProjectType") {
      name
      enumValues {
        name
      }
    }
  }
`;

// article list schema
export const articleListSchema = gql`
  query articleListQuery {
    articles(orderBy: date_DESC, stage: PUBLISHED) {
      id
      title
      slug
      description
      tags
      featured
    }
  }
`;
