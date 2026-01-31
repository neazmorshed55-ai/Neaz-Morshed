
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#1e293b]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-[#0f172a] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar Info */}
            <div className="lg:w-2/5 bg-[#2ecc71] p-12 lg:p-16 flex flex-col">
              <h3 className="text-slate-900 text-4xl font-black mb-8 leading-tight">Let's work <br /> together</h3>
              <p className="text-slate-800 font-medium mb-12 text-lg">
                Tell me about your project and let's find the best solution for your business growth.
              </p>
              
              <div className="space-y-8 mt-auto">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-[#2ecc71] group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-sm uppercase tracking-widest opacity-60">Email me</p>
                    <p className="text-slate-900 font-black text-xl">hello@neaz.pro</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-[#2ecc71] group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-sm uppercase tracking-widest opacity-60">Call me</p>
                    <p className="text-slate-900 font-black text-xl">+880 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-3/5 p-12 lg:p-16">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[#2ecc71]/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[#2ecc71]/50 transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Subject</label>
                  <select className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[#2ecc71]/50 transition-all appearance-none">
                    <option>B2B Lead Generation</option>
                    <option>Virtual Assistant Services</option>
                    <option>Data Mining Project</option>
                    <option>Store Management</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Your Message</label>
                  <textarea rows={4} placeholder="How can I help you?" className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[#2ecc71]/50 transition-all resize-none"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full py-5 bg-[#2ecc71] text-slate-900 font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-[#2ecc71]/20">
                    SEND INQUIRY <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
