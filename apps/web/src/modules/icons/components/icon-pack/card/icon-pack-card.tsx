import type { IconPackWithFeatured } from '@modules/icons/typings/icon.typings';
import Link from 'next/link';
import React from 'react';
import { Button } from 'ui';

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
    <div className="group flex cursor-pointer flex-col space-y-2 rounded-lg border-[1px] border-neutral-300 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
      <h2 className="mb-2 text-lg font-semibold leading-snug tracking-tight md:text-xl">
        <span
          className="from-primary-300 to-primary-200 dark:from-primary-600 dark:to-primary-800 bg-gradient-to-r
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
      <Link className="w-full pt-4" href={`/icons/${iconPack.metadata.name}`}>
        <Button className="w-full">Explore More</Button>
      </Link>
    </div>
  );
};

export default IconPackCard;
