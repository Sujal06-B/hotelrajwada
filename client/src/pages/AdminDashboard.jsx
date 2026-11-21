import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, UtensilsCrossed, Calendar, Image as ImageIcon, 
  Settings, ArrowLeft, Plus, Trash2, Edit3, CheckCircle, Clock, 
  Search, Star, Download, Upload, RefreshCw, Eye, ExternalLink, ShieldCheck
} from 'lucide-react';
import { defaultProfile, defaultMenu, defaultPhotos } from '../data/defaultData.js';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [profile, setProfile] = useState(defaultProfile);
  const [menu, setMenu] = useState(defaultMenu);
  const [photos, setPhotos] = useState(defaultPhotos);
  const [enquiries, setEnquiries] = useState([
    {
      id: "enq-101",
      guestName: "सचिन पाटील",
      phone: "+91 98220 12345",
      date: "2026-11-25",
      time: "19:30",
      guests: 6,
      type: "Table enquiry",
      status: "New",
      notes: "कौटुंबिक जेवण, शाकाहारी थाळीची आवड.",
      createdAt: new Date().toISOString()
    },
    {
      id: "enq-102",
      guestName: "रमेश देशमुख",
      phone: "+91 94230 67890",
      date: "2026-12-10",
      time: "11:00",
      guests: 150,
      type: "Hall enquiry",
      status: "Contacted",
      notes: "साखरपुडा समारंभ हॉल बुकिंग व जेवण व्यवस्था.",
      createdAt: new Date(Date.now() - 86400000).toISOString()
    }
  ]);

  // Modals & form state
  const [showAddMenuModal, setShowAddMenuModal] = useState(false);
  const [newDish, setNewDish] = useState({
    name: '',
    marathiName: '',
    category: 'Special Thali',
    price: '',
    description: '',
    dietary: 'veg',
    isAvailable: true,
    image: './Menu/WhatsApp Image 2026-11-20 at 19.55.57.jpeg'
  });

  const [showAddPhotoModal, setShowAddPhotoModal] = useState(false);
  const [newPhoto, setNewPhoto] = useState({
    title: '',
    category: 'Hotel',
    url: './rajvada-entrance.webp'
  });

  const [enquiryFilter, setEnquiryFilter] = useState('all');
  const [enquirySearch, setEnquirySearch] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Fetch data on mount
  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(d => { if (d.data) setProfile(d.data); })
      .catch(() => {});

    fetch('/api/menu')
      .then(res => res.json())
      .then(d => { if (d.data && d.data.length) setMenu(d.data); })
      .catch(() => {});

    fetch('/api/photos')
      .then(res => res.json())
      .then(d => { if (d.data && d.data.length) setPhotos(d.data); })
      .catch(() => {});

    fetch('/api/bookings')
      .then(res => res.json())
      .then(d => { if (d.data && d.data.length) setEnquiries(d.data); })
      .catch(() => {});
  }, []);

  // Menu actions
  const handleAddDish = (e) => {
    e.preventDefault();
    if (!newDish.name || !newDish.price) return;
    const item = {
      ...newDish,
      id: `menu-${Date.now()}`,
      price: Number(newDish.price)
    };
    setMenu([item, ...menu]);
    setShowAddMenuModal(false);
    setNewDish({
      name: '',
      marathiName: '',
      category: 'Special Thali',
      price: '',
      description: '',
      dietary: 'veg',
      isAvailable: true,
      image: './Menu/WhatsApp Image 2026-11-20 at 19.55.57.jpeg'
    });
    showToast('डिश यशस्वीरित्या जोडली!');
  };

  const handleDeleteDish = (id) => {
    if (confirm('ही डिश डिलीट करायची आहे का?')) {
      setMenu(menu.filter(m => m.id !== id));
      showToast('डिश डिलीट करण्यात आली.');
    }
  };

  const toggleDishAvailability = (id) => {
    setMenu(menu.map(m => m.id === id ? { ...m, isAvailable: !m.isAvailable } : m));
    showToast('उपलब्धता अपडेट झाली.');
  };

  // Enquiry status change
  const handleStatusChange = (id, newStatus) => {
    setEnquiries(enquiries.map(e => e.id === id ? { ...e, status: newStatus } : e));
    showToast(`स्टेटस "${newStatus}" करण्यात आले.`);
  };

  const handleDeleteEnquiry = (id) => {
    if (confirm('ही चौकशी डिलीट करायची आहे का?')) {
      setEnquiries(enquiries.filter(e => e.id !== id));
      showToast('चौकशी डिलीट झाली.');
    }
  };

  // Photo actions
  const handleAddPhoto = (e) => {
    e.preventDefault();
    if (!newPhoto.url) return;
    const p = {
      ...newPhoto,
      id: `p-${Date.now()}`,
      title: newPhoto.title || 'Hotel Photo'
    };
    setPhotos([p, ...photos]);
    setShowAddPhotoModal(false);
    showToast('फोटो गॅलरीत जोडला गेला!');
  };

  const handleDeletePhoto = (id) => {
    if (confirm('हा फोटो डिलीट करायचा आहे का?')) {
      setPhotos(photos.filter(p => p.id !== id));
      showToast('फोटो डिलीट करण्यात आला.');
    }
  };

  // Profile save
  const handleProfileSave = (e) => {
    e.preventDefault();
    fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile)
    }).catch(() => {});
    showToast('हॉटेल प्रोफाईल माहिती सेव्ह झाली!');
  };

  // Export JSON backup
  const handleExportBackup = () => {
    const backupData = { profile, menu, photos, enquiries };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `yes-rajvada-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showToast('बॅकअप फाईल डाउनलोड झाली.');
  };

  // Filtered enquiries
  const filteredEnquiries = enquiries.filter(item => {
    const matchFilter = enquiryFilter === 'all' || item.status === enquiryFilter;
    const matchSearch = !enquirySearch || 
      item.guestName?.toLowerCase().includes(enquirySearch.toLowerCase()) || 
      item.phone?.includes(enquirySearch);
    return matchFilter && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#110603] text-[#fbf6ea] flex flex-col md:flex-row">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-[#d4a853] text-[#120703] px-4 py-2.5 rounded-xl shadow-2xl font-bold text-xs flex items-center gap-2 animate-bounce">
          <ShieldCheck className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-[#180803] border-b md:border-b-0 md:border-r border-[#d4a853]/20 flex flex-col justify-between shrink-0">
        <div>
          {/* Brand */}
          <div className="p-5 border-b border-[#d4a853]/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="./logo.jpg" alt="Logo" className="w-9 h-9 rounded-full object-cover border border-[#d4a853]" />
              <div>
                <p className="font-royal font-bold text-base tracking-wide text-[#fbf6ea]">YES RAJVADA</p>
                <p className="text-[10px] text-[#d4a853] font-semibold tracking-wider">ADMIN CONTROL</p>
              </div>
            </div>
            <Link 
              to="/" 
              className="p-1.5 rounded-lg bg-[#271208] text-[#d4a853] hover:text-white text-xs flex items-center gap-1 border border-[#d4a853]/30"
              title="View Public Website"
            >
              <Eye className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'overview' ? 'bg-[#d4a853] text-[#120703] shadow-md font-bold' : 'text-[#dcd0b7] hover:bg-white/5'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>डॅशबोर्ड (Overview)</span>
            </button>

            <button
              onClick={() => setActiveTab('menu')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'menu' ? 'bg-[#d4a853] text-[#120703] shadow-md font-bold' : 'text-[#dcd0b7] hover:bg-white/5'
              }`}
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>मेनू आणि दर (Menu &amp; Pricing)</span>
            </button>

            <button
              onClick={() => setActiveTab('bookings')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'bookings' ? 'bg-[#d4a853] text-[#120703] shadow-md font-bold' : 'text-[#dcd0b7] hover:bg-white/5'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>आरक्षण व चौकशी ({enquiries.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'gallery' ? 'bg-[#d4a853] text-[#120703] shadow-md font-bold' : 'text-[#dcd0b7] hover:bg-white/5'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>फोटो गॅलरी (Gallery)</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'profile' ? 'bg-[#d4a853] text-[#120703] shadow-md font-bold' : 'text-[#dcd0b7] hover:bg-white/5'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>हॉटेल प्रोफाईल व सेटिंग्स</span>
            </button>
          </nav>
        </div>

        {/* Bottom Back Button */}
        <div className="p-4 border-t border-[#d4a853]/20">
          <Link
            to="/"
            className="w-full py-2 px-3 rounded-lg bg-[#271208] hover:bg-[#8b181b] text-xs font-semibold text-[#fbf6ea] border border-[#d4a853]/30 flex items-center justify-center gap-2 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>वेबसाईट पहा (Website)</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-5 sm:p-8 overflow-y-auto max-h-screen">
        
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#d4a853] font-bold">HOTEL CONTROL CENTER</p>
              <h1 className="text-2xl sm:text-3xl font-royal font-bold text-[#fbf6ea]">
                डॅशबोर्ड <em className="gold-gradient-text not-italic">Overview</em>
              </h1>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-[#1b0c05] border border-[#d4a853]/20">
                <span className="text-[11px] font-bold text-[#d4a853] uppercase tracking-wider block mb-1">एकूण चौकशी</span>
                <span className="text-3xl font-royal font-bold text-[#fbf6ea]">{enquiries.length}</span>
                <p className="text-[10px] text-[#9c8a74] mt-1">टेबल व हॉल आरक्षण</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#1b0c05] border border-[#d4a853]/20">
                <span className="text-[11px] font-bold text-[#d4a853] uppercase tracking-wider block mb-1">मेनू डिशेस</span>
                <span className="text-3xl font-royal font-bold text-[#fbf6ea]">{menu.length}</span>
                <p className="text-[10px] text-[#9c8a74] mt-1">सक्रिय खाद्यपदार्थ</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#1b0c05] border border-[#d4a853]/20">
                <span className="text-[11px] font-bold text-[#d4a853] uppercase tracking-wider block mb-1">गॅलरी फोटो</span>
                <span className="text-3xl font-royal font-bold text-[#fbf6ea]">{photos.length}</span>
                <p className="text-[10px] text-[#9c8a74] mt-1">हॉटेल व हॉल फोटो</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#1b0c05] border border-[#d4a853]/20">
                <span className="text-[11px] font-bold text-[#d4a853] uppercase tracking-wider block mb-1">हॉटेल स्थिती</span>
                <span className="text-lg font-bold text-emerald-400 flex items-center gap-1.5 mt-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  उघडे आहे
                </span>
                <p className="text-[10px] text-[#9c8a74] mt-1">सकाळी ११ ते रात्री ११</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 rounded-2xl bg-[#180803] border border-[#d4a853]/20">
              <h2 className="text-sm font-bold text-[#fbf6ea] mb-3">झटपट कृती (Quick Actions)</h2>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setShowAddMenuModal(true)}
                  className="px-4 py-2.5 rounded-xl bg-[#d4a853] text-[#120703] font-bold text-xs flex items-center gap-2 hover:brightness-110 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>नवीन डिश जोडा</span>
                </button>
                <button
                  onClick={() => setShowAddPhotoModal(true)}
                  className="px-4 py-2.5 rounded-xl bg-[#271208] text-[#fbf6ea] border border-[#d4a853]/40 font-semibold text-xs flex items-center gap-2 hover:bg-[#381a0b] cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>फोटो जोडा</span>
                </button>
                <button
                  onClick={handleExportBackup}
                  className="px-4 py-2.5 rounded-xl bg-[#271208] text-[#d4a853] border border-[#d4a853]/40 font-semibold text-xs flex items-center gap-2 hover:bg-[#381a0b] cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>डेटा बॅकअप डाउनलोड</span>
                </button>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="p-6 rounded-2xl bg-[#180803] border border-[#d4a853]/20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-[#fbf6ea]">नुकतीच आलेली आरक्षणे व चौकशी</h2>
                <button onClick={() => setActiveTab('bookings')} className="text-xs text-[#d4a853] font-semibold hover:underline">
                  सर्व पहा →
                </button>
              </div>
              <div className="space-y-3">
                {enquiries.slice(0, 3).map((enq) => (
                  <div key={enq.id} className="p-4 rounded-xl bg-[#110603] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-[#fbf6ea]">{enq.guestName} - {enq.phone}</p>
                      <p className="text-xs text-[#9c8a74] mt-0.5">{enq.type} • तारीख: {enq.date} • {enq.guests} व्यक्ती</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#d4a853]/20 text-[#d4a853] border border-[#d4a853]/30">
                      {enq.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MENU & PRICING */}
        {activeTab === 'menu' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#d4a853] font-bold">MENU MANAGEMENT</p>
                <h1 className="text-2xl font-royal font-bold text-[#fbf6ea]">मेनू आणि दर व्यवस्थापन</h1>
              </div>
              <button
                onClick={() => setShowAddMenuModal(true)}
                className="px-4 py-2 rounded-xl bg-[#d4a853] text-[#120703] font-bold text-xs flex items-center gap-1.5 hover:brightness-110 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>नवीन डिश जोडा</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menu.map((dish) => (
                <div key={dish.id} className="p-4 rounded-xl bg-[#180803] border border-[#d4a853]/20 flex gap-3">
                  <img src={dish.image} alt={dish.name} className="w-20 h-20 rounded-lg object-cover bg-[#241008] shrink-0" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <p className="text-sm font-bold text-[#fbf6ea]">{dish.name}</p>
                        <span className="text-xs font-bold text-[#d4a853]">₹{dish.price}</span>
                      </div>
                      <p className="text-[11px] text-[#9c8a74]">{dish.category} • {dish.dietary}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                      <button
                        onClick={() => toggleDishAvailability(dish.id)}
                        className={`text-[10px] font-bold px-2 py-0.5 rounded cursor-pointer ${
                          dish.isAvailable ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' : 'bg-red-950 text-red-400 border border-red-500/30'
                        }`}
                      >
                        {dish.isAvailable ? 'उपलब्ध (Available)' : 'संपले (Sold Out)'}
                      </button>
                      <button
                        onClick={() => handleDeleteDish(dish.id)}
                        className="text-red-400 hover:text-red-300 p-1 cursor-pointer"
                        title="डिश डिलीट करा"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: BOOKINGS */}
        {activeTab === 'bookings' && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#d4a853] font-bold">RESERVATIONS &amp; LEADS</p>
              <h1 className="text-2xl font-royal font-bold text-[#fbf6ea]">आरक्षण व चौकशी नोंदणी</h1>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-3 text-[#9c8a74]" />
                <input
                  type="text"
                  placeholder="ग्राहक नाव किंवा फोन नंबरने शोधा..."
                  value={enquirySearch}
                  onChange={(e) => setEnquirySearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#180803] border border-[#d4a853]/25 text-xs text-[#fbf6ea] focus:outline-none focus:border-[#d4a853]"
                />
              </div>
              <select
                value={enquiryFilter}
                onChange={(e) => setEnquiryFilter(e.target.value)}
                className="px-4 py-2.5 rounded-xl bg-[#180803] border border-[#d4a853]/25 text-xs text-[#fbf6ea] focus:outline-none focus:border-[#d4a853]"
              >
                <option value="all">सर्व चौकशी</option>
                <option value="New">नवीन (New)</option>
                <option value="Contacted">संपर्क झाला (Contacted)</option>
                <option value="Confirmed">कन्फर्म (Confirmed)</option>
                <option value="Completed">पूर्ण (Completed)</option>
                <option value="Cancelled">रद्द (Cancelled)</option>
              </select>
            </div>

            {/* Table */}
            <div className="space-y-3">
              {filteredEnquiries.map((enq) => (
                <div key={enq.id} className="p-5 rounded-2xl bg-[#180803] border border-[#d4a853]/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#fbf6ea]">{enq.guestName}</span>
                      <a href={`tel:${enq.phone}`} className="text-xs font-semibold text-[#d4a853] hover:underline">
                        {enq.phone}
                      </a>
                    </div>
                    <p className="text-xs text-[#dcd0b7]">
                      {enq.type} • तारीख: <b className="text-white">{enq.date}</b> ({enq.time || 'संध्याकाळी'}) • {enq.guests} व्यक्ती
                    </p>
                    {enq.notes && (
                      <p className="text-[11px] text-[#9c8a74] italic">
                        माहिती: "{enq.notes}"
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={enq.status}
                      onChange={(e) => handleStatusChange(enq.id, e.target.value)}
                      className="px-2.5 py-1.5 rounded-lg bg-[#110603] border border-[#d4a853]/30 text-xs font-semibold text-[#fbf6ea]"
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>

                    <button
                      onClick={() => handleDeleteEnquiry(enq.id)}
                      className="p-2 rounded-lg bg-red-950/60 text-red-400 hover:bg-red-900 border border-red-500/30 cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: GALLERY */}
        {activeTab === 'gallery' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#d4a853] font-bold">GALLERY MANAGEMENT</p>
                <h1 className="text-2xl font-royal font-bold text-[#fbf6ea]">फोटो गॅलरी व्यवस्थापन</h1>
              </div>
              <button
                onClick={() => setShowAddPhotoModal(true)}
                className="px-4 py-2 rounded-xl bg-[#d4a853] text-[#120703] font-bold text-xs flex items-center gap-1.5 hover:brightness-110 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>फोटो जोडा</span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {photos.map((p) => (
                <div key={p.id} className="relative aspect-4/3 rounded-xl overflow-hidden border border-[#d4a853]/25 group bg-[#180803]">
                  <img src={p.url} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-[#d4a853] uppercase">{p.category}</span>
                      <p className="text-xs font-semibold text-white">{p.title}</p>
                    </div>
                    <button
                      onClick={() => handleDeletePhoto(p.id)}
                      className="self-end p-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700 cursor-pointer"
                      title="Delete photo"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: PROFILE SETTINGS */}
        {activeTab === 'profile' && (
          <div className="space-y-6 animate-fadeIn max-w-2xl">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#d4a853] font-bold">SETTINGS &amp; DETAILS</p>
              <h1 className="text-2xl font-royal font-bold text-[#fbf6ea]">हॉटेल प्रोफाईल माहिती</h1>
            </div>

            <form onSubmit={handleProfileSave} className="p-6 rounded-2xl bg-[#180803] border border-[#d4a853]/20 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#d4a853] mb-1">हॉटेल नाव</label>
                <input
                  type="text"
                  value={profile.hotelName}
                  onChange={(e) => setProfile({ ...profile, hotelName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#110603] border border-[#d4a853]/30 text-xs text-[#fbf6ea]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#d4a853] mb-1">टॅगलाईन (Tagline)</label>
                <input
                  type="text"
                  value={profile.tagline}
                  onChange={(e) => setProfile({ ...profile, tagline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#110603] border border-[#d4a853]/30 text-xs text-[#fbf6ea]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#d4a853] mb-1">फोन नंबर</label>
                  <input
                    type="text"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#110603] border border-[#d4a853]/30 text-xs text-[#fbf6ea]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#d4a853] mb-1">WhatsApp नंबर</label>
                  <input
                    type="text"
                    value={profile.whatsapp}
                    onChange={(e) => setProfile({ ...profile, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#110603] border border-[#d4a853]/30 text-xs text-[#fbf6ea]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#d4a853] mb-1">पत्ता (Address)</label>
                <input
                  type="text"
                  value={profile.address}
                  onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#110603] border border-[#d4a853]/30 text-xs text-[#fbf6ea]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#d4a853] mb-1">Google Review URL</label>
                <input
                  type="text"
                  value={profile.googleReviewUrl}
                  onChange={(e) => setProfile({ ...profile, googleReviewUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#110603] border border-[#d4a853]/30 text-xs text-[#fbf6ea]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4a853] to-[#aa7c26] text-[#120703] font-bold text-xs tracking-wide shadow-md hover:brightness-110 cursor-pointer"
              >
                माहिती सेव्ह करा
              </button>
            </form>
          </div>
        )}

      </main>

      {/* Modal: Add Menu Item */}
      {showAddMenuModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#180803] p-6 rounded-2xl border-2 border-[#d4a853]/40 w-full max-w-md space-y-4">
            <h3 className="text-lg font-bold font-royal text-[#fbf6ea]">नवीन डिश जोडा</h3>
            <form onSubmit={handleAddDish} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#d4a853] mb-1">डिश नाव *</label>
                <input
                  required
                  type="text"
                  value={newDish.name}
                  onChange={(e) => setNewDish({ ...newDish, name: e.target.value })}
                  placeholder="उदा. Butter Chicken, Paneer Masala"
                  className="w-full px-3 py-2 rounded-lg bg-[#110603] border border-[#d4a853]/30 text-xs text-[#fbf6ea]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#d4a853] mb-1">मराठी नाव</label>
                <input
                  type="text"
                  value={newDish.marathiName}
                  onChange={(e) => setNewDish({ ...newDish, marathiName: e.target.value })}
                  placeholder="उदा. स्पेशल चिकन थाळी"
                  className="w-full px-3 py-2 rounded-lg bg-[#110603] border border-[#d4a853]/30 text-xs text-[#fbf6ea]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#d4a853] mb-1">कॅटेगरी</label>
                  <select
                    value={newDish.category}
                    onChange={(e) => setNewDish({ ...newDish, category: e.target.value })}
                    className="w-full px-2.5 py-2 rounded-lg bg-[#110603] border border-[#d4a853]/30 text-xs text-[#fbf6ea]"
                  >
                    <option value="Special Thali">Special Thali</option>
                    <option value="Veg Special">Veg Special</option>
                    <option value="Non-Veg Special">Non-Veg Special</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Desserts">Desserts</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#d4a853] mb-1">किंमत (₹) *</label>
                  <input
                    required
                    type="number"
                    value={newDish.price}
                    onChange={(e) => setNewDish({ ...newDish, price: e.target.value })}
                    placeholder="250"
                    className="w-full px-3 py-2 rounded-lg bg-[#110603] border border-[#d4a853]/30 text-xs text-[#fbf6ea]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#d4a853] mb-1">डिश माहिती</label>
                <input
                  type="text"
                  value={newDish.description}
                  onChange={(e) => setNewDish({ ...newDish, description: e.target.value })}
                  placeholder="अस्सल चवदार ग्रेव्ही, गरमागरम चपातीसोबत..."
                  className="w-full px-3 py-2 rounded-lg bg-[#110603] border border-[#d4a853]/30 text-xs text-[#fbf6ea]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddMenuModal(false)}
                  className="px-4 py-2 rounded-lg bg-white/10 text-xs font-semibold text-white cursor-pointer"
                >
                  रद्द करा
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#d4a853] text-[#120703] font-bold text-xs cursor-pointer"
                >
                  डिश सेव्ह करा
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Add Photo */}
      {showAddPhotoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#180803] p-6 rounded-2xl border-2 border-[#d4a853]/40 w-full max-w-md space-y-4">
            <h3 className="text-lg font-bold font-royal text-[#fbf6ea]">नवीन फोटो जोडा</h3>
            <form onSubmit={handleAddPhoto} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#d4a853] mb-1">फोटो शीर्षक</label>
                <input
                  type="text"
                  value={newPhoto.title}
                  onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
                  placeholder="उदा. डायनिंग हॉल, स्पेशल थाळी"
                  className="w-full px-3 py-2 rounded-lg bg-[#110603] border border-[#d4a853]/30 text-xs text-[#fbf6ea]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#d4a853] mb-1">कॅटेगरी</label>
                <select
                  value={newPhoto.category}
                  onChange={(e) => setNewPhoto({ ...newPhoto, category: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-lg bg-[#110603] border border-[#d4a853]/30 text-xs text-[#fbf6ea]"
                >
                  <option value="Hotel">Hotel / Ambience</option>
                  <option value="Hall">Hall / Events</option>
                  <option value="Special Thali">Special Thali</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#d4a853] mb-1">फोटो URL किंवा फाईल पाथ *</label>
                <input
                  required
                  type="text"
                  value={newPhoto.url}
                  onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
                  placeholder="/rajvada-entrance.webp किंवा image URL"
                  className="w-full px-3 py-2 rounded-lg bg-[#110603] border border-[#d4a853]/30 text-xs text-[#fbf6ea]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddPhotoModal(false)}
                  className="px-4 py-2 rounded-lg bg-white/10 text-xs font-semibold text-white cursor-pointer"
                >
                  रद्द करा
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#d4a853] text-[#120703] font-bold text-xs cursor-pointer"
                >
                  फोटो सेव्ह करा
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

