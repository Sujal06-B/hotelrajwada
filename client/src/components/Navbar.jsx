import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import InstagramIcon from './InstagramIcon.jsx';

export default function Navbar({ profile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hotelOpen, setHotelOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    // Calculate open/closed status
    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();
    const openMins = (profile?.openingHour ?? 11) * 60;
    const closeMins = (profile?.closingHour ?? 23) * 60;
    setHotelOpen(currentMins >= openMins && currentMins < closeMins);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [profile]);

  const waNumber = (profile?.whatsapp || '919611761010').replace(/\D/g, '');
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('नमस्कार Yes Rajvada! मला चौकशी करायची आहे.')}`;
  const instagramUrl = profile?.instagram || 'https://www.instagram.com/hotelyesrajwada1010/';

  return (
    <>
      {/* Top Banner (Streamlined & Clean on Mobile) */}
      <div className="bg-[#f9f5ef] border-b border-[#e8e0d5] py-1.5 sm:py-2 px-3 sm:px-4 text-xs font-medium text-[#4a5568]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Tagline visible on tablet/desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-[#e05318] font-bold">✦</span>
            <span className="font-medium text-[#2d3748]">अस्सल चव • आपुलकीची सेवा • गडहिंग्लज (Gadhinglaj)</span>
          </div>

          {/* Status & Hotline */}
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold ${
              hotelOpen ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${hotelOpen ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`}></span>
              {hotelOpen ? 'उघडे आहे (11 AM - 11 PM)' : 'सध्या बंद आहे'}
            </span>

            {/* Instagram Link (Desktop only in topbar) */}
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden sm:flex items-center gap-1 text-[#e1306c] font-semibold hover:opacity-80 transition-opacity"
              title="Follow Yes Rajvada on Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" fill="#e1306c" />
              <span>Instagram</span>
            </a>

            <a 
              href={`tel:${profile?.phone || '+919611761010'}`} 
              className="flex items-center gap-1 text-[#520122] font-bold text-xs hover:text-[#e05318] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#e05318]" />
              <span>{profile?.phone || '+91 96117 61010'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e8e0d5] py-2.5' 
          : 'bg-white py-3.5 border-b border-[#f0ebe1]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src="./logo.jpg" 
              alt="Yes Rajvada Logo" 
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#520122] shadow-sm group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <span className="font-royal text-xl sm:text-2xl font-bold tracking-tight text-[#520122] group-hover:text-[#e05318] transition-colors">
                YES RAJVADA
              </span>
              <span className="text-[10px] tracking-widest text-[#e05318] uppercase font-bold">
                HOTEL &amp; FAMILY RESTAURANT
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[#334155]">
            <a href="#home" className="hover:text-[#520122] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#520122] transition-colors">About</a>
            <a href="#menu" className="hover:text-[#520122] transition-colors">Menu</a>
            <a href="#hall" className="hover:text-[#520122] transition-colors">Hall</a>
            <a href="#gallery" className="hover:text-[#520122] transition-colors">Gallery</a>
            <a href="#staff" className="hover:text-[#520122] transition-colors">Our Team</a>
            <a href="#branches" className="hover:text-[#520122] transition-colors">Branch</a>
            <a href="#reviews" className="hover:text-[#520122] transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-[#520122] transition-colors">Contact</a>

            <div className="h-4 w-px bg-stone-200"></div>

            {/* Direct WhatsApp Action */}
            <a 
              href={waUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md shadow-emerald-600/20 hover:scale-105 transition-all text-xs tracking-wide"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp चौकशी</span>
            </a>
          </nav>

          {/* Mobile Menu Button (Clean & uncluttered) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-[#520122] hover:bg-stone-100 border border-stone-200/80 focus:outline-none transition-colors"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-[#e8e0d5] px-5 py-4 space-y-2.5 shadow-lg">
            <a 
              href="#home" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-[#334155] hover:text-[#520122] border-b border-stone-100"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-[#334155] hover:text-[#520122] border-b border-stone-100"
            >
              About Us
            </a>
            <a 
              href="#menu" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-[#334155] hover:text-[#520122] border-b border-stone-100"
            >
              Our Menu Card
            </a>
            <a 
              href="#hall" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-[#334155] hover:text-[#520122] border-b border-stone-100"
            >
              Celebration Hall
            </a>
            <a 
              href="#gallery" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-[#334155] hover:text-[#520122] border-b border-stone-100"
            >
              Photo Gallery
            </a>
            <a 
              href="#staff" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-[#334155] hover:text-[#520122] border-b border-stone-100"
            >
              Our Team (Staff)
            </a>
            <a 
              href="#branches" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-[#334155] hover:text-[#520122] border-b border-stone-100"
            >
              Our Branch
            </a>
            <a 
              href="#reviews" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-[#334155] hover:text-[#520122] border-b border-stone-100"
            >
              Google Reviews &amp; Photos
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-[#334155] hover:text-[#520122] border-b border-stone-100"
            >
              Contact Us
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <a 
                href={instagramUrl} 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#f09433] to-[#bc1888] text-white font-bold text-xs shadow-sm"
              >
                <InstagramIcon className="w-4 h-4" fill="white" />
                <span>Instagram वर फॉलो करा</span>
              </a>

              <a 
                href={waUrl} 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp वर संपर्क साधा</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
