import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  :root{
    --color-main: #06283D;
    --color-secondary: #1363DF;
    --color-tertiary: #47B5FF;
    
    --text-main: #000;
    --text-secondary: #666;
    --text-tertiary: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

`