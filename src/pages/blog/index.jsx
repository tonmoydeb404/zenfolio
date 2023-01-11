import React from "react";

import FetchErrorHandler from "../../common/components/FetchErrorHandler";
import Header from "../../common/components/Header";
import HeaderSearch from "../../common/components/HeaderSearch";
import ArticlesFeed from "../../common/components/Sections/ArticlesFeed";
import SEOHead from "../../common/components/SEOHead";
import Layout from "../../common/layout";
import { getPage } from "../../services/cms";

export const getStaticProps = async () => {
  const pageResponse = await getPage({ slug: "blog" });

  return {
    props: {
      page: pageResponse.page || {},
      error: pageResponse.error ? true : false,
    },
  };
};

const Blog = ({ error, page }) => {
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

        <Header title={page.title} text={page.description}>
          <HeaderSearch className="blog_search mt-5" basePath="/blog" />
        </Header>

        <ArticlesFeed />
      </FetchErrorHandler>
    </Layout>
  );
};

export default Blog;
