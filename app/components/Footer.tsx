'use client';

import React from 'react';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Our Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'WHY BOOK WITH US', href: '#values' },
    { name: 'About Us', href: '#about' },
    { name: 'Satisfied Customers', href: '#reviews' },
    { name: 'FAQ', href: '#info' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#booking' },
  ];

  return (
    <footer className="relative bg-[#1A1A1A] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Decorative background logo */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none select-none">
        <h2 className="text-[20vw] font-black leading-none uppercase tracking-tighter">DREY</h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 mb-20">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black tracking-tighter uppercase italic mb-6">Drey<span className="text-blue-600">Cutz</span></h3>
              <p className="text-gray-400 font-medium leading-relaxed max-w-xs">
                Premium barbershop in Montreal. Sharp cuts, clean lines, and professional grooming by Drey.
              </p>
            </div>
            <div className="flex gap-4">
              <SocialLink href="https://instagram.com" icon={<FaInstagram size={20} />} />
              <SocialLink href="https://facebook.com" icon={<FaFacebookF size={18} />} />
              <SocialLink href="mailto:dreyvibez1@gmail.com" icon={<Mail size={20} />} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-blue-500 mb-10">Quick Links</h4>
            <ul className="grid grid-cols-1 gap-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300 font-bold uppercase tracking-tight text-xs md:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-blue-500 mb-10">Contact</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <Phone className="text-blue-600 mt-1 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <a href="tel:4382219349" className="text-gray-400 font-bold tracking-tight hover:text-white transition-colors cursor-pointer">
                  438-221-9349
                </a>
              </div>
              <div className="flex items-start gap-4 group">
                <Mail className="text-blue-600 mt-1 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <a href="mailto:dreyvibez1@gmail.com" className="text-gray-400 font-bold tracking-tight hover:text-white transition-colors cursor-pointer">
                  dreyvibez1@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-4 group">
                <MapPin className="text-blue-600 mt-1 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <p className="text-gray-400 font-bold tracking-tight leading-relaxed">
                  2025 Rue Bélanger <br />
                  Montréal, QC H2E 2N8
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-blue-500 mb-10">Hours</h4>
            <div className="space-y-6">
              <HourItem day="Mon - Fri" time="10am - 9pm" />
              <HourItem day="Saturday" time="10am - 9pm" />
              <HourItem day="Sunday" time="10am - 9pm" />
              <div className="pt-6">
                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-lg hover:bg-white hover:text-black transition-all duration-500 shadow-2xl flex items-center justify-center gap-2"
                >
                  Book Now <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            © {currentYear} DREYCUTZ STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="text-gray-400 group-hover:text-white transition-colors">
        {icon}
      </div>
    </a>
  );
}

function HourItem({ day, time }: { day: string, time: string }) {
  return (
    <div className="flex justify-between items-center border-b border-white/5 pb-2">
      <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{day}</span>
      <span className="text-sm font-black text-white">{time}</span>
    </div>
  );
}

export default Footer;
