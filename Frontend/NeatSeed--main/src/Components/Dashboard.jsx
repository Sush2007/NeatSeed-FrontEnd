import React, { useState, useEffect, useRef } from 'react';
import { Truck, Home, MapPin, Bell, BarChart3, Package } from 'lucide-react';
// Import your map configuration functions
import { initializeMap, addTruckMarkers } from '../mapConfig';
// import { createBrowserRouter } from 'react-router-dom';

import Sidebar from './Sidebar';


// Sidebar Component
<Sidebar/>

// Header Component
const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Smart Garbage Collection Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Monitor your smart garbage collection system in real-time</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
              AU
            </div>
            <span className="font-medium text-gray-700">Admin User</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Card Component
const DashboardCard = ({ icon: Icon, title, value, subtitle, progress, iconColor }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-gray-800 mb-1">{value}</h3>
          <p className="text-xs text-gray-400">{subtitle}</p>
          {progress !== undefined && (
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

// Truck Status Card Component
const TruckStatusCard = ({ truckId, driver, fuel, route, status }) => {
  const statusColors = {
    Active: 'bg-green-100 text-green-700',
    Idle: 'bg-gray-100 text-gray-700'
  };

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-50 rounded-lg">
            <Truck className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">{truckId}</h4>
            <p className="text-sm text-gray-500">{driver}</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">{fuel} Fuel</p>
            <p className="text-xs text-gray-500">{route}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

// Map Section Component with Ola Maps Integration
const MapSection = ({ trucks }) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);
  const [mapError, setMapError] = useState(null);

  // Initialize map on component mount
  useEffect(() => {
    const loadMap = async () => {
      try {
        if (!mapInstanceRef.current) {
          console.log('Initializing Ola Maps...');
          const map = await initializeMap('map-container');
          
          if (map) {
            mapInstanceRef.current = map;
            setMapReady(true);
            console.log('Map initialized successfully');
            
            // Add truck markers
            if (trucks && trucks.length > 0) {
              addTruckMarkers(map, trucks);
              console.log('Truck markers added');
            }
          } else {
            setMapError('Failed to initialize map');
          }
        }
      } catch (error) {
        console.error('Error loading map:', error);
        setMapError(error.message);
      }
    };

    loadMap();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        // Add any cleanup logic if needed
        mapInstanceRef.current = null;
      }
    };
  }, []); // Only run once on mount

  // Update markers when truck data changes
  useEffect(() => {
    if (mapInstanceRef.current && mapReady && trucks) {
      console.log('Updating truck markers...');
      // You might want to clear existing markers first
      addTruckMarkers(mapInstanceRef.current, trucks);
    }
  }, [trucks, mapReady]);

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 h-full">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-green-600" />
        <h3 className="text-lg font-semibold text-gray-800">Live Truck Locations</h3>
      </div>
      
      {/* Map Container - Ola Maps will render here */}
      <div 
        id="map-container" 
        ref={mapContainerRef}
        className="w-full h-80 bg-gray-50 rounded-lg"
        style={{ minHeight: '320px' }}
      >
        {/* Loading state */}
        {!mapReady && !mapError && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mb-4"></div>
            <p className="text-sm text-gray-500">Loading map...</p>
          </div>
        )}
        
        {/* Error state */}
        {mapError && (
          <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-red-300">
            <MapPin className="w-16 h-16 text-red-400 mb-4" />
            <h4 className="text-lg font-semibold text-red-700 mb-2">Map Error</h4>
            <p className="text-sm text-red-500 mb-4 text-center px-4">{mapError}</p>
            <div className="flex items-center gap-2 px-4 py-2 bg-red-100 rounded-lg">
              <span className="text-red-700 text-sm font-medium">⚠️ Check API Key & Configuration</span>
            </div>
          </div>
        )}
      </div>

      {/* Status indicator */}
      {mapReady && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-700 font-medium">
              Map Active • Tracking {trucks?.length || 0} trucks
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  // Truck data with GPS coordinates
  const trucks = [
    { 
      id: 'TRK001', 
      driver: 'John Smith', 
      fuel: '85%', 
      route: 'Route RT001', 
      status: 'Active',
      latitude: 20.2961,
      longitude: 85.8245
    },
    { 
      id: 'TRK002', 
      driver: 'Sarah Johnson', 
      fuel: '62%', 
      route: 'Route RT002', 
      status: 'Active',
      latitude: 20.3021,
      longitude: 85.8350
    },
    { 
      id: 'TRK003', 
      driver: 'Mike Wilson', 
      fuel: '90%', 
      route: 'Route RT003', 
      status: 'Idle',
      latitude: 20.2890,
      longitude: 85.8180
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-sm text-gray-500 mt-1">Monitor your smart garbage collection system in real-time</p>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard
              icon={Truck}
              title="Total Trucks"
              value="4"
              subtitle="2 currently active"
              iconColor="bg-blue-100 text-blue-600"
            />
            <DashboardCard
              icon={Home}
              title="Total Houses"
              value="615"
              subtitle="Registered for collection"
              iconColor="bg-green-100 text-green-600"
            />
            <DashboardCard
              icon={Package}
              title="Collection Today"
              value="78%"
              subtitle="Progress"
              progress={78}
              iconColor="bg-yellow-100 text-yellow-600"
            />
            <DashboardCard
              icon={MapPin}
              title="Routes Completed"
              value="1/4"
              subtitle="25% completion rate"
              iconColor="bg-purple-100 text-purple-600"
            />
          </div>

          {/* Live Truck Status and Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Live Truck Status */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Truck className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-800">Live Truck Status</h3>
                </div>
                <div className="space-y-3">
                  {trucks.map((truck) => (
                    <TruckStatusCard 
                      key={truck.id} 
                      truckId={truck.id}
                      driver={truck.driver}
                      fuel={truck.fuel}
                      route={truck.route}
                      status={truck.status}
                    />
                  ))}
                </div> 
              </div>
            </div>

            {/* Map Section */}
            <div className="lg:col-span-1">
              <MapSection trucks={trucks} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;