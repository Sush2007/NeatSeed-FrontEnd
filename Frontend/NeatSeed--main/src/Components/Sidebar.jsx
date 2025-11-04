import React from 'react';
import { BarChart3, Truck, MapPin, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; //uselocation is used to get the current location of the page

const Sidebar = ({ activeMenu, setActiveMenu }) => {
    const location = useLocation();
    
    const menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: BarChart3, path: "/dashboard" },
      { id: 'trucks', label: 'Trucks', icon: Truck, path: "/trucks" },
      { id: 'routes', label: 'Routes', icon: MapPin, path: "/routes" },
     
      { id: 'notifications', label: 'Notifications', icon: Bell,path:"/notification" },
      { id: 'analytics', label: 'Analytics', icon: BarChart3, path: "/analytics" }
    ];
  
    // Determine active menu based on current location
    const isActive = (item) => {
      // Use location.pathname if activeMenu prop is not provided
      return activeMenu ? activeMenu === item.id : location.pathname === item.path;
    };
  
    return (
      <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col">
        {/* Logo Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center">
             <img src="logo.jpg" alt="logo" />
            </div>
            <Link to="/"> <span className="text-xl font-bold text-gray-800">NeatSeed</span> </Link>
           
          </div>
        </div>
  
        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item);
              return (
               <Link to={item.path} key={item.id}>
                 <button
                  onClick={() => setActiveMenu && setActiveMenu(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    active
                      ? 'bg-green-50 text-green-700 border-l-4 border-green-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
               </Link>
               
                
              );
            })}
          </div>
        </nav>
  
        
      </div>
    );
  };

  export default Sidebar;