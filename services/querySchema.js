const { gql } = require("graphql-request");

// website
export const websiteQuery = gql`
  query websiteQuery {
    websites(stage: PUBLISHED) {
      title

      description

      ctaText

      ctaLink

      keywords

      logoImage {
        width
        url
        height
      }

      logoText

      socialLinks {
        title
        id
        path
      }

      thumbnail {
        url
        width
        height
      }

      navbarLinks {
        path
        title
        id
      }

      legalLinks {
        id
        path
        title
      }

      pageLinks {
        id
        path
        title
      }
    }
  }
`;

// author
export const authorQuery = gql`
  query authorQuery {
    authors(stage: PUBLISHED) {
      avatar {
        url
        width
        height
      }
      name
      bio
      cvLink
      email
      externalLinks {
        id
        icon
        link
        title
      }
      featuredProjects {
        ... on Project {
          id
          title
          thumbnail {
            width
            url
            height
          }
          sourceLink
          stacks
          demoLink
          description
        }
      }
      hobbies {
        icon
        id
        title
      }
      profession
      id
      skills {
        id
        progress
        title
      }
      addressLink
      addressText
    }
  }
`;

// blog
export const blogQuery = gql`
  query blogQuery {
    blogs(orderBy: postDate_DESC, stage: PUBLISHED) {
      featured
      title
      description
      tags
      id
      slug
      postDate
    }
  }
`;

export const blogPostQuery = gql`
  query blogPostQuery($slug: String!) {
    blog(where: { slug: $slug }, stage: PUBLISHED) {
      content {
        html
      }
      description
      slug
      postDate
      tags
      thumbnail {
        height
        width
        url
      }
      title
      author {
        avatar {
          url
        }
        name
      }
    }
  }
`;

// snippets
export const snippetQuery = gql`
  query snippetQuery {
    snippets(stage: PUBLISHED) {
      slug
      description
      icon
      id
      title
    }
  }
`;

export const snippetPostQuery = gql`
  query snippetPostQuery($slug: String!) {
    snippet(where: { slug: $slug }, stage: PUBLISHED) {
      id
      title
      icon
      thumbnail {
        width
        url
        height
      }
      tags
      snippetDate
      slug
      description
      content {
        html
      }
    }
  }
`;

// projects
export const projectsQuery = gql`
  query projectsQuery {
    projects(stage: PUBLISHED) {
      id
      title
      demoLink
      sourceLink
      thumbnail {
        width
        url
        height
      }
      stacks
      description
      projectType
    }
  }
`;

// pages
export const pagesQuery = gql`
  query pagesQuery(stage: PUBLISHED) {
    pages {
      id
      title
      slug
    }
  }
`;
export const pageQuery = gql`
  query snippetPostQuery($slug: String!) {
    page(where: { slug: $slug }, stage: PUBLISHED) {
      id
      title
      slug
      description
      content {
        html
      }
    }
  }
`;
