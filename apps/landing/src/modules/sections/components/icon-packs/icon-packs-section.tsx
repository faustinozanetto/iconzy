import { motion } from 'framer-motion';
import React from 'react';

import FeaturedIconPackCard, { FeaturedIconPackCardProps } from './featured-icon-pack-card';

const FEATURED_ICON_PACKS: FeaturedIconPackCardProps['data'][] = [
  {
    name: 'Feather Icons',
    slug: 'feather-icons',
  },
  {
    name: 'Remix Icons',
    slug: 'remix-icons',
  },
  {
    name: 'Akar Icons',
    slug: 'akar-icons',
  },
];

const IconPacksSection: React.FC = () => {
  return (
    <section className="bg-primary-800 px-4 pb-20 pt-8 md:px-8 lg:pb-[120px] lg:pt-[70px]">
      <div className="container mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Top Content */}
        <div className="lg:mb-18 mb-10 w-full max-w-2xl">
          <h2 className="mb-4 text-4xl font-extrabold text-neutral-50 md:text-5xl">Featured Icon Packs</h2>
          <p className="text-lg text-neutral-100 sm:text-xl">
            Search multiple icon packs with loads of icons to download and customize with just a few clicks.
          </p>
        </div>
        {/* Bottom Content */}
        <div className="grid w-full justify-center gap-4 md:grid-cols-3">
          {FEATURED_ICON_PACKS.map((iconPack, index) => {
            return (
              <motion.div
                key={iconPack.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.25 }}
              >
                <FeaturedIconPackCard data={iconPack} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IconPacksSection;
