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
        title: 'Editor | Iconozen',
        description: 'Iconozen is a page for downloading and customizing svg icons for your projects.',
        url: 'https://iconozen.app',
        canonicalUrl: 'https://iconozen.app',
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
