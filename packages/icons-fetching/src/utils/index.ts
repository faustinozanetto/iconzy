import iconsData from '../icon-packs.json';
export const ICONS: IconPackRaw[] = iconsData;

export type IconPackRaw = {
  name: string;
  requiresFill: boolean;
  iconsCount?: number;
  source: {
    url: string;
    branch: string;
    commitHash: string;
    iconsFolder: string;
  };
};
