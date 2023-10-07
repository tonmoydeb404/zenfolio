import { BreadCrumb } from "@/types/breadcrumb.type";
import { Page } from "@/types/page.type";
import { Profile } from "@/types/profile.type";
import { Project } from "@/types/project.type";

const domain = process.env.NEXT_PUBLIC_DOMAIN as string;
const url = process.env.NEXT_PUBLIC_URL as string;
const name = process.env.NEXT_PUBLIC_NAME as string;

export const breadCrumbSchema = (paths: BreadCrumb[]) => {
  return {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: domain,
        item: url,
      },
      ...paths.map((p, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: p.title,
        item: `${url}${p.path}`,
      })),
    ],
  };
};

export const webpageSchema = (
  page: Page,
  image: string,
  relatedPages: Pick<Page, "slug">[],
  itemListElement: any
) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${url}/${page.slug}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: itemListElement,
    },
    lastReviewed: page.updatedAt,
    mainContentOfPage: {
      "@type": "WebPageElement",
      isAccessibleForFree: true,
      cssSelector: "#mainContent",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: image,
    },
    relatedLink: [
      {
        "@type": "WebPage",
        "@id": url,
      },
      ...relatedPages.map((p) => ({
        "@type": "WebPage",
        "@id": `${url}/${p.slug}`,
      })),
    ],
    reviewedBy: [
      {
        "@type": "Organization",
        "@id": url,
      },
    ],
  };
};

export const projectSchema = (project: Project) => {
  const softwareSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": project.projectMeta.type,
    name: project.projectMeta.name,
    applicationCategory: project.projectMeta.category,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: project.projectMeta.rating,
      ratingCount: project.projectMeta.ratingCount,
    },
    offers: {
      "@type": "Offer",
      price: project.projectMeta.price,
      priceCurrency: project.projectMeta.priceCurrency,
    },
  };

  // add operating system
  if (!!project.projectMeta?.operatingSystem)
    softwareSchema.operatingSystem = project.projectMeta.operatingSystem;

  const images = [];

  if (project.thumbnail?.url) images.push(project.thumbnail.url);
  if (project.meta?.thumbnail?.url) images.push(project.meta?.thumbnail.url);

  const articleSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.meta?.title || project.title,
    image: images,
    datePublished: project.createdAt,
    dateModified: project.updatedAt,
    author: [
      {
        "@type": "Person",
        name: name,
        url: url,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: name,
    },
  };

  return [
    breadCrumbSchema([
      { title: "Portfolio", path: "/portfolio" },
      {
        title: project.title,
        path: `/portfolio/${project.slug}`,
      },
    ]),
    softwareSchema,
    articleSchema,
  ];
};

export const profileSchema = (profile: Profile) => {
  const imageSchema = {
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    contentUrl: profile.avatar.url,
    license: url,
    creator: {
      "@type": "Person",
      name: profile.name,
    },
  };

  const logoSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: url,
    logo: profile.avatar.url,
  };

  const personSchema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: profile.name,
    url: url,
    jobTitle: profile.profession,
    image: profile.avatar.url,
    sameAs: profile.socialLinks.map((l) => l.path),
    description: profile.bio,
  };

  return [
    breadCrumbSchema([{ title: "Home", path: "/" }]),
    personSchema,
    logoSchema,
    imageSchema,
  ];
};

export const aboutSchema = (
  page: Page,
  profile: Profile,
  relatedPages: Pick<Page, "slug">[]
) => {
  const breadCrumb = breadCrumbSchema([
    { title: page.title, path: `/${page.slug}` },
  ]);

  const aboutPageSchema = {
    ...webpageSchema(
      page,
      profile.avatar.url,
      relatedPages,
      breadCrumb.itemListElement
    ),
    "@type": "AboutPage",
    specialty: profile.profession,
  };

  return [breadCrumb, aboutPageSchema];
};

export const contactSchema = (
  page: Page,
  profile: Profile,
  relatedPages: Pick<Page, "slug">[]
) => {
  const breadCrumb = breadCrumbSchema([
    { title: page.title, path: `/${page.slug}` },
  ]);

  const contactPageSchema = {
    ...webpageSchema(
      page,
      profile.avatar.url,
      relatedPages,
      breadCrumb.itemListElement
    ),
    "@type": "ContactPage",
    specialty: profile.profession,
    sameAs: profile.socialLinks.map((l) => l.path),
  };

  return [breadCrumb, contactPageSchema];
};

export const pageSchema = (page: Page, relatedPages: Pick<Page, "slug">[]) => {
  const breadCrumb = breadCrumbSchema([
    { title: page.title, path: `/${page.slug}` },
  ]);

  const aboutPageSchema = {
    ...webpageSchema(
      page,
      page.meta?.thumbnail?.url || "",
      relatedPages,
      breadCrumb.itemListElement
    ),
    "@type": "WebPage",
  };

  return [breadCrumb, aboutPageSchema];
};
