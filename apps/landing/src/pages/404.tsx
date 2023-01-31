import BaseLayout from '@modules/layouts/components/base/base-layout';
import Link from 'next/link';
import React from 'react';
import { Button } from 'ui';

const NotFoundPage: React.FC = () => {
  return (
    <BaseLayout
      headProps={{
        title: 'Not Found | Iconzy',
        description:
          'Iconzy is a personal project for customizing and browsing free icon packs for your personal projects.',
        url: 'https://iconzy.vercel.app',
        canonicalUrl: 'https://iconzy.vercel.app',
      }}
    >
      <section className="container mx-auto mb-auto mt-10 flex flex-col  items-center justify-center px-4 md:mt-20 lg:mt-36">
        <div className="flex flex-col space-y-4 text-center text-neutral-50">
          {/* Titles */}
          <div className="leading-tight">
            <h1 className="text-4xl font-bold md:text-5xl">It looks like the page you requested </h1>
            <span className="text-4xl font-bold text-neutral-900 md:text-5xl">does not exist!</span>
          </div>

          {/* Paragraph */}
          <p className="text-base md:text-lg">
            If you think that this is a mistakan error, please contact me to report the issue and help me make the site
            better, thanks :).
          </p>
          {/* Buttons */}
          <div className="w-full">
            <Link href="/" className="w-fit">
              <Button className="w-full md:!w-40" size="lg">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default NotFoundPage;
