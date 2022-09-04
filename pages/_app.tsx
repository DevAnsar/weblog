import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import useScrollRestoration from "../hooks/useScrollRestoration";
import { ToastContainer } from "react-toastify";

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
