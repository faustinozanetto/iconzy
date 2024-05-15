import type { SiteConfig } from './types/config.types';

export const siteConfig: SiteConfig = {
  name: 'Iconzy',
  description: 'Iconzy is a personal project for customizing and browsing free icon packs for your personal projects.',
  url: process.env.NEXT_PUBLIC_URL as string,
  keywords: ['gardentify', 'plants', 'garden', 'management', 'gardening', 'tracking'],
};
