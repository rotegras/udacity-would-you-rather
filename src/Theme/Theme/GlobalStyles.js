import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';


const GlobalStyles = createGlobalStyle`
  ${normalize};

  html {
    font-size: 16px;
    width: 100%;
    overflow-y: scroll;
  }
`;


export default GlobalStyles;
