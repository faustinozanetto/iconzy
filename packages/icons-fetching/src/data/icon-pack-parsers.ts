import util from 'node:util';

import * as fs from 'fs';
import { JSDOM } from 'jsdom';
import * as path from 'path';

import type { IconPackNames } from '../utils';

type IconPackParser = {
  [key in IconPackNames]?: { customParser?: (folder: string) => void };
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

          const copyFile = util.promisify(fs.copyFile);
          await copyFile(currentSource, currentDestination);
        }
        await fs.promises.rm(categoryPath, {
          recursive: true,
          force: true,
        });
      }
    },
  },
  'eva-icons': {
    async customParser(folder) {
      const content = await fs.promises.readdir(folder);
      for (const file of content) {
        const fileLocation = path.join(folder, file);
        const fileContent = await fs.promises.readFile(fileLocation, { encoding: 'utf-8' });

        const window = new JSDOM(fileContent).window;

        const attributesToRemove: string[] = ['class'];
        const elementsToRemove: string[] = ['rect', 'style', 'defs'];

        elementsToRemove.forEach((tag: string) => {
          const elements = window.document.getElementsByTagName(tag);
          for (let i = elements.length - 1; i >= 0; i--) {
            const element = elements[i];
            attributesToRemove.forEach((attribute: string) => {
              element.removeAttribute(attribute);
            });
            element.remove();
          }
        });
        attributesToRemove.forEach((attribute: string) => {
          const elements = window.document.querySelectorAll(`[${attribute}]`);
          for (let i = elements.length - 1; i >= 0; i--) {
            elements[i].removeAttribute(attribute);
          }
        });

        const rootElement = window.document.querySelector('svg');
        if (!rootElement) throw new Error('An error occurred while executing custom parser for eva-icons');
        const modifiedSource: string = new window.XMLSerializer().serializeToString(rootElement);

        await fs.promises.writeFile(fileLocation, modifiedSource, { encoding: 'utf-8' });
      }
    },
  },
  'dev-icons': {
    async customParser(folder) {
      const content = await fs.promises.readdir(folder);
      for (const file of content) {
        const fileLocation = path.join(folder, file);
        const fileContent = await fs.promises.readFile(fileLocation, { encoding: 'utf-8' });

        const window = new JSDOM(fileContent).window;

        const attributesToRemove: string[] = ['fill'];

        attributesToRemove.forEach((attribute: string) => {
          const elements = window.document.querySelectorAll(`[${attribute}]`);
          for (let i = elements.length - 1; i >= 0; i--) {
            elements[i].removeAttribute(attribute);
          }
        });

        const rootElement = window.document.querySelector('svg');
        if (!rootElement) throw new Error('An error occurred while executing custom parser for eva-icons');
        const modifiedSource: string = new window.XMLSerializer().serializeToString(rootElement);

        await fs.promises.writeFile(fileLocation, modifiedSource, { encoding: 'utf-8' });
      }
    },
  },
};
