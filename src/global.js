// global.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  background-color: #fde68a;
}

.cursive {
  font-family: "Noto Sans", cursive;
  font-weight: 700;
}

.prose img {
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
}

.prose {
  /* font-family: "Noto Sans", cursive; */
  font-weight: 450;
}
background: ${({ theme }) => theme.primaryDark};
color: ${({ theme }) => theme.primaryLight};
  `;
