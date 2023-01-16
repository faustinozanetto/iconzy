import * as path from 'path';
import { ICONS } from '../data/icon-packs';


export { ICONS } from '../data/icon-packs';
export const BASE_DIR = path.join(process.cwd(), '/generated');
export const PACKED_DIR = path.join(process.cwd(), '/packed');

export type IconPack = {
  name: string;
  requiresFill: boolean;
  iconsCount?: number;
  defaultWidth: number;
  source: {
    url: string;
    branch: string;
    commitHash: string;
    iconsFolder: string;
  };
};

export type IconPackNames = (typeof ICONS)[number]['name'];
