import { ThemeProvider } from "styled-components";

import Header from "../components/Header";
import { defaultTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </ToastProvider>
  );
}

export default MyApp;
