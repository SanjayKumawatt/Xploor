import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutAndCTA = () => {
  const points = [
    {
      title: "Tailored Strategies",
      desc: "We understand that every startup is unique. We work closely with you to decode your goals and deliver high-impact results.",
      color: "text-orange-500",
      bg: "bg-orange-100"
    },
    {
      title: "Expert Tech Stack",
      desc: "Our team of elite engineers is well-versed in the latest frameworks and industry best practices to keep you ahead.",
      color: "text-blue-500",
      bg: "bg-blue-100"
    },
    {
      title: "End-to-End Synergy",
      desc: "We provide comprehensive support from initial brainstorming to final deployment and beyond in your digital journey.",
      color: "text-green-500",
      bg: "bg-green-100"
    }
  ];

  return (
    <div className="w-full bg-white font-sans">
      
      {/* SECTION 1: WHO WE ARE */}
      <section className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Illustration */}
        <div className="w-full lg:w-1/2">
          <img 
            src="https://img.freepik.com/free-vector/hand-drawn-business-planning-concept_52683-76248.jpg" 
            alt="Who we are illustration" 
            className="w-full h-auto"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Who We Are</span>
          </div>
          
          <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
            Unleashing Technological <br /> Innovation
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Welcome to <span className="font-bold text-blue-600">XploorHub India</span>, a dynamic startup powerhouse specializing in web scaling, cloud architecture, DevOps, AI solutions, and machine learning. We don't just build apps; we create digital legacies.
          </p>

          <div className="space-y-6 pt-4">
            {points.map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className={`mt-1 p-1 rounded-full ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: ORANGE CTA BANNER */}
      <section className="container mx-auto px-6 pb-20">
        <div className="w-full bg-[#FF5722] rounded-[40px] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-x-12 -translate-y-12"></div>
          
          <div className="z-10 text-white space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black leading-none italic">
              WE WORK TOGETHER <br /> FOR SUCCESS
            </h2>
            <p className="text-xl md:text-2xl font-medium tracking-wide">
              Take Your Business to the Next Level!
            </p>
          </div>

          {/* Right Side Image/Icon */}
          <div className="z-10 mt-8 md:mt-0">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" 
              alt="Rocket icon" 
              className="w-32 h-32 md:w-48 md:h-48 animate-bounce transition-all duration-1000"
            />
          </div>
          
          {/* Subtle Abstract Bg */}
          <div className="absolute bottom-0 right-0 opacity-10">
             <svg width="200" height="200" viewBox="0 0 200 200" fill="white">
                <circle cx="150" cy="150" r="100" />
             </svg>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutAndCTA;