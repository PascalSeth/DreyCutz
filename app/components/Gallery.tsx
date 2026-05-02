'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Play, Camera, Film } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const allPhotos = [
  { id: 1, type: 'photo', src: '/jpeg/salon-full-view.jpeg', alt: 'Studio Panorama', label: 'Space' },
  { id: 2, type: 'photo', src: '/jpeg/salon-interior.jpeg', alt: 'Modern Interior', label: 'Vibe' },
  { id: 3, type: 'photo', src: '/jpeg/drey-cutting-1.jpeg', alt: 'Mastery at Work', label: 'Craft' },
  { id: 4, type: 'photo', src: '/jpeg/drey-cutting-2.jpeg', alt: 'Precision Styling', label: 'Focus' },
  { id: 11, type: 'photo', src: '/jpeg/drey.jpeg', alt: 'The Master Barber', label: 'Artist' },
  { id: 12, type: 'photo', src: '/jpeg/4aadf1_4a40e01556f146d48f258cf7e207192f~mv2.png.jpeg', alt: 'Sharp Finish', label: 'Finish' },
  { id: 15, type: 'photo', src: '/png/4aadf1_937be02f2278404f91ef1613e3c4a3ef~mv2.png', alt: 'Sharp Lineup', label: 'Sharp' },
  { id: 16, type: 'photo', src: '/png/4aadf1_96feed147f2e446e8e7e0ed948e221a6~mv2.png', alt: 'Classic Cut', label: 'Classic' },
  { id: 17, type: 'photo', src: '/png/4aadf1_97b2c94a5bb4441fbaccd2ba3652ebd5~mv2.png', alt: 'Premium Texture', label: 'Texture' },
];

const allVideos = [
  {
    id: 101,
    type: 'video',
    src: 'https://cdn.pixabay.com/vimeo/321855909/barber-22442.mp4?width=1280&hash=8c3d0b2e8a1a9a8f6a9e8a1a9a8f6a9e8a1a9a8f',
    poster: '/jpeg/salon-full-view.jpeg',
    alt: 'DreyCutz Signature Experience',
    label: 'Cinematic'
  },
  {
    id: 102,
    type: 'video',
    src: 'https://cdn.pixabay.com/vimeo/457445353/barber-49666.mp4?width=1280&hash=8c3d0b2e8a1a9a8f6a9e8a1a9a8f6a9e8a1a9a8f',
    poster: '/jpeg/drey-cutting-1.jpeg',
    alt: 'Mastery & Precision',
    label: 'Session'
  },
];

const Gallery = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const items = activeTab === 'photos' ? allPhotos : allVideos;

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-16">
        
        {/* Header & Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-black text-[#1A1A1A] tracking-tighter leading-[0.85] uppercase mb-10">
              {activeTab === 'photos' ? t('gallery.work') : t('gallery.motion')}
            </h2>
            
            {/* Premium Filter Switcher */}
            <div className="inline-flex p-1.5 bg-gray-100/50 backdrop-blur-sm rounded-2xl border border-gray-100">
               <FilterButton 
                 active={activeTab === 'photos'} 
                 onClick={() => setActiveTab('photos')}
                 label={t('gallery.pictures')}
               />
               <FilterButton 
                 active={activeTab === 'videos'} 
                 onClick={() => setActiveTab('videos')}
                 label={t('gallery.videos')}
               />
            </div>
          </div>
          
          <div className="hidden lg:block text-right max-w-xs">
             <p className="text-sm font-semibold text-gray-400 leading-relaxed italic">
               {activeTab === 'photos' 
                 ? t('gallery.photos_desc') 
                 : t('gallery.videos_desc')}
             </p>
          </div>
        </div>

        {/* Dynamic Media Display (Lookbook Style) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-12">
          {items.map((item, i) => (
            <div key={item.id} className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[45vw] h-[65vh] snap-center relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
              {item.type === 'photo' ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  sizes="85vw"
                />
              ) : (
                <VideoItem video={item} />
              )}
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-12 left-12 right-12 z-20 pointer-events-none">
                <p className="text-[10px] font-bold tracking-[0.5em] text-blue-400 mb-4 transition-transform duration-700 group-hover:-translate-y-2 uppercase">{item.label}</p>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter transition-transform duration-700 delay-75 group-hover:-translate-y-2">{item.alt}</h3>
              </div>
              
              {/* Branding Stamp */}
              <div className="absolute top-10 right-10 z-20">
                 <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                    <span className="text-[9px] font-bold text-white uppercase tracking-widest">DREYCUTZ // 0{i + 1}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Branding Area */}
        <div className="mt-20 flex justify-between items-center select-none pointer-events-none opacity-[0.06]">
          <span className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-[#1A1A1A]">DREYCUTZ</span>
          <span className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-[#1A1A1A] hidden md:block">EST. 2024</span>
        </div>

      </div>

      <style jsx>{`
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

function FilterButton({ active, onClick, label }: any) {
  return (
    <button 
      onClick={onClick}
      className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${
        active 
          ? 'bg-white text-blue-600 shadow-[0_4px_20px_rgba(0,0,0,0.08)] scale-105' 
          : 'text-gray-400 hover:text-gray-700'
      }`}
    >
      {label}
    </button>
  );
}

function VideoItem({ video }: { video: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-full cursor-pointer" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
           <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white shadow-2xl transition-transform duration-500 group-hover:scale-110">
              <Play size={32} fill="white" className="ml-2" />
           </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;