import React from "react";
import {
  FaDiscord,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer" // 👈 added so we can scroll here from menu
      className="bg-[#0b0f1a] text-white py-12 px-6 scroll-smooth"
    >
      {/* Top Subscribe Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 border-b border-gray-700 pb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-center lg:text-left">
          Get regular updates
        </h2>

        <div className="flex w-full lg:w-auto items-center gap-4">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-1 lg:flex-none px-6 py-3 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button className="px-6 py-3 font-semibold border border-cyan-400 text-white rounded-md hover:bg-cyan-500 hover:border-cyan-500 transition">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Middle Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
        {/* Blockchain Join */}
        <div className="flex flex-col items-start">
          <div className="bg-gradient-to-r from-blue-600 to-green-400 p-6 rounded-md w-full max-w-xs text-center">
            <h3 className="font-semibold mb-4">Join Our Blockchain Community</h3>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition">
              <FaDiscord className="text-lg" />
              JOIN
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Whitepaper</a></li>
            <li><a href="#">One pager</a></li>
            <li><a href="#">Presentation</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Token Sale</a></li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="font-semibold mb-4">OTHERS LINKS</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">About</a></li>
            <li><a href="#">API Docs</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4">LEGAL</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Terms & Use</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6 gap-4">
        <p className="text-gray-400 text-sm text-center md:text-left">
          Copyright © 2023 Coindox. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-300">
          <a href="#" className="p-2 border border-gray-600 rounded-md hover:text-white hover:border-cyan-400 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="p-2 border border-gray-600 rounded-md hover:text-white hover:border-cyan-400 transition">
            <FaLinkedinIn />
          </a>
          <a href="#" className="p-2 border border-gray-600 rounded-md hover:text-white hover:border-cyan-400 transition">
            <FaInstagram />
          </a>
          <a href="#" className="p-2 border border-gray-600 rounded-md hover:text-white hover:border-cyan-400 transition">
            <FaTelegramPlane />
          </a>
        </div>
      </div>

      {/* Smooth Scroll */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </footer>
  );
}
