import React,{useState} from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; // Only use BrowserRouter
import Login from './pages/Login';
import Operator from './pages/Operator/Operator';
import Verifier from './pages/Verifier/Verifier';
import Approver from './pages/Approver/Approver';
const App = () => {
  const isAuthenticated = localStorage.getItem("token");
  const role = localStorage.getItem("role");
    // setIsAuthenticated(localStorage.getItem("token"));
    // setRole(localStorage.getItem("role")); 
    let Component;
    if (isAuthenticated && role) {
      
      // Determine the component to render based on the role
      if (role === 'operator') {
        Component = <Operator />;
      } else if (role === 'verifier') {
        Component = <Verifier />;
      } else if (role === 'approver') {
        Component = <Approver />;
      } 
    }
  return (
    <BrowserRouter> {/* Use only BrowserRouter */}
      <Routes>
        {/* If not authenticated, redirect to Login */}
        <Route path="/" element={!isAuthenticated && <Login />} />
        <Route path="/login" element={!isAuthenticated && <Login />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        {/* Authenticated Routes */}
        <Route path={`/${role}/*`} element={Component} />
        
        {/* <Route path="/operator" element={isAuthenticated && role ? <Operator /> : <Navigate to="/" />} />
        <Route path="/verifier" element={isAuthenticated ? <Verifier /> : <Navigate to="/" />} />
        <Route path="/approver" element={isAuthenticated ? <Approver /> : <Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
