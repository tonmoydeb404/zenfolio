import { Project } from "@/types/hygraph.type";

export const projectSchema = (project: Project) => {
  const softwareSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": project.projectMeta.type,
    name: project.projectMeta.name,
    operatingSystem: project.projectMeta.operatingSystem,
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
  if (project.projectMeta?.operatingSystem)
    softwareSchema.operatingSystem = project.projectMeta.operatingSystem;

  return softwareSchema;
};
