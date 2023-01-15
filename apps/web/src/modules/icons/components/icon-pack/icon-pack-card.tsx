import React from 'react';
import Link from 'next/link';
import { Icon, IconPackWithFeatured } from '@modules/icons/typings/icon.typings';
import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';
import clsx from 'clsx';
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

  return (
    <div
      key={iconPack.metadata.name}
      className="flex rounded-lg justify-center items-center flex-col p-4 space-y-2 bg-neutral-50 border-neutral-300 border-[1px] dark:bg-neutral-800 dark:border-neutral-700 hover:scale-105 transition-transform"
    >
      <h2 className="text-xl font-semibold">{generateIconPackTitle()}</h2>
      <div className="grid gap-4 p-2 bg-neutral-100 dark:bg-neutral-900 border-neutral-300 border-[1px] dark:border-neutral-700 rounded-md grid-cols-7">
        {iconPack.featuredIcons.map((icon, index) => (
          <FeaturedIcon
            key={`icon-${index}`}
            icon={icon}
            requiresFill={iconPack.metadata.requiresFill}
            defaultWidth={iconPack.metadata.defaultWidth}
          />
        ))}
      </div>
      <div className="w-full space-y-4">
        <div className="flex justify-between font-semibold">
          <p>Icon Count</p>
          <span>{iconPack.metadata.iconsCount}</span>
        </div>
      </div>
      <Link className="w-full pt-4" href={`/icons/${iconPack.metadata.name}`}>
        <Button className="w-full">Explore More</Button>
      </Link>
    </div>
  );
};

export default IconPackCard;
