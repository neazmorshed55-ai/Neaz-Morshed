
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#0f172a]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm font-black text-[#2ecc71] uppercase tracking-[0.3em] mb-4 text-center md:text-left">Portfolio</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-white text-center md:text-left">Featured Projects</h3>
          </div>
          <p className="text-slate-400 max-w-md text-center md:text-right">
            Browse through some of the high-impact projects I have managed for clients across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#1e293b] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-[#2ecc71]/30 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent flex flex-col justify-end p-10">
                <span className="text-[#2ecc71] font-bold text-xs uppercase tracking-[0.2em] mb-3">{project.category}</span>
                <h4 className="text-3xl font-black text-white mb-4 leading-tight">{project.title}</h4>
                <p className="text-slate-300 mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">
                  {project.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest hover:text-[#2ecc71] transition-colors">
                  Case Study <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-12 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-[#2ecc71] hover:text-slate-900 transition-all tracking-widest">
            VIEW ALL WORK
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
