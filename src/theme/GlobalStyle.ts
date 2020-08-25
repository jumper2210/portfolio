import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *::before, *::after {
        box-sizing: border-box;
        border: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        outline: 0 !important;
    }
     button, button:focus {
         outline: 0 !important;
     }

      html {
        font-size: 62.5%;
  }
  b {
    font-weight: ${({ theme }) => theme.medium}
  }

  body {
    font-family: ${({ theme }) => theme.fonts.mainFont};
    font-size: 1.6rem;
    overflow-x: hidden;
  }`
export default GlobalStyle
