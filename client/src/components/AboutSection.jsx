import React from 'react';
import { CheckCircle2, FileText, Sparkles } from 'lucide-react';

export default function AboutSection({ profile }) {
  return (
    <section id="about" className="py-20 bg-[#f9f6f0] border-y border-[#ede7de] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Photo Montage */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/rajvada-entrance.webp" 
                alt="Yes Rajvada Front Entrance" 
                className="w-full h-[380px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md">
                <p className="text-xs uppercase tracking-widest text-[#e05318] font-bold">GADHINGLAJ, KOLHAPUR</p>
                <p className="text-sm font-bold text-[#520122]">हॉस्पिटॅलिटी आणि अस्सल कोल्हापुरी चवीचे मानाचे स्थान</p>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 bg-gradient-to-br from-[#520122] to-[#730634] p-5 rounded-2xl border-2 border-white shadow-2xl max-w-[210px] text-white">
              <span className="text-3xl font-royal font-bold text-white">100%</span>
              <p className="text-xs font-medium text-rose-100 mt-1">अस्सल पारंपरिक पद्धतीची गावरान मेजवानी</p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8dfd5] text-[#520122] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#e05318]" />
              ABOUT YES RAJVADA
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-royal text-[#520122] mb-6 leading-tight">
              गावाकडची चव, <br />
              <em className="saffron-text-gradient not-italic">मनापासून आणि आपुलकीने!</em>
            </h2>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed mb-6 font-normal">
              {profile?.aboutText || "Yes Rajvada Hotel, Gadhinglaj – अस्सल महाराष्ट्रीयन चव, कौटुंबिक जेवणासाठी उत्तम जागा आणि लग्न/समारंभांसाठी भव्य राजेशाही हॉल."}
            </p>

            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#520122] shrink-0 mt-0.5" />
                <p className="text-sm text-[#1e293b]">
                  <b className="text-[#520122]">अस्सल कोल्हापुरी थाळी:</b> तांबडा रस्सा, पांढरा रस्सा, गरमागरम बाजरीची भाकरी आणि खमंग सुक्का मटण/चिकन.
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#520122] shrink-0 mt-0.5" />
                <p className="text-sm text-[#1e293b]">
                  <b className="text-[#520122]">स्वच्छ व कौटुंबिक वातावरण:</b> कुटुंबीय, मित्रमंडळी आणि लहान मुलांसाठी सुरक्षित व प्रशस्त डायनिंग व्यवस्था.
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#520122] shrink-0 mt-0.5" />
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
                href="/RajwadaQuatation.pdf" 
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
