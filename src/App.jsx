import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Trucks from './Components/Trucks';
import GarbageRoutes from './Components/GarbageRoutes';
import Notifications from './Components/Notifications';
import Analytics from './Components/Analytics';
import OtpVerification from './Components/OtpVerification';
import Forgetpass from './Components/Forgetpass';

// 1. Create a ProtectedRoute component
// This component checks the token every time the route is accessed.
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('admin_token');
  
  // If no token, redirect to login immediately
  if (!token || token === "undefined") {
    return <Navigate to="/login" replace />;
  }
  
  // If token exists, render the requested page (children)
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-otp" element={<OtpVerification />} />
        <Route path="/forgetpass" element={<Forgetpass />} />

        {/* 2. Wrap your protected routes with the component */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/trucks" 
          element={
            <ProtectedRoute>
              <Trucks />
            </ProtectedRoute>
          }
        /> 
        <Route 
          path='/routes' 
          element={
            <ProtectedRoute>
              <GarbageRoutes />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/notification" 
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/analytics" 
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        {/* 404 Route */}
        <Route path="*" element={<h2 className="p-8">Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;