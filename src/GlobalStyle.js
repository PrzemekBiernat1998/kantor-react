import {createGlobalStyle } from "styled-components";
import background from "./Image/background.png";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 150vh;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;