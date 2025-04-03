import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import { Outlet } from 'react-router-dom';
const Operator = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token");
    if (!isAuthenticated) {
      navigate("/"); // Redirect to home page if not authenticated
    }
    document.title = "Gov of Sikkim - Operator"; // Set the document title
  }, [navigate]); // Only re-run the effect if `navigate` changes (although it won't)

  return (
    <div>
      <Navbar title="Operator" />
      <Outlet/>
    </div>
  );
};

export default Operator;
