export type IconPack = {
  name: string;
  slug: string;
  iconsCount: number;
  source: string;
  defaultWidth: number;
};

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
