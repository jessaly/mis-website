import React from 'react';
import { FaMapPin, FaPhone, FaEnvelope, FaHeart, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Questions Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b-2 border-blue-500 inline-block pb-1">
            Have Questions?
          </h3>
          <ul className="space-y-4">
            <li className="flex">
              <FaMapPin className="mr-3 flex-shrink-0 mt-1" size={18} />
              <span>Tema Community 25, Peace Be Street Cambodia</span>
            </li>
            <li className="flex">
              <FaPhone className="mr-3 flex-shrink-0" size={18} />
              <span>+233 24 171 0968</span>
            </li>
            <li className="flex">
              <FaEnvelope className="mr-3 flex-shrink-0" size={18} />
              <span>mams@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Upcoming Events Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b-2 border-blue-500 inline-block pb-1">
            Upcoming Events
          </h3>
          <div className="space-y-6">
            {/* Event 1 */}
            <div className="flex">
              <div className="w-16 h-16 mr-4">
                <img 
                  src="/api/placeholder/80/80" 
                  alt="Event" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm">
                
                </p>
                <div className="flex items-center text-xs text-gray-400 mt-1">
                  <span>May 15, 2025</span>
                  <span className="mx-2">•</span>
                  <span>Admin</span>
                </div>
              </div>
            </div>
            
            {/* Event 2 */}
            <div className="flex">
              <div className="w-16 h-16 mr-4">
                <img 
                  src="/api/placeholder/80/80" 
                  alt="Event" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm">
        
                </p>
                <div className="flex items-center text-xs text-gray-400 mt-1">
                  <span>June 2, 2025</span>
                  <span className="mx-2">•</span>
                  <span>Admin</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b-2 border-blue-500 inline-block pb-1">
            Useful Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="index" className="inline-flex items-center hover:text-blue-400 transition duration-200">
                <span className="mr-2">→</span> Home
              </a>
            </li>
            <li>
              <a href="/about" className="inline-flex items-center hover:text-blue-400 transition duration-200">
                <span className="mr-2">→</span> About
              </a>
            </li>
            <li>
              <a href="/teachers" className="inline-flex items-center hover:text-blue-400 transition duration-200">
                <span className="mr-2">→</span> Teachers
              </a>
            </li>
            <li>
              <a href="/gallery" className="inline-flex items-center hover:text-blue-400 transition duration-200">
                <span className="mr-2">→</span> Gallery
              </a>
            </li>
            <li>
              <a href="/contact" className="inline-flex items-center hover:text-blue-400 transition duration-200">
                <span className="mr-2">→</span> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b-2 border-blue-500 inline-block pb-1">
            Connect With Us
          </h3>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-blue-400 transition duration-200">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-200">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-200">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-12 text-sm text-gray-400">
        <p>Copyright ©2025 All rights reserved | This website is made with <FaHeart size={12} className="inline text-red-500" /> by Jessica</p>
      </div>
    </footer>
  );
};

export default Footer;
