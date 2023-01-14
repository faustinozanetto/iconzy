import React from 'react';
import Link from 'next/link';
import { IconPackWithFeatured } from '@modules/icons/typings/icon.typings';
import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';
import clsx from 'clsx';
import { Button } from 'ui';

type IconPackCardProps = {
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
    <div
      key={iconPack.metadata.name}
      className="flex rounded-lg justify-center items-center flex-col p-4 space-y-2 bg-neutral-50 border-neutral-300 border-[1px] dark:bg-neutral-800 dark:border-neutral-700 hover:scale-105 transition-transform"
    >
      <h2 className="text-xl font-semibold">{generateIconPackTitle()}</h2>
      <div className="grid grid-cols-5 gap-4 p-2 bg-neutral-100 dark:bg-neutral-900 border-neutral-300 border-[1px] dark:border-neutral-700 rounded-md place-items-center">
        {iconPack.featuredIcons.map((icon, index) => (
          <span key={`icon-${index}`}>
            {getSVGSourceIntoComponent(
              icon.source,
              iconPack.metadata.requiresFill,
              {
                size: 25,
                color: '#fff',
                width: 2,
              },
              clsx('stroke-neutral-800 dark:stroke-neutral-100 fill-none')
            )}
          </span>
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
