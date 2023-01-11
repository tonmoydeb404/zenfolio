import React from "react";
import FetchErrorHandler from "../../common/components/FetchErrorHandler";
import Header from "../../common/components/Header";
import ProjectsFeed from "../../common/components/Sections/ProjectsFeed";
import SEOHead from "../../common/components/SEOHead";
import Layout from "../../common/layout";
import { getPage } from "../../services/cms";

export const getStaticProps = async () => {
  const pageResponse = await getPage({ slug: "portfolio" });

  return {
    props: {
      page: pageResponse.page || {},
      error: pageResponse.error ? true : false,
    },
  };
};

const Portfolio = ({ page, error }) => {
  return (
    <Layout>
      <FetchErrorHandler error={error} className="error_msg-1">
        <SEOHead
          title={page.seo.title}
          follow={page.seo.followPage}
          index={page.seo.indexPage}
          keywords={page.seo.keywords}
          url={page.seo.url}
          description={page.seo.description}
          image={page.seo.thumbnail}
        />

        <Header title={page.title} text={page.description} />

        <ProjectsFeed />
      </FetchErrorHandler>
    </Layout>
  );
};

export default Portfolio;
