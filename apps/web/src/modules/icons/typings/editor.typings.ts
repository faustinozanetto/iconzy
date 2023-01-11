export type IconPack = {
  name: string;
  slug: string;
  iconsCount: number;
  source: string;
};

export type Icon = string;

export type IconPackWithFeatured = {
  metadata: IconPack;
  featuredIcons: Icon[];
};
