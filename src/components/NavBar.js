import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import resume from "./RESUME_MICHAEL_SCOGGINS_FULLSTACK.pdf";

export default function NavBar() {
  return (
    <header id="nav-header" className="bg-gray-600 fixed w-full z-20">
      <div
        id="nav-container"
        className="container mx-auto flex justify-between"
      >
        <nav id="nav" className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-yellow-400"
            className="hidden md:inline-flex items-center py-5 px-3 mr-4 text-red-100 hover:text-yellow-400 text-2xl lg:text-4xl font-bold cursive tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-red-100 bg-blue-400 disable"
            className="hidden md:inline-flex items-center py-3 px-3 my-5 rounded text-white hover:text-yellow-400"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-100 bg-blue-400 disable"
            className="hidden md:inline-flex items-center py-3 px-3 my-5 rounded text-white hover:text-yellow-400"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-blue-400 disable"
            className="hidden md:inline-flex items-center py-3 px-3 my-5 rounded text-white hover:text-yellow-400"
          >
            About Me!
          </NavLink>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            activeClassName="text-red-100 bg-blue-400 disable"
            className="hidden md:inline-flex items-center py-3 px-3 my-5 rounded text-white hover:text-yellow-400"
          >
            Résumé
          </a>
        </nav>
        <div id="social-icons" className="inline-flex py-3 px-3 my-5">
          <SocialIcon
            url="mailto:mtx28@hotmail.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/michaelscoggins"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/michael-a-scoggins"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/ScogginsDev"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://medium.com/@scoggins-dev"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
