import PageHeader from "@/components/pages/common/PageHeader";
import { aboutSchema } from "@/lib/schema-markup";
import { getPage, getPagesSlug, getProfile } from "@/utils/app-request";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("about");

  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description || page.description,
    keywords: page.meta?.keywords,
    alternates: {
      canonical: page.meta?.url,
    },
    openGraph: {
      images: page.meta?.thumbnail?.url,
      title: page.meta?.title,
      description: page.meta?.description,
      url: page.meta?.url,
      type: "website",
    },
    robots: {
      index: page.meta?.indexPage,
      follow: page.meta?.followPage,
    },
  };
}

const AboutPage = async () => {
  const about = await getPage("about");
  const profile = await getProfile();
  const pagesSlug = await getPagesSlug();

  return (
    <>
      {aboutSchema(about, profile, pagesSlug).map((schema, index) => (
        <script
          key={`schema-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <PageHeader title={about?.title} desc={about?.description} />
      <article
        id="#mainContent"
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: about?.content?.html || "" }}
      />
    </>
  );
};

export default AboutPage;
