import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  html, body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
} 
body {
  background: repeat url('/background.svg');
  background-color: ${props => props.theme.colors.turquesa};
  background-size: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`
