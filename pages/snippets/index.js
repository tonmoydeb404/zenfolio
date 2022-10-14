import React from "react";
import FetchErrorHandler from "../../components/FetchErrorHandler";
import Header from "../../components/Header";
import SEOHead from "../../components/SEOHead";
import SnippetCard from "../../components/SnippetCard";
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
        {/* snippet content area */}
        <div className="snippets_content">
          {data && data.length
            ? data.map((snippet) => (
                <SnippetCard
                  key={snippet.id}
                  title={snippet.title}
                  subtitle={snippet.description}
                  icon={snippet.icon}
                  link={`/snippets/${snippet.slug}`}
                />
              ))
            : "no snippets found"}
        </div>
      </FetchErrorHandler>
    </>
  );
};

export default Snippets;
