import React from 'react';
import { MapPin, Phone, Clock, Navigation, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import InstagramIcon from './InstagramIcon.jsx';

export default function ContactSection({ profile }) {
  const waNumber = (profile?.whatsapp || '919611761010').replace(/\D/g, '');
  const phone = profile?.phone || '+91 96117 61010';
  const address = profile?.address || 'Gijawane, Gadhinglaj, Kolhapur, Maharashtra 416502';
  const timings = profile?.timings || 'सोम-रवि: सकाळी 11:00 ते रात्री 11:00';
  const mapUrl = profile?.mapUrl || 'https://maps.google.com/?q=Yes+Rajvada+Gadhinglaj';
  const instagramUrl = profile?.instagram || 'https://www.instagram.com/hotelyesrajwada1010/';

  const createWaLink = (msg) => {
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#f9f6f0] border-t border-[#ede7de]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8dfd5] text-[#520122] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#e05318]" />
            ROYAL CONCIERGE &amp; RESERVATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-royal text-[#520122] mb-3">
            चला, भेटूया <em className="saffron-text-gradient not-italic">Yes Rajvada मध्ये!</em>
          </h2>
          <p className="text-sm sm:text-base text-[#64748b]">
            अस्सल कोल्हापुरी आदरातिथ्य अनुभवण्यासाठी थेट संपर्क साधा किंवा खालील पर्यायांद्वारे चौकशी करा.
          </p>
        </div>

        {/* Master Luxury Concierge Suite (Non-AI, Authentic Hospitality Architecture) */}
        <div className="space-y-6">
          
          {/* 1. Primary Location & Direct Hotline Banner */}
          <div className="bg-gradient-to-br from-[#520122] via-[#63042b] to-[#3a0017] text-white rounded-3xl p-7 sm:p-10 shadow-[0_12px_36px_rgba(82,1,34,0.25)] hover:shadow-[0_24px_55px_-10px_rgba(82,1,34,0.38)] transition-all duration-500 border-2 border-amber-300/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 group">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/15">
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                <span>GADHINGLAJ MAIN BRANCH</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-royal font-bold text-white">
                हॉटेल पत्ता व थेट संपर्क केंद्र
              </h3>
              <p className="text-sm text-rose-100 font-normal leading-relaxed">
                {address}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-amber-200/90 pt-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-amber-300" />
                  {timings}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  पार्किंग व वातानुकूलित डायनिंग उपलब्ध
                </span>
              </div>
            </div>

            {/* Direct Phone & Maps Actions */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <a
                href={`tel:${phone}`}
                className="px-6 py-3.5 rounded-xl bg-white text-[#520122] hover:bg-amber-50 font-bold text-sm tracking-wide shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#e05318]" />
                <span>कॉल करा: {phone}</span>
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-xs tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-102"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Google Maps वर दिशा (Directions)</span>
              </a>
            </div>
          </div>

          {/* 2. Side-by-Side Channels: WhatsApp Concierge + Instagram Feed */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Channel: WhatsApp Concierge */}
            <div className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_24px_50px_-8px_rgba(16,185,129,0.22)] hover:-translate-y-2 hover:border-emerald-500/40 transition-all duration-300 ease-out flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      <WhatsAppIcon className="w-6 h-6 fill-emerald-600 group-hover:fill-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#1e293b] group-hover:text-emerald-700 transition-colors">WhatsApp हेल्पलाईन</h4>
                      <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        ऑनलाइन • त्वरित प्रतिसाद
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                  टेबल आरक्षण, स्पेशल थाळीची विचारणा किंवा लग्न सोहळा हॉल बुकिंगसाठी आमच्या व्यवस्थापनाशी थेट WhatsApp वर चर्चा करा.
                </p>
              </div>

              <a
                href={createWaLink('नमस्कार Yes Rajvada! मला चौकशी करायची आहे.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all uppercase hover:scale-[1.02] active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp वर थेट मेसेज करा</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right Channel: Official Instagram Channel */}
            <div className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_24px_50px_-8px_rgba(225,48,108,0.22)] hover:-translate-y-2 hover:border-[#e1306c]/40 transition-all duration-300 ease-out flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-200 flex items-center justify-center text-[#e1306c] shadow-xs group-hover:scale-110 group-hover:bg-[#e1306c] group-hover:text-white transition-all duration-300">
                      <InstagramIcon className="w-6 h-6" fill="#e1306c" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#1e293b] group-hover:text-[#e1306c] transition-colors">अधिकृत Instagram</h4>
                      <p className="text-xs text-[#e1306c] font-semibold">
                        @hotelyesrajwada1010
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-pink-50 text-[#e1306c] border border-pink-200 group-hover:bg-[#e1306c] group-hover:text-white transition-colors">
                    Daily Stories &amp; Reels
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                  हॉटेलमधील ताजे खाद्यपदार्थ, खमंग रस्सा तयार करण्याचे रील्स आणि लग्न समारंभांचे सुंदर व्हिडिओ पाहण्यासाठी आम्हाला फॉलो करा.
                </p>
              </div>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all uppercase hover:opacity-95 hover:scale-[1.02] active:scale-95"
              >
                <InstagramIcon className="w-4 h-4" fill="white" />
                <span>Instagram पेज उघडा (@hotelyesrajwada1010)</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* 3. Quick Concierge Topic Chips */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs text-center">
            <p className="text-xs font-bold text-[#520122] uppercase tracking-wider mb-3.5">
              झटपट WhatsApp चौकशीचे पर्याय (Quick Reservation Options):
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={createWaLink('नमस्कार Yes Rajvada! मला टेबल उपलब्धतेबद्दल चौकशी करायची आहे.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#fdfbf7] hover:bg-emerald-50 text-xs font-semibold text-stone-700 hover:text-emerald-700 border border-stone-200 hover:border-emerald-300 transition-all flex items-center gap-2 shadow-2xs"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" />
                <span>🍽️ टेबल उपलब्धता व बुकिंग</span>
              </a>

              <a
                href={createWaLink('नमस्कार Yes Rajvada! मला मंगल कार्यालय (Celebration Hall) बुकिंगबद्दल माहिती हवी आहे.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#fdfbf7] hover:bg-emerald-50 text-xs font-semibold text-stone-700 hover:text-emerald-700 border border-stone-200 hover:border-emerald-300 transition-all flex items-center gap-2 shadow-2xs"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" />
                <span>🏛️ मंगल कार्यालय (Hall) चौकशी</span>
              </a>

              <a
                href={createWaLink('नमस्कार Yes Rajvada! मला स्पेशल थाळी आणि आजच्या मेनूबद्दल माहिती हवी आहे.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#fdfbf7] hover:bg-emerald-50 text-xs font-semibold text-stone-700 hover:text-emerald-700 border border-stone-200 hover:border-emerald-300 transition-all flex items-center gap-2 shadow-2xs"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" />
                <span>🍱 स्पेशल थाळी मेनू व पार्सल</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
