import { useRouter } from "next/router";
import React from "react";
import { Button } from "react-daisyui";
import SEOHead from "../common/components/SEOHead";
import Layout from "../common/layout";

const ErrorPage = ({ statusCode }) => {
  // router
  const router = useRouter();

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
      <div className="flex items-center justify-center flex-col w-full min-h-screen absolute top-0 left-0 bg-secondary z-[200000] gap-2">
        <h2 className="text-5xl font-bold">{statusCode}</h2>
        <p className="text-lg">
          {statusCode == 404
            ? "sorry page not found"
            : "something wents to wrong"}
        </p>

        <div className="flex items-center mt-5 gap-3">
          <Button
            color="primary"
            className="gap-1"
            onClick={() => router.back()}
          >
            <i className="bx bx-left-arrow-alt icon mb-1"></i>
            Previous Page
          </Button>
          <Link href={"/"} passHref>
            <Button color="warning" className="gap-1">
              Back To Home
              <i className="bx bx-home icon mb-1"></i>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
