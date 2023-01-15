import React from 'react';
import clsx from 'clsx';

import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';
import { IconWithCustomization } from '@modules/icons/typings/icon.typings';
import { useIconsContext } from '@modules/icons/context/icons-context';

type IconEntryProps = {
  icon: IconWithCustomization;
  isSelected: boolean;
  onIconSelected: (iconElement: JSX.Element) => void;
};

const IconEntry: React.FC<IconEntryProps> = (props) => {
  const { icon, isSelected, onIconSelected } = props;
  const { state } = useIconsContext();

  const iconSVG: JSX.Element = getSVGSourceIntoComponent(
    icon.source,
    state.iconPack?.requiresFill || false,
    icon.customization,
    'grid-icon'
  );

  return (
    <div
      className={clsx(
        'relative flex justify-center h-[175px] p-4 rounded-md transition-colors cursor-pointer group bg-neutral-50 border-neutral-300 border-2 dark:bg-neutral-800 dark:border-neutral-700 overflow-hidden hover:border-primary-400 hover:border-2 dark:hover:border-primary-500',
        isSelected ? 'dark:!border-primary-500 !border-primary-400' : ''
      )}
      onClick={() => onIconSelected(iconSVG)}
    >
      <div className="flex flex-col self-stretch">
        <div className="flex items-center justify-center flex-1 mx-auto">{iconSVG}</div>
        <span className="text-center font-medium mb-1.5">{icon.name}</span>
      </div>
    </div>
  );
};

export default IconEntry;
