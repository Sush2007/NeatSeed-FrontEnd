import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // <--- 1. Added Navigate
import LandingPage from './Components/LandingPage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Trucks from './Components/Trucks';
import GarbageRoutes from './Components/GarbageRoutes';
import Notifications from './Components/Notifications';
import Analytics from './Components/Analytics';
import OtpVerification from './Components/OtpVerification';

function App() {
  const isAuthenticated = () => {
    const token = localStorage.getItem('admin_token');
    console.log("Checking Auth Token:", token);
    return token && token !== "" && token !== "undefined";
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-otp" element={<OtpVerification />} />

        <Route 
          path="/dashboard" 
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/trucks" 
          element={isAuthenticated() ? <Trucks /> : <Navigate to="/login" />}
        /> 
        <Route 
          path='/routes' 
          element={isAuthenticated() ? <GarbageRoutes /> : <Navigate to="/login" />}
        />
        <Route 
          path="/notification" 
          element={isAuthenticated() ? <Notifications /> : <Navigate to="/login" />}
        />
        <Route 
          path="/analytics" 
          element={isAuthenticated() ? <Analytics /> : <Navigate to="/login" />}
        />

        {/* 404 Route */}
        <Route path="*" element={<h2 className="p-8">Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;