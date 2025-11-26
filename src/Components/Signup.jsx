import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { TbPassword } from "react-icons/tb";
import { TbLockPassword } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { getApiUrl } from '../config/api.js';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setMessage('Please fill in all fields');
      return;
    }

    if (formData.password.length < 6) {
      setMessage('Password must be at least 6 characters');
      return;
    }

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(getApiUrl('signup'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      let data = {};
      try {
        data = await response.json(); // Safely attempt to parse JSON
      } catch (e) {
        // Server didn't send JSON (e.g., a simple HTML error page)
        data.message = 'An unexpected server error occurred.';
      }

      if (response.ok) {
        setMessage('Account created successfully! Redirecting to verification...');
        // Store email in state and navigate
        setTimeout(() => {
          navigate('/verify-otp', {
            state: {
              email: formData.email, // Pass the email from your form state
              role: 'admin'          // Hardcode role for this app
            }
          });
        }, 1500);
      }
      else {
        setMessage(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setMessage('Network error. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 p-4">
      {/* Decorative plants */}
      <div className="absolute bottom-0 left-0 w-64 h-96 opacity-20">
        <svg viewBox="0 0 200 300" className="w-full h-full">
          <path d="M100,300 Q80,250 60,200 Q50,180 40,160 Q30,140 40,120 Q50,100 60,90"
            fill="none" stroke="#86efac" strokeWidth="3" />
          <ellipse cx="50" cy="100" rx="30" ry="50" fill="#86efac" opacity="0.5" />
          <ellipse cx="70" cy="140" rx="35" ry="55" fill="#86efac" opacity="0.5" />
          <ellipse cx="45" cy="180" rx="40" ry="60" fill="#86efac" opacity="0.5" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <path d="M150,300 Q130,250 120,200 Q110,150 130,120"
            fill="none" stroke="#86efac" strokeWidth="4" />
          <ellipse cx="120" cy="130" rx="45" ry="65" fill="#86efac" opacity="0.6" />
          <ellipse cx="155" cy="170" rx="50" ry="70" fill="#86efac" opacity="0.6" />
          <ellipse cx="110" cy="210" rx="55" ry="75" fill="#86efac" opacity="0.6" />
        </svg>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative z-10">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-4">
            <div className="w-15 h-15  rounded-lg flex items-center justify-center">
              <img src="logo.jpg" alt="logo" />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-500 text-sm">Join the NeatSeed Admin Dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <IoMdMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              {/* Note: 'Mail' component/icon is assumed to be imported or defined elsewhere */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <TbPassword className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              {/* Note: 'Lock' component/icon is assumed to be imported or defined elsewhere */}
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              >
                {/* Note: 'EyeOff' and 'Eye' components/icons are assumed to be imported or defined elsewhere */}
                {showPassword ? <span>Hide</span> : <span>Show</span>}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <TbLockPassword className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              {/* Note: 'Lock' component/icon is assumed to be imported or defined elsewhere */}
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              >
                {/* Note: 'EyeOff' and 'Eye' components/icons are assumed to be imported or defined elsewhere */}
                {showConfirmPassword ? <span>Hide</span> : <span>Show</span>}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-whitefont-semibold py-3 rounded-lg transition duration-200shadow-md hover:shadow-lg mt-6"
          >
            Create Account
          </button>


        </form>

        {/* Message Display */}
        {message && (
          <div className={`text-center text-sm mt-4 p-3 rounded-lg ${message.includes('successfully')
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
            }`}>
            {message}
          </div>
        )}

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-green-600 hover:text-green-700 font-semibold">Login</Link>

          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
