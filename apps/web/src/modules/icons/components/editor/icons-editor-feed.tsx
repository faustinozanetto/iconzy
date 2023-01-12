import { useIconsContext } from '@modules/icons/context/icons-context';
import React from 'react';
import IconEntry from '../icons/icon-entry';

const IconsEditorFeed: React.FC = () => {
  const { state } = useIconsContext();

  return (
    // <VirtuosoGrid
    //   className="virtuoso-scroller"
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
        gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))',
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

export default IconsEditorFeed;
