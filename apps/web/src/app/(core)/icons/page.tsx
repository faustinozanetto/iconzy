import React from 'react';
import IconPacksBrowser from '@modules/icons/components/icon-pack/browser/icon-packs-browser';
import { getAllIconPacks, getFeaturedIconsFromIconPack } from '@modules/icons/lib/icons-utils';
import type { IconPackWithFeatured } from '@modules/icons/typings/icon.typings';

const IconPacksPage: React.FC = () => {
  const iconPacks: IconPackWithFeatured[] = getAllIconPacks().map((iconPack) => {
    return {
      metadata: iconPack,
      featuredIcons: getFeaturedIconsFromIconPack(iconPack),
    };
  });

  return (
    <section className="flex flex-col gap-4">
      <IconPacksBrowser iconPacks={iconPacks} />
    </section>
  );
};

export default IconPacksPage;
