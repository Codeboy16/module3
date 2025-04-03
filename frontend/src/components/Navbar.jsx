import React from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Applications from "./Applications";
import Accept from "./Accept"
import Reject from "./Reject";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      {/* Left Side: Content */}
      <div className="w-64 bg-blue-900 text-white p-5 flex flex-col items-end shadow-lg">
        <NavLink to="/profile" className="py-2 hover:text-gray-300">
          Profile
        </NavLink>
        <NavLink to="/applications" className="py-2 hover:text-gray-300">
          Applications
        </NavLink>
        <NavLink to="/accept" className="py-2 hover:text-gray-300">
          Accept
        </NavLink>
        <NavLink to="/reject" className="py-2 hover:text-gray-300">
          Reject
        </NavLink>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Right Side: Navbar Menu */}

      <div className="flex-1 p-6 bg-gray-100">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/accept" element={<Accept />} />
          <Route path="/reject" element={<Reject />} />
        </Routes>
      </div>
    </div>
  );
};

export default Navbar;
