import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Operator from './pages/Operator/Operator';
import Verifier from './pages/Verifier/Verifier';
import Approver from './pages/Approver/Approver';
import PageNotFound from './components/PageNotFound';
import ApplicationsDetails from './components/ApplicationsDetails';
import { jwtDecode } from "jwt-decode";

const App = () => {
  const token = localStorage.getItem("token");

  let role = null;
  let isAuthenticated = false;

  if (token && typeof token === 'string') {
    try {
      const decoded = jwtDecode(token);
      console.log("Decoded token:", decoded);
      role = decoded.role;
      isAuthenticated = true;
    } catch (err) {
      console.error("Invalid token:", err.message);
    }
  }
   console.log("Role Is ",role)
  let Component;
  if (isAuthenticated && role) {
    switch (role) {
      case 'operator':
        Component = <Operator />;
        break;
      case 'verifier':
        Component = <Verifier />;
        break;
      case 'approver':
        Component = <Approver />;
        break;
      default:
        Component = <PageNotFound />;
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!isAuthenticated ? <Login /> : <Navigate to={`/${role}`} />} />
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to={`/${role}`} />} />
        <Route path={`/${role}/*`} element={Component} />
        <Route path={`/${role}/applications/:id`} element={<ApplicationsDetails/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
