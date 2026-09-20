import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { MenuSection } from './components/MenuSection';
import { ReelsSection } from './components/ReelsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { StickyWhatsApp } from './components/StickyWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ny-bg text-ny-cream font-sans selection:bg-ny-gold selection:text-ny-bg">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About the Restaurant */}
        <AboutSection />

        {/* 3. Our Signature Specialties */}
        <SpecialtiesSection />

        {/* 4. Complete Featured Menu with Filters */}
        <MenuSection />

        {/* 5. Real Instagram Video Reels Showcase */}
        <ReelsSection />

        {/* 6. Restaurant Experience & Celebrations */}
        <ExperienceSection />

        {/* 6. Lightbox Gallery */}
        <GallerySection />

        {/* 7. Reservations Engine */}
        <ReservationSection />

        {/* 8. Location & Business Hours in Turbo */}
        <LocationSection />

        {/* 9. Instagram Showcase */}
        <InstagramSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Sticky WhatsApp Floating Assistant */}
      <StickyWhatsApp />
    </div>
  );
};

export default App;
