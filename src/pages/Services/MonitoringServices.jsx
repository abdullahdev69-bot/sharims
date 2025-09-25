import React, { useState, useEffect, useRef } from 'react';
import {FaTachometerAlt } from "react-icons/fa";
import { 
  FiChevronRight, 
  FiShield, 
  FiTrendingUp, 
  FiClock, 
  FiBarChart2,
  FiVideo,
  FiActivity,
  FiBarChart,
  FiBell,
  FiCamera,
  FiWifi,
  FiEye
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Monitoring = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dashboardVisible, setDashboardVisible] = useState(false);
  const [animated, setAnimated] = useState(false);
  
  
  const statsRef = useRef(null);
  const dashboardRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setDashboardVisible(true);
          setAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (dashboardRef.current) observer.observe(dashboardRef.current);

    return () => {
      if (dashboardRef.current) observer.unobserve(dashboardRef.current);
    };
  }, [animated]);

  const features = [
    { 
      title: "Real-Time Video Feed", 
      description: "Live video feed from cameras installed at your premises.",
      icon: <FiVideo className="text-2xl" />,
      details: "Our high-definition cameras provide crystal-clear live streaming with minimal latency, ensuring you never miss a moment."
    },
    { 
      title: "Motion Detection", 
      description: "Detect suspicious movements and trigger alerts in real-time.",
      icon: <FiActivity className="text-2xl" />,
      details: "Advanced algorithms distinguish between normal activity and potential threats, reducing false alarms while maintaining security."
    },
    { 
      title: "Video Analytics", 
      description: "Advanced AI-based analytics to monitor and detect patterns.",
      icon: <FiBarChart className="text-2xl" />,
      details: "Machine learning algorithms analyze video data to identify patterns, recognize faces, and detect unusual behavior automatically."
    },
    { 
      title: "Customizable Alerts", 
      description: "Set up alerts based on your specific security requirements.",
      icon: <FiBell className="text-2xl" />,
      details: "Receive instant notifications via email, SMS, or mobile app based on customizable triggers and sensitivity levels."
    },
    { 
      title: "Camera Installation", 
      description: "Professional installation ensuring full coverage and reliability.",
      icon: <FiCamera className="text-2xl" />,
      details: "Our expert technicians design and install camera systems tailored to your space, ensuring optimal coverage and performance."
    },
    { 
      title: "Video Feed Transmission", 
      description: "Secure transmission of video feeds across devices.",
      icon: <FiWifi className="text-2xl" />,
      details: "Encrypted video streams ensure your footage remains private and secure while accessible on any authorized device."
    },
    { 
      title: "Real-Time Monitoring", 
      description: "Continuous monitoring of premises with advanced AI support.",
      icon: <FiEye className="text-2xl" />,
      details: "24/7 surveillance with AI-assisted monitoring that flags potential issues before they become problems."
    },
    { 
      title: "Incident Response", 
      description: "Immediate response system for security breaches or incidents.",
      icon: <FiShield className="text-2xl" />,
      details: "Integrated response protocols that can trigger alarms, notify authorities, and provide evidence collection automatically."
    },
  ];

  const extraCards = [
    {
      id: 4,
      title: "Improved Uptime",
      description: "Minimize downtime and ensure maximum availability for your users",
      icon: <FiClock className="text-3xl text-[#E7C348]" />,
    },
    {
      id: 5,
      title: "Enhanced Performance",
      description: "Optimize your website's speed, responsiveness, and overall user experience",
      icon: <FaTachometerAlt className="text-3xl text-[#E7C348]" />,
    },
    {
      id: 6,
      title: "Increased Security",
      description: "Protect your website from cyber threats, malware, and vulnerabilities",
      icon: <FiShield className="text-3xl text-[#E7C348]" />,
    },
  ];

  const extraCard = [
    {
      id: 7,
      title: "Faster Issue Resolution",
      description: "Identify and resolve issues quickly, reducing the impact on your business",
      icon: <FiTrendingUp className="text-3xl text-[#E7C348]" />,
    },
    {
      id: 8,
      title: "Data-Driven Insights",
      description: "Make informed decisions with detailed metrics and analytics",
      icon: <FiBarChart2 className="text-3xl text-[#E7C348]" />,
    },
  ];

  const renderCards = (cards) => (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl w-full">
        {cards.map((service) => (
          <div
            key={service.id}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem_0_2rem_0] 
                       border border-gray-700 p-6 group hover:scale-105 
                       transition-all duration-300 hover:shadow-lg hover:shadow-[#E7C348]/20
                       flex flex-col h-full relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full group-hover:bg-[#E7C348]/20 group-hover:rotate-12 transition-all duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3 group-hover:text-[#E7C348] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base flex-grow">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Function to handle dropdown toggle
  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('/src/assets/mon.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/85"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="px-8 py-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Monitoring <span className="text-[#E7C348]">Services</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-6">
              Advanced surveillance solutions for complete peace of mind
            </p>
            <div className="w-24 h-1 bg-[#E7C348] mx-auto mt-4"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 md:py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Decorative elements */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
              <div className="absolute -inset-4  rounded-[2rem_0_2rem_0] transform rotate-3"></div>
              <img
                src="/src/assets/mo.jpg"
                alt="Monitoring Services"
                className="w-full max-w-md h-auto object-cover rounded-[2rem_0_2rem_0] shadow-lg relative z-10 transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Monitoring <span className="text-[#E7C348]">Services</span> 
              </h2>
              <div className="w-24 h-1 bg-[#E7C348] mb-6 md:mb-8"></div>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                In today's digital landscape, having a website is crucial for businesses, organizations, and individuals alike. However, simply having a website is not enough. Ensuring that your online presence is always available, secure, and performing optimally is vital to your success. This is where monitoring services come in.
              </p>
              <div className="bg-gray-800/40 p-4 rounded-lg border-l-4 border-[#E7C348]">
                <p className="text-[#E7C348] font-semibold">Our monitoring services include:</p>
                <ul className="text-gray-300 mt-2 space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#E7C348] rounded-full mr-2"></span>
                    24/7 Website Availability Monitoring
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#E7C348] rounded-full mr-2"></span>
                    Performance and Speed Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#E7C348] rounded-full mr-2"></span>
                    Security Threat Detection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Monitoring Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The<span className="text-[#E7C348]"> Importance</span> of Monitoring Services
              </h2>
              <div className="w-24 h-1 bg-[#E7C348] mb-8"></div>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Monitoring services provide real-time insights into your website's health, enabling you to identify and resolve issues before they impact your business. With monitoring services, you can:
              </p>
              <ul className="text-lg text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-[#E7C348] mr-2 text-xl">•</span>
                  Ensure your website is always available to users
                </li>
                <li className="flex items-start">
                  <span className="text-[#E7C348] mr-2 text-xl">•</span>
                  Optimize your website's speed, responsiveness, and overall user experience
                </li>
                <li className="flex items-start">
                  <span className="text-[#E7C348] mr-2 text-xl">•</span>
                  Protect your website from cyber threats, malware, and vulnerabilities
                </li>
                <li className="flex items-start">
                  <span className="text-[#E7C348] mr-2 text-xl">•</span>
                  Receive instant alerts for downtime, slow loading speeds, and other critical issues
                </li>
                </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center relative">
              <div className="absolute -inset-4 rounded-[2rem_0_2rem_0] transform -rotate-3"></div>
              <img
                src="/src/assets/monitoring3.jpg"
                alt="Monitoring Services Importance"
                className="rounded-2xl w-full max-w-md shadow-lg rounded-[2rem_0_2rem_0] relative z-10 transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section with proper spacing */}
      <section className="relative py-20 text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{ backgroundImage: "url('/src/assets/image02.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#E7C348]">Benefits</span> of Monitoring Services
          </h2>
          <div className="w-16 h-1 bg-[#E7C348] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Our monitoring services offer numerous benefits, including:
          </p>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-[#E7C348]/20">
              <h3 className="text-xl font-bold text-[#E7C348] mb-3">Proactive Issue Detection</h3>
              <p className="text-gray-300">Identify and resolve problems before they affect your users</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-[#E7C348]/20">
              <h3 className="text-xl font-bold text-[#E7C348] mb-3">Improved Performance</h3>
              <p className="text-gray-300">Optimize your website speed and user experience</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-[#E7C348]/20">
              <h3 className="text-xl font-bold text-[#E7C348] mb-3">Enhanced Security</h3>
              <p className="text-gray-300">Protect against cyber threats and vulnerabilities</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-[#E7C348]/20">
              <h3 className="text-xl font-bold text-[#E7C348] mb-3">24/7 Monitoring</h3>
              <p className="text-gray-300">Round-the-clock surveillance of your digital assets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Card Sections */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12 md:mb-16">{renderCards(extraCards)}</div>
          
          {/* Centered extraCard section */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl w-full">
              {extraCard.map((service) => (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem_0_2rem_0] 
                             border border-gray-700 p-6 group hover:scale-105 
                             transition-all duration-300 hover:shadow-lg hover:shadow-[#E7C348]/20
                             flex flex-col h-full relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-[#E7C348]/10 rounded-full group-hover:bg-[#E7C348]/20 group-hover:rotate-12 transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-3 group-hover:text-[#E7C348] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base flex-grow">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CCTV Monitoring Section */}
    <section className="bg-black py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            CCTV Monitoring With{" "}
            <span className="text-[#E7C348]">AI Integrated</span> Features
          </h2>
          <div className="w-24 h-1 bg-[#E7C348] mx-auto mt-4 mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Our advanced AI-powered CCTV solutions provide intelligent monitoring and real-time threat detection for comprehensive security.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Dropdown */}
          <div className="lg:hidden mb-6">
            <select
              value={activeFeature}
              onChange={(e) => setActiveFeature(Number(e.target.value))}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
            >
              {features.map((feature, idx) => (
                <option key={idx} value={idx}>
                  {feature.title}
                </option>
              ))}
            </select>
          </div>

          {/* Feature Selection Sidebar (Desktop Only) */}
          <div className="hidden lg:block lg:w-1/3">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                AI-Powered Features
              </h3>
              <div className="space-y-3">
                {features.map((feature, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFeature(idx)}
                    className={`w-full flex items-center p-4 rounded-lg transition-all duration-300 ${
                      activeFeature === idx
                        ? "bg-[#E7C348]/10 text-[#E7C348] border border-[#E7C348]/30"
                        : "bg-gray-700/50 text-gray-300 hover:bg-gray-700/70 hover:text-white"
                    }`}
                  >
                    <div className="mr-3 p-2 bg-[#E7C348]/10 rounded-full">
                      {feature.icon}
                    </div>
                    <span className="font-medium text-left flex-1">
                      {feature.title}
                    </span>
                    <FiChevronRight
                      className={`transition-transform ${
                        activeFeature === idx ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Details */}
          <div className="lg:w-2/3">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#E7C348]/10 rounded-full mr-4">
                  {features[activeFeature].icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {features[activeFeature].title}
                </h3>
              </div>

              <p className="text-gray-300 mb-6 text-lg">
                {features[activeFeature].description}
              </p>

              <p className="text-gray-400 mb-8">
                {features[activeFeature].details}
              </p>

              <div className="bg-gray-700/30 p-4 rounded-lg border-l-4 border-[#E7C348]">
                <h4 className="text-[#E7C348] font-semibold mb-2">
                  Key Benefits:
                </h4>
                <ul className="text-gray-300 space-y-4">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#E7C348] rounded-full mr-2"></span>
                    Enhanced security and peace of mind
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#E7C348] rounded-full mr-2"></span>
                    Reduced false alarms with AI precision
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#E7C348] rounded-full mr-2"></span>
                    Remote access from any device
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our monitoring services can protect your assets and give you peace of mind.
          </p>
          <Link to='/contact'>
            <button className="px-8 py-4 bg-gradient-to-r from-[#E7C348] to-[#d4af37] text-gray-900 font-bold rounded-lg text-lg hover:shadow-lg hover:shadow-[#E7C348]/40 transition-all duration-300 transform hover:-translate-y-1">
              Reach Us
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Monitoring;