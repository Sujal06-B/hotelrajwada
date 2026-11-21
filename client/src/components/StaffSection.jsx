import React from 'react';
import { Sparkles, ShieldCheck, Award } from 'lucide-react';

const staffMembers = [
  {
    name: 'श्री. तानाजीराव पाटील',
    role: 'Founder & Managing Director',
    marathiRole: 'संस्थापक व व्यवस्थापकीय संचालक',
    exp: '२५+ वर्षे अनुभव',
    bio: 'महाराष्ट्रीयन खाद्यसंस्कृती आणि आपुलकीच्या पाहुणचाराची २५ वर्षांची गौरवशाली परंपरा जपणारे मार्गदर्शक.',
    photo: '/staff/staff-1.jpg',
    badge: 'Founder'
  },
  {
    name: 'शेफ बाळकृष्ण शिंदे',
    role: 'Executive Head Chef',
    marathiRole: 'मुख्य आचारी (मास्टर शेफ)',
    exp: '१८+ वर्षे अनुभव',
    bio: 'अस्सल कोल्हापुरी तांबडा-पांढरा रस्सा, गावरान मटण व शाही थाळीचे कुशल पाककला तज्ज्ञ.',
    photo: '/staff/staff-2.jpg',
    badge: 'Master Chef'
  },
  {
    name: 'श्री. सचिन सावंत',
    role: 'General Operations Manager',
    marathiRole: 'हॉटेल व्यवस्थापक',
    exp: '१२+ वर्षे अनुभव',
    bio: 'डायनिंग हॉलची स्वच्छता, तत्पर सेवा आणि प्रत्येक पाहुण्याचे उत्तम आदरातिथ्य सुनिश्चित करणारे.',
    photo: '/staff/staff-3.jpg',
    badge: 'Hospitality Lead'
  },
  {
    name: 'श्रीमती स्नेहल सावंत',
    role: 'Banquet & Events Coordinator',
    marathiRole: 'मंगल कार्यालय व इव्हेंट प्रमुख',
    exp: '१०+ वर्षे अनुभव',
    bio: 'लग्नसमारंभ, साखरपुडा व कौटुंबिक उत्सवांचे परिपूर्ण नियोजन आणि शाही व्यवस्थापन सांभाळणाऱ्या.',
    photo: '/staff/staff-4.jpg',
    badge: 'Events Specialist'
  }
];

export default function StaffSection() {
  return (
    <section id="staff" className="py-20 bg-[#f9f6f0] border-t border-[#ede7de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8dfd5] text-[#520122] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#e05318]" />
            DEDICATED HOSPITALITY TEAM
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-royal text-[#520122] mb-3">
            आमची <em className="saffron-text-gradient not-italic">कुशल टीम (Our Team)</em>
          </h2>
          <p className="text-sm sm:text-base text-[#64748b]">
            तुमच्या सेवेसाठी आणि अस्सल चव टिकवून ठेवण्यासाठी तत्पर असणारे आमचे निष्ठावान सहकारी.
          </p>
        </div>

        {/* Staff Grid with Professional Real Portrait Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {staffMembers.map((member, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-md hover:shadow-2xl hover:border-[#520122]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Real Demo Portrait Image */}
                <div className="relative aspect-4/5 overflow-hidden bg-stone-100">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/rajvada-entrance.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#520122] text-white shadow-md">
                    {member.badge}
                  </span>

                  {/* Experience Tag */}
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-white/90 text-[#1e293b] backdrop-blur-sm shadow">
                    {member.exp}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 text-left">
                  <h3 className="font-bold text-lg text-[#1e293b] group-hover:text-[#520122] transition-colors font-royal">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#e05318] mt-0.5">
                    {member.marathiRole}
                  </p>
                  <p className="text-[11px] text-[#64748b] font-medium mb-3">
                    {member.role}
                  </p>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-[#520122]">
                  <span className="flex items-center gap-1 text-emerald-700">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Staff
                  </span>
                  <span className="text-amber-500 font-bold">★★★★★</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
