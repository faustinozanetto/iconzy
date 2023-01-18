import { useIconsContext } from '@modules/icons/context/icons/icons-context';
import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';
import type { IconWithCustomization } from '@modules/icons/typings/icon.typings';
import clsx from 'clsx';
import React from 'react';

type IconEntryProps = {
  /** Icon data to display */
  icon: IconWithCustomization;
  /** Wether the icon is selected or not */
  selected: boolean;
  /**
   * Callback function when the icon is clicked
   * @param iconElement The icon element.
   * @returns Void
   */
  onClick: (iconElement: JSX.Element) => void;
};

const IconEntry: React.FC<IconEntryProps> = (props) => {
  const { icon, selected, onClick } = props;
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
        'hover:border-primary-400 dark:hover:border-primary-500 group relative flex h-[175px] cursor-pointer justify-center overflow-hidden rounded-md border-[3.5px] border-neutral-300 bg-neutral-50 p-4 transition-colors hover:border-4 dark:border-neutral-700 dark:bg-neutral-800',
        selected ? 'dark:!border-primary-500 !border-primary-400' : ''
      )}
      onClick={() => {
        onClick(iconSVG);
      }}
    >
      <div className="flex flex-col self-stretch">
        <div className="mx-auto flex flex-1 items-center justify-center">{iconSVG}</div>
        <span className="mb-1.5 text-center font-medium">{icon.name}</span>
      </div>
    </div>
  );
};

export default IconEntry;
