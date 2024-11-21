// src/components/Navbar.js
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">

        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <ul
        className={`lg:flex space-x-4 ${isMenuOpen ? "block" : "hidden"} lg:block`}
      >
        <li>
          <NavLink
            to="/users"
            className="hover:text-gray-300 transition-colors"
            activeClassName="text-blue-400"
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/roles"
            className="hover:text-gray-300 transition-colors"
            activeClassName="text-blue-400"
          >
            Roles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/access-control"
            className="hover:text-gray-300 transition-colors"
            activeClassName="text-blue-400"
          >
            Access Control
          </NavLink>
        </li>
        <li className="ml-auto">
          <NavLink
            to="/"
            className="hover:text-gray-300 transition-colors"
            activeClassName="text-blue-400"
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;