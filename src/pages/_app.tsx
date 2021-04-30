import Header from "../components/Header"
import { GlobalStyle } from "../styles/GlobalStyle"
import { defaultTheme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
