import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import FetchErrorHandler from "../../components/FetchErrorHandler";
import SEOHead from "../../components/SEOHead";
import { getSnippetData, getSnippetPostData } from "../../services";

export const getStaticPaths = async () => {
  const snippets = await getSnippetData();

  const paths =
    !snippets.error?.isError && snippets.data && snippets.data?.length
      ? snippets.data?.map((item) => {
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
  const snippet = await getSnippetPostData(params.slug);

  return snippet.data == null
    ? { notFound: true }
    : {
        props: {
          data: snippet.data || {},
          error: snippet.error,
        },
      };
};

const SnippetPost = ({ data, error }) => {
  return (
    <>
      <SEOHead
        title={data.title ? `${data.title} - Tonmoy Deb` : null}
        path={data.slug ? `/blog/${data.slug}` : null}
        description={data.description}
        image={data.thumbnail?.url}
        tags={data.tags}
      />

      <FetchErrorHandler error={error} className="error_msg-1">
        {/* bread crumb area */}
        <div className="text-sm breadcrumbs pt-5">
          <ul>
            <li>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/snippets"}>
                <a>snippets</a>
              </Link>
            </li>
            <li></li>
          </ul>
        </div>

        {/* post header section */}
        <div className="post_header pt-5 pb-10 sm:pb-14">
          {data.thumbnail && (
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="post_header_img"
              src={data.thumbnail?.url}
              alt={data.title}
            />
          )}

          {/* post title */}
          <h1 className="post_header_title">{data.title}</h1>
        </div>

        {/* post body */}
        <article
          className="post_body"
          dangerouslySetInnerHTML={{ __html: data.content?.html }}
        ></article>
      </FetchErrorHandler>
    </>
  );
};

export default SnippetPost;
