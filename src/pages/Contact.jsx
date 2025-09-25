import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheck, FaTimes, FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: '', success: true });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      
      if (data.success) {
        setPopup({ 
          show: true, 
          message: 'Sharim Solutions will get back to you shortly!', 
          success: true 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setPopup({ 
          show: true, 
          message: 'Failed to send message. Please try again!', 
          success: false 
        });
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setPopup({ 
        show: true, 
        message: 'Server error. Please try again later.', 
        success: false 
      });
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => {
    setPopup({ show: false, message: '', success: true });
  };

  return (
    <>
      <section className="relative w-full h-[40vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/src/assets/hero.jpeg')",
            height: "100%"
          }}
        >
          <div className="absolute inset-0 bg-black/85"></div>
          
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="px-8 py-6 rounded-2xl text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Contact <span className="text-[#E7C348]">Us</span>
              </h1>
              <div className="w-24 h-1 bg-[#E7C348] mx-auto mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-black">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E7C348]/5 rounded-full -translate-y-1/2 translate-x-1/2 [clip-path:inset(50%_0_0_0)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Get in <span className="text-[#E7C348]">Touch</span>
                </h2>
                <div className="w-20 h-1 bg-[#E7C348] mb-6"></div>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Have a project in mind or need expert advice? Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E7C348] focus:border-transparent"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E7C348] focus:border-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E7C348] focus:border-transparent"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E7C348] focus:border-transparent"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#E7C348] hover:bg-[#d4b03f] disabled:bg-[#E7C348]/70 disabled:cursor-not-allowed text-black font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin mr-3 h-5 w-5" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Contact <span className="text-[#E7C348]">Information</span>
                </h2>
                <div className="w-20 h-1 bg-[#E7C348] mb-6"></div>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Reach out to us through any of these channels. Our team is ready to assist you with your digital transformation journey.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* Phone */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#E7C348]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FaPhone className="w-6 h-6 text-[#E7C348]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                      <p className="text-gray-300">(+92) 322 9554145</p>
                      <p className="text-gray-300">(+1) 647 6004145</p>
                    </div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#E7C348]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FaEnvelope className="w-6 h-6 text-[#E7C348]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                      <p className="text-gray-300">hr@sharims.com</p>
                    </div>
                  </div>
                </div>
                
                {/* Addresses */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-[#E7C348]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FaMapMarkerAlt className="w-6 h-6 text-[#E7C348]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Address #1</h3>
                      <p className="text-gray-300">DHA Phase 1 Islamabad</p>
                      <p className="text-gray-300">Plaza# 44-S, Flat #1, Second Floor Sector-F</p>
                      <p className="text-gray-300">Pakistan</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#E7C348]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FaMapMarkerAlt className="w-6 h-6 text-[#E7C348]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Address #2</h3>
                      <p className="text-gray-300">1100 King St W, Toronto ON M6K 0C6</p>
                      <p className="text-gray-300">Canada</p>
                    </div>
                  </div>
                </div>
                
                {/* Business Hours */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#E7C348]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FaClock className="w-6 h-6 text-[#E7C348]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 4:00 PM - 5:00 AM</p>
                      <p className="text-gray-300">Saturday: Closed</p>
                      <p className="text-gray-300">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="pt-10">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.facebook.com/Sharimsolutions" 
                className="w-12 h-12 bg-[#E7C348]/10 rounded-full flex items-center justify-center transition duration-300 hover:bg-[#E7C348]/20 group"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5 text-[#E7C348] group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.instagram.com/sharimsolutions" 
                className="w-12 h-12 bg-[#E7C348]/10 rounded-full flex items-center justify-center transition duration-300 hover:bg-[#E7C348]/20 group"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-[#E7C348] group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/company/sharimsolutions" 
                className="w-12 h-12 bg-[#E7C348]/10 rounded-full flex items-center justify-center transition duration-300 hover:bg-[#E7C348]/20 group"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5 text-[#E7C348] group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Beautiful Centered Popup */}
      {popup.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className={`relative mx-4 max-w-md w-full rounded-2xl shadow-2xl transform transition-all duration-300 scale-100 opacity-100 ${
            popup.success 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-[#E7C348]/30' 
              : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-red-500/30'
          }`}>
            {/* Header */}
            <div className={`p-6 rounded-t-2xl ${
              popup.success ? 'bg-[#E7C348]/10' : 'bg-red-500/10'
            }`}>
              <div className="flex items-center justify-center mb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  popup.success ? 'bg-[#E7C348]/20' : 'bg-red-500/20'
                }`}>
                  {popup.success ? (
                    <FaCheck className="w-8 h-8 text-[#E7C348]" />
                  ) : (
                    <FaTimes className="w-8 h-8 text-red-500" />
                  )}
                </div>
              </div>
              <h3 className={`text-2xl font-bold text-center ${
                popup.success ? 'text-[#E7C348]' : 'text-red-500'
              }`}>
                {popup.success ? 'Success!' : 'Error'}
              </h3>
            </div>

            {/* Body */}
            <div className="p-6">
              <p className="text-gray-200 text-center text-lg mb-6 leading-relaxed">
                {popup.message}
              </p>
              
              <button
                onClick={closePopup}
                className={`w-full py-3 px-6 rounded-lg font-bold text-white transition duration-300 ${
                  popup.success 
                    ? 'bg-[#E7C348] hover:bg-[#d4b03f] text-black' 
                    : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                OK
              </button>
            </div>

            {/* Decorative Elements */}
            <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-1 rounded-full ${
              popup.success ? 'bg-[#E7C348]' : 'bg-red-500'
            }`}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;