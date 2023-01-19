import path from 'path';

import type { IconCustomizationLimits } from '../typings/icon.typings';

export const ICONS_DIR: string = path.join(process.cwd(), 'public/icons/');
export const FEATURED_ICONS_COUNT = 14;

export const DEFAULT_ICON_SIZE = 50;
export const ICON_SIZE_LIMITS: IconCustomizationLimits = { min: 5, max: 100 };

export const ICON_WIDTH_LIMITS: IconCustomizationLimits = {
  min: 0.25,
  max: 3.5,
};

export const ICONS_DEFAULT_COLOR = '#6936F5';
