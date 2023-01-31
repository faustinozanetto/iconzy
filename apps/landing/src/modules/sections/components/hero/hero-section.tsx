import { EDITOR_ENDPOINT } from '@lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from 'ui';

import StyledBackground from '../../../common/components/styled-background';

const HeroSection: React.FC = () => {
  return (
    <div className="backdrop-blur-md">
      <StyledBackground className="absolute inset-x-0 bottom-0 z-[-1] min-h-screen" />
      <section className="container mx-auto flex flex-col justify-between bg-transparent px-4 pt-32 md:px-8 md:pt-40">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-neutral-50 md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.15, duration: 0.35 }}
          >
            Browse
            <span className="hero-sub-title relative mx-2 leading-tight text-neutral-900 after:absolute after:-z-10 after:bg-cover after:bg-no-repeat after:content-['']">
              10000+
            </span>{' '}
            <br />
            icons for free now
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl font-medium text-neutral-100 md:text-xl"
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.25, duration: 0.35 }}
          >
            Enhance your design projects with a wide selection of high-quality icons. Whether you&apos;re creating a
            website, mobile app, these icons will bring your work to the next level.
          </motion.p>
          <motion.div
            className="mt-4 w-full md:mt-6"
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.35, duration: 0.35 }}
          >
            <Link href={EDITOR_ENDPOINT}>
              <Button colorScheme="plain" size="lg" className="shadow-md">
                Start browsing
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="mt-6 md:mt-10"
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.45, duration: 0.35 }}
        >
          <Image
            src="/images/hero-thumbnail.png"
            alt="hero"
            width={1500}
            height={1500}
            priority
            className="rounded-t-xl"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;
