
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProfiles from '@/components/FeaturedProfiles';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProfiles />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
