import React from 'react';
import { CheckCircle2, FileText, BookOpen, Utensils, ShieldCheck, Building2 } from 'lucide-react';

export default function AboutSection({ profile }) {
  return (
    <section id="about" className="py-12 sm:py-20 bg-[#f9f6f0] border-y border-[#ede7de] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Photo Montage */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-2 sm:border-4 border-white shadow-xl">
              <img 
                src="./rajvada-entrance.webp" 
                alt="Yes Rajvada Front Entrance" 
                className="w-full h-[260px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md">
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#e05318] font-bold">GADHINGLAJ, KOLHAPUR</p>
                <p className="text-xs sm:text-sm font-bold text-[#520122]">हॉस्पिटॅलिटी आणि अस्सल कोल्हापुरी चवीचे मानाचे स्थान</p>
              </div>
            </div>

            {/* Overlapping Heritage Seal Badge (Organic, Non-AI) */}
            <div className="hidden sm:flex absolute -bottom-5 -right-3 bg-white/95 backdrop-blur-md p-4 rounded-2xl border-2 border-amber-300/40 shadow-xl max-w-[220px] items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#520122] to-[#730634] text-amber-300 flex items-center justify-center font-royal font-bold text-lg shrink-0 shadow-sm">
                २५+
              </div>
              <div>
                <p className="text-xs font-bold text-[#520122]">वर्षे परंपरा</p>
                <p className="text-[11px] text-[#64748b] leading-tight">अस्सल गावरान चव व आपुलकीचे आदरातिथ्य</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8dfd5] text-[#520122] text-xs font-bold tracking-wider mb-3 sm:mb-4 shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#e05318]" />
              <span>आमचा वारसा • HERITAGE &amp; TASTE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-royal text-[#520122] mb-4 sm:mb-6 leading-tight">
              गावाकडची चव, <br />
              <em className="saffron-text-gradient not-italic">मनापासून आणि आपुलकीने!</em>
            </h2>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed mb-6 font-normal">
              {profile?.aboutText || "Yes Rajvada Hotel, Gadhinglaj – अस्सल महाराष्ट्रीयन चव, कौटुंबिक जेवणासाठी उत्तम जागा आणि लग्न/समारंभांसाठी भव्य राजेशाही हॉल."}
            </p>

            <div className="space-y-3.5 mb-8">
              {/* Feature 1: Kolhapuri Non-Veg Thali with FSSAI-style Non-Veg marker */}
              <div className="flex items-start gap-3.5 p-3.5 bg-white rounded-xl border border-stone-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-4px_rgba(82,1,34,0.14)] hover:-translate-y-1 hover:border-[#520122]/30 transition-all duration-300 cursor-pointer group">
                <div className="w-5 h-5 rounded-md border border-rose-600 flex items-center justify-center shrink-0 mt-0.5 bg-rose-50" title="Non-Vegetarian Authentic">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-700"></div>
                </div>
                <p className="text-sm text-[#1e293b]">
                  <b className="text-[#520122]">अस्सल कोल्हापुरी थाळी:</b> तांबडा रस्सा, पांढरा रस्सा, गरमागरम बाजरीची भाकरी आणि खमंग सुक्का मटण/चिकन.
                </p>
              </div>

              {/* Feature 2: Veg Family Seating with FSSAI-style Veg marker */}
              <div className="flex items-start gap-3.5 p-3.5 bg-white rounded-xl border border-stone-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-4px_rgba(82,1,34,0.14)] hover:-translate-y-1 hover:border-[#520122]/30 transition-all duration-300 cursor-pointer group">
                <div className="w-5 h-5 rounded-md border border-emerald-600 flex items-center justify-center shrink-0 mt-0.5 bg-emerald-50" title="Pure Vegetarian Option">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
                </div>
                <p className="text-sm text-[#1e293b]">
                  <b className="text-[#520122]">स्वच्छ व कौटुंबिक वातावरण:</b> कुटुंबीय, मित्रमंडळी आणि लहान मुलांसाठी सुरक्षित व प्रशस्त डायनिंग व्यवस्था.
                </p>
              </div>

              {/* Feature 3: Banquet Hall with Landmark SVG */}
              <div className="flex items-start gap-3.5 p-3.5 bg-white rounded-xl border border-stone-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-4px_rgba(82,1,34,0.14)] hover:-translate-y-1 hover:border-[#520122]/30 transition-all duration-300 cursor-pointer group">
                <div className="w-5 h-5 rounded-md border border-amber-600 flex items-center justify-center shrink-0 mt-0.5 bg-amber-50">
                  <Building2 className="w-3.5 h-3.5 text-amber-700" />
                </div>
                <p className="text-sm text-[#1e293b]">
                  <b className="text-[#520122]">समारंभांसाठी भव्य हॉल:</b> साखरपुडा, हळद, वाढदिवस आणि इतर शुभकार्यांसाठी प्रशस्त वातानुकूलित जागा.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#menu" 
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#520122] to-[#730634] text-white font-bold text-sm tracking-wide shadow-md hover:brightness-110 transition-all"
              >
                आमचं मेनू एक्सप्लोर करा
              </a>

              <a 
                href="./RajwadaQuatation.pdf" 
                download
                className="px-5 py-3 rounded-xl bg-white border border-[#d5cbbe] text-[#520122] hover:border-[#520122] font-semibold text-sm flex items-center gap-2 hover:bg-stone-50 transition-all shadow-xs"
              >
                <FileText className="w-4 h-4 text-[#e05318]" />
                <span>हॉल कोटेशन पहा (PDF)</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
