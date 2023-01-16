// src/fetcher/icon-fetching.ts
import * as path3 from "path";
import util2 from "util";
import fs2 from "fs";
import { execFile as rawExecFile } from "child_process";

// src/fetcher/task.ts
var Task = class {
  constructor(name, func) {
    this.name = name;
    this.func = func;
  }
  async run() {
    const startTime = performance.now();
    console.log(`Executing Task: ${this.name}`);
    await this.func();
    const endTime = performance.now();
    console.log(`Task ${this.name} completed in ${Math.floor(endTime - startTime) / 100} seconds.`);
  }
};
var task_default = Task;

// src/utils/index.ts
import * as path from "path";

// src/data/icon-packs.ts
var ICONS = [
  {
    name: "circum-icons",
    requiresFill: true,
    defaultWidth: 1.5,
    source: {
      url: "https://github.com/Klarr-Agency/Circum-Icons.git",
      branch: "main",
      commitHash: "c8fa20b17719bbbc4412f7f5e3333ef9182d3ec3",
      iconsFolder: "svg/"
    }
  },
  {
    name: "dev-icons",
    requiresFill: true,
    defaultWidth: 1,
    source: {
      url: "https://github.com/vorillaz/devicons.git",
      branch: "master",
      commitHash: "b574cde5e737e75e32a30b7867a4a99ff42a30a0",
      iconsFolder: "!SVG/"
    }
  },
  {
    name: "simple-icons",
    requiresFill: true,
    defaultWidth: 1,
    source: {
      url: "https://github.com/simple-icons/simple-icons.git",
      branch: "develop",
      commitHash: "5cfce370b203dcd58b1bb3e01086ba30f32d7a2e",
      iconsFolder: "icons/"
    }
  },
  {
    name: "box-icons",
    requiresFill: true,
    defaultWidth: 1,
    source: {
      url: "https://github.com/atisawd/boxicons.git",
      branch: "master",
      commitHash: "9ffa9136e8681886bb7bd2145cd4098717ce1c11",
      iconsFolder: "svg/regular/"
    }
  },
  {
    name: "feather-icons",
    requiresFill: false,
    defaultWidth: 2,
    source: {
      url: "https://github.com/feathericons/feather.git",
      branch: "master",
      commitHash: "f81cd40fdcdd5e94f3f97eb670a5058e3aac528d",
      iconsFolder: "icons/"
    }
  },
  {
    name: "tabler-icons",
    requiresFill: false,
    defaultWidth: 2,
    source: {
      url: "https://github.com/tabler/tabler-icons",
      branch: "master",
      commitHash: "bd262c400df1480016a763a058b524f889f1ac66",
      iconsFolder: "icons/"
    }
  },
  {
    name: "typ-icons",
    requiresFill: true,
    defaultWidth: 2,
    source: {
      url: "https://github.com/stephenhutchings/typicons.font",
      branch: "master",
      commitHash: "7da5b69c09cad2af36b186e65bf460fa64950b73",
      iconsFolder: "src/svg"
    }
  },
  {
    name: "remix-icons",
    requiresFill: true,
    defaultWidth: 1.5,
    source: {
      url: "https://github.com/Remix-Design/RemixIcon",
      branch: "main",
      commitHash: "755818100db4687fd907ecaef9f57cc9ea77d0d8",
      iconsFolder: "icons/"
    }
  },
  {
    name: "jam-icons",
    requiresFill: true,
    defaultWidth: 1.5,
    source: {
      url: "https://github.com/michaelampr/jam",
      branch: "master",
      commitHash: "c8501b14e0480c8becac58a626e72502bca90084",
      iconsFolder: "icons/"
    }
  },
  {
    name: "eva-icons",
    requiresFill: true,
    defaultWidth: 2,
    source: {
      url: "https://github.com/akveo/eva-icons",
      branch: "master",
      commitHash: "70d2471ff88ab1385d3310b93a406243377b53d5",
      iconsFolder: "package/icons/fill/svg"
    }
  },
  {
    name: "fontawesome-icons",
    requiresFill: true,
    defaultWidth: 2,
    source: {
      url: "https://github.com/FortAwesome/Font-Awesome",
      branch: "6.x",
      commitHash: "96cafbd73ec4339b8c73c36673ce1518db82cc5c",
      iconsFolder: "svgs/solid/"
    }
  },
  {
    name: "ant-design-icons",
    requiresFill: true,
    defaultWidth: 2,
    source: {
      url: "https://github.com/ant-design/ant-design-icons",
      branch: "master",
      commitHash: "2758f1c614979acc588ffa151805e75266cd5777",
      iconsFolder: "packages/icons-svg/svg/filled/"
    }
  }
];

// src/utils/index.ts
var BASE_DIR = path.join(process.cwd(), "/generated");
var PACKED_DIR = path.join(process.cwd(), "/packed");

// src/data/icon-pack-parsers.ts
import * as fs from "fs";
import * as path2 from "path";
import util from "util";
import { JSDOM } from "jsdom";
var ICONS_CUSTOM_PARSERS = {
  "remix-icons": {
    async customParser(folder) {
      const categoriesFolders = await fs.promises.readdir(path2.join(folder, "/"));
      for (const categoryFolder of categoriesFolders) {
        const categoryPath = path2.join(folder, categoryFolder);
        const content = await fs.promises.readdir(categoryPath);
        for (const file of content) {
          const currentSource = path2.join(categoryPath, file);
          const currentDestination = path2.join(folder, file);
          const copyFile2 = util.promisify(fs.copyFile);
          await copyFile2(currentSource, currentDestination);
        }
        await fs.promises.rm(categoryPath, {
          recursive: true,
          force: true
        });
      }
    }
  },
  "eva-icons": {
    async customParser(folder) {
      const content = await fs.promises.readdir(folder);
      for (const file of content) {
        const fileLocation = path2.join(folder, file);
        const fileContent = await fs.promises.readFile(fileLocation, { encoding: "utf-8" });
        const window = new JSDOM(fileContent).window;
        const attributesToRemove = ["class"];
        const elementsToRemove = ["rect", "style", "defs"];
        elementsToRemove.forEach((tag) => {
          const elements = window.document.getElementsByTagName(tag);
          for (let i = elements.length - 1; i >= 0; i--) {
            const element = elements[i];
            attributesToRemove.forEach((attribute) => {
              element.removeAttribute(attribute);
            });
            element.remove();
          }
        });
        attributesToRemove.forEach((attribute) => {
          const elements = window.document.querySelectorAll(`[${attribute}]`);
          for (let i = elements.length - 1; i >= 0; i--) {
            elements[i].removeAttribute(attribute);
          }
        });
        const rootElement = window.document.querySelector("svg");
        if (!rootElement)
          throw new Error("An error occurred while executing custom parser for eva-icons");
        const modifiedSource = new window.XMLSerializer().serializeToString(rootElement);
        console.log({ modifiedSource });
        await fs.promises.writeFile(fileLocation, modifiedSource, { encoding: "utf-8" });
      }
    }
  }
};

// src/fetcher/icon-fetching.ts
var execFile = util2.promisify(rawExecFile);
var cleanAndGenerateBaseFolder = async () => {
  const task = new task_default("clean-generate", async () => {
    await fs2.promises.rm(BASE_DIR, {
      recursive: true,
      force: true
    });
    await fs2.promises.rm(PACKED_DIR, { recursive: true, force: true });
    await fs2.promises.mkdir(BASE_DIR, {
      recursive: true
    });
  });
  await task.run();
};
var downloadAndOrganizeIconPacks = async () => {
  const task = new task_default("download-organize-icons", async () => {
    for (const icon of ICONS) {
      const iconTask = new task_default(`download-${icon.name}`, async () => {
        const iconFolder = path3.join(BASE_DIR, icon.name);
        console.log(`Started icon download: ${icon.source.url}/${icon.source.iconsFolder}@${icon.source.branch}`);
        await execFile("git", ["clone", "--filter=tree:0", "--no-checkout", icon.source.url, icon.name], {
          cwd: BASE_DIR
        });
        await execFile("git", ["sparse-checkout", "set", "--cone", "--skip-checks", icon.source.iconsFolder], {
          cwd: iconFolder
        });
        await execFile("git", ["checkout", icon.source.commitHash], {
          cwd: iconFolder
        });
      });
      await iconTask.run();
    }
  });
  await task.run();
};
var copyFolder = async (source, destination) => {
  const files = await fs2.promises.readdir(source);
  await fs2.promises.mkdir(destination, { recursive: true });
  for (const file of files) {
    const currentSource = path3.join(source, file);
    const currentDestination = path3.join(destination, file);
    if (fs2.lstatSync(currentSource).isDirectory()) {
      await copyFolder(currentSource, currentDestination);
    } else {
      const copyFile2 = util2.promisify(fs2.copyFile);
      await copyFile2(currentSource, currentDestination);
    }
  }
};
var parseAndPackIcons = async () => {
  const task = new task_default("parse-and-pack", async () => {
    await fs2.promises.mkdir(PACKED_DIR, { recursive: true });
    const iconFolders = await fs2.promises.readdir(BASE_DIR);
    for (const folder of iconFolders) {
      const iconData = ICONS.find((icon) => icon.name === folder);
      if (!iconData)
        continue;
      const originFolder = path3.join(BASE_DIR, folder, iconData.source.iconsFolder);
      const destinationFolder = path3.join(PACKED_DIR, folder);
      await copyFolder(originFolder, destinationFolder);
    }
  });
  await task.run();
};
var executeCustomParsers = async () => {
  const task = new task_default("execute-custom-parsers", async () => {
    const iconFolders = await fs2.promises.readdir(PACKED_DIR);
    for (const folder of iconFolders) {
      const iconData = ICONS_CUSTOM_PARSERS[folder];
      if (!iconData)
        continue;
      if (!iconData.customParser)
        continue;
      const executionFolder = path3.join(PACKED_DIR, folder);
      await iconData.customParser(executionFolder);
    }
  });
  await task.run();
};
var copyIconsToWebApp = async () => {
  const destinationFolder = path3.join(process.cwd(), "../../apps/web/public/icons");
  await fs2.promises.rm(destinationFolder, { recursive: true });
  const iconFolders = await fs2.promises.readdir(PACKED_DIR);
  for (const folder of iconFolders) {
    await copyFolder(path3.join(PACKED_DIR, folder), path3.join(destinationFolder, folder));
  }
};
var cleanupFiles = async () => {
  const task = new task_default("cleanup-files", async () => {
    const packFolder = path3.join(process.cwd(), "/packed");
    await fs2.promises.rm(packFolder, { recursive: true });
    const generatedFolder = path3.join(process.cwd(), "/generated");
    await fs2.promises.rm(generatedFolder, { recursive: true });
  });
  await task.run();
};
var main = async () => {
  await cleanAndGenerateBaseFolder();
  await downloadAndOrganizeIconPacks();
  await parseAndPackIcons();
  await executeCustomParsers();
  await copyIconsToWebApp();
  await cleanupFiles();
};
main().catch((error) => {
  console.error("An error occurred", error);
});
