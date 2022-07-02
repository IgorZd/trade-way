import "./global.css";
import type { AppProps } from "next/app";
import { StyleContextProvider } from "../src/styles/style.context";
import { Provider } from "react-redux";
import { store } from "../src/app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleContextProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </StyleContextProvider>
  );
}

export default MyApp;
