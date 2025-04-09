import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Applications from "./Applications";
import Accept from "./Accept";
import Reject from "./Reject";
import { Avatar } from "@mui/material"; // Material UI Avatar for a modern user profile
import { deepOrange, deepPurple } from '@mui/material/colors';
import Logo from "../../public/images/logo.png"; // Adjust the path as necessary
import ChangePassword from "./ChangePassword";
const Navbar = (props) => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  let roleColor = '#0d6efd';
  if(role=="operator"){
    roleColor = '#37b8b4'
  }else if(role=="approver"){
    roleColor = '#20c997'
  }

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/"); // Navigate to the login page (or homepage)
    window.location.reload();
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Side: Sidebar */}
      <div className="w-60 md:w-[22rem]  min-h-fit text-white p-6 flex flex-col items-start shadow-lg border-r border-gray-200"  style={{ backgroundColor: roleColor }}>
        {/* Logo and Title */}
        <div className="w-full flex flex-col items-center justify-center mb-4">
          <img src={Logo} alt="Logo" className="w-32 md:w-52 mb-4 mx-auto pb-2 pt-3" />
          <h5 className="text-center text-black">Government of Sikkim<br/>I.T Department</h5>
          <h3 className="text-2xl font-semibold text-center text-black mx-auto">--{props.title}--</h3>
        </div>

        {/* User Profile */}
        <div className="w-full flex items-center justify-center mb-6 space-x-4 pb-4 border-b-4 border-black">
          <Avatar sx={{ bgcolor: deepOrange[500] }}>RS</Avatar>
          <span className="text-lg font-medium text-black">Rohit Singh</span>
        </div>
        {/* Navigation Links */}
        <nav className="w-full flex flex-col space-y-4">
          <Link
            to={`/${role}/profile`}
            className="py-2 text-xl font-medium text-black hover:bg-indigo-700 hover:text-white w-full text-center rounded-md transition-all duration-300 noUnderline"
          >
            Profile
          </Link>
          <Link
            to={`/${role}/applications`}
            className="py-2 text-xl font-medium text-black hover:bg-indigo-700 hover:text-white w-full text-center rounded-md transition-all duration-300 noUnderline"
          >
            Applications
          </Link>
          <Link
            to={`/${role}/accept`}
            className="py-2 text-xl font-medium text-black hover:bg-indigo-700 hover:text-white w-full text-center rounded-md transition-all duration-300 noUnderline"
          >
            Total Accepted
          </Link>
          <Link
            to={`/${role}/reject`}
            className="py-2 text-xl font-medium text-black hover:bg-indigo-700 hover:text-white w-full text-center rounded-md transition-all duration-300 noUnderline"
          >
            Total Rejected
          </Link>
          <Link
            to={`/${role}/changepassword`}
            className="py-2 text-xl font-medium text-black hover:bg-indigo-700 hover:text-white w-full text-center rounded-md transition-all duration-300 noUnderline"
          >
            Change Password
          </Link>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-auto w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-center transition duration-300 Rounded"
        >
          Logout
        </button>
      </div>

      {/* Right Side: Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/accept" element={<Accept />} />
          <Route path="/reject" element={<Reject />} />
          <Route path="/changepassword" element={<ChangePassword/>} />
          <Route path="/*" element={<h1 className="text-center">404 Not Found Page</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Navbar;
