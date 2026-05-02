'use client';

import React, { useState } from 'react';
import { 
  CreditCard, 
  CalendarClock, 
  Timer, 
  CheckCircle2,
  Plus,
  Minus,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

const faqs = [
  {
    id: 'payment',
    icon: (size: number) => <CreditCard size={size} />,
    question: "Payment Methods",
    answer: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-sm font-black text-[#1A1A1A] uppercase tracking-tight">
          <CheckCircle2 size={16} className="text-green-500" />
          Interac E-Transfer
        </div>
        <div className="flex items-center gap-3 text-sm font-black text-[#1A1A1A] uppercase tracking-tight">
          <CheckCircle2 size={16} className="text-green-500" />
          Cash (In-Studio)
        </div>
        <p className="text-[11px] font-bold text-gray-400 mt-6 leading-relaxed uppercase tracking-widest">
          A non-refundable deposit is required at the time of booking via E-Transfer.
        </p>
      </div>
    )
  },
  {
    id: 'booking',
    icon: (size: number) => <CalendarClock size={size} />,
    question: "Booking Policy",
    answer: (
      <p className="text-sm font-semibold text-gray-500 leading-relaxed">
        All appointments must be scheduled through our online portal. Your spot is only confirmed once the <span className="text-[#1A1A1A] font-black">CA$15 deposit</span> is received.
      </p>
    )
  },
  {
    id: 'late',
    icon: (size: number) => <Timer size={size} />,
    question: "Late Policy",
    answer: (
      <p className="text-sm font-semibold text-gray-500 leading-relaxed">
        We value your time. If you are more than <span className="text-[#1A1A1A] font-black underline decoration-orange-500 decoration-2">15 minutes late</span>, your appointment may be cancelled to stay on schedule for other clients.
      </p>
    )
  }
];

const Info = () => {
  const [openId, setOpenId] = useState<string | null>('payment');

  return (
    <section id="info" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-blue-600 mb-6">Frequently Asked Questions</p>
          <h2 className="text-5xl md:text-8xl font-black text-[#1A1A1A] tracking-tighter leading-[0.85] uppercase">
            Essential <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Information</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* FAQ Accordion Column */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className={`bg-white border transition-all duration-500 rounded-[2rem] overflow-hidden ${
                  openId === faq.id ? 'border-blue-600 shadow-2xl' : 'border-gray-100'
                }`}
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      openId === faq.id ? 'bg-blue-600 text-white' : 'bg-gray-50 text-blue-600'
                    }`}>
                      {faq.icon(20)}
                    </div>
                    <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-[#1A1A1A]">
                      {faq.question}
                    </h4>
                  </div>
                  <div className={`transition-transform duration-500 ${openId === faq.id ? 'rotate-180 text-blue-600' : 'text-gray-300'}`}>
                    {openId === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openId === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 md:p-8 pt-0 border-t border-gray-50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Policy Highlight Column */}
          <div className="lg:col-span-5">
             <div className="bg-[#1A1A1A] text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group shadow-2xl h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 transition-transform duration-700 group-hover:rotate-0">
                   <ShieldCheck size={120} />
                </div>
                
                <div>
                   <div className="flex items-center gap-4 mb-8">
                     <span className="w-12 h-px bg-blue-500" />
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">Notice</span>
                   </div>
                   <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-10">
                     Cancellation <br /> Policy
                   </h3>
                   
                   <div className="space-y-8">
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Deposits</p>
                         <p className="text-base font-bold leading-snug opacity-90">
                           Deposits are <span className="text-blue-500">non-refundable</span> and non-transferable if the session is cancelled.
                         </p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Rescheduling</p>
                         <p className="text-sm font-semibold leading-relaxed opacity-60">
                           Need to move your session? Please reach out ASAP via call or text to find a new available slot.
                         </p>
                      </div>
                   </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-600/30 flex items-center justify-center">
                      <AlertCircle size={14} className="text-blue-600" />
                   </div>
                   <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 italic">Studio Protocol // 2024</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Info;
