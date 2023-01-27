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
  {
    name: 'Box Icons',
    slug: 'box-icons',
  },
];

const IconPacksSection: React.FC = () => {
  return (
    <section className="bg-neutral-50 px-4 pt-20 pb-8 md:px-8 lg:pt-[120px] lg:pb-[70px]">
      <div className="container mx-auto flex max-w-5xl flex-wrap">
        {/* Top Content */}
        <div className="lg:mb-18 mb-10 w-full max-w-2xl">
          <span className="text-primary-900 mb-2 block text-lg font-bold">Icon Packs</span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-[42px]">Featured Icon Packs</h2>
          <p className="text-lg leading-relaxed sm:text-xl sm:leading-relaxed">
            Search multiple icon packs with loads of icons to download and customize with just a few clicks.
          </p>
        </div>
        {/* Bottom Content */}
        <div className="grid w-full justify-center gap-4 md:grid-cols-2 lg:grid-cols-4">
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
