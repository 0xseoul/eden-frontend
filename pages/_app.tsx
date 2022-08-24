import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/AutoHeightImage.css";
import "../styles/home.css";
import "../styles/fullpage.css";
import "../styles/wearable.css";

import Layout from "../components/layout";
import ContextProvider from "../contexts";

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
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    );
  }
}

export default MyApp;
