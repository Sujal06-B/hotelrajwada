import React, { useState } from 'react';
import { UtensilsCrossed, FileText, Maximize2, BookOpen, ChevronRight, Layers, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const originalMenuPages = [
  {
    id: 'mp-1',
    title: 'मेनू पान १: स्पेशल व्हेज व महाराष्ट्रीयन स्टार्टर्स',
    subtitle: 'Veg Starters, Soups & Maharashtrian Specialties',
    image: './Menu/menu-1.jpeg',
    tag: 'Veg Special',
  },
  {
    id: 'mp-2',
    title: 'मेनू पान २: स्पेशल कोल्हापुरी थाळी व मटण/चिकन',
    subtitle: 'Kolhapuri Mutton & Chicken Thali Specials',
    image: './Menu/menu-2.jpeg',
    tag: 'Kolhapuri Thali',
  },
  {
    id: 'mp-3',
    title: 'मेनू पान ३: सुक्का मटण, बिर्याणी व रोटी प्रकार',
    subtitle: 'Sukka Mutton, Dum Biryani & Tandoor Breads',
    image: './Menu/menu-3.jpeg',
    tag: 'Biryani & Breads',
  },
  {
    id: 'mp-4',
    title: 'मेनू पान ४: थंडगार पेये, सोलकढी, ताक व मिष्टान्न',
    subtitle: 'Refreshing Beverages, Solkadhi & Traditional Desserts',
    image: './Menu/menu-4.jpeg',
    tag: 'Beverages & Desserts',
  }
];

const signatureDishes = [
  {
    id: 'sd-1',
    name: 'कोल्हापुरी स्पेशल मटण थाळी',
    englishName: 'Kolhapuri Special Mutton Thali',
    category: 'थाळी स्पेशल',
    dietary: 'nonveg',
    price: '₹३६०',
    numericPrice: 360,
    badge: 'सर्वाधिक पसंती (Bestseller)',
    description: 'अस्सल झणझणीत तांबडा व पांढरा अमर्याद रस्सा, कोल्हापुरी गावरान सुक्कं मटण, २ बाजरीची भाकरी/चपाती आणि वाफाळलेला इंद्रायणी भात.',
    image: './Menu/menu-2.jpeg'
  },
  {
    id: 'sd-2',
    name: 'स्पेशल चिकन थाळी',
    englishName: 'Royal Chicken Thali',
    category: 'थाळी स्पेशल',
    dietary: 'nonveg',
    price: '₹२९०',
    numericPrice: 290,
    badge: 'शेफ स्पेशल',
    description: 'गावरान चिकन सुक्का फ्राय, चवदार तांबडा-पांढरा रस्सा, गरमागरम चपाती किंवा बाजरीची भाकरी, कांदा-लिंबू व बासमती भात.',
    image: './Menu/menu-3.jpeg'
  },
  {
    id: 'sd-3',
    name: 'राजवाडा स्पेशल व्हेज थाळी',
    englishName: 'Rajvada Royal Veg Thali',
    category: 'थाळी स्पेशल',
    dietary: 'veg',
    price: '₹२२०',
    numericPrice: 220,
    badge: 'शुद्ध शाकाहारी',
    description: 'दोन ताज्या भाज्या (पनीर बटर मसाला व सुक्की भाजी), डाळ तडका, जिरा राईस, २ चपाती किंवा भाकरी, गोड शिरा/गुलाबजाम, पापड व ताक.',
    image: './Menu/menu-1.jpeg'
  },
  {
    id: 'sd-4',
    name: 'शाही पनीर बटर मसाला',
    englishName: 'Paneer Butter Masala',
    category: 'व्हेज स्पेशल',
    dietary: 'veg',
    price: '₹२१०',
    numericPrice: 210,
    badge: 'लोकप्रिय व्हेज',
    description: 'ताजे मऊ पनीर, रिच काजू आणि लोणी ग्रेव्ही, वरून कसुरी मेथीची सुगंधी फोडणी. बटर रोटीसोबत सर्वोत्तम जोडी.',
    image: './Menu/menu-4.jpeg'
  },
  {
    id: 'sd-5',
    name: 'काजू करी मसाला',
    englishName: 'Kaju Curry Masala',
    category: 'व्हेज स्पेशल',
    dietary: 'veg',
    price: '₹२३०',
    numericPrice: 230,
    badge: 'शाही चव',
    description: 'तळलेले अखंड काजू, कोल्हापुरी खमंग लाल ग्रेव्ही, साजूक तुपाची फोडणी आणि राजेशाही स्वाद.',
    image: './Menu/menu-1.jpeg'
  },
  {
    id: 'sd-6',
    name: 'मटण दम बिर्याणी व रायता',
    englishName: 'Mutton Dum Biryani',
    category: 'रोटी व बिर्याणी',
    dietary: 'nonveg',
    price: '₹३२०',
    numericPrice: 320,
    badge: 'दम बिर्याणी',
    description: 'सुगंधी लांब दाण्याचा बासमती तांदूळ, मसालेदार कोल्हापुरी मटण तुकडे, दम पद्धतीने शिजवलेली बिर्याणी सोबत थंडगार बुंदी रायता.',
    image: './Menu/menu-3.jpeg'
  },
  {
    id: 'sd-7',
    name: 'अस्सल कोल्हापुरी सोलकढी',
    englishName: 'Authentic Solkadhi',
    category: 'पेये व सोलकढी',
    dietary: 'veg',
    price: '₹४०',
    numericPrice: 40,
    badge: 'पाचक व थंडगार',
    description: 'ताजे काढलेले नारळाचे दूध, अस्सल आगळ (कोकम), लसूण व हिरवी मिरचीची खमंग फोडणी. जेवणानंतर पचनासाठी सर्वोत्तम.',
    image: './Menu/menu-4.jpeg'
  },
  {
    id: 'sd-8',
    name: 'थंडगार मसाला ताक',
    englishName: 'Fresh Masala Buttermilk',
    category: 'पेये व सोलकढी',
    dietary: 'veg',
    price: '₹३०',
    numericPrice: 30,
    badge: 'पारंपरिक',
    description: 'दह्यापासून ताजे घुसळलेले थंडगार ताक, भाजलेले जिरेपूड, बारीक चिरलेली कोथिंबीर आणि काळं मीठ.',
    image: './Menu/menu-1.jpeg'
  }
];

const categoryTabs = ['All', 'थाळी स्पेशल', 'व्हेज स्पेशल', 'रोटी व बिर्याणी', 'पेये व सोलकढी'];

export default function MenuSection({ profile, onSelectPhoto }) {
  const [viewMode, setViewMode] = useState('dishes'); // 'dishes' | 'scans'
  const [selectedCategory, setSelectedCategory] = useState('All');

  const waNumber = (profile?.whatsapp || '919611761010').replace(/\D/g, '');

  const getWhatsAppDishLink = (dish) => {
    const text = encodeURIComponent(
      `नमस्कार Yes Rajvada!\nमला मेनूमधील "${dish.name} (${dish.englishName}) - ${dish.price}" बद्दल ऑर्डर द्यायची आहे / पार्सल हवं आहे.`
    );
    return `https://wa.me/${waNumber}?text=${text}`;
  };

  const getWhatsAppScanLink = (page) => {
    const text = encodeURIComponent(
      `नमस्कार Yes Rajvada!\nमी आपल्या मेनू कार्डमधील "${page.title}" पाहत आहे. मला ऑर्डर द्यायची आहे / चौकशी करायची आहे.`
    );
    return `https://wa.me/${waNumber}?text=${text}`;
  };

  const filteredDishes = selectedCategory === 'All'
    ? signatureDishes
    : signatureDishes.filter(d => d.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-[#fdfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with Domain-Specific Utensils Icon (No generic sparkles) */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8dfd5] text-[#520122] text-xs font-bold tracking-wider mb-3 shadow-xs">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#e05318]" />
            <span>शाही खाद्यसंस्कृती • ROYAL DINING MENU</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-royal text-[#520122] mb-3">
            आमचं <em className="saffron-text-gradient not-italic">स्वादिष्ट मेनू कार्ड</em>
          </h2>
          <p className="text-sm sm:text-base text-[#64748b]">
            अस्सल कोल्हापुरी झणझणीत थाळी, शुद्ध शाकाहारी मेजवानी आणि स्वादिष्ट गोडधोड.
          </p>
        </div>

        {/* Professional Dual-View Presentation Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#f5ede3] p-2 rounded-2xl border border-[#e4d7c6] max-w-3xl mx-auto">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setViewMode('dishes')}
              className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                viewMode === 'dishes'
                  ? 'bg-[#520122] text-white shadow-md'
                  : 'text-stone-700 hover:text-[#520122] hover:bg-white/60'
              }`}
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>खास डिशेस एक्सप्लोरर</span>
            </button>

            <button
              onClick={() => setViewMode('scans')}
              className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                viewMode === 'scans'
                  ? 'bg-[#520122] text-white shadow-md'
                  : 'text-stone-700 hover:text-[#520122] hover:bg-white/60'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>अधिकृत मेनू पत्रिका (Original Card)</span>
            </button>
          </div>

          <a
            href="./RajwadaQuatation.pdf"
            download
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-[#520122] font-semibold text-xs flex items-center justify-center gap-2 shadow-2xs transition-all hover:scale-102"
          >
            <FileText className="w-3.5 h-3.5 text-[#e05318]" />
            <span>मेनू दरपत्रक PDF</span>
          </a>
        </div>

        {/* ================= MODE 1: SIGNATURE DISHES EXPLORER ================= */}
        {viewMode === 'dishes' && (
          <div>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categoryTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedCategory(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === tab
                      ? 'bg-[#520122] text-white shadow-sm'
                      : 'bg-white text-stone-600 hover:text-[#520122] border border-stone-200 hover:border-stone-300'
                  }`}
                >
                  {tab === 'All' ? 'सर्व पदार्थ (All Dishes)' : tab}
                </button>
              ))}
            </div>

            {/* Dishes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-white rounded-2xl border border-stone-200/90 shadow-[0_4px_18px_rgba(0,0,0,0.05)] hover:shadow-[0_22px_45px_-8px_rgba(82,1,34,0.20)] hover:-translate-y-2 hover:border-[#520122]/40 transition-all duration-300 ease-out flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {/* Dish Preview Banner */}
                    <div 
                      onClick={() => onSelectPhoto && onSelectPhoto({ url: dish.image, title: dish.name, category: dish.category })}
                      className="relative h-44 overflow-hidden bg-stone-100 cursor-pointer"
                    >
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = './rajvada-entrance.webp';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Dietary Indicator (FSSAI Standard Green Veg / Red Non-Veg Badge) */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md shadow flex items-center gap-1.5 border border-stone-200">
                        {dish.dietary === 'veg' ? (
                          <div className="w-3.5 h-3.5 rounded-sm border border-emerald-600 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                          </div>
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-sm border border-rose-600 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-rose-700"></div>
                          </div>
                        )}
                        <span className="text-[10px] font-bold text-stone-700">
                          {dish.dietary === 'veg' ? 'शुद्ध व्हेज' : 'नॉन-व्हेज'}
                        </span>
                      </div>

                      {/* Tag Badge */}
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#520122] text-amber-300 shadow">
                        {dish.badge}
                      </span>

                      {/* Zoom Tooltip */}
                      <div className="absolute bottom-2.5 right-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3 h-3 text-amber-300" />
                        <span>फोटो पहा</span>
                      </div>
                    </div>

                    {/* Dish Content */}
                    <div className="p-5 text-left">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-bold text-base text-[#1e293b] group-hover:text-[#520122] transition-colors leading-snug">
                          {dish.name}
                        </h3>
                        <span className="font-bold text-base text-[#e05318] shrink-0 font-royal">
                          {dish.price}
                        </span>
                      </div>

                      <p className="text-[11px] font-semibold text-[#8a7561] mb-2.5">
                        {dish.englishName}
                      </p>

                      <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                        {dish.description}
                      </p>
                    </div>
                  </div>

                  {/* Order via WhatsApp Action Button */}
                  <div className="p-5 pt-0">
                    <a
                      href={getWhatsAppDishLink(dish)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all active:scale-95"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp वर ऑर्डर द्या</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= MODE 2: ORIGINAL MENU CARD SCANS ================= */}
        {viewMode === 'scans' && (
          <div>
            <div className="mb-6 p-4 rounded-xl bg-[#fdf8f0] border border-amber-200/80 text-center max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm font-semibold text-[#520122]">
                ✦ हॉटेलचे प्रत्यक्ष मुद्रित मेनू कार्ड (Full Page Scans). कोणत्याही पानावर क्लिक करून Full Screen मध्ये झूम करून वाचा.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {originalMenuPages.map((page) => (
                <div 
                  key={page.id} 
                  className="group flex flex-col justify-between"
                >
                  {/* Direct Image Container with Dynamic Multi-layered Hover Shadow */}
                  <div 
                    onClick={() => onSelectPhoto && onSelectPhoto({ url: page.image, title: page.title, category: 'Menu Card' })}
                    className="relative rounded-2xl overflow-hidden bg-white border-4 border-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_50px_-6px_rgba(82,1,34,0.22)] hover:border-amber-100 hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
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

                  {/* Title and WhatsApp Quick Order Bar */}
                  <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-1">
                    <div>
                      <h3 className="font-bold text-base text-[#1e293b] group-hover:text-[#520122] transition-colors">
                        {page.title}
                      </h3>
                      <p className="text-xs text-[#64748b]">{page.subtitle}</p>
                    </div>

                    <a
                      href={getWhatsAppScanLink(page)}
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
        )}

        {/* Banquet & Bulk Catering Inquiry Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#520122] via-[#63042b] to-[#3a0017] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border-2 border-amber-300/30">
          <div className="space-y-2 text-center sm:text-left">
            <span className="px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/15">
              BANQUET &amp; CATERING PACKAGES
            </span>
            <h3 className="text-xl sm:text-2xl font-royal font-bold text-white">
              लग्न व समारंभांसाठी खास केटरिंग पॅकेजेस
            </h3>
            <p className="text-xs sm:text-sm text-rose-100 max-w-xl leading-relaxed">
              साखरपुडा, वाढदिवस आणि लग्न सोहळ्यांसाठी अस्सल महाराष्ट्रीयन जेवणाचे विशेष दरपत्रक उपलब्ध आहे.
            </p>
          </div>

          <a
            href={`https://wa.me/${waNumber}?text=${encodeURIComponent('नमस्कार Yes Rajvada! मला लग्न व समारंभासाठी केटरिंग पॅकेज आणि मेनू कोटेशनबद्दल चौकशी करायची आहे.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg flex items-center gap-2 transition-all hover:scale-105"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>केटरिंग चौकशी (WhatsApp)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
