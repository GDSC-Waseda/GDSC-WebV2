import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Router from "next/router";

import { Footer } from "components/Footer";
import { NavigationBar } from "components/NavigationBar";
import Loading from "../components/Loading"; // Import the Loading component
import "styles/globals.scss";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {loading && <Loading />}{" "}
      {/* Display the loading component when loading */}
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default appWithTranslation(MyApp);
