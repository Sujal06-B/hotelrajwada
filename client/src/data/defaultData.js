export const defaultProfile = {
  hotelName: "Yes Rajvada",
  tagline: "राजेशाही चव, आपुलकीची सेवा",
  subTagline: "HOTEL & FAMILY RESTAURANT",
  phone: "+91 96117 61010",
  whatsapp: "+919611761010",
  instagram: "https://www.instagram.com/hotelyesrajwada1010/",
  instagramHandle: "@hotelyesrajwada1010",
  email: "contact@yesrajvada.com",
  address: "Gijawane, Gadhinglaj, Kolhapur, Maharashtra 416502",
  timings: "सोम-रवि: सकाळी 11:00 ते रात्री 11:00",
  aboutText: "Yes Rajvada Hotel, Gadhinglaj – अस्सल महाराष्ट्रीयन चव, कौटुंबिक जेवणासाठी उत्तम जागा आणि लग्न/समारंभांसाठी भव्य राजेशाही हॉल.",
  googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=Yes+Rajvada",
  mapUrl: "https://maps.google.com/?q=Yes+Rajvada+Gadhinglaj",
  openingHour: 11,
  closingHour: 23,
};

export const defaultMenu = [
  {
    id: "menu-1",
    name: "Veg Special Thali",
    marathiName: "स्पेशल व्हेज थाळी",
    category: "Special Thali",
    price: 220,
    description: "दोन भाज्या, डाळ, भात, चपाती/भाकरी, गोड, पापड, लोणचे आणि ताक.",
    isAvailable: true,
    image: "./Menu/menu-1.jpeg",
    dietary: "veg"
  },
  {
    id: "menu-2",
    name: "Mutton Thali (Kolhapuri)",
    marathiName: "कोल्हापुरी मटण थाळी",
    category: "Special Thali",
    price: 360,
    description: "अस्सल तांबडा-पांढरा रस्सा, सुक्कं मटण, भाकरी आणि इंद्रायणी भात.",
    isAvailable: true,
    image: "./Menu/menu-2.jpeg",
    dietary: "nonveg"
  },
  {
    id: "menu-3",
    name: "Chicken Thali",
    marathiName: "स्पेशल चिकन थाळी",
    category: "Special Thali",
    price: 290,
    description: "गावरान चिकन सुक्का, तांबडा-पांढरा रस्सा, गरमागरम चपाती/भाकरी.",
    isAvailable: true,
    image: "./Menu/menu-3.jpeg",
    dietary: "nonveg"
  },
  {
    id: "menu-4",
    name: "Paneer Butter Masala",
    marathiName: "पनीर बटर मसाला",
    category: "Veg Special",
    price: 210,
    description: "ताजे मऊ पनीर रिच काजू-टोमॅटो ग्रेव्हीमध्ये.",
    isAvailable: true,
    image: "./Menu/menu-4.jpeg",
    dietary: "veg"
  }
];

export const defaultPhotos = [
  { id: "p-1", title: "Hotel Grand Entrance", category: "Hotel", url: "./rajvada-entrance.webp" },
  { id: "p-2", title: "Royal Celebration Hall", category: "Hall", url: "./hero2.webp" },
  { id: "p-3", title: "Family Dining Hall", category: "Hotel", url: "./hero3.jpg" },
  { id: "p-4", title: "Evening Heritage Glow", category: "Hotel", url: "./hero4.jpg" },
  { id: "p-5", title: "Kolhapuri Special Thali", category: "Special Thali", url: "./Menu/menu-2.jpeg" },
  { id: "p-6", title: "Ambience & Seating", category: "Hotel", url: "./rajwadaHotelImages/hotel-1.jpeg" },
  { id: "p-7", title: "Royal Event Stage", category: "Hall", url: "./rajwadaHotelImages/hotel-3.jpeg" },
  { id: "p-8", title: "Buffet & Dining Area", category: "Hall", url: "./rajwadaHotelImages/hotel-5.jpeg" }
];

export const defaultReviews = [
  {
    name: "Rahul Patil",
    location: "Kolhapur",
    rating: 5,
    comment: "अस्सल महाराष्ट्रीयन चव! थाळी खूपच छान होती. कुटुंबासोबत आलो होतो, सर्वांनाच आवडलं. नक्की परत येणार!",
    avatar: "R"
  },
  {
    name: "Priya Jadhav",
    location: "Belagavi",
    rating: 5,
    comment: "Hall मध्ये आमचा साखरपुडा झाला. सजावट, जेवण आणि सेवा — सर्वच खूप उत्तम होतं. Yes Rajvada Team चे आभार!",
    avatar: "P"
  },
  {
    name: "Amit Kulkarni",
    location: "Gadhinglaj",
    rating: 5,
    comment: "गडहिंग्लजमधील सर्वोत्तम हॉटेल. मटण थाळी आणि तांबडा रस्सा एकदम भारी! Staff खूप नम्र आहे.",
    avatar: "A"
  },
  {
    name: "Sneha Shinde",
    location: "Nipani",
    rating: 5,
    comment: "स्वच्छता आणि कौटुंबिक वातावरण खूप आवडलं. Veg Special पनीर आणि रोटी लाजवाब होती.",
    avatar: "S"
  }
];

export const defaultBranches = [
  {
    id: "br-1",
    name: "Yes Rajvada - Gadhinglaj (Main)",
    address: "Gijawane Road, Near Gadhinglaj Town, Kolhapur, Maharashtra 416502",
    phone: "+91 96117 61010",
    timings: "11:00 AM – 11:00 PM (Daily)",
    isMain: true
  }
];
