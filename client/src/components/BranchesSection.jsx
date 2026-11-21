import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { defaultBranches } from '../data/defaultData.js';

export default function BranchesSection({ profile }) {
  const branches = profile?.branches && profile.branches.length > 0 
    ? profile.branches 
    : defaultBranches;

  const mapUrl = profile?.mapUrl || "https://maps.google.com/?q=Yes+Rajvada+Gadhinglaj";

  return (
    <section id="branches" className="py-12 sm:py-20 bg-[#f9f6f0] border-t border-[#ede7de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8dfd5] text-[#520122] text-xs font-bold tracking-wider mb-2.5 sm:mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#e05318]" />
            <span>हॉटेल पत्ता • OUR LOCATION</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-bold font-royal text-[#520122] mb-2 sm:mb-3">
            आमची शाखा <em className="saffron-text-gradient not-italic">गडहिंग्लज</em>
          </h2>
          <p className="text-xs sm:text-base text-[#64748b]">
            शांत व रम्य परिसर, प्रशस्त पार्किंग आणि कौटुंबिक जेवणासाठी उत्तम ठिकाण.
          </p>
        </div>

        {/* Branch Cards */}
        <div className="max-w-4xl mx-auto">
          {branches.map((b) => (
            <div 
              key={b.id} 
              className="p-5 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-[0_6px_28px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_50px_-10px_rgba(82,1,34,0.18)] hover:-translate-y-1.5 hover:border-[#520122]/40 transition-all duration-300 ease-out flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-[#520122] border border-rose-200 uppercase tracking-wider">
                    मुख्य शाखा (Main Branch)
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-royal text-[#1e293b]">
                  {b.name}
                </h3>

                <div className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#e05318] shrink-0" />
                    <span>{b.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#e05318] shrink-0" />
                    <a href={`tel:${b.phone}`} className="hover:text-[#520122] font-semibold transition-colors">{b.phone}</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#e05318] shrink-0" />
                    <span>{b.timings || "11:00 AM – 11:00 PM (दररोज)"}</span>
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#520122] to-[#730634] text-white font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-md hover:brightness-110 hover:scale-105 transition-all uppercase"
                >
                  <Navigation className="w-4 h-4 text-amber-300" />
                  <span>Google Maps वर दिशा</span>
                </a>

                <a
                  href={`tel:${b.phone}`}
                  className="px-5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-[#1e293b] hover:border-[#520122] font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#520122]" />
                  <span>कॉल करा ({b.phone})</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
