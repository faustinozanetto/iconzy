import StyledBackground from '@modules/common/components/styled-background';
import { m } from 'framer-motion';
import React from 'react';
import { Button, TextInput } from 'ui';

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-neutral-50 px-4 py-16 pb-8 md:px-8 md:py-24">
      <div className="container mx-auto flex max-w-5xl flex-wrap">
        <div className="flex h-full w-full flex-col space-y-3 overflow-hidden rounded-md p-4 shadow-xl backdrop-blur-md md:!flex-row md:!p-12">
          <StyledBackground className="absolute inset-0 z-[-1]" />
          <div className="flex w-full flex-col space-y-2">
            <m.h3
              className="text-2xl font-bold text-neutral-50 md:text-3xl"
              initial={{ opacity: 0, translateY: -20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.35 }}
            >
              Newsletter
            </m.h3>
            <m.p
              className="leading-snug text-neutral-50 md:text-lg"
              initial={{ opacity: 0, translateY: -20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
            >
              Sign up for our newsletter and get weekly updates. We only send emails about our updates and news.
            </m.p>
          </div>
          <m.div
            className="flex w-full flex-col space-y-2"
            initial={{ opacity: 0, translateX: 20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
          >
            <TextInput id="newsletter-email" placeholder="youremail@mail.com" onValueChanged={() => {}} />
            <Button colorScheme="plain" size="lg">
              Subscribe
            </Button>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
