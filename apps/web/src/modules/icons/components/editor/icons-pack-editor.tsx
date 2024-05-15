'use client';

import { IconsSelectionProvider } from '@modules/icons/context/selection/icons-selection-context';
import React, { useEffect } from 'react';

import IconsFeed from './feed/icons-feed';
import IconsCustomization from './settings/icons-settings';
import { useIconsStore } from '@modules/icons/state/icons.slice';
import { IconPackWithAll } from '@modules/icons/typings/icon.typings';

interface IconPackEditorProps {
  iconPack: IconPackWithAll;
}

const IconPackEditor: React.FC<IconPackEditorProps> = (props) => {
  const { iconPack } = props;

  const { setIconPack, setIcons } = useIconsStore();

  useEffect(() => {
    setIconPack(iconPack.metadata);
    setIcons(iconPack.icons);
  }, []);

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
