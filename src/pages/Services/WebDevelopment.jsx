import React from "react";
import { FiLayers, FiShoppingCart, FiGlobe, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

const CheckIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const webServices = [
  {
    id: 1,
    title: "Custom Web Applications",
    description:
      "Secure, responsive, and effective custom web applications designed for all devices and platforms with fully integrated development procedures.",
    icon: <FiLayers className="text-3xl text-[#E7C348]" />,
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    description:
      "Exceptional e-commerce stores with reliable integration to your tech stack and third-party tools, delivering unmatched performance.",
    icon: <FiShoppingCart className="text-3xl text-[#E7C348]" />,
  },
  {
    id: 3,
    title: "Java Services",
    description:
      "Innovative, cloud-ready Java solutions from small-scale applications to comprehensive Java-based architectures.",
    icon: <FiGlobe className="text-3xl text-[#E7C348]" />,
  },
];

const offerItems = [
  "Customer-facing web applications",
  "Internal management systems",
  "E-commerce stores with AR features",
  "Top-quality applications with transparent processes",
];

const detailsItems = [
  {
    title: "Reliable & Prompt Delivery",
    description:
      "Incorporating the agile approach, we keep our clients well informed. The structured delivery process and cost-effective engagements are specially intended to match your goals, schedule, and budget.",
  },
  {
    title: "Professional Web Designers & Developers",
    description:
      "Our developers have been designing and developing websites for more than 15 years. They are well-trained, certified, and experienced in developing a variety of web platforms.",
  },
  {
    title: "Transparency, Collaborative, Strong Communication",
    description:
      "Sharim Solution retains complete transparency in every aspect of the project and strong communication from day one. We remain available at every stage and persistently update you on the progress of the project.",
  },
  {
    title: "Complete Client Satisfaction, Our utmost Priority",
    description:
      "We possess a team of dedicated account manager, project manager and monitoring specialists. We continuously analyse the performance of our client's project, the status of which goes directly to our CEO.",
  },
];

const WebDev = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/src/assets/about-us.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/85"></div>
        </div>
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Web <span className="text-[#E7C348]">Development</span>
          </h1>
          <div className="w-24 h-1 bg-[#E7C348] mx-auto mb-8"></div>
       
        </div>
      </section>

      {/* Exceptional Services */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            {/* Left Image */}
            <div className="w-full md:w-1/2 relative">
              <img
                src="/src/assets/web.jpg"
                alt="Innovative Web Development"
                className="rounded-2xl w-full max-w-md shadow-lg rounded-[2rem_0_2rem_0] transform transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Right Text */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-[#E7C348]">Exceptional</span> Services
              </h2>
              <div className="w-24 h-1 bg-[#E7C348] mb-8"></div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Sharim Solutions has considerable experience in developing innovative web
                products. We deliver an extensive range of web development services using
                advanced technology innovations.
              </p>
            </div>
          </div>

          {/* Innovative Web Development + We Offer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Innovative <span className="text-[#E7C348]">Web Development</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Having years of experience with deep intelligent latest programming skills
                and methodologies, we build your website incorporating the latest
                development innovations.
              </p>
              <div className="flex items-center space-x-4 mt-8 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#E7C348]/30 transition-colors duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-[#E7C348] rounded-full shadow-lg">
                  <span className="text-2xl font-bold text-gray-900">5+</span>
                </div>
                <div className="text-white">
                  <p className="font-semibold">Years of experience</p>
                  <p className="text-gray-300">Sharims Web Development solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#E7C348]/5">
              <h4 className="text-xl font-bold text-[#E7C348] mb-6 text-center">We Offer</h4>
              <ul className="space-y-4">
                {offerItems.map((text, i) => (
                  <li key={i} className="flex items-start group">
                    <span className="flex-shrink-0 mt-1 mr-3 text-[#E7C348] transform group-hover:scale-110 transition-transform duration-200">
                      <CheckIcon />
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Web Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {webServices.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6 group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#E7C348]/10 flex flex-col"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#E7C348]/10 rounded-full group-hover:bg-[#E7C348]/20 transition-colors duration-300 group-hover:rotate-12 transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-3 group-hover:text-[#E7C348] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center flex-grow">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customized Web Development for Enterprises */}
      <section className="relative py-20 bg-black text-white overflow-hidden"> 
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/image03.jpg')" }} >
          <div className="absolute inset-0 bg-black/90"></div> 
        </div> 
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Floating Image */} 
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#E7C348] to-transparent opacity-20 rounded-2xl rounded-[2rem_0_2rem_0] blur-lg"></div>
            <img 
              src="/src/assets/java.jpg" 
              alt="Enterprise Web Dev" 
              className="rounded-2xl shadow-lg rounded-[2rem_0_2rem_0] relative transform transition-transform duration-700 hover:scale-105" 
            /> 
          </div>
          
          {/* Text */} 
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6"> 
              Customized Web Development for{" "} 
              <span className="text-[#E7C348]">Enterprises</span> 
            </h2> 
            <p className="text-lg text-gray-300 leading-relaxed mb-6"> 
              Incorporating innovative web development tools, we craft customized websites from scratch. Our wide-ranging, tailored services allow us to produce cross-platform solutions for any industry, irrespective of scale.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We refine our proficiency to manage large-scale projects and execute the right processes to attain optimum results. 
            </p> 
          </div> 
        </div> 
      </section>
                
      {/* What We Possess */}
      <section className="relative py-20 text-center text-white overflow-hidden"> 
        <div className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/src/assets/web.jpg')" }} >
          <div className="absolute inset-0 bg-black/70"></div> 
        </div> 
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"> 
            What We <span className="text-[#E7C348]">Possess</span> 
          </h2> 
          <p className="text-lg text-gray-300 leading-relaxed mb-8"> 
            Established with a passion for innovation, Sharim Solutions has grown into a leading provider of business solutions. Our journey is marked by a relentless pursuit of excellence and a steadfast commitment to our clients' success.
          </p>
        </div> 
      </section>

      {/* Experienced Team & Outcome Focused */}
      <section className="relative py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experienced Team & <span className="text-[#E7C348]">Outcome Focused</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              We assist companies and businesses to recognize the role of digital technology
              as strategic opportunities and resolve real-world business complications.
            </p>
            <div className="bg-gradient-to-r from-[#E7C348] to-[#E7C348]/70 p-0.5 rounded-lg max-w-md">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">Let's Build Something Amazing</h3>
                <p className="text-gray-300">Contact us today to discuss your project needs</p>
                <Link to="/contact">
                <button className="mt-4 px-4 py-2 bg-[#E7C348] text-gray-900 font-semibold rounded-md text-sm hover:bg-[#d4af37] transition-colors duration-300">
                  Get Started
                </button></Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {detailsItems.map((item, idx) => (
              <details
                key={idx}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-4 transition-all duration-300 open:border-[#E7C348]/30 open:shadow-lg open:shadow-[#E7C348]/5"
              >
                <summary className="cursor-pointer font-semibold text-[#E7C348] list-none flex justify-between items-center">
                  <span>{item.title}</span>
                  <FiChevronDown className="transform transition-transform duration-300 open:rotate-180" />
                </summary>
                <p className="text-gray-300 mt-4 pl-2">{item.description}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDev;