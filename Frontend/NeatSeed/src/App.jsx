import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;