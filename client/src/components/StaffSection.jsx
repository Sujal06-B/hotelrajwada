import React from 'react';
import { Users2, ShieldCheck, Award } from 'lucide-react';

const staffMembers = [
  {
    name: 'श्री. तानाजीराव पाटील',
    role: 'Founder & Managing Director',
    marathiRole: 'संस्थापक व व्यवस्थापकीय संचालक',
    exp: '२५+ वर्षे अनुभव',
    bio: 'महाराष्ट्रीयन खाद्यसंस्कृती आणि आपुलकीच्या पाहुणचाराची २५ वर्षांची गौरवशाली परंपरा जपणारे मार्गदर्शक.',
    photo: './staff/staff-1.jpg',
    badge: 'Founder'
  },
  {
    name: 'शेफ बाळकृष्ण शिंदे',
    role: 'Executive Head Chef',
    marathiRole: 'मुख्य आचारी (मास्टर शेफ)',
    exp: '१८+ वर्षे अनुभव',
    bio: 'अस्सल कोल्हापुरी तांबडा-पांढरा रस्सा, गावरान मटण व शाही थाळीचे कुशल पाककला तज्ज्ञ.',
    photo: './staff/staff-2.jpg',
    badge: 'Master Chef'
  },
  {
    name: 'श्री. सचिन सावंत',
    role: 'General Operations Manager',
    marathiRole: 'हॉटेल व्यवस्थापक',
    exp: '१२+ वर्षे अनुभव',
    bio: 'डायनिंग हॉलची स्वच्छता, तत्पर सेवा आणि प्रत्येक पाहुण्याचे उत्तम आदरातिथ्य सुनिश्चित करणारे.',
    photo: './staff/staff-3.jpg',
    badge: 'Hospitality Lead'
  },
  {
    name: 'श्रीमती स्नेहल सावंत',
    role: 'Banquet & Events Coordinator',
    marathiRole: 'मंगल कार्यालय व इव्हेंट प्रमुख',
    exp: '१०+ वर्षे अनुभव',
    bio: 'लग्नसमारंभ, साखरपुडा व कौटुंबिक उत्सवांचे परिपूर्ण नियोजन आणि शाही व्यवस्थापन सांभाळणाऱ्या.',
    photo: './staff/staff-4.jpg',
    badge: 'Events Specialist'
  }
];

export default function StaffSection() {
  return (
    <section id="staff" className="py-12 sm:py-20 bg-[#f9f6f0] border-t border-[#ede7de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8dfd5] text-[#520122] text-xs font-bold tracking-wider mb-2.5 sm:mb-3 shadow-xs">
            <Users2 className="w-3.5 h-3.5 text-[#e05318]" />
            <span>आमचे निष्ठावान सहकारी • OUR TEAM</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-bold font-royal text-[#520122] mb-2 sm:mb-3">
            आमची <em className="saffron-text-gradient not-italic">कुशल टीम (Hospitality Staff)</em>
          </h2>
          <p className="text-xs sm:text-base text-[#64748b]">
            तुमच्या सेवेसाठी आणि अस्सल चव टिकवून ठेवण्यासाठी तत्पर असणारे आमचे निष्ठावान सहकारी.
          </p>
        </div>

        {/* Staff Grid: 2-col on mobile, 4-col on desktop for a compact, clean look */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {staffMembers.map((member, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-8px_rgba(82,1,34,0.20)] hover:-translate-y-1.5 hover:border-[#520122]/40 transition-all duration-300 ease-out flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Portrait Image */}
                <div className="relative aspect-square sm:aspect-4/5 overflow-hidden bg-stone-100">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = './rajvada-entrance.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent group-hover:from-black/75 transition-colors duration-300"></div>
                  
                  {/* Badge */}
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-bold bg-[#520122] text-white shadow-md group-hover:bg-[#e05318] transition-colors">
                    {member.badge}
                  </span>

                  {/* Experience Tag */}
                  <span className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[9px] sm:text-[10px] font-semibold bg-white/95 text-[#1e293b] backdrop-blur-sm shadow">
                    {member.exp}
                  </span>
                </div>

                {/* Info */}
                <div className="p-3 sm:p-5 text-left">
                  <h3 className="font-bold text-sm sm:text-lg text-[#1e293b] group-hover:text-[#520122] transition-colors font-royal leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-bold text-[#e05318] mt-0.5 leading-tight">
                    {member.marathiRole}
                  </p>
                  <p className="hidden sm:block text-[11px] text-[#64748b] font-medium mb-2">
                    {member.role}
                  </p>

                  <p className="hidden sm:block text-xs text-[#475569] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="px-3 pb-3 sm:px-5 sm:pb-5 pt-0">
                <div className="pt-2 sm:pt-3 border-t border-stone-100 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-[#520122]">
                  <span className="flex items-center gap-1 sm:gap-1.5 text-emerald-700">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                    <span>अधिकृत</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    प्रमाणित
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
