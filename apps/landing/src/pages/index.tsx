import BaseLayout from '@modules/layouts/components/base/base-layout';
import FeaturesSection from '@modules/sections/components/features/features-section';
import HeroSection from '@modules/sections/components/hero/hero-section';
// import HowToSection from '@modules/sections/components/how-to/how-to-section';
import IconPacksSection from '@modules/sections/components/icon-packs/icon-packs-section';
import NewsletterSection from '@modules/sections/components/newsletter/newsletter-section';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <BaseLayout
      headProps={{
        title: 'Home | Iconzy',
        description:
          'Iconzy is a personal project for customizing and browsing free icon packs for your personal projects.',
        url: 'https://iconzy.vercel.app',
        canonicalUrl: 'https://iconzy.vercel.app',
      }}
    >
      <HeroSection />
      <FeaturesSection />
      <IconPacksSection />
      {/* <HowToSection /> */}
      <NewsletterSection />
    </BaseLayout>
  );
};

export default HomePage;
