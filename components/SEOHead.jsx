import Head from "next/head";
import React from "react";
import DB from "../constants/siteDetails.json";

const SEOHead = ({
  title = null,
  description = null,
  image = null,
  keywords = null,
  index = true,
  follow = true,
  domain = null,
  author = null,
  path = "",
  children,
}) => {
  return (
    <Head>
      {/* <!-- HTML Meta Tags --> */}
      <title>{title ?? DB.title}</title>
      <meta name="description" content={description || DB.description} />
      <meta name="keywords" content={(keywords || DB.keywords).join(", ")} />
      <meta
        name="robots"
        content={`${index ? "index" : "noindex"}, ${
          follow ? "follow" : "nofollow"
        }`}
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content={author || DB.author} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta
        property="og:url"
        content={`https://${domain || DB.domain}${path}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || DB.title} />
      <meta property="og:description" content={description || DB.description} />
      <meta property="og:image" content={image || DB.thumbnail} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={domain || DB.domain} />
      <meta
        property="twitter:url"
        content={`https://${domain || DB.domain}${path}`}
      />
      <meta name="twitter:title" content={title || DB.title} />
      <meta
        name="twitter:description"
        content={description || DB.description}
      />
      <meta name="twitter:image" content={image || DB.thumbnail} />

      {children}
    </Head>
  );
};

export default SEOHead;
