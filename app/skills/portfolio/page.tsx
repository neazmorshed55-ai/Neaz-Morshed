"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft, ArrowRight, ChevronRight, Loader2,
  Video, Palette, PenTool, BookOpen, Briefcase,
  Share2, Globe, ExternalLink
} from 'lucide-react';
import { supabase } from '../../../lib/supabase';

interface SkillCategory {
  id: string;
  title: string;
  order_index: number;
}

interface SubSkill {
  id: string;
  category_id: string;
  title: string;
  link: string | null;
  order_index: number;
}

const iconMap: { [key: string]: React.ReactNode } = {
  'Video Production': <Video className="w-6 h-6" />,
  'Graphic Design': <Palette className="w-6 h-6" />,
  'Content Writing': <PenTool className="w-6 h-6" />,
  'eBook Formatting': <BookOpen className="w-6 h-6" />,
  'Virtual Assistant Service': <Briefcase className="w-6 h-6" />,
  'Social Media Marketing': <Share2 className="w-6 h-6" />,
  'WordPress Design': <Globe className="w-6 h-6" />,
};

// Default data when Supabase is not available
const defaultCategories: SkillCategory[] = [
  { id: '1', title: 'Video Production', order_index: 1 },
  { id: '2', title: 'Graphic Design', order_index: 2 },
  { id: '3', title: 'Content Writing', order_index: 3 },
  { id: '4', title: 'eBook Formatting', order_index: 4 },
  { id: '5', title: 'Virtual Assistant Service', order_index: 5 },
  { id: '6', title: 'Social Media Marketing', order_index: 6 },
  { id: '7', title: 'WordPress Design', order_index: 7 },
];

const defaultSubSkills: SubSkill[] = [
  // Video Production
  { id: 's1', category_id: '1', title: 'Podcast Creation', link: null, order_index: 1 },
  { id: 's2', category_id: '1', title: 'Subtitle Adding in a Video', link: null, order_index: 2 },
  // Graphic Design
  { id: 's3', category_id: '2', title: 'Brochure design', link: null, order_index: 1 },
  { id: 's4', category_id: '2', title: 'YouTube Thumbnail Design', link: null, order_index: 2 },
  { id: 's5', category_id: '2', title: 'Canva Design', link: null, order_index: 3 },
  { id: 's6', category_id: '2', title: 'Tshirt and Cup Design', link: null, order_index: 4 },
  // Content Writing
  { id: 's7', category_id: '3', title: 'Article, blog, SMM post writing', link: null, order_index: 1 },
  { id: 's8', category_id: '3', title: 'eBook writing', link: null, order_index: 2 },
  // eBook Formatting
  { id: 's9', category_id: '4', title: 'eBook Design', link: null, order_index: 1 },
  // Virtual Assistant Service
  { id: 's10', category_id: '5', title: 'Lead Generation VA', link: null, order_index: 1 },
  { id: 's11', category_id: '5', title: 'Web Research VA', link: null, order_index: 2 },
  { id: 's12', category_id: '5', title: 'Job Search VA', link: null, order_index: 3 },
  { id: 's13', category_id: '5', title: 'Data Entry', link: null, order_index: 4 },
  // Social Media Marketing
  { id: 's14', category_id: '6', title: 'Social media management', link: null, order_index: 1 },
  { id: 's15', category_id: '6', title: 'Organic Reach and Daily Post', link: null, order_index: 2 },
  // WordPress Design
  { id: 's16', category_id: '7', title: 'Web Design', link: null, order_index: 1 },
];

export default function SkillPortfolioPage() {
  const [categories, setCategories] = useState<SkillCategory[]>(defaultCategories);
  const [subSkills, setSubSkills] = useState<SubSkill[]>(defaultSubSkills);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1519085195758-2a89f9c3f732?auto=format&fit=crop&q=80&w=400');

  useEffect(() => {
    async function fetchData() {
      if (!supabase) {
        setLoading(false);
        return;
      }

      try {
        // Fetch categories
        const { data: catData, error: catError } = await supabase
          .from('skill_categories')
          .select('*')
          .eq('is_active', true)
          .order('order_index', { ascending: true });

        if (!catError && catData && catData.length > 0) {
          setCategories(catData);
        }

        // Fetch sub skills
        const { data: skillData, error: skillError } = await supabase
          .from('sub_skills')
          .select('*')
          .eq('is_active', true)
          .order('order_index', { ascending: true });

        if (!skillError && skillData && skillData.length > 0) {
          setSubSkills(skillData);
        }

        // Fetch profile image
        const { data: imgData } = supabase.storage.from('images').getPublicUrl('profile.jpg');
        if (imgData?.publicUrl) {
          const img = new Image();
          img.onload = () => setProfileImage(imgData.publicUrl);
          img.src = imgData.publicUrl;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  const getSubSkillsForCategory = (categoryId: string) => {
    return subSkills.filter(skill => skill.category_id === categoryId);
  };

  if (loading) {
    return (
      <div className="bg-[#0b0f1a] text-white min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-[#2ecc71] animate-spin" />
      </div>
    );
  }

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
            <Link href="/skills" className="text-[11px] font-bold tracking-[0.3em] text-[#2ecc71] transition-all uppercase">Skills</Link>
            <Link href="/services" className="text-[11px] font-bold tracking-[0.3em] text-slate-400 hover:text-[#2ecc71] transition-all uppercase">Services</Link>
            <Link href="/#contact" className="text-[11px] font-bold tracking-[0.3em] text-slate-400 hover:text-[#2ecc71] transition-all uppercase">Contact</Link>
            <a href="https://www.fiverr.com/neaz222" target="_blank" className="bg-[#2ecc71] text-slate-950 px-8 py-4 rounded-2xl font-black text-[11px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#2ecc71]/20 uppercase">HIRE ME</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="pt-32 pb-20 relative overflow-hidden min-h-screen">
        {/* Background */}
        <div className="absolute left-0 top-0 w-1/4 h-full bg-[#1a1f2e]"></div>
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-[#2ecc71]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Back Link */}
          <Link href="/skills" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#2ecc71] transition-all mb-8 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-wider">Back to Skills</span>
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
              Content
            </h1>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Explore my comprehensive skill set across various domains
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Profile Image - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 hidden lg:block"
            >
              <div className="sticky top-32">
                <div className="relative">
                  <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white/10 bg-slate-900">
                    <img
                      src={profileImage}
                      alt="Neaz Md. Morshed"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#2ecc71]/20 rounded-full blur-2xl"></div>
                </div>
              </div>
            </motion.div>

            {/* Categories List - Center */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                    className={`flex items-center gap-6 p-6 rounded-2xl cursor-pointer transition-all duration-300 group ${
                      activeCategory === category.id
                        ? 'bg-[#1a1f2e] border-l-4 border-[#2ecc71]'
                        : 'hover:bg-slate-900/50 border-l-4 border-transparent hover:border-slate-700'
                    }`}
                  >
                    {/* Number */}
                    <div className={`text-4xl font-black w-16 text-center transition-colors ${
                      activeCategory === category.id ? 'text-[#2ecc71]' : 'text-slate-600 group-hover:text-slate-400'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Title */}
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold underline underline-offset-4 decoration-2 transition-colors ${
                        activeCategory === category.id
                          ? 'text-[#2ecc71] decoration-[#2ecc71]'
                          : 'text-white decoration-slate-600 group-hover:decoration-[#2ecc71]'
                      }`}>
                        {category.title}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <ChevronRight
                      size={24}
                      className={`transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'text-[#2ecc71] rotate-90'
                          : 'text-slate-600 group-hover:text-[#2ecc71] group-hover:translate-x-1'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Sub Skills - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-4"
            >
              <div className="sticky top-32">
                <AnimatePresence mode="wait">
                  {activeCategory ? (
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      {getSubSkillsForCategory(activeCategory).map((skill, index) => (
                        <motion.div
                          key={skill.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          {skill.link ? (
                            <a
                              href={skill.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-4 bg-[#c9a089] hover:bg-[#d4b19a] text-slate-900 rounded-xl font-semibold transition-all hover:translate-x-2 group"
                            >
                              <span className="flex items-center justify-between">
                                <span className="underline underline-offset-2">{skill.title}</span>
                                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                              </span>
                            </a>
                          ) : (
                            <div className="p-4 bg-[#c9a089] text-slate-900 rounded-xl font-semibold">
                              <span className="underline underline-offset-2">{skill.title}</span>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center p-10 bg-slate-900/30 rounded-3xl border border-dashed border-slate-700"
                    >
                      <ArrowLeft size={40} className="text-slate-600 mx-auto mb-4" />
                      <p className="text-slate-500 font-medium">
                        Click on a category to see the sub-skills
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Decorative dots */}
                <div className="mt-8 flex justify-end gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      {[...Array(3)].map((_, j) => (
                        <div
                          key={j}
                          className={`w-2 h-2 rounded-full ${
                            (i + j) % 2 === 0 ? 'bg-[#2ecc71]/40' : 'bg-slate-700/40'
                          }`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#2ecc71] text-slate-900 font-black rounded-2xl hover:scale-105 transition-transform uppercase tracking-widest text-sm"
            >
              Hire Me Now <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <p className="text-slate-500 text-sm">
            &copy; 2024 Neaz Md. Morshed. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
