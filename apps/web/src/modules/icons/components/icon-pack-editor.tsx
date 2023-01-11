import React from 'react';
import { useIconsContext } from '../context/icons-context';
import IconsCustomization from './customization/icons-customization';
import IconsFeed from './icons/icons-feed';

const IconPackEditor: React.FC = () => {
  const { state } = useIconsContext();

  return (
    <div
      className="flex overflow-hidden"
      style={{
        // gridTemplateColumns: 'auto 1fr',
        height: 'calc(100vh - 80px)',
      }}
    >
      <IconsCustomization />
      <IconsFeed />
    </div>
  );
};

export default IconPackEditor;
