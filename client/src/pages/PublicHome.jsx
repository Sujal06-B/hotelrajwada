import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import AboutSection from '../components/AboutSection.jsx';
import MenuSection from '../components/MenuSection.jsx';
import HallSection from '../components/HallSection.jsx';
import GallerySection from '../components/GallerySection.jsx';
import StaffSection from '../components/StaffSection.jsx';
import ReviewsSection from '../components/ReviewsSection.jsx';
import BranchesSection from '../components/BranchesSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import Footer from '../components/Footer.jsx';
import Lightbox from '../components/Lightbox.jsx';
import FloatingWidgets from '../components/FloatingWidgets.jsx';

import { defaultProfile, defaultMenu, defaultPhotos } from '../data/defaultData.js';

export default function PublicHome() {
  const [profile, setProfile] = useState(defaultProfile);
  const [menu, setMenu] = useState(defaultMenu);
  const [photos, setPhotos] = useState(defaultPhotos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    // Fetch live updates from API if available
    const fetchData = async () => {
      try {
        const profRes = await fetch('/api/profile');
        if (profRes.ok) {
          const profData = await profRes.json();
          if (profData.data) setProfile(profData.data);
        }
      } catch (e) {
        // Fallback to default
      }

      try {
        const menuRes = await fetch('/api/menu');
        if (menuRes.ok) {
          const menuData = await menuRes.json();
          if (menuData.data && menuData.data.length > 0) setMenu(menuData.data);
        }
      } catch (e) {
        // Fallback to default
      }

      try {
        const photoRes = await fetch('/api/photos');
        if (photoRes.ok) {
          const photoData = await photoRes.json();
          if (photoData.data && photoData.data.length > 0) setPhotos(photoData.data);
        }
      } catch (e) {
        // Fallback to default
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#1e293b] flex flex-col justify-between">
      <Navbar profile={profile} />
      
      <main>
        <Hero profile={profile} />
        <AboutSection profile={profile} />
        <MenuSection profile={profile} onSelectPhoto={setSelectedPhoto} />
        <HallSection profile={profile} />
        <GallerySection photos={photos} onSelectPhoto={setSelectedPhoto} />
        <StaffSection />
        <ReviewsSection profile={profile} onSelectPhoto={setSelectedPhoto} />
        <BranchesSection profile={profile} />
        <ContactSection profile={profile} />
      </main>

      <Footer profile={profile} />

      <Lightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      <FloatingWidgets profile={profile} />
    </div>
  );
}

