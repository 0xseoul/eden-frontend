import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/AutoHeightImage.css";
import "../styles/home.css";

import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState<boolean>(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
