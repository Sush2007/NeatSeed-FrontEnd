import React, { useState } from 'react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 p-4">
      {/* Decorative plants */}
      <div className="absolute bottom-0 left-0 w-64 h-96 opacity-20">
        <svg viewBox="0 0 200 300" className="w-full h-full">
          <path d="M100,300 Q80,250 60,200 Q50,180 40,160 Q30,140 40,120 Q50,100 60,90" 
                fill="none" stroke="#86efac" strokeWidth="3"/>
          <ellipse cx="50" cy="100" rx="30" ry="50" fill="#86efac" opacity="0.5"/>
          <ellipse cx="70" cy="140" rx="35" ry="55" fill="#86efac" opacity="0.5"/>
          <ellipse cx="45" cy="180" rx="40" ry="60" fill="#86efac" opacity="0.5"/>
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <path d="M150,300 Q130,250 120,200 Q110,150 130,120" 
                fill="none" stroke="#86efac" strokeWidth="4"/>
          <ellipse cx="120" cy="130" rx="45" ry="65" fill="#86efac" opacity="0.6"/>
          <ellipse cx="155" cy="170" rx="50" ry="70" fill="#86efac" opacity="0.6"/>
          <ellipse cx="110" cy="210" rx="55" ry="75" fill="#86efac" opacity="0.6"/>
        </svg>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative z-10">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-4">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 3.6v8.47c0 4.51-3.08 8.73-8 9.93-4.92-1.2-8-5.42-8-9.93V7.78l8-3.6zm-1 4.82v2h2v-2h-2zm0 4v6h2v-6h-2z"/>
            </svg>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-500 text-sm">Join the NeatSeed Admin Dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              {/* Note: 'User' component/icon is assumed to be imported or defined elsewhere */}
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              {/* Note: 'Mail' component/icon is assumed to be imported or defined elsewhere */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              {/* Note: 'Phone' component/icon is assumed to be imported or defined elsewhere */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Admin Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition appearance-none bg-white"
            >
              <option value="">Select your role</option>
              <option value="super-admin">Super Admin</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="support">Support</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
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
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg mt-6"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <a href="#" className="text-green-600 hover:text-green-700 font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;