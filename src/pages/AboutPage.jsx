import React from 'react';
import { Play, Facebook, Instagram, Twitter } from 'lucide-react';

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Design Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    }
  ];

  // Statistics data
  const stats = [
    { number: '15K', label: 'Happy Customers' },
    { number: '150K', label: 'Monthly Visitors' },
    { number: '15', label: 'Countries Worldwide' },
    { number: '100+', label: 'Top Partners' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">ABOUT US</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are dedicated to providing the best shopping experience for our customers worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="About Us"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed">
                We are a passionate team dedicated to bringing you the best products and services. 
                Our mission is to make shopping easy, enjoyable, and accessible to everyone.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With years of experience in the industry, we understand what our customers need 
                and strive to exceed their expectations with every interaction.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold text-primary-600">G</div>
                <div className="text-2xl font-bold text-secondary-600">S</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our journey and learn more about how we started and where we're heading.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Mountain Landscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all">
                  <Play size={32} className="text-gray-900 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get to know the amazing people behind our success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.social.facebook} className="text-gray-400 hover:text-primary-600">
                    <Facebook size={20} />
                  </a>
                  <a href={member.social.instagram} className="text-gray-400 hover:text-primary-600">
                    <Instagram size={20} />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-primary-600">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Big Companies Are Here</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with some of the biggest names in the industry.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center space-x-8 md:space-x-16">
            {['hooli', 'lyft', 'stripe', 'aws', 'reddit'].map((brand) => (
              <div key={brand} className="text-gray-400 font-bold text-2xl md:text-3xl">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Now Let's grow Yours</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and start your journey with us today.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 