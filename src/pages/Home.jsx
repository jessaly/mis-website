import React from "react";
import {
  FaUser,
  FaGraduationCap,
  FaBook,
  FaFileAlt,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaQuoteLeft
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/Testimonial";

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />

      {/* Hero Section with Image Background */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        {/* Image background with overlay */}
        <div className="absolute inset-0 bg-[url('assets/images/herobg.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40"></div>{" "}
          {/* Darkened overlay */}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg mb-4">
            Discover, Learn, Grow: <br /> The Journey Begins Here
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mt-4 drop-shadow-md">
            Empowering young minds to reach their fullest potential through
            quality education
          </p>
          <div className="mt-8">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg">
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* Four Color Blocks - Features */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-blue-600">Our School</span>
          </h2>

          <div className="flex flex-col md:flex-row w-full gap-6">
            {/* Block 1 - Blue */}
            <div className="w-full md:w-1/4 bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 text-center rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <FaUser className="text-blue-500" size={30} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Certified Teachers
              </h3>
              <p className="text-sm">
                Our team of certified teachers ensures your child receives the
                best education possible.
              </p>
            </div>

            {/* Block 2 - Green */}
            <div className="w-full md:w-1/4 bg-gradient-to-r from-green-400 to-green-600 text-white p-6 text-center rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <FaGraduationCap className="text-green-500" size={30} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Special Education</h3>
              <p className="text-sm">
                We offer specialized programs tailored to support every child's
                unique learning needs.
              </p>
            </div>

            {/* Block 3 - Purple */}
            <div className="w-full md:w-1/4 bg-gradient-to-r from-purple-400 to-purple-600 text-white p-6 text-center rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <FaBook className="text-purple-500" size={30} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Book & Library</h3>
              <p className="text-sm">
                Our well-stocked library encourages curiosity and helps students
                explore new knowledge.
              </p>
            </div>

            {/* Block 4 - Red */}
            <div className="w-full md:w-1/4 bg-gradient-to-r from-red-400 to-red-600 text-white p-6 text-center rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <FaFileAlt className="text-red-500" size={30} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Certification</h3>
              <p className="text-sm">
                Our certification programs ensure that students are recognized
                for their accomplishments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gray-50">
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden max-w-7xl mx-auto">
          {/* Left Column - What We Offer */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
              What We <span className="text-blue-600">Offer</span>
            </h2>

            <p className="text-gray-600 mb-8 text-center md:text-left">
              At MAMS International School, we provide a nurturing environment
              that fosters growth, creativity, and learning. Our dedicated team
              ensures that every student receives personalized attention to
              thrive academically and socially.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Service Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <FaShieldAlt className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl">Safety First</h3>
                </div>
                <p className="text-gray-600">
                  We prioritize safety and security in all aspects of our school
                  environment.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <FaUser className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl">Regular Classes</h3>
                </div>
                <p className="text-gray-600">
                  Structured daily classes with comprehensive curriculum
                  coverage.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <FaChalkboardTeacher className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl">Certified Teachers</h3>
                </div>
                <p className="text-gray-600">
                  Highly qualified educators dedicated to student success.
                </p>
              </div>

              {/* Service Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-yellow-500">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <FaBook className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl">Rich Curriculum</h3>
                </div>
                <p className="text-gray-600">
                  Comprehensive learning materials that promote intellectual
                  growth.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Welcome Message */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 flex justify-center items-center">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Welcome to <span className="text-blue-600"> MAMS</span>{" "}
                International School
              </h2>

              <p className="text-gray-700 mb-6">
                At MAMS International School, we create an engaging educational
                environment where children thrive academically, socially, and
                emotionally. Our innovative teaching methods combine structured
                learning with creative exploration, helping students develop
                critical thinking skills and a lifelong love of learning.
              </p>

              <p className="text-gray-700 mb-8">
                We offer comprehensive programs designed to meet each child's
                unique needs, with dedicated teachers who inspire curiosity and
                confidence. Our campus features modern facilities, including
                tech-equipped classrooms, science labs, arts studios, and safe
                play areas that enhance the learning experience.
              </p>

              <button className="bg-yellow-500 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:bg-yellow-600 transition-colors">
                Read More
              </button>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <span className="text-blue-600 text-3xl font-bold">10+</span>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <span className="text-blue-600 text-3xl font-bold">20+</span>
                  <p className="text-gray-600 text-sm">Certified Teachers</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <span className="text-blue-600 text-3xl font-bold">
                    200+
                  </span>
                  <p className="text-gray-600 text-sm">Happy Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
      <TestimonialSlider />
    </section>

      

      <Footer />
    </div>
  );
};

export default Home;
