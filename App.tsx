
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, CheckCircle2, ArrowRight, Briefcase, 
  Mail, Phone, Send, ExternalLink, Target, 
  Database, Search, BarChart3, Globe, ShieldCheck
} from 'lucide-react';

// Supabase Readiness (Future configuration)
// const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const name = "NEAZ MD. MORSHED";
  const title = "Virtual Assistant & Professional Outsourcer";

  const skills = [
    { name: 'Lead Generation', level: 95 },
    { name: 'Data Entry & Web Research', level: 98 },
    { name: 'SEO & Digital Marketing', level: 85 },
    { name: 'E-commerce Management', level: 90 },
    { name: 'Cold Email Marketing', level: 88 }
  ];

  const services = [
    {
      id: 1,
      title: 'Virtual Assistance',
      icon: <Briefcase className="w-8 h-8" />,
      desc: 'Expert administrative support to streamline your daily operations.'
    },
    {
      id: 2,
      title: 'B2B Lead Generation',
      icon: <Target className="w-8 h-8" />,
      desc: 'Sourcing high-quality, verified leads for your sales funnel.'
    },
    {
      id: 3,
      title: 'Data Mining',
      icon: <Database className="w-8 h-8" />,
      desc: 'Extracting valuable insights and data points from complex sources.'
    }
  ];

  const experience = [
    {
      id: 1,
      year: '2022 - Present',
      role: 'Top Rated VA',
      company: 'Upwork Global',
      desc: 'Managing operations for multiple international clients with 100% success rate.'
    },
    {
      id: 2,
      year: '2020 - 2022',
      role: 'Lead Project Coordinator',
      company: 'Digital Solutions Hub',
      desc: 'Headed a team of 10 data mining specialists for Fortune 500 projects.'
    }
  ];

  const portfolio = [
    { id: 1, title: 'Real Estate Leads Pro', cat: 'Lead Gen', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Shopify Store Management', cat: 'VA', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Market Analysis 2024', cat: 'Research', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <div className="bg-[#0b0f1a] text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-[#2ecc71] rounded-lg flex items-center justify-center font-black text-slate-950 group-hover:rotate-6 transition-transform">NM</div>
            <span className="text-xl font-black tracking-tighter">NEAZ MORSHED</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {['Home', 'Skills', 'Portfolio', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-xs font-bold tracking-widest text-slate-400 hover:text-[#2ecc71] transition-colors uppercase">
                {link}
              </a>
            ))}
            <a href="#contact" className="bg-[#2ecc71] text-slate-950 px-6 py-2 rounded-full font-black text-xs hover:scale-105 transition-all">HIRE ME</a>
          </div>

          <button className="lg:hidden text-[#2ecc71]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center max-w-7xl relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 border border-[#2ecc71]/20 text-[#2ecc71] text-[10px] font-black uppercase tracking-widest mb-6">
              Available for new projects
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-[1.1] mb-8">
              I'M <span className="text-[#2ecc71] drop-shadow-[0_0_15px_rgba(46,204,113,0.3)]">{name}</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
              Your dedicated <span className="text-white font-bold">{title}</span>. I help business owners scale faster with efficient outsourcing solutions.
            </p>
            <div className="flex gap-6">
              <a href="#portfolio" className="bg-[#2ecc71] text-slate-950 px-10 py-5 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition-all green-glow">
                VIEW WORK <ArrowRight size={20} />
              </a>
              <a href="#contact" className="bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition-all">
                CONTACT
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] bg-slate-900 rounded-[2.5rem] border-8 border-white/5 overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] to-transparent opacity-60"></div>
            </div>
            {/* Floatings */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-white/10 p-6 rounded-3xl shadow-2xl animate-bounce">
              <ShieldCheck className="text-[#2ecc71] w-10 h-10" />
            </div>
          </motion.div>
        </div>
        
        {/* Background Lights */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#2ecc71]/5 rounded-full blur-[120px] -z-0"></div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-[#0b0f1a]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-12">MY <span className="text-[#2ecc71]">EXPERTIS</span></h2>
              <div className="space-y-10">
                {skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-4">
                      <span className="text-xs font-black uppercase tracking-widest">{skill.name}</span>
                      <span className="text-[#2ecc71] font-black">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-0.5">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1.5 }} className="h-full bg-[#2ecc71] rounded-full"></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map(service => (
                <div key={service.id} className="p-10 bg-white/5 border border-white/5 rounded-[2rem] hover:border-[#2ecc71]/30 transition-all group">
                  <div className="text-[#2ecc71] mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-32 bg-[#0b0f1a]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-4">LATEST <span className="text-[#2ecc71]">WORK</span></h2>
              <p className="text-slate-400">Selected projects that deliver results.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {portfolio.map(item => (
              <motion.div key={item.id} whileHover={{ y: -10 }} className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-white/5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 opacity-60 group-hover:opacity-100" />
                </div>
                <div className="p-8">
                  <span className="text-[#2ecc71] text-[10px] font-black uppercase tracking-widest">{item.cat}</span>
                  <h3 className="text-lg font-bold mt-2">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 bg-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-black text-center mb-24 uppercase">Experience <span className="text-[#2ecc71]">Timeline</span></h2>
          <div className="relative border-l-2 border-[#2ecc71]/20 ml-4 lg:ml-0 lg:border-l-0 lg:flex lg:justify-between lg:before:absolute lg:before:top-0 lg:before:left-0 lg:before:w-full lg:before:h-px lg:before:bg-[#2ecc71]/20">
            {experience.map(exp => (
              <div key={exp.id} className="relative pl-10 lg:pl-0 lg:pt-10 mb-16 lg:mb-0 lg:w-1/3">
                <div className="absolute top-0 left-[-9px] lg:left-0 lg:top-[-9px] w-4 h-4 bg-[#2ecc71] rounded-full shadow-[0_0_15px_#2ecc71]"></div>
                <span className="text-[#2ecc71] font-black text-xl">{exp.year}</span>
                <h4 className="text-2xl font-bold mt-4">{exp.role}</h4>
                <p className="text-slate-400 font-bold uppercase text-[10px] mt-1">{exp.company}</p>
                <p className="text-slate-500 mt-6 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-[#0b0f1a]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="relative z-10 text-center">
              <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">LET'S START <br /> A <span className="text-[#2ecc71]">PROJECT</span></h2>
              <div className="grid md:grid-cols-2 gap-10 mt-16 text-left">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-[#2ecc71] rounded-2xl flex items-center justify-center text-slate-950 group-hover:rotate-12 transition-all"><Mail size={32} /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Me</p>
                    <p className="text-lg font-bold">hello@neaz.pro</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#2ecc71] group-hover:-rotate-12 transition-all"><Phone size={32} /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">WhatsApp</p>
                    <p className="text-lg font-bold">+880 123 456 789</p>
                  </div>
                </div>
              </div>
              <button className="mt-20 w-full py-6 bg-[#2ecc71] text-slate-950 font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-all text-xl uppercase tracking-widest">
                SEND MESSAGE <Send size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-slate-600 text-xs font-bold uppercase tracking-[0.3em]">
        © 2024 Neaz Md. Morshed • Built with Excellence
      </footer>
    </div>
  );
}
