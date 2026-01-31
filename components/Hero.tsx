
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#0f172a]">
      {/* Abstract Background Decor */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#2ecc71]/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-1/2 -right-24 w-[600px] h-[600px] bg-[#2ecc71]/10 rounded-full blur-[150px] -z-10"></div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 max-w-7xl">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ecc71]/10 border border-[#2ecc71]/20 text-[#2ecc71] mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ecc71] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2ecc71]"></span>
            </span>
            <span className="text-sm font-bold uppercase tracking-widest">Available for projects</span>
          </div>

          <h1 className="text-5xl lg:text-8xl font-black text-white leading-tight mb-8">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] to-[#27ae60]">
              Neaz Md. Morshed
            </span>
          </h1>
          
          <h2 className="text-xl lg:text-3xl font-medium text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
            Professional <span className="text-white font-bold">Virtual Assistant</span> & <span className="text-white font-bold">Outsourcing Expert</span> dedicated to scaling your business operations.
          </h2>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
            {['B2B Lead Generation', 'Data Entry', 'Store Management'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-slate-300 font-semibold bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <CheckCircle2 size={18} className="text-[#2ecc71]" />
                {item}
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <a href="#projects" className="w-full sm:w-auto px-10 py-5 bg-[#2ecc71] text-slate-900 font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_20px_40px_rgba(46,204,113,0.2)]">
              VIEW PORTFOLIO <ArrowRight size={20} />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
              CONTACT ME
            </a>
          </div>
        </motion.div>

        {/* Right Content - Visual Representation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-2/5 relative"
        >
          <div className="relative z-10 p-4">
             <div className="aspect-square rounded-3xl overflow-hidden bg-slate-800 border-4 border-white/10 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
                  alt="Neaz Profile"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>
             </div>
             
             {/* Stats Overlay Cards */}
             <div className="absolute -bottom-4 -left-4 bg-slate-900 p-6 rounded-2xl border border-white/10 shadow-2xl animate-bounce-slow">
               <p className="text-3xl font-black text-[#2ecc71]">500+</p>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Tasks Completed</p>
             </div>
             
             <div className="absolute -top-4 -right-4 bg-[#2ecc71] p-6 rounded-2xl shadow-2xl rotate-6">
               <p className="text-xl font-black text-slate-900 leading-tight">100% Client<br/>Satisfaction</p>
             </div>
          </div>
          
          {/* Decorative Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-[#2ecc71]/20 rounded-full -z-10 animate-spin-slow"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
