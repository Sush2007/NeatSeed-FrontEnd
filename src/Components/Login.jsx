import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getApiUrl } from '../config/api.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    
    if (!email || !password) {
      setMessage('Please enter both email and password');
      return;
    }

    try {
      const response = await fetch(getApiUrl('admin_login'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage(`Welcome back, ${data.user.full_name}!`);
        // Store user data in localStorage for session management
        localStorage.setItem('adminUser', JSON.stringify(data.user));
        // TODO: navigate to dashboard
        setTimeout(() => {
          // Redirect to dashboard or admin panel
          navigate('/dashboard');
        }, 1500);
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (err) {
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center p-4 relative">
      {/* Decorative leaves (background elements) */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-20">
        <svg viewBox="0 0 200 400" className="w-full h-full">
          <path d="M50,400 Q70,350 90,300 Q110,250 130,200" fill="none" stroke="#86efac" strokeWidth="2"/>
          <ellipse cx="80" cy="250" rx="30" ry="50" fill="#86efac" opacity="0.5"/>
          <ellipse cx="110" cy="300" rx="40" ry="60" fill="#86efac" opacity="0.5"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 h-2/3 opacity-10">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <path d="M150,300 Q130,250 110,200 Q90,150 70,100" fill="none" stroke="#86efac" strokeWidth="3"/>
          <ellipse cx="120" cy="150" rx="50" ry="70" fill="#86efac" opacity="0.6"/>
          <ellipse cx="90" cy="200" rx="60" ry="80" fill="#86efac" opacity="0.6"/>
        </svg>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md z-10">
        {/* Logo/Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">NeatSeed Admin</h1>
          <p className="text-gray-500 text-sm md:text-base">Sign in to your admin dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className="mt-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-1 relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <span>Hide</span> : <span>Show</span>}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-green-600 hover:text-green-700">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

          {message && (
            <p className="text-center text-sm text-gray-700 mt-4">{message}</p>
          )}

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-green-600 hover:text-green-700 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
