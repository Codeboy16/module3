import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Navbar from '../../components/Navbar';
import Profile from '../../components/Profile';
import { Outlet } from 'react-router-dom';

const Operator = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.role !== 'operator') {
        // If role is not operator, redirect to the correct dashboard or login
        navigate(`/${decoded.role || ''}`);
      }
    } catch (err) {
      console.error("Token error:", err.message);
      navigate("/login"); // If token is invalid, redirect to login
    }

    document.title = "Gov of Sikkim - Operator";
  }, [navigate]);

  return (
    <div>
      <Navbar title="Operator" />
      <Outlet />
    </div>
  );
};

export default Operator;
