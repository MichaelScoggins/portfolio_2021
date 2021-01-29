// Menu.js
import React from "react";
import { NavLink } from "react-router-dom";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import resume from "../../RESUME_MICHAEL_SCOGGINS_FULLSTACK.pdf";

const Menu = ({ open, setOpen }) => {
  const clickAway = () => {
    setOpen(false);
  };

  return (
    <StyledMenu open={open}>
      <NavLink onClick={clickAway} to="/" exact>
        <span role="img" aria-label="home">
          🏡
        </span>
        Home
      </NavLink>
      <NavLink onClick={clickAway} to="/post">
        <span role="img" aria-label="blog">
          📓
        </span>
        Blog Posts
      </NavLink>
      <NavLink onClick={clickAway} to="/project">
        <span role="img" aria-label="projects">
          📐
        </span>
        Projects
      </NavLink>
      <NavLink onClick={clickAway} to="/about">
        <span role="img" aria-label="About Me">
          👨‍💻
        </span>
        About Me!
      </NavLink>
      <a href={resume} target="_blank" rel="noreferrer">
        📜Résumé
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
