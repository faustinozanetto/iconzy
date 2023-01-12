import React from 'react';
import IconsCustomization from './customization/icons-customization';
import IconsEditorFeed from './icons-editor-feed';

const IconPackEditor: React.FC = () => {
  return (
    <div
      className="flex overflow-hidden"
      style={{
        height: 'calc(100vh - 80px)',
      }}
    >
      <IconsCustomization />
      <IconsEditorFeed />
    </div>
  );
};

export default IconPackEditor;
