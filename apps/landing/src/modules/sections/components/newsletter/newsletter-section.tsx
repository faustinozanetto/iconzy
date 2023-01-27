import StyledBackground from '@modules/common/components/styled-background';
import React from 'react';
import { Button, TextInput } from 'ui';

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-neutral-50 px-4 py-16 pb-8 md:px-8 md:py-24">
      <div className="container mx-auto flex max-w-5xl flex-wrap">
        <div className="flex h-full w-full flex-col space-y-3 overflow-hidden rounded-md p-4 backdrop-blur-md md:!flex-row md:!p-12">
          <StyledBackground className="absolute inset-0 z-[-1]" />
          <div className="flex w-full flex-col space-y-2">
            <h3 className="text-3xl font-bold text-neutral-50 md:text-2xl">Newsletter</h3>
            <p className="text-lg leading-snug text-neutral-50">
              Sign up for our newsletter and get weekly updates. We only send emails about our updates and news.
            </p>
          </div>
          <div className="flex w-full flex-col space-y-2">
            <TextInput id="newsletter-email" placeholder="youremail@mail.com" onValueChanged={() => {}} />
            <Button colorScheme="plain" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
