import React from "react";
import ErrorPage from "../components/ErrorPage";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";

const ErrorPages = ({ statusCode }) => {
  return (
    <Layout>
      <SEOHead
        title={
          statusCode == 404
            ? "404 - page not found"
            : `${statusCode} - something wents to wrong`
        }
        index={false}
        follow={false}
      />
      <ErrorPage
        statusCode={statusCode}
        text={
          statusCode == 404
            ? "sorry page not found"
            : "something wents to wrong"
        }
      />
    </Layout>
  );
};

ErrorPages.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPages;
