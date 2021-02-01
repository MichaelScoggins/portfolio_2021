// global.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  background-color: #4B5563;
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
    .project-text {
      display: none;
    }
    /* #text-container {
      opacity: 1 !important
    } */
  }

  /* @media (max-width: 737px) {
    #text-container {
      opacity: 1 !important
    }
  } */

  @media (orientation: portrait), (max-width: 737px) {
    #social-icons {
      margin-right: auto;
    }
  }
background: ${({ theme }) => theme.primaryDark};
color: ${({ theme }) => theme.primaryLight};

#project:hover #text-container {
  opacity: 1;
}

#text-container {
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 7px;
  padding: 1rem;
}
  `;
