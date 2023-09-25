import PageHeader from "@/components/pages/common/PageHeader";
import { pageQuery, pagesSlugQuery, queryWrapper } from "@/lib/hygraph-queries";
import { Page } from "@/types/hygraph.type";

export async function generateStaticParams() {
  const CMS_ENDPOINT = process.env.CMS_ENDPOINT as string;
  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: queryWrapper("getPagesSlug", [pagesSlugQuery()]),
    }),
  });

  const { data } = await response.json();

  return data.pages
    .filter(
      (page: Page) => page.slug !== "contact" && page.slug !== "portfolio"
    )
    .map((page: Page) => ({
      slug: page.slug,
    }));
}

const getData = async (slug: string) => {
  const CMS_ENDPOINT = process.env.CMS_ENDPOINT as string;

  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: queryWrapper("getPage", [pageQuery(slug)]),
    }),
  });

  const { data } = await response.json();

  return {
    page: data.page as Page,
  };
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);

  return (
    <>
      <PageHeader title={data.page?.title} desc={data.page?.description} />
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: data.page?.content?.html || "" }}
      ></article>
    </>
  );
};

export default Page;
