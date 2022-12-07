import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiGitBranch, BiLinkExternal } from "react-icons/bi";
import FetchErrorHandler from "../../components/FetchErrorHandler";
import SEOHead from "../../components/SEOHead";
import { getProject, getProjectList } from "../../services/cms";

export const getStaticPaths = async () => {
  const response = await getProjectList();

  const paths =
    !response.error && response.projects && response.projects?.length
      ? response.projects.map((data) => {
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
  const response = await getProject({ slug: params.slug });

  if (response.error?.code == 404) {
    return { notFound: true };
  }

  return {
    props: {
      data: response.project || {},
      error: response.error ? true : false,
    },
  };
};

const ProjectPage = ({ data, error }) => {
  return (
    <>
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
              <Link href={"/portfolio"}>portfolio</Link>
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
              className="post_header_img min-h-[200px]"
              src={data.thumbnail?.url}
              alt={data.title}
              priority
            />
          )}

          <div className="flex gap-4 flex-col justify-between">
            <div>
              <h1 className="post_header_title text-3xl">{data.title}</h1>
              <p className="mt-2">{data.description}</p>
            </div>

            <div className="flex gap-1 items-center justify-end">
              <Link
                href={data.demoLink}
                target="_blank"
                className="btn btn-sm btn-primary"
              >
                <span>Demo</span>
                <span className=" text-xl">
                  <BiLinkExternal />
                </span>
              </Link>
              <Link
                href={data.sourceLink}
                target="_blank"
                className="btn btn-sm btn-warning"
              >
                <span>Source</span>
                <span className="text-xl">
                  <BiGitBranch />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* project body */}
        <article
          className="post_body"
          dangerouslySetInnerHTML={{ __html: data.content?.html }}
        ></article>

        {/* project stacks */}
        {data.stacks && data.stacks?.length ? (
          <div className="post_tags pb-16">
            <h2 className="post_tags_title"># Project Stacks:</h2>
            <div className="post_tags_content">
              {data.stacks.map((tag) => (
                <span
                  className="btn btn-xs btn-ghost btn-outline no-animation "
                  key={tag}
                >
                  {tag}
                </span>
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

export default ProjectPage;
