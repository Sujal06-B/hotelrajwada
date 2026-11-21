import React from 'react';
import InstagramIcon from './InstagramIcon.jsx';

export default function Footer({ profile }) {
  const currentYear = new Date().getFullYear();
  const instagramUrl = profile?.instagram || "https://www.instagram.com/hotelyesrajwada1010/";

  return (
    <footer className="bg-[#f4efe8] border-t border-[#e2d9cd] pt-16 pb-24 sm:pb-12 text-[#475569]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-stone-200">
          {/* Logo & Motto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <img 
                src="/logo.jpg" 
                alt="Yes Rajvada Logo" 
                className="w-11 h-11 rounded-full object-cover border-2 border-[#520122]"
              />
              <span className="font-royal text-2xl font-bold text-[#520122]">
                YES RAJVADA
              </span>
            </div>
            <p className="text-xs text-[#e05318] font-bold tracking-wider">
              गावाकडची चव, मनापासून! • गडहिंग्लज, कोल्हापूर
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-[#334155]">
            <a href="#home" className="hover:text-[#520122] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#520122] transition-colors">About Us</a>
            <a href="#menu" className="hover:text-[#520122] transition-colors">Our Menu</a>
            <a href="#hall" className="hover:text-[#520122] transition-colors">Celebration Hall</a>
            <a href="#gallery" className="hover:text-[#520122] transition-colors">Gallery</a>
            <a href="#staff" className="hover:text-[#520122] transition-colors">Our Team</a>
            <a href="#branches" className="hover:text-[#520122] transition-colors">Branch</a>
            <a href="#reviews" className="hover:text-[#520122] transition-colors">Google Reviews</a>
            <a href="#contact" className="hover:text-[#520122] transition-colors">Contact</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-[#e1306c] hover:bg-stone-50 font-bold text-xs shadow-xs transition-all"
            >
              <InstagramIcon className="w-4 h-4" fill="#e1306c" />
              <span>@hotelyesrajwada1010</span>
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748b] gap-4 text-center sm:text-left">
          <p>© {currentYear} Yes Rajvada Hotel. All rights reserved.</p>
          <p className="text-[11px] font-medium text-stone-500">
            Royal Maharashtrian Hospitality &amp; Authentic Kolhapuri Flavors
          </p>
        </div>

      </div>
    </footer>
  );
}
