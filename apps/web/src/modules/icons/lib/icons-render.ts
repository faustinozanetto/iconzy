import * as ReactDOMServer from 'react-dom/server';
import parse, { Element } from 'html-react-parser';
import type { IconPack } from '@iconzy/icons-fetching';

/**
 * Function to convert a svg source into a JSX Element.
 * @param svgSource The source of the svg.
 * @param customization The customization of the icon.
 * @param className Optional: Custom classnames to style the element.
 * @returns The JSX Element if successful.
 */
export const getSVGSourceIntoComponent = (svgSource: string, type: IconPack['type'], className?: string) => {
  // const clean = DOMPurify.sanitize(svgSource);

  const parsed = parse(svgSource, {
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

/**
 * Function that takes a svg string source and the type of iconpack and applies the customization styles to it.
 * @param source The svg source to modify.
 * @param type The type of icon pack.
 * @returns The modified svg string source.
 */
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
