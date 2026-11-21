import React, { useState } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';

const galleryTabs = ['All', 'Hotel', 'Hall', 'Special Thali'];

const fallbackPhotos = [
  { id: "p-1", title: "Hotel Grand Entrance", category: "Hotel", url: "/rajvada-entrance.webp" },
  { id: "p-2", title: "Royal Celebration Hall", category: "Hall", url: "/hero2.webp" },
  { id: "p-3", title: "Family Dining Hall", category: "Hotel", url: "/hero3.jpg" },
  { id: "p-4", title: "Evening Heritage Glow", category: "Hotel", url: "/hero4.jpg" },
  { id: "p-5", title: "Kolhapuri Special Thali", category: "Special Thali", url: "/Menu/menu-2.jpeg" },
  { id: "p-6", title: "Ambience & Seating", category: "Hotel", url: "/rajwadaHotelImages/hotel-1.jpeg" },
  { id: "p-7", title: "Royal Event Stage", category: "Hall", url: "/rajwadaHotelImages/hotel-3.jpeg" },
  { id: "p-8", title: "Buffet & Dining Area", category: "Hall", url: "/rajwadaHotelImages/hotel-5.jpeg" }
];

export default function GallerySection({ photos, onSelectPhoto }) {
  const [activeTab, setActiveTab] = useState('All');

  const photoList = (photos && photos.length > 0) ? photos : fallbackPhotos;

  const filteredPhotos = activeTab === 'All'
    ? photoList
    : photoList.filter(p => p.category === activeTab);

  return (
    <section id="gallery" className="py-20 bg-[#fdfbf7] border-t border-[#ede7de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8dfd5] text-[#520122] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#e05318]" />
            PHOTO GALLERY
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-royal text-[#520122] mb-3">
            आठवणींची <em className="saffron-text-gradient not-italic">गॅलरी</em>
          </h2>
          <p className="text-sm sm:text-base text-[#64748b]">
            हॉटेल परिसर, खमंग जेवण आणि अविस्मरणीय सोहळे.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {galleryTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#520122] text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:text-[#520122] border border-stone-200'
              }`}
            >
              {tab === 'All' ? 'सर्व फोटो' : tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id || idx}
              onClick={() => onSelectPhoto && onSelectPhoto(photo)}
              className="relative aspect-4/3 rounded-2xl overflow-hidden border-2 border-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-6px_rgba(82,1,34,0.22)] hover:-translate-y-2 hover:border-[#e05318]/50 group cursor-pointer bg-stone-100 transition-all duration-300 ease-out"
            >
              <img
                src={photo.url}
                alt={photo.title || 'Hotel Gallery'}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = '/rajvada-entrance.webp';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5">
                <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">
                  {photo.category}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white drop-shadow-sm">
                  {photo.title}
                </p>
              </div>
              <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/90 text-[#520122] opacity-0 group-hover:opacity-100 transition-opacity shadow-md group-hover:scale-105">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
