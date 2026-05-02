'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Scissors, 
  ChevronRight, 
  TrendingUp,
  Clock,
  Info,
  Calendar,
  Waves,
  Zap,
  Star
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const categorizedServices = [
  {
    id: 'barbering',
    category: "Barbering",
    icon: <Scissors size={14} />,
    items: [
      { id: 1, name: "Signature Haircut", time: "45 min", price: "CA$45" },
      { id: 2, name: "Simple Haircut", time: "35 min", price: "CA$35" },
      { id: 3, name: "Line up + Beards", time: "15 min", price: "CA$25" },
      { id: 4, name: "Beards Only", time: "10 min", price: "CA$15" },
      { id: 5, name: "Hair Coloring", time: "50 min", price: "CA$85" },
      { id: 6, name: "Coloring + Signature", time: "1 hr", price: "CA$120" },
      { id: 7, name: "Kids", time: "30 min", price: "CA$25" },
      { id: 8, name: "Teenagers (13-17)", time: "30 min", price: "CA$30" },
    ]
  },
  {
    id: 'locks',
    category: "Locks",
    icon: <Waves size={14} />,
    items: [
      { id: 10, name: "Retwist Hightop", time: "45 min", price: "CA$70" },
      { id: 11, name: "Retwist Full Head", time: "1 hr", price: "CA$85" },
      { id: 12, name: "Starter Locs — Hightop", time: "1.5 hr", price: "CA$120" },
      { id: 13, name: "Detox", time: "30 min", price: "CA$50" },
    ]
  },
  {
    id: 'braiding',
    category: "Braiding & Nails",
    icon: <Zap size={14} />,
    items: [
      { id: 20, name: "Cornrows / Tresses", time: "2 hr", price: "CA$60" },
      { id: 21, name: "Single Braids", time: "2 hr", price: "CA$85" },
      { id: 22, name: "Pedicure — Legs", time: "1 hr", price: "CA$50" },
      { id: 23, name: "Pedicure — Hands", time: "1 hr", price: "CA$70" },
    ]
  }
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const BookingSection = () => {
  const { t } = useLanguage();
  const [activeDay, setActiveDay] = useState('Fri');
  const [mobileTab, setMobileTab] = useState<'services' | 'info'>('services');
  const [activeCategory, setActiveCategory] = useState(categorizedServices[0].id);

  const handleBooking = (serviceName: string) => {
    window.dispatchEvent(new CustomEvent('openBookingModal', { detail: { serviceName } }));
  };

  const currentCategory = categorizedServices.find(c => c.id === activeCategory) || categorizedServices[0];

  return (
    <section id="booking" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter uppercase mb-6 leading-none">
            {t('booking.title_part1')}<span className="text-blue-600 italic">{t('booking.title_fresh')}</span>{t('booking.title_part2')}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Mobile Tab Switcher */}
        <div className="flex md:hidden bg-gray-100/50 p-1.5 rounded-2xl mb-10 border border-gray-100">
           <button 
             onClick={() => setMobileTab('services')}
             className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
               mobileTab === 'services' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'
             }`}
           >
             <Scissors size={14} /> {t('booking.tab_services')}
           </button>
           <button 
             onClick={() => setMobileTab('info')}
             className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
               mobileTab === 'info' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'
             }`}
           >
             <Info size={14} /> {t('booking.tab_info')}
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column: Services */}
          <div className={`lg:col-span-7 bg-white border border-gray-100 rounded-[2.5rem] p-6 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.03)] transition-all duration-500 ${
            mobileTab === 'services' ? 'block' : 'hidden md:block'
          }`}>
            <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-50 pb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-1">{t('booking.menu_title')}</h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('booking.menu_desc')}</p>
              </div>
              
              {/* Category Selector (Compact) */}
              <div className="flex gap-2 p-1.5 bg-gray-50 rounded-xl overflow-x-auto hide-scrollbar">
                 {categorizedServices.map((cat) => (
                   <button
                     key={cat.id}
                     onClick={() => setActiveCategory(cat.id)}
                     className={`px-4 py-2.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                       activeCategory === cat.id ? 'bg-white text-blue-600 shadow-sm border border-blue-100' : 'text-gray-400 hover:text-gray-600'
                     }`}
                   >
                     {t(`category.${cat.id}`) || cat.category}
                   </button>
                 ))}
              </div>
            </div>

            {/* Filtered Services List */}
            <div className="animate-dcFade">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    {currentCategory.icon}
                 </div>
                 <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[#1A1A1A]">{t(`category.${currentCategory.id}`) || currentCategory.category}</h4>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {currentCategory.items.map((service) => (
                  <button 
                    key={service.id}
                    onClick={() => handleBooking(service.name)}
                    className="w-full flex items-center justify-between p-5 md:p-6 bg-gray-50/50 border border-transparent rounded-2xl hover:bg-white hover:border-blue-600 hover:shadow-xl transition-all duration-300 group text-left"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white border border-gray-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                        <Clock size={16} />
                      </div>
                      <div>
                        <h5 className="text-sm md:text-base font-black text-[#1A1A1A] group-hover:text-blue-600 transition-colors uppercase tracking-tight">{service.name}</h5>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{service.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 md:gap-8">
                      <span className="text-xs md:text-sm font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all">{service.price}</span>
                      <ChevronRight className="text-gray-300 group-hover:text-blue-600 translate-x-0 group-hover:translate-x-1 transition-all" size={18} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column: Info & Times */}
          <div className={`lg:col-span-5 space-y-6 transition-all duration-500 ${
            mobileTab === 'info' ? 'block animate-dcFade' : 'hidden md:block'
          }`}>
            
            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <InfoCard small icon={<Phone size={16} />} label={t('booking.info_call')} value="438-221-9349" href="tel:4382219349" />
               <InfoCard small icon={<Mail size={16} />} label={t('booking.info_email')} value="dreyvibez1@gmail.com" href="mailto:dreyvibez1@gmail.com" />
            </div>

            <InfoCard 
              icon={<MapPin className="text-blue-600" size={20} />} 
              label={t('booking.info_location')} 
              value="2025 Rue Bélanger" 
              subValue="Montréal, QC H2E 2N8"
            />

            {/* Popular Times */}
            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <TrendingUp size={18} className="text-blue-600" />
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#1A1A1A]">{t('booking.popular_times')}</h4>
                </div>
                <div className="px-3 py-1 bg-blue-50 rounded-full">
                   <span className="text-[8px] font-black text-blue-600 uppercase tracking-widest">{activeDay}{t('booking.availability_suffix')}</span>
                </div>
              </div>

              <div className="flex justify-between gap-2 mb-10 overflow-x-auto pb-2 hide-scrollbar">
                {days.map((day) => (
                  <button 
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeDay === day ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              {/* Availability Chart */}
              <div className="relative h-28 flex items-end justify-between gap-1.5 mb-8 px-2">
                {[40, 60, 30, 80, 95, 70, 50, 60, 40].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                    <div 
                      style={{ height: `${height}%` }}
                      className={`w-full rounded-t-lg transition-all duration-700 ${
                        height > 80 ? 'bg-red-400/80 group-hover:bg-red-500' : 
                        height > 50 ? 'bg-yellow-400/80 group-hover:bg-yellow-500' : 
                        'bg-blue-500/80 group-hover:bg-blue-600'
                      }`}
                    />
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 border-t border-gray-50 pt-4">
                <span>10 AM</span>
                <span>1 PM</span>
                <span>5 PM</span>
                <span>9 PM</span>
              </div>

              <div className="flex justify-center gap-6">
                <LegendItem color="bg-blue-500" label={t('booking.quiet')} />
                <LegendItem color="bg-yellow-400" label={t('booking.moderate')} />
                <LegendItem color="bg-red-400" label={t('booking.busy')} />
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-[#1A1A1A] text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 transition-transform duration-700 group-hover:rotate-0">
                 <Calendar size={80} />
              </div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8 relative z-10">{t('booking.schedule_title')}</h4>
              <div className="space-y-4 relative z-10">
                <HourRow dark day="Mon - Fri" time="10:00 AM - 9:00 PM" />
                <HourRow dark day="Sat - Sun" time="10:00 AM - 9:00 PM" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8f8f8;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e0e0e0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #1d6fe8;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

function InfoCard({ icon, label, value, subValue, small, href }: any) {
  const Card = href ? 'a' : 'div';
  return (
    <Card 
      href={href}
      className={`bg-white border border-gray-100 rounded-[2rem] shadow-sm flex items-center gap-5 group hover:border-blue-600 hover:shadow-xl transition-all duration-500 ${small ? 'p-5' : 'p-8'}`}
    >
      <div className={`rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 ${small ? 'w-10 h-10' : 'w-14 h-14'}`}>
        <div className="text-blue-600 group-hover:text-white transition-colors">
          {icon}
        </div>
      </div>
      <div className="overflow-hidden">
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1">{label}</p>
        <p className={`${small ? 'text-xs' : 'text-sm md:text-base'} font-black text-[#1A1A1A] truncate uppercase tracking-tight`}>{value}</p>
        {subValue && <p className="text-[10px] font-bold text-gray-400 mt-1">{subValue}</p>}
      </div>
    </Card>
  );
}

function LegendItem({ color, label }: any) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-1.5 h-1.5 rounded-full ${color}`} />
      <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">{label}</span>
    </div>
  );
}

function HourRow({ day, time, dark }: any) {
  return (
    <div className={`flex justify-between items-center border-b pb-3 last:border-0 ${dark ? 'border-white/5' : 'border-gray-100'}`}>
      <span className={`text-[10px] font-bold uppercase tracking-widest ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{day}</span>
      <span className={`text-xs font-black uppercase tracking-tight ${dark ? 'text-white' : 'text-[#1A1A1A]'}`}>{time}</span>
    </div>
  );
}

export default BookingSection;
