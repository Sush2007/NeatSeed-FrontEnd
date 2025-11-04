import React, { useState } from 'react';
import { BarChart3, Truck, MapPin, Home, Bell, TrendingUp, Plus, Pencil, Trash2} from 'lucide-react';

import Sidebar from './Sidebar';

export default function Trucks() {
 

  const trucks = [
    { id: 'TRK001', driver: 'John Smith', route: 'RT001', status: '', lastUpdate: '1/15/2024, 4:00 PM' },
    { id: 'TRK002', driver: 'Sarah Johnson', route: 'RT002', status: '', lastUpdate: '1/15/2024, 3:55 PM' },
    { id: 'TRK003', driver: 'Sarah Johnson', route: 'RT003', status: 'Idle', lastUpdate: '1/15/2024, 3:15 PM' },
    { id: 'TRK004', driver: 'Larah Mathews', route: 'RT004', status: '', lastUpdate: '1/15/2024, 2:00 PM' },
    { id: 'TRK005', driver: 'Robert Brown', route: 'RT005', status: 'Maintenance', lastUpdate: '1/15/2024, 1:30 PM' }
  ];

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-end gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                AD
              </div>
              <span className="text-gray-800 font-medium">Admin User</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Page Title */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Trucks</h1>
              <p className="text-gray-500">Manage your fleet of garbage collection trucks</p>
            </div>
            <button className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
              <Plus className="w-5 h-5" />
              Add New Truck
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600 text-sm">Total Trucks</span>
                <Truck className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">4</div>
              <div className="text-gray-500 text-sm">Fleet size</div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600 text-sm">Active Trucks</span>
                <MapPin className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">2</div>
              <div className="text-gray-500 text-sm">Currently collecting</div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600 text-sm">Average Fuel</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">71%</div>
              <div className="text-gray-500 text-sm">Fleet average</div>
            </div>
          </div>

          {/* Fleet Management Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-gray-600" />
                <h2 className="text-xl font-bold text-gray-900">Fleet Management</h2>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Truck ID</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Driver</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Route</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Last Update</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {trucks.map((truck) => (
                    <tr key={truck.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{truck.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{truck.driver}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{truck.route}</td>
                      <td className="px-6 py-4 text-sm">
                        {truck.status === 'Idle' && (
                          <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                            Idle
                          </span>
                        )}
                        {truck.status === 'Maintenance' && (
                          <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700">
                            Maintenance
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{truck.lastUpdate}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                            <Pencil className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                            <Trash2 className="w-4 h-4 text-gray-600" />
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