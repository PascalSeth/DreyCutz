'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [activeLink, setActiveLink] = useState('Home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: t('nav.home') || 'Home', href: '#' },
        { name: t('nav.services'), href: '#services' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.gallery'), href: '#gallery' },
        { name: t('nav.reviews'), href: '#reviews' },
        { name: t('nav.contact'), href: '#booking' }
    ];

    // Handle scroll shrinking effect and active section detection
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 20);

                    // Scroll Spy Logic
                    const sections = navLinks.map(link => {
                        if (link.href === '#') return { name: link.name, offset: 0 };
                        const el = document.querySelector(link.href);
                        return { name: link.name, offset: el ? (el as HTMLElement).offsetTop - 100 : 0 };
                    });

                    const currentPos = window.scrollY;
                    const currentSection = sections.reduce((acc, section) => {
                        return currentPos >= section.offset ? section : acc;
                    }, sections[0]);

                    setActiveLink(currentSection.name);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navLinks]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <style jsx>{`
                @keyframes float-complex {
                    0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
                    33% { transform: translate(6px, -6px) rotate(6deg) scale(1.05); }
                    66% { transform: translate(-3px, -3px) rotate(-3deg) scale(0.95); }
                    100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
                }
                @keyframes float-reverse {
                    0% { transform: translate(0px, 0px) rotate(0deg); }
                    50% { transform: translate(-6px, 8px) rotate(-8deg); }
                    100% { transform: translate(0px, 0px) rotate(0deg); }
                }
                @keyframes squiggle-draw {
                    0% { stroke-dashoffset: 200; opacity: 0; }
                    20% { opacity: 1; }
                    80% { opacity: 1; }
                    100% { stroke-dashoffset: 0; opacity: 0; }
                }
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                
                .animate-clipper { animation: float-complex 7s ease-in-out infinite; }
                .animate-scissors { animation: float-reverse 8s ease-in-out infinite; animation-delay: 1s; }
                .animate-squiggle {
                    stroke-dasharray: 200;
                    stroke-dashoffset: 200;
                    animation: squiggle-draw 4s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
                }
                .mobile-link-anim {
                    animation: fade-in-up 0.5s ease-out forwards;
                    opacity: 0;
                }
            `}</style>

            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out overflow-hidden ${isScrolled || isMobileMenuOpen
                    ? 'h-[64px] bg-[#FAFAFA]/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
                    : 'h-[84px] bg-transparent border-b border-transparent shadow-none'
                    }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {/* --- AMBIENT BACKGROUND --- */}
                <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="absolute top-[-30px] left-[15%] w-[200px] h-[200px] rounded-full bg-blue-400/20 blur-[50px]" />
                    <div className="absolute top-[-20px] right-[25%] w-[150px] h-[150px] rounded-full bg-slate-400/20 blur-[40px]" />
                </div>

                {/* --- MAIN UI CONTENT --- */}
                <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8 h-full flex items-center justify-between relative z-50">

                    {/* Left: Branding & Rounded Logo */}
                    <a href="#" className="flex items-center gap-2 md:gap-3 cursor-pointer group z-50 shrink-0">
                        <div className={`relative flex items-center justify-center bg-transparent border rounded-full overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(29,111,232,0.3)] group-hover:border-[#1D6FE8]/50 ${isScrolled || isMobileMenuOpen ? 'w-[28px] h-[28px] md:w-[36px] md:h-[36px] border-gray-200' : 'w-[36px] h-[36px] md:w-[46px] md:h-[46px] border-white/10'
                            }`}>
                            <Image
                                src="/logo.png"
                                alt="DreyCutz Logo"
                                width={60}
                                height={60}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                            <span className={`font-extrabold tracking-[0.15em] uppercase leading-none transition-all duration-500 truncate ${isScrolled || isMobileMenuOpen ? 'text-[#1A1A1A] text-[11px] md:text-[14px]' : 'text-white text-[13px] md:text-[16px]'}`}>
                                Drey<span className="text-[#1D6FE8] font-light">Cutz</span>
                            </span>
                            <span className={`font-semibold tracking-[0.2em] uppercase transition-all duration-500 overflow-hidden truncate ${isScrolled || isMobileMenuOpen ? 'text-gray-500 text-[0px] h-0 opacity-0' : 'text-white/40 text-[7px] md:text-[8px] mt-1 h-auto opacity-100'}`}>
                                Grooming Studio
                            </span>
                        </div>
                    </a>

                    {/* Center: Desktop Navigation */}
                    <nav className={`hidden xl:flex items-center p-1 rounded-full transition-all duration-500 ${isScrolled
                        ? 'bg-gray-100/80 border border-gray-200 backdrop-blur-md'
                        : 'bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.2)]'
                        }`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.querySelector(link.href === '#' ? 'body' : link.href);
                                    target?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`relative px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${activeLink === link.name
                                    ? (isScrolled ? 'text-white' : 'text-[#1A1A1A]')
                                    : (isScrolled ? 'text-gray-500 hover:text-[#1A1A1A]' : 'text-white/50 hover:text-white')
                                    }`}
                            >
                                {activeLink === link.name && (
                                    <div className={`absolute inset-0 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] -z-10 ${isScrolled ? 'bg-[#1A1A1A]' : 'bg-white'}`}></div>
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </a>
                        ))}
                    </nav>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-2 md:gap-4 z-50">
                        {/* Desktop Socials */}
                        <div className="hidden lg:flex items-center gap-2">
                            {[
                                { name: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M2 2h20v20h-20z' },
                                { name: 'TikTok', path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z' }
                            ].map((social, i) => (
                                <button key={i} className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 hover:bg-[#1D6FE8] hover:text-white hover:border-[#1D6FE8] ${isScrolled ? 'border-gray-200 text-gray-500' : 'border-white/10 text-white/50 bg-white/5'}`}>
                                    <svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d={social.path} />
                                    </svg>
                                </button>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button 
                            onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
                            className={`hidden sm:flex group relative items-center justify-center gap-2 overflow-hidden rounded-full font-bold tracking-[0.08em] uppercase transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5 ${isScrolled
                            ? 'px-5 py-2 text-[10px] bg-[#1A1A1A] text-white'
                            : 'px-6 py-2.5 text-[11px] bg-white text-black'
                            }`}>
                            <span className="relative z-10">{t('nav.booking')}</span>
                            <div className="absolute inset-0 bg-[#1D6FE8] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>

                        {/* Language Switcher */}
                        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                           <button 
                             onClick={() => setLanguage('en')}
                             className={`px-2 py-1 rounded-full text-[9px] font-black uppercase transition-all duration-300 ${language === 'en' ? 'bg-[#1D6FE8] text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                           >
                             EN
                           </button>
                           <button 
                             onClick={() => setLanguage('fr')}
                             className={`px-2 py-1 rounded-full text-[9px] font-black uppercase transition-all duration-300 ${language === 'fr' ? 'bg-[#1D6FE8] text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                           >
                             FR
                           </button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className={`xl:hidden flex flex-col justify-center items-center w-9 h-9 md:w-10 md:h-10 rounded-full border z-50 ${isScrolled ? 'bg-gray-100 border-gray-200' : 'bg-white/5 border-white/10 backdrop-blur-md'}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className={`w-4 h-[2px] transition-all duration-300 rounded-full ${isScrolled ? 'bg-[#1A1A1A]' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : '-translate-y-1'}`}></span>
                            <span className={`w-4 h-[2px] transition-all duration-300 rounded-full ${isScrolled ? 'bg-[#1A1A1A]' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`w-4 h-[2px] transition-all duration-300 rounded-full ${isScrolled ? 'bg-[#1A1A1A]' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : 'translate-y-1'}`}></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* --- MOBILE MENU --- */}
            <div className={`fixed inset-0 z-40 bg-[#FAFAFA]/98 backdrop-blur-3xl transition-all duration-500 flex flex-col items-center justify-center pt-20 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <nav className="flex flex-col items-center gap-8 w-full px-6">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                setIsMobileMenuOpen(false);
                                const target = document.querySelector(link.href === '#' ? 'body' : link.href);
                                target?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`mobile-link-anim text-3xl font-black tracking-widest uppercase transition-colors ${activeLink === link.name ? 'text-[#1A1A1A]' : 'text-gray-400'}`}
                            style={{ animationDelay: `${0.1 * index}s` }}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
}

export default Navbar;