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

  .avatar-javiortega {
    background-image: url('../../images/javiortega.jpeg');
  }

  .avatar-johndoe {
    background-image: url('../../images/johndoe.jpeg');
  }

  .avatar-sarahedo {
    background-image: url('../../../images/sarahedo.jpeg');
  }

  .avatar-tylermcginnis {
    background-image: url('../../images/tylermcginnis.jpeg');
  }
`;


export default GlobalStyles;
