'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

const BLUE = '#1D6FE8';
const BLUEL = '#4D8FFF';

const NAME_LETTERS = ['D', 'R', 'E', 'Y', 'C', 'U', 'T', 'Z'];
const STUDIO_LETTERS = ['S', 'T', 'U', 'D', 'I', 'O'];

function Hero() {
    const { t } = useLanguage();
    const [loaded, setLoaded] = useState(false);
    const [isSpun, setIsSpun] = useState(false);
    useEffect(() => { setLoaded(true); }, []);

    const anim = (name: string, dur: string, delay: string, ease = 'ease') =>
        loaded ? `${name} ${dur} ${ease} ${delay} forwards` : 'none';

    return (
        <section
            id="home"
            className="relative w-full flex flex-col overflow-hidden"
            style={{ minHeight: '100svh', background: '#08090A', fontFamily: "'Montserrat', sans-serif" }}
            aria-label="DreyCutz Barber Studio"
        >
            {/* ── BG IMAGE ─────────────────────────────── */}
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <Image src="/salon-full-view.jpeg" alt="DreyCutz studio interior" fill priority
                    style={{ objectFit: 'cover', animation: loaded ? 'dcZoom 18s ease forwards' : 'none' }} />
            </div>

            {/* ── OVERLAYS ─────────────────────────────── */}
            <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true"
                style={{ background: 'linear-gradient(to top, rgba(8,9,10,0.99) 0%, rgba(8,9,10,0.82) 28%, rgba(8,9,10,0.44) 52%, rgba(8,9,10,0.10) 72%, transparent 100%)' }} />
            <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true"
                style={{ background: 'linear-gradient(to bottom, rgba(8,9,10,0.88) 0%, rgba(8,9,10,0.30) 18%, transparent 38%)' }} />
            <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true"
                style={{ background: 'linear-gradient(108deg, rgba(8,9,10,0.85) 0%, rgba(8,9,10,0.30) 45%, transparent 62%)' }} />

            {/* ── AMBIENT ORBS ─────────────────────────── */}
            <div className="absolute z-[2] rounded-full pointer-events-none" aria-hidden="true"
                style={{
                    width: 800, height: 800, left: '-10%', bottom: '-5%',
                    background: `radial-gradient(circle, rgba(29,111,232,0.38) 0%, rgba(29,111,232,0.10) 50%, transparent 70%)`,
                    filter: 'blur(24px)', animation: 'dcOrb1 14s ease-in-out infinite',
                    transform: 'translateZ(0)'
                }} />
            <div className="absolute z-[2] rounded-full pointer-events-none" aria-hidden="true"
                style={{
                    width: 500, height: 500, right: '5%', top: '15%',
                    background: `radial-gradient(circle, rgba(77,143,255,0.28) 0%, rgba(77,143,255,0.06) 55%, transparent 72%)`,
                    filter: 'blur(30px)', animation: 'dcOrb2 18s ease-in-out infinite',
                    transform: 'translateZ(0)'
                }} />
            <div className="absolute z-[2] rounded-full pointer-events-none" aria-hidden="true"
                style={{
                    width: 360, height: 360, left: '32%', top: '-10%',
                    background: `radial-gradient(circle, rgba(29,111,232,0.22) 0%, transparent 68%)`,
                    filter: 'blur(32px)', animation: 'dcOrb3 22s ease-in-out infinite',
                    transform: 'translateZ(0)'
                }} />

            {/* ── FILM GRAIN ───────────────────────────── */}
            <div className="absolute inset-0 z-[2] pointer-events-none opacity-[0.04]" aria-hidden="true"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

            {/* ── TOP ACCENT LINE ──────────────────────── */}
            <div className="absolute top-0 left-0 right-0 h-[2px] z-[12]" aria-hidden="true"
                style={{
                    background: `linear-gradient(90deg, ${BLUE} 0%, ${BLUEL} 45%, transparent 80%)`,
                    transformOrigin: 'left', opacity: 0,
                    animation: anim('dcGrow', '1s', '0.1s', 'cubic-bezier(0.16,1,0.3,1)')
                }} />

            {/* ── CORNER BRACKET ───────────────────────── */}
            <div className="absolute z-[4] pointer-events-none" aria-hidden="true"
                style={{
                    top: 'calc(72px + 1.6rem)', left: 'clamp(1.5rem, 6vw, 5rem)',
                    width: 22, height: 22,
                    borderTop: `1.5px solid ${BLUEL}55`, borderLeft: `1.5px solid ${BLUEL}55`,
                    opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease 2s'
                }} />

            {/* ── MAIN CONTENT AREA ────────────────────── */}
            {/*  Mobile: col-reverse → logo on top, text below
                Desktop: row → text left, logo right              */}
            <div className="relative z-[5] flex-1 flex flex-col-reverse md:flex-row"
                style={{ paddingTop: 'clamp(72px, 12vh, 84px)' }}>

                {/* ── LEFT: TEXT ───────────────────────── */}
                <div className="flex flex-col justify-center items-center md:items-start flex-1 min-w-0 text-center md:text-left"
                    style={{ padding: 'clamp(1rem, 5vh, 2rem) clamp(1rem, 6vw, 5rem)' }}>

                    {/* Eyebrow */}
                    <div className="flex items-center gap-[10px]"
                        style={{ marginBottom: 'clamp(0.5rem,1.5vh,1.1rem)', opacity: 0, animation: anim('dcSlideX', '0.6s', '0.4s') }}>
                        <div className="h-[2px] rounded-sm flex-shrink-0" style={{ width: 26, background: BLUE }} />
                        <span className="font-bold uppercase tracking-[0.35em]" style={{ fontSize: 10, color: BLUE }}>
                            {t('hero.eyebrow')}
                        </span>
                    </div>

                    {/* Welcome to */}
                    <span className="block font-light italic uppercase tracking-[0.5em]"
                        style={{
                            fontSize: 'clamp(0.72rem, 1.6vh, 1rem)', color: 'rgba(255,255,255,0.36)',
                            marginBottom: 'clamp(0.08rem, 0.4vh, 0.3rem)', opacity: 0,
                            animation: anim('dcFade', '0.5s', '0.55s')
                        }}>
                        {t('hero.welcome')}
                    </span>

                    {/* DREYCUTZ — per-letter */}
                    <div aria-label="DREYCUTZ" style={{ lineHeight: 0.88 }}>
                        <div className="flex" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.2rem, 9vh, 6rem)', letterSpacing: '0.02em' }}>
                            {NAME_LETTERS.map((l, i) => (
                                <span key={i} style={{
                                    display: 'inline-block', color: '#fff', opacity: 0,
                                    animation: loaded ? `dcLetterIn 0.55s cubic-bezier(0.16,1,0.3,1) ${0.60 + i * 0.055}s forwards` : 'none'
                                }}>
                                    {l}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* STUDIO — per-letter, outline */}
                    <div aria-label="STUDIO" style={{ lineHeight: 0.88, marginBottom: 'clamp(0.6rem,1.6vh,1.2rem)' }}>
                        <div className="flex" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.2rem, 9vh, 6rem)', letterSpacing: '0.02em' }}>
                            {STUDIO_LETTERS.map((l, i) => (
                                <span key={i} style={{
                                    display: 'inline-block', color: 'transparent',
                                    WebkitTextStroke: `clamp(1px, 0.4vw, 2px) ${BLUE}`, opacity: 0,
                                    animation: loaded ? `dcLetterIn 0.55s cubic-bezier(0.16,1,0.3,1) ${0.72 + i * 0.055}s forwards` : 'none'
                                }}>
                                    {l}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Blue rule */}
                    <div className="rounded-sm" aria-hidden="true"
                        style={{
                            width: 44, height: 2, background: BLUE,
                            marginBottom: 'clamp(0.5rem,1.2vh,0.9rem)', opacity: 0,
                            animation: anim('dcFade', '0.5s', '1.10s')
                        }} />

                    {/* Subtext */}
                    <p className="font-light leading-[1.75]"
                        style={{
                            fontSize: 'clamp(13px, 1.8vh, 15px)', letterSpacing: '0.03em',
                            color: 'rgba(255,255,255,0.40)', maxWidth: 360,
                            marginBottom: 'clamp(0.9rem, 2vh, 1.5rem)', opacity: 0,
                            animation: anim('dcFade', '0.5s', '1.20s')
                        }}>
                        {t('hero.subtext')}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 w-full sm:w-auto"
                        style={{ opacity: 0, animation: anim('dcFade', '0.5s', '1.30s'), marginBottom: '2rem' }}>
                        <div className="relative inline-flex">
                            {loaded && (
                                <div className="absolute inset-0 rounded-[4px] pointer-events-none"
                                    style={{ border: `1px solid ${BLUE}`, animation: 'dcRingPulse 2.4s ease-out 2s infinite' }} />
                            )}
                            <button
                                className="group relative flex items-center gap-2 cursor-pointer rounded-[4px] whitespace-nowrap font-bold uppercase transition-all duration-200"
                                aria-label="Book an appointment"
                                style={{
                                    height: 42, padding: '0 1.2rem', background: BLUE,
                                    border: `2px solid ${BLUE}`, fontSize: 8.5, letterSpacing: '0.15em',
                                    color: '#fff', boxShadow: `0 0 22px rgba(29,111,232,0.32)`,
                                    fontFamily: "'Montserrat', sans-serif", width: '100%', minWidth: '220px'
                                }}
                                onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = BLUEL; b.style.borderColor = BLUEL; b.style.transform = 'translateY(-2px)'; b.style.boxShadow = '0 10px 30px rgba(29,111,232,0.55)'; }}
                                onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = BLUE; b.style.borderColor = BLUE; b.style.transform = ''; b.style.boxShadow = '0 0 22px rgba(29,111,232,0.32)'; }}
                            >
                                {t('hero.cta_book')}
                                <span className="flex transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                                    <svg width="13" height="13" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <button
                            className="cursor-pointer rounded-[4px] whitespace-nowrap font-semibold uppercase transition-all duration-200"
                            style={{
                                height: 42, padding: '0 1.2rem', background: 'transparent',
                                border: '2px solid rgba(255,255,255,0.14)', fontSize: 8.5,
                                letterSpacing: '0.15em', color: 'rgba(255,255,255,0.40)',
                                fontFamily: "'Montserrat', sans-serif", width: '100%', minWidth: '220px'
                            }}
                            onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = BLUE; b.style.color = BLUEL; }}
                            onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = 'rgba(255,255,255,0.14)'; b.style.color = 'rgba(255,255,255,0.40)'; }}
                        >
                            {t('hero.cta_services')}
                        </button>

                        {/* Mobile-only Quick Call Pill */}
                        <a href="tel:4382219349" className="md:hidden flex items-center gap-2 cursor-pointer rounded-[4px] whitespace-nowrap font-semibold uppercase transition-all duration-200 hover:bg-white/5"
                            style={{
                                height: 42, padding: '0 1.2rem', background: 'transparent',
                                border: '1px solid rgba(255,255,255,0.08)', fontSize: 8.5,
                                letterSpacing: '0.15em', color: '#fff',
                                fontFamily: "'Montserrat', sans-serif"
                            }}>
                            <svg width="12" height="12" fill="none" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.595-5.2-3.9-6.794-6.794l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            {t('hero.cta_call')}
                        </a>
                    </div>
                </div>

                {/* ── RIGHT: LOGO ──────────────────────── */}
                <div className="flex items-center justify-center md:justify-end flex-shrink-0 w-full md:w-auto"
                    style={{ padding: 'clamp(0.5rem, 3vh, 1rem) clamp(1rem, 7vw, 5rem) 0' }}>

                    {/* Logo Wrapper */}
                    <div className="relative flex items-center justify-center transition-all duration-[1200ms] ease-out"
                        style={{
                            width: 'clamp(150px, 28vw, 380px)', height: 'clamp(150px, 28vw, 380px)',
                            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(40px)'
                        }}>

                        {/* Soft Spotlight from above */}
                        <div className="absolute top-[-30%] w-[140%] h-[140%] pointer-events-none rounded-full"
                            style={{
                                background: `radial-gradient(ellipse at top, rgba(29,111,232,0.25) 0%, transparent 65%)`,
                                transform: loaded ? 'translateY(0)' : 'translateY(-40px)',
                                opacity: loaded ? 1 : 0,
                                transition: 'all 2s ease-out 0.8s',
                                filter: 'blur(30px)'
                            }} />

                        {/* Logo Image with 2D Spin and Crossfade */}
                        <div className="relative z-10 w-[85%] h-[85%] cursor-pointer group" style={{ WebkitTapHighlightColor: 'transparent' }} onClick={() => setIsSpun(!isSpun)}>
                            <div className={`w-full h-full transition-transform duration-[1200ms] ease-in-out md:group-hover:rotate-[360deg] ${isSpun ? 'rotate-[360deg]' : 'rotate-0'}`}>
                                
                                {/* Base Logo (logo-whites.png) */}
                                <div className={`absolute inset-0 transition-opacity duration-[1000ms] ease-in-out md:group-hover:opacity-0 ${isSpun ? 'opacity-0' : 'opacity-100'}`}>
                                    <Image
                                        src="/logo-whites.png"
                                        alt="DreyCutz logo white"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 40vw, 450px"
                                        className="object-contain"
                                        style={{ filter: `drop-shadow(0 30px 40px rgba(0,0,0,0.6)) drop-shadow(0 0 25px rgba(29,111,232,0.3))` }}
                                    />
                                </div>

                                {/* Hover Logo (logo.png) */}
                                <div className={`absolute inset-0 rounded-full overflow-hidden transition-opacity duration-[1000ms] ease-in-out md:group-hover:opacity-100 ${isSpun ? 'opacity-100' : 'opacity-0'}`}>
                                    <Image
                                        src="/logo.png"
                                        alt="DreyCutz logo hover"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 40vw, 450px"
                                        className="object-cover"
                                        style={{ filter: `drop-shadow(0 30px 40px rgba(0,0,0,0.6)) drop-shadow(0 0 25px rgba(29,111,232,0.3))` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── SCROLL INDICATOR (Mobile Only) ───────── */}
            <div className="relative z-[6] flex md:hidden items-center justify-center pb-4 pt-2 opacity-0 flex-shrink-0"
                 style={{ animation: loaded ? 'dcFade 1s ease 2s forwards' : 'none' }}>
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#4D8FFF] to-transparent dc-float-logo" />
            </div>

            {/* ── INFO BAR (Desktop Only) ──────────────── */}
            <div className="relative z-[6] hidden md:grid flex-shrink-0 border-t" role="contentinfo"
                style={{
                    height: 62, gridTemplateColumns: 'repeat(3, 1fr)',
                    borderColor: 'rgba(255,255,255,0.07)', background: 'transparent',
                    opacity: 0, animation: anim('dcFade', '0.6s', '1.5s')
                }}>

                <BarCell divider>
                    <BarIcon><svg width="12" height="12" fill="none" stroke={BLUEL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg></BarIcon>
                    <div className="overflow-hidden"><BarLabel>{t('hero.info_address_label')}</BarLabel><BarVal>2025 Rue Bélanger, Montréal QC H2E 2N8</BarVal></div>
                </BarCell>

                <BarCell divider>
                    <BarIcon><svg width="12" height="12" fill="none" stroke={BLUEL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.595-5.2-3.9-6.794-6.794l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg></BarIcon>
                    <div><BarLabel>{t('hero.cta_call')}</BarLabel><BarVal><a href="tel:4382219349" className="hover:text-white transition-colors duration-200">(438)-221-9349</a></BarVal></div>
                </BarCell>

                <BarCell>
                    <BarIcon><svg width="12" height="12" fill="none" stroke={BLUEL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></svg></BarIcon>
                    <div><BarLabel>{t('hero.info_hours_label')}</BarLabel><BarVal>{t('hero.info_hours_val')}</BarVal></div>
                </BarCell>
            </div>
        </section>
    );
}

// ── Sub-components ───────────────────────────────────────────

function BarCell({ children, divider }: { children: React.ReactNode; divider?: boolean }) {
    return (
        <div className={`flex items-center gap-[10px] overflow-hidden ${divider ? 'border-r' : ''}`}
            style={{ padding: '0 clamp(0.9rem,2.2vw,1.8rem)', borderColor: 'rgba(255,255,255,0.06)' }}>
            {children}
        </div>
    );
}

function BarIcon({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-7 h-7 flex-shrink-0 rounded-[6px] flex items-center justify-center" aria-hidden="true"
            style={{ background: 'rgba(29,111,232,0.14)', border: '1px solid rgba(29,111,232,0.28)' }}>
            {children}
        </div>
    );
}

function BarLabel({ children }: { children: React.ReactNode }) {
    return <div className="font-bold uppercase whitespace-nowrap mb-[1px]" style={{ fontSize: '7.5px', letterSpacing: '0.24em', color: BLUEL }}>{children}</div>;
}

function BarVal({ children }: { children: React.ReactNode }) {
    return <div className="whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontSize: 10, color: 'rgba(255,255,255,0.42)' }}>{children}</div>;
}

export default Hero;