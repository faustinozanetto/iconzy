import path from 'path';
import { defaultColors, MultiButtonInputOption } from 'ui';

import type {
  IconCustomizationLimits,
  IconExportPlatforms,
  IconExportTypes,
  IconsExportSelection,
} from '../typings/icon.typings';

export const ICONS_DIR: string = path.join(process.cwd(), 'public/icons/');
export const FEATURED_ICONS_COUNT = 14;

export const DEFAULT_ICON_SIZE = 50;
export const ICON_SIZE_LIMITS: IconCustomizationLimits = { min: 5, max: 100 };

export const ICON_WIDTH_LIMITS: IconCustomizationLimits = {
  min: 0.25,
  max: 3.5,
};

export const ICONS_DEFAULT_COLOR = defaultColors.primary['700'];

export const ICONS_EXPORT_SELECTION: MultiButtonInputOption<IconsExportSelection>[] = ['all', 'selected'];

export const ICONS_EXPORT_TYPES_HTML: MultiButtonInputOption<IconExportTypes>[] = ['svg', 'png'];

export const ICONS_EXPORT_TYPES_REACT: MultiButtonInputOption<IconExportTypes>[] = ['jsx', 'tsx'];

export const ICONS_EXPORT_PLATFORMS: MultiButtonInputOption<IconExportPlatforms>[] = ['html', 'react'];

export const ICONS_DEFAULT_EXPORT_TYPE = ICONS_EXPORT_TYPES_HTML[0];

export const ICONS_DEFAULT_EXPORT_SELECTION = ICONS_EXPORT_SELECTION[1];

export const ICONS_DEFAULT_EXPORT_PLATFORM = ICONS_EXPORT_PLATFORMS[0];
