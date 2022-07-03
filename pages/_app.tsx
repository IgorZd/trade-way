import "./global.css";
import type { AppProps } from "next/app";
import { StyleContextProvider } from "../src/styles/style.context";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <StyleContextProvider>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </StyleContextProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
