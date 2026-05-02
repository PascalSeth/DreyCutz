'use client';

import React from 'react';
import Image from 'next/image';
import { Quote, Play } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-[0.03] pointer-events-none select-none hidden lg:block">
        <h2 className="text-[25vw] font-black tracking-tighter uppercase leading-none text-gray-900">DREYCUTZ</h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Column 1: Dramatic Image (Now First on Mobile) */}
          <div className="w-full lg:w-1/2">
            <div className="relative group mx-auto max-w-[500px] lg:max-w-none">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] border-8 border-white transition-all duration-1000 group-hover:rotate-1">
                <Image
                  src="/jpeg/drey.jpeg"
                  alt="Drey - Founder & CEO"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                
                {/* Mobile Identity Tag */}
                <div className="absolute bottom-10 left-10 md:hidden">
                   <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">CEO & Barber</p>
                   <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">DREY</h3>
                </div>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-blue-600/20 rounded-[2.5rem] -z-10 transition-transform duration-700 group-hover:-translate-x-3 group-hover:-translate-y-3" />
              
              {/* Quote Card (Desktop Only) */}
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 max-w-[280px] hidden xl:block animate-float">
                <Quote className="text-blue-600 mb-6" size={32} fill="currentColor" fillOpacity={0.1} />
                <p className="text-lg font-bold text-[#1A1A1A] leading-tight italic">
                  "Every cut is a craft, every detail matters."
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: The Story */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-xl">
              <div className="hidden md:flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-blue-600" />
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600">CEO & Barber</span>
              </div>

              <h2 className="text-6xl md:text-8xl font-black text-[#1A1A1A] tracking-tighter leading-[0.85] mb-4 uppercase">
                Drey
              </h2>
              <span className="text-3xl md:text-4xl font-light text-gray-400 block mb-12">Founder & CEO</span>

              <div className="space-y-8">
                <p className="text-xl md:text-2xl font-bold text-[#1A1A1A] leading-tight">
                  Not just a service provider. Every cut is a <span className="text-blue-600 italic">craft</span>, every detail matters.
                </p>
                
                <p className="text-base md:text-lg text-gray-500 leading-relaxed font-semibold">
                  With years of experience and a passion for precision, Drey brings expertise, creativity, and dedication to every client. 
                  Book your appointment and experience the difference of a session tailored specifically to your unique structure and style.
                </p>

                {/* Mobile Stats Row */}
                <div className="grid grid-cols-2 gap-6 md:hidden py-8 border-y border-gray-100">
                   <StatItem label="Experience" value="10+ YEARS" />
                   <StatItem label="Specialty" value="PRECISION" />
                </div>

                <div className="pt-8 md:pt-4">
                  <button 
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full md:w-auto group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#1A1A1A] text-white rounded-full transition-all duration-500 hover:bg-blue-600 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <span className="text-xs font-black uppercase tracking-widest text-white">Secure Your Session</span>
                    <Play size={12} fill="white" className="transition-transform duration-300 group-hover:translate-x-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Stats (Desktop Only) */}
        <div className="hidden md:flex mt-32 pt-16 border-t border-gray-100 items-center justify-between">
           <div className="flex gap-24">
              <StatItem label="Experience" value="10+ YEARS" />
              <StatItem label="Specialty" value="PRECISION" />
              <StatItem label="Location" value="MONTRÉAL" />
           </div>
           <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic opacity-40">DreyCutz / Established 2024</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

function StatItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600/60">{label}</span>
      <span className="text-2xl font-black text-[#1A1A1A] tracking-tighter uppercase">{value}</span>
    </div>
  );
}

export default About;
