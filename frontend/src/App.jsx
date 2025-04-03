import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from './pages/Login'
import Navbar from './components/Navbar';
const App = () => {
  const isAuthenticated = localStorage.getItem("token");
  return (
   <>
  <Router>
      <Routes>
        {!isAuthenticated ? (
          <Route path="*" element={<Navigate to="/login" />} />
        ) : (
          <>
            <Route path="/*" element={<Navbar />} />
          </>
        )}
      </Routes>
    </Router>
   </>
  )
}

export default App