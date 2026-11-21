import React from 'react';
import { Landmark, Calendar, Users, HeartHandshake, FileText, UtensilsCrossed } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.jsx';

export default function HallSection({ profile }) {
  const waNumber = (profile?.whatsapp || '919611761010').replace(/\D/g, '');
  const waHallUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('नमस्कार Yes Rajvada! मला मंगल कार्यालय (Celebration Hall) बुकिंगबद्दल चौकशी करायची आहे.')}`;

  return (
    <section id="hall" className="py-12 sm:py-20 bg-[#f9f6f0] border-t border-[#ede7de] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Hall Visuals */}
          <div className="order-2 lg:order-1 relative group">
            <div className="rounded-2xl overflow-hidden border-2 sm:border-4 border-white shadow-[0_12px_36px_rgba(0,0,0,0.12)] group-hover:shadow-[0_24px_50px_-8px_rgba(82,1,34,0.22)] transition-all duration-500">
              <img 
                src="./hero2.webp" 
                alt="Yes Rajvada Celebration Hall" 
                className="w-full h-[260px] sm:h-[420px] object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              />
            </div>
            
            <div className="absolute -bottom-4 left-3 right-3 sm:-bottom-5 sm:left-auto sm:right-5 sm:max-w-xs p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_36px_rgba(82,1,34,0.18)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-[#520122] shrink-0 font-bold text-xs sm:text-sm shadow-xs">
                  250+
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1e293b]">हॉल क्षमता (Seating Capacity)</p>
                  <p className="text-[10px] sm:text-[11px] text-[#64748b]">लहान व मोठ्या समारंभांसाठी सुसज्ज</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hall Description */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8dfd5] text-[#520122] text-xs font-bold tracking-wider mb-3 sm:mb-4 shadow-xs">
              <Landmark className="w-3.5 h-3.5 text-[#e05318]" />
              <span>मंगल कार्यालय • CELEBRATION &amp; EVENTS</span>
            </div>

            <h2 className="text-2xl sm:text-5xl font-bold font-royal text-[#520122] mb-3 sm:mb-6 leading-tight">
              तुमचा खास दिवस, <br />
              <em className="saffron-text-gradient not-italic">आमची खास जागा.</em>
            </h2>

            <p className="text-xs sm:text-base text-[#334155] leading-relaxed mb-4 sm:mb-6 font-normal">
              लग्नसमारंभ, साखरपुडा, हळद, वाढदिवस आणि इतर कौटुंबिक किंवा कार्यालयीन कार्यक्रमांसाठी Yes Rajvada चे भव्य वातानुकूलित मंगल कार्यालय व केटरिंग सेवा सज्ज आहे.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-4px_rgba(82,1,34,0.15)] hover:border-[#520122]/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="p-2 rounded-lg bg-rose-50 text-[#520122] group-hover:bg-[#520122] group-hover:text-white transition-colors">
                  <HeartHandshake className="w-4 h-4 shrink-0" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#1e293b] group-hover:text-[#520122] transition-colors">साखरपुडा व लग्न सोहळा</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-4px_rgba(82,1,34,0.15)] hover:border-[#520122]/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="p-2 rounded-lg bg-rose-50 text-[#520122] group-hover:bg-[#520122] group-hover:text-white transition-colors">
                  <Users className="w-4 h-4 shrink-0" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#1e293b] group-hover:text-[#520122] transition-colors">कौटुंबिक स्नेहसंमेलन</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-4px_rgba(82,1,34,0.15)] hover:border-[#520122]/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="p-2 rounded-lg bg-rose-50 text-[#520122] group-hover:bg-[#520122] group-hover:text-white transition-colors">
                  <Calendar className="w-4 h-4 shrink-0" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#1e293b] group-hover:text-[#520122] transition-colors">वाढदिवस व पार्टी उत्सव</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-4px_rgba(224,83,24,0.18)] hover:border-[#e05318]/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="p-2 rounded-lg bg-orange-50 text-[#e05318] group-hover:bg-[#e05318] group-hover:text-white transition-colors">
                  <UtensilsCrossed className="w-4 h-4 shrink-0" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#1e293b] group-hover:text-[#e05318] transition-colors">शाही केटरिंग व जेवण</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href={waHallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide shadow-md hover:scale-105 transition-all flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>हॉल चौकशी (WhatsApp)</span>
              </a>

              <a 
                href="./RajwadaQuatation.pdf" 
                download
                className="px-5 py-3.5 rounded-xl bg-white border border-[#d5cbbe] text-[#520122] hover:border-[#520122] font-semibold text-sm flex items-center gap-2 hover:bg-stone-50 transition-all shadow-xs"
              >
                <FileText className="w-4 h-4 text-[#e05318]" />
                <span>हॉल रेट कार्ड (PDF)</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
