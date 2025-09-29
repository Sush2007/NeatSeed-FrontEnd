import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between items-center py-4 px-6 border-b border-gray-200">
      <div className="flex items-center">
        <span className="text-green-700 font-bold text-xl">🌱 NeatSeed</span>
      </div>
      <button className="bg-green-700 text-white px-4 py-2 rounded-full flex items-center hover:bg-green-800 transition">
        Admin Login <FaArrowRight className="ml-2" />
      </button>
    </nav>
    </>
  )
}

export default Navbar