import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { dataDir, dataFilePath } from '../config/db.js';

// Default initial data extracted from the existing HotelRajwada codebase
const initialData = {
  profile: {
    hotelName: "Yes Rajvada",
    tagline: "राजेशाही चव, आपुलकीची सेवा",
    subTagline: "HOTEL & FAMILY RESTAURANT",
    phone: "+91 96117 61010",
    whatsapp: "+919611761010",
    email: "contact@yesrajvada.com",
    address: "Gijawane, Gadhinglaj, Kolhapur, Maharashtra 416502",
    timings: "सोम-रवि: सकाळी 11:00 ते रात्री 11:00",
    aboutText: "Yes Rajvada Hotel, Gadhinglaj – अस्सल महाराष्ट्रीयन चव, कौटुंबिक जेवणासाठी उत्तम जागा आणि लग्न/समारंभांसाठी भव्य राजेशाही हॉल.",
    googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=Yes+Rajvada",
    mapUrl: "https://maps.google.com/?q=Yes+Rajvada+Gadhinglaj",
    openingHour: 11,
    closingHour: 23,
  },
  menu: [
    {
      id: "menu-1",
      name: "Veg Special Thali",
      marathiName: "स्पेशल व्हेज थाळी",
      category: "Special Thali",
      price: 220,
      description: "दोन भाज्या, डाळ, भात, चपाती/भाकरी, गोड, पापड, लोणचे आणि ताक.",
      isAvailable: true,
      image: "/Menu/WhatsApp Image 2026-11-20 at 19.55.57.jpeg",
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
      image: "/Menu/WhatsApp Image 2026-11-20 at 19.55.58.jpeg",
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
      image: "/Menu/WhatsApp Image 2026-11-20 at 19.56.00.jpeg",
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
      image: "/Menu/WhatsApp Image 2026-11-20 at 19.56.01.jpeg",
      dietary: "veg"
    },
    {
      id: "menu-5",
      name: "Kaju Curry",
      marathiName: "काजू करी",
      category: "Veg Special",
      price: 230,
      description: "कुरकुरीत तळलेले काजू मसालेदार रिच ग्रेव्हीमध्ये.",
      isAvailable: true,
      image: "/Menu/WhatsApp Image 2026-11-20 at 19.55.57.jpeg",
      dietary: "veg"
    },
    {
      id: "menu-6",
      name: "Solkadhi",
      marathiName: "थंडगार सोलकढी",
      category: "Beverages",
      price: 50,
      description: "कोकम आणि नारळाच्या दुधापासून बनवलेली पाचक सोलकढी.",
      isAvailable: true,
      image: "/Menu/WhatsApp Image 2026-11-20 at 19.55.58.jpeg",
      dietary: "veg"
    },
    {
      id: "menu-7",
      name: "Gulab Jamun (2 pcs)",
      marathiName: "गुलाब जामून",
      category: "Desserts",
      price: 60,
      description: "शुद्ध तुपातील गरमागरम गुलाब जामून.",
      isAvailable: true,
      image: "/Menu/WhatsApp Image 2026-11-20 at 19.56.00.jpeg",
      dietary: "veg"
    }
  ],
  photos: [
    {
      id: "p-1",
      title: "Hotel Entrance",
      category: "Hotel",
      url: "/rajvada-entrance.webp"
    },
    {
      id: "p-2",
      title: "Royal Dining Hall",
      category: "Hall",
      url: "/hero2.webp"
    },
    {
      id: "p-3",
      title: "Family Dining Area",
      category: "Hotel",
      url: "/hero3.jpg"
    },
    {
      id: "p-4",
      title: "Evening Ambience",
      category: "Hotel",
      url: "/hero4.jpg"
    },
    {
      id: "p-5",
      title: "Special Thali Presentation",
      category: "Special Thali",
      url: "/Menu/WhatsApp Image 2026-11-20 at 19.55.58.jpeg"
    }
  ],
  enquiries: [
    {
      id: "enq-101",
      guestName: "Sachin Patil",
      phone: "+91 98220 12345",
      email: "sachin.p@gmail.com",
      date: "2026-11-25",
      time: "19:30",
      guests: 6,
      type: "Table enquiry",
      status: "New",
      notes: "Family dinner, vegetarian preference requested near window.",
      createdAt: new Date().toISOString()
    },
    {
      id: "enq-102",
      guestName: "Ramesh Deshmukh",
      phone: "+91 94230 67890",
      email: "ramesh.desh@yahoo.com",
      date: "2026-12-10",
      time: "11:00",
      guests: 150,
      type: "Hall enquiry",
      status: "Contacted",
      notes: "Engagement ceremony catering and hall booking inquiry.",
      createdAt: new Date(Date.now() - 86400000).toISOString()
    }
  ],
  offers: [
    {
      id: "off-1",
      title: "Sunday Family Special",
      code: "RAJSUNDAY",
      discount: "10% OFF",
      description: "कुटुंबासोबत 4 पेक्षा जास्त थाळींवर 10% थेट सवलत.",
      active: true,
      validUntil: "2026-12-31"
    },
    {
      id: "off-2",
      title: "Hall Booking Early Bird",
      code: "ROYALEVENT",
      discount: "Free Welcome Drink",
      description: "हॉल बुकिंगवर मोफत वेलकम ड्रिंक व स्टार्टर कॉम्बो.",
      active: true,
      validUntil: "2026-12-31"
    }
  ],
  branches: [
    {
      id: "br-1",
      name: "Yes Rajvada - Main Branch (Gadhinglaj)",
      address: "Gijawane Road, Gadhinglaj, Kolhapur",
      phone: "+91 96117 61010",
      isMain: true
    }
  ],
  users: [
    {
      id: "usr-admin",
      username: "admin",
      // default password: admin123
      passwordHash: bcrypt.hashSync("admin123", 10),
      role: "admin",
      name: "Hotel Administrator"
    }
  ]
};

class DataStore {
  constructor() {
    this.data = null;
    this.init();
  }

  init() {
    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      if (fs.existsSync(dataFilePath)) {
        const raw = fs.readFileSync(dataFilePath, 'utf8');
        this.data = JSON.parse(raw);
        // Ensure all required keys exist
        for (const key of Object.keys(initialData)) {
          if (!this.data[key]) this.data[key] = initialData[key];
        }
      } else {
        this.data = structuredClone(initialData);
        this.save();
      }
    } catch (e) {
      console.error('Error loading dataStore, using default data:', e);
      this.data = structuredClone(initialData);
    }
  }

  save() {
    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.writeFileSync(dataFilePath, JSON.stringify(this.data, null, 2), 'utf8');
    } catch (e) {
      console.error('Error writing to dataStore file:', e);
    }
  }

  get(collection) {
    return this.data[collection];
  }

  set(collection, value) {
    this.data[collection] = value;
    this.save();
    return this.data[collection];
  }
}

export const dbStore = new DataStore();

