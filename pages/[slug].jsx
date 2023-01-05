import React from "react";
import FetchErrorHandler from "../components/FetchErrorHandler";
import Header from "../components/Header";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { getPage, getPageList } from "../services/cms";

const EXCLUDE_PATHS = ["portfolio", "blog", "contact"];

export const getStaticPaths = async () => {
  const response = await getPageList();

  const paths =
    !response.error && response.pages && response.pages?.length
      ? response.pages
          .filter((item) => !EXCLUDE_PATHS.includes(item.slug))
          .map((item) => {
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
  const response = await getPage({ slug: params.slug });

  if (response.error?.code == 404) {
    return { notFound: true };
  }

  return {
    props: {
      data: response.page || {},
      error: response.error || false,
    },
  };
};

const Page = ({ data, error }) => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Page;
