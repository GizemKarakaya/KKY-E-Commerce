import React from 'react';
import { Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

const TeamPage = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Gökhan Özdemir',
      position: 'Project Manager',
      company: 'IBM',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      linkedin: 'https://linkedin.com/in/gokhan-ozdemir',
      description: 'Experienced project manager with expertise in e-commerce and digital transformation.'
    },
    {
      id: 2,
      name: 'Gizem Karakaya',
      position: 'Full Stack Developer',
      company: 'Workintech',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=687&q=80',
      linkedin: 'https://linkedin.com/in/gizem-karakaya',
      description: 'Passionate full stack developer specializing in React, Node.js, and modern web technologies.'
    },
    {
      id: 3,
      name: 'Devon Lane',
      position: 'Founder',
      company: 'Mitsubishi',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      linkedin: 'https://linkedin.com/in/devon-lane',
      description: 'Visionary founder with a passion for innovation and customer-centric solutions.'
    },
    {
      id: 4,
      name: 'Savannah Nguyen',
      position: 'Founder',
      company: 'Mitsubishi',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      linkedin: 'https://linkedin.com/in/savannah-nguyen',
      description: 'Strategic thinker and business leader focused on sustainable growth.'
    },
    {
      id: 5,
      name: 'Albert Flores',
      position: 'Founder',
      company: 'Mitsubishi',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      linkedin: 'https://linkedin.com/in/albert-flores',
      description: 'Innovative entrepreneur with expertise in technology and market development.'
    },
    {
      id: 6,
      name: 'Jerome Bell',
      position: 'Founder',
      company: 'IBM',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      linkedin: 'https://linkedin.com/in/jerome-bell',
      description: 'Seasoned professional with deep knowledge in business strategy and operations.'
    },
    {
      id: 7,
      name: 'Jacob Jones',
      position: 'Senior Developer',
      company: 'Mitsubishi',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      linkedin: 'https://linkedin.com/in/jacob-jones',
      description: 'Expert developer with focus on scalable architecture and performance optimization.'
    },
    {
      id: 8,
      name: 'Kathryn Murphy',
      position: 'UI/UX Designer',
      company: 'Mitsubishi',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      linkedin: 'https://linkedin.com/in/kathryn-murphy',
      description: 'Creative designer passionate about user experience and visual storytelling.'
    },
    {
      id: 9,
      name: 'Eleanor Pena',
      position: 'Marketing Manager',
      company: 'Mitsubishi',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=687&q=80',
      linkedin: 'https://linkedin.com/in/eleanor-pena',
      description: 'Strategic marketer with expertise in digital campaigns and brand development.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-center font-medium text-gray-500 uppercase mb-2">Team</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-4">
              Meet Our <span className="text-yellow-500">Team</span>
            </h2>
            <p className="text-[#737373] text-base max-w-2xl mx-auto">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid - Desktop View */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          {/* Desktop Grid - 3x3 */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.slice(0, 9).map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-100 group-hover:border-yellow-500 transition-colors"
                  />
                  <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full hover:bg-yellow-500 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-gray-700" />
                      </a>
                    </div>
                  </div>
                </div>
                <h5 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h5>
                <p className="text-sm text-gray-600 mb-1">{member.position}</p>
                <p className="text-xs text-gray-500">{member.company}</p>
              </div>
            ))}
          </div>

          {/* Mobile Grid - 2x2 */}
          <div className="grid grid-cols-2 lg:hidden gap-6 mb-12">
            {teamMembers.slice(0, 4).map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-100 group-hover:border-yellow-500 transition-colors"
                  />
                  <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-1.5 rounded-full hover:bg-yellow-500 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-gray-700" />
                      </a>
                    </div>
                  </div>
                </div>
                <h5 className="text-base font-semibold text-gray-900 mb-1">{member.name}</h5>
                <p className="text-sm text-gray-600 mb-1">{member.position}</p>
                <p className="text-xs text-gray-500">{member.company}</p>
              </div>
            ))}
          </div>

          {/* Mobile Carousel Section */}
          <div className="lg:hidden">
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
              {teamMembers.slice(0, 3).map((member) => (
                <div key={member.id} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="text-center">
                    <h5 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h5>
                    <p className="text-sm text-gray-600 mb-1">{member.position}</p>
                    <p className="text-xs text-gray-500 mb-3">{member.company}</p>
                    <div className="flex justify-center space-x-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">9</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Work With Our Team?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in creating innovative solutions and delivering exceptional experiences to our customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors">
              Get Started
            </button>
            <button className="border border-gray-400 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
