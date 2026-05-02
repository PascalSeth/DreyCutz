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
import { useLanguage } from '../context/LanguageContext';

const Values = () => {
  const { t } = useLanguage();
  return (
    <section id="values" className="relative py-24 md:py-32 px-5 md:px-12 lg:px-16 bg-transparent">
      
      {/* ── SECTION 1: THE DIFFERENCE ─────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto mb-32 md:mb-48">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-4">{t('values.diff_eyebrow')}</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] tracking-tight uppercase mb-6">
            {t('values.diff_title')}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-500 font-medium leading-relaxed">
            {t('values.diff_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <DifferenceCard 
            icon={<Clock className="w-6 h-6" />}
            title={t('values.card.time_title')}
            description={t('values.card.time_desc')}
          />
          <DifferenceCard 
            icon={<Scissors className="w-6 h-6" />}
            title={t('values.card.skill_title')}
            description={t('values.card.skill_desc')}
          />
          <DifferenceCard 
            icon={<UserCheck className="w-6 h-6" />}
            title={t('values.card.custom_title')}
            description={t('values.card.custom_desc')}
          />
          <DifferenceCard 
            icon={<Wind className="w-6 h-6" />}
            title={t('values.card.relax_title')}
            description={t('values.card.relax_desc')}
          />
        </div>
      </div>

      {/* ── SECTION 2: OUR VALUES ─────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-4">{t('values.core_eyebrow')}</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] tracking-tight uppercase mb-6">
            {t('values.core_title')}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16">
          <ValueItem 
            icon={<Target />}
            title={t('values.val.precision_title')}
            description={t('values.val.precision_desc')}
          />
          <ValueItem 
            icon={<Heart />}
            title={t('values.val.respect_title')}
            description={t('values.val.respect_desc')}
          />
          <ValueItem 
            icon={<ShieldCheck />}
            title={t('values.val.integrity_title')}
            description={t('values.val.integrity_desc')}
          />
          <ValueItem 
            icon={<Star />}
            title={t('values.val.excellence_title')}
            description={t('values.val.excellence_desc')}
          />
          <ValueItem 
            icon={<Users />}
            title={t('values.val.community_title')}
            description={t('values.val.community_desc')}
          />
          <ValueItem 
            icon={<Flame />}
            title={t('values.val.passion_title')}
            description={t('values.val.passion_desc')}
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
