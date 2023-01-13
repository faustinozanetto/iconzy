import React from 'react';
import IconsCustomization from './customization/icons-customization';
import IconsEditorFeed from './icons-editor-feed';

const generateColumns = (count: number) => {
  return new Array(count).fill(0).map((_, i) => {
    const key: string = i.toString();
    return {
      key,
      name: `Column ${i}`,
      width: 150,
    };
  });
};

const IconPackEditor: React.FC = () => {
  return (
    <div
      className="flex overflow-hidden"
      style={{
        height: 'calc(100vh - 80px)',
      }}
    >
      <IconsCustomization />
      <IconsEditorFeed columns={generateColumns(5000)} />
    </div>
  );
};

export default IconPackEditor;
