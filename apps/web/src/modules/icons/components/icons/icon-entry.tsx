import { useIconsContext } from '@modules/icons/context/icons-context';
import { convertJSXToString, getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';
import { Icon, IconCustomization } from '@modules/icons/typings/icon.typings';
import clsx from 'clsx';
import React, { memo } from 'react';

type IconEntryProps = {
  icon: Icon;
  customization: IconCustomization;

  onIconSelected: (iconElement: JSX.Element) => void;
};

const IconEntry: React.FC<IconEntryProps> = (props) => {
  const { icon, customization, onIconSelected } = props;
  const { state } = useIconsContext();

  const iconSVG: JSX.Element = getSVGSourceIntoComponent(icon.source, customization, 'grid-icon');

  const isSelected = state.selectedIcon && state.selectedIcon.name === icon.name;

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

export default memo(IconEntry);
