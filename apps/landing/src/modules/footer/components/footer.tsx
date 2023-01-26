import { EDITOR_ENDPOINT } from '@lib/constants';
import Logo from '@modules/marketing/components/logo';
import React from 'react';
import FooterCategory, { FooterCategoryProps } from './footer-category';

const CATEGORIES: FooterCategoryProps[] = [
  {
    category: 'Company',
    links: [
      {
        title: 'Legal',
        href: '/legal',
      },
      {
        title: 'Terms',
        href: '/terms',
      },
      {
        title: 'Conditions',
        href: '/conditions',
      },
    ],
  },
  {
    category: 'Pages',
    links: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'Editor',
        href: EDITOR_ENDPOINT,
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex p-4 md:p-6 lg:p-8">
      <div className="container mx-auto max-w-5xl py-4 md:py-6 lg:py-10">
        <div className="flex flex-col w-full space-y-4">
          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Logo Column */}
            <Logo />
            {CATEGORIES.map((category) => {
              return <FooterCategory key={category.category} {...category} />;
            })}
          </div>
          <span className="font-medium text-neutral-100">© 2023 Faustino Zanetto. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
