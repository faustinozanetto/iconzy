import React from 'react';
import clsx from 'clsx';

import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';
import { IconWithCustomization } from '@modules/icons/typings/icon.typings';

type IconEntryProps = {
  icon: IconWithCustomization;
  isSelected: boolean;
  onIconSelected: (iconElement: JSX.Element) => void;
};

const IconEntry: React.FC<IconEntryProps> = (props) => {
  const { icon, isSelected, onIconSelected } = props;

  const iconSVG: JSX.Element = getSVGSourceIntoComponent(icon.source, icon.customization, 'grid-icon');

  return (
    <div
      className={clsx(
        'grid-icon-wrapper',
        isSelected ? '!border-primary-600 dark:border-primary-200 !border-[3px]' : ''
      )}
      onClick={() => onIconSelected(iconSVG)}
    >
      <div className="grid-icon-container">
        {iconSVG}
        <div className="grid-icon-name">{icon.name}</div>
      </div>
    </div>
  );
};

export default IconEntry;
