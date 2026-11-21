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
      {/* Floating WhatsApp Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 sm:bottom-8 right-5 z-40 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-white group"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 fill-white" />
        <span className="hidden sm:group-hover:inline-block ml-2 text-xs font-bold pr-1 animate-fadeIn">
          WhatsApp वर बोला
        </span>
      </a>

      {/* Go-To-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-8 left-5 z-40 p-3 rounded-full bg-white hover:bg-[#520122] text-[#520122] hover:text-white border border-stone-300 shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Mobile Bottom Navigation Bar (Light Theme) */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-2 py-1.5 flex items-center justify-around text-[10px] font-semibold text-[#475569] shadow-lg">
        <a href="#home" className="flex flex-col items-center p-1.5 hover:text-[#520122]">
          <Home className="w-4 h-4 mb-0.5 text-stone-600" />
          <span>Home</span>
        </a>
        <a href="#menu" className="flex flex-col items-center p-1.5 hover:text-[#520122]">
          <UtensilsCrossed className="w-4 h-4 mb-0.5 text-stone-600" />
          <span>Menu</span>
        </a>
        <a href={phoneUrl} className="flex flex-col items-center p-1.5 text-[#520122]">
          <Phone className="w-4 h-4 mb-0.5 text-[#520122]" />
          <span>Call</span>
        </a>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-1.5 text-emerald-600">
          <WhatsAppIcon className="w-4 h-4 mb-0.5 fill-emerald-600" />
          <span>WhatsApp</span>
        </a>
        <a href="#gallery" className="flex flex-col items-center p-1.5 hover:text-[#520122]">
          <ImageIcon className="w-4 h-4 mb-0.5 text-stone-600" />
          <span>Gallery</span>
        </a>
      </nav>
    </>
  );
}
