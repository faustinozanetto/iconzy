import path from 'path';
import fs from 'fs';

import iconPacksData from '@modules/icons/lib/icon-packs.json';

import { Icon, IconPack } from '../typings/editor.typings';
import { ICONS_DIR } from './constants';

const iconsData = iconPacksData as IconPack[];

const getIconsFromIconPack = (iconPack: IconPack, take?: number): Icon[] => {
  const iconPackFolder = ICONS_DIR + iconPack.slug;
  try {
    const files: string[] = fs.readdirSync(iconPackFolder, 'utf8');
    let selectedFiles = files;
    if (take) selectedFiles = files.slice(0, take);
    const iconFileContents: Icon[] = selectedFiles.map((file) => {
      return fs.readFileSync(path.join(iconPackFolder, file), 'utf8');
    });
    return iconFileContents;
  } catch (error) {
    throw new Error('An error occurred while trying to load icons from icon pack: ' + iconPack.name);
  }
};

export const getIconsCountFromIconPack = (iconPack: IconPack): number => {
  const iconPackFolder = ICONS_DIR + iconPack.slug;
  try {
    return fs.readdirSync(iconPackFolder, 'utf8').length;
  } catch (error) {
    throw new Error('An error occurred while trying to count icons from icon pack: ' + iconPack.name);
  }
};

export const getIconPackBySlug = (slug: IconPack['slug']): IconPack => {
  const iconPack: IconPack | undefined = iconsData.find((pack) => pack.slug === slug);
  if (!iconPack) throw new Error('Could not find icon pack by slug: ' + slug);
  return { ...iconPack, iconsCount: getIconsCountFromIconPack(iconPack) };
};

export const getFeaturedIconsFromIconPack = (iconPack: IconPack): Icon[] => {
  return getIconsFromIconPack(iconPack, 10);
};

export const getAllIconPacks = (): IconPack[] => {
  const iconPacks: IconPack[] = iconsData.map((iconPack) => {
    const featuredIcons = getIconsFromIconPack(iconPack, 10);
    return { ...iconPack, iconsCount: getIconsCountFromIconPack(iconPack) };
  });
  return iconPacks;
};
