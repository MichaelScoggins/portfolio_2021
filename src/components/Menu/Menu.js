// Menu.js
import React from "react";
import { NavLink } from "react-router-dom";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <NavLink onClick={() => setOpen(false)} to="/" exact>
        <span role="img" aria-label="home">
          🏡
        </span>
        Home
      </NavLink>
      <NavLink onClick={() => setOpen(false)} to="/post">
        <span role="img" aria-label="blog">
          📓
        </span>
        Blog Posts
      </NavLink>
      <NavLink onClick={() => setOpen(false)} to="/project">
        <span role="img" aria-label="projects">
          📐
        </span>
        Projects
      </NavLink>
      <NavLink onClick={() => setOpen(false)} to="/about">
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
