import { IconPack } from '@iconzy/icons-fetching';
import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-render';
import { Icon } from '@modules/icons/typings/icon.typings';
import clsx from 'clsx';
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
    <div className="featued-icons-container grid grid-cols-7 gap-3 border-primary border p-2 rounded-lg">
      {featuredIcons.map((icon, iconIndex) => (
        <FeaturedIcon key={`icon-${iconIndex}`} icon={icon} type={type} />
      ))}
    </div>
  );
};

export default IconPackCardFeaturedIcons;
