import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';
import { Icon } from '@modules/icons/typings/icon.typings';
import clsx from 'clsx';
import { IconPack } from 'icons-fetching';
import React, { useMemo } from 'react';

type FeaturedIconProps = {
  /** Featured icon data */
  icon: Icon;
  /** Wether the icon requires fill or not */
  type: IconPack['type'];
};

const FeaturedIcon: React.FC<FeaturedIconProps> = (props) => {
  const { icon, type } = props;

  const source = useMemo(() => {
    return getSVGSourceIntoComponent(icon.source, type, clsx(type === 'fill' ? 'featured-icon-fill' : 'featured-icon'));
  }, []);

  return source;
};

type IconPackCardFeaturedIconsProps = {
  featuredIcons: Icon[];
  type: IconPack['type'];
};

const IconPackCardFeaturedIcons: React.FC<IconPackCardFeaturedIconsProps> = (props) => {
  const { featuredIcons, type } = props;

  return (
    <div className="featued-icons-container grid grid-cols-7 gap-3.5 rounded-md border-[1px] border-neutral-300 bg-neutral-100 p-2 dark:border-neutral-700 dark:bg-neutral-900">
      {featuredIcons.map((icon, iconIndex) => (
        <FeaturedIcon key={`icon-${iconIndex}`} icon={icon} type={type} />
      ))}
    </div>
  );
};

export default IconPackCardFeaturedIcons;
