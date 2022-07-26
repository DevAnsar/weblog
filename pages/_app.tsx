import '../styles/globals.css'
import type { AppProps } from 'next/app'
import useScrollRestoration from "../hooks/useScrollRestoration";

function MyApp({ Component, pageProps,router }: AppProps) {
  useScrollRestoration(router);
  return <Component {...pageProps} />
}

export default MyApp
