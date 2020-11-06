import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #D32C4D;
    --secondary: #2C94A2;
    --tertiary: #E7B547;

    --primary-alt: #A63148;
    --secondary-alt: #2C6E6B;
    --tertiary-alt: #CCAE6D;

    --shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 4px 10px 0 rgba(0, 0, 0, 0.1);

    --margin-main: 1rem 2rem;
    --padding-main: 0.75rem 0.75rem;
    --radius-main: 0.2rem;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    margin: 0;
    font-family: Fira Sans;
    }
  }
`

export default GlobalStyle

// background-color: #ebe8e2;
// background-image: url("https://www.transparenttextures.com/patterns/grid-me.png");
// background-repeat: repeat;
// opacity: 100 %;