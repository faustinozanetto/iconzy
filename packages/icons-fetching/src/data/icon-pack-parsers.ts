import * as fs from 'fs';
import * as path from 'path';
import util from 'node:util';

type IconPackParser = {
  name: string;
  customParser?: (folder: string) => void;
};

export const ICONS_CUSTOM_PARSERS: IconPackParser[] = [
  {
    name: 'remix-icons',
    async customParser(folder) {
      // Read each category folder in the root folder.
      const categoriesFolders = await fs.promises.readdir(folder);
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
];
