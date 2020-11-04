import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #D32C4D;
    --secondary: #2C94A2;
    --tertiary: #E7B547;

    --primary-alt: #A63148;
    --secondary-alt: #2C6E6B;
    --tertiary-alt: #CCAE6D;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    margin: 0;  
    background-color: #ebe8e2;
    background-image: url("https://www.transparenttextures.com/patterns/grid-me.png");
    background-repeat: repeat;
    opacity: 100%;
    }
  }
`

export default GlobalStyle