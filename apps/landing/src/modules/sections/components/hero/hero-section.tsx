import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from 'ui';
import { EDITOR_ENDPOINT } from '@lib/constants';
import HeroBackground from './hero-background';

const HeroSection: React.FC = () => {
  return (
    <div className="backdrop-blur-md">
      <HeroBackground />
      <section className="relative container overflow-hidden mx-auto pt-32 px-4 md:px-8 md:pt-40 bg-transparent">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-50 sm:text-5xl md:text-6xl lg:text-7xl">
            Browse <span className="text-neutral-900">10000+</span> <br />
            icons for free now
          </h1>
          <p className="mt-4 text-lg max-w-2xl text-neutral-50 opacity-90 font-medium md:text-xl">
            Enhance your design projects with a wide selection of high-quality icons. Whether you&apos;re creating a
            website, mobile app, these icons will bring your work to the next level.
          </p>
          <div className="mt-4 md:mt-6 w-full">
            <Link href={EDITOR_ENDPOINT} target="_blank">
              <Button colorScheme="plain" size="xl" className="shadow-md">
                Start browsing
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <Image
            src="/images/hero-thumbnail.png"
            alt="hero"
            width={1000}
            height={1000}
            priority
            className="mx-auto max-w-full rounded-t-xl"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
