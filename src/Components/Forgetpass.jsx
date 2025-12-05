import React, { useState } from 'react';

const Forgetpass = () => {
  // State for the email input
  const [email, setEmail] = useState('');
  // State for handling loading/success/error messages
  const [message, setMessage] = useState('');
  // State to track if the form has been submitted successfully
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simple email validation regex (can be made more robust)
  const validateEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    // --- Backend Integration Placeholder ---
    // In a real application, you would make an API call here.
    
    /*
    try {
      const response = await fetch('/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Handle API errors (e.g., rate limit, server error)
        setMessage('An error occurred. Please try again later.');
      }
    } catch (error) {
      // Handle network errors
      setMessage('Network error. Check your connection.');
    }
    */
    
    // Simulate a successful submission for the UI
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
    // ------------------------------------
  };

  return (
    // Outer container for full-page centering and background
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      
      {/* Main content container: forgot-password-container */}
      <div 
        className="
          forgot-password-container 
          w-full max-w-md 
          p-8 
          bg-white 
          shadow-xl 
          rounded-lg 
          border-t-8 border-green-500 
          md:p-10
        "
      >
        <div className="text-center">
          {/* Bold Heading */}
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Forgot Password?
          </h1>
          
          {/* Short explanatory text */}
          <p className="text-sm text-gray-500 mb-6">
            Enter your registered email and we’ll send you a link to reset your password.
          </p>
        </div>

        {isSubmitted ? (
          // --- Success Message Section ---
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
            <p className="font-bold">Link Sent!</p>
            <p className="text-sm">
              If this email exists, a reset link has been sent to your inbox. **Please check your spam folder** if you don't see it immediately.
            </p>
          </div>
        ) : (
          // --- Forgot Password Form ---
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@neatseed.com"
                  className="
                    appearance-none 
                    block 
                    w-full 
                    px-3 
                    py-2 
                    border border-gray-300 
                    rounded-md 
                    shadow-sm 
                    placeholder-gray-400 
                    focus:outline-none 
                    focus:ring-green-500 
                    focus:border-green-500 
                    sm:text-sm
                  "
                />
              </div>
            </div>

            {/* Error Message Display */}
            {message && (
              <p className="text-sm text-red-600 text-center font-medium">
                {message}
              </p>
            )}

            {/* Send Reset Link Button */}
            <button
              type="submit"
              className="
                w-full 
                flex 
                justify-center 
                py-2 
                px-4 
                border border-transparent 
                rounded-md 
                shadow-sm 
                text-sm font-medium 
                text-white 
                bg-green-600 
                hover:bg-green-700 
                focus:outline-none 
                focus:ring-2 
                focus:ring-offset-2 
                focus:ring-green-500 
                transition duration-150 ease-in-out
              "
            >
              Send Reset Link
            </button>
          </form>
        )}

        {/* Back to Login Link */}
        <div className="mt-6 text-center">
          <a 
            href="/login" 
            className="text-sm font-medium text-green-600 hover:text-green-500 transition duration-150 ease-in-out"
          >
            ← Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Forgetpass;