import BaseLayout from '@modules/layouts/components/base/base-layout';
import React from 'react';

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
    ></BaseLayout>
  );
};

export default NotFoundPage;
