import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "react-daisyui";
import { BiHome, BiLeftArrowAlt } from "react-icons/bi";
import SEOHead from "../common/components/SEOHead";

const ErrorPage = ({ statusCode }) => {
  // router
  const router = useRouter();

  return (
    <>
      <SEOHead
        title={
          statusCode == 404
            ? "404 - page not found"
            : `${statusCode} - something wents to wrong`
        }
        index={false}
        follow={false}
      />
      <div className="flex items-center justify-center flex-col w-full py-10 min-h-screen bg-secondary gap-2">
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
            <BiLeftArrowAlt className="icon" />
            Previous Page
          </Button>
          <Link href={"/"} passHref>
            <Button color="warning" className="gap-1">
              Back To Home
              <BiHome className="icon mb-1" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
