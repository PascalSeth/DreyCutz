'use client';

import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const reviewsData = [
  { name: "Horace", initial: "H", text: "Exclusive fades.", verified: true },
  { name: "Egwim E.", initial: "E", text: "If it's not dreycutz its nothing.", verified: true },
  { name: "Arnold E.", initial: "A", text: "Very good barber and very professional.", verified: true },
  { name: "Amen S.", initial: "A", text: "Very professional as a barber, loved my experience with him. I recommend!", verified: true },
  { name: "MHD O.", initial: "M", text: "Best barber experience in Montreal.", verified: true },
  { name: "Abby J.", initial: "A", text: "Sharp cut, professional service, and on time.", verified: true },
  { name: "Nakuma T.", initial: "N", text: "Very clean work and great attention to detail.", verified: true },
  // Duplicate for infinite marquee effect
  { name: "Horace", initial: "H", text: "Exclusive fades.", verified: true },
  { name: "Egwim E.", initial: "E", text: "If it's not dreycutz its nothing.", verified: true },
  { name: "Arnold E.", initial: "A", text: "Very good barber and very professional.", verified: true },
];

const Reviews = () => {
  const { t } = useLanguage();
  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-16 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-blue-600 mb-4">{t('reviews.eyebrow')}</p>
            <h2 className="text-6xl md:text-8xl font-black text-[#1A1A1A] tracking-tighter leading-[0.85] uppercase">
              The <span className="text-gray-300">{t('reviews.title').split(' ')[1] || 'Reviews'}</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-blue-600 font-bold">
            <Star className="fill-current w-5 h-5" />
            <Star className="fill-current w-5 h-5" />
            <Star className="fill-current w-5 h-5" />
            <Star className="fill-current w-5 h-5" />
            <Star className="fill-current w-5 h-5" />
            <span className="ml-2 text-sm uppercase tracking-widest text-[#1A1A1A]">{t('reviews.rating_label')}</span>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Row 1 */}
      <div className="flex overflow-hidden gap-6 py-8">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {reviewsData.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
        <div className="flex gap-6 animate-marquee whitespace-nowrap" aria-hidden="true">
          {reviewsData.map((review, i) => (
            <ReviewCard key={i + 'copy'} {...review} />
          ))}
        </div>
      </div>

      {/* Infinite Marquee Row 2 (Reverse) */}
      <div className="flex overflow-hidden gap-6 py-8">
        <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap">
          {[...reviewsData].reverse().map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
        <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap" aria-hidden="true">
          {[...reviewsData].reverse().map((review, i) => (
            <ReviewCard key={i + 'copy'} {...review} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 45s linear infinite;
        }
      `}</style>
    </section>
  );
};

function ReviewCard({ name, initial, text, verified }: any) {
  const { t } = useLanguage();
  return (
    <div className="inline-block w-[300px] md:w-[400px] bg-white/40 backdrop-blur-md border border-[#E0DCD1]/40 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-600/30 transition-all duration-500 group">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-lg font-black group-hover:bg-blue-600 transition-colors">
          {initial}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold uppercase tracking-tight text-[#1A1A1A]">{name}</h4>
            {verified && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />}
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{t('reviews.verified_client')}</p>
        </div>
      </div>
      <p className="text-base md:text-lg font-medium text-gray-700 leading-relaxed whitespace-normal italic">
        "{text}"
      </p>
    </div>
  );
}

export default Reviews;
