import BaseLayout from '@modules/layouts/components/base/base-layout';
import { GetStaticProps } from 'next';
import { IconPackWithFeatured } from '@modules/icons/typings/icon.typings';
import React from 'react';
import { getAllIconPacks, getFeaturedIconsFromIconPack } from '@modules/icons/lib/icons-utils';
import IconPacksBrowser from '@modules/icons/components/icon-pack/browser/icon-packs-browser';

type IconPacksPageProps = {
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

export const getStaticProps: GetStaticProps = (context) => {
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
