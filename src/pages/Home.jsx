import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MapComponent from "./MapComponent";

const Home = () => {
  const processSteps = [
    {
      number: "01",
      title: "Research",
      description: "Every great project begins with understanding. We dive deep into your needs, market trends, and objectives to build a solid foundation for success.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Develop",
      description: "Transforming insights into action, we craft innovative solutions tailored to your business, ensuring seamless functionality and user-focused design.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Testing",
      description: "Excellence demands precision. We rigorously test every feature, leaving no room for errors, and ensuring your solution performs flawlessly.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Launch",
      description: "It's time to shine! With everything perfected, we launch your project, delivering impactful results that elevate your business to the next level.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <>
<section className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[95vh]">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
    style={{ backgroundImage: "url('/src/assets/hero.jpeg')" }}
  >
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent z-10"></div>
  </div>

  {/* Content */}
  <div className="relative z-20 h-full flex items-center justify-center lg:justify-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
   <div className="bg-gradient-to-br from-black/80 to-gray-900/90 p-6 sm:p-8 md:p-10 lg:p-12 
                max-w-lg sm:max-w-xl lg:max-w-2xl text-white rounded-xl shadow-2xl shadow-black/50 
                border-l-4 border-[#E7C348] mt-18 sm:mt-16 lg:mt-28">

      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight">
        Empowering <span className="text-[#E7C348]">Business Success</span>
      </h1>

      {/* Paragraph */}
      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed opacity-90">
        At Sharim Solutions, we fuse innovation with expertise to supercharge
        your growth. From dynamic web development to robust cybersecurity
        protocols and game-changing sales strategies—we deliver solutions that
        ignite success. Let's build the future, together.
      </p>

      {/* Button */}
      <div className="flex items-center flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="w-16 sm:w-20 h-1 bg-[#E7C348] sm:mr-4"></div>
       <Link to="contact">
  <button
    className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#E7C348] text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-lg"
  >
    Get Started
  </button>
</Link>
      </div>
    </div>
  </div>
</section>


      {/* Services Section - Removed individual background */}
      <section id="services" className="relative py-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#E7C348]/5 rounded-full -translate-y-1/2 translate-x-1/2 [clip-path:inset(50%_0_0_0)]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E7C348]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#E7C348]">Services</span>
            </h2>
            <div className="w-24 h-1 bg-[#E7C348] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive solutions to empower your business in the digital world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Development Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 p-6 border border-gray-700 hover:border-[#E7C348]/30 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E7C348]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#E7C348]/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#E7C348]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Web Development</h3>
                  <p className="text-gray-300">
                    We have considerable experience in developing inventive web products. We deliver an extensive range of web development services consuming advanced technology innovations.
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <a href="/services/webdevelopment" className="inline-flex items-center text-[#E7C348] font-medium group-hover:underline">
                    VIEW MORE
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Cyber Security Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 p-6 border border-gray-700 hover:border-[#E7C348]/30 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E7C348]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#E7C348]/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#E7C348]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Cyber Security</h3>
                  <p className="text-gray-300">
                    We deliver cybersecurity services and manages cyber risk on behalf of our esteemed clients. We are our client's trusted partner bringing advanced proficiency in the current cyber security threat.
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <a href="/services/cybersecurity" className="inline-flex items-center text-[#E7C348] font-medium group-hover:underline">
                    VIEW MORE
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Sales Solutions Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 p-6 border border-gray-700 hover:border-[#E7C348]/30 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E7C348]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#E7C348]/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#E7C348]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Sales Solutions</h3>
                  <p className="text-gray-300">
                    The sales team at <strong>Sharim Solution</strong> can handle complex and multi-technology projects. We design flexible and customized sales engagement models perfect to fulfil your business needs.
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <a href="/services/salesolution" className="inline-flex items-center text-[#E7C348] font-medium group-hover:underline">
                    VIEW MORE
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section - Removed individual background */}
      <section className="relative py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Redefining <span className="text-[#E7C348]">Excellence</span> in Business Innovation
                </h2>
                <div className="w-20 h-1 bg-[#E7C348] mb-6"></div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Why follow when you can lead? At Shairm Solutions, we craft innovative strategies and deliver transformative solutions that position your business at the forefront of success. Let's turn your vision into reality and set new industry benchmarks together.
                </p>
              </div>
              
              {/* Experience */}
              <div className="bg-gradient-to-r from-[#E7C348]/10 to-transparent p-6 rounded-xl border-l-4 border-[#E7C348]">
                <p className="text-lg text-white font-semibold">
                  <span className="text-[#E7C348]">✓</span> We have <span className="text-[#E7C348]">05+ years</span> of experience. We offer awesome digital agency solution!
                </p>
              </div>
              
              {/* CEO Info */}
              <div className="flex items-center space-x-4 p-6 bg-gray-800/30 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E7C348] to-amber-600 flex items-center justify-center text-2xl font-bold text-gray-900">
                  SB
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Shahrukh Babar</h3>
                  <p className="text-[#E7C348]">Chief Executive Officer</p>
                </div>
              </div>
              
              {/* Contact Callout */}
           
            </div>
            
            {/* Right Content - Image and Skills */}
            <div className="relative">
              {/* Image Container */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                <img 
                  src="/src/assets/1.jpg" 
                  alt="Shahrukh Babar - CEO at Shairm Solutions" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9rZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiMzMzMzMzMiLz4KICA8Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjgwIiBmaWxsPSIjRTdDMzQ4Ii8+CiAgPHRleHQgeD0iMzAwIiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DRU8gSW1hZ2U8L3RleHQ+CiAgPHRleHQgeD0iMzAwIiB5PSIyNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2NjYyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UGxhY2Vob2xkZXI8L3RleHQ+Cjwvc3ZnPg==";
                  }}
                />
              </div>
              
              {/* Skills Section */}
       <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Skills</h3>

      <div className="space-y-6">
        {/* Management Skills */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-semibold text-[#E7C348]">Management Skills</h4>
            <span className="text-white font-bold">90%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-[#E7C348] to-amber-600 h-3 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "90%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }} // triggers when 50% visible
            />
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-semibold text-[#E7C348]">Professional Skills</h4>
            <span className="text-white font-bold">95%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-[#E7C348] to-amber-600 h-3 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "95%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-[#E7C348]/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#E7C348]/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

          <section className="relative py-20 overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-[#E7C348]/5 rounded-full "></div>
  <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#E7C348]/5 rounded-full "></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Process of Turning <span className="text-[#E7C348]">Ideas into Reality</span>
          </h2>
          <div className="w-24 h-1 bg-[#E7C348] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our structured approach ensures your vision transforms into a successful, market-ready solution
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connecting line between steps */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-700 group-hover:bg-[#E7C348] transition-colors duration-500 z-0"></div>
              )}
              
              <div className="relative z-10 h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 group-hover:border-[#E7C348]/50 transition-all duration-500 group-hover:scale-105">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#E7C348] rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 shadow-lg">
                  {step.number}
                </div>
                
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-xl bg-[#E7C348]/10 flex items-center justify-center mb-6 group-hover:bg-[#E7C348]/20 transition-colors duration-500">
                  <div className="text-[#E7C348]">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E7C348] transition-colors duration-500">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Hover effect indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#E7C348] transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center space-x-4 bg-gradient-to-r from-gray-800 to-gray-900 px-8 py-4 rounded-2xl border border-gray-700">
            <div className="w-12 h-12 rounded-full bg-[#E7C348]/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#E7C348]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-lg text-white">
              Ready to transform your idea into reality? <span className="text-[#E7C348] font-semibold">Let's get started!</span>
            </p>
          <Link to="/contact">
            <button className="px-6 py-2 bg-[#E7C348] text-gray-900 font-semibold rounded-lg hover:bg-amber-500 transition-colors duration-300">
              Start Project
            </button>
           </Link>
          </div>
        </div>
      </div>
    </section>

         <section id="contact" className="relative py-20 overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/src/assets/1.jpg')" }}
  >
    <div className="absolute inset-0 bg-black/80"></div>
  </div>
  
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      {/* Left Column - Contact Information */}
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact us for <span className="text-[#E7C348]">further information</span>
          </h2>
          <div className="w-20 h-1 bg-[#E7C348] mb-6"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Have a question on idea, or simply want to explore how Shorim Solutions can help transform your business? 
            Let's chat! Our team is ready to provide answers, share insights, and create solutions tailored just for you.
          </p>
        </div>

        {/* Company Information */}
        <div className="bg-gradient-to-r from-gray-900 p-8 rounded-2xl border border-gray-600 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-[#E7C348] mb-6">Sharim Solutions</h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#E7C348]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#E7C348]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Location #1</p>
                <p className="text-gray-300">DHA Phase 1, Islamabad, Pakistan</p>
                <p className="text-white font-semibold">Location #2</p>
                <p className="text-gray-300">1100 King St W, Toronto ON M6K 0C6, Canada</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#E7C348]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#E7C348]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Phone Numbers</p>
                <p className="text-gray-300">(+1) 647 6004145 (Primary)</p>
                <p className="text-gray-300">(+92) 322 9554145 (Secondary)</p>
                
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#E7C348]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#E7C348]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Email Address</p>
                <p className="text-gray-300">hr@sharims.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-gradient-to-r from-[#E7C348]/20 to-transparent p-6 rounded-2xl border-l-4 border-[#E7C348] backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold text-[#E7C348]">4.8/5</div>
            <div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#E7C348]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mt-1">Based on 15+ customer reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Map */}
      <div className="relative">
        <div className="bg-gradient-to-r from-gray-900 rounded-2xl p-6 border border-gray-700 shadow-2xl h-full">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Location</h3>
          
          {/* Map Container */}
          <div className="relative rounded-xl overflow-hidden h-96 border border-gray-600">
            <MapComponent />
          </div>

          {/* Map Legend */}
          <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-[#E7C348] rounded-full"></div>
              <span className="text-white text-sm">Our office location</span>
            </div>
            <p className="text-gray-300 text-sm mt-2">
              Visit us at our headquarters in the heart of DHA Phase 1, Islamabad, or our secondary office nearby.
            </p>
          </div>
               <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-[#E7C348] rounded-full"></div>
              <span className="text-white text-sm">Our office location</span>
            </div>
            <p className="text-gray-300 text-sm mt-2">
              Visit us at our headquarters at 1100 King St W, Toronto, ON M6K 0C6, Canada
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Business Hours */}
    <div className="mt-12 bg-gradient-to-r from-gray-900 p-8 rounded-2xl border border-gray-600 backdrop-blur-sm">
      <h3 className="text-3xl font-bold text-[#E7C348] mb-6 text-center">Business Hours</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <p className="text-white font-semibold">Monday - Friday</p>
          <p className="text-gray-300">4:00 PM - 5:00 AM</p>
        </div>
        <div className="text-center">
          <p className="text-white font-semibold">Saturday</p>
          <p className="text-gray-300">Closed</p>
        </div>
        <div className="text-center">
          <p className="text-white font-semibold">Sunday</p>
          <p className="text-gray-300">Closed</p>
        </div>
        <div className="text-center">
          <p className="text-white font-semibold">Emergency Support</p>
          <p className="text-gray-300">24/7 Available</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;