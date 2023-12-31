import Head from "next/head";
import Script from "next/script";

import "tailwindcss/tailwind.css";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "../styles/globals.css";
import "../styles/variables.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <meta
          name="google-signin-client_id"
          content="609052745817-nf0g3195cvdgrpahvfa9s119r1hkopbj.apps.googleusercontent.com"
        ></meta>
      </Head>

      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>

      <ToastContainer
        position="top-center"
        autoClose={300}
        hideProgressBar
        toastClassName={() =>
          `relative flex p-2 m-2 min-h-10 rounded-md justify-between cursor-pointer my-1 rounded-xl shadow-md bg-gray-50 mt-20 text-black`
        }
      />

      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        nomodule=""
        src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.js"
      ></Script>
    </>
  );
}

export default MyApp;
