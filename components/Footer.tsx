
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-[#0f172a] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#2ecc71] rounded-lg flex items-center justify-center font-black text-slate-900">
            NM
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-white leading-none uppercase tracking-tighter">Neaz Md. Morshed</span>
            <span className="text-[10px] font-bold text-[#2ecc71] uppercase tracking-widest mt-1">Quality Guaranteed</span>
          </div>
        </div>
        
        <div className="flex gap-12">
          {['LinkedIn', 'Upwork', 'Behance'].map(social => (
            <a key={social} href="#" className="text-slate-400 font-bold hover:text-[#2ecc71] transition-colors uppercase tracking-widest text-xs">
              {social}
            </a>
          ))}
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-slate-500 font-medium text-sm">© 2024 Neaz Md. Morshed. All Rights Reserved.</p>
          <p className="text-slate-600 text-xs mt-2 uppercase tracking-tighter">Crafted for Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
