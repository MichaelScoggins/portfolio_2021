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
    #text-container {
      opacity: 1 !important
    }
  }

  @media (max-width: 737px) {
    #text-container {
      opacity: 1 !important
    }
  }

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

#article-container {
  /* position: relative; */
  /* height: 100;
  width: 100%; */
}

#article-container:hover #project-img {
  opacity: .8;
  filter: blur(2px) brightness(.5);
}

#text-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70%;
  width: 70%;
  opacity: 0;
  transition: 0.5s ease;
  margin: auto;
  background: rgba(20,50,80,.4);
  padding: 10px;
  border-radius: 10px
}
  `;
