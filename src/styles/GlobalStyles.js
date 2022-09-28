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
  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background: #525252;
  }

  body::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 20px;
    border: 2px solid #525252;
  }

`