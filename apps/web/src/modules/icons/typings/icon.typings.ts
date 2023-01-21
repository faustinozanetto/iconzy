import type { IconPack } from 'icons-fetching';

export type IconCustomizationLimits = { min: number; max: number };

export type Icon = {
  name: string;
  source: string;
};

export type IconWithElement = Icon & { element: JSX.Element };

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

export type IconExportTypes = 'svg' | 'png';
export type IconExportPlatforms = 'html' | 'react';

export type IconsExport = {
  type: IconExportTypes;
  platform: IconExportPlatforms;
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
