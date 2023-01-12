export type IconPack = {
  name: string;
  slug: string;
  iconsCount: number;
  source: string;
};

export type Icon = {
  name: string;
  source: string;
};

export type IconCustomization = {
  size: number;
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
