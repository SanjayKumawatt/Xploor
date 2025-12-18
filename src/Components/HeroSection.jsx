import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="w-full min-h-[600px] bg-[#0056D2] flex items-center justify-center px-6 md:px-16 py-12 text-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Side: Illustration / Image Area */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative max-w-lg w-full">
            {/* Yaha tu apni illustration image use kar sakta hai */}
            <img
              src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
              alt="Digital Solutions Illustration"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Next-Gen Digital Hub: <br />
            Scaling Your Startup Vision!
          </h1>

          <p className="text-sm md:text-base opacity-90 leading-relaxed font-light">
            Empower Your Brand with XploorHub India: From Disruptive Web Architecture
            and Agile Development to Growth-Driven SEO - We are your Strategic Tech
            Partner for the Digital Era.
          </p>


          {/* === BUTTONS SECTION ADDED HERE === */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              to="/service"

              className="bg-white text-[#0052CC] px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;