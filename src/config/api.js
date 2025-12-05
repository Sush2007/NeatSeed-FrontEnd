// API configuration
// Use proxy in development, direct URL in production
const API_BASE_URL = import.meta.env.DEV 
  ? '/api'  // Vite proxy will handle this
  : 'https://neatseed-b.onrender.com';

// API endpoints
const API_ENDPOINTS = {
  login: '/admin/login',
  signup: '/admin/signup',
  verify_otp: '/admin/verify-otp',
  resend_otp: '/admin/resend-otp',
};

// Helper function to get full endpoint URL
export const getApiUrl = (endpoint) => {
  return `${API_BASE_URL}${API_ENDPOINTS[endpoint]}`;
};

export default {
  baseUrl: API_BASE_URL,
  endpoints: API_ENDPOINTS,
  getApiUrl
};
