import * as fs from 'fs';
import path from 'path';
import type { IconPack } from '@iconzy/icons-fetching';
import { ICONS } from '@iconzy/icons-fetching';

import type { Icon } from '../typings/icon.typings';
import { FEATURED_ICONS_COUNT, ICONS_DIR } from './constants';

/**
 * Function that gets all the icons in a icon pack.
 * @param iconPack The icon pack to get the icons.
 * @param take Optional: The amount of icons to take.
 * @returns The icons array if successful.
 */
export const getIconsFromIconPack = (iconPack: IconPack, take?: number): Icon[] => {
  const iconPackFolder = ICONS_DIR + iconPack.name;
  try {
    const files: string[] = fs.readdirSync(iconPackFolder, 'utf8');
    let selectedFiles = files;
    if (take) selectedFiles = files.slice(0, take);
    const iconFileContents: Icon[] = selectedFiles.map((file) => {
      const source = fs.readFileSync(path.join(iconPackFolder, file), 'utf8');
      return {
        source,
        name: file.replace(/\.svg$/, ''),
      };
    });
    return iconFileContents;
  } catch (error) {
    throw new Error('An error occurred while trying to load icons from icon pack: ' + iconPack.name);
  }
};

/**
 * Function that returns the amount of icons in a icon pack.
 * @param iconPack The icon pack to get the amount.
 * @returns The amount of icons.
 */
export const getIconsCountFromIconPack = (iconPack: IconPack): number => {
  const iconPackFolder = ICONS_DIR + iconPack.name;
  try {
    return fs.readdirSync(iconPackFolder, 'utf8').length;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while trying to count icons from icon pack: ' + iconPack.name);
  }
};

export const iconPackExists = (name: IconPack['name']): boolean => {
  return ICONS.find((pack) => pack.name === name) !== undefined;
};

/**
 * Function that gets a icon pack by its slug.
 * @param slug The slug to find.
 * @returns The icon pack if found.
 */
export const getIconPackByName = (name: IconPack['name']): IconPack => {
  const iconPack: IconPack | undefined = ICONS.find((pack) => pack.name === name);
  if (!iconPack) throw new Error('Could not find icon pack by name: ' + name);
  return { ...iconPack, iconsCount: getIconsCountFromIconPack(iconPack) };
};

/**
 * Function that gets the featured icons of a icon pack.
 * @param iconPack The icon pack to get the icons.
 * @returns The array of featured icons.
 */
export const getFeaturedIconsFromIconPack = (iconPack: IconPack): Icon[] => {
  return getIconsFromIconPack(iconPack, FEATURED_ICONS_COUNT);
};

/**
 * Function that gets all the icon packs in the project.
 * @returns The array of icon packs.
 */
export const getAllIconPacks = (): IconPack[] => {
  const iconPacks: IconPack[] = ICONS.map((iconPack) => {
    return { ...iconPack, iconsCount: getIconsCountFromIconPack(iconPack) };
  });
  return iconPacks;
};
