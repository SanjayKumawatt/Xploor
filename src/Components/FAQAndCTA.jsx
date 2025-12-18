import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQAndCTA = () => {
  // State to manage which FAQ is open (0 means first one is open by default)
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive web app development, native Android/iOS app creation, and scalable cloud solutions, including expert DevOps, SecOps, and AWS-managed services."
    },
    {
      question: "Why should I choose your company for app development?",
      answer: "We don't just write code; we build businesses. Our team combines startup agility with enterprise-grade security to deliver high-performance, user-centric mobile applications."
    },
    {
      question: "Can you help migrate my business to the cloud?",
      answer: "Absolutely. We specialize in seamless cloud migrations with zero downtime, ensuring your infrastructure is optimized for cost, speed, and security from day one."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full font-sans">
      
      {/* --- FAQ SECTION --- */}
      <section className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16 bg-white">
        
        {/* Left Side: Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Using a similar 'Thumbs Up' or Team illustration */}
            <img 
              src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg" 
              alt="FAQ Illustration" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>

        {/* Right Side: FAQ Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Some FAQ's</span>
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Work with a Dedicated <br /> Tech Company
            </h2>
            <p className="text-gray-500 text-lg">
              Clarifying Your Queries: Dive into Common Questions About Our Tech Solutions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl transition-all duration-300 ${
                  openIndex === index ? 'shadow-lg border-l-4 border-orange-500' : 'shadow-sm border border-slate-100'
                }`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-slate-900' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  <span className={`p-1 rounded-full text-white transition-colors ${
                    openIndex === index ? 'bg-orange-500' : 'bg-[#0052CC]'
                  }`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BLUE CTA SECTION --- */}
      <section className="w-full bg-gradient-to-r from-blue-500 to-blue-700 relative overflow-hidden py-16 md:py-24">
        {/* Decorative Elements */}
        {/* Orange Plus Sign (Left) */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden md:block">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 0H60V40H100V60H60V100H40V60H0V40H40V0Z" fill="#FF5722" className="drop-shadow-lg"/>
            </svg>
        </div>
        
        {/* Orange Arc (Bottom Right) */}
        <div className="absolute bottom-0 right-10 md:right-32">
             <div className="w-16 h-16 border-t-8 border-r-8 border-[#FF5722] rounded-tr-full opacity-80"></div>
        </div>
        
        {/* Background Waves (Subtle) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 text-white space-y-6">
          <div className="flex items-center justify-center gap-3 opacity-90">
            <div className="h-[1px] w-12 bg-white"></div>
            <span className="uppercase tracking-[0.2em] text-sm font-semibold">More With Us</span>
            <div className="h-[1px] w-12 bg-white"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
            Ready to Showcase Your Business at the Top? <br />
            Join Forces With Us!
          </h2>

          <div className="pt-6">
            <Link 
              to="/service" 
              className="inline-flex items-center gap-2 bg-[#FF5722] hover:bg-[#e64a19] text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-orange-900/20 transition-all transform hover:-translate-y-1"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FAQAndCTA;