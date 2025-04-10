import React from 'react';
import { FaUser, FaGraduationCap, FaBook, FaFileAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />

      {/* Hero Section with Image Background */}
      <div className="relative h-96 md:h-[500px] w-full bg-gray-200 overflow-hidden">
        {/* Image background */}
        <div className="absolute inset-0 bg-[url('assets/images/herobg.png')] bg-cover bg-center"></div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Discover, Learn, Grow: <br /> The Journey Begins Here
          </h1>
        </div>
      </div>

      {/* Four Color Blocks */}
      <div className="flex flex-col md:flex-row w-full gap-6 mt-8 px-4">
        {/* Block 1 - Blue */}
        <div className="w-full md:w-1/4 bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 text-center rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
            <FaUser className="text-blue-400" size={30} />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Certified Teachers</h3>
          <p className="text-sm">
            Our team of certified teachers ensures your child receives the best education possible.
          </p>
        </div>

        {/* Block 2 - Green */}
        <div className="w-full md:w-1/4 bg-gradient-to-r from-green-400 to-green-600 text-white p-6 text-center rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
            <FaGraduationCap className="text-green-400" size={30} />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Special Education</h3>
          <p className="text-sm">
            We offer specialized programs tailored to support every child's unique learning needs.
          </p>
        </div>

        {/* Block 3 - Purple */}
        <div className="w-full md:w-1/4 bg-gradient-to-r from-purple-400 to-purple-600 text-white p-6 text-center rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
            <FaBook className="text-purple-400" size={30} />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Book & Library</h3>
          <p className="text-sm">
            Our well-stocked library encourages curiosity and helps students explore new knowledge.
          </p>
        </div>

        {/* Block 4 - Red */}
        <div className="w-full md:w-1/4 bg-gradient-to-r from-red-400 to-red-600 text-white p-6 text-center rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
            <FaFileAlt className="text-red-400" size={30} />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Certification</h3>
          <p className="text-sm">
            Our certification programs ensure that students are recognized for their accomplishments.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
