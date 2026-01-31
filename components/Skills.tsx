
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0f172a]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-black text-[#2ecc71] uppercase tracking-[0.3em] mb-4">My Expertise</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
              Scaling Businesses with <br /> <span className="text-[#2ecc71]">Precision & Care</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              I specialize in taking the operational weight off your shoulders. From sourcing verified B2B leads to managing complex data projects, my approach is built on accuracy and reliability.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2ecc71]/30 transition-all group">
                <div className="text-[#2ecc71] mb-4 font-black text-4xl group-hover:scale-110 transition-transform">99%</div>
                <div className="text-white font-bold uppercase text-xs tracking-widest">Accuracy Rate</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2ecc71]/30 transition-all group">
                <div className="text-[#2ecc71] mb-4 font-black text-4xl group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-white font-bold uppercase text-xs tracking-widest">Available Support</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-10">
            {SKILLS.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-end mb-4">
                  <span className="text-lg font-bold text-white">{skill.name}</span>
                  <span className="text-[#2ecc71] font-black">{skill.level}%</span>
                </div>
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-[#2ecc71] to-[#27ae60] rounded-full shadow-[0_0_15px_rgba(46,204,113,0.4)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
