import BaseLayout from '@modules/layouts/components/base/base-layout';
import { GetStaticProps } from 'next';
import { IconPackWithFeatured } from '@modules/icons/typings/editor.typings';
import { useIconsContext } from '@modules/icons/context/icons-context';
import React from 'react';
import IconPackCard from '@modules/icons/components/icon-pack/icon-pack-card';
import { getAllIconPacks, getFeaturedIconsFromIconPack } from '@modules/icons/lib/icons-utils';

type IconPacksPageProps = {
  iconPacks: IconPackWithFeatured[];
};

const IconPacksPage: React.FC<IconPacksPageProps> = (props) => {
  const { iconPacks } = props;
  const { dispatch } = useIconsContext();

  return (
    <BaseLayout
      headProps={{
        title: 'Editor | Iconozen',
        description: 'Iconozen is a page for downloading and customizing svg icons for your projects.',
        url: 'https://iconozen.app',
        canonicalUrl: 'https://iconozen.app',
      }}
    >
      <div className="flex gap-4 p-4">
        {iconPacks.map((iconPack) => {
          return <IconPackCard key={iconPack.metadata.slug} iconPack={iconPack} />;
        })}
      </div>
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
