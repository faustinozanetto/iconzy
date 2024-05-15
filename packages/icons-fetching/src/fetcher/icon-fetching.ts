import { execFile as rawExecFile } from 'node:child_process';
import util from 'node:util';

import fs from 'fs';
import * as path from 'path';

import { ICONS_CUSTOM_PARSERS } from '../data/icon-pack-parsers';
import type { IconPackNames } from '../utils';
import { BASE_DIR, ICONS, PACKED_DIR } from '../utils';
import Task from './task';

const execFile = util.promisify(rawExecFile);

/**
 * Utility function for copying files or folders from one place to another.
 * @param source Source location.
 * @param destination Destination location.
 */
const copyFolder = async (source: string, destination: string) => {
  // Read the direcotry and make sure to create the destination folder.
  const files = await fs.promises.readdir(source);
  await fs.promises.mkdir(destination, { recursive: true });

  // For each file copy the file or if its a folder recurse call.
  for (const file of files) {
    const currentSource = path.join(source, file);
    const currentDestination = path.join(destination, file);

    if (fs.lstatSync(currentSource).isDirectory()) {
      await copyFolder(currentSource, currentDestination);
    } else {
      const copyFile = util.promisify(fs.copyFile);
      await copyFile(currentSource, currentDestination);
    }
  }
};

/**
 * Task for cleaning and generating the necesary folders.
 */
const cleanAndGenerateBaseFolder = async () => {
  const task = new Task('clean-generate', async () => {
    await fs.promises.rm(BASE_DIR, {
      recursive: true,
      force: true,
    });
    await fs.promises.rm(PACKED_DIR, { recursive: true, force: true });
    await fs.promises.mkdir(BASE_DIR, {
      recursive: true,
    });
  });
  await task.run();
};

/**
 * Main task for donwloading all the icon packs.
 */
const downloadAndOrganizeIconPacks = async () => {
  const task = new Task('download-organize-icons', async () => {
    for (const icon of ICONS) {
      const iconTask = new Task(`download-${icon.name}`, async () => {
        const iconFolder = path.join(BASE_DIR, icon.name);

        console.log(`💾 Started icon download: ${icon.source.url}/${icon.source.iconsFolder}@${icon.source.branch}`);

        await execFile('git', ['clone', '--filter=tree:0', '--no-checkout', icon.source.url, icon.name], {
          cwd: BASE_DIR,
        });

        await execFile('git', ['sparse-checkout', 'set', '--cone', '--skip-checks', icon.source.iconsFolder], {
          cwd: iconFolder,
        });

        await execFile('git', ['checkout', icon.source.commitHash], {
          cwd: iconFolder,
        });
      });
      await iconTask.run();
    }
  });
  await task.run();
};

/**
 * Task por parsing and packaging each icon pack.
 */
const parseAndPackIcons = async () => {
  const task = new Task('parse-and-pack', async () => {
    // Make sure the packed folder exists
    await fs.promises.mkdir(PACKED_DIR, { recursive: true });

    // Read all folders in the base directory.
    const iconFolders = await fs.promises.readdir(BASE_DIR);
    for (const folder of iconFolders) {
      // Get the icon data by the folder name and copy the folder that has the .svg files into its packed folder.
      const iconData = ICONS.find((icon) => icon.name === folder);
      if (!iconData) continue;
      const originFolder = path.join(BASE_DIR, folder, iconData.source.iconsFolder);
      const destinationFolder = path.join(PACKED_DIR, folder);
      await copyFolder(originFolder, destinationFolder);
    }
  });
  await task.run();
};

/**
 * Task that looks if the icon pack has a custom parser defined and it executes them.
 */
const executeCustomParsers = async () => {
  const task = new Task('execute-custom-parsers', async () => {
    const iconFolders = (await fs.promises.readdir(PACKED_DIR)) as IconPackNames[];

    // Read each icon pack folder and try to find its corresponding data.
    for (const folder of iconFolders) {
      const iconData = ICONS_CUSTOM_PARSERS[folder];
      if (!iconData) continue;
      if (!iconData.customParser) continue;
      // If found and a valid parser exists, execute the parser.
      const executionFolder = path.join(PACKED_DIR, folder);
      await iconData.customParser(executionFolder);
    }
  });
  await task.run();
};

/**
 * Task for copying packaged and organized icons to the web app.
 */
const copyIconsToWebApp = async () => {
  const task = new Task('copy-icon-files', async () => {
    const destinationFolder = path.join(process.cwd() + '/../../apps/web/public/icons');

    await fs.promises.mkdir(destinationFolder, { recursive: true });
    await fs.promises.writeFile(path.join(destinationFolder, 'dummy.txt'), 'dummy', { encoding: 'utf8' });

    const iconFolders = await fs.promises.readdir(PACKED_DIR);
    for (const folder of iconFolders) {
      await copyFolder(path.join(PACKED_DIR, folder), path.join(destinationFolder, folder));
    }
  });
  await task.run();
};

const cleanupFiles = async () => {
  const task = new Task('cleanup-files', async () => {
    const packFolder = path.join(process.cwd(), '/packed');
    await fs.promises.rm(packFolder, { recursive: true });
    const generatedFolder = path.join(process.cwd(), '/generated');
    await fs.promises.rm(generatedFolder, { recursive: true });
  });
  await task.run();
};

const main = async () => {
  await cleanAndGenerateBaseFolder();
  await downloadAndOrganizeIconPacks();
  await parseAndPackIcons();

  await executeCustomParsers();
  await copyIconsToWebApp();
  await cleanupFiles();
};

main().catch((error) => {
  console.error('An error occurred', error);
});
