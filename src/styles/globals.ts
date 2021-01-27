import { createGlobalStyle } from 'styled-components';
import background from '@assets/webp/background.webp';

import theme from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;


    /* width */
    ::-webkit-scrollbar {
      width: 3px;
      border-radius: 5px;
      height: 0;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.gray.medium};
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-image: url(${background});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  body, input, button, select {
    font-family: Roboto, sans-serif;
  }

  button { 
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 { 
    font-weight: 700;
  }

  p {
    margin: 0;
    font-weight: 400;
  }

  li {
    list-style: none;
  }

  #__next {
    overflow: auto;
}

`;
