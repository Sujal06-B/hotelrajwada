import React from 'react';
import { Sparkles, Calendar, Users, HeartHandshake, FileText } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.jsx';

export default function HallSection({ profile }) {
  const waNumber = (profile?.whatsapp || '919611761010').replace(/\D/g, '');
  const waHallUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('नमस्कार Yes Rajvada! मला मंगल कार्यालय (Celebration Hall) बुकिंगबद्दल चौकशी करायची आहे.')}`;

  return (
    <section id="hall" className="py-20 bg-[#f9f6f0] border-t border-[#ede7de] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hall Visuals */}
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/hero2.webp" 
                alt="Yes Rajvada Celebration Hall" 
                className="w-full h-[360px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute -bottom-5 left-5 right-5 sm:left-auto sm:right-5 sm:max-w-xs p-4 rounded-xl bg-white border border-stone-200 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-[#520122] shrink-0 font-bold text-sm">
                  250+
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1e293b]">हॉल क्षमता (Seating Capacity)</p>
                  <p className="text-[11px] text-[#64748b]">लहान व मोठ्या समारंभांसाठी सुसज्ज</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hall Description */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8dfd5] text-[#520122] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#e05318]" />
              CELEBRATION &amp; EVENTS
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-royal text-[#520122] mb-6 leading-tight">
              तुमचा खास दिवस, <br />
              <em className="saffron-text-gradient not-italic">आमची खास जागा.</em>
            </h2>

            <p className="text-base text-[#334155] leading-relaxed mb-6 font-normal">
              लग्नसमारंभ, साखरपुडा, हळद, वाढदिवस आणि इतर कौटुंबिक किंवा कार्यालयीन कार्यक्रमांसाठी Yes Rajvada चे भव्य वातानुकूलित मंगल कार्यालय व केटरिंग सेवा सज्ज आहे.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200/90 shadow-xs">
                <HeartHandshake className="w-5 h-5 text-[#520122] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#1e293b]">साखरपुडा व लग्न सोहळा</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200/90 shadow-xs">
                <Users className="w-5 h-5 text-[#520122] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#1e293b]">कौटुंबिक स्नेहसंमेलन</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200/90 shadow-xs">
                <Calendar className="w-5 h-5 text-[#520122] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#1e293b]">वाढदिवस व पार्टी उत्सव</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200/90 shadow-xs">
                <Sparkles className="w-5 h-5 text-[#e05318] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#1e293b]">शाही केटरिंग व जेवण</span>
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
                href="/RajwadaQuatation.pdf" 
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
