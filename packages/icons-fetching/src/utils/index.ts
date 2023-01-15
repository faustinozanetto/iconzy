export { ICONS } from '../data/icon-packs';
import * as path from 'path';

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
