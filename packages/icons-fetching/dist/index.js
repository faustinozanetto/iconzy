// src/utils/index.ts
import * as path from "path";

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
  },
  {
    name: "cryptocurrency-icons",
    type: "fill",
    defaultWidth: 2,
    source: {
      url: "https://github.com/spothq/cryptocurrency-icons",
      branch: "master",
      commitHash: "1a63530be6e374711a8554f31b17e4cb92c25fa5",
      iconsFolder: "svg/white",
      license: {
        type: "CC0-1.0"
      }
    }
  },
  {
    name: "bas-icons",
    type: "outline",
    defaultWidth: 2,
    source: {
      url: "https://github.com/solomon-fibonacci/react-basicons",
      branch: "main",
      commitHash: "a4850b127fad66106022238b48634f828caecc9c",
      iconsFolder: "svg",
      license: {
        type: "MIT"
      }
    }
  }
];

// src/utils/index.ts
var BASE_DIR = path.join(process.cwd(), "/generated");
var PACKED_DIR = path.join(process.cwd(), "/packed");
export {
  ICONS
};
