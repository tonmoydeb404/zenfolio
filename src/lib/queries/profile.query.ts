import {
  commonProjectProps,
  hobbyProps,
  imageProps,
  linkProps,
  metaProps,
  skillProps,
} from "./common.query";

export const profileQuery = (id: string) => {
  return `query profileQuery{
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
  }
  `;
};
