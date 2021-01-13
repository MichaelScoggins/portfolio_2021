import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/posts">Blog Posts</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About Me!</NavLink>
        </nav>
      </div>
    </header>
  );
}
