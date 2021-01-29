// global.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  background-color: #aaaaaa;
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
  font-weight: 500;
}

@media (orientation: portrait) {
    #about-section {
      display: block;
    }
    #home-main-logo {
      display: none;
    }
  }

  @media (orientation: portrait), (max-width: 737px) {
    #social-icons {
      margin-right: auto;
    }
  }
background: ${({ theme }) => theme.primaryDark};
color: ${({ theme }) => theme.primaryLight};
  `;
