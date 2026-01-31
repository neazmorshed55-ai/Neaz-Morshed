
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#1e293b]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-[#2ecc71] uppercase tracking-[0.3em] mb-4">My Journey</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-white">Other Experiences</h3>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
                  <span className="text-[#2ecc71] font-black text-xl mb-2">{exp.year}</span>
                  <h4 className="text-2xl font-black text-white mb-2">{exp.role}</h4>
                  <p className="text-slate-400 font-bold uppercase text-sm tracking-widest mb-4">{exp.company}</p>
                  <p className="text-slate-500 leading-relaxed max-w-md">{exp.description}</p>
                </div>

                <div className="relative z-10 w-16 h-16 rounded-full bg-[#2ecc71] border-8 border-[#1e293b] flex items-center justify-center text-slate-900 shadow-[0_0_20px_rgba(46,204,113,0.3)]">
                  <span className="text-xl font-black">{index + 1}</span>
                </div>

                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
