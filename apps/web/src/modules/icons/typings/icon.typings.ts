import { IconPackRaw } from 'icons-fetching';

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
  metadata: IconPackRaw;
  featuredIcons: Icon[];
};

export type IconPackWithAll = {
  metadata: IconPackRaw;
  icons: Icon[];
};
