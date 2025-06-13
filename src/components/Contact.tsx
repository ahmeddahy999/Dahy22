import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      {/* Darker background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0052D4]/8 to-black/60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="modern-blur-fade opacity-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide">
              Get in <span className="dynamic-gradient-text">Touch</span>
            </h2>
            <p className="text-lg font-light text-gray-400 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Ready to transform your business with AI? Let's discuss your project and explore the possibilities.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center glass-card bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-500 group">
              <div className="w-12 h-12 dynamic-gradient-icon rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold tracking-wide">Call Us</p>
                <p className="text-gray-400 font-light tracking-wide">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center glass-card bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-500 group">
              <div className="w-12 h-12 dynamic-gradient-icon rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold tracking-wide">Email Us</p>
                <p className="text-gray-400 font-light tracking-wide">hello@aistudio.com</p>
              </div>
            </div>

            <div className="flex items-center glass-card bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-500 group">
              <div className="w-12 h-12 dynamic-gradient-icon rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold tracking-wide">Visit Us</p>
                <p className="text-gray-400 font-light tracking-wide">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;