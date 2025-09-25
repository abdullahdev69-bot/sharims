import { motion } from "framer-motion";
import logo from "../assets/logo2.gif";

const Footer = () => {
  const rotatingText = "CREATIVE • MANAGEMENT • DESIGN • ";

  return (
     <footer className="bg-black text-white text-white px-6 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
    
    {/* Column 1: Logo + Studio Info */}
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
      {/* Rotating text around logo */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text
              fontSize="20"
              letterSpacing="3"
              className="uppercase"
              fill="currentColor"
            >
              <textPath
                href="#circlePath"
                startOffset="0"
                className="text-gray-400"
              >
                {rotatingText.repeat(3)}
              </textPath>
            </text>
          </svg>
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        </div>
      </div>

      {/* Studio Info */}
      <div className="flex flex-col text-center sm:text-left">
        <p className="uppercase tracking-wide text-sm">Sharims</p>
        <h2 className="font-extrabold text-2xl sm:text-3xl">Solutions</h2>
        <p className="text-gray-400 mt-2 text-sm leading-relaxed">
          At Sharim Solutions, we fuse innovation with expertise to supercharge your growth.
        </p>
      </div>
    </div>

    {/* Column 2: Studio Links */}
    <div className="lg:px-4 text-center sm:text-left">
      <h3 className="font-bold text-lg mb-4">Reach Us</h3>
      <ul className="space-y-2 text-gray-300">
        <li><a href="/about" className="hover:text-white transition-colors duration-300">About Us</a></li>
        <li><a href="/contact" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
      </ul>
    </div>

    {/* Column 3: Contact */}
    <div className="text-center sm:text-left">
      <h3 className="font-bold text-lg mb-4">Contact</h3>
      <p className="text-gray-300">DHA Phase 1, Plaza# 44-S, Flat # 1, Second Floor, Sector-F0 Islamabad, Pakistan</p>
      <p className="text-gray-300 mt-2">1100 King St W, Toronto ON M6K 0C6, Canada</p>
      <p className="text-gray-300 mt-2">hr@sharims.com</p>
      <p className="text-gray-300 mt-2">(+1) 647 6004145</p>
      <p className="text-gray-300 mt-2">(+92) 322 9554145</p>
    </div>

    {/* Column 4: Services */}
    <div className="text-center sm:text-left">
      <h3 className="font-bold text-lg mb-4">Services</h3>
      <ul className="space-y-2 text-gray-300">
        <li><a href="/services/webdevelopment" className="hover:text-white transition-colors duration-300">Web Development</a></li>
        <li><a href="/services/cybersecurity" className="hover:text-white transition-colors duration-300">Cyber Security</a></li>
        <li><a href="/services/salesolution" className="hover:text-white transition-colors duration-300">Sales Solution</a></li>
        <li><a href="/services/digitalmarketing" className="hover:text-white transition-colors duration-300">Digital Marketing</a></li>
        <li><a href="/services/monitoringservices" className="hover:text-white transition-colors duration-300">Monitoring Services</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom copyright */}
  <div className="mt-8 md:mt-12 border-t border-gray-700 pt-6 text-sm text-gray-500 text-center">
    ©️ 2024, All Rights Reserved
  </div>
</footer>

  );
};

export default Footer;