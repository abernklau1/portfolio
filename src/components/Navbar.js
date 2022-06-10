import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="nav-container">
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo"></div>
        </div>
        <div className="nav-list-container">
          <ul className="nav-list">
            <li className="nav-items">
              <NavLink href="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink href="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink href="/about" className="nav-link">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
