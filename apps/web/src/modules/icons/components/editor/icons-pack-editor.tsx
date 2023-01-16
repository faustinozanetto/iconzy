import React from 'react';

import IconsCustomization from './customization/icons-customization';
import IconsFeed from './feed/icons-feed';

const IconPackEditor: React.FC = () => {
  return (
    <div
      className="flex overflow-hidden"
      style={{
        height: 'calc(100vh - 80px)',
      }}
    >
      <IconsCustomization />
      <IconsFeed />
    </div>
  );
};

export default IconPackEditor;
