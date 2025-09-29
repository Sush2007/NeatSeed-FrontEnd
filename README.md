# 🌱 NeatSeed

**NeatSeed** is a smart waste management system that connects **🏠 residents**, **🚛 garbage truck drivers**, and **👨‍💻 administrators** to keep neighborhoods clean and organized.

---

## ✨ Features
- 📍 **Real-Time Tracking** – Residents can view the live location of garbage trucks and receive notifications when the truck is near.  
- 🖥️ **Admin Dashboard** – Monitor routes, track collection status, manage drivers, and review missed pickups.  
- 🚛 **Driver App** – Guides drivers through assigned routes, allows marking pickups, and shares live GPS updates.  
- 📊 **Data Insights** – Access collection history, missed pickups, and analytics for better planning and efficiency.

---

## 🛠️ Tech Stack
| Layer | Technology |
|------|------------|
| **Mobile App** | 📱 React Native (Android) |
| **Website (Admin Dashboard)** | 💻 React + Tailwind CSS |
| **Backend** | ⚡ Node.js + Express |
| **Database** | 🗂️ MongoDB |
| **Maps & Notifications** | 🗺️ Google Maps API, 🔔 Firebase Cloud Messaging |

---

## 📦 Project Structure
NeatSeed/
│
├─ README.md                # Project overview & documentation
├─ .gitignore
│
├─ backend/                  # Node.js + Express API
│  ├─ src/
│  │  ├─ config/             # DB connection, environment variables
│  │  ├─ controllers/        # Business logic (users, trucks, pickups)
│  │  ├─ models/             # MongoDB schemas (User, Driver, Route, Pickup)
│  │  ├─ routes/             # Express routes
│  │  ├─ middleware/         # Auth, error handling
│  │  ├─ utils/              # Haversine formula, helpers
│  │  └─ index.js            # Server entry point
│  ├─ package.json
│  └─ .env.example           # Example environment variables
│
├─ mobile-app/               # React Native app (for residents)
│  ├─ src/
│  │  ├─ components/         # Reusable UI components
│  │  ├─ screens/            # Dashboard, Profile, History, etc.
│  │  ├─ navigation/         # Stack/Tab navigation
│  │  ├─ store/              # Redux or Context setup
│  │  ├─ services/           # API calls
│  │  └─ utils/              # Helpers (formatting, constants)
│  ├─ assets/                # Images, icons, fonts
│  ├─ App.js
│  └─ package.json
│
├─ driver-app/               # React Native app (for truck drivers)
│  ├─ src/
│  │  ├─ components/
│  │  ├─ screens/            # Route, Stop Details, Notifications, Profile
│  │  ├─ navigation/
│  │  ├─ store/
│  │  ├─ services/
│  │  └─ utils/
│  ├─ assets/
│  ├─ App.js
│  └─ package.json
│
└─ admin-dashboard/          # Web dashboard (React + Tailwind)
   ├─ src/
   │  ├─ components/         # Reusable UI components
   │  ├─ pages/              # Landing, Dashboard, Drivers, Residents, Routes
   │  ├─ layouts/            # Admin layout, public layout
   │  ├─ services/           # API calls
   │  ├─ hooks/              # Custom React hooks
   │  └─ utils/
   ├─ public/
   ├─ package.json
   └─ vite.config.js         
