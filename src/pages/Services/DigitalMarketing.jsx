import React from 'react';
import { FiLayers, FiShoppingCart, FiGlobe, FiUsers, FiBarChart2, FiTarget, FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  const webServices = [
    {
      id: 1,
      title: 'Search Engine Optimization (SEO)',
      description:
        'SEO is a highly effective way to attain organic traffic from popular search engines and enhance sales online. Sharim Solution offers Organic Search, On-page SEO, Link Building, Keyword Research, and Activity Reports.',
      icon: <FiLayers className="text-3xl text-[#E7C348]" />,
    },
    {
      id: 2,
      title: 'Pay Per Click (PPC) Management',
      description:
        'PPC offers immediate results to generate leads & sales for your business. We deliver Paid Search Ads, Display Ads, Remarketing, Social Advertising, and Video Advertising tailored to your brand needs.',
      icon: <FiShoppingCart className="text-3xl text-[#E7C348]" />,
    },
    {
      id: 3,
      title: 'Global Reach & Online Presence',
      description:
        'We ensure your brand reaches a worldwide audience through strategic online campaigns, expanding your visibility beyond local markets.',
      icon: <FiGlobe className="text-3xl text-[#E7C348]" />,
    },
  ];

  const extraCards = [
    {
      id: 4,
      title: 'Website Analysis',
      description:
        'In-depth analysis of the website to find out the stage of SEO friendliness of the website. Also, a result-oriented strategy for website search optimization must be developed.',
      icon: <FiGlobe className="text-3xl text-[#E7C348]" />,
    },
    {
      id: 5,
      title: 'On-Page SEO',
      description:
        'We craft your website that makes it highly accessible to search engines, for convenient indexing and ranking, optimizing each page of your website for its significant keywords.',
      icon: <FiBarChart2 className="text-3xl text-[#E7C348]" />,
    },
    {
      id: 6,
      title: 'Link Building',
      description:
        'Link building is vital for top rankings in every search engine. We deliver quality link-building services to develop your profile for higher search rankings.',
       icon: <FiLayers className="text-3xl text-[#E7C348]" />,
    },
  ];

  const extraCard = [
    {
      id: 4,
      title: 'Social Media Management',
      description:
        'Our social media professionals will effectively communicate with your current and potential clients on Facebook, Instagram, Twitter, LinkedIn, and other social media platforms to escalate traffic on your website while attaining great ROI in influencing your target audience.',
      icon: <FiUsers className="text-3xl text-[#E7C348]" />,
    },
    {
      id: 5,
      title: 'Social Media Contests',
      description:
        'Contests on Facebook, Twitter, or other social media platforms can rapidly boost the eminent traffic to your website. Our digital marketing specialists will determine the best kind of contest to conduct on the most appropriate and popular social media platforms.',
      icon: <FiBarChart2 className="text-3xl text-[#E7C348]" />,
    },
    {
      id: 6,
      title: 'Setup & Custom Profile Design',
      description:
        'We assist you in crafting social media profiles, for your business, tailored with high-end images, graphics, and attractive page designs to gather positive responses from your potential customers over a competitor brand.',
      icon: <FiTarget className="text-3xl text-[#E7C348]" />,
    },
  ];

  const renderCards = (cards) => (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {cards.map((service) => (
          <div
            key={service.id}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6 
                       group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#E7C348]/20
                       relative overflow-hidden"
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
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/src/assets/image03.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/85"></div>
        </div>
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            Digital <span className="text-[#E7C348]">Marketing</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-6 animate-fade-in delay-150">
            Elevate your brand with our comprehensive digital marketing solutions
          </p>
          <div className="w-24 h-1 bg-[#E7C348] mx-auto mt-4 animate-grow-width"></div>
        </div>
        
       
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#E7C348]/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 -right-20 w-48 h-48 bg-[#E7C348]/5 rounded-full blur-xl"></div>
          
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 rounded-2xl transform rotate-3"></div>
              <img
                src="/src/assets/soc.webp"
                alt="Innovative Web Development"
                className="rounded-2xl w-full h-[40vh] object-cover max-w-md shadow-lg rounded-[2rem_0_2rem_0] relative z-10 transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-[#E7C348]">Digital Marketing</span> Services
              </h2>
              <div className="w-24 h-1 bg-[#E7C348] mb-8"></div>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Sharim Solution delivers professional digital marketing services to provide you with the best digital experience. Our proven strategies help highlight your brand, build effective communication channels, and engage customers.
              </p>
              <Link to='/contact'>
              <button className="px-6 py-3 bg-gradient-to-r from-[#E7C348] to-[#d4af37] text-gray-900 font-semibold rounded-lg flex items-center group hover:shadow-lg hover:shadow-[#E7C348]/30 transition-all duration-300">
                Get Started <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button></Link>
            </div>
          </div>
                   
          {/* Main Service Cards */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Core Services</h3>
              <div className="w-16 h-1 bg-[#E7C348] mx-auto"></div>
            </div>
            {renderCards(webServices)}
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16 mt-12">
            {/* Text First */}
            <div className="w-full md:w-1/2 text-left order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Brand <span className="text-[#E7C348]">Monitoring</span>
              </h2>
              <div className="w-24 h-1 bg-[#E7C348] mb-8"></div>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Monitoring the opinions of your followers, targeted customers and other
                audience on social media platforms, relevant to your business is vital to
                social media marketing. Our expert digital marketers enhance your
                business' reputation by identifying every minute detail of your business
                to explore the current perception of your clients and potential customers
                about you and your industry.
              </p>
              <ul className="text-gray-300 space-y-2">
                {['Sentiment Analysis', 'Competitor Tracking', 'Trend Identification', 'Reputation Management'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FiChevronRight className="text-[#E7C348] mr-2" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Second */}
            <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 relative">
              <div className="absolute -inset-4 rounded-2xl transform -rotate-3"></div>
              <img
                src="/src/assets/brand.jpg"
                alt="Brand Monitoring"
                className="rounded-2xl w-full max-w-md shadow-lg rounded-[2rem_0_2rem_0] relative z-10 transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Social Media Services</h3>
              <div className="w-16 h-1 bg-[#E7C348] mx-auto"></div>
            </div>
            {renderCards(extraCard)}
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="relative py-20 text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: "url('/src/assets/web.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Social Media <span className="text-[#E7C348]">Marketing</span>
          </h2>
          <div className="w-16 h-1 bg-[#E7C348] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Our effective social media marketing strategy assists in the rapid growth of a loyal audience. We manage your digital presence and develop a strong communication channel to engage with your target audience on popular social media platforms.
          </p>
        </div>
      </section>

      {/* Extra Service Cards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">SEO Services</h3>
            <div className="w-16 h-1 bg-[#E7C348] mx-auto"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
              Our comprehensive SEO solutions are designed to boost your visibility and drive organic growth
            </p>
          </div>
          {renderCards(extraCards)}
          
          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to boost your online presence?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our digital marketing services can help your business grow
            </p>
            <Link to='/contact'>
            <button className="px-8 py-4 bg-gradient-to-r from-[#E7C348] to-[#d4af37] text-gray-900 font-bold rounded-lg text-lg hover:shadow-lg hover:shadow-[#E7C348]/40 transition-all duration-300 transform hover:-translate-y-1">
              Get Free Consultation
            </button></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketing;