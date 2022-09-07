import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import useScrollRestoration from "../hooks/useScrollRestoration";
import { ToastContainer } from "react-toastify";
import nProgress from "nprogress";
import { Router } from "next/router";
import "nprogress/nprogress.css"

nProgress.configure({
  showSpinner: false,
  parent: '#main'
});
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps, router }: AppProps) {
  useScrollRestoration(router);
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default MyApp;
