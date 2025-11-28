import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getApiUrl } from '../config/api.js'; 


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);
    
    if (!email || !password) {
      setMessage('Please enter both email and password');
      setIsLoading(false);
      return;
    }

    try {
      const apiUrl = getApiUrl('login');
      console.log('Attempting login to:', apiUrl);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log('Fetch response object:', response);

      if (!response) {
        throw new Error("Network Error: The request failed to return a response.");
      }
      if (!response.ok) {
        let errorData = {};
        try { errorData = await response.json(); } catch (e) {}
        setMessage(errorData.message || `Login failed (Status: ${response.status})`);
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      
      if (data.ok) {
        setMessage('Welcome back! Redirecting...');
        
        // Store User & Token
        if (data.user) {
          localStorage.setItem('adminUser', JSON.stringify(data.user));
        }
        const tokenToStore = data.token || 'verified_session_token'; 
        localStorage.setItem('admin_token', tokenToStore);
        
        // Redirect
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        setMessage(data.message || 'Login failed');
        setIsLoading(false);
      }

    } catch (err) {
      console.error('Login Critical Error:', err);
      setIsLoading(false);
      setMessage(`System Error: ${err.message}`);
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
            disabled={isLoading}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-lg transition duration-200 flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>

          {message && (
            <p className={`text-center text-sm mt-4 ${message.includes('Welcome') ? 'text-green-600 font-medium' : message.includes('error') || message.includes('failed') ? 'text-red-600 font-medium' : 'text-gray-700'}`}>
              {message}
            </p>
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
