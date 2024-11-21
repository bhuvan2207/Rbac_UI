// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaShieldAlt, FaSignOutAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">RBAC Management Dashboard</h1>
        <p className="text-lg text-gray-600">Manage users, roles, and permissions efficiently in this system.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl px-4">
        <Link
          to="/users"
          className="flex items-center justify-center p-6 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <FaUsers className="text-2xl mr-4" />
          <span className="text-xl">Manage Users</span>
        </Link>

        <Link
          to="/roles"
          className="flex items-center justify-center p-6 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          <FaShieldAlt className="text-2xl mr-4" />
          <span className="text-xl">Manage Roles</span>
        </Link>

        <Link
          to="/access-control"
          className="flex items-center justify-center p-6 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
          <FaShieldAlt className="text-2xl mr-4" />
          <span className="text-xl">Access Control</span>
        </Link>

        <Link
          to="/"
          className="flex items-center justify-center p-6 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          <FaSignOutAlt className="text-2xl mr-4" />
          <span className="text-xl">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
