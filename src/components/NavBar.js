import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-yellow-400"
            className="hidden lg:inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-yellow-400 text-4xl font-bold cursive tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-red-100 bg-blue-400 disable"
            className="hidden lg:inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-400"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-100 bg-blue-400 disable"
            className="hidden lg:inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-400"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-blue-400 disable"
            className="hidden lg:inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-400"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
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
