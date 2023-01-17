import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';
import type { Icon, IconPackWithFeatured } from '@modules/icons/typings/icon.typings';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { Button } from 'ui';

type IconPackCardProps = {
  iconPack: IconPackWithFeatured;
};

type FeaturedIconProps = {
  icon: Icon;
  requiresFill: boolean;
  defaultWidth: number;
};

const FeaturedIcon: React.FC<FeaturedIconProps> = (props) => {
  const { icon, requiresFill, defaultWidth } = props;

  return getSVGSourceIntoComponent(
    icon.source,
    requiresFill,
    {
      size: 25,
      color: '#000',
      width: defaultWidth,
    },
    clsx(requiresFill ? 'featured-icon-fill' : 'featured-icon')
  );
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

  const licenseType = iconPack.metadata.source.license.type;

  return (
    <div
      key={iconPack.metadata.name}
      className="group flex cursor-pointer flex-col space-y-2 rounded-lg border-[1px] border-neutral-300 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <h2 className="text-xl font-semibold leading-snug tracking-tight">
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
      <div className="grid grid-cols-7 gap-3.5 rounded-md border-[1px] border-neutral-300 bg-neutral-100 p-2 dark:border-neutral-700 dark:bg-neutral-900">
        {iconPack.featuredIcons.map((icon, index) => (
          <FeaturedIcon
            key={`icon-${index}`}
            icon={icon}
            requiresFill={iconPack.metadata.requiresFill}
            defaultWidth={iconPack.metadata.defaultWidth}
          />
        ))}
      </div>
      <div className="w-full space-y-2">
        <div className="flex justify-between font-medium">
          <p>Icon Count</p>
          <span>{iconPack.metadata.iconsCount}</span>
        </div>
        <div className="flex justify-between font-medium">
          <p>License Type</p>
          <span>{licenseType}</span>
        </div>
      </div>
      <Link className="w-full pt-4" href={`/icons/${iconPack.metadata.name}`}>
        <Button className="w-full">Explore More</Button>
      </Link>
    </div>
  );
};

export default IconPackCard;
