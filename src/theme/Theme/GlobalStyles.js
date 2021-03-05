import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';


const GlobalStyles = createGlobalStyle`
  ${normalize};

  html {
    font-size: 16px;
    width: 100%;
    overflow-y: scroll;
  }

  body {
    background: #eee;
    color: #999;
  }

  a {
    height: inherit;
    box-sizing: border-border-box;
  }
`;


export default GlobalStyles;
