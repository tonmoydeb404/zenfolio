import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiError } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroll-component";
import useArticles from "../../hooks/useArticles";
import BlogCard, { BlogCardSkeleton } from "../Cards/BlogCard";
import FeaturedCard from "../Cards/FeaturedCard";

const ArticlesFeed = () => {
  // router
  const router = useRouter();
  const query = router.query?.q;

  const { articlesData, articlesError, articlesLoading } = useArticles();
  // states
  const [featuredBlog, setFeaturedBlog] = useState([]);
  const [articleList, setArticleList] = useState([]);
  // pagination states
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;
  const hasMore = articleList.length != currentData.length;

  // handle load more fuction for pagination
  const handleLoadMore = () => {
    setCurrentPage((prevValue) => prevValue + 1);
  };

  // update featured post
  useEffect(() => {
    if (!articlesLoading && !articlesError && articlesData) {
      const fdata = articlesData.articles.filter((b) => b.featured);
      setFeaturedBlog(fdata.slice(0, 3));
    }
  }, [articlesData, articlesError, articlesLoading]);

  // update article list
  useEffect(() => {
    if (!articlesLoading && !articlesError && articlesData) {
      // clone posts
      let posts = [...articlesData.articles];

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
      setArticleList([...posts]);
    }
  }, [articlesData, articlesError, articlesLoading, query]);

  // update current posts for pagination
  useEffect(() => {
    if (articleList) {
      setCurrentData([...articleList.slice(0, dataPerPage * currentPage)]);
    }
  }, [articleList, dataPerPage, currentPage]);

  // error return
  if (!articlesData && !articlesLoading && articlesError) {
    return (
      <div className={`error_msg error_msg-1`}>
        <BiError />
        something wents to wrong
      </div>
    );
  }

  return (
    <div>
      {!query && !articlesLoading && featuredBlog && featuredBlog.length ? (
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
      ) : null}

      <div className="blog_feed">
        {!query && articleList && articleList.length ? (
          <div className="box_header mb-10">
            <h3 className="box_header_title">All Articles</h3>
          </div>
        ) : null}

        {!articlesLoading ? (
          <InfiniteScroll
            dataLength={currentData.length}
            next={handleLoadMore}
            hasMore={hasMore}
            loader={<BlogCardSkeleton />}
            className="blog_feed_content"
            scrollThreshold={1}
            endMessage={
              <p className="error_msg error_msg-3 mt-5">
                {articleList.length
                  ? "no more articles"
                  : "no articles are found"}
              </p>
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
        ) : (
          <BlogCardSkeleton />
        )}
      </div>
    </div>
  );
};

export default ArticlesFeed;
