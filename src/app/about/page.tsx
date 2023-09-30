import PageHeader from "@/components/pages/common/PageHeader";
import { aboutSchema } from "@/lib/schema-markup";
import { getPage, getPagesSlug, getProfile } from "@/utils/app-request";

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
      ></article>
    </>
  );
};

export default AboutPage;
