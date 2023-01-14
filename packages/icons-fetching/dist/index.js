// src/icon-packs.json
var icon_packs_default = [
  {
    name: "circum-icons",
    requiresFill: true,
    source: {
      url: "https://github.com/Klarr-Agency/Circum-Icons.git",
      branch: "main",
      commitHash: "a2924cb1ee37b9fa39ef023a36f1c884b3492e9b",
      iconsFolder: "svg/"
    }
  },
  {
    name: "dev-icons",
    requiresFill: true,
    source: {
      url: "https://github.com/vorillaz/devicons.git",
      branch: "master",
      commitHash: "ba75593fdf8d66496676a90cbf127d721f73e961",
      iconsFolder: "!SVG/"
    }
  },
  {
    name: "simple-icons",
    requiresFill: true,
    source: {
      url: "https://github.com/simple-icons/simple-icons.git",
      branch: "develop",
      commitHash: "f726999af2714f9ed69d4f60ad36aec9e089af40",
      iconsFolder: "icons/"
    }
  },
  {
    name: "box-icons",
    requiresFill: true,
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
    source: {
      url: "https://github.com/tabler/tabler-icons",
      branch: "master",
      commitHash: "82d4bc15d7faa21ed86c75bde80d213fc0fa2e12",
      iconsFolder: "icons/"
    }
  }
];

// src/utils/index.ts
var ICONS = icon_packs_default;
export {
  ICONS
};
