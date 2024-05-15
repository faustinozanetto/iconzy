import React from 'react';
import StyledBackground from '../../styled-background';
import { Input } from '@iconzy/ui';
import { Button } from '@iconzy/ui';

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-background px-4 py-16 pb-8 md:px-8 md:py-24">
      <div className="container mx-auto flex max-w-5xl flex-wrap">
        <div className="flex h-full w-full flex-col overflow-hidden rounded-md p-4 shadow-xl backdrop-blur-md md:flex-row gap-4 md:p-12">
          <StyledBackground className="absolute inset-0 z-[-1]" />
          <div className="flex w-full flex-col relative z-50">
            <h3 className="text-2xl font-bold text-background md:text-3xl">Newsletter</h3>
            <p className="leading-snug text-background">
              Sign up for our newsletter and get weekly updates. We only send emails about our updates and news.
            </p>
          </div>
          <div className="flex w-full flex-col space-y-2">
            <Input id="newsletter-email" placeholder="youremail@mail.com" />
            <Button size="lg">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
