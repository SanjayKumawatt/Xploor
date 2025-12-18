import React from 'react';
import { 
  Home, Building2, Users, CheckCircle2, 
  BrainCircuit, ShieldCheck, Database, 
  Cloud, Lock, Smartphone, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="w-full font-sans bg-slate-50">
      
      {/* --- HERO SECTION --- */}
      <section className="w-full bg-[#0052CC] text-white py-20 px-6">
        <div className="container mx-auto text-center space-y-6">
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            XPLOOR
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-medium max-w-3xl mx-auto">
            Smart Long-Term Rental Platform: Simplifying Rentals in India.
          </p>
          <p className="max-w-2xl mx-auto text-blue-200 leading-relaxed">
            We are building XploorHub, a smart long-term rental platform that makes finding and listing homes easier, safer, and more efficient. With AI-driven tenant–landlord matching, verified listings, and a focus on students, professionals, and families, we aim to transform the rental experience in India.
          </p>
        </div>
      </section>

      {/* --- WHAT IS XPLOOR (Icons Grid) --- */}
      <section className="container mx-auto px-6 py-16 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            <div className="space-y-3">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Building2 size={28} />
              </div>
              <h3 className="font-bold text-slate-800">Flats & Homes</h3>
              <p className="text-sm text-slate-500">Curated listings for families and groups.</p>
            </div>

            <div className="space-y-3">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto">
                <Home size={28} />
              </div>
              <h3 className="font-bold text-slate-800">PGs & Hostels</h3>
              <p className="text-sm text-slate-500">Affordable stays for students & singles.</p>
            </div>

            <div className="space-y-3">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <BrainCircuit size={28} />
              </div>
              <h3 className="font-bold text-slate-800">AI Matching</h3>
              <p className="text-sm text-slate-500">Intelligent Tenant-Landlord compatibility.</p>
            </div>

            <div className="space-y-3">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-bold text-slate-800">Verified Trust</h3>
              <p className="text-sm text-slate-500">100% Verified listings & profiles.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- FEATURES SPLIT (Tenant vs Landlord) --- */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Key Features</h2>
          <p className="text-slate-500 mt-2">Tailored solutions for both sides of the rental ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tenant Card */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
              <Users size={24} /> For Tenants
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                <span className="text-slate-700">
                  <strong>Smart Recommendations:</strong> Based on Budget, Location, Duration & Lifestyle.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                <span className="text-slate-700">
                  <strong>Zero/Low Brokerage:</strong> Transparent listings to save your money.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                <span className="text-slate-700">
                  <strong>Verified Landlords:</strong> Safety first with verified property owners.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                <span className="text-slate-700">
                  <strong>Digital Booking:</strong> Seamless rental agreement support.
                </span>
              </li>
            </ul>
          </div>

          {/* Landlord Card */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-orange-500 mb-6 flex items-center gap-2">
              <Building2 size={24} /> For Landlords
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18} />
                <span className="text-slate-700">
                  <strong>AI-Matched Profiles:</strong> Find tenants that fit your property criteria.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18} />
                <span className="text-slate-700">
                  <strong>Screening & Verification:</strong> Reduce risks with background checks.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18} />
                <span className="text-slate-700">
                  <strong>Management Dashboard:</strong> Handle multiple listings in one place.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18} />
                <span className="text-slate-700">
                  <strong>Payment Tracking:</strong> Automated rent reminders and history.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* --- USP SECTION --- */}
      <section className="w-full bg-slate-900 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">Why Choose XPLOOR?</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Unique Differentiators</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
              <div className="text-orange-500 font-bold text-xl mb-3">AI Matching Logic</div>
              <p className="text-slate-400 text-sm">
                Advanced algorithms for Tenant ↔ Landlord compatibility, ensuring long-term peace of mind.
              </p>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
              <div className="text-blue-400 font-bold text-xl mb-3">Indian Reality Focus</div>
              <p className="text-slate-400 text-sm">
                Built specifically for the nuances of the Indian housing market and local rental challenges.
              </p>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
              <div className="text-green-400 font-bold text-xl mb-3">Trust-First Ecosystem</div>
              <p className="text-slate-400 text-sm">
                Rigorous verification processes + ratings create a safe environment for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK & BUSINESS MODEL --- */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Powering Innovation</h3>
            <p className="text-slate-600 mb-6">
              XPLOOR is built on a modern, scalable technology stack designed for speed and security.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white border rounded-lg">
                <Smartphone className="text-blue-600" size={20} />
                <div>
                  <div className="font-bold text-sm text-slate-800">Frontend</div>
                  <div className="text-xs text-slate-500">React / Next.js</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white border rounded-lg">
                <Database className="text-green-600" size={20} />
                <div>
                  <div className="font-bold text-sm text-slate-800">Backend</div>
                  <div className="text-xs text-slate-500">Node.js / Python</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white border rounded-lg">
                <Cloud className="text-orange-600" size={20} />
                <div>
                  <div className="font-bold text-sm text-slate-800">Cloud</div>
                  <div className="text-xs text-slate-500">AWS (EC2, S3)</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white border rounded-lg">
                <Lock className="text-purple-600" size={20} />
                <div>
                  <div className="font-bold text-sm text-slate-800">Security</div>
                  <div className="text-xs text-slate-500">OTP + Aadhaar</div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Model */}
          <div className="bg-blue-50 rounded-2xl p-8">
             <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Model</h3>
             <ul className="space-y-3">
               <li className="flex items-center gap-2 text-slate-700">
                 <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                 Commission per successful booking
               </li>
               <li className="flex items-center gap-2 text-slate-700">
                 <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                 Premium landlord subscriptions
               </li>
               <li className="flex items-center gap-2 text-slate-700">
                 <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                 Featured Listings
               </li>
             </ul>
             
             <div className="mt-6 pt-6 border-t border-blue-200">
               <h4 className="font-bold text-slate-800 mb-2">Future Add-ons:</h4>
               <p className="text-sm text-slate-600">
                 Rent Guarantee • Insurance • Property Management Services
               </p>
             </div>
          </div>

        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="w-full bg-orange-600 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience XPLOOR?</h2>
        <p className="text-orange-100 mb-8 max-w-xl mx-auto">
          Whether you are a student looking for a PG or a landlord with a vacant flat, we have the perfect solution for you.
        </p>
        <Link 
          to="/contact"
          className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors inline-flex items-center gap-2"
        >
          Contact Us for Demo <ArrowRight size={20} />
        </Link>
      </section>

    </div>
  );
};

export default Products;