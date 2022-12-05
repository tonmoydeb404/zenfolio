import React from "react";
import FetchErrorHandler from "../components/FetchErrorHandler";
import Header from "../components/Header";
import SEOHead from "../components/SEOHead";
import { getPageData, getPagesData } from "../services";

export const getStaticPaths = async () => {
  const pages = await getPagesData();

  const paths =
    !pages.error?.isError && pages.data && pages.data?.length
      ? pages.data.map((item) => {
          return {
            params: {
              slug: item.slug,
            },
          };
        })
      : [];

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const page = await getPageData(params.slug);

  return page.data == null
    ? { notFound: true }
    : {
        props: {
          data: page.data || {},
          error: page.error,
        },
      };
};

const Page = ({ data, error }) => {
  return (
    <>
      <SEOHead
        title={data.title ? `${data.title} - Tonmoy Deb` : null}
        description={data.description}
      />
      <FetchErrorHandler error={error} className="error_msg-1 my-5">
        {/* header area */}
        <Header title={data.title} text={data.description}></Header>

        {/* page content */}
        <div
          className="page_content prose"
          dangerouslySetInnerHTML={{ __html: data.content?.html }}
        ></div>
      </FetchErrorHandler>
    </>
  );
};

export default Page;
