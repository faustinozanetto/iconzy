import util from 'node:util';

import * as fs from 'fs';
import { JSDOM } from 'jsdom';
import * as path from 'path';

import type { IconPackNames } from '../utils';

const copyFile = util.promisify(fs.copyFile);

type IconPackParser = {
  [key in IconPackNames]?: { customParser?: (folder: string) => void };
};

/**
 * Function that reads a file and returns its source.
 * @param folder The folder of the file.
 * @param file The name of the file.
 * @returns The contents.
 */
const readContentsFromFile = async (folder: string, file: string) => {
  const fileLocation = path.join(folder, file);
  const fileContent = await fs.promises.readFile(fileLocation, { encoding: 'utf-8' });
  return fileContent;
};

/**
 * Function that removes the attributes and tags of a svg file.
 * @param fileContent The source of the svg element.
 * @param attributes The attributes to remove, example: fill,stroke.
 * @param tags The tags to remove, example: rect, path.
 * @returns The modified source.
 */
const removeAttributesAndTags = (fileContent: string, attributes: string[] = [], tags: string[] = []): string => {
  const window = new JSDOM(fileContent).window;

  tags.forEach((tag: string) => {
    const elements = window.document.getElementsByTagName(tag);
    for (let i = elements.length - 1; i >= 0; i--) {
      const element = elements[i];
      element.remove();
    }
  });
  attributes.forEach((attribute: string) => {
    const elements = window.document.querySelectorAll(`[${attribute}]`);
    for (let i = elements.length - 1; i >= 0; i--) {
      elements[i].removeAttribute(attribute);
    }
  });

  const rootElement = window.document.querySelector('svg');
  if (!rootElement) throw new Error('An error occurred while executing custom parser for eva-icons');
  return new window.XMLSerializer().serializeToString(rootElement);
};

const addAttributes = (fileContent: string, attributes: { name: string; value: string }[]): string => {
  const window = new JSDOM(fileContent).window;
  const rootElement = window.document.querySelector('svg');
  if (!rootElement) throw new Error('An error occurred while trying to get root node');

  attributes.forEach((attribute) => {
    rootElement.setAttribute(attribute.name, attribute.value);
  });

  return new window.XMLSerializer().serializeToString(rootElement);
};

export const ICONS_CUSTOM_PARSERS: IconPackParser = {
  'remix-icons': {
    async customParser(folder) {
      // Read each category folder in the root folder.
      const categoriesFolders = await fs.promises.readdir(path.join(folder, '/'));

      for (const categoryFolder of categoriesFolders) {
        const categoryPath = path.join(folder, categoryFolder);
        const content = await fs.promises.readdir(categoryPath);
        // Now read each svg file in the category folder and copy it to the root folder.
        for (const file of content) {
          const currentSource = path.join(categoryPath, file);
          const currentDestination = path.join(folder, file);
          await copyFile(currentSource, currentDestination);
        }
        await fs.promises.rm(categoryPath, {
          recursive: true,
          force: true,
        });
      }
    },
  },
  'fontawesome-icons': {
    async customParser(folder) {
      const content = await fs.promises.readdir(folder);
      for (const file of content) {
        const fileContent = await readContentsFromFile(folder, file);
        const modifiedSource = addAttributes(fileContent, [{ name: 'fill', value: 'currentColor' }]);
        await fs.promises.writeFile(path.join(folder, file), modifiedSource, { encoding: 'utf-8' });
      }
    },
  },
  'cryptocurrency-icons': {
    async customParser(folder) {
      const content = await fs.promises.readdir(folder);
      for (const file of content) {
        const fileContent = await readContentsFromFile(folder, file);
        const modifiedSource = removeAttributesAndTags(fileContent, ['fill']);
        await fs.promises.writeFile(path.join(folder, file), modifiedSource, { encoding: 'utf-8' });
      }
    },
  },
  'eva-icons': {
    async customParser(folder) {
      const content = await fs.promises.readdir(folder);
      for (const file of content) {
        const fileContent = await readContentsFromFile(folder, file);
        const modifiedSource = removeAttributesAndTags(fileContent, ['class'], ['rect', 'style', 'defs']);
        await fs.promises.writeFile(path.join(folder, file), modifiedSource, { encoding: 'utf-8' });
      }
    },
  },
  'dev-icons': {
    async customParser(folder) {
      const content = await fs.promises.readdir(folder);
      for (const file of content) {
        const fileContent = await readContentsFromFile(folder, file);
        const modifiedSource = removeAttributesAndTags(fileContent, ['fill']);
        await fs.promises.writeFile(path.join(folder, file), modifiedSource, { encoding: 'utf-8' });
      }
    },
  },
  'health-icons': {
    async customParser(folder) {
      // Read each category folder in the root folder.
      const categoriesFolders = await fs.promises.readdir(path.join(folder, '/'));

      for (const categoryFolder of categoriesFolders) {
        const categoryPath = path.join(folder, categoryFolder);
        const content = await fs.promises.readdir(categoryPath);
        // Now read each svg file in the category folder and copy it to the root folder.
        for (const file of content) {
          // Read file and modify it.
          const fileLocation = path.join(categoryPath, file);
          const fileContent = await fs.promises.readFile(fileLocation, { encoding: 'utf-8' });
          const modifiedSource = removeAttributesAndTags(fileContent, ['fill', 'stroke']);
          await fs.promises.writeFile(fileLocation, modifiedSource, { encoding: 'utf-8' });
          // Copy file
          const currentSource = path.join(categoryPath, file);
          const currentDestination = path.join(folder, file);
          await copyFile(currentSource, currentDestination);
        }
        await fs.promises.rm(categoryPath, {
          recursive: true,
          force: true,
        });
      }
    },
  },
  'carbon-icons': {
    async customParser(folder) {
      const content = await fs.promises.readdir(folder);
      for (const file of content) {
        const fileContent = await readContentsFromFile(folder, file);
        const modifiedSource = removeAttributesAndTags(fileContent, ['fill']);
        await fs.promises.writeFile(path.join(folder, file), modifiedSource, { encoding: 'utf-8' });
      }
    },
  },
  'akar-icons': {
    async customParser(folder) {
      const content = await fs.promises.readdir(folder);
      for (const file of content) {
        const fileContent = await readContentsFromFile(folder, file);
        const modifiedSource = removeAttributesAndTags(fileContent, ['fill']);

        await fs.promises.writeFile(path.join(folder, file), modifiedSource, { encoding: 'utf-8' });
      }
    },
  },
  'bas-icons': {
    async customParser(folder) {
      const content = await fs.promises.readdir(folder);
      for (const file of content) {
        const fileContent = await readContentsFromFile(folder, file);
        const modifiedSource = removeAttributesAndTags(fileContent, ['fill', 'stroke']);

        await fs.promises.writeFile(path.join(folder, file), modifiedSource, { encoding: 'utf-8' });
      }
    },
  },
};
