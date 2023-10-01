import PageHeader from "@/components/pages/common/PageHeader";
import { Page } from "@/types/hygraph.type";
import { getPage, getPagesSlug } from "@/utils/app-request";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const pages = await getPagesSlug();

  return pages
    .filter(
      (page: Page) => !["about", "contact", "portfolio"].includes(page.slug)
    )
    .map((page: Page) => ({
      slug: page.slug,
    }));
}

const PageDetails = async ({ params }: { params: { slug: string } }) => {
  const page = await getPage(params.slug);

  // throw not found error if page not found
  if (!page) notFound();

  return (
    <>
      <PageHeader title={page?.title} desc={page?.description} />
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: page?.content?.html || "" }}
      />
    </>
  );
};

export default PageDetails;
