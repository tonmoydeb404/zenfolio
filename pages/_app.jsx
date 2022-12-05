import "boxicons/css/boxicons.min.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { Router } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import FooterSection from "../components/FooterSection";
import NavbarSection from "../components/NavbarSection";
import "../styles/nprogress.css";
import "../styles/style.css";
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", (url) => {
      NProgress.done(false);
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="ZENFOLIO_THEME">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#16A34A" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#16A34A" />
      </Head>
      <Toaster position="bottom-right" />
      <div className="container">
        <NavbarSection />

        <div className="main">
          <Component {...pageProps} />
          <FooterSection />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
