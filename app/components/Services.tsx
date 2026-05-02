'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const servicesData = [
  {
    id: 'barbering',
    category: "Barbering",
    description: "Premium grooming, sharp fades, and precision beard work tailored to your structure.",
    image: "/category-barbering.png",
    items: [
      { name: "Signature Haircut", duration: "45 min", price: "CA$45" },
      { name: "Simple Haircut", duration: "35 min", price: "CA$35" },
      { name: "Hair Coloring", duration: "50 min", price: "CA$85" },
      { name: "Coloring + Signature", duration: "1 hr", price: "CA$120" },
      { name: "Line up + Beards", duration: "15 min", price: "CA$25" },
      { name: "Beards Only", duration: "10 min", price: "CA$15" },
      { name: "Kids", duration: "30 min", price: "CA$25" },
      { name: "Teenagers (13-17)", duration: "30 min", price: "CA$30" },
      { name: "Women Haircut", duration: "35 min", price: "CA$40" },
      { name: "Home Service (MTL)", duration: "45 min", price: "CA$100" },
      { name: "Hair Washing", duration: "5 min", price: "CA$10" },
      { name: "Straight Hair", duration: "40 min", price: "CA$40" },
    ]
  },
  {
    id: 'locks',
    category: "Locks",
    description: "Expert loc maintenance, deep detoxes, and meticulous starter locs.",
    image: "/category-locks.png",
    items: [
      { name: "Shampooing", duration: "15 min", price: "CA$10" },
      { name: "Detox", duration: "30 min", price: "CA$50" },
      { name: "Style", duration: "15 min", price: "CA$10" },
      { name: "Retwist Hightop", duration: "45 min", price: "CA$70" },
      { name: "Retwist Interlock Hightop", duration: "1 hr", price: "CA$80" },
      { name: "Retwist Full Head", duration: "1 hr", price: "CA$85" },
      { name: "Retwist Interlock Full Head", duration: "1.5 hr", price: "CA$95" },
      { name: "Loc Repair", duration: "30 min", price: "CA$25" },
      { name: "Starter Locs — Hightop", duration: "1.5 hr", price: "CA$120", detail: "Coils / Twist / Braids" },
      { name: "Starter Locs — Full Head", duration: "2 hr", price: "CA$160", detail: "Coils / Twist / Braids" },
      { name: "Starter Locs (Interlock) — Hightop", duration: "1.5 hr", price: "CA$150" },
      { name: "Starter Locs (Interlock) — Full Head", duration: "2 hr", price: "CA$180" },
      { name: "Loc Extensions", duration: "—", price: "Contact Us" },
    ]
  },
  {
    id: 'braiding',
    category: "Braiding & Nails",
    description: "Flawless protective styling, custom twists, and relaxing pedicure services.",
    image: "/category-braiding.png",
    items: [
      { name: "Boho Braid — Medium", duration: "9 hr", price: "CA$230", detail: "Tue-Sat. Lower length & hair included. Curl not included." },
      { name: "Boho Braid — Large", duration: "5 hr", price: "CA$170", detail: "Tue-Sat. Lower length & hair included. Curl not included." },
      { name: "Boho Bob", duration: "5 hr", price: "CA$221.50", detail: "Tue-Sat. Hair provided. Stops above shoulder, ends curled." },
      { name: "Medium Knotless", duration: "7 hr", price: "CA$250", detail: "Tue-Sat. Lower back length. Hair provided." },
      { name: "Large Knotless", duration: "5 hr", price: "CA$180", detail: "Tue-Sat. 6 rows front. Lower back. Curly ends & hair included." },
      { name: "Cornrows / Tresses", duration: "2 hr", price: "CA$60", detail: "Tuesday to Saturday." },
      { name: "Twists / Vanilles", duration: "2 hr", price: "CA$80", detail: "Tuesday to Saturday." },
      { name: "Rope Twists", duration: "2 hr", price: "CA$80", detail: "Tuesday to Saturday." },
      { name: "Single Braids", duration: "2 hr", price: "CA$85", detail: "Tuesday to Saturday." },
      { name: "Marley Twist — Shoulder", duration: "6 hr", price: "CA$190", detail: "Tue-Sat. Synthetic hair included." },
      { name: "Marley Twist — Midback", duration: "6 hr", price: "CA$220", detail: "Tue-Sat. Synthetic hair included." },
      { name: "Marley Twist — Waist", duration: "7 hr", price: "CA$270", detail: "Tue-Sat. Synthetic hair included." },
      { name: "Mini Twist — S/Medium", duration: "6 hr", price: "CA$185", detail: "Tue-Sat. 12 rows ear to ear. Synthetic hair included." },
      { name: "Mini Twist — Medium", duration: "5 hr", price: "CA$160", detail: "Tue-Sat. 10 rows ear to ear. Synthetic hair included." },
      { name: "Pedicure — Legs", duration: "1 hr", price: "CA$50", detail: "Thursday to Sunday." },
      { name: "Pedicure — Hands", duration: "1 hr", price: "CA$70", detail: "Thursday to Sunday." },
    ]
  }
];


export default function ServicesRedefined() {
  const [activeId, setActiveId] = useState(servicesData[0].id);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });

    servicesData.forEach(cat => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!isClient) return null;

  return (
    // ✅ overflow-hidden REMOVED from section — it silently breaks position:sticky
    // on every descendant. This is the #1 cause of sticky not working.
    // If you need to clip decorative elements, wrap ONLY those in their own
    // overflow-hidden div — never an ancestor of a sticky element.
    <section
      id="services"
      className="relative w-full bg-transparent text-[#1A1A1A] py-16 selection:bg-[#1A1A1A] selection:text-[#FAFAFA]"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >

      {/* STICKY NAV */}
      <div className="sticky top-[64px] z-40 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-gray-200/60 mb-16 md:mb-24 px-5">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between py-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 hidden md:block">
            Menu / 2024
          </span>
          <div className="flex items-center gap-6 md:gap-10 overflow-x-auto w-full md:w-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {servicesData.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`text-xs md:text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${activeId === cat.id ? 'text-[#1A1A1A]' : 'text-gray-400 hover:text-[#1A1A1A]'
                  }`}
              >
                <span className="text-gray-300 mr-2 font-medium">0{idx + 1}</span>
                {cat.category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-16 flex flex-col gap-32 md:gap-48 relative z-10">
        {servicesData.map((cat, idx) => {
          const isEven = idx % 2 === 0;

          const imageShapes = [
            "rounded-t-full rounded-b-[2rem] md:rounded-b-[4rem]",
            "rounded-full",
            "rounded-tl-[6rem] rounded-br-[6rem] md:rounded-tl-[10rem] md:rounded-br-[10rem] rounded-tr-[2rem] rounded-bl-[2rem]"
          ];
          const currentShape = imageShapes[idx % imageShapes.length];

          return (
            <div key={cat.id} id={cat.id} className="relative scroll-mt-[120px]">

              {/* Section Header */}
              <div className="mb-12 md:mb-16 border-b border-gray-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-[#1A1A1A] mb-6">
                    {cat.category}
                  </h3>
                  <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="text-sm font-bold tracking-[0.2em] text-gray-300 flex-shrink-0">
                  SEC // 0{idx + 1}
                </div>
              </div>

              {/* Two-column layout */}
              <div className={`flex flex-col gap-12 lg:gap-20 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                {/*
                  IMAGE COLUMN
                  - self-start: prevents the column from stretching to sibling height
                    (flex children stretch by default; sticky needs a shorter container)
                  - lg:sticky + lg:top-[140px]: sticks below header (64px) + nav (~57px) + gap
                  - No overflow-hidden here or on any ancestor above this point
                */}
                <div className="w-full lg:w-[40%] flex-shrink-0 self-start lg:sticky lg:top-[140px]">
                  <RevealImage src={cat.image} alt={cat.category} shape={currentShape} />
                </div>

                {/* ITEMS LIST — scrolls naturally, image sticks alongside */}
                <div className="w-full lg:w-[60%] flex flex-col border-t border-gray-200/50 lg:border-none pt-4 lg:pt-0">
                  {cat.items.map((item, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        window.dispatchEvent(
                          new CustomEvent('openBookingModal', { detail: { serviceName: item.name } })
                        )
                      }
                      className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-6 md:py-8 border-b border-gray-200 transition-colors hover:border-[#1A1A1A] cursor-pointer"
                    >
                      <div className="flex-1 pr-4 mb-4 sm:mb-0">
                        <h5 className="text-lg md:text-xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-1 group-hover:translate-x-2 transition-transform duration-300 group-hover:text-[#1D6FE8]">
                          {item.name}
                        </h5>
                        {item.detail && (
                          <p className="text-xs font-medium text-gray-500 mt-2 max-w-sm leading-relaxed group-hover:translate-x-2 transition-transform duration-300 delay-75">
                            {item.detail}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-10 w-full sm:w-auto shrink-0 mt-2 sm:mt-0 pt-4 sm:pt-0 border-t border-gray-100 sm:border-none">
                        <div className="flex flex-col text-left sm:text-right">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#1D6FE8] mb-1">
                            {item.duration}
                          </span>
                          <span className="text-xl md:text-2xl font-black tracking-tighter text-[#1A1A1A]">
                            {item.price}
                          </span>
                        </div>
                        <div className="flex items-center justify-center overflow-hidden transition-all duration-300 h-10 px-6 rounded-full bg-[#1A1A1A] border-transparent md:h-12 md:w-12 md:px-0 md:bg-transparent md:border-gray-300 md:border group-hover:bg-[#1D6FE8] group-hover:border-[#1D6FE8] group-hover:shadow-[0_0_20px_rgba(29,111,232,0.4)]">
                          <span className="text-[10px] md:text-[9px] font-bold uppercase tracking-widest text-white md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            Book
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* BOOKING POLICY */}
      <div className="max-w-[1400px] mx-auto mt-32 md:mt-40 px-5 md:px-12 lg:px-16 pb-20">
        <div className="bg-gray-100 border border-gray-200 rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#1D6FE8] mb-4">Crucial Information</h4>
            <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A]">Booking Policy</p>
          </div>
          <div className="max-w-md">
            <p className="text-sm md:text-base font-medium text-gray-500 leading-relaxed">
              A{' '}
              <span className="text-[#1A1A1A] font-bold underline decoration-2 underline-offset-4">
                CA$15 non-refundable deposit
              </span>{' '}
              is required to secure your booking. Appointments are unconfirmed until the deposit is received.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RevealImage({ src, alt, shape }: { src: string; alt: string; shape: string }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref as any}
      className={`w-full h-[50vh] md:h-[65vh] max-h-[750px] bg-[#E0DCD1]/40 overflow-hidden border-[6px] md:border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-1000 ${shape} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-all duration-[2s] ease-[cubic-bezier(0.2,1,0.3,1)] hover:scale-105 ${inView ? 'scale-100 blur-0' : 'scale-125 blur-lg'
            }`}
        />
        <div
          className={`absolute inset-0 bg-[#1A1A1A] transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,1,0.3,1)] ${inView ? 'translate-y-full' : 'translate-y-0'
            }`}
        />
      </div>
    </div>
  );
}

function useInView(options?: IntersectionObserverInit): [React.RefObject<any>, boolean] {
  const ref = React.useRef<HTMLElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}