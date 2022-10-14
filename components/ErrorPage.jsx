import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "react-daisyui";

const ErrorPage = ({ statusCode, text }) => {
  // router
  const router = useRouter();

  return (
    <div className="flex items-center justify-center flex-col w-full min-h-screen absolute top-0 left-0 bg-secondary z-[200000] gap-2">
      <h2 className="text-5xl font-bold">{statusCode}</h2>
      <p className="text-lg">{text}</p>

      <div className="flex items-center mt-5 gap-3">
        <Button color="primary" className="gap-1" onClick={() => router.back()}>
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
  );
};

export default ErrorPage;
