import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
              EcoMerc
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/cart"
              className="text-indigo-400 hover:text-indigo-300 transition duration-300"
            >
              <RiShoppingCartLine size={24} />
            </Link>
            <Link to="/products">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 shadow-md">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <NavLink to="/" mobile onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/products" mobile onClick={toggleMenu}>
              Products
            </NavLink>
            <NavLink to="/about" mobile onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink to="/contact" mobile onClick={toggleMenu}>
              Contact Us
            </NavLink>
            <div className="flex items-center space-x-4 pt-4">
              <Link
                to="/cart"
                className="text-indigo-400 hover:text-indigo-300 transition duration-300"
                onClick={toggleMenu}
              >
                <RiShoppingCartLine size={24} />
              </Link>
              <Link to="/products" onClick={toggleMenu}>
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 shadow-md">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, mobile, onClick }) => (
  <Link
    to={to}
    className={`hover:text-indigo-400 transition duration-300 ${
      mobile ? "block py-2" : ""
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
