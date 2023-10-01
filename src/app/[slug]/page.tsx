import PageHeader from "@/components/pages/common/PageHeader";
import { MetadataProps } from "@/types/common.type";
import { Page } from "@/types/hygraph.type";
import { getPage, getPagesSlug } from "@/utils/app-request";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const page = await getPage(params.slug);

  if (!page) return {};

  return {
    title: page.title,
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
