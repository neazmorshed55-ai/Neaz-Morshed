"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  transparent?: boolean;
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/skills', label: 'Skills' },
  { href: '/services', label: 'Services' },
  { href: '/experience', label: 'Experience' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar({ transparent = true }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled || !transparent
            ? 'bg-[#0b0f1a]/90 backdrop-blur-2xl border-b border-white/5 py-4'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center max-w-7xl">
          <Link href="/" className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-[#2ecc71] rounded-2xl flex items-center justify-center font-black text-slate-950 group-hover:rotate-6 transition-all shadow-[0_0_30px_rgba(46,204,113,0.3)]">
              NM
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tighter leading-none">NEAZ MORSHED</span>
              <span className="text-[10px] text-[#2ecc71] font-bold tracking-[0.2em] mt-1 uppercase">Top Rated Pro</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] font-bold tracking-[0.3em] transition-all uppercase ${
                  isActive(link.href) ? 'text-[#2ecc71]' : 'text-slate-400 hover:text-[#2ecc71]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/resume"
              className={`px-8 py-4 rounded-2xl font-black text-[11px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg uppercase ${
                isActive('/resume')
                  ? 'bg-white text-slate-950 shadow-white/20'
                  : 'bg-[#2ecc71] text-slate-950 shadow-[#2ecc71]/20'
              }`}
            >
              Resume
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-[#2ecc71]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="lg:hidden fixed inset-0 bg-[#0b0f1a] z-[110] flex flex-col items-center justify-center gap-8 p-6"
          >
            <button
              className="absolute top-8 right-8 text-[#2ecc71]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={40} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-black transition-colors uppercase tracking-tighter ${
                  isActive(link.href) ? 'text-[#2ecc71]' : 'text-white hover:text-[#2ecc71]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/resume"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-black text-[#2ecc71] transition-colors uppercase tracking-tighter"
            >
              Resume
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
