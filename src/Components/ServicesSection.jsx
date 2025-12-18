import React from 'react';
import { FileCode2, Smartphone, ShieldCheck, Cloud, BrainCircuit, Server, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      desc: "We craft stunning, responsive, and high-performance websites that mirror your brand identity and drive higher conversion rates.",
      icon: <FileCode2 size={28} className="text-slate-700" />
    },
    {
      title: "App Development",
      desc: "From conceptualization to deployment, we build robust mobile applications (iOS & Android) that offer seamless user experiences.",
      icon: <Smartphone size={28} className="text-slate-700" />
    },
    {
      title: "DevOps & SecOps",
      desc: "Streamline your operations and enhance security. We embrace DevOps mindsets to accelerate delivery while keeping data secure.",
      icon: <ShieldCheck size={28} className="text-slate-700" />
    },
    {
      title: "Cloud Computing",
      desc: "Harness the limitless potential of the cloud. We provide scalable cloud architectures that grow with your startup.",
      icon: <Cloud size={28} className="text-slate-700" />
    },
    {
      title: "Machine Learning",
      desc: "Leverage the power of AI. We develop intelligent algorithms and data-driven solutions to automate complex business processes.",
      icon: <BrainCircuit size={28} className="text-slate-700" />
    },
    {
      title: "Server Management",
      desc: "Focus on your business while we handle your infrastructure. Our experts ensure 99.9% uptime and optimal server performance.",
      icon: <Server size={28} className="text-slate-700" />
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 font-sans">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-8 bg-orange-500"></div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Our Services</span>
            <div className="h-[2px] w-8 bg-orange-500"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            You Take Growth For Business
          </h2>
          <p className="text-gray-500 text-lg">
            Unlock your business's full potential with our tailored technology solutions. From web development to AI, we help you thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Icon Container with Dots Decoration */}
              <div className="relative mb-6">
                {/* Top Blue Dot */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Main Icon Circle */}
                <div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm relative z-10 group-hover:border-blue-500 transition-colors">
                  {service.icon}
                </div>

                {/* Bottom Orange Dot */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-16 flex justify-center">
          <Link 
            to="/service" 
            className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-blue-200/50 hover:scale-105 transition-all flex items-center gap-2"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;