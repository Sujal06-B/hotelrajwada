import React, { useState, useEffect } from 'react';
import { ChevronRight, UtensilsCrossed, Star, Users, Award, ChevronLeft, Building2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const heroSlides = [
  {
    image: './rajvada-entrance.webp',
    eyebrow: 'अस्सल कोल्हापुरी व महाराष्ट्रीयन मेजवानी',
    title: 'राजेशाही चव,',
    titleAccent: 'आपुलकीची सेवा.',
    subtitle: 'गडहिंग्लजमधील अग्रगण्य कौटुंबिक रेस्टॉरंट आणि भव्य मंगल कार्यालय.',
  },
  {
    image: './hero2.webp',
    eyebrow: 'भव्य व वातानुकूलित मंगल कार्यालय',
    title: 'तुमचा खास सोहळा,',
    titleAccent: 'आमची खास जागा.',
    subtitle: 'लग्न, साखरपुडा, वाढदिवस व कौटुंबिक समारंभांसाठी सर्वोत्तम हॉल.',
  },
  {
    image: './hero3.jpg',
    eyebrow: 'शुद्ध शाकाहारी व खमंग मांसाहारी',
    title: 'खमंग चवींचा,',
    titleAccent: 'शाही नजराणा.',
    subtitle: 'अस्सल तांबडा-पांढरा रस्सा, मटण थाळी व स्पेशल व्हेज थाळी.',
  },
  {
    image: './hero4.jpg',
    eyebrow: 'उत्तम बैठक व्यवस्था व रम्य वातावरण',
    title: 'कुटुंबासोबत,',
    titleAccent: 'आनंदाचे क्षण.',
    subtitle: 'शांत आणि प्रसन्न वातावरणात आपल्या प्रियजनांसोबत जेवणाचा आनंद घ्या.',
  }
];

export default function Hero({ profile }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const waNumber = (profile?.whatsapp || '919611761010').replace(/\D/g, '');
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('नमस्कार Yes Rajvada! मला चौकशी करायची आहे.')}`;

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Slides: 100% Crystal Clear & Visible */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt="Hotel Yes Rajvada"
            className="w-full h-full object-cover object-center"
          />
          {/* Gentle cinematic vignette to guarantee clear contrast without obstructing the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/25"></div>
        </div>
      ))}

      {/* Manual Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#520122] items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer backdrop-blur-xs"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#520122] items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer backdrop-blur-xs"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Hero Content: Scaled & Optimized for Mobile & Desktop */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-8 sm:py-14">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/95 text-[#520122] text-[11px] sm:text-sm font-bold mb-3 sm:mb-4 shadow-lg border border-amber-300/40">
          <span className="text-[#e05318] font-bold text-xs sm:text-sm">✦</span>
          <span>{heroSlides[current].eyebrow}</span>
        </div>

        {/* Heading - Crisp White with Deep Text Shadows for 100% Clear Legibility */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-royal tracking-tight text-white mb-2 sm:mb-4 leading-tight sm:leading-[1.15] drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]">
          {heroSlides[current].title} <br className="hidden sm:inline" />
          <em className="text-amber-300 not-italic drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {heroSlides[current].titleAccent}
          </em>
        </h1>

        {/* Subtitle with Shadow */}
        <p className="max-w-xl mx-auto text-xs sm:text-lg text-stone-100 font-medium mb-5 sm:mb-8 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          {heroSlides[current].subtitle}
        </p>

        {/* Action Buttons: Side-by-side on mobile to eliminate vertical clutter */}
        <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 mb-5 sm:mb-8 w-full max-w-sm mx-auto">
          <a
            href="#menu"
            className="flex-1 px-3.5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#520122] to-[#730634] text-white font-bold text-xs sm:text-sm tracking-wide shadow-xl border border-amber-300/40 hover:brightness-110 hover:scale-105 transition-all flex items-center justify-center gap-1.5 group"
          >
            <UtensilsCrossed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            <span>मेनू पहा</span>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-3.5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-1.5 border border-emerald-400/50"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile: Ultra-sleek single-line glass proof pill */}
        <div className="sm:hidden inline-flex items-center justify-center gap-2.5 py-1.5 px-3.5 rounded-full bg-black/55 backdrop-blur-md border border-amber-300/30 text-[11px] text-stone-200 shadow-lg">
          <span className="flex items-center gap-1 text-amber-300 font-bold">
            <span>★</span> 4.9 (Google)
          </span>
          <span className="text-white/30">•</span>
          <span>कौटुंबिक AC बैठक</span>
          <span className="text-white/30">•</span>
          <span>२५०+ हॉल क्षमता</span>
        </div>

        {/* Desktop & Tablet: Full 4-Card Grid */}
        <div className="hidden sm:grid sm:grid-cols-4 gap-3 text-left pt-6 border-t border-white/20">
          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-black/45 backdrop-blur-md border border-amber-300/30 text-white shadow-xl hover:border-amber-400/60 transition-all">
            <span className="text-amber-400 font-bold text-lg">★</span>
            <div>
              <p className="text-xs font-bold text-white drop-shadow">4.9 / 5 Rating</p>
              <p className="text-[10px] text-stone-200">Google Verified</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-black/45 backdrop-blur-md border border-amber-300/30 text-white shadow-xl hover:border-amber-400/60 transition-all">
            <Users className="w-5 h-5 text-amber-300 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white drop-shadow">कौटुंबिक बैठक</p>
              <p className="text-[10px] text-stone-200">Family AC Dining</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-black/45 backdrop-blur-md border border-amber-300/30 text-white shadow-xl hover:border-amber-400/60 transition-all">
            <Award className="w-5 h-5 text-amber-300 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white drop-shadow">अस्सल चव</p>
              <p className="text-[10px] text-stone-200">तांबडा-पांढरा रस्सा</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-black/45 backdrop-blur-md border border-amber-300/30 text-white shadow-xl hover:border-amber-400/60 transition-all">
            <Building2 className="w-5 h-5 text-amber-300 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white drop-shadow">मंगल कार्यालय</p>
              <p className="text-[10px] text-stone-200">२५०+ आसन क्षमता</p>
            </div>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="mt-5 sm:mt-8 flex justify-center gap-1.5 sm:gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current ? 'w-6 sm:w-8 bg-white' : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
