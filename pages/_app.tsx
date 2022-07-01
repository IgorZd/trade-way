import "./global.css";
import type { AppProps } from "next/app";
import { StyleContextProvider } from "../src/styles/style.context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleContextProvider>
      <Component {...pageProps} />
    </StyleContextProvider>
  );
}

export default MyApp;
