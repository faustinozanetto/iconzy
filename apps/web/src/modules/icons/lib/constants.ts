import path from 'path';
import { IconCustomizationLimits } from '../typings/icon.typings';

export const ICONS_DIR: string = path.join(process.cwd(), 'public/icons/');
export const FEATURED_ICONS_COUNT: number = 14;

export const DEFAULT_ICON_SIZE: number = 50;
export const ICON_SIZE_LIMITS: IconCustomizationLimits = { min: 5, max: 80 };

export const ICON_WIDTH_LIMITS: IconCustomizationLimits = {
  min: 0.25,
  max: 3.5,
};
