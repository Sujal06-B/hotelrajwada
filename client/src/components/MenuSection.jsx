import React from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const menuPages = [
  {
    id: 'mp-1',
    title: 'मेनू पान १: स्पेशल व्हेज व महाराष्ट्रीयन पदार्थ',
    image: '/Menu/menu-1.jpeg',
    tag: 'Veg Special & Starters',
  },
  {
    id: 'mp-2',
    title: 'मेनू पान २: स्पेशल कोल्हापुरी थाळी व मटण/चिकन',
    image: '/Menu/menu-2.jpeg',
    tag: 'Kolhapuri Special Thali',
  },
  {
    id: 'mp-3',
    title: 'मेनू पान ३: सुक्का मटण, बिर्याणी व रोटी प्रकार',
    image: '/Menu/menu-3.jpeg',
    tag: 'Biryani & Breads',
  },
  {
    id: 'mp-4',
    title: 'मेनू पान ४: थंडगार पेये, ताक, सोलकढी व गोडधोड',
    image: '/Menu/menu-4.jpeg',
    tag: 'Beverages & Desserts',
  }
];

export default function MenuSection({ profile, onSelectPhoto }) {
  const waNumber = (profile?.whatsapp || '919611761010').replace(/\D/g, '');

  const getWhatsAppMenuLink = (page) => {
    const text = encodeURIComponent(
      `नमस्कार Yes Rajvada!\nमी आपल्या मेनू कार्डमधील "${page.title}" पाहत आहे. मला ऑर्डर द्यायची आहे / चौकशी करायची आहे.`
    );
    return `https://wa.me/${waNumber}?text=${text}`;
  };

  return (
    <section id="menu" className="py-20 bg-[#fdfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8dfd5] text-[#520122] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#e05318]" />
            AUTHENTIC HOTEL MENU
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-royal text-[#520122] mb-3">
            आमचं <em className="saffron-text-gradient not-italic">अधिकृत मेनू कार्ड</em>
          </h2>
          <p className="text-sm sm:text-base text-[#64748b]">
            सर्व पानांचे थेट व स्पष्ट मेनू कार्ड. कोणत्याही पानावर क्लिक करून मोठ्या आकारात (Full Screen) पहा.
          </p>
        </div>

        {/* Direct Menu Images with Refined Elevation & Tactile Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {menuPages.map((page) => (
            <div 
              key={page.id} 
              className="group flex flex-col justify-between"
            >
              {/* Direct Image Container with Dynamic Multi-layered Hover Shadow */}
              <div 
                onClick={() => onSelectPhoto && onSelectPhoto({ url: page.image, title: page.title, category: 'Menu Card' })}
                className="relative rounded-2xl overflow-hidden bg-white border-4 border-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_22px_50px_-6px_rgba(82,1,34,0.22)] hover:border-amber-100 hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
              >
                <img
                  src={page.image}
                  alt={page.title}
                  className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = `/Menu/menu-1.jpeg`;
                  }}
                />

                {/* Floating Zoom Indicator on Hover */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#520122] border border-stone-200 shadow-md flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all">
                  <Maximize2 className="w-3.5 h-3.5 text-[#e05318]" />
                  <span>मोठे करून पहा</span>
                </div>

                {/* Page Tag */}
                <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-semibold text-white shadow">
                  {page.tag}
                </div>
              </div>

              {/* Title and WhatsApp Quick Order Bar with Interactive Polish */}
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-1">
                <div>
                  <h3 className="font-bold text-base text-[#1e293b] group-hover:text-[#520122] transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-xs text-[#64748b]">क्लिक करा आणि संपूर्ण दरपत्रक तपासा</p>
                </div>

                <a
                  href={getWhatsAppMenuLink(page)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide flex items-center gap-2 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>WhatsApp वर ऑर्डर द्या</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
