'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Upload, CheckCircle2 } from 'lucide-react';

const Careers = () => {
  const [view, setView] = useState<'positions' | 'apply'>('positions');
  const [selectedPosition, setSelectedPosition] = useState('');

  const positions = [
    { title: "Barber", type: "Full-time / Part-time", desc: "Experienced barber with strong fading and styling skills. Must be professional, punctual, and client-focused." },
    { title: "Braider", type: "Part-time", desc: "Skilled braider available Wednesday to Sunday. Creative styling and attention to detail required." },
  ];

  const handleApplyClick = (position: string) => {
    setSelectedPosition(position);
    setView('apply');
    window.scrollTo({ top: document.getElementById('careers')?.offsetTop || 0, behavior: 'smooth' });
  };

  return (
    <section id="careers" className="relative py-24 md:py-32 bg-transparent scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Centered Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-blue-600 mb-4">Join Our Team</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] tracking-tight uppercase mb-6">
            Careers at DREYCUTZ
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-500 font-medium leading-relaxed">
            We're always looking for talented, passionate individuals to join the DREYCUTZ family.
            If you're skilled, creative, and dedicated to your craft, we want to hear from you.
          </p>
        </div>

        {view === 'positions' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {positions.map((pos, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl md:text-3xl font-black text-[#1A1A1A] tracking-tight">{pos.title}</h3>
                    <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[10px] font-bold uppercase tracking-widest text-blue-600 border border-blue-100/50">
                      {pos.type}
                    </span>
                  </div>
                  <p className="text-base text-gray-500 font-medium leading-relaxed mb-12">
                    {pos.desc}
                  </p>
                </div>
                <button
                  onClick={() => handleApplyClick(pos.title)}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 w-full md:w-fit group-hover:shadow-[0_10px_20px_rgba(29,111,232,0.3)]"
                >
                  Apply Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-3xl mx-auto">
            <button
              onClick={() => setView('positions')}
              className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#1A1A1A] transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Positions
            </button>

            <div className="bg-white border border-gray-100 rounded-[1.5rem] p-6 md:p-10 shadow-[0_15px_60px_rgba(0,0,0,0.05)]">
              <h3 className="text-2xl font-black text-[#1A1A1A] mb-8 uppercase tracking-tight">Career Application</h3>

              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const body = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nPhone: ${formData.get('phone')}\nPosition: ${formData.get('position')}\nAddress: ${formData.get('address')}\nExperience: ${formData.get('experience')}`;
                window.location.href = `mailto:dreyvibez1@gmail.com?subject=Job Application: ${formData.get('position')}&body=${encodeURIComponent(body)}`;
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Full Name *</label>
                    <input name="name" required type="text" className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-gray-400" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Email *</label>
                    <input name="email" required type="email" placeholder="your@email.com" className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-gray-400" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Phone *</label>
                    <input name="phone" required type="tel" placeholder="438-XXX-XXXX" className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-gray-400" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Position *</label>
                    <div className="relative">
                      <select name="position" required defaultValue={selectedPosition} className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all appearance-none cursor-pointer">
                        <option value="Barber">Barber (Full-time / Part-time)</option>
                        <option value="Braider">Braider (Part-time)</option>
                        <option value="Loctician">Loctician (Part-time)</option>
                        <option value="Pedicure Technician">Pedicure Technician (Part-time, Thu-Sun)</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Address *</label>
                  <input name="address" required type="text" placeholder="123 Street Name, City, Province" className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-gray-400" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Experience & Skills (Optional)</label>
                  <textarea name="experience" rows={3} placeholder="Tell us about your experience, skills, and availability..." className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none placeholder:text-gray-400"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Resume (PDF, DOC)</label>
                    <div className="relative group cursor-pointer">
                      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                      <div className="w-full py-5 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center gap-1 group-hover:border-blue-600 group-hover:bg-blue-50/30 transition-all">
                        <Upload className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
                        <span className="text-[10px] font-bold text-gray-600">Click to browse</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Supporting Docs (Optional)</label>
                    <div className="relative group cursor-pointer">
                      <input type="file" multiple className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                      <div className="w-full py-5 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center gap-1 group-hover:border-blue-600 group-hover:bg-blue-50/30 transition-all">
                        <Upload className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
                        <span className="text-[10px] font-bold text-gray-600">Click to browse</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 flex items-start gap-3">
                  <InfoIcon className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-[10px] font-semibold text-blue-800 leading-relaxed">
                    Application opens in your email app. Don't forget to attach files.
                  </p>
                </div>

                <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-lg text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all duration-300 shadow-[0_10px_30px_rgba(29,111,232,0.3)]">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Portfolio Invitation */}
        {view === 'positions' && (
          <div className="mt-20 text-center animate-in fade-in slide-in-from-bottom-2 duration-700">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Send your resume and portfolio to:</p>
            <a
              href="mailto:dreyvibez1@gmail.com"
              className="text-lg md:text-xl font-black text-[#1A1A1A] hover:text-blue-600 transition-colors border-b-2 border-gray-100 hover:border-blue-600 pb-1"
            >
              dreyvibez1@gmail.com
            </a>
          </div>
        )}

      </div>
    </section>
  );
};

const InfoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4m0-4h.01" strokeLinecap="round" />
  </svg>
);

export default Careers;
