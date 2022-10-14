import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import FetchErrorHandler from "../../components/FetchErrorHandler";
import SEOHead from "../../components/SEOHead";
import { getBlogData, getBlogPostData } from "../../services";

export const getStaticPaths = async () => {
  const blogs = await getBlogData();

  const paths =
    !blogs.error?.isError && blogs.data && blogs.data?.length
      ? blogs.data.map((data) => {
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
  const blog = await getBlogPostData(params.slug);

  return blog.data == null
    ? { notFound: true }
    : {
        props: {
          data: blog.data || {},
          error: blog.error,
        },
      };
};

const BlogPost = ({ data, error }) => {
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
              <Link href={"/blog"}>
                <a>blog</a>
              </Link>
            </li>
            <li></li>
          </ul>
        </div>

        {/* post header section */}
        <div className="post_header pt-5 pb-10 sm:pb-14">
          {data?.thumbnail && (
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="post_header_img"
              src={data.thumbnail?.url}
              alt={data.title}
            />
          )}

          <div className="post_header_info">
            {/* author info */}
            <div className="post_author">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src={data.author?.avatar?.url}
                alt={data.author?.name}
              />
              <h2 className="font-semibold">{data.author?.name}</h2>
            </div>

            {/* meta info */}
            <div className="post_meta_info">
              <div className="dot"></div>
              <span>{new Date(data.postDate).toDateString()}</span>
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
          <div className="post_tags pb-16">
            <h2 className="post_tags_title"># Post Tags:</h2>
            <div className="post_tags_content">
              {data.tags.map((tag) => (
                <Link href={`/blog?q=${tag.split(" ").join("-")}`} key={tag}>
                  <a>{tag}</a>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </FetchErrorHandler>
    </>
  );
};

export default BlogPost;
