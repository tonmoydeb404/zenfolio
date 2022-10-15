import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FetchErrorHandler from "../../components/FetchErrorHandler";
import Header from "../../components/Header";
import SEOHead from "../../components/SEOHead";
import SnippetCard, { SnippetCardSkeleton } from "../../components/SnippetCard";
import { getSnippetData } from "../../services";

export const getStaticProps = async () => {
  const snippets = await getSnippetData();

  return {
    props: {
      data: snippets.data || [],
      error: snippets.error,
    },
  };
};

const Snippets = ({ data, error }) => {
  // all snippets
  const [allData, setAllData] = useState([]);

  // pagination states
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  const hasMore = allData.length != currentData.length;

  // update and filter all snippets from data
  useEffect(() => {
    if (data && data?.length) {
      // clone snippets
      let snippets = [...data];

      // update snippets
      setAllData([...snippets]);
    }
  }, [data]);

  // update current snippets for pagination
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
      <SEOHead title={"Snippets - Tonmoy Deb"} path="/Snippets" />

      {/* header area */}
      <Header
        title={"Code Snippets"}
        text={
          "These are a collection of code snippets I've used in the past and saved. Some are Serverless Functions, which include set up instructions. Others are anything from random CSS snippets to Node.js scripts."
        }
      />

      <FetchErrorHandler error={error} className="error_msg-1">
        {allData && allData.length ? (
          <InfiniteScroll
            dataLength={currentData.length}
            next={handleLoadMore}
            hasMore={hasMore}
            loader={<SnippetCardSkeleton />}
            className="snippets_content"
            scrollThreshold={0.9}
            endMessage={
              <p className="error_msg error_msg-3 mt-5">thats all for today</p>
            }
          >
            {currentData.map((snippet) => (
              <SnippetCard
                key={snippet.id}
                title={snippet.title}
                subtitle={snippet.description}
                icon={snippet.icon}
                link={`/snippets/${snippet.slug}`}
              />
            ))}
          </InfiniteScroll>
        ) : (
          <SnippetCardSkeleton />
        )}
      </FetchErrorHandler>
    </>
  );
};

export default Snippets;
