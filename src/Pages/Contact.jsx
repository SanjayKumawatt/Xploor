import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react'; // Added Loader2 and CheckCircle2

import hero from "../assets/contact.avif";

const Contact = () => {
  // State manage karne ke liye
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Page reload hone se rokta hai
    setIsSubmitting(true);

    // Ye setTimeout fake network request simulate kar raha hai (2 seconds wait)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true); // Success message dikhane ke liye state change
      
      // Optional: Agar form reset karna ho (form inputs clear karne ke liye logic yaha aayega)
      e.target.reset();
    }, 2000);
  };

  return (
    <div className="w-full font-sans bg-slate-50">

      {/* --- PAGE HEADER --- */}
      <section className="relative w-full h-[40vh] bg-[#0052CC] text-white flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="z-10 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contact Us</h1>
          <div className="flex items-center gap-2 text-blue-200 text-sm font-medium uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      {/* --- INFO CARDS SECTION --- */}
      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Address Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-orange-500 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} />
            </div>
            <h3 className="font-bold text-xl text-slate-800 mb-2">Our Location</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              B-148 Mahal Yojna Jagatpura, <br /> Jaipur 302017, Rajasthan
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-blue-600 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={32} />
            </div>
            <h3 className="font-bold text-xl text-slate-800 mb-2">Email Us</h3>
            <p className="text-slate-500 text-sm">
              support@Xploorhub.com <br />
              info@Xploorhub.com
            </p>
          </div>

          {/* Hours/Phone Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-green-500 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={32} />
            </div>
            <h3 className="font-bold text-xl text-slate-800 mb-2">Working Hours</h3>
            <p className="text-slate-500 text-sm">
              Mon - Sat: 9:00 AM - 7:00 PM <br />
              Sunday: Closed
            </p>
          </div>

        </div>
      </section>

      {/* --- FORM & MAP SECTION --- */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          
          {/* Left: Contact Form */}
          <div className="w-full lg:w-1/2 p-8 md:p-12">
            
            {/* Condition: Agar Success hai to Message dikhao, nahi to Form dikhao */}
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fadeIn py-10">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500 max-w-sm mb-8">
                  Thank you for reaching out. We have received your message and will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Get In Touch</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-slate-500 mb-8">
                  Have a project in mind or want to learn more about our services? Fill out the form below and our team will get back to you shortly.
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Your Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                      <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Subject</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-600">
                      <option>Web Development</option>
                      <option>App Development</option>
                      <option>Cloud Services</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Message</label>
                    <textarea required rows="4" placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-bold py-4 rounded-lg shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Sending... <Loader2 className="animate-spin" size={18} /></>
                    ) : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right: Google Map */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img src={hero} alt="" className="object-cover h-full w-full" />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;