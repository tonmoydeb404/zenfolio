import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import DB from "../data/data.json";

const SEOHead = ({
  title = null,
  description = null,
  image = null,
  keywords = null,
  index = true,
  follow = true,
  url = null,
  author = null,
  children,
}) => {
  // next js router
  const router = useRouter();

  // url formating
  const siteUrlObj = new URL(`https://tonmoydeb.com${router.asPath}`);
  const siteUrl = `${siteUrlObj.origin}${siteUrlObj.pathname}`;

  return (
    <Head>
      {/* <!-- HTML Meta Tags --> */}
      <title>{title || DB.title || DB.seo?.title}</title>
      <meta
        name="description"
        content={description || DB.seo.description || DB.description}
      />
      <meta
        name="keywords"
        content={(keywords || DB.seo.keywords).join(", ")}
      />
      <meta
        name="robots"
        content={`${index || DB.seo.indexPage ? "index" : "noindex"}, ${
          follow || DB.seo.followPage ? "follow" : "nofollow"
        }`}
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      {author ? <meta name="author" content={author} /> : ""}

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={url || siteUrl || DB.seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || DB.seo?.title || DB.title} />
      <meta
        property="og:description"
        content={description || DB.seo.description || DB.description}
      />
      <meta property="og:image" content={image || DB.seo.thumbnail.url} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={url || siteUrl || DB.seo.url} />
      <meta property="twitter:url" content={url || siteUrl || DB.seo.url} />
      <meta name="twitter:title" content={title || DB.seo?.title || DB.title} />
      <meta
        name="twitter:description"
        content={description || DB.seo.description || DB.description}
      />
      <meta name="twitter:image" content={image || DB.seo.thumbnail.url} />

      {/* colors */}
      <meta name="theme-color" content={DB.websiteColor.hex} />
      <meta name="msapplication-TileColor" content={DB.websiteColor.hex} />

      {/* canonical url */}
      <link rel="canonical" href={url || siteUrl} />

      {children}
    </Head>
  );
};

export default SEOHead;
