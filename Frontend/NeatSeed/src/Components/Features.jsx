import React from 'react'

const Features = () => {
  return (
    <> 
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
        <p className="text-gray-600 mt-2">Everything you need to manage smart garbage collection efficiently</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4">
              <span className="text-green-600">📍</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Real-time Tracking</h3>
            <p className="text-gray-600 mt-2">Monitor all garbage trucks and collection routes in real time with GPS precision.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4">
              <span className="text-green-600">🔔</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Smart Notifications</h3>
            <p className="text-gray-600 mt-2">Automated alerts for collection schedules, route changes, and system updates.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4">
              <span className="text-green-600">📊</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Route Optimization</h3>
            <p className="text-gray-600 mt-2">AI-powered route planning to maximize efficiency and reduce operational costs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4">
              <span className="text-green-600">🔒</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Secure & Reliable</h3>
            <p className="text-gray-600 mt-2">Enterprise-grade security with 99.9% uptime for continuous operations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4">
              <span className="text-green-600">📋</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Automated Reports</h3>
            <p className="text-gray-600 mt-2">Generate comprehensive reports on collection metrics and performance analytics.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4">
              <span className="text-green-600">🚛</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Fleet Management</h3>
            <p className="text-gray-600 mt-2">Complete oversight of your entire fleet with maintenance scheduling and alerts.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Features