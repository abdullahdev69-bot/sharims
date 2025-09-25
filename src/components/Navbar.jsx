import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaLaptopCode,
  FaShieldAlt,
  FaBullhorn,
  FaChartLine,
  FaDesktop,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const contactRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [navTop, setNavTop] = useState(0);

  // contact bar show/hide
  const [showContact, setShowContact] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const nav = document.getElementById("navbar");
    if (nav) {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${nav.offsetHeight}px`
      );
    }
  }, [isScrolled, navTop]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      if (window.scrollY <= 10) {
        setShowContact(true); // always show at top
      } else if (window.scrollY > lastScrollY.current) {
        setShowContact(false); // scrolling down → hide
      } else {
        setShowContact(true); // scrolling up → show
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // dynamically adjust navbar position under contact bar
  useEffect(() => {
    const updateNavTop = () => {
      const h = contactRef.current?.getBoundingClientRect().height || 0;
      setNavTop(Math.ceil(h));
    };
    updateNavTop();
    window.addEventListener("resize", updateNavTop);
    return () => window.removeEventListener("resize", updateNavTop);
  }, []);

  const navLinks = [
    { id: "", label: "Home" },
    { id: "services", label: "Services" },
    { id: "social", label: "Social Media Management" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];

  const serviceLinks = [
    {
      id: "webdevelopment",
      label: "Web Development",
      icon: <FaLaptopCode className="mr-2 text-[#E7C348]" />,
    },
    {
      id: "cybersecurity",
      label: "Cyber Security",
      icon: <FaShieldAlt className="mr-2 text-[#E7C348]" />,
    },
    {
      id: "digitalmarketing",
      label: "Digital Marketing",
      icon: <FaBullhorn className="mr-2 text-[#E7C348]" />,
    },
    {
      id: "salesolution",
      label: "Sales Solution",
      icon: <FaChartLine className="mr-2 text-[#E7C348]" />,
    },
    {
      id: "monitoringservices",
      label: "Monitoring Services",
      icon: <FaDesktop className="mr-2 text-[#E7C348]" />,
    },
  ];

  return (
    <>
      {/* Top contact bar */}
      <div
        ref={contactRef}
        className={`fixed top-0 w-full text-white text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center z-50 transition-transform duration-500 ${
          showContact ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 mb-2 md:mb-0">
          <span className="flex items-center">
            <FaPhone className="w-3 h-3 mr-2" /> (+92) 322 9554145
          </span>
          <span className="flex items-center">
            <FaPhone className="w-3 h-3 mr-2" /> (+1) 647 6004145
          </span>
          <span className="flex items-center">
            <FaEnvelope className="w-3 h-3 mr-2" /> hr@sharims.com
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/Sharimsolutions"
            className="hover:text-[#E7C348] transition-colors"
          >
            <FaFacebook className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/sharimsolutions"
            className="hover:text-[#E7C348] transition-colors"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/sharimsolutions"
            className="hover:text-[#E7C348] transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main navbar */}
    <nav
  id="navbar"
  className={`fixed w-full z-40 transition-all duration-500 px-4`}
  style={{ top: showContact ? `${navTop}px` : "10px" }}
>

        <div className="max-w-7xl mx-auto">
          <div
            className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl shadow-black/10 transition-all duration-500 ${
              isScrolled ? "py-3" : "py-4"
            }`}
          >
            <div className="flex items-center justify-between px-6">
              {/* Logo */}
              <div className="flex items-center justify-start">
                <NavLink to="/" end>
                  <img
                    src="/src/assets/logo.gif"
                    alt="Company Logo"
                    className="h-10 w-auto cursor-pointer"
                  />
                </NavLink>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-end space-x-8">
                {navLinks.map((link) =>
                  link.id !== "services" ? (
                    <NavLink
                      key={link.id}
                      to={`/${link.id}`}
                      end={link.id === ""}
                      className={({ isActive }) =>
                        `relative font-semibold ${
                          isActive
                            ? "text-[#E7C348]"
                            : "text-gray-200 hover:text-white"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ) : (
                    <div key="services" className="relative">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`relative font-semibold flex items-center gap-1 ${
                          location.pathname.includes("/services")
                            ? "text-[#E7C348]"
                            : "text-gray-200 hover:text-white"
                        }`}
                      >
                        Services
                        <FiChevronDown
                          className={`transition-transform ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-lg py-2 border border-white/10">
                          {serviceLinks.map((service) => (
                            <NavLink
                              key={service.id}
                              to={`/services/${service.id}`}
                              onClick={() => setIsServicesOpen(false)}
                              className="flex items-center px-4 py-2 text-gray-200 hover:text-white hover:bg-white/5 transition-colors"
                            >
                              {service.icon}
                              {service.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-md focus:outline-none text-white hover:text-[#E7C348]"
                >
                  {isMobileMenuOpen ? (
                    <FaTimes className="h-6 w-6" />
                  ) : (
                    <FaBars className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4">
                <div className="px-2 pt-2 space-y-1 bg-white/10 backdrop-blur-md rounded-lg">
                  {navLinks.map((link) =>
                    link.id !== "services" ? (
                      <NavLink
                        key={link.id}
                        to={`/${link.id}`}
                        end={link.id === ""}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded-md text-base font-medium ${
                            isActive
                              ? "text-white bg-gradient-to-r from-blue-600 to-purple-600"
                              : "text-gray-200 hover:text-white hover:bg-white/5"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ) : (
                      <div key="services" className="px-3 py-2">
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="w-full text-left flex justify-between items-center text-gray-200 hover:text-white"
                        >
                          <span>Services</span>
                          <FiChevronDown
                            className={`w-4 h-4 transition-transform ${
                              isServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isServicesOpen && (
                          <div className="mt-2 ml-4 space-y-2">
                            {serviceLinks.map((service) => (
                              <NavLink
                                key={service.id}
                                to={`/services/${service.id}`}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsServicesOpen(false);
                                }}
                                className="flex items-center px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-white/5"
                              >
                                {service.icon}
                                {service.label}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
