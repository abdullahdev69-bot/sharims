import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiCode, FiShield, FiTrendingUp, FiZap, FiUsers, FiTarget, FiBarChart2, FiAward } from 'react-icons/fi';
import { motion } from 'framer-motion';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
   const [counts, setCounts] = useState([0, 0, 0, 0]);

  // Stats data with target values
  const stats = [
    { id: 1, value: 50, suffix: '+', label: 'Projects Completed', icon: <FiCode className="text-2xl" /> },
    { id: 2, value: 5, suffix: '+', label: 'Years Experience', icon: <FiAward className="text-2xl" /> },
    { id: 3, value: 30, suffix: '+', label: 'Happy Clients', icon: <FiUsers className="text-2xl" /> },
    { id: 4, value: 15, suffix: '+', label: 'Team Members', icon: <FiTarget className="text-2xl" /> }
  ];

  // counter animation
  const animateCounter = (index, end) => {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCounts((prev) => {
        const updated = [...prev];
        updated[index] = start;
        return updated;
      });
      if (start === end) clearInterval(timer);
    }, stepTime);
  };


  const services = [
    { 
      id: 1, 
      title: 'Web Development', 
      description: 'Cutting-edge digital solutions',
      secondLine: 'Responsive designs',
      image: '/src/assets/about-us.jpg',
      icon: <FiCode className="text-3xl" />
    },
    { 
      id: 2, 
      title: 'Cyber Security', 
      description: 'Robust protection security systems',
      secondLine: '24/7 monitoring',
      image: '/src/assets/cyber-security.jpg',
      icon: <FiShield className="text-3xl" />
    },
    { 
      id: 3, 
      title: 'Sales Solutions', 
      description: 'Strategic growth plans',
      secondLine: 'Revenue optimization',
      image: '/src/assets/sale.jpeg',
      icon: <FiTrendingUp className="text-3xl" />
    },
    { 
      id: 4, 
      title: 'Innovation', 
      description: 'Future-ready approaches',
      secondLine: 'Continuous improvement',
      image: '/src/assets/ino.webp',
      icon: <FiZap className="text-3xl" />
    }
  ];

  // Results metrics
  const resultsMetrics = [
    { id: 1, text: 'Measurable ROI', icon: <FiBarChart2 className="text-[#E7C348] mr-2" /> },
    { id: 2, text: 'Tangible outcomes', icon: <FiTarget className="text-[#E7C348] mr-2" /> },
    { id: 3, text: 'Clear metrics', icon: <FiTrendingUp className="text-[#E7C348] mr-2" /> },
    { id: 4, text: 'Real impact', icon: <FiAward className="text-[#E7C348] mr-2" /> }
  ];

  return (
    <>
      {/* Hero Banner with About Us Title */}
      <section className="relative w-full h-[40vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('/src/assets/image03.jpg')",
            height: "100%"
          }}
        >
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/85"></div>
          
          {/* Centered About Us text with black layout */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="px-8 py-6 rounded-2xl text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                About <span className="text-[#E7C348]">Us</span>
              </h1>
              <div className="w-24 h-1 bg-[#E7C348] mx-auto mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="relative py-20 bg-black">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E7C348]/5 rounded-full -translate-y-1/2 translate-x-1/2 [clip-path:inset(50%_0_0_0)]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E7C348]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Empowering Businesses with <span className="text-[#E7C348]">Innovation</span>
                </h2>
                <div className="w-20 h-1 bg-[#E7C348] mb-6"></div>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  At Shartm Solutions, we believe that every business deserves tailored strategies and cutting-edge technology to thrive in a fast-paced digital world. With a passion for innovation and an unwavering commitment to excellence, we empower organizations to break barriers, scale new heights, and achieve measurable success.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our team of experts brings together diverse skill sets in web development, cybersecurity, and strategic sales solutions. We don't just deliver services—we craft experiences. Every project we undertake is driven by a deep understanding of our clients' goals, ensuring every solution is purposeful, scalable, and results-driven.
                </p>
              </div>
            </div>

            {/* Right Column - Services with Images */}
            <div className="relative">
<div className="grid grid-cols-2 gap-6">
  {services.map((service) => (
    <div key={service.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
      {/* Image covering the top portion of the card */}
      <div className="h-32 relative overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDYwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMyQTJBMkEiLz4KICA8dGV4dCB4PSIzMDAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRTdDMzQ4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U2VydmljZSBJbWFnZTwvdGV4dD4KPC9zdmc+";
          }}
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-[-0.1] bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      </div>
      
      {/* Content section */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E7C348] transition-colors duration-300">
          {service.title}
        </h3>
        <div className="flex flex-col items-center space-y-1">
          <p className="text-gray-300">{service.description}</p>
          <div className="flex items-center text-gray-400 text-sm">
            {service.icon}
            <span className="ml-1">{service.secondLine}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-[#E7C348]/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#E7C348]/10 rounded-full -z-10"></div>
            </div>
          </div>

          {/* Centered Animated Stats Section */}
      {/* Achievements Section with animation */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        onViewportEnter={() => {
          stats.forEach((stat, i) => animateCounter(i, stat.value));
        }}
      >
        <h3 className="text-3xl font-bold text-white mb-12">Our Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              className="text-center p-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl border border-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-3 text-[#E7C348]">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#E7C348] mb-2">
                {counts[i]}{stat.suffix}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
        </div>
      </section>

      {/* Success Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background decorative elements */}

        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Main Content */}
            <div className="space-y-8 lg:col-span-2">
              {/* Main Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Let's Redefine <span className="text-[#E7C348]">Success</span>, Together
                </h2>
                <div className="w-20 h-1 bg-[#E7C348] mb-6"></div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Established with a passion for innovation, Sharim Solutions has grown into a leading provider of business solutions. Our journey is marked by a relentless pursuit of excellence and a steadfast commitment to our clients' success.
                </p>
              </div>

              {/* What Sets Us Apart */}
              <div className="bg-gradient-to-r from-[#E7C348]/10 to-transparent p-8 rounded-2xl border-l-4 border-[#E7C348]">
                <h3 className="text-2xl font-bold text-[#E7C348] mb-4">What Sets Us Apart</h3>
                <p className="text-lg text-white">
                  It's our ability to align with your vision, delivering innovative, results-driven solutions that create lasting impact and measurable success.
                </p>
              </div>

              {/* Your Vision, Our Blueprint */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Your Vision, Our Blueprint</h3>
                <p className="text-lg text-gray-300">
                  We don't just listen—we align. Every strategy begins with your goals, ensuring our solutions mirror your vision and drive your success.
                </p>
                
     
              </div>
            </div>

            {/* Right Column - Vertical Images */}
            <div className="relative space-y-6">
              {/* Top Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 transform transition-transform duration-700 hover:scale-105">
                <img 
                  src='/src/assets/1.jpg'
                  alt="Team Collaboration" 
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiMyQTJBMkEiLz4KICA8dGV4dCB4PSIzMDAiIHk9IjIwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRTdDMzQ4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U3VjY2VzcyBJbWFnZSAxPC90ZXh0Pgo8L3N2Zz4=";
                  }}
                />
              </div>

              {/* Bottom Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 transform transition-transform duration-700 hover:scale-105">
                <img 
                  src='/src/assets/team.jpg'
                  alt="Innovation at Work" 
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0�I0MDAiIGZpbGw9IiMyQTJBMkEiLz4KICA8dGV4dCB4PSIzMDAiIHk9IjIwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRTdDMzQ4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U3VjY2VzcyBJbWFnZSAyPC90ZXh0Pgo8L3N2Zz4=";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">


              {/* Results Card */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 mb-8">
                  <h4 className="text-xl font-bold text-[#E7C348] mb-4 text-center">Results You Can Measure, Success You Can Feel</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {resultsMetrics.map((metric) => (
                      <div key={metric.id} className="flex items-center justify-center space-x-2">
                        {metric.icon}
                        <span className="text-gray-300">{metric.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;