"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft, Download, Mail, Phone, MapPin, Globe,
  Briefcase, GraduationCap, Award, Code, Calendar,
  Linkedin, ExternalLink
} from 'lucide-react';

export default function ResumePage() {
  const personalInfo = {
    name: "NEAZ MD. MORSHED",
    title: "Expert Virtual Assistant & Professional Outsourcer",
    email: "hello@neaz.pro",
    phone: "+880 1XXX-XXXXXX",
    location: "Bangladesh",
    linkedin: "linkedin.com/in/neazmorshed222",
    fiverr: "fiverr.com/neaz222"
  };

  const summary = `Top Rated Plus Virtual Assistant with 10+ years of experience in administrative support, lead generation, CRM management, and web development. Successfully completed 5,000+ hours with 100% job success rate. Expert in data mining, market research, and business process optimization. Proficient in modern tech stack including Next.js and Supabase.`;

  const experiences = [
    {
      company: 'The Global Council for Anthropological Linguistics - GLOCAL',
      position: 'Media and Web Design Coordinator',
      period: 'January 2021 - December 2022',
      location: 'Remote',
      description: 'Web development and design for GLOCAL website and multiple associated websites including CALA, COMELA, AFALA, JALA, JOMELA.',
      skills: ['Responsive Web Design', 'WordPress', 'Graphic Design', 'Problem Solving']
    },
    {
      company: 'Tritech Building Services Ltd.',
      position: 'Team Leader - Brand & Communication',
      period: 'January 2020 - October 2022',
      location: 'Bangladesh',
      description: 'Led brand promotion initiatives and managed communication strategies for marketing campaigns.',
      skills: ['Brand Promotion', 'Team Leadership', 'Communication']
    },
    {
      company: 'HJ Visualization',
      position: 'Virtual Assistant',
      period: 'January 2019 - December 2023',
      location: 'Remote',
      description: 'Provided comprehensive administrative support and remote assistance for business operations.',
      skills: ['Virtual Assistance', 'Administrative Support', 'Remote Work']
    },
    {
      company: 'Tritech Building Services Ltd.',
      position: 'Client Relationship Manager',
      period: 'May 2018 - January 2020',
      location: 'Bangladesh',
      description: 'Managed client relationships, conducted project surveys, and prepared comprehensive reports.',
      skills: ['Project Survey', 'Client Relations', 'Report Writing']
    },
    {
      company: 'Power Sonic Transformar and Switchgear Co. Ltd.',
      position: 'Assistant Engineer',
      period: 'January 2017 - May 2018',
      location: 'Bangladesh',
      description: 'Project Survey, Layout design of substation following DESCO and DPDC rules, LT HT meter cable measurement.',
      skills: ['Project Survey', 'Layout Design', 'Client Consultation']
    },
    {
      company: 'Cityscape International Limited',
      position: 'IT Associate Engineer',
      period: 'January 2016 - December 2016',
      location: 'Bangladesh',
      description: 'Managed network administration and provided IT support services.',
      skills: ['Network Administration', 'IT Support']
    },
    {
      company: 'Berger Paints Bangladesh Limited',
      position: 'Project Support Engineer',
      period: 'August 2015 - December 2015',
      location: 'Bangladesh',
      description: 'Contractual position handling project documentation and IT infrastructure.',
      skills: ['Project Documentation', 'IT Infrastructure']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Electrical & Electronic Engineering',
      institution: 'Daffodil International University',
      year: '2011 - 2015',
      location: 'Dhaka, Bangladesh'
    }
  ];

  const skills = {
    'Virtual Assistance': ['Administrative Support', 'Email Management', 'Calendar Management', 'Data Entry'],
    'Lead Generation': ['B2B Prospecting', 'LinkedIn Sales Navigator', 'Contact Verification', 'Market Research'],
    'CRM & Data': ['HubSpot', 'Salesforce', 'Zoho CRM', 'Data Mining', 'Data Cleaning'],
    'Web Development': ['Next.js', 'React', 'WordPress', 'Tailwind CSS', 'Supabase'],
    'Tools & Software': ['Microsoft Office', 'Google Workspace', 'Canva', 'Adobe Suite', 'Project Management Tools']
  };

  const achievements = [
    { label: 'Job Success', value: '100%' },
    { label: 'Hours Completed', value: '5,000+' },
    { label: 'Global Clients', value: '180+' },
    { label: 'Years Experience', value: '10+' }
  ];

  const handleDownload = () => {
    // Check if PDF exists in public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Neaz_Morshed_Resume.pdf';
    link.click();
  };

  return (
    <div className="bg-[#0b0f1a] text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-[#0b0f1a]/90 backdrop-blur-2xl border-b border-white/5 py-4">
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center max-w-7xl">
          <Link href="/" className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-[#2ecc71] rounded-2xl flex items-center justify-center font-black text-slate-950 group-hover:rotate-6 transition-all shadow-[0_0_30px_rgba(46,204,113,0.3)]">NM</div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tighter leading-none">NEAZ MORSHED</span>
              <span className="text-[10px] text-[#2ecc71] font-bold tracking-[0.2em] mt-1 uppercase">Top Rated Pro</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-[11px] font-bold tracking-[0.3em] text-slate-400 hover:text-[#2ecc71] transition-all uppercase">Home</Link>
            <Link href="/skills" className="text-[11px] font-bold tracking-[0.3em] text-slate-400 hover:text-[#2ecc71] transition-all uppercase">Skills</Link>
            <Link href="/resume" className="text-[11px] font-bold tracking-[0.3em] text-[#2ecc71] transition-all uppercase">Resume</Link>
            <Link href="/services" className="text-[11px] font-bold tracking-[0.3em] text-slate-400 hover:text-[#2ecc71] transition-all uppercase">Services</Link>
            <Link href="/experience" className="text-[11px] font-bold tracking-[0.3em] text-slate-400 hover:text-[#2ecc71] transition-all uppercase">Experience</Link>
            <Link href="/reviews" className="text-[11px] font-bold tracking-[0.3em] text-slate-400 hover:text-[#2ecc71] transition-all uppercase">Reviews</Link>
            <Link href="/contact" className="text-[11px] font-bold tracking-[0.3em] text-slate-400 hover:text-[#2ecc71] transition-all uppercase">Contact</Link>
            <a href="https://www.fiverr.com/neaz222" target="_blank" className="bg-[#2ecc71] text-slate-950 px-8 py-4 rounded-2xl font-black text-[11px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#2ecc71]/20 uppercase">HIRE ME</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#2ecc71] transition-all mb-8 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-wider">Back to Home</span>
          </Link>

          {/* Resume Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900/60 border border-white/10 rounded-[3rem] overflow-hidden"
          >
            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#2ecc71]/20 to-transparent p-8 lg:p-12 border-b border-white/10">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-2">
                    {personalInfo.name}
                  </h1>
                  <p className="text-[#2ecc71] text-lg font-bold uppercase tracking-wider">
                    {personalInfo.title}
                  </p>
                </div>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-3 px-8 py-4 bg-[#2ecc71] text-slate-950 font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#2ecc71]/20 uppercase tracking-wider text-sm"
                >
                  <Download size={18} />
                  Download PDF
                </button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 mt-8 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail size={16} className="text-[#2ecc71]" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin size={16} className="text-[#2ecc71]" />
                  <span>{personalInfo.location}</span>
                </div>
                <a href={`https://www.${personalInfo.linkedin}`} target="_blank" className="flex items-center gap-2 text-slate-300 hover:text-[#2ecc71] transition-colors">
                  <Linkedin size={16} className="text-[#2ecc71]" />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} />
                </a>
                <a href={`https://www.${personalInfo.fiverr}`} target="_blank" className="flex items-center gap-2 text-slate-300 hover:text-[#2ecc71] transition-colors">
                  <Globe size={16} className="text-[#2ecc71]" />
                  <span>Fiverr</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="p-8 lg:p-12 space-y-12">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((stat, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-2xl text-center border border-white/5">
                    <div className="text-2xl font-black text-[#2ecc71]">{stat.value}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Professional Summary */}
              <section>
                <h2 className="flex items-center gap-3 text-xl font-black uppercase tracking-tight mb-4">
                  <Award className="text-[#2ecc71]" size={24} />
                  Professional Summary
                </h2>
                <p className="text-slate-300 leading-relaxed">{summary}</p>
              </section>

              {/* Work Experience */}
              <section>
                <h2 className="flex items-center gap-3 text-xl font-black uppercase tracking-tight mb-6">
                  <Briefcase className="text-[#2ecc71]" size={24} />
                  Work Experience
                </h2>
                <div className="space-y-6">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#2ecc71]/30 transition-all"
                    >
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-white">{exp.position}</h3>
                          <p className="text-[#2ecc71] font-semibold">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm mb-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, j) => (
                          <span key={j} className="px-3 py-1 bg-[#2ecc71]/10 text-[#2ecc71] rounded-full text-xs font-semibold">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="flex items-center gap-3 text-xl font-black uppercase tracking-tight mb-6">
                  <GraduationCap className="text-[#2ecc71]" size={24} />
                  Education
                </h2>
                {education.map((edu, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <p className="text-[#2ecc71] font-semibold">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-400 mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {edu.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                ))}
              </section>

              {/* Skills */}
              <section>
                <h2 className="flex items-center gap-3 text-xl font-black uppercase tracking-tight mb-6">
                  <Code className="text-[#2ecc71]" size={24} />
                  Skills & Expertise
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(skills).map(([category, skillList], i) => (
                    <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/5">
                      <h3 className="text-sm font-bold text-[#2ecc71] uppercase tracking-wider mb-3">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, j) => (
                          <span key={j} className="px-2 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Download CTA */}
              <div className="text-center pt-8 border-t border-white/10">
                <p className="text-slate-400 mb-6">Get a copy of my complete resume</p>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-3 px-12 py-5 bg-[#2ecc71] text-slate-950 font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#2ecc71]/20 uppercase tracking-wider"
                >
                  <Download size={20} />
                  Download PDF Resume
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/neazmorshed222/" target="_blank" className="text-slate-500 hover:text-[#2ecc71] transition-all uppercase text-[10px] font-bold tracking-widest">LinkedIn</a>
            <a href="https://www.fiverr.com/neaz222" target="_blank" className="text-slate-500 hover:text-[#2ecc71] transition-all uppercase text-[10px] font-bold tracking-widest">Fiverr</a>
            <a href="https://www.facebook.com/neazmorshed001/" target="_blank" className="text-slate-500 hover:text-[#2ecc71] transition-all uppercase text-[10px] font-bold tracking-widest">Facebook</a>
          </div>
          <p className="text-slate-400 text-sm font-medium">
            Designed and Developed by <span className="text-[#2ecc71] font-semibold">Neaz Morshed</span> • <span className="text-slate-600">Copyright © 2026</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
