import type { IconPackWithFeatured } from '@modules/icons/typings/icon.typings';
import Link from 'next/link';
import React from 'react';
import { Button } from '@iconzy/ui';

import IconPackCardAttribute from './icon-pack-card-attribute';
import IconPackCardFeaturedIcons from './icon-pack-card-featured-icons';

type IconPackCardProps = {
  /** Icon pack data */
  iconPack: IconPackWithFeatured;
};

const IconPackCard: React.FC<IconPackCardProps> = (props) => {
  const { iconPack } = props;

  const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

  const generateIconPackTitle = () => {
    return iconPack.metadata.name
      .split('-')
      .map((word) => capitalize(word))
      .join(' ');
  };

  return (
    <div className="group flex cursor-pointer flex-col space-y-2 rounded-lg border p-4 shadow">
      <h2 className="text-lg font-medium leading-snug tracking-tight md:text-xl">
        <span
          className="from-primary to-secondar bg-gradient-to-r
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_10px] group-hover:bg-[length:100%_10px]"
        >
          {generateIconPackTitle()}
        </span>
      </h2>
      <IconPackCardFeaturedIcons featuredIcons={iconPack.featuredIcons} type={iconPack.metadata.type} />
      <div className="w-full space-y-2">
        <IconPackCardAttribute name="Icon Count">{iconPack.metadata.iconsCount}</IconPackCardAttribute>
        <IconPackCardAttribute name="License Type">{iconPack.metadata.source.license.type}</IconPackCardAttribute>
      </div>
      <Button asChild>
        <Link className="w-full" href={`/icons/${iconPack.metadata.name}`}>
          Explore More
        </Link>
      </Button>
    </div>
  );
};

export default IconPackCard;
