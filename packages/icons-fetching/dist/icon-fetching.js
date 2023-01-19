// src/fetcher/icon-fetching.ts
import { execFile as rawExecFile } from "child_process";
import util2 from "util";
import fs2 from "fs";
import * as path3 from "path";

// src/data/icon-pack-parsers.ts
import util from "util";
import * as fs from "fs";
import { JSDOM } from "jsdom";
import * as path from "path";
var copyFile2 = util.promisify(fs.copyFile);
var readContentsFromFile = async (folder, file) => {
  const fileLocation = path.join(folder, file);
  const fileContent = await fs.promises.readFile(fileLocation, { encoding: "utf-8" });
  return fileContent;
};
var removeAttributesAndTags = (fileContent, attributes = [], tags = []) => {
  const window = new JSDOM(fileContent).window;
  tags.forEach((tag) => {
    const elements = window.document.getElementsByTagName(tag);
    for (let i = elements.length - 1; i >= 0; i--) {
      const element = elements[i];
      element.remove();
    }
  });
  attributes.forEach((attribute) => {
    const elements = window.document.querySelectorAll(`[${attribute}]`);
    for (let i = elements.length - 1; i >= 0; i--) {
      elements[i].removeAttribute(attribute);
    }
  });
  const rootElement = window.document.querySelector("svg");
  if (!rootElement)
    throw new Error("An error occurred while executing custom parser for eva-icons");
  return new window.XMLSerializer().serializeToString(rootElement);
};
var addAttributes = (fileContent, attributes) => {
  const window = new JSDOM(fileContent).window;
  const rootElement = window.document.querySelector("svg");
  if (!rootElement)
    throw new Error("An error occurred while trying to get root node");
  attributes.forEach((attribute) => {
    rootElement.setAttribute(attribute.name, attribute.value);
  });
  return new window.XMLSerializer().serializeToString(rootElement);
};
var ICONS_CUSTOM_PARSERS = {
  "remix-icons": {
    async customParser(folder) {
      const categoriesFolders = await fs.promises.readdir(path.join(folder, "/"));
      for (const categoryFolder of categoriesFolders) {
        const categoryPath = path.join(folder, categoryFolder);
        const content = await fs.promises.readdir(categoryPath);
        for (const file of content) {
          const currentSource = path.join(categoryPath, file);
          const currentDestination = path.join(folder, file);
          await copyFile2(currentSource, currentDestination);
        }
        await fs.promises.rm(categoryPath, {
          recursive: true,
          force: true
        });
      }
    }
  },
  "fontawesome-icons": {
    async customParser(folder) {
      const content = await fs.promises.readdir(folder);
      for (const file of content) {
        const fileContent = await readContentsFromFile(folder, file);
        const modifiedSource = addAttributes(fileContent, [{ name: "fill", value: "currentColor" }]);
        await fs.promises.writeFile(path.join(folder, file), modifiedSource, { encoding: "utf-8" });
      }
    }
  },
  "eva-icons": {
    async customParser(folder) {
      const content = await fs.promises.readdir(folder);
      for (const file of content) {
        const fileContent = await readContentsFromFile(folder, file);
        const modifiedSource = removeAttributesAndTags(fileContent, ["class"], ["rect", "style", "defs"]);
        await fs.promises.writeFile(path.join(folder, file), modifiedSource, { encoding: "utf-8" });
      }
    }
  },
  "dev-icons": {
    async customParser(folder) {
      const content = await fs.promises.readdir(folder);
      for (const file of content) {
        const fileContent = await readContentsFromFile(folder, file);
        const modifiedSource = removeAttributesAndTags(fileContent, ["fill"]);
        await fs.promises.writeFile(path.join(folder, file), modifiedSource, { encoding: "utf-8" });
      }
    }
  },
  "health-icons": {
    async customParser(folder) {
      const categoriesFolders = await fs.promises.readdir(path.join(folder, "/"));
      for (const categoryFolder of categoriesFolders) {
        const categoryPath = path.join(folder, categoryFolder);
        const content = await fs.promises.readdir(categoryPath);
        for (const file of content) {
          const fileLocation = path.join(categoryPath, file);
          const fileContent = await fs.promises.readFile(fileLocation, { encoding: "utf-8" });
          const modifiedSource = removeAttributesAndTags(fileContent, ["fill", "stroke"]);
          await fs.promises.writeFile(fileLocation, modifiedSource, { encoding: "utf-8" });
          const currentSource = path.join(categoryPath, file);
          const currentDestination = path.join(folder, file);
          await copyFile2(currentSource, currentDestination);
        }
        await fs.promises.rm(categoryPath, {
          recursive: true,
          force: true
        });
      }
    }
  },
  "carbon-icons": {
    async customParser(folder) {
      const content = await fs.promises.readdir(folder);
      for (const file of content) {
        const fileContent = await readContentsFromFile(folder, file);
        const modifiedSource = removeAttributesAndTags(fileContent, ["fill"]);
        await fs.promises.writeFile(path.join(folder, file), modifiedSource, { encoding: "utf-8" });
      }
    }
  },
  "akar-icons": {
    async customParser(folder) {
      const content = await fs.promises.readdir(folder);
      for (const file of content) {
        const fileContent = await readContentsFromFile(folder, file);
        await fs.promises.writeFile(path.join(folder, file), fileContent, { encoding: "utf-8" });
      }
    }
  }
};

// src/utils/index.ts
import * as path2 from "path";

// src/data/icon-packs.ts
var ICONS = [
  {
    name: "circum-icons",
    type: "fill",
    defaultWidth: 1.5,
    source: {
      url: "https://github.com/Klarr-Agency/Circum-Icons.git",
      branch: "main",
      commitHash: "c8fa20b17719bbbc4412f7f5e3333ef9182d3ec3",
      iconsFolder: "svg/",
      license: {
        type: "MPL-2.0"
      }
    }
  },
  {
    name: "dev-icons",
    type: "fill",
    defaultWidth: 1,
    source: {
      url: "https://github.com/vorillaz/devicons.git",
      branch: "master",
      commitHash: "b574cde5e737e75e32a30b7867a4a99ff42a30a0",
      iconsFolder: "!SVG/",
      license: {
        type: "None"
      }
    }
  },
  {
    name: "simple-icons",
    type: "fill",
    defaultWidth: 1,
    source: {
      url: "https://github.com/simple-icons/simple-icons.git",
      branch: "develop",
      commitHash: "5cfce370b203dcd58b1bb3e01086ba30f32d7a2e",
      iconsFolder: "icons/",
      license: {
        type: "CC0-1.0"
      }
    }
  },
  {
    name: "box-icons",
    type: "fill",
    defaultWidth: 1,
    source: {
      url: "https://github.com/atisawd/boxicons.git",
      branch: "master",
      commitHash: "9ffa9136e8681886bb7bd2145cd4098717ce1c11",
      iconsFolder: "svg/regular/",
      license: {
        type: "MIT"
      }
    }
  },
  {
    name: "feather-icons",
    type: "outline",
    defaultWidth: 2,
    source: {
      url: "https://github.com/feathericons/feather.git",
      branch: "master",
      commitHash: "f81cd40fdcdd5e94f3f97eb670a5058e3aac528d",
      iconsFolder: "icons/",
      license: {
        type: "MIT"
      }
    }
  },
  {
    name: "tabler-icons",
    type: "outline",
    defaultWidth: 2,
    source: {
      url: "https://github.com/tabler/tabler-icons",
      branch: "master",
      commitHash: "bd262c400df1480016a763a058b524f889f1ac66",
      iconsFolder: "icons/",
      license: {
        type: "MIT"
      }
    }
  },
  {
    name: "typ-icons",
    type: "fill",
    defaultWidth: 2,
    source: {
      url: "https://github.com/stephenhutchings/typicons.font",
      branch: "master",
      commitHash: "7da5b69c09cad2af36b186e65bf460fa64950b73",
      iconsFolder: "src/svg",
      license: {
        type: "SIL"
      }
    }
  },
  {
    name: "remix-icons",
    type: "fill",
    defaultWidth: 1.5,
    source: {
      url: "https://github.com/Remix-Design/RemixIcon",
      branch: "main",
      commitHash: "755818100db4687fd907ecaef9f57cc9ea77d0d8",
      iconsFolder: "icons/",
      license: {
        type: "Apache 2.0"
      }
    }
  },
  {
    name: "jam-icons",
    type: "fill",
    defaultWidth: 1.5,
    source: {
      url: "https://github.com/michaelampr/jam",
      branch: "master",
      commitHash: "c8501b14e0480c8becac58a626e72502bca90084",
      iconsFolder: "icons/",
      license: {
        type: "MIT"
      }
    }
  },
  {
    name: "eva-icons",
    type: "fill",
    defaultWidth: 2,
    source: {
      url: "https://github.com/akveo/eva-icons",
      branch: "master",
      commitHash: "70d2471ff88ab1385d3310b93a406243377b53d5",
      iconsFolder: "package/icons/fill/svg",
      license: {
        type: "MIT"
      }
    }
  },
  {
    name: "fontawesome-icons",
    type: "fill",
    defaultWidth: 2,
    source: {
      url: "https://github.com/FortAwesome/Font-Awesome",
      branch: "6.x",
      commitHash: "96cafbd73ec4339b8c73c36673ce1518db82cc5c",
      iconsFolder: "svgs/solid/",
      license: {
        type: "CCY BY 4.0"
      }
    }
  },
  {
    name: "ant-design-icons",
    type: "fill",
    defaultWidth: 2,
    source: {
      url: "https://github.com/ant-design/ant-design-icons",
      branch: "master",
      commitHash: "2758f1c614979acc588ffa151805e75266cd5777",
      iconsFolder: "packages/icons-svg/svg/filled/",
      license: {
        type: "MIT"
      }
    }
  },
  {
    name: "akar-icons",
    type: "outline",
    defaultWidth: 2,
    source: {
      url: "https://github.com/artcoholic/akar-icons",
      branch: "master",
      commitHash: "8f2f73d45be190436866c6dbe819505b3c90f7bb",
      iconsFolder: "src/svg/",
      license: {
        type: "MIT"
      }
    }
  },
  {
    name: "carbon-icons",
    type: "fill",
    defaultWidth: 2,
    source: {
      url: "https://github.com/carbon-design-system/carbon-icons",
      branch: "master",
      commitHash: "acc2c77d01f7e8d89f81a1a83402a28f7e6542f0",
      iconsFolder: "src/svg/",
      license: {
        type: "Apache 2.0"
      }
    }
  },
  {
    name: "health-icons",
    type: "fill",
    defaultWidth: 2,
    source: {
      url: "https://github.com/resolvetosavelives/healthicons",
      branch: "master",
      commitHash: "c2c2b98f7a4cb3a1569b8fcb9bafde9a4488813c",
      iconsFolder: "public/icons/svg/filled",
      license: {
        type: "MIT"
      }
    }
  }
];

// src/utils/index.ts
var BASE_DIR = path2.join(process.cwd(), "/generated");
var PACKED_DIR = path2.join(process.cwd(), "/packed");

// src/fetcher/task.ts
var Task = class {
  constructor(name, func) {
    this.name = name;
    this.func = func;
  }
  async run() {
    const startTime = performance.now();
    console.log(`\u{1F6E0} Executing Task: ${this.name}`);
    await this.func();
    const endTime = performance.now();
    console.log(`\u{1F389} Task ${this.name} completed in ${Math.floor(endTime - startTime) / 100} seconds.`);
  }
};
var task_default = Task;

// src/fetcher/icon-fetching.ts
var execFile = util2.promisify(rawExecFile);
var copyFolder = async (source, destination) => {
  const files = await fs2.promises.readdir(source);
  await fs2.promises.mkdir(destination, { recursive: true });
  for (const file of files) {
    const currentSource = path3.join(source, file);
    const currentDestination = path3.join(destination, file);
    if (fs2.lstatSync(currentSource).isDirectory()) {
      await copyFolder(currentSource, currentDestination);
    } else {
      const copyFile3 = util2.promisify(fs2.copyFile);
      await copyFile3(currentSource, currentDestination);
    }
  }
};
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
        console.log(`\u{1F4BE} Started icon download: ${icon.source.url}/${icon.source.iconsFolder}@${icon.source.branch}`);
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
  await fs2.promises.mkdir(destinationFolder);
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
