import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import BlogCard, { BlogCardSkeleton } from "../../components/BlogCard";
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
  const [allData, setAllData] = useState([]);

  // pagination states
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  const hasMore = allData.length != currentData.length;

  // update data for featured post
  useEffect(() => {
    if (data && data.length) {
      const fdata = data.filter((b) => b.featured);

      setFeaturedBlog(fdata.slice(0, 3));
    }
  }, [data]);

  // update and filter all post from data
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
      setAllData([...posts]);
    }
  }, [query, data]);

  // update current posts for pagination
  useEffect(() => {
    if (allData && allData.length) {
      setCurrentData([...allData.slice(0, dataPerPage * currentPage)]);
    }
  }, [allData, dataPerPage, currentPage]);

  // handle load more fuction for pagination
  const handleLoadMore = () => {
    setCurrentPage((prevValue) => prevValue + 1);
  };

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
        {!query && featuredBlog && featuredBlog.length ? (
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
        ) : (
          ""
        )}

        {/* data feed area */}
        {currentData && currentData.length ? (
          <div className="blog_feed">
            {!query ? (
              <div className="box_header mb-10">
                <h3 className="box_header_title">All Articles</h3>
              </div>
            ) : (
              ""
            )}

            <div>
              <InfiniteScroll
                dataLength={currentData.length}
                next={handleLoadMore}
                hasMore={hasMore}
                loader={<BlogCardSkeleton />}
                className="blog_feed_content"
                scrollThreshold={0.9}
                endMessage={
                  allData.length > dataPerPage ? (
                    <p className="error_msg error_msg-3 mt-5">
                      thats all for today
                    </p>
                  ) : (
                    ""
                  )
                }
              >
                {currentData.map((item) => (
                  <BlogCard
                    key={item.id}
                    title={item.title}
                    text={item.description}
                    tags={item.tags}
                    link={`/blog/${item.slug}`}
                  />
                ))}
              </InfiniteScroll>
            </div>
          </div>
        ) : (
          <BlogCardSkeleton />
        )}
      </FetchErrorHandler>
    </>
  );
};

export default Blog;
