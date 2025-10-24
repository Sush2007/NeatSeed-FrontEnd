import React, { useState } from 'react';
import { Bell, MessageSquare, Truck, CheckCircle, AlertCircle, User, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('notifications');
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'User',
      type: 'Missed Collection',
      date: 'Jan 15, 2025',
      description: 'The garbage truck missed our street this morning. Bins are still full and collection was scheduled for 9 AM.',
      status: 'Pending'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'User',
      type: 'Late Arrival',
      date: 'Jan 14, 2025',
      description: 'Collection team arrived 3 hours late. This has been happening repeatedly over the past month.',
      status: 'Pending'
    },
    {
      id: 3,
      name: 'Driver Alex Kumar',
      role: 'Driver',
      type: 'Damaged Property',
      date: 'Jan 13, 2025',
      description: "Resident's fence was damaged during collection. Need to arrange compensation.",
      status: 'Resolved'
    },
    {
      id: 4,
      name: 'Emma Williams',
      role: 'User',
      type: 'Poor Service',
      date: 'Jan 12, 2025',
      description: 'Waste spillage left on the street after collection. Very unprofessional.',
      status: 'Resolved'
    }
  ]);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: 'truck',
      title: 'Truck TRK002 approaching Ward 3',
      description: 'Garbage collection started in your area. Please ensure bins are placed outside.',
      time: '5 mins ago',
      status: 'Unread'
    },
    {
      id: 2,
      icon: 'check',
      title: 'Collection completed in Ward 1',
      description: 'All scheduled pickups have been successfully completed.',
      time: '1 hour ago',
      status: 'Unread'
    },
    {
      id: 3,
      icon: 'alert',
      title: 'Driver reported delay',
      description: 'Driver DRV005 reported traffic delay. ETA updated to 3:45 PM.',
      time: '2 hours ago',
      status: 'Read'
    },
    {
      id: 4,
      icon: 'user',
      title: 'New user registration',
      description: 'A new user has registered in Ward 2. Account pending approval.',
      time: '3 hours ago',
      status: 'Read'
    }
  ]);

  const handleResolveComplaint = (id) => {
    setComplaints(complaints.map(complaint => 
      complaint.id === id ? { ...complaint, status: 'Resolved' } : complaint
    ));
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'truck': return <Truck className="w-6 h-6" />;
      case 'check': return <CheckCircle className="w-6 h-6" />;
      case 'alert': return <AlertCircle className="w-6 h-6" />;
      case 'user': return <Bell className="w-6 h-6" />;
      default: return <Bell className="w-6 h-6" />;
    }
  };

  const notificationCount = notifications.filter(n => n.status === 'Unread').length;
  const complaintCount = complaints.filter(c => c.status === 'Pending').length;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar Navigation */}
      <div className="w-80 bg-white border-r border-gray-200 fixed h-full">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
             <img src="logo.jpg" alt="" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">NeatSeed</h1>
          </div>
          
          <nav className="space-y-2">
            <Link to="/dashboard">
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition">
            
              <BarChart3 className="w-5 h-5"/>
              <span className="font-medium">Dashboard</span>
            </a>
            </Link>
          
            <Link to="/trucks">
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition">
              <Truck className="w-5 h-5" />
              <span className="font-medium">Trucks</span>
            </a>
            </Link>
            
            <Link to="/routes">
             <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium">Routes</span>
            </a>
            </Link>

            <Link to="/notifications">
              <a href="#" className="flex items-center gap-3 px-4 py-3 bg-green-600 text-white rounded-lg transition">
                <Bell className="w-5 h-5" />
                <span className="font-medium">Notifications</span>
              </a>
            </Link>
            
            
            <Link to="/analytics">
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="font-medium">Analytics</span>
              </a>
            </Link>
          
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-80 flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Notifications & Complaints</h1>
            <p className="text-gray-600">Monitor recent alerts and resolve issues efficiently.</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8 bg-white rounded-xl p-2 shadow-sm">
            <button
              onClick={() => setActiveTab('notifications')}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
                activeTab === 'notifications'
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
              {notificationCount > 0 && (
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {notificationCount}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('complaints')}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
                activeTab === 'complaints'
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Complaints</span>
              {complaintCount > 0 && (
                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {complaintCount}
                </span>
              )}
            </button>
          </div>

          {/* Content Area */}
          {activeTab === 'notifications' && (
            <div className="space-y-4">
              {/* Filter Tabs */}
              <div className="flex gap-2 mb-6">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium">
                  All
                </button>
                <button className="px-4 py-2 bg-white text-gray-600 rounded-lg font-medium hover:bg-gray-50">
                  Unread
                </button>
                <button className="px-4 py-2 bg-white text-gray-600 rounded-lg font-medium hover:bg-gray-50">
                  System Alerts
                </button>
              </div>

              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`bg-white rounded-xl p-6 border-l-4 shadow-sm ${
                    notification.status === 'Unread' ? 'border-green-600' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className={`p-3 rounded-lg ${
                        notification.status === 'Unread' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {getNotificationIcon(notification.icon)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{notification.title}</h3>
                        <p className="text-gray-600 mb-2">{notification.description}</p>
                        <p className="text-sm text-gray-500">{notification.time}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      notification.status === 'Unread'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {notification.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'complaints' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {complaints.map((complaint) => (
                <div
                  key={complaint.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        {complaint.role === 'Driver' ? (
                          <Truck className="w-5 h-5 text-gray-600" />
                        ) : (
                          <User className="w-5 h-5 text-gray-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{complaint.name}</h3>
                        <span className="text-sm text-gray-500">{complaint.role}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      complaint.status === 'Pending'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {complaint.status}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-700">Type:</span>
                      <span className="text-sm text-gray-900">{complaint.type}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium text-gray-700">Date:</span>
                      <span className="text-sm text-gray-900">{complaint.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{complaint.description}</p>
                  </div>
                  
                  {complaint.status === 'Pending' && (
                    <button
                      onClick={() => handleResolveComplaint(complaint.id)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition"
                    >
                      Mark as Resolved
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;