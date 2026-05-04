'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

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
  { id: 18, type: 'photo', src: '/jpeg/salon-full-view.jpeg', alt: 'Evening Vibe', label: 'Space' },
  { id: 19, type: 'photo', src: '/jpeg/drey-cutting-1.jpeg', alt: 'Detailing', label: 'Craft' },
  { id: 20, type: 'photo', src: '/jpeg/salon-interior.jpeg', alt: 'Waiting Area', label: 'Vibe' },
];

const allVideos = [
  {
    id: 101,
    type: 'video',
    src: 'https://cdn.pixabay.com/vimeo/321855909/barber-22442.mp4?width=1280',
    poster: '/jpeg/salon-full-view.jpeg',
    alt: 'DreyCutz Signature Experience',
    label: 'Cinematic'
  },
  {
    id: 102,
    type: 'video',
    src: 'https://cdn.pixabay.com/vimeo/457445353/barber-49666.mp4?width=1280',
    poster: '/jpeg/drey-cutting-1.jpeg',
    alt: 'Mastery & Precision',
    label: 'Session'
  },
];

// DYNAMIC MOSAIC PATTERN (Mobile & Desktop)
// Ensures mobile gets a staggered 2-column masonry feel instead of a boring 1-column stack.
const getGridSpan = (index: number) => {
  const spans = [
    'col-span-2 row-span-1 md:col-span-2 md:row-span-1', // 0: Full width
    'col-span-1 row-span-2 md:col-span-1 md:row-span-2', // 1: Tall block
    'col-span-1 row-span-1 md:col-span-1 md:row-span-1', // 2: Small square
    'col-span-1 row-span-1 md:col-span-1 md:row-span-1', // 3: Small square
    'col-span-2 row-span-1 md:col-span-2 md:row-span-1', // 4: Full width separator
    'col-span-1 row-span-1 md:col-span-1 md:row-span-1', // 5: Small square
    'col-span-1 row-span-2 md:col-span-1 md:row-span-2', // 6: Tall block (opposite side)
    'col-span-2 row-span-1 md:col-span-1 md:row-span-1', // 7: Full width on mobile, small on desktop
  ];
  return spans[index % spans.length];
};

const ITEMS_PER_PAGE = 8;

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [currentPage, setCurrentPage] = useState(1);

  const items = activeTab === 'photos' ? allPhotos : allVideos;
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  return (
    <section id="gallery" className="relative py-20 md:py-24 bg-[#FAFAFA] min-h-screen overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">

        {/* Header & Texts */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-6 border-b border-gray-200 pb-8 md:pb-10">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-none mb-6 md:mb-8">
              The {activeTab === 'photos' ? 'Work' : 'Motion'}
            </h2>

            {/* Tab Toggle */}
            <div className="relative inline-flex bg-white shadow-sm p-1.5 rounded-full border border-gray-100">
              <div
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gray-900 rounded-full transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${activeTab === 'videos' ? 'translate-x-[100%]' : 'translate-x-0'}`}
              />
              <button
                onClick={() => setActiveTab('photos')}
                className={`relative z-10 w-24 md:w-28 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${activeTab === 'photos' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Pictures
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`relative z-10 w-24 md:w-28 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${activeTab === 'videos' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Videos
              </button>
            </div>
          </div>

          {/* Right-side Description */}
          <div className="text-left md:text-right max-w-xs mt-2 md:mt-0">
            <p className="text-xs md:text-sm font-semibold text-gray-500 leading-relaxed italic">
              {activeTab === 'photos'
                ? "A curated collection of our finest cuts, atmosphere, and the craft behind every visit."
                : "Cinematic glimpses into the precision and energy of our studio sessions."}
            </p>
          </div>
        </div>

        {/* 
          DENSE MOSAIC GRID 
          Mobile: 2 columns, 160px base row height
          Desktop: 3-4 columns, 200px base row height
        */}
        <div
          key={`${activeTab}-${currentPage}`}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] grid-flow-dense gap-3 md:gap-4 animate-fade-in"
        >
          {currentItems.map((item, i) => (
            <div
              key={item.id}
              className={`relative rounded-2xl md:rounded-[1.25rem] overflow-hidden group bg-gray-200 border border-gray-200/50 ${activeTab === 'photos' ? getGridSpan(i) : 'col-span-2 row-span-1 md:col-span-2'
                }`}
            >
              {item.type === 'photo' ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <VideoItem video={item} />
              )}

              {/* 
                Overlay Texts 
                - Always visible on Mobile (opacity-100) 
                - Fade in on Desktop (lg:opacity-0 lg:group-hover:opacity-100)
              */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex flex-col justify-end p-4 md:p-6">
                <div className="transform translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase mb-1 md:mb-2">
                    {item.label}
                  </p>
                  <h3 className="text-sm md:text-xl font-black text-white uppercase tracking-tight leading-tight">
                    {item.alt}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-full border border-gray-200 text-gray-500 hover:text-black hover:border-black hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>

            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-gray-400">
              <span className="text-black">{String(currentPage).padStart(2, '0')}</span>
              <span className="opacity-50">/</span>
              <span>{String(totalPages).padStart(2, '0')}</span>
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full border border-gray-200 text-gray-500 hover:text-black hover:border-black hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        )}

        {/* Branding Watermark */}
        <div className="mt-16 md:mt-20 flex justify-center md:justify-between items-center select-none pointer-events-none opacity-[0.04]">
          <span className="text-4xl md:text-7xl font-black tracking-tighter uppercase text-[#1A1A1A]">DREYCUTZ</span>
          <span className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-[#1A1A1A] hidden md:block">EST. 2024</span>
        </div>

      </div>

    </section>
  );
};

// Video Item Component
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
    <div className="relative w-full h-full cursor-pointer group/video" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover/video:scale-105"
      />

      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 z-20 ${isPlaying ? 'opacity-0 lg:group-hover/video:opacity-100 bg-black/10' : 'opacity-100 bg-black/30'}`}>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110">
          {isPlaying ? (
            <Pause size={16} fill="currentColor" />
          ) : (
            <Play size={16} fill="currentColor" className="ml-0.5" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;