import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 font-sans">
      {/* Top Bar */}
      <div className="bg-gray text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl font-bold text-black mb-4 md:mb-0">Bandage</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-white text-[#252B42] rounded-full p-2 cursor-pointer hover:bg-gray-200 transition">
              <Facebook size={20} />
            </div>
            <div className="bg-white text-[#252B42] rounded-full p-2 cursor-pointer hover:bg-gray-200 transition">
              <Instagram size={20} />
            </div>
            <div className="bg-white text-[#252B42] rounded-full p-2 cursor-pointer hover:bg-gray-200 transition">
              <Twitter size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Middle Columns */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-sm">
        {/* 1. Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company Info</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-[#23A6F0]">About Us</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Carrier</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">We are hiring</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Blog</a></li>
          </ul>
        </div>

        {/* 2. Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-[#23A6F0]">About Us</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Carrier</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">We are hiring</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Blog</a></li>
          </ul>
        </div>

        {/* 3. Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Features</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-[#23A6F0]">Business Marketing</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">User Analytic</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Live Chat</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Unlimited Support</a></li>
          </ul>
        </div>

        {/* 4. Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-[#23A6F0]">IOS & Android</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Watch a Demo</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Customers</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">API</a></li>
          </ul>
        </div>

        {/* 5. Column - Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-[#23A6F0] hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">Lorem ipsum dolor amit</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#E6E6E6] text-gray-500 text-sm py-4 text-center">
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
