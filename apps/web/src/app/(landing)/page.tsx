import React from 'react';

import HeroSection from '@modules/landing/components/sections/hero/hero-section';
import FeaturesSection from '@modules/landing/components/sections/features/features-section';
import IconPacksSection from '@modules/landing/components/sections/icon-packs/icon-packs-section';
import NewsletterSection from '@modules/landing/components/sections/newsletter/newsletter-section';

const HomePage: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <HeroSection />
      <FeaturesSection />
      <IconPacksSection />
      <NewsletterSection />
    </section>
  );
};

export default HomePage;
