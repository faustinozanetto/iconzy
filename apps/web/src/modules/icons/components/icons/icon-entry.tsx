import type { Icon } from '@modules/icons/typings/icon.typings';
import clsx from 'clsx';
import React, { memo } from 'react';

type IconEntryProps = {
  /** Icon name to display */
  name: Icon['name'];
  /** Wether the icon is selected or not */
  selected: boolean;
  /**
   * Callback function when the icon is clicked
   * @returns Void
   */
  onClick: () => void;
  /**
   * Render function that computes the icon element.
   * @returns The icon element
   */
  render: JSX.Element;
};

const IconEntry: React.FC<IconEntryProps> = (props) => {
  const { name, selected, onClick, render } = props;

  return (
    <div
      className={clsx(
        'hover:border-primary-400 dark:hover:border-primary-500 group relative flex h-[175px] cursor-pointer justify-center overflow-hidden rounded-md border-[3.5px] border-neutral-300 bg-neutral-50 p-4 transition-colors hover:border-4 dark:border-neutral-700 dark:bg-neutral-800',
        selected ? 'dark:!border-primary-500 !border-primary-400' : ''
      )}
      onClick={() => {
        onClick();
      }}
    >
      <div className="flex flex-col self-stretch">
        <div className="feed-icon-wrapper mx-auto flex flex-1 items-center justify-center">{render}</div>
        <span className="mb-1.5 text-center font-medium">{name}</span>
      </div>
    </div>
  );
};

export default memo(IconEntry);
