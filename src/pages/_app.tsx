import { ThemeProvider } from 'styled-components'

import Header from "../components/Header"
import { defaultTheme } from '../styles/theme'
import { GlobalStyle } from "../styles/GlobalStyle"

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
