import React, { useState } from 'react';
import { Bell, BarChart3, Truck, MapPin, Home, BellRing, TrendingUp, Pencil, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GarbageRoutes() {
  const [activeNav, setActiveNav] = useState('Routes');

  const navItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
    { icon: Truck, label: 'Trucks', path:'/trucks' },
    { icon: MapPin, label: 'Routes', path:'/routes' },
  
    { icon: BellRing, label: 'Notifications ' , path:"/notification"},
    { icon: TrendingUp, label: 'Analytics', path: "/analytics" },
  ];

  const routes = [
    {
      name: 'Downtown Route A',
      start: 'Central Depot',
      end: 'Processing Center',
      truck: 'TRK001',
      progress: 61,
      houses: '89/145',
      status: 'In Progress',
      time: '4h 30m'
    },
    {
      name: 'Residential Zone B',
      start: 'North Depot',
      end: 'Recycling Plant',
      truck: 'TRK002',
      progress: 77,
      houses: '156/203',
      status: 'In Progress',
      time: '5h 15m'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center">
              <div className="w-27 h-27 rounded-full flex items-center justify-center">
                <img src="logo.jpg" alt="" />
              </div>
            </div>
            <span className="text-xl font-bold text-gray-800">NeatSeed</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.label;
            return (
              <Link to={item.path}>
                <button
                key={item.label}
                onClick={() => setActiveNav(item.label)}
                className={`w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
              </Link>
            
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">NeatSeed Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">?</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Admin User</span>
            </div>
          </div>
        </div>

        {/* Routes Content */}
        <div className="p-8">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Routes</h2>
              <p className="text-gray-600 mt-1">Manage collection routes and optimize efficiency</p>
            </div>
            <button className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-medium">
              <span className="text-xl">+</span>
              Add New Route
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Total Routes</span>
                <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-green-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800">4</div>
              <div className="text-xs text-gray-500 mt-1">Active routes</div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">In Progress</span>
                <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800">2</div>
              <div className="text-xs text-gray-500 mt-1">Currently running</div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Completed</span>
                <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800">1</div>
              <div className="text-xs text-gray-500 mt-1">Finished today</div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Houses Collected</span>
                <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800">323/615</div>
              <div className="text-xs text-gray-500 mt-1">53% completion</div>
            </div>
          </div>

          {/* Route Management Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-800">Route Management</h3>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Route Name</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Start — End</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Assigned Truck</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Progress</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Est. Time</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {routes.map((route, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-5">
                        <div className="font-medium text-gray-800">{route.name}</div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm text-gray-600">
                          {route.start}<br />
                          <span className="text-gray-400">— {route.end}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Truck className="w-4 h-4" />
                          {route.truck}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[120px]">
                            <div 
                              className="bg-green-600 h-2 rounded-full" 
                              style={{ width: `${route.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{route.houses} houses</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                          <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                          {route.status}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
                          </svg>
                          {route.time}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}