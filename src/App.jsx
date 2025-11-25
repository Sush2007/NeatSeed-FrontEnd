import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Trucks from './Components/Trucks';
import GarbageRoutes from './Components/GarbageRoutes';
import Notifications from './Components/Notifications';
import Analytics from './Components/Analytics';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trucks" element={<Trucks/>}/> 
        <Route path='/routes' element={<GarbageRoutes/>}> </Route>
        <Route path="/notification" element={<Notifications/>}> </Route>
        <Route path="/analytics" element={<Analytics/>}> </Route>
        <Route path="*" element={<h2 className="p-8">Page Not Found</h2>} />
        <Route path="/verify-otp" element={<OtpVerification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;