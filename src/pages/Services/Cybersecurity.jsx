import React, { useRef, useEffect, useState } from "react";
import { 
  FiShield, 
  FiUserCheck, 
  FiClipboard, 
} from "react-icons/fi";
import { FaUserShield, FaHospital, FaUniversity } from "react-icons/fa";

const CyberSecurity = () => {
  const statsRef = useRef(null);
  const dashboardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [dashboardVisible, setDashboardVisible] = useState(false);
  const [animated, setAnimated] = useState(false);


const extraCards = [
  {
    id: 4,
    title: "Penetration Testing",
    description:
      "The penetration testing team at Sharim Solution can promptly recognize cybersecurity vulnerabilities well before an intruder plans to infiltrate the network or computer system of our clients.",
    icon: <FiShield className="text-3xl text-[#E7C348]" />, // shield = defense
  },
  {
    id: 5,
    title: "Virtual CISO",
    description:
      "We can provide expert services to our clients as Virtual Chief Information Security Officers (vCISO), delivering advanced cyber security programs to your organization, and remarkably reducing the risk of foreign intruder attack.",
    icon: <FaUserShield className="text-3xl text-[#E7C348]" />, // user shield = security officer
  },
  {
    id: 6,
    title: "Cyber Security Consultation",
    description:
      "Our specialized Cyber Security Consultants provide security strength to your organization having years of experience working on developing and maintaining complex security systems for the world’s largest organizations.",
    icon: <FiUserCheck className="text-3xl text-[#E7C348]" />, // consultation = verified expert
  },
];

const extraCard = [
  {
    id: 7,
    title: "SOC 2 Compliance",
    description:
      "We deeply understand the digital needs of our clients and offer innovative solutions perfectly catered to keep our clients stress-free. We are offering SOC 2 gap assessments, guidance, and control execution services to certify the best possible result during the SOC 2 attestation audit. ",
    icon: <FiClipboard className="text-3xl text-[#E7C348]" />, // clipboard = audit & compliance
  },
  {
    id: 8,
    title: "HIPAA Compliance",
    description:
      "Healthcare organizations always remain one of the highest-valued targets for cyber attackers. It generates a potential threat leading towards incorporating a strong cyber defence system to shield healthcare information systems. Sharim Solution is a reliable consultant for HIPAA compliance requirements.",
    icon: <FaHospital className="text-3xl text-[#E7C348]" />, // hospital = healthcare data
  },
  {
    id: 9,
    title: "GLBA Compliance",
    description:
      "We are a specialist in assisting all organization types to fulfil GLBA compliance requirements. We offer GLBA-focused risk assessment to approaches meeting compliance requirements. Our GLBA compliance consultants are competent enough to face any challenge.",
    icon: <FaUniversity className="text-3xl text-[#E7C348]" />, // university = financial institutions / regulations
  },
];

  // Intersection Observer for stats
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

  // Intersection Observer for dashboard animations
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

const renderCards = (cards) => (
  <div className="flex justify-center px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl w-full"> {/* Changed to md:grid-cols-3 */}
      {cards.map((service) => (
        <div
          key={service.id}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem_0_2rem_0] 
                     border border-gray-700 p-6 group hover:scale-105 
                     transition-all duration-300 hover:shadow-lg hover:shadow-[#E7C348]/10
                     flex flex-col h-full" // Added flex properties for equal height
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-[#E7C348]/10 rounded-full group-hover:bg-[#E7C348]/20 transition-colors duration-300">
              {service.icon}
            </div>
          </div>
          <h3 className="text-xl font-bold text-white text-center mb-3 group-hover:text-[#E7C348] transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base flex-grow"> {/* Added flex-grow */}
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);



  const AnimatedStat = ({ value, label, delay = 0 }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const end = parseInt(value.replace(/[^0-9]/g, ''));
        const duration = 2000; // ms
        const incrementTime = Math.floor(duration / end);
        
        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start >= end) clearInterval(timer);
        }, incrementTime);
        
        return () => clearInterval(timer);
      }
    }, [isVisible, value]);
    
    return (
      <div className="bg-gray-800/40 p-4 md:p-6 rounded-xl border border-[#E7C348]/10 text-center">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#E7C348] mb-1 md:mb-2">
          {value.includes('%') || value.includes('°') ? `${count}${value.replace(/[0-9]/g, '')}` : 
           value.includes('+') ? `${count}+` : count}
        </div>
        <div className="text-xs md:text-sm text-gray-400">{label}</div>
      </div>
    );
  };

  // Animated Progress Bar Component
  const AnimatedProgressBar = ({ percent, label, status, delay = 0 }) => {
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
      if (dashboardVisible) {
        setTimeout(() => {
          setWidth(percent);
        }, delay);
      }
    }, [dashboardVisible, percent, delay]);
    
    return (
      <div className="bg-gray-700/30 p-3 md:p-4 rounded-lg border border-[#E7C348]/10 mb-3 md:mb-4">
        <div className="flex justify-between items-center mb-1 md:mb-2">
          <span className="text-xs md:text-sm text-[#E7C348]">{label}</span>
          <span className="text-xs md:text-sm text-green-400">{status}</span>
        </div>
        <div className="w-full bg-gray-600 rounded-full h-2">
          <div 
            className="bg-[#E7C348] h-2 rounded-full transition-all duration-1000 ease-out" 
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/src/assets/cyber-security.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/85"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="px-8 py-6 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Cyber <span className="text-[#E7C348]">Security</span>
              </h1>
              <div className="w-24 h-1 bg-[#E7C348] mx-auto mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-16 md:py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img
                src="/src/assets/cybers.jpg"
                alt="Cyber Security"
                className="w-full max-w-md h-auto object-cover rounded-[2rem_0_2rem_0] shadow-lg transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Our Cyber<span className="text-[#E7C348]">Security</span> Services
              </h2>
              <div className="w-24 h-1 bg-[#E7C348] mb-6 md:mb-8"></div>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Sharim Solution delivers cybersecurity services and manages cyber risk
                on behalf of our esteemed clients. The digital technology is rapidly
                evolving, from the escalation in the Internet of Things (IoT) to the
                implementation of Software as a Service (SaaS) over traditional
                applications. As the digital technologies are evolving, so does the
                cyber threat. Numerous organizations develop IT infrastructure without
                assistance from IT risk specialists. Working as a Managed Security
                Services Provider (MSSP), we are our client's trusted partner bringing
                advanced proficiency in the current cyber security threat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-16 md:py-20 bg-black text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/image03.jpg')" }}>
          <div className="absolute inset-0 bg-black/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/src/assets/java.jpg"
              alt="Enterprise Web Dev"
              className="w-full max-w-md mx-auto rounded-[2rem_0_2rem_0] shadow-lg transform transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Our <span className="text-[#E7C348]">Core Values</span>
            </h2>
            <ul className="text-base md:text-lg text-gray-300 space-y-2 md:space-y-3 leading-relaxed">
              <li className="flex items-start">
                <span className="text-[#E7C348] mr-2">•</span>
                Be your trusted risk program advisor.
              </li>
              <li className="flex items-start">
                <span className="text-[#E7C348] mr-2">•</span>
                Offer cost-effective solutions to lessen enterprise-wide risk.
              </li>
              <li className="flex items-start">
                <span className="text-[#E7C348] mr-2">•</span>
                Deliver professional consulting services to assist IT teams.
              </li>
              <li className="flex items-start">
                <span className="text-[#E7C348] mr-2">•</span>
                Identify and counter the cyber threats on your behalf.
              </li>
              <li className="flex items-start">
                <span className="text-[#E7C348] mr-2">•</span>
                Incorporate advanced information security system to enterprises of all magnitudes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cyber Security Insight Section */}
      <section className="py-16 bg-black text-white" ref={dashboardRef}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10">
            {/* Content Section */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                An Insight of <span className="text-[#E7C348]">Cyber Security</span>
              </h2>
              <div className="h-1 w-20 bg-[#E7C348] mb-6 md:mb-8"></div>
              <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-4 md:mb-6">
                Cyber Security is an applied science that concentrates on the networks incorporating electronic communication and protection of information systems.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-4 md:mb-6">
                Cyber Security is more of an art as considered by the consultants and IT security providers aimed at reduction of risk for businesses and government.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                It refrains organizations from infrastructure attacks by malevolent individuals or nation-states. Cyber Security defence can be used as safeguards to lessen the risk of foreign cyber-attacks for businesses.
              </p>
            </div>

            {/* Visual Section - Adjusted to match theme */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gray-800 rounded-xl p-4 md:p-6 border border-[#E7C348]/20 shadow-lg">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-sm font-mono text-[#E7C348]">security_dashboard.exe</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="bg-gray-700/50 p-3 md:p-4 rounded-lg border border-[#E7C348]/10">
                      <div className="text-[#E7C348] text-2xl md:text-3xl font-bold mb-1 md:mb-2">98%</div>
                      <div className="text-xs md:text-sm text-gray-400">Threats Blocked</div>
                    </div>
                    <div className="bg-gray-700/50 p-3 md:p-4 rounded-lg border border-[#E7C348]/10">
                      <div className="text-[#E7C348] text-2xl md:text-3xl font-bold mb-1 md:mb-2">24/7</div>
                      <div className="text-xs md:text-sm text-gray-400">Monitoring</div>
                    </div>
                  </div>
                  
                  <AnimatedProgressBar 
                    percent={85} 
                    label="Network Encryption" 
                    status="Active" 
                    delay={300}
                  />
                  
                  <AnimatedProgressBar 
                    percent={100} 
                    label="Firewall Protection" 
                    status="Active" 
                    delay={800}
                  />
                </div>
                
                {/* Animated elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 md:w-20 md:h-20 rounded-full border-8 border-[#E7C348]/30 animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 md:w-14 md:h-14 rounded-full border-8 border-[#E7C348]/20 animate-ping"></div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16" ref={statsRef}>
            <AnimatedStat value="1000+" label="Cyber Attacks Prevented" />
            <AnimatedStat value="99.9%" label="Uptime Guarantee" delay={200} />
            <AnimatedStat value="360°" label="Protection Coverage" delay={400} />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
{/* What We Offer Section */}
<section className="py-16 bg-black">
  <div className="max-w-6xl mx-auto px-4">
    {/* Section Heading */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
        What we<span className="text-[#E7C348]"> offer</span>
      </h2>
      <div className="h-1 w-20 bg-[#E7C348] mx-auto"></div>
    </div>

    {/* First Card Grid (3 per row) */}
    <div className="mb-12 md:mb-16">
      {renderCards(extraCards)}
    </div>

    {/* Second Card Grid (3 per row) */}
    <div className="mb-12 md:mb-16">
      {renderCards(extraCard)}
    </div>
  </div>
</section>


      {/* Final Insight Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            An Insight of <span className="text-[#E7C348]">Cyber Security</span>
          </h2>
          <div className="h-1 w-20 bg-[#E7C348] mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-4 md:mb-6">
            Cyber Security is an applied science that concentrates on the networks incorporating electronic communication and protection of information systems.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-4 md:mb-6">
            Cyber Security is more of an art as considered by the consultants and IT security providers aimed at reduction of risk for businesses and government.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-300">
            It refrains organizations from infrastructure attacks by malevolent individuals or nation-states. Cyber Security defence can be used as safeguards to lessen the risk of foreign cyber-attacks for businesses.
          </p>
        </div>
      </section>
    </>
  );
};

export default CyberSecurity;