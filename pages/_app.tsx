import Head from "next/head";
import "../styles/globals.css";
import "../styles/index.css";
import Sidebar from "../components/sidebar";
import { AppProps } from "next/app";
import { useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Apple Shop</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <header>
        <button
          className="close-sidebar"
          aria-label="Toggle Sidebar"
          onClick={() => {
            setSidebarOpen(!isSidebarOpen);
          }}
        >
          {" "}
          Open
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Sidebar
          toggleOpen={(open) => {
            setSidebarOpen(open);
          }}
          isOpen={isSidebarOpen}
        />
      </header>
      <Component {...pageProps} />
    </>
  );
}
