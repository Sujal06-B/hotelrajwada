import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, UtensilsCrossed, Image as ImageIcon, Home } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.jsx';

export default function FloatingWidgets({ profile }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const waNumber = (profile?.whatsapp || '919611761010').replace(/\D/g, '');
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('नमस्कार Yes Rajvada! मला चौकशी करायची आहे.')}`;
  const phoneUrl = `tel:${profile?.phone || '+919611761010'}`;

  return (
    <>
      {/* Floating WhatsApp Action Button (Desktop Only - Mobile uses the sleek Bottom Navigation Bar) */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex fixed bottom-8 right-6 z-40 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all items-center justify-center border-2 border-white group"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 fill-white" />
        <span className="hidden sm:group-hover:inline-block ml-2 text-xs font-bold pr-1 animate-fadeIn">
          WhatsApp वर बोला
        </span>
      </a>

      {/* Go-To-Top Button (Positioned safely above bottom bar on mobile) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 sm:bottom-8 left-4 sm:left-6 z-30 p-2.5 sm:p-3 rounded-full bg-white/95 backdrop-blur-md hover:bg-[#520122] text-[#520122] hover:text-white border border-stone-300 shadow-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Mobile Bottom Navigation Bar (Ultra-clean, uncluttered mobile navigation) */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#ede7de] px-3 py-2 flex items-center justify-around text-[10px] font-semibold text-[#64748b] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
        <a href="#home" className="flex flex-col items-center p-1 hover:text-[#520122] active:scale-95 transition-all">
          <Home className="w-4 h-4 mb-0.5 text-stone-600" />
          <span>Home</span>
        </a>
        <a href="#menu" className="flex flex-col items-center p-1 hover:text-[#520122] active:scale-95 transition-all">
          <UtensilsCrossed className="w-4 h-4 mb-0.5 text-stone-600" />
          <span>Menu</span>
        </a>
        <a href={phoneUrl} className="flex flex-col items-center p-1 text-[#520122] active:scale-95 transition-all">
          <div className="w-7 h-7 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-[#520122] mb-0.5 shadow-2xs">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold">Call</span>
        </a>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-1 text-emerald-600 active:scale-95 transition-all">
          <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-0.5 shadow-2xs">
            <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" />
          </div>
          <span className="font-bold">WhatsApp</span>
        </a>
        <a href="#gallery" className="flex flex-col items-center p-1 hover:text-[#520122] active:scale-95 transition-all">
          <ImageIcon className="w-4 h-4 mb-0.5 text-stone-600" />
          <span>Gallery</span>
        </a>
      </nav>
    </>
  );
}
