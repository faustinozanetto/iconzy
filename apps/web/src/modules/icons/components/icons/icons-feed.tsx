import { useIconsContext } from '@modules/icons/context/icons-context';
import React from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import IconEntry from './icon-entry';

const IconsFeed: React.FC = () => {
  const { state } = useIconsContext();

  return (
    // <VirtuosoGrid
    //   totalCount={state.icons.length}
    //   itemContent={(index) => (
    //     <IconEntry key={`icon-${index}`} icon={state.icons[index]} customization={state.iconCustomization} />
    //   )}
    //   style={{
    //     height: '100%',
    //     width: '100%',
    //   }}
    // />

    <div
      className="grid gap-4 p-4 overflow-y-auto w-full sm:ml-auto"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(125px, 1fr))',
      }}
    >
      {state.icons
        ? state.icons.map((icon, index) => {
            return <IconEntry key={`icon-${index}`} icon={icon} customization={state.iconCustomization} />;
          })
        : null}
    </div>
  );
};

export default IconsFeed;
