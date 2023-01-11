import React from 'react';
import Link from 'next/link';
import { IconPackWithFeatured } from '@modules/icons/typings/editor.typings';
import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';

type IconPackCardProps = {
  iconPack: IconPackWithFeatured;
};

const IconPackCard: React.FC<IconPackCardProps> = (props) => {
  const { iconPack } = props;

  return (
    <Link href={`/icons/${iconPack.metadata.slug}`}>
      <div
        key={iconPack.metadata.slug}
        className="group cursor-pointer overflow-hidden rounded-lg justify-center flex items-center flex-col p-4 space-y-2 bg-neutral-50 border-neutral-300 border-[1px] dark:bg-neutral-800 dark:border-neutral-700 w-fit hover:scale-105 transition-transform"
      >
        <h2 className="text-xl font-semibold">{iconPack.metadata.name}</h2>
        <div className="grid grid-cols-5 gap-4 p-2 bg-neutral-100 dark:bg-neutral-900 border-neutral-300 border-[1px] dark:border-neutral-700 rounded-md place-items-center w-fit">
          {iconPack.featuredIcons.map((icon) =>
            getSVGSourceIntoComponent(icon.source, 'stroke-black dark:stroke-white')
          )}
        </div>
        <div className="w-full space-y-4">
          <div className="flex justify-between font-semibold">
            <p>Icon Count</p>
            <span>{iconPack.metadata.iconsCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default IconPackCard;
