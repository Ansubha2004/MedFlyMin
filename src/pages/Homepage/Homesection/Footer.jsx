import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#F16622] py-8 px-4 sm:px-12">
      <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-start items-center gap-8">
        {/* Logo */}
        <div className="mb-4 sm:mb-0 flex-shrink-0 flex items-center justify-center w-full sm:w-auto">
          <div className="bg-white rounded-xl p-2 sm:p-3 shadow-md">
            <img src="/logo.png" alt="MedFlyMin Logo" className="h-14 sm:h-20" />
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-8 text-white text-lg mb-8 sm:pt-10 sm:mb-0">
          <Link to="/login" className="hover:text-black transition-colors font-semibold">Login</Link>
          <Link to="/register" className="hover:text-black transition-colors font-semibold">Sign Up</Link>
          <a href="/#contactus" className="hover:text-black transition-colors font-semibold">Contact Us</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-start gap-2 text-white text-base mb-4 sm:mb-0 sm:pt-6 ">
          <div className="flex items-center gap-2">
            <i className="fas fa-phone-alt"></i>
            <span>+91 9876543210</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-envelope"></i>
            <span>medflymin@gmail.com</span>
          </div>
        </div>

        {/* Connect Section */}
        <div className="flex flex-col items-center sm:items-end">
          <span className="text-white font-semibold underline mb-2  sm:hidden">Connect</span>
          <div className="flex gap-6 mt-1 sm:pt-8">
            <a href="#" aria-label="Instagram" className="text-white hover:text-black text-3xl transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-black text-3xl transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="X" className="text-white hover:text-black text-3xl transition-colors">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Divider Line */}
      <div className="w-full border-t border-white/30 my-6"></div>
      {/* Copyright */}
      <div className="text-xs text-white mt-0 text-center w-full">
        All Rights Reserved @medflymin 2025
      </div>
    </footer>
  );
} 