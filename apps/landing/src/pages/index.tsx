import BaseLayout from '@modules/layouts/components/base/base-layout';
import HeroSection from '@modules/sections/hero/hero-section';
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
    </BaseLayout>
  );
};

export default HomePage;
