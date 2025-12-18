import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, Smartphone, Cloud, Server, ShieldCheck, 
  BrainCircuit, Database, Globe, ArrowRight, CheckCircle2 
} from 'lucide-react';

const Services = () => {
  // Service Data
  const services = [
    {
      title: "Custom Web Development",
      desc: "We build high-performance, SEO-friendly, and scalable websites tailored to your brand. From corporate sites to complex SaaS platforms.",
      icon: <Globe size={32} />,
      features: ["React/Next.js", "Responsive Design", "SEO Optimized", "CMS Integration"]
    },
    {
      title: "Mobile App Development",
      desc: "Native and Cross-platform mobile apps that offer seamless user experiences on iOS and Android devices.",
      icon: <Smartphone size={32} />,
      features: ["Flutter/React Native", "iOS & Android", "User-Centric UI/UX", "Secure API Integration"]
    },
    {
      title: "Cloud Computing & Migration",
      desc: "Scalable cloud architectures that grow with your startup. We handle migrations, optimization, and management on Azure.",
      icon: <Cloud size={32} />,
      features: ["Azure/GCP", "Serverless Architecture", "Cost Optimization", "24/7 Monitoring"]
    },
    {
      title: "DevOps & SecOps",
      desc: "Automate your deployment pipelines and secure your infrastructure with our industry-leading DevOps practices.",
      icon: <ShieldCheck size={32} />,
      features: ["CI/CD Pipelines", "Docker & Kubernetes", "Infrastructure as Code", "Security Audits"]
    },
    {
      title: "AI & Machine Learning",
      desc: "Leverage the power of data. We build intelligent algorithms to automate processes and provide predictive analytics.",
      icon: <BrainCircuit size={32} />,
      features: ["Predictive Analytics", "NLP & Chatbots", "Data Visualization", "Process Automation"]
    },
    {
      title: "Server Management",
      desc: "Focus on your business while we ensure your servers are running at 99.9% uptime with robust security patching.",
      icon: <Server size={32} />,
      features: ["Linux/Windows", "Performance Tuning", "Backup Solutions", "Disaster Recovery"]
    }
  ];

  return (
    <div className="w-full font-sans bg-slate-50">

      {/* --- PAGE HEADER (Curved Blue - Consistent Design) --- */}
      <section className="relative w-full h-[40vh] bg-[#0052CC] text-white flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="z-10 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
          <div className="flex items-center gap-2 text-blue-200 text-sm font-medium uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </div>
        </div>

        {/* Curved Bottom Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="container mx-auto px-6 py-16 text-center max-w-4xl">
        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">What We Offer</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-6">
          Comprehensive Tech Solutions for <br /> <span className="text-blue-600">Modern Startups</span>
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed">
          At XploorHub, we don't just deliver code; we deliver value. Our services are designed to help you scale, optimize, and disrupt your industry with cutting-edge technology.
        </p>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              
              {/* Feature List inside Card */}
              <div className="space-y-2 border-t border-slate-100 pt-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-orange-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TECH STACK BANNER --- */}
      <section className="w-full bg-slate-900 py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">Powered by Modern Tech</h3>
              <p className="text-slate-400">We use the latest frameworks to ensure speed & security.</p>
            </div>
            
            {/* Tech Icons (Visual Representation) */}
            <div className="flex flex-wrap justify-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Replace with actual SVG/Images if needed, using generic placeholders here */}
               <div className="flex items-center gap-2 text-white font-semibold"><Code2/> React</div>
               <div className="flex items-center gap-2 text-white font-semibold"><Database/> Node.js</div>
               <div className="flex items-center gap-2 text-white font-semibold"><Smartphone/> Flutter</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-20 px-6 text-center text-white">
        <div className="container mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold">Ready to Build Something Amazing?</h2>
          <p className="text-orange-100 text-lg">
            Let's turn your vision into reality. Partner with XploorHub for your next big project.
          </p>
          <div className="pt-4">
            <Link 
              to="/get-quote" 
              className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all shadow-xl inline-flex items-center gap-2"
            >
              Get A Free Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;