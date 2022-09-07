import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/AutoHeightImage.css";
import "../styles/home.css";
import "../styles/fullpage.css";
import "../styles/wearable.css";

import Layout from "../components/layout";
import ContextProvider from "../contexts";
import store from "../store";
import { ApolloProvider } from "../GraphQL/ApolloProvider";

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
      <ReduxProvider store={store}>
        <ApolloProvider>
          <ContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ContextProvider>
        </ApolloProvider>
      </ReduxProvider>
    );
  }
}

export default MyApp;
