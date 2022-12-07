import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect } from "react";
import DB from "../data/siteData.preval";
import { pageview } from "../lib/gtag";

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
  const siteUrlObj = new URL(`${DB.baseUrl}${router.asPath}`);
  const siteUrl = `${siteUrlObj.origin}${siteUrlObj.pathname}`;

  // google analytics for SPA
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>{title || DB.seo?.title}</title>
        <meta name="description" content={description || DB.seo?.description} />
        <meta
          name="keywords"
          content={(keywords || DB.seo?.keywords).join(", ")}
        />
        <meta
          name="robots"
          content={`${index || DB.seo?.indexPage ? "index" : "noindex"}, ${
            follow || DB.seo?.followPage ? "follow" : "nofollow"
          }`}
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {author ? <meta name="author" content={author} /> : ""}

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={url || siteUrl || DB.seo.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title || DB.seo?.title} />
        <meta
          property="og:description"
          content={description || DB.seo?.description}
        />
        <meta property="og:image" content={image || DB.seo?.thumbnail?.url} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content={url || siteUrl || DB.seo?.url}
        />
        <meta property="twitter:url" content={url || siteUrl || DB.seo?.url} />
        <meta name="twitter:title" content={title || DB.seo?.title} />
        <meta
          name="twitter:description"
          content={description || DB.seo?.description}
        />
        <meta name="twitter:image" content={image || DB.seo?.thumbnail?.url} />

        {/* colors */}
        <meta name="theme-color" content={DB.websiteColor?.hex} />
        <meta name="msapplication-TileColor" content={DB.websiteColor?.hex} />

        {/* canonical url */}
        <link rel="canonical" href={url || siteUrl} />

        {children}
      </Head>

      {/* <!-- Google tag (gtag.js) --> */}
      {DB.siteData?.GOOGLE_MEASUREMENT_ID ? (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${DB.siteData.GOOGLE_MEASUREMENT_ID}`}
          ></Script>
          <Script
            strategy="afterInteractive"
            id={DB.siteData.GOOGLE_MEASUREMENT_ID}
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || []; function gtag()
                  {dataLayer.push(arguments);}
                  gtag('js', new Date()); gtag('config', '${DB.siteData.GOOGLE_MEASUREMENT_ID}');
                `,
            }}
          ></Script>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SEOHead;
