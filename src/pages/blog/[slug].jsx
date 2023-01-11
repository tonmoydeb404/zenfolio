import Image from "next/image";
import Link from "next/link";
import React from "react";
import FetchErrorHandler from "../../common/components/FetchErrorHandler";
import SEOHead from "../../common/components/SEOHead";
import Layout from "../../common/layout";
import { getArticle, getArticleList } from "../../services/cms";

export const getStaticPaths = async () => {
  const response = await getArticleList();

  const paths =
    !response.error && response.articles && response.articles?.length
      ? response.articles.map((data) => {
          return {
            params: {
              slug: data.slug,
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
  const response = await getArticle({ slug: params.slug });

  if (response.error?.code == 404) {
    return { notFound: true };
  }

  return {
    props: {
      data: response.article || {},
      error: response.error ? true : false,
    },
  };
};

const BlogPost = ({ data, error }) => {
  return (
    <Layout>
      <FetchErrorHandler error={error} className="error_msg-1">
        <SEOHead
          title={data.seo?.title}
          description={data.seo?.description}
          image={data.seo?.thumbnail?.url}
          tags={data.seo?.keywords}
          index={data.seo?.indexPage}
          follow={data.seo?.followPage}
          keywords={data.seo?.keywords}
          url={data.seo?.url}
        />

        {/* bread crumb area */}
        <div className="text-sm breadcrumbs pt-5">
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/blog"}>blog</Link>
            </li>
            <li></li>
          </ul>
        </div>

        {/* post header section */}
        <div className="post_header pt-5 pb-2 sm:pb-5">
          {data?.thumbnail && (
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="post_header_img min-h-[200px]"
              src={data.thumbnail?.url}
              alt={data.title}
              priority
            />
          )}

          <div className="post_header_info">
            {/* author info */}
            <div className="post_author">
              {data.author?.image?.url && data.author?.name ? (
                <>
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={data.author?.image?.url}
                    alt={data.author?.name}
                  />
                  <h2 className="font-semibold">{data.author?.name}</h2>
                </>
              ) : (
                ""
              )}
            </div>

            {/* meta info */}
            <div className="post_meta_info">
              <div className="dot"></div>
              <span>{new Date(data.date).toDateString()}</span>
            </div>
          </div>

          {/* post title */}
          <h1 className="post_header_title">{data.title}</h1>
        </div>

        {/* post body */}
        <article
          className="post_body"
          dangerouslySetInnerHTML={{ __html: data.content?.html }}
        ></article>

        {/* post tags */}
        {data.tags && data.tags?.length ? (
          <div className="post_tags pb-10">
            <h2 className="post_tags_title"># Post Tags:</h2>
            <div className="post_tags_content">
              {data.tags.map((tag) => (
                <Link href={`/blog?q=${tag.toLowerCase()}`} key={tag}>
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </FetchErrorHandler>
    </Layout>
  );
};

export default BlogPost;
