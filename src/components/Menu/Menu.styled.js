// Menu.styled.js
import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  @media (orientation: portrait) {
    justify-content: center;
  }
  background: ${({ theme }) => theme.primaryDark};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 29;
  width: 100%;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    @media (max-width: 813px) {
      font-size: 1.5rem;
    }
    @media (orientation: landscape) {
      height: 100vh;
      padding: 0;
      margin: auto;
    }
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => (theme.primaryDark ? "white" : "black")};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
