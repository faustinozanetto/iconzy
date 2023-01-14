import path from 'path';
import * as fs from 'fs';
import * as ReactDOMServer from 'react-dom/server';

import DOMPurify from 'isomorphic-dompurify';
import parse, { Element } from 'html-react-parser';

import { ICONS, IconPackRaw } from 'icons-fetching';
import { Icon, IconCustomization } from '../typings/icon.typings';
import { ICONS_DIR } from './constants';

/**
 * Function to convert a svg source into a JSX Element.
 * @param svgSource The source of the svg.
 * @param iconCustomization The customization of the icon.
 * @param className Optional: Custom classnames to style the element.
 * @returns The JSX Element if successful.
 */
export const getSVGSourceIntoComponent = (
  svgSource: string,
  requiresFill: boolean,
  iconCustomization: IconCustomization,
  className?: string
) => {
  const clean = DOMPurify.sanitize(svgSource);
  let parsed = parse(clean, {
    replace: (domNode) => {
      const domElement: Element = domNode as Element;

      domElement.attribs = {
        ...domElement.attribs,
        className: className || '',
        width: `${iconCustomization.size}`,
        height: `${iconCustomization.size}`,
        stroke: !requiresFill ? `${iconCustomization.color}` : 'none',
        fill: requiresFill ? `${iconCustomization.color}` : 'none',
        strokeWidth: `${iconCustomization.width}`,
      };

      return domElement;
    },
  }) as JSX.Element;

  return parsed;
};

const removeAttributes = (element: string, attributes: string[]): string => {
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(element, 'image/svg+xml');
  const svgElement = svgDoc.documentElement;
  attributes.forEach((attribute) => {
    svgElement.removeAttribute(attribute);
  });
  return new XMLSerializer().serializeToString(svgDoc);
};

/**
 * Function that converts a JSX Element to its source as string.
 * @param element The element to convert.
 * @returns The string containing the source.
 */
export const convertJSXToString = (element: JSX.Element): string => {
  const source = ReactDOMServer.renderToStaticMarkup(element);
  const cleaned = removeAttributes(source, ['class']);

  return cleaned;
};

/**
 * Function that gets all the icons in a icon pack.
 * @param iconPack The icon pack to get the icons.
 * @param take Optional: The amount of icons to take.
 * @returns The icons array if successful.
 */
export const getIconsFromIconPack = (iconPack: IconPackRaw, take?: number): Icon[] => {
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
export const getIconsCountFromIconPack = (iconPack: IconPackRaw): number => {
  const iconPackFolder = ICONS_DIR + iconPack.name;
  try {
    return fs.readdirSync(iconPackFolder, 'utf8').length;
  } catch (error) {
    console.error(error);

    throw new Error('An error occurred while trying to count icons from icon pack: ' + iconPack.name);
  }
};

/**
 * Function that gets a icon pack by its slug.
 * @param slug The slug to find.
 * @returns The icon pack if found.
 */
export const getIconPackByName = (name: IconPackRaw['name']): IconPackRaw => {
  const iconPack: IconPackRaw | undefined = ICONS.find((pack) => pack.name === name);
  if (!iconPack) throw new Error('Could not find icon pack by name: ' + name);
  return { ...iconPack, iconsCount: getIconsCountFromIconPack(iconPack) };
};

/**
 * Function that gets the featured icons of a icon pack.
 * @param iconPack The icon pack to get the icons.
 * @returns The array of featured icons.
 */
export const getFeaturedIconsFromIconPack = (iconPack: IconPackRaw): Icon[] => {
  return getIconsFromIconPack(iconPack, 10);
};

/**
 * Function that gets all the icon packs in the project.
 * @returns The array of icon packs.
 */
export const getAllIconPacks = (): IconPackRaw[] => {
  const iconPacks: IconPackRaw[] = ICONS.map((iconPack) => {
    return { ...iconPack, iconsCount: getIconsCountFromIconPack(iconPack) };
  });
  return iconPacks;
};
