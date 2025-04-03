import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; // Only use BrowserRouter
import Login from './pages/Login';
import Operator from './pages/Operator';
import Verifier from './pages/Verifier';
import Approver from './pages/Approver';
import Accept from './components/Accept';
import Reject from './components/Reject';
import Applications from './components/Applications';
import Profile from './components/Profile';
const App = () => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <BrowserRouter> {/* Use only BrowserRouter */}
      <Routes>
        {/* If not authenticated, redirect to Login */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/operator" /> : <Login />} />
        
        {/* Authenticated Routes */}
        <Route path="/operator" element={isAuthenticated ? <Operator /> : <Navigate to="/" />} />
        <Route path="/verifier" element={isAuthenticated ? <Verifier /> : <Navigate to="/" />} />
        <Route path="/approver" element={isAuthenticated ? <Approver /> : <Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
