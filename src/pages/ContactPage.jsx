import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Search, ChevronRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const officeLocations = [
    {
      city: 'Paris',
      address: '1901 Thorn ridge Cir.',
      postalCode: '75000 Paris',
      phone: '+451 215 215',
      fax: '+451 215 215'
    },
    {
      city: 'New York',
      address: '2715 Ash Dr. San Jose,',
      postalCode: '75000 Paris',
      phone: '+451 215 215',
      fax: '+451 215 215'
    },
    {
      city: 'Berlin',
      address: '4140 Parker Rd.',
      postalCode: '75000 Paris',
      phone: '+451 215 215',
      fax: '+451 215 215'
    },
    {
      city: 'London',
      address: '3517 W. Gray St. Utica,',
      postalCode: '75000 Paris',
      phone: '+451 215 215',
      fax: '+451 215 215'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Section - Get answers to all your questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-6">
                Get answers to all your questions
              </h1>
              <p className="text-[#737373] text-lg mb-8">
                Problems trying to resolve the conflict between the two major realms of Classical physics
              </p>
              
              {/* Search Bar */}
              <div className="mb-8">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for questions..."
                    className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-lg"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Search size={20} />
                  </button>
                </form>
              </div>

              {/* Contact Button and Social Icons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                  CONTACT OUR COMPANY
                </button>
                <div className="flex items-center space-x-4">
                  <Facebook size={20} className="text-gray-600 hover:text-blue-600 cursor-pointer" />
                  <Twitter size={20} className="text-gray-600 hover:text-blue-400 cursor-pointer" />
                  <Instagram size={20} className="text-gray-600 hover:text-pink-600 cursor-pointer" />
                  <Linkedin size={20} className="text-gray-600 hover:text-blue-700 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Right Content - Placeholder for image or additional content */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions & Answers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div>
              <h2 className="text-[32px] font-bold text-gray-900 mb-6">Questions & Answers</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Send size={20} />
                  <span>CONTACT US</span>
                </button>
              </form>
            </div>

            {/* Person Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                alt="Customer Service Representative"
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT US Section - Blue Background */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-[48px] md:text-[58px] font-bold text-yellow-400 mb-6">
                CONTACT US
              </h2>
              <p className="text-lg mb-8 max-w-md">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newton mechanics
              </p>
              <button className="bg-blue-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                CONTACT
              </button>
            </div>

            {/* Right Content - Image with Overlaid Office Boxes */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=687&q=80"
                alt="Woman with shopping bags"
                className="w-full h-auto rounded-lg"
              />
              
              {/* Office Location Boxes Overlay */}
              <div className="absolute inset-0 grid grid-cols-2 gap-4 p-6">
                {officeLocations.map((office, index) => (
                  <div key={index} className="bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                    <div className="flex items-center mb-2">
                      <MapPin size={16} className="text-blue-600 mr-2" />
                      <h3 className="font-semibold text-sm">{office.city}</h3>
                    </div>
                    <div className="text-xs space-y-1">
                      <p>{office.address}</p>
                      <p>{office.postalCode}</p>
                      <p>Phone: {office.phone}</p>
                      <p>Fax: {office.fax}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Now Let's grow Yours Section - Split Background */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Blue Background */}
          <div className="bg-blue-600 text-white p-16">
            <div className="max-w-md">
              <p className="text-sm uppercase tracking-wide mb-4">WORK WITH US</p>
              <h2 className="text-[32px] md:text-[40px] font-bold mb-6">
                Now Let's grow Yours
              </h2>
              <p className="text-lg mb-8">
                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Button
              </button>
            </div>
          </div>

          {/* Right Side - Pink Background */}
          <div className="bg-pink-100 p-16 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=687&q=80"
              alt="Woman adjusting clothes on rack"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 