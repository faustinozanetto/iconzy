import * as path from 'path';
import util from 'node:util';
import fs from 'fs';
import { execFile as rawExecFile } from 'node:child_process';
import Task from './task';
import { ICONS } from '../utils';

const execFile = util.promisify(rawExecFile);

const BASE_DIR = path.join(process.cwd(), '/generated');

const cleanAndGenerateBaseFolder = async () => {
  const task = new Task('clean-generate', async () => {
    await fs.promises.rm(BASE_DIR, {
      recursive: true,
      force: true,
    });
    await fs.promises.mkdir(BASE_DIR, {
      recursive: true,
    });
  });
  await task.run();
};

const downloadAndOrganizeIconPacks = async () => {
  const task = new Task('download-organize-icons', async () => {
    for (const icon of ICONS) {
      const iconTask = new Task(`download-${icon.name}`, async () => {
        const iconFolder = path.join(BASE_DIR, icon.name);

        console.log(`Started icon download: ${icon.source.url}/${icon.source.iconsFolder}@${icon.source.branch}`);

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

const parseAndPackIcons = async () => {
  const task = new Task('parse-and-pack', async () => {
    // Make sure the packed folder exists
    const packFolder = path.join(process.cwd(), '/packed');
    await fs.promises.mkdir(packFolder, { recursive: true });

    // Read all folders in the base directory.
    const iconFolders = await fs.promises.readdir(BASE_DIR);
    for (const folder of iconFolders) {
      // Get the icon data by the folder name and copy the folder that has the .svg files into its packed folder.
      const iconData = ICONS.find((icon) => icon.name === folder);
      if (!iconData) continue;
      await copyFolder(path.join(BASE_DIR, folder, iconData.source.iconsFolder), path.join(packFolder, folder));
    }
  });
  await task.run();
};

const copyIconsToWebApp = async () => {
  const packFolder = path.join(process.cwd(), '/packed');
  const destinationFolder = path.join(process.cwd(), '../../apps/web/public/icons');

  const iconFolders = await fs.promises.readdir(packFolder);

  for (const folder of iconFolders) {
    await copyFolder(path.join(packFolder, folder), path.join(destinationFolder, folder));
  }
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
  await copyIconsToWebApp();
  await cleanupFiles();
};

main().catch((error) => {
  console.error('An error occurred', error);
});
