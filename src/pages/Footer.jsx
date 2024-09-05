import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
              EcoMerc
            </h3>
            <p className="text-gray-400">
              Your one-stop shop for sustainable living.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.773-1.63 1.564V12h2.773l-.443 2.891h-2.33V21.88C18.344 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.5c-5.247 0-9.5 4.253-9.5 9.5 0 5.247 4.253 9.5 9.5 9.5s9.5-4.253 9.5-9.5c0-5.247-4.253-9.5-9.5-9.5zm-.75 14.74v-4.99H9V10.5h2.25V9.04c0-2.228 1.335-3.44 3.28-3.44.934 0 1.736.07 1.97.1v2.29h-1.35c-1.064 0-1.27.507-1.27 1.247V10.5h2.55l-.33 2.25h-2.22v4.99H11.25zM8.5 7.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM6 20c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm12.5-4.5h-2v-5h2v5zM18 20c-.276 0-.5-.224-.5-.5V12h2v7.5c0 .276-.224.5-.5.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.5c-5.247 0-9.5 4.253-9.5 9.5 0 5.247 4.253 9.5 9.5 9.5s9.5-4.253 9.5-9.5c0-5.247-4.253-9.5-9.5-9.5zm-.75 14.74v-4.99H9V10.5h2.25V9.04c0-2.228 1.335-3.44 3.28-3.44.934 0 1.736.07 1.97.1v2.29h-1.35c-1.064 0-1.27.507-1.27 1.247V10.5h2.55l-.33 2.25h-2.22v4.99H11.25zM8.5 7.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM6 20c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm12.5-4.5h-2v-5h2v5zM18 20c-.276 0-.5-.224-.5-.5V12h2v7.5c0 .276-.224.5-.5.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} EcoMerc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
