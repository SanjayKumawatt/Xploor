import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full font-sans relative pt-16">
      
      {/* --- ORANGE CONTACT BAR (Floating Top) --- */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-[#FF5722] rounded-xl p-8 md:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          
          {/* Address Item */}
          <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-full shrink-0">
              <MapPin size={28} />
            </div>
            <div>
              <h4 className="font-bold text-lg">Our Location</h4>
              <p className="text-white/90 max-w-xs leading-snug">
                B-148 Mahal Yojna Jagatpura, <br /> Jaipur 302017
              </p>
            </div>
          </div>

          {/* Email Item */}
          <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-full shrink-0">
              <Mail size={28} />
            </div>
            <div>
              <h4 className="font-bold text-lg">Email Us</h4>
              <a href="mailto:support@Xploorhub.com" className="text-white/90 hover:underline">
                support@Xploorhub.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* --- MAIN FOOTER CONTENT (Blue Background) --- */}
      {/* Using negative margin top to sit behind the orange bar if needed, 
          but here standard flow works better with z-index */}
      <div className="bg-[#0052CC] text-white pt-24 pb-8 -mt-12 relative overflow-hidden">
        
        {/* Decorative Orange Plus Sign (Left) */}
        <div className="absolute top-20 left-10 hidden md:block opacity-80">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                <path d="M40 0H60V40H100V60H60V100H40V60H0V40H40V0Z" fill="#FF5722"/>
            </svg>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          
          {/* COLUMN 1: Company Info */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold tracking-tight">
                XPLOORHUB<span className="text-sm align-top">™</span>
              </h2>
              <span className="text-[10px] font-semibold tracking-[0.2em] opacity-80">
                INDIA PRIVATE LIMITED
              </span>
            </div>
            <p className="text-blue-100 leading-relaxed opacity-90 text-sm md:text-base pr-4">
              Our approach to digital excellence is uniquely built around what we know works. We help startups scale with verified strategies and robust technology.
            </p>
          </div>

          {/* COLUMN 2: Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-1">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/service' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-2 text-blue-100 hover:text-orange-400 hover:translate-x-1 transition-all duration-300"
                  >
                    <ChevronRight size={16} className="text-orange-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Contact Info (Simplified) */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-1">
              Contact Info
            </h3>
            <div className="space-y-6 text-blue-100">
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-500 shrink-0 mt-1" size={20} />
                <p className="leading-relaxed">
                  B-148 Mahal Yojna Jagatpura, <br /> Jaipur 302017, Rajasthan
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="text-orange-500 shrink-0" size={20} />
                <a href="mailto:support@Xploorhub.com" className="hover:text-white transition-colors">
                  support@Xploorhub.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- COPYRIGHT BAR --- */}
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-blue-400/30 text-center text-sm text-blue-200">
          <p>
            Copyright © {new Date().getFullYear()} <span className="text-white font-semibold">XploorHub India Private Limited</span>. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;