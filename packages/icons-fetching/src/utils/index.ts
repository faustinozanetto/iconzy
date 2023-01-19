import * as path from 'path';

import type { ICONS } from '../data/icon-packs';

export { ICONS } from '../data/icon-packs';
export const BASE_DIR = path.join(process.cwd(), '/generated');
export const PACKED_DIR = path.join(process.cwd(), '/packed');

export type IconPack = {
  name: string;
  type: 'fill' | 'outline';
  iconsCount?: number;
  defaultWidth: number;
  source: {
    url: string;
    branch: string;
    commitHash: string;
    iconsFolder: string;
    license: {
      type: string;
    };
  };
};

export type IconPackNames = (typeof ICONS)[number]['name'];
