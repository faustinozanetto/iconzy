import { IconsSelectionProvider } from '@modules/icons/context/selection/icons-selection-context';
import React from 'react';

import IconsCustomization from './customization/icons-customization';
import IconsFeed from './feed/icons-feed';

const IconPackEditor: React.FC = () => {
  return (
    <IconsSelectionProvider>
      <div
        className="flex overflow-hidden"
        style={{
          height: 'calc(100vh - 90px)',
        }}
      >
        <IconsCustomization />
        <IconsFeed />
      </div>
    </IconsSelectionProvider>
  );
};

export default IconPackEditor;
