import { IconPack } from '@iconzy/icons-fetching';

export type IconCustomizationLimits = { min: number; max: number };

export type Icon = {
  name: string;
  source: string;
};

export type IconWithCustomization = Icon & { customization: IconCustomization };

export type IconCustomization = {
  size: number;
  width: number;
  color: string;
};

export type IconPackWithFeatured = {
  metadata: IconPack;
  featuredIcons: Icon[];
};

export type IconPackWithAll = {
  metadata: IconPack;
  icons: Icon[];
};

export type IconsExportSelection = 'all' | 'selected';
export type IconExportTypes = 'svg' | 'png' | 'jsx' | 'tsx';
export type IconExportPlatforms = 'html' | 'react';

export type IconsExport = {
  type: IconExportTypes;
  platform: IconExportPlatforms;
  selection: IconsExportSelection;
};

export type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
