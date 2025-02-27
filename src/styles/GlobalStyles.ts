import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #fcf8f5;
    font-family: "Red Hat Text", serif;
  }

  button {
    font-family: "Red Hat Text", serif;
  }
`;
