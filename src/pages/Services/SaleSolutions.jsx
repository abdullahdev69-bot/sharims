import React from "react";
import { Link } from "react-router-dom";
import {
  FiLayers,
  FiShoppingCart,
  FiGlobe,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";

const Sale = () => {
  const webServices = [
    {
      id: 1,
      title: "Smart Commerce",
      description:
        "Get extensive insight for smart decisions relative to your business strategy to gain maximum sales output.",
      icon: <FiLayers className="text-3xl text-[#E7C348]" />,
    },
    {
      id: 2,
      title: "Sales through Email",
      description:
        "Targeting the relevant audience after extensive research and developing effective communication channel through email to engage maximum prospects.",
      icon: <FiShoppingCart className="text-3xl text-[#E7C348]" />,
    },
    {
      id: 3,
      title: "Telesales",
      description:
        "Persuading the clients through telephone calls and maintaining trust among them.",
      icon: <FiGlobe className="text-3xl text-[#E7C348]" />,
    },
  ];

  const extraCards = [
    {
      id: 4,
      title: "Lead Generation",
      description:
        "Exploration of popular digital platforms and targeting specific audience according to business niche to develop sales Interest. Also, convert the lead into the final purchase.",
      icon: <FiGlobe className="text-3xl text-[#E7C348]" />,
    },
    {
      id: 5,
      title: " Lead Management",
      description:
        "Ensuring that every prospect got valued with a defined communication channel so that no one slip through.",
      icon: <FiBarChart2 className="text-3xl text-[#E7C348]" />,
    },
    {
      id: 6,
      title: "Effective Logistic Process",
      description:
        "Our sales team makes sure to keep all sales processes in one place to minimize delays in processing time and promptly make the right decisions.",
      icon: <FiLayers className="text-3xl text-[#E7C348]" />,
    },
  ];

  const socialCards = [
    {
      id: 7,
      title: "Appointment Setting",
      description:
        "Management of sales calendar with confirmed meetings with business prospects.",
      icon: <FiUsers className="text-3xl text-[#E7C348]" />,
    },
    {
      id: 8,
      title: "Digital Accounts Management",
      description:
        "Engaging the key digital accounts with a targeted message to ensure direct communication with prospects.",
      icon: <FiBarChart2 className="text-3xl text-[#E7C348]" />,
    },
  ];

  const renderCards = (cards, isSocial = false) => (
    <div
      className={`flex justify-center ${
        isSocial ? "flex-wrap gap-6" : ""
      }`}
    >
      <div
        className={`${
          isSocial
            ? "flex flex-col md:flex-row gap-6 justify-center"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full"
        }`}
      >
        {cards.map((service) => (
          <div
            key={service.id}
            className="bg-gray-900/60 backdrop-blur-md border border-gray-700 
                       rounded-[2rem_0_2rem_0] p-6 group 
                       hover:scale-105 transition-transform duration-300 ease-in-out
                       hover:border-[#E7C348]/50 hover:shadow-xl hover:shadow-[#E7C348]/20"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#E7C348]/10 rounded-full group-hover:bg-[#E7C348]/20 transition-colors duration-300">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-3 group-hover:text-[#E7C348] transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/src/assets/sale.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="px-8 py-6 rounded-2xl text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Sale <span className="text-[#E7C348]">Solution</span>
              </h1>
              <div className="w-24 h-1 bg-[#E7C348] mx-auto mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <img
            src="/src/assets/s.jpg"
            alt="Sales Solutions"
            className="w-full md:w-1/2 h-[55vh] object-cover rounded-[2rem_0_2rem_0] shadow-lg transform transition-transform duration-700 hover:scale-105"
          />
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#E7C348]">Sales Solution</span> Services
            </h2>
            <div className="w-24 h-1 bg-[#E7C348] mb-8 mx-auto md:mx-0"></div>
            <p className="text-lg text-gray-300 leading-relaxed">
              In today’s digital era, selling online is essential. At Sharim
              Solution, we combine innovation and expertise to deliver
              strategies that boost sales, enhance engagement, and improve brand
              presence. From personalized sales funnels to modern selling tools,
              we provide solutions that drive growth and customer loyalty.
            </p>
          </div>
        </div>
    

      {/* Benefits Section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-12 mb-20 px-6 mt-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#E7C348]">Sales Process</span>{" "}
          </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The sales team at Sharim Solution can handle complex and multi-technology projects. We design flexible and customized sales engagement models perfect to fulfil your business needs. Our team design the sales strategy based on the following benchmarks:
            </p>
          <div className="w-24 h-1 bg-[#E7C348] mb-8 mx-auto md:mx-0"></div>
        </div>
         <ul className="text-lg text-gray-300 space-y-3 leading-relaxed">
            <li> • Business Requirement</li>
            <li> • Extensive Business Analysis</li>
            <li> • Design & Development</li>
            <li> • Quality Assurance</li>
            <li> • Support and Maintenance</li> 
          </ul>
      </section>

      {/* What We Offer */}
      <section className="relative py-20 text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/web.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We <span className="text-[#E7C348]">Offer</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We handle complex, multi-technology projects. Our flexible and
            customized engagement models are designed to perfectly suit your
            business needs.
          </p>
        </div>
      </section>

      {/* Service Cards */}
     <div className="mt-16 mb-20 space-y-16 px-6">
        {renderCards(extraCards)}
        {renderCards(socialCards, true)} {/* Centered & Horizontal */}
        {renderCards(webServices)}
      </div>

            <section className="flex flex-col md:flex-row justify-center items-center gap-12 mb-20 px-6">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Benefits of Our <span className="text-[#E7C348]">Sales</span>{" "}
            Solution Services
          </h2>
          <div className="w-24 h-1 bg-[#E7C348] mb-8 mx-auto md:mx-0"></div>
          <ul className="text-lg text-gray-300 leading-relaxed">
            <li>🎯 Targeting the right audience</li>
            <li>🌟 Building brand credibility</li>
            <li>💬 High customer engagement</li>
            <li>📈 Consistent prospects pipeline</li>
            <li>⚡ Optimized conversion rates</li>
            <li>📊 Accurate sales reporting</li>
            <li>🤝 Customer loyalty</li>
          </ul>
        </div>
        <img
          src="/src/assets/sales3.jpg"
          alt="Benefits"
          className="w-full md:w-1/2 max-w-md rounded-[2rem_0_2rem_0] shadow-lg transform transition-transform duration-700 hover:scale-105"
        />
      </section>

     <section className="relative py-20 bg-black text-white"> 
      {/* Background with dark overlay */} 
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/image03.jpg')" }} >
       <div className="absolute inset-0 bg-black/90">
       </div> 
       </div> 
       <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"> 
        {/* Floating Image */} 
 {/* Text */} <div className="order-1 md:order-2">
             <h2 className="text-4xl md:text-5xl font-bold mb-6"> 
              {" "} 
              <span className="text-[#E7C348]">Why</span> experience sales services of Sharim Solution?
              </h2> 
              <p className="text-lg text-gray-300 leading-relaxed"> Sharim Solution believes in recruiting highly experienced and skilled team members intended to remain outcome-focused. Our sales solution services are the best in town considering proven and trusted sales techniques. We remain transparent with our clients in all respects. We strive to go beyond the expectations of our respected clients resulting in customer delight. With experienced sales staff, we provide sales solution services according to the needs of the business.
                </p> 
                </div> 
                </div> 
                </section>

                 <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 mt-10">
          <img
            src="/src/assets/web.jpg"
            alt="Sales Solutions"
            className="w-full md:w-1/2 h-[35vh] object-cover rounded-[2rem_0_2rem_0] shadow-lg transform transition-transform duration-700 hover:scale-105"
          />
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
             Serving the <span className="text-[#E7C348]">Major</span>
            </h2>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
             Industries
            </h2>
            <div className="w-25 h-1 bg-[#E7C348] mb-8 mx-auto md:mx-0"></div>
             <p className="text-lg text-gray-300 leading-relaxed"> We are extensively delivering our best sales solution services to all the major industries. Here are some of them: </p>
            <ul className="text-lg text-gray-300 space-y-3 leading-relaxed mt-5">
            <li> • Health care</li>
            <li> • Travel & Tourism</li>
            <li> • E-Commercet</li>
            <li> • Social Networking</li>
            <li> • Banking & Finance</li> 
            <li> • Media & Entertainment</li>
          </ul>
          </div>
        </div>

        <section className="relative py-16 bg-gradient-to-r from-gray-900 to-gray-900 rounded-2xl border border-gray-900 text-center mx-6 mb-10 mt-10">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to <span className="text-[#E7C348]">Boost</span> Your Sales?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our sales solutions can transform your business and drive sustainable growth.
            </p>
            <Link to="/contact">
            <button className="px-8 py-3 bg-[#E7C348] text-gray-900 font-bold rounded-lg hover:bg-[#d4af37] transition-colors duration-300 text-lg">
              Get Started Today
            </button></Link>
          </div>
        </section>

        </section>
    </>
  );
};

export default Sale;
