// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Roles from "./components/Roles";
import Home from "./pages/Home";
import AccessControl from "./pages/AccessControl";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/users" element={<Users />} />
  <Route path="/roles" element={<Roles />} />
  <Route path="/access-control" element={<AccessControl />} />
</Routes>;
    </Router>
  );
}

export default App;
