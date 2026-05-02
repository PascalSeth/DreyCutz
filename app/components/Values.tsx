'use client';

import React from 'react';
import { 
  Clock, 
  Scissors, 
  UserCheck, 
  Wind, 
  Target, 
  Heart, 
  ShieldCheck, 
  Star, 
  Users, 
  Flame 
} from 'lucide-react';

const Values = () => {
  return (
    <section id="values" className="relative py-24 md:py-32 px-5 md:px-12 lg:px-16 bg-transparent">
      
      {/* ── SECTION 1: THE DIFFERENCE ─────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto mb-32 md:mb-48">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-4">Why DreyCutz</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] tracking-tight uppercase mb-6">
            The New Standard
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-500 font-medium leading-relaxed">
            We've redesigned the grooming ritual. No wait times, no compromises, just pure craft tailored to your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <DifferenceCard 
            icon={<Clock className="w-6 h-6" />}
            title="Time-Saving"
            description="No wait times. Every session is reserved exclusively for you, ensuring punctuality."
          />
          <DifferenceCard 
            icon={<Scissors className="w-6 h-6" />}
            title="Expert Skill"
            description="Combining classic technique with modern artistry for a flawless finish."
          />
          <DifferenceCard 
            icon={<UserCheck className="w-6 h-6" />}
            title="Customized"
            description="Your bone structure dictates the cut. We design for the individual."
          />
          <DifferenceCard 
            icon={<Wind className="w-6 h-6" />}
            title="Relaxing"
            description="A calm, curated environment designed to let you recharge while we refine."
          />
        </div>
      </div>

      {/* ── SECTION 2: OUR VALUES ─────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-4">Core Values</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] tracking-tight uppercase mb-6">
            What We Believe In
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16">
          <ValueItem 
            icon={<Target />}
            title="Precision"
            description="Measure twice, cut once. We obsess over the micro-details so the macro-result is flawless."
          />
          <ValueItem 
            icon={<Heart />}
            title="Respect"
            description="Your time is sacred. Your trust is earned. We treat every client with the utmost dignity."
          />
          <ValueItem 
            icon={<ShieldCheck />}
            title="Integrity"
            description="Transparent pricing and honest advice. If a style doesn't suit you, we'll tell you."
          />
          <ValueItem 
            icon={<Star />}
            title="Excellence"
            description="Good is the enemy of great. We push the boundaries of the craft every single day."
          />
          <ValueItem 
            icon={<Users />}
            title="Community"
            description="A space where everyone belongs. More than a studio, we're a neighborhood hub."
          />
          <ValueItem 
            icon={<Flame />}
            title="Passion"
            description="This isn't a job—it's an obsession. We live and breathe the art of the cut."
          />
        </div>
      </div>

    </section>
  );
};

/* ─── Premium Helper Components ─────────────────────────────────────── */

function DifferenceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
        {icon}
      </div>
      <h4 className="text-xl font-black uppercase tracking-tight text-[#1A1A1A] mb-4">
        {title}
      </h4>
      <p className="text-sm font-semibold text-gray-500 leading-relaxed group-hover:text-gray-900 transition-colors duration-500">
        {description}
      </p>
    </div>
  );
}

function ValueItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="mb-8 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-blue-600/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 blur-xl" />
        <div className="w-16 h-16 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center transition-all duration-500 group-hover:border-blue-600 group-hover:scale-110 relative z-10">
          {React.cloneElement(icon as any, { 
            size: 28, 
            strokeWidth: 2.5,
            className: 'text-blue-600 transition-colors duration-500' 
          })}
        </div>
      </div>
      <h4 className="text-xl font-black uppercase tracking-tighter mb-4 text-[#1A1A1A]">
        {title}
      </h4>
      <p className="text-sm md:text-base font-semibold text-gray-500/80 leading-relaxed group-hover:text-gray-900 transition-colors duration-500 max-w-xs">
        {description}
      </p>
    </div>
  );
}

export default Values;
