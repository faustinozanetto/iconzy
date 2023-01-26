import { IconsSelectionProvider } from '@modules/icons/context/selection/icons-selection-context';
import React from 'react';

import IconsFeed from './feed/icons-feed';
import IconsCustomization from './settings/icons-settings';

const IconPackEditor: React.FC = () => {
  return (
    <IconsSelectionProvider>
      <div className="flex h-[calc(100vh-80px)] overflow-hidden">
        <IconsCustomization />
        <IconsFeed />
      </div>
    </IconsSelectionProvider>
  );
};

export default IconPackEditor;
