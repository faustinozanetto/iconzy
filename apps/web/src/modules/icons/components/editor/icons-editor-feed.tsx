import { useIconsContext } from '@modules/icons/context/icons-context';
import React from 'react';
import IconEntry from '../icons/icon-entry';

const IconsEditorFeed: React.FC = () => {
  const { state } = useIconsContext();

  return (
    <div className="flex flex-col w-full">
      <h2 className="font-medium text-xl mb-4 p-3.5 border-b-neutral-300 border-b-[1px] dark:bg-neutral-800 dark:border-b-neutral-700">
        Browsing <span className="font-bold text-primary-600 dark:text-primary-300">{state.iconPack?.iconsCount} </span>
        icons
      </h2>
      <div
        className="grid gap-4 px-4 pb-4 overflow-y-auto w-full sm:ml-auto"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))',
        }}
      >
        {state.icons
          ? state.icons.map((icon, index) => {
              return <IconEntry key={`icon-${index}`} icon={icon} customization={state.iconCustomization} />;
            })
          : null}
      </div>
    </div>
  );
};

export default IconsEditorFeed;
