import IconPacksBrowser from '@modules/icons/components/icon-pack/browser/icon-packs-browser';
import { getAllIconPacks, getFeaturedIconsFromIconPack } from '@modules/icons/lib/icons-utils';
import type { IconPackWithFeatured } from '@modules/icons/typings/icon.typings';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import type { GetStaticProps } from 'next';
import React from 'react';

type IconPacksPageProps = {
  /** All the available icon packs with their featured icons. */
  iconPacks: IconPackWithFeatured[];
};

const IconPacksPage: React.FC<IconPacksPageProps> = (props) => {
  const { iconPacks } = props;

  return (
    <BaseLayout
      headProps={{
        title: 'Icon Packs | Iconzy',
        description:
          'Iconzy is a personal project for customizing and browsing free icon packs for your personal projects.',
        url: 'https://iconzy.vercel.app/icons',
        canonicalUrl: 'https://iconzy.vercel.app/icons',
      }}
    >
      <IconPacksBrowser iconPacks={iconPacks} />
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const iconPacks: IconPackWithFeatured[] = getAllIconPacks().map((iconPack) => {
    return {
      metadata: iconPack,
      featuredIcons: getFeaturedIconsFromIconPack(iconPack),
    };
  });

  return {
    props: {
      iconPacks,
    },
  };
};

export default IconPacksPage;
