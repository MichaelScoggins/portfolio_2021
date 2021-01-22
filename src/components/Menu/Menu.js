// Menu.js
import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="home">
          🏡
        </span>
        Home
      </a>
      <a href="/">
        <span role="img" aria-label="blog">
          📓
        </span>
        Blog Posts
      </a>
      <a href="/">
        <span role="img" aria-label="projects">
          📐
        </span>
        Projects
      </a>
      <a href="/">
        <span role="img" aria-label="About Me">
          👨‍💻
        </span>
        About Me!
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
