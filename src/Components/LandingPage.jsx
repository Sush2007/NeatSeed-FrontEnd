import React from 'react';
import Navbar from './Navbar';
import { FaArrowRight } from "react-icons/fa";
import Works from './Works';
import Features from './Features';
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">
              Smart Garbage Collection for a
              <span className="text-green-700"> Cleaner City</span>
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Revolutionize waste management with AI-powered route optimization, real-time tracking, and intelligent analytics for sustainable urban living.
            </p>
            <div className="space-x-4">
              <Link to="/signup">
                <button className="bg-green-700 text-white px-6 py-3 rounded-full flex items-center hover:bg-green-800 transition">
                  Get Started <FaArrowRight className="ml-2" />
                </button>
              </Link>
            
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="Grabage_Truck.jpg" alt="Garbage Truck" />
          </div>
        </div>
      </div>
      <Works />
      <Features />
    </>
  );
};

export default LandingPage;