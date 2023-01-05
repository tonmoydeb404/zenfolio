import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiSad } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroll-component";

import BlogCard, { BlogCardSkeleton } from "../../components/BlogCard";
import FeaturedCard from "../../components/FeaturedCard";
import FetchErrorHandler from "../../components/FetchErrorHandler";
import Header from "../../components/Header";
import HeaderSearch from "../../components/HeaderSearch";
import Layout from "../../components/Layout";
import SEOHead from "../../components/SEOHead";
import { getArticleList, getPage } from "../../services/cms";

export const getStaticProps = async () => {
  const dataResponse = await getArticleList();
  const pageResponse = await getPage({ slug: "blog" });

  return {
    props: {
      data: dataResponse.articles || [],
      page: pageResponse.page || {},
      error: dataResponse.error || pageResponse.error ? true : false,
    },
  };
};

const Blog = ({ data, error, page }) => {
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
    if (data) {
      const fdata = data.filter((b) => b.featured);

      setFeaturedBlog(fdata.slice(0, 3));
    }
  }, [data]);

  // update and filter all post from data
  useEffect(() => {
    if (data) {
      // clone posts
      let posts = [...data];

      if (query && typeof query == "string" && query.length) {
        // filter in posts
        posts = posts.filter((post) => {
          const postTitle = post.title.toLowerCase();
          const postTags = post.tags.join(" ").toLowerCase();
          const searchQ = query.toLowerCase();

          return postTitle.includes(searchQ) || postTags.includes(searchQ);
        });
      }
      // update posts
      setAllData([...posts]);
    }
  }, [query, data]);

  // update current posts for pagination
  useEffect(() => {
    if (allData) {
      setCurrentData([...allData.slice(0, dataPerPage * currentPage)]);
    }
  }, [allData, dataPerPage, currentPage]);

  // handle load more fuction for pagination
  const handleLoadMore = () => {
    setCurrentPage((prevValue) => prevValue + 1);
  };

  return (
    <Layout>
      <SEOHead
        title={page.seo.title}
        follow={page.seo.followPage}
        index={page.seo.indexPage}
        keywords={page.seo.keywords}
        url={page.seo.url}
        description={page.seo.description}
        image={page.seo.thumbnail}
      />

      {/* header area */}
      <Header title={page.title} text={page.description}>
        {!error ? (
          <HeaderSearch className="blog_search mt-5" basePath="/blog" />
        ) : null}
      </Header>

      <FetchErrorHandler error={error} className="error_msg-1">
        {data && data.length ? (
          <>
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

            {currentData ? (
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
                      allData.length == currentData.length ? (
                        <p className="error_msg error_msg-3 mt-5">
                          {allData.length
                            ? "no more articles"
                            : "no articles are found"}
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
          </>
        ) : (
          <div className={`error_msg error_msg-2`}>
            <span className="text-xl">
              <BiSad />
            </span>
            no articles are found
          </div>
        )}
      </FetchErrorHandler>
    </Layout>
  );
};

export default Blog;
