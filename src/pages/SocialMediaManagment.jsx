import { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaBars, FaTimes, FaSpinner, FaCheck} from 'react-icons/fa';
import logo from "../assets/logo2.gif";
import { motion } from "framer-motion";



const SocialMedia = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: '', success: true });
  

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Carousel images data
  const slides = [
    {
      id: 1,
      title: "Your Solution To All",
      subtitle: "Your Marketing Needs",
      description: "We provide comprehensive marketing solutions tailored to your business goals.",
      image: "src/assets/c1.avif"
    },
    {
      id: 2,
      title: "Creative Digital Marketing",
      subtitle: "That Drives Results",
      description: "Our strategies are designed to increase your visibility and conversions.",
      image: "src/assets/c2.avif"
    },
    {
      id: 3,
      title: "Data-Driven Approach",
      subtitle: "For Maximum ROI",
      description: "We analyze metrics to optimize your marketing campaigns for better returns.",
      image: "src/assets/c3.avif"
    }
  ];

    const services = [
    {
      title: "Animation",
      desc: "Engaging animations that simplify and sell your message. Perfect for promos, explainers, and social media content.",
      img: "src/assets/animation.jpg", // replace with your image path
    },
    {
      title: "Graphic Design",
      desc: "Eye-catching designs that elevate your brand. From logos to ads, we make visuals that work.",
      img: "src/assets/graphics.jpg",
    },
    {
      title: "Social Media",
      desc: "Grow your online presence with strategy and style. We create, post, and manage, so you don’t have to.",
      img: "src/assets/social-media.jpg",
    },
    {
      title: "Web Dev",
      desc: "Custom websites that are fast, modern, and mobile-ready. Built to convert and impress your visitors.",
      img: "src/assets/web-dev.jpg",
    },
    {
      title: "Video Editing",
      desc: "Professional edits that tell your story right. From reels to promos — smooth, sharp, and scroll-stopping.",
      img: "src/assets/video-editing.jpg",
    },
    {
      title: "Copywriting",
      desc: "Words that grab attention and drive action. We write to connect, convince, and convert.",
      img: "src/assets/Copywriting.jpg",
    },
  ];

    const testimonials = [
    {
      name: "Testimonial-1",
      img: "src/assets/t2.jpg", 
    },
    {
      name: "Testimonial-2",
      img: "src/assets/t1.jpg",
    },
    {
      name: "Testimonial-3",
      img: "src/assets/t2.jpg",
    },
  ];

    
  const videos = [
    {
      id: 'KeW1USfMkAg',
      thumbnail: '/src/assets/video1.png' 
    },
    {
      id: 'Rf4OVdN7Ll0', 
      thumbnail: '/src/assets/video2.png'
    },
    {
      id: 'T6lJx6j23JU',
      thumbnail: '/src/assets/video3.png'
    },
    {
      id: 'Pg2JZoWBtTI',
      thumbnail: '/src/assets/video4.png'
    },
    {
      id: 'IQUP-jr2Alw',
      thumbnail: '/src/assets/video5.png'
    },
    {
      id: 'AxxMVA9pRRk',
      thumbnail: '/src/assets/video6.png'
    },
    {
      id: 'hN-TzKuSMgI',
      thumbnail: '/src/assets/video7.png'
    },
    {
      id: 'wotX8c-l1TU',
      thumbnail: '/src/assets/video8.png'
    }
  ];

  const openVideo = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  // Scroll functions for arrows
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Function to handle image loading errors
  const handleImageError = (e, videoId) => {
    console.error(`Failed to load local image for video ${videoId}, using YouTube thumbnail`);
    e.target.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };


  const reviews = [
  {
    author: "MICHELLE TOUPS",
    reviews: "1 review",
    location: "US",
    time: "2 months ago",
    title: "Excellence from everyone with whom I...",
    content: "Excellence from everyone with whom I have dealt for these few weeks during my first experience with Crexi. Heather was fabulous, Jared was great. Insightful, responsive, upbeat, patient, professiona... Give pats on the back all around!!",
  },
  {
    author: "JAMES WILSON",
    reviews: "3 reviews",
    location: "UK",
    time: "9 months ago",
    title: "Outstanding service and support!",
    content: "The team went above and beyond to help us find the perfect commercial property. Their expertise and dedication made the entire process smooth and stress-free. Highly recommended!",
  },
  {
    author: "SARAH CHEN",
    reviews: "2 reviews",
    location: "Canada",
    time: "1 years ago",
    title: "Professional and efficient experience",
    content: "From start to finish, the service was exceptional. They understood our needs perfectly and delivered results faster than we expected. Will definitely work with them again.",
  },
  {
    author: "ROBERT MARTINEZ",
    reviews: "5 reviews",
    location: "Australia",
    time: "3 years ago",
    title: "Game-changing platform for real estate",
    content: "This platform transformed how we manage our property portfolio. The analytics and insights provided helped us make data-driven decisions that improved our ROI significantly.",
  },
  {
    author: "LISA PATEL",
    reviews: "1 review",
    location: "US",
    time: "3 years ago",
    title: "Exceptional customer service",
    content: "The support team was incredibly helpful and responsive. They answered all my questions promptly and guided me through every step of the process. Truly outstanding!",
  },
  {
    author: "DAVID THOMPSON",
    reviews: "7 reviews",
    location: "Germany",
    time: "4 years ago",
    title: "Top-notch professionals",
    content: "Working with this team was a pleasure. Their market knowledge and negotiation skills helped us secure a fantastic deal. The entire experience was seamless and professional.",
  }
];

    const plans = [
    {
      name: "Basic",
      price: "$999 CAD",
      duration: "30 Days Package",
      features: [
        "30 social media posts",
        "Posting banners + branded posts with hashtag strategy",
        "2 Quora blog posts",
        "Platform management & scheduling",
        "Essential performance reporting",
      ],
      highlighted: false,
    },
    {
      name: "Essential",
      price: "$1,499 CAD",
      duration: "30 Days Package",
      features: [
        "30 social media posts",
        "3 x 30-second animated videos",
        "4 SEO-optimized Quora & Reddit blog posts",
        "Engagement management — responding to comments",
        "Bilingual content (English OR French)",
        "3 additional banners/AD designs",
      ],
      highlighted: true, // middle one is highlighted
    },
    {
      name: "Brand Authority",
      price: "$2,499 CAD",
      duration: "30 Days Package",
      features: [
        "30 social media posts",
        "6 x 30-90 second animated videos",
        "Full SEO services with ROI reporting",
        "Complete branding audit & strategy alignment",
        "7 Quora & Reddit blog posts (with engagement & responses)",
        "Bilingual content (English + French)",
        "7 additional custom posts/AD designs",
      ],
      highlighted: false,
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', 
    message: ''
  });

  const rotatingText = "CREATIVE • MANAGEMENT • DESIGN • ";

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

  const navItems = [
    { name: 'Home', path: '#' },
    { name: 'Services', path: '#service' },
    { name: 'Portfolio', path: '#portfolio' },
    { name: 'Contact', path: '#contactus' },
  ];

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen">
      {/* Top Contact Bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 mb-2 md:mb-0">
            <span className="flex items-center text-sm">
              <FaPhone className="w-3 h-3 mr-2" />
              +92 322 9554145
            </span>
            <span className="flex items-center text-sm">
              <FaPhone className="w-3 h-3 mr-2" />
              +16476004145
            </span>
            <span className="flex items-center text-sm">
              <FaEnvelope className="w-3 h-3 mr-2" />
              hr@sharims.com
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/Sharimsolutions" className="hover:text-[#E7C348] transition-colors">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/sharimsolutions" className="hover:text-[#E7C348] transition-colors">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/sharimsolutions" className="hover:text-[#E7C348] transition-colors">
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/"><img
                src="/src/assets/logo3.jpg"
                alt="SHARIM Logo"
                className={`h-10 w-auto transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'}`}
              /></a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-black hover:text-[#E7C348]' 
                      : 'text-black hover:text-[#E7C348]'
                  }`}
                >
                  {item.name}
                </a>
              ))}
             <button
  onClick={() => {
    document.getElementById("contactus")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="w-full mt-2 bg-[#E7C348] text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-[#d4b03f] transition-colors"
>
  Get Quote
</button>

            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md focus:outline-none ${
                  isScrolled 
 ? 'text-black hover:text-[#E7C348]' 
                      : 'text-black hover:text-[#E7C348]'
                }`}
              >
                {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className={`px-2 pt-2 space-y-1 ${isScrolled ? 'bg-white' : ' backdrop-blur-md rounded-lg'}`}>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isScrolled 
 ? 'text-black hover:text-[#E7C348]' 
                      : 'text-black hover:text-[#E7C348]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
 <button
  onClick={() => {
    document.getElementById("contactus")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="w-full mt-2 bg-[#E7C348] text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-[#d4b03f] transition-colors"
>
  Get Quote
</button>

              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Carousel Section */}
      <section id="#" className="relative h-[65vh] w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Carousel container */}
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background image with overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex h-full items-center justify-center">
                <div className="container mx-auto px-4 text-center text-white">
                  <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <h2 className="mb-6 text-2xl font-semibold md:text-3xl lg:text-4xl text-[#E7C348]">
                    {slide.subtitle}
                  </h2>
                  <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <button 
                    onClick={() => {
    document.getElementById("contactus")?.scrollIntoView({ behavior: "smooth" });
  }}
                    className="rounded-lg bg-[#E7C348] px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-[#d4b03f]">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/* Indicator dots */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#E7C348]' : 'bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      

 <section id="service" className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 text-center">
      {services.map((service, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="w-65 h-50 mb-6 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-700 hover:scale-105">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {service.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


<section
      className="relative bg-gradient-to-br from-[#0B1E36] to-[#1C2F4A] text-white"
      style={{
        clipPath: "polygon(0 25%, 100% 0, 100% 100%, 0 100%)",
      }}
    >
<div className="max-w-7xl mx-auto py-20 text-center">
  <h2 className="text-2xl md:text-4xl font-bold mt-24">
    Global Domination  <br /> 2,000+ Projects Completed
  </h2>

  <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
   
    <div className="flex items-center justify-center h-22 w-full">
      <img src="src/assets/barclays.png" alt="Barclays" className="max-h-14 max-w-full object-contain" />
    </div>
    <div className="flex items-center justify-center h-22 w-full">
      <img src="src/assets/bosch.png" alt="Bosch" className="max-h-10 max-w-full object-contain" />
    </div>
    <div className="flex items-center justify-center h-22 w-full">
      <img src="src/assets/airbnb.png" alt="Airbnb" className="max-h-10 max-w-full object-contain" />
    </div>
    <div className="flex items-center justify-center h-22 w-full">
      <img src="src/assets/canon.png" alt="Canon" className="max-h-10 max-w-full object-contain" />
    </div>
    
    
    
    <div className="flex items-center justify-center h-22 w-full">
      <img src="src/assets/kohl.png" alt="Kohl's" className="max-h-10 max-w-full object-contain" />
    </div>
    <div className="flex items-center justify-center h-22 w-full">
      <img src="src/assets/yamaha.png" alt="Yamaha" className="max-h-10 max-w-full object-contain" />
    </div>
    <div className="flex items-center justify-center h-22 w-full">
      <img src="src/assets/moody.png" alt="Moody's" className="max-h-8 max-w-full object-contain" />
    </div>
    
    {/* If you have more than 8 logos, they will wrap to additional rows */}
    <div className="flex items-center justify-center h-22 w-full">
      <img src="src/assets/duracell.png" alt="Duracell" className="max-h-8 max-w-full object-contain" />
    </div>
  </div>
</div>
    </section>

<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
    {/* Heading */}
    <h2 className="text-2xl font-bold text-gray-800 mb-2">
      Hear from our clients
    </h2>
    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
      Our clients trust us to deliver results that make a real impact. Here's
      what they have to say about their experience working with us.
    </p>

    {/* Top Testimonials */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
      {testimonials.map((t, idx) => (
        <div key={idx} className="flex flex-col items-center">
          {/* Stars */}
          <div className="flex space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          {/* Image */}
          <div className="w-50 h-40 mb-4 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-700 hover:scale-105">
            <img
              src={t.img}
              alt={t.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Name */}
          <p className="text-gray-600 font-medium">{t.name}</p>
        </div>
      ))}
    </div>

    {/* Review Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-lg shadow text-left"
        >
          {/* Author info */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-700">
              {review.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-sm font-semibold">{review.author}</p>
              <p className="text-xs text-gray-500">
                {review.reviews} • {review.location}
              </p>
            </div>
          </div>

          {/* Review header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">★★★★★</span>
              <span className="text-xs text-gray-500">Verified</span>
            </div>
            <span className="text-xs text-gray-400">{review.time}</span>
          </div>

          {/* Review content */}
          <h3 className="font-semibold mb-1">{review.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{review.content}</p>

          {/* Actions */}
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <button className="hover:text-gray-700">Useful</button>
            <button className="hover:text-gray-700">Share</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Choose From Our Packages
        </h2>
        <p className="text-gray-600 mb-12">
          Select one of the package that best suits your needs.
        </p>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl shadow-md border bg-white p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.highlighted ? "border-orange-500 scale-105" : "border-gray-200"
              }`}
            >
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-100 text-gray-800 text-sm px-4 py-1 rounded-full shadow">
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <h3 className="text-2xl font-bold text-gray-800 mt-4">{plan.price}</h3>
              <p className="text-gray-500 mb-6">{plan.duration}</p>

              {/* Button */}
              <button 
              onClick={() => {
    document.getElementById("contactus")?.scrollIntoView({ behavior: "smooth" });
  }}
              className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors mb-6">
                Get Started
              </button>

              {/* Features */}
              <ul className="text-gray-600 space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="border-t pt-3 text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  <section id="portfolio" className="py-16 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have a decade of experience in what we do and have worked with some of the biggest brands in the world. 
            Check out some of our outstanding work below.
          </p>
        </div>

        {/* Video Carousel Container with Arrows */}
        <div className="relative group">
          {/* Left Arrow - Only show if there are items to scroll to */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow - Only show if there are items to scroll to */}
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Video Carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            <div className="flex space-x-6 pl-4 pr-8">
              {videos.map((video, index) => (
                <div 
                  key={index} 
                  className="flex-none w-80 md:w-96 snap-center transform transition-all duration-300 hover:scale-105"
                >
                  <div 
                    className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer border-4 border-transparent hover:border-[#E7C348] transition-all duration-300"
                    onClick={() => openVideo(video)}
                  >
                    {/* Video Thumbnail - Full width without text */}
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={`Video ${index + 1}`}
                        className="w-full h-65 object-cover"
                        onError={(e) => handleImageError(e, video.id)}
                      />
                      <div className="absolute inset-0  bg-opacity-0 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                        <div className="bg-red-600 rounded-full p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isModalOpen && selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 z-10 hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>

     
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>

   <section id="contactus" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Still have questions?
            </h2>
            <p className="text-lg text-gray-600">
              Reach out to us and we will respond back to you as quickly as possible.
            </p>
          </div>

          {/* Contact Form - FIXED VERSION */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              {/* ADDED SUBJECT FIELD */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
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
              </div>
            </form>

            {/* Additional contact information */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Prefer to contact us directly?<br />
                  Email us at <a href="mailto:hr@sharims.com" className="text-blue-600 hover:underline">hr@sharims.com</a><br />
                  or call <a href="tel:+92 322 9554145" className="text-blue-600 hover:underline">+1 647 6004145</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white px-6 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          
          {/* Column 1: Logo + Studio Info */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">

            {/* Rotating text around logo */}
            <div className="relative w-24 h-24 flex-shrink-0 mx-auto md:mx-0">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              >
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                >
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
                <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
              </div>
            </div>

            {/* Studio Info */}
            <div className="flex flex-col text-center md:text-left">
              <p className="uppercase tracking-wide text-sm">Sharims</p>
              <h2 className="font-extrabold text-3xl">Solutions</h2>
              <p className="text-gray-400 mt-2 text-sm leading-relaxed max-w-xs">
                At Sharim Solutions, we fuse innovation with expertise to supercharge your growth.
              </p>
            </div>
          </div>

          {/* Column 2: Studio Links */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Reach Us</h3>
            <ul className="space-y-2 text-gray-300">
            <li><a href="about" className="hover:text-white transition-colors duration-300">About Us</a></li>
            <li><a href="contact" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
          <p className="text-gray-300">Plaza# 44-S, Flat # 1, Second Floor, Sector-F, Islamabad, Pakistan</p>
          <p className="text-gray-300 mt-2">1100 King St W, Toronto ON M6K 0C6</p><p className="text-gray-300">Canada</p>
            <p className="text-gray-300 mt-2">hr@sharims.com</p>
            <p className="text-gray-300 mt-2">+1 647 6004145</p>
            <p className="text-gray-300 mt-2">+92 322 9554145</p>
          </div>

          {/* Column 4: Services */}
          <div className="text-center md:text-left">
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
        <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-500 text-center">
          ©️ 2024, All Rights Reserved
        </div>
      </footer>
  {/* ... (rest of your existing JSX remains the same) */}

      {/* Popup - FIXED IMPORT CONFLICT */}
{popup.show && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
    <div className={`relative mx-4 max-w-md w-full rounded-2xl shadow-2xl transform transition-all duration-300 scale-100 opacity-100 ${
      popup.success 
        ? 'bg-white border border-[#E7C348]/30' 
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
        <p className="text-gray-900 text-center text-lg mb-6 leading-relaxed">
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
    </div>
  );
};

export default SocialMedia;