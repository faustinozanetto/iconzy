import { useIconsContext } from '@modules/icons/context/icons-context';
import React from 'react';
import IconEntry from './icon-entry';

const IconsFeed: React.FC = () => {
  const { state } = useIconsContext();

  return (
    <div
      className="grid gap-6 p-6"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))',
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
