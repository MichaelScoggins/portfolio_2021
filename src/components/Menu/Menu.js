// Menu.js
import React from "react";
import { NavLink } from "react-router-dom";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavLink to="/" exact>
        <span role="img" aria-label="home">
          🏡
        </span>
        Home
      </NavLink>
      <NavLink to="/post">
        <span role="img" aria-label="blog">
          📓
        </span>
        Blog Posts
      </NavLink>
      <NavLink to="/project">
        <span role="img" aria-label="projects">
          📐
        </span>
        Projects
      </NavLink>
      <NavLink to="/about">
        <span role="img" aria-label="About Me">
          👨‍💻
        </span>
        About Me!
      </NavLink>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
