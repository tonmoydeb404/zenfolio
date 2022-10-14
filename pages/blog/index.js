import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import FeaturedCard from "../../components/FeaturedCard";
import FetchErrorHandler from "../../components/FetchErrorHandler";
import Header from "../../components/Header";
import HeaderSearch from "../../components/HeaderSearch";
import SEOHead from "../../components/SEOHead";
import { getBlogData } from "../../services";

export const getStaticProps = async () => {
  const blog = await getBlogData();

  return {
    props: {
      data: blog.data || [],
      error: blog.error,
    },
  };
};

const Blog = ({ data, error }) => {
  // router
  const router = useRouter();
  const query = router.query?.q;

  // states
  const [featuredBlog, setFeaturedBlog] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  // update data for featured post
  useEffect(() => {
    if (data && data.length) {
      const fdata = data.filter((b) => b.featured);

      setFeaturedBlog(fdata.slice(0, 3));
    }
  }, [data]);

  // update data for posts
  useEffect(() => {
    if (data && data?.length) {
      // clone posts
      let posts = [...data];

      if (query && typeof query == "string" && query.length) {
        // filter in posts
        posts = posts.filter((post) => {
          return post.title?.includes(query) || post.tags?.includes(query);
        });
      }
      // update posts
      setAllPosts(posts);
    }
  }, [query, data]);

  return (
    <>
      <SEOHead title={"Blog - Tonmoy Deb"} path="/blog" />

      {/* header area */}
      <Header
        title={"Blog"}
        text={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium tempore architecto qui dolorem laboriosam quo magnam necessitatibus, cumque eius libero."
        }
      >
        {!error.isError && (
          <HeaderSearch className="blog_search mt-5" basePath="/blog" />
        )}
      </Header>

      <FetchErrorHandler error={error} className="error_msg-1">
        {/* featured area */}
        {!query
          ? featuredBlog &&
            featuredBlog.length && (
              <div className="blog_featured">
                <div className="box_header mb-10">
                  <h2 className="box_header_title">Featured Articles</h2>
                </div>

                <div className="blog_featured_content">
                  {featuredBlog.map((item) => (
                    <FeaturedCard
                      title={item.title}
                      link={`/blog/${item.slug}`}
                      key={item.id}
                    />
                  ))}
                </div>
              </div>
            )
          : ""}

        {/* data feed area */}
        {allPosts && allPosts.length ? (
          <div className="blog_feed">
            {!query && (
              <div className="box_header mb-10">
                <h3 className="box_header_title">All Articles</h3>
              </div>
            )}

            <div className="blog_feed_content">
              {data.map((item) => (
                <BlogCard
                  key={item.id}
                  title={item.title}
                  text={item.description}
                  tags={item.tags}
                  link={`/blog/${item.slug}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="error_msg error_msg-2">no post found</div>
        )}
      </FetchErrorHandler>
    </>
  );
};

export default Blog;
