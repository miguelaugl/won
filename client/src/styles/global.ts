import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  html, body, #__next {
    height: 100%;
  }
  body,
  input,
  button,
  textarea {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    body,
    input,
    button,
    textarea {
      font-size: 1.4rem;
    }
  }
`;
