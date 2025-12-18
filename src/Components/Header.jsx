import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react'; // Mobile menu icon ke liye

const Header = () => {
  return (
    <header className="w-full bg-white py-4 px-6 md:px-12 flex items-center justify-between shadow-sm sticky top-0 z-50">

      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight text-blue-900 leading-none">
            XPLOORHUB<span className="text-xs align-top ml-0.5">™</span>
          </span>
          <span className="text-[10px] font-semibold tracking-[0.2em] text-blue-400">
            INDIA PRIVATE LIMITED
          </span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link to="/about" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
          About
        </Link>
        <Link to="/service" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
          Service
        </Link>
        <Link to="/products" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
          Our Product
        </Link>
        <Link to="/contact" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
          Contact
        </Link>
      </nav>

      {/* CTA Button */}
      <div className="flex items-center gap-4">
        <Link
          to="/contact"
          className="bg-gradient-to-r from-blue-800 to-indigo-600 text-white px-6 py-2.5 rounded-md font-medium hover:opacity-90 transition-all shadow-md"
        >
          Get A Quote
        </Link>

        {/* Mobile Menu Icon (Visible only on small screens) */}
        <button className="md:hidden text-gray-700">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Header;