import React from 'react';
import { Star, ExternalLink, Maximize2, CheckCircle2 } from 'lucide-react';
import InstagramIcon from './InstagramIcon.jsx';

const googleReviewsData = [
  {
    id: 'rev-1',
    author: 'राहुल पाटील (Rahul Patil)',
    badge: 'Local Guide • ४८ रिव्ह्यू',
    time: '२ आठवड्यांपूर्वी',
    rating: 5,
    title: 'अस्सल कोल्हापुरी चव आणि मटण थाळी!',
    comment: 'कुटुंबासोबत आलो होतो. मटण थाळी, तांबडा-पांढरा रस्सा आणि बाजरीची भाकरी अप्रतिम होती. गडहिंग्लजमधील सर्वोत्तम हॉटेल!',
    image: './Reviews/review-1.jpeg',
    dish: 'स्पेशल पनीर व स्टार्टर्स',
    avatarColor: 'from-[#520122] to-[#730634]'
  },
  {
    id: 'rev-2',
    author: 'प्रिया जाधव (Priya Jadhav)',
    badge: 'Verified Customer • Belagavi',
    time: '१ महिन्यापूर्वी',
    rating: 5,
    title: 'लग्न व साखरपुडा हॉलचा उत्कृष्ट अनुभव',
    comment: 'आमच्या भावाचा साखरपुडा Yes Rajvada हॉलमध्ये झाला. सजावट, जेवण आणि स्टाफची आपुलकीची सेवा — सर्वच उत्तम होतं!',
    image: './Reviews/review-2.jpeg',
    dish: 'सूप व वेलकम स्टार्टर्स',
    avatarColor: 'from-[#8b181b] to-[#5c0f11]'
  },
  {
    id: 'rev-3',
    author: 'अमित कुलकर्णी (Amit Kulkarni)',
    badge: 'Local Guide • Kolhapur',
    time: '३ आठवड्यांपूर्वी',
    rating: 5,
    title: 'कोफ्ता करी आणि व्हेज स्पेशल थाळी',
    comment: 'शुद्ध शाकाहारी जेवणासाठी गडहिंग्लजमधील सर्वात सुरक्षित आणि कौटुंबिक जागा. कोफ्ता करी आणि मऊ गरम चपाती लाजवाब होती.',
    image: './Reviews/review-3.jpeg',
    dish: 'शाही कोफ्ता करी स्पेशल',
    avatarColor: 'from-[#e05318] to-[#c2410c]'
  },
  {
    id: 'rev-4',
    author: 'सचिन सावंत (Sachin Sawant)',
    badge: 'Verified Guest • Gadhinglaj',
    time: '२ महिन्यांपूर्वी',
    rating: 5,
    title: 'गावरान चिकन थाळी व सोलकढी',
    comment: 'रस्स्याची चव थेट जिभेवर रेंगाळते. स्वच्छता, प्रशस्त पार्किंग आणि त्वरित सर्व्हिस यासाठी ५ पैकी ५ स्टार.',
    image: './Reviews/review-4.jpeg',
    dish: 'स्पेशल नॉन-व्हेज ताट',
    avatarColor: 'from-[#520122] to-[#3a0017]'
  },
  {
    id: 'rev-5',
    author: 'स्नेहल शिंदे (Snehal Shinde)',
    badge: 'Local Guide • Pune / Kolhapur',
    time: '१ महिन्यापूर्वी',
    rating: 5,
    title: 'कौटुंबिक स्नेहसंमेलन व स्वादिष्ट भोजन',
    comment: 'हायवेवरून येताना येथे जेवलो. वातावरण खूप रम्य आहे आणि स्टाफचा स्वभाव अत्यंत नम्र व आदरातिथ्यपूर्ण आहे.',
    image: './Reviews/review-5.jpeg',
    dish: 'पारंपरिक भोजन बैठक',
    avatarColor: 'from-[#730634] to-[#520122]'
  },
  {
    id: 'rev-6',
    author: 'विक्रम देसाई (Vikram Desai)',
    badge: 'Verified Guest • Nipani',
    time: '३ आठवड्यांपूर्वी',
    rating: 5,
    title: 'शाही राजवाडा फील आणि खमंग पदार्थ',
    comment: 'नावाप्रमाणेच राजेशाही फील येतो. जेवणाचा दर्जा नेहमीप्रमाणे उत्कृष्ट आहे. नक्की भेट द्या!',
    image: './Reviews/review-6.jpeg',
    dish: 'हॉटेल डायनिंग नजराणा',
    avatarColor: 'from-[#e05318] to-[#9a3412]'
  }
];

export default function ReviewsSection({ profile, onSelectPhoto }) {
  const reviewUrl = profile?.googleReviewUrl || "https://www.google.com/maps/search/?api=1&query=Yes+Rajvada";
  const instagramUrl = profile?.instagram || "https://www.instagram.com/hotelyesrajwada1010/";

  // Duplicate for seamless infinite loop from left to right
  const marqueeItems = [...googleReviewsData, ...googleReviewsData];

  return (
    <section id="reviews" className="py-20 bg-[#fdfbf7] border-t border-[#ede7de] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e8dfd5] text-[#520122] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            4.9★ GOOGLE MAPS REVIEWS
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-royal text-[#520122] mb-3">
            आमच्या ग्राहकांचे <em className="saffron-text-gradient not-italic">खरे अनुभव व फोटो</em>
          </h2>
          <p className="text-sm sm:text-base text-[#64748b]">
            ग्राहक स्वतः Google वर अपलोड केलेले अस्सल फोटो व ५-स्टार अभिप्राय. 
            <span className="hidden sm:inline text-xs text-[#520122] font-semibold ml-1">
              (कार्डवर कर्सर ठेवताच स्क्रोलिंग थांबेल)
            </span>
          </p>
        </div>

      </div>

      {/* Moving Marquee Container (Left to Right, Pauses on Hover) */}
      <div className="marquee-container relative w-full overflow-hidden py-4">
        {/* Edge gradient fades for seamless look */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#fdfbf7] to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#fdfbf7] to-transparent z-10"></div>

        {/* Marquee Track Moving Left to Right */}
        <div className="marquee-track-ltr flex gap-6 px-4">
          {marqueeItems.map((rev, idx) => (
            <div
              key={`${rev.id}-${idx}`}
              className="w-[310px] sm:w-[350px] shrink-0 bg-white rounded-2xl border border-stone-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_50px_-8px_rgba(82,1,34,0.22)] hover:-translate-y-2 hover:border-[#520122]/40 transition-all duration-300 ease-out p-5 flex flex-col justify-between group cursor-pointer"
              onClick={() => onSelectPhoto && onSelectPhoto({ url: rev.image, title: rev.title, category: 'Google Review' })}
            >
              <div>
                {/* Author Info & Google Badge */}
                <div className="flex items-start justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${rev.avatarColor} text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0`}>
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-xs sm:text-sm text-[#1e293b] leading-tight">
                        {rev.author}
                      </h3>
                      <p className="text-[11px] text-[#64748b] leading-tight mt-0.5">
                        {rev.badge}
                      </p>
                    </div>
                  </div>

                  {/* Google Verified Icon */}
                  <div className="shrink-0 p-1 rounded-full bg-blue-50 text-blue-600" title="Google Verified Review">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>

                {/* Rating Stars & Time */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#94a3b8] font-medium">{rev.time}</span>
                </div>

                {/* Real Food Photo Uploaded by Customer */}
                <div className="relative h-44 w-full rounded-xl overflow-hidden mb-3.5 bg-stone-100 border border-stone-200/80">
                  <img
                    src={rev.image}
                    alt={rev.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = './rajvada-entrance.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-2.5">
                    <span className="text-[10px] text-white font-medium flex items-center gap-1">
                      <Maximize2 className="w-3 h-3 text-amber-300" />
                      मोठे करून पहा
                    </span>
                  </div>
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-black/70 text-white backdrop-blur-xs">
                    {rev.dish}
                  </span>
                </div>

                {/* Review Title & Comment */}
                <h4 className="font-bold text-xs sm:text-sm text-[#520122] mb-1 line-clamp-1">
                  "{rev.title}"
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                  {rev.comment}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-[#64748b]">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  प्रमाणित ग्राहक
                </span>
                <span className="text-[#e05318] font-semibold hover:underline">
                  Google Maps →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#520122] to-[#730634] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-[#520122]/20 hover:scale-105 transition-all"
        >
          <span>Google वर ५-स्टार रिव्ह्यू द्या</span>
          <ExternalLink className="w-4 h-4 text-amber-300" />
        </a>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:scale-105 transition-all"
        >
          <InstagramIcon className="w-4 h-4" fill="white" />
          <span>Instagram वर रील्स पहा (@hotelyesrajwada1010)</span>
        </a>
      </div>
    </section>
  );
}
