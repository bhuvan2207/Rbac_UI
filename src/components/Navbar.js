// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link to="/users" className="hover:text-gray-300">Users</Link></li>
        <li><Link to="/roles" className="hover:text-gray-300">Roles</Link></li>
        <li><Link to="/access-control" className="hover:text-gray-300">Access Control</Link></li>
        <li className="ml-auto"><Link to="/" className="hover:text-gray-300">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
