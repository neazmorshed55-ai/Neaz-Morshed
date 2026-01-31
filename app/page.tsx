
"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, CheckCircle2, ArrowRight, Briefcase, 
  Mail, Phone, Send, ExternalLink, Award, Users, 
  Target, Zap, MousePointer2, Layout, Github, Linkedin, Globe
} from 'lucide-react';

// Supabase Readiness (Placeholders)
// const supabaseUrl = 'YOUR_SUPABASE_URL';
// const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
// export const supabase = createClient(supabaseUrl, supabaseKey);

export default function PortfolioPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hard-coded Portfolio Content
  const personalInfo = {
    name: "NEAZ MD. MORSHED",
    title: "Virtual Assistant & Professional Outsourcer",
    email: "hello@neazmorshed.com",
    phone: "+880 123 456 789",
    location: "Dhaka, Bangladesh"
  };

  const skills = [
    { name: 'B2B Lead Generation', level: 98 },
    { name: 'Virtual Assistant Services', level: 95 },
    { name: 'Data Entry & Web Research', level: 92 },
    { name: 'E-commerce Management', level: 90 },
    { name: 'SEO & Content Marketing', level: 85 },
    { name: 'Email Marketing (Cold Email)', level: 88 }
  ];

  const experience = [
    {
      id: 1,
      year: '2022 - Present',
      role: 'Top Rated Virtual Assistant',
      company: 'Upwork Global',
      desc: 'Orchestrating complex lead generation workflows for over 50+ international clients, maintaining a 100% success rate.'
    },
    {
      id: 2,
      year: '2020 - 2022',
      role: 'Data Mining Specialist',
      company: 'Creative Outsourcing Hub',
      desc: 'Led a specialized team in extracting and validating high-volume data sets for Fortune 500 market research projects.'
    },
    {
      id: 3,
      year: '2018 - 2020',
      role: 'Junior VA & SEO Intern',
      company: 'Digital Pulse Solutions',
      desc: 'Assisted in technical SEO audits and daily administrative tasks for rapid-growth e-commerce startups.'
    }
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: "Real Estate Leads Pro",
      category: "Lead Generation",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Amazon FBA Operations",
      category: "Store Management",
      image: "https://images.unsplash.com/photo-1523474253046-2cd2c78b6ad1?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Market Insight Data",
      category: "Data Research",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Cold Email Campaign",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="bg-[#0b0f1a] text-white min-h-screen">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center max-w-7xl">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#2ecc71] rounded-lg flex items-center justify-center font-black text-slate-950 group-hover:rotate-6 transition-transform shadow-[0_0_20px_rgba(46,204,113,0.3)]">
              NM
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">{personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ')[1]}</span>
              <span className="text-[10px] font-bold text-[#2ecc71] tracking-[0.3em] uppercase mt-1">Professional</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-black tracking-[0.2em] text-slate-400 hover:text-[#2ecc71] transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-[#2ecc71] text-slate-950 px-8 py-3 rounded-full font-black text-xs tracking-widest hover:scale-105 transition-all shadow-lg shadow-[#2ecc71]/20"
            >
              HIRE ME
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-[#2ecc71]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="lg:hidden fixed inset-0 bg-[#0b0f1a] z-40 p-12 flex flex-col justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-black text-white hover:text-[#2ecc71] transition-colors flex items-center justify-between"
              >
                {link.name} <ArrowRight className="text-[#2ecc71]" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
          {/* Background Ambient Lights */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#2ecc71]/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#2ecc71]/5 rounded-full blur-[150px] -z-10"></div>

          <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-20 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-3/5 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#2ecc71] mb-8">
                <span className="w-2 h-2 bg-[#2ecc71] rounded-full animate-ping"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Operational excellence</span>
              </div>
              <h1 className="text-5xl lg:text-8xl font-black leading-[1.1] mb-8">
                I'm <span className="text-gradient">{personalInfo.name}</span>
              </h1>
              <h2 className="text-xl lg:text-3xl font-medium text-slate-400 mb-10 max-w-2xl leading-relaxed">
                Expert <span className="text-white font-bold">Virtual Assistant</span> & <span className="text-white font-bold">Data Scientist</span> scaling business operations through smart outsourcing.
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <a 
                  href="#portfolio" 
                  className="w-full sm:w-auto px-10 py-5 bg-[#2ecc71] text-slate-950 font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_20px_40px_rgba(46,204,113,0.3)]"
                >
                  VIEW PORTFOLIO <ArrowRight size={20} />
                </a>
                <div className="flex items-center gap-4 text-slate-400">
                  <span className="text-sm font-bold tracking-widest uppercase">Follow:</span>
                  <a href="#" className="hover:text-[#2ecc71] transition-colors"><Github size={18}/></a>
                  <a href="#" className="hover:text-[#2ecc71] transition-colors"><Linkedin size={18}/></a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full lg:w-2/5 relative"
            >
              <div className="relative p-4 group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-900 border-8 border-white/5 shadow-3xl relative">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                    alt="Neaz Profile"
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-transparent to-transparent opacity-60"></div>
                </div>
                
                {/* Floating Metrics */}
                <div className="absolute -bottom-6 -left-6 bg-[#0b0f1a] p-6 rounded-3xl border border-white/10 shadow-2xl animate-bounce-slow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#2ecc71] rounded-2xl flex items-center justify-center text-slate-950">
                      <Zap size={28} />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-white leading-none">99%</p>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Accuracy</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-10 -right-8 bg-[#2ecc71] p-6 rounded-[2rem] shadow-2xl rotate-12">
                   <p className="text-slate-950 font-black text-xl leading-tight text-center">500+ <br/> <span className="text-xs uppercase tracking-tighter">Tasks</span></p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="services" className="py-32 bg-[#0b0f1a]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/2">
                <span className="text-xs font-black text-[#2ecc71] uppercase tracking-[0.4em] mb-4 inline-block">Service Excellence</span>
                <h2 className="text-4xl lg:text-6xl font-black mb-10 leading-tight">Expert Solutions <br /> For <span className="text-gradient">Modern Businesses</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { icon: <Target />, title: 'Lead Gen', desc: 'Sourcing verified high-intent B2B leads.' },
                    { icon: <Users />, title: 'VA Support', desc: 'Handling routine ops so you can lead.' },
                    { icon: <Layout />, title: 'Admin', desc: 'Data entry, mining and research.' },
                    { icon: <MousePointer2 />, title: 'SEO', desc: 'Technical & on-page optimization.' }
                  ].map((service, i) => (
                    <div key={i} className="group p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-[#2ecc71]/20 transition-all">
                      <div className="text-[#2ecc71] mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                      <h4 className="text-lg font-black text-white mb-3 tracking-tight">{service.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 space-y-12 bg-white/5 p-10 lg:p-16 rounded-[4rem] border border-white/5 shadow-2xl">
                <h3 className="text-2xl font-black text-white mb-8">Skill Proficiency</h3>
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{skill.name}</span>
                      <span className="text-[#2ecc71] font-black">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-[#2ecc71] to-[#27ae60] rounded-full"
                      />
                    </div>
                  </div>
                ))}
                <div className="pt-8 flex flex-wrap gap-3">
                  {['Shopify', 'Amazon Central', 'MailChimp', 'Figma', 'Excel Pro'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-slate-900 text-slate-500 text-[10px] font-black rounded-lg uppercase tracking-widest border border-white/5">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 bg-[#0e1422]">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-24">
              <span className="text-xs font-black text-[#2ecc71] uppercase tracking-[0.4em] mb-4 inline-block">Journey</span>
              <h2 className="text-4xl lg:text-6xl font-black">Professional Path</h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>

              <div className="space-y-24">
                {experience.map((exp, index) => (
                  <motion.div 
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                      <span className="text-[#2ecc71] font-black text-xl mb-3 tracking-tighter">{exp.year}</span>
                      <h4 className="text-2xl lg:text-3xl font-black text-white mb-2 leading-tight">{exp.role}</h4>
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">{exp.company}</p>
                      <p className="text-slate-400 leading-relaxed max-w-sm">{exp.desc}</p>
                    </div>

                    <div className="relative z-10 w-16 h-16 rounded-full bg-[#0b0f1a] border-2 border-[#2ecc71] flex items-center justify-center text-[#2ecc71] shadow-[0_0_20px_rgba(46,204,113,0.3)] shrink-0 group hover:bg-[#2ecc71] hover:text-slate-950 transition-colors cursor-default">
                      <span className="text-xl font-black">{index + 1}</span>
                    </div>

                    <div className="md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-32 bg-[#0b0f1a]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <span className="text-xs font-black text-[#2ecc71] uppercase tracking-[0.4em] mb-4 inline-block">Portfolio</span>
                <h2 className="text-4xl lg:text-6xl font-black">Success Stories</h2>
              </div>
              <p className="text-slate-500 max-w-xs text-center md:text-right text-sm">
                A selection of high-impact projects delivering consistent ROI for entrepreneurs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {portfolioProjects.map((project, idx) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative bg-slate-900 rounded-[3rem] overflow-hidden border border-white/5 hover:border-[#2ecc71]/40 transition-all duration-500 shadow-2xl"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-[#0b0f1a]/20 to-transparent flex flex-col justify-end p-12">
                    <span className="text-[#2ecc71] font-black text-xs uppercase tracking-[0.3em] mb-4">{project.category}</span>
                    <h4 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight">{project.title}</h4>
                    <a href="#" className="inline-flex items-center gap-3 text-white font-black text-xs uppercase tracking-widest hover:text-[#2ecc71] transition-colors">
                      VIEW PROJECT DETAILS <ExternalLink size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-[#0e1422]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="bg-[#0b0f1a] rounded-[4rem] overflow-hidden border border-white/5 shadow-3xl">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 bg-[#2ecc71] p-12 lg:p-20 flex flex-col justify-between">
                  <div>
                    <h3 className="text-slate-950 text-5xl font-black mb-8 leading-[1.1]">Let's build <br /> your team.</h3>
                    <p className="text-slate-900 font-bold mb-12 text-lg leading-relaxed">
                      Expert administrative support is just an inquiry away. Reach out to scale your business efficiency today.
                    </p>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-[#2ecc71] shadow-xl">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-slate-950 font-black text-[10px] uppercase tracking-widest opacity-60">Email Inquiries</p>
                        <p className="text-slate-950 font-black text-lg">{personalInfo.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-[#2ecc71] shadow-xl">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-slate-950 font-black text-[10px] uppercase tracking-widest opacity-60">Instant Support</p>
                        <p className="text-slate-950 font-black text-lg">{personalInfo.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-3/5 p-12 lg:p-20">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-slate-900/50 border-b border-white/10 focus:border-[#2ecc71] px-0 py-4 text-white outline-none transition-all placeholder:text-slate-700 font-bold" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Email Address</label>
                      <input type="email" placeholder="john@company.com" className="w-full bg-slate-900/50 border-b border-white/10 focus:border-[#2ecc71] px-0 py-4 text-white outline-none transition-all placeholder:text-slate-700 font-bold" />
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Required Service</label>
                      <div className="relative">
                        <select className="w-full bg-slate-900/50 border-b border-white/10 focus:border-[#2ecc71] px-0 py-4 text-white outline-none transition-all font-bold appearance-none cursor-pointer">
                          <option>Lead Generation Campaign</option>
                          <option>Virtual Assistant Support</option>
                          <option>Store Management</option>
                          <option>Data Mining Project</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
                          <ArrowRight size={18} className="rotate-90" />
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Project Details</label>
                      <textarea rows={4} placeholder="Tell me about your business goals..." className="w-full bg-slate-900/50 border-b border-white/10 focus:border-[#2ecc71] px-0 py-4 text-white outline-none transition-all resize-none placeholder:text-slate-700 font-bold"></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <button className="w-full py-6 bg-[#2ecc71] text-slate-950 font-black rounded-[2rem] flex items-center justify-center gap-4 hover:scale-[1.02] transition-all shadow-2xl shadow-[#2ecc71]/20 tracking-widest">
                        SEND INQUIRY <Send size={20} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 bg-[#0b0f1a] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#2ecc71] rounded-2xl flex items-center justify-center font-black text-slate-950 text-xl shadow-lg">
                NM
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white leading-none tracking-tighter uppercase">{personalInfo.name}</span>
                <span className="text-[10px] font-bold text-[#2ecc71] uppercase tracking-[0.4em] mt-2">Quality & Integrity</span>
              </div>
            </div>
            
            <div className="flex gap-12">
              {['LinkedIn', 'Upwork', 'Behance', 'Twitter'].map(social => (
                <a key={social} href="#" className="text-slate-500 font-black hover:text-[#2ecc71] transition-colors uppercase tracking-[0.2em] text-xs">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
            <p className="text-slate-600 font-bold text-[10px] uppercase tracking-widest">© 2024 {personalInfo.name}. All rights reserved.</p>
            <div className="flex gap-8 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <div className="fixed bottom-10 right-10 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-16 h-16 bg-[#2ecc71] text-slate-950 rounded-[2rem] flex items-center justify-center shadow-[0_0_40px_rgba(46,204,113,0.3)] hover:scale-110 transition-all group"
        >
          <ArrowRight size={32} className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
