import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-[#00AEEF] text-white py-2 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center text-sm gap-3 md:gap-8">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <span className="text-xs md:text-sm">
              Cambodia Street, Tema Community 25
            </span>
          </div>

          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <a
              href="mailto:mams@gmail.com"
              className="hover:underline text-xs md:text-sm"
            >
              mams@gmail.com
            </a>
          </div>

          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <a
              href="tel:+233241710968"
              className="hover:underline text-xs md:text-sm"
            >
              +233 24 171 0968
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-gray-900">
            MAMS
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/teacher" label="Teacher" />
            <NavItem to="/courses" label="Courses" />
            <NavItem to="/gallery" label="Gallery" />
            <NavItem to="/contact" label="Contact" />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <NavItem to="/" label="Home" isMobile onClick={closeMenu} />
              <NavItem to="/about" label="About" isMobile onClick={closeMenu} />
              <NavItem to="/teacher" label="Teacher" isMobile onClick={closeMenu} />
              <NavItem to="/courses" label="Courses" isMobile onClick={closeMenu} />
              <NavItem to="/gallery" label="Gallery" isMobile onClick={closeMenu} />
              <NavItem to="/contact" label="Contact" isMobile onClick={closeMenu} />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

const NavItem = ({ to, label, isMobile, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => `
        ${isMobile ? 'block' : 'inline-block'}
        ${isActive ? 'text-[#00AEEF] font-semibold' : 'text-gray-700 hover:text-[#00AEEF]'}
        transition-colors duration-200
      `}
    >
      {label}
    </NavLink>
  )
}

export default Navbar
