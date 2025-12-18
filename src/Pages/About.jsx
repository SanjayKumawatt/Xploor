import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Code2, Smartphone, Cloud, Server, 
  Users, Layers, Trophy, ArrowRight 
} from 'lucide-react';

const About = () => {
  return (
    <div className="w-full font-sans bg-slate-50">

      {/* --- PAGE HEADER (Curved Blue Background) --- */}
      <section className="relative w-full h-[40vh] bg-[#0052CC] text-white flex flex-col justify-center items-center overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="z-10 text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">About Us</h1>
          <div className="flex items-center gap-2 text-blue-200 text-sm font-medium uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
        </div>

        {/* Curved Bottom Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      {/* --- SECTION 1: GROW YOUR BUSINESS --- */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">About Us</span>
              <div className="h-[2px] w-8 bg-orange-500"></div>
            </div>
            
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Grow Your Business with <br /> <span className="text-blue-600">XploorHub India</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Our team of skilled professionals understands the importance of staying ahead in a competitive market. We are dedicated to helping businesses grow and succeed in an ever-changing digital landscape.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              At XploorHub, we provide a comprehensive range of technology solutions including web development, app development, DevOps, SecOps, and AI solutions to take your business to new heights.
            </p>

            <Link 
              to="/contact" 
              className="inline-block bg-[#003566] text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-all shadow-lg mt-4"
            >
              Learn More
            </Link>
          </div>

          {/* Right: Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" 
              alt="Grow Business Illustration" 
              className="w-full max-w-lg h-auto drop-shadow-xl rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: SERVICES CARDS GRID --- */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Web Development", icon: <Code2 size={32}/>, desc: "We excel in crafting attractive and user-friendly websites." },
            { title: "App Development", icon: <Smartphone size={32}/>, desc: "Robust mobile solutions from conceptualization to deployment." },
            { title: "DevOps & SecOps", icon: <Server size={32}/>, desc: "Streamline operations and enhance collaboration securely." },
            { title: "Cloud Computing", icon: <Cloud size={32}/>, desc: "Harness the capacity of cloud with comprehensive services." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: UNLEASHING INNOVATION (Thumbs Up) --- */}
      <section className="container mx-auto px-6 py-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <img 
            src="https://img.freepik.com/free-vector/hand-drawn-business-planning-concept_52683-76248.jpg" 
            alt="Innovation Illustration" 
            className="w-full max-w-md mx-auto"
          />
        </div>
        
        <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2">
          <div className="space-y-2">
            <span className="text-orange-500 font-bold uppercase text-sm">Who We Are</span>
            <h2 className="text-4xl font-extrabold text-slate-900">Unleashing Technological Innovation</h2>
            <p className="text-gray-500 pt-2">
              Welcome to XploorHub, a dynamic and revolutionary technology company specializing in web improvement, app development, and AI solutions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-1 bg-orange-100 text-orange-500 rounded-full mt-1"><CheckCircle2 size={20}/></div>
              <p className="text-gray-700 text-sm font-medium">We understand that every business is unique. We work closely to understand goals.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-1 bg-blue-100 text-blue-500 rounded-full mt-1"><CheckCircle2 size={20}/></div>
              <p className="text-gray-700 text-sm font-medium">Our team of skilled professionals is well-versed in the latest technologies.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-1 bg-green-100 text-green-500 rounded-full mt-1"><CheckCircle2 size={20}/></div>
              <p className="text-gray-700 text-sm font-medium">We provide comprehensive end-to-end support throughout your digital journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: BLUE STATS & PROCESS AREA --- */}
      <div className="w-full bg-[#0052CC] text-white mt-16 pt-20 pb-32 px-6 relative overflow-hidden">
         {/* Map Background Pattern (Simulated) */}
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

         <div className="container mx-auto">
            
            {/* Top Text */}
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Take Your Website to Next <br/> Level Right Now!</h2>
              <Link to="/contact" className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-8 py-3 rounded-md font-bold transition-all shadow-lg inline-block">
                Start Now
              </Link>
            </div>

            
            {/* Process Steps (Wave Design Simulated) */}
            <div className="bg-white rounded-[30px] p-12 text-slate-900 text-center relative z-10">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">How We Do It</span>
              <h3 className="text-3xl font-extrabold mb-12 mt-2">Steps to Take Your Business to <br/> Next Level</h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* Connecting Line (Desktop Only) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-1 border-t-4 border-dashed border-blue-200 -z-0"></div>

                {[
                  { id: "01", title: "Advertising and Marketing", color: "bg-orange-500" },
                  { id: "02", title: "App Development", color: "bg-blue-800" },
                  { id: "03", title: "Server Management", color: "bg-orange-500" },
                  { id: "04", title: "Web Development", color: "bg-blue-800" }
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center relative z-10 group">
                    <div className={`w-24 h-24 rounded-full ${step.color} text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6 border-4 border-white group-hover:scale-110 transition-transform duration-300`}>
                      {step.id}
                    </div>
                    <h4 className="font-bold text-lg text-slate-800 max-w-[150px]">{step.title}</h4>
                  </div>
                ))}
              </div>
            </div>

         </div>
      </div>

    </div>
  );
};

export default About;