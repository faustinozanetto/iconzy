import { useIconsContext } from '@modules/icons/context/icons-context';
import React from 'react';
import IconEntry from './icon-entry';

const IconsFeed: React.FC = () => {
  const { state } = useIconsContext();

  return (
    <div
      className="grid gap-4 p-4 overflow-y-auto w-full sm:ml-auto"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      }}
    >
      {state.icons
        ? state.icons.map((icon, index) => {
            return <IconEntry key={`icon-${index}`} icon={icon} />;
          })
        : null}
    </div>
  );
};

export default IconsFeed;
