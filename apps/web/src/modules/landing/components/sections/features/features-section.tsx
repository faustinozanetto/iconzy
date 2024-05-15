'use client';

import { motion } from 'framer-motion';
import React from 'react';

import FeatureCard, { FeatureCardProps } from './feature-card';

const FEATURES: FeatureCardProps['data'][] = [
  {
    title: 'Icon Packs',
    text: 'Transform your designs with the versatile and stylish icon packs.',
    icon: (
      <svg
        className="h-7 w-7 stroke-current md:h-9 md:w-9"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="21 8 21 21 3 21 3 8" />
        <rect x="1" y="3" width="22" height="5" />
        <line x1="10" y1="12" x2="14" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Icon Customization',
    text: 'Customize your designs with our customizable editor.',
    icon: (
      <svg
        className="h-7 w-7 fill-current md:h-9 md:w-9"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 13a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm2.75-7.17A5 5 0 0 0 13 7.1v-3a7.94 7.94 0 0 1 3.9 1.62zM11 7.1a5 5 0 0 0-1.75.73L7.1 5.69A7.94 7.94 0 0 1 11 4.07zM7.83 9.25A5 5 0 0 0 7.1 11h-3a7.94 7.94 0 0 1 1.59-3.9zM7.1 13a5 5 0 0 0 .73 1.75L5.69 16.9A7.94 7.94 0 0 1 4.07 13zm2.15 3.17a5 5 0 0 0 1.75.73v3a7.94 7.94 0 0 1-3.9-1.62zm3.75.73a5 5 0 0 0 1.75-.73l2.15 2.14a7.94 7.94 0 0 1-3.9 1.62zm3.17-2.15A5 5 0 0 0 16.9 13h3a7.94 7.94 0 0 1-1.62 3.9zM16.9 11a5 5 0 0 0-.73-1.75l2.14-2.15a7.94 7.94 0 0 1 1.62 3.9z" />
      </svg>
    ),
  },
  {
    title: 'Icon Download',
    text: 'Download the icons in multiple formats and easily integrate them.',
    icon: (
      <svg
        className="h-7 w-7 fill-current md:h-9 md:w-9"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 16 4-5h-3V4h-2v7H8z" />
        <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z" />
      </svg>
    ),
  },
  {
    title: 'Icon Search',
    text: 'Find the icons that suit your need with a few clicks.',
    icon: (
      <svg
        className="h-7 w-7 fill-current md:h-9 md:w-9"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
        <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z" />
      </svg>
    ),
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-background px-4 pt-20 pb-8 md:px-8 lg:pt-[120px] lg:pb-[70px]">
      <div className="container mx-auto flex max-w-5xl flex-wrap">
        {/* Top Content */}
        <div className="lg:mb-18 mb-10 w-full max-w-2xl">
          <span className="text-primary mb-2 block text-lg font-bold">Features</span>
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Main Features</h2>
          <p className="text-body-color leading-relaxed md:text-xl md:leading-relaxed">
            Customizable icons in multiple formats for easy integration and endless design possibilities.
          </p>
        </div>
        {/* Bottom Content */}
        <div className="grid w-full justify-center gap-4 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.25 }}
              >
                <FeatureCard data={feature} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
