import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
html, body {
  padding: 0;
  margin: 0;
}

body {
  background: repeat url('/background.svg');
  background-color: ${props => props.theme.colors.turquesa};
  background-size: 40vh;
  display: flex;
  min-width: 370px;
  justify-content: center;
  align-items: center;
  padding-top: calc(8vh + 2.05em);
  padding-bottom: 3.78vh;
}


a {
  color: inherit;
}

* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

`
