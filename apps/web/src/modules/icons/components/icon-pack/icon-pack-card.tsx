import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';
import type { Icon, IconPackWithFeatured } from '@modules/icons/typings/icon.typings';
import clsx from 'clsx';
import { IconPack } from 'icons-fetching';
import Link from 'next/link';
import React from 'react';
import { Button } from 'ui';

type IconPackCardProps = {
  /** Icon pack data */
  iconPack: IconPackWithFeatured;
};

type FeaturedIconProps = {
  /** Featured icon data */
  icon: Icon;
  /** Wether the icon requires fill or not */
  type: IconPack['type'];
};

const FeaturedIcon: React.FC<FeaturedIconProps> = (props) => {
  const { icon, type } = props;

  const source = getSVGSourceIntoComponent(
    icon.source,
    type,
    clsx(type === 'fill' ? 'featured-icon-fill' : 'featured-icon')
  );

  return source;
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
    <div className="group flex cursor-pointer flex-col space-y-2 rounded-lg border-[1px] border-neutral-300 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
      <h2 className="mb-2 text-xl font-semibold leading-snug tracking-tight">
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
      <div className="featued-icons-container grid grid-cols-7 gap-3.5 rounded-md border-[1px] border-neutral-300 bg-neutral-100 p-2 dark:border-neutral-700 dark:bg-neutral-900">
        {iconPack.featuredIcons.map((icon, iconIndex) => (
          <FeaturedIcon key={`icon-${iconIndex}`} icon={icon} type={iconPack.metadata.type} />
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
