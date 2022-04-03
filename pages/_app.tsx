import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.scss";

import Layout from "@/common/Layout";

import type { AppProps } from "next/app";

import { BasketWrapper } from "context/basketContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasketWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BasketWrapper>
  );
}

export default MyApp;
