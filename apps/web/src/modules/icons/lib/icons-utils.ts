import * as fs from 'fs';
import parse, { Element } from 'html-react-parser';
import type { IconPack } from 'icons-fetching';
import { ICONS } from 'icons-fetching';
import DOMPurify from 'isomorphic-dompurify';
import path from 'path';
import * as ReactDOMServer from 'react-dom/server';

import type { Icon } from '../typings/icon.typings';
import { FEATURED_ICONS_COUNT, ICONS_DIR } from './constants';

/**
 * Function to convert a svg source into a JSX Element.
 * @param svgSource The source of the svg.
 * @param customization The customization of the icon.
 * @param className Optional: Custom classnames to style the element.
 * @returns The JSX Element if successful.
 */
export const getSVGSourceIntoComponent = (svgSource: string, type: IconPack['type'], className?: string) => {
  const clean = DOMPurify.sanitize(svgSource);

  const parsed = parse(clean, {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name !== 'svg') return;

        domNode.attribs = {
          ...domNode.attribs,
          className: className || '',
        };

        if (type === 'fill') {
          domNode.attribs = {
            ...domNode.attribs,
            fill: 'currentColor',
          };
        } else {
          domNode.attribs = {
            ...domNode.attribs,
            stroke: 'currentColor',
            fill: 'none',
          };
        }
        return domNode;
      }
    },
    trim: true,
  }) as JSX.Element;

  return parsed;
};

/**
 * Removes attributes of a jsx element represented as a string.
 * @param element The source of the element.
 * @param attributes The array of attributes to remove.
 * @returns The modified element source.
 */
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

export const applyIconCustomizationStyles = (source: string, type: IconPack['type']): string => {
  const color = document.documentElement.style.getPropertyValue('--grid-icon-color');
  const width = document.documentElement.style.getPropertyValue('--grid-icon-width');
  const size = document.documentElement.style.getPropertyValue('--grid-icon-size');

  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(source, 'image/svg+xml');
  const svgElement = svgDoc.documentElement;
  svgElement.setAttribute('width', size);
  svgElement.setAttribute('height', size);
  if (type === 'fill') {
    svgElement.setAttribute('fill', color);
    svgElement.setAttribute('stroke', 'none');
  } else {
    svgElement.setAttribute('fill', 'none');
    svgElement.setAttribute('stroke', color);
    svgElement.setAttribute('stroke-width', width);
  }

  return new XMLSerializer().serializeToString(svgElement);
};

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
