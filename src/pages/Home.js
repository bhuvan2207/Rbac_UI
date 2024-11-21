// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to RBAC Management</h1>
      <p className="text-lg mb-4">
        Manage users, roles, and permissions efficiently in this system.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/users" className="block bg-blue-500 text-white p-4 rounded-lg text-center hover:bg-blue-600">
          Manage Users
        </Link>
        <Link to="/roles" className="block bg-green-500 text-white p-4 rounded-lg text-center hover:bg-green-600">
          Manage Roles
        </Link>
        <Link to="/access-control" className="block bg-purple-500 text-white p-4 rounded-lg text-center hover:bg-purple-600">
          Access Control
        </Link>
        <Link to="/" className="block bg-red-500 text-white p-4 rounded-lg text-center hover:bg-red-600">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Home;
