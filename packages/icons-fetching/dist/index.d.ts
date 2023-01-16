declare const ICONS: readonly [{
    readonly name: "circum-icons";
    readonly requiresFill: true;
    readonly defaultWidth: 1.5;
    readonly source: {
        readonly url: "https://github.com/Klarr-Agency/Circum-Icons.git";
        readonly branch: "main";
        readonly commitHash: "c8fa20b17719bbbc4412f7f5e3333ef9182d3ec3";
        readonly iconsFolder: "svg/";
    };
}, {
    readonly name: "dev-icons";
    readonly requiresFill: true;
    readonly defaultWidth: 1;
    readonly source: {
        readonly url: "https://github.com/vorillaz/devicons.git";
        readonly branch: "master";
        readonly commitHash: "b574cde5e737e75e32a30b7867a4a99ff42a30a0";
        readonly iconsFolder: "!SVG/";
    };
}, {
    readonly name: "simple-icons";
    readonly requiresFill: true;
    readonly defaultWidth: 1;
    readonly source: {
        readonly url: "https://github.com/simple-icons/simple-icons.git";
        readonly branch: "develop";
        readonly commitHash: "5cfce370b203dcd58b1bb3e01086ba30f32d7a2e";
        readonly iconsFolder: "icons/";
    };
}, {
    readonly name: "box-icons";
    readonly requiresFill: true;
    readonly defaultWidth: 1;
    readonly source: {
        readonly url: "https://github.com/atisawd/boxicons.git";
        readonly branch: "master";
        readonly commitHash: "9ffa9136e8681886bb7bd2145cd4098717ce1c11";
        readonly iconsFolder: "svg/regular/";
    };
}, {
    readonly name: "feather-icons";
    readonly requiresFill: false;
    readonly defaultWidth: 2;
    readonly source: {
        readonly url: "https://github.com/feathericons/feather.git";
        readonly branch: "master";
        readonly commitHash: "f81cd40fdcdd5e94f3f97eb670a5058e3aac528d";
        readonly iconsFolder: "icons/";
    };
}, {
    readonly name: "tabler-icons";
    readonly requiresFill: false;
    readonly defaultWidth: 2;
    readonly source: {
        readonly url: "https://github.com/tabler/tabler-icons";
        readonly branch: "master";
        readonly commitHash: "bd262c400df1480016a763a058b524f889f1ac66";
        readonly iconsFolder: "icons/";
    };
}, {
    readonly name: "typ-icons";
    readonly requiresFill: true;
    readonly defaultWidth: 2;
    readonly source: {
        readonly url: "https://github.com/stephenhutchings/typicons.font";
        readonly branch: "master";
        readonly commitHash: "7da5b69c09cad2af36b186e65bf460fa64950b73";
        readonly iconsFolder: "src/svg";
    };
}, {
    readonly name: "remix-icons";
    readonly requiresFill: true;
    readonly defaultWidth: 1.5;
    readonly source: {
        readonly url: "https://github.com/Remix-Design/RemixIcon";
        readonly branch: "main";
        readonly commitHash: "755818100db4687fd907ecaef9f57cc9ea77d0d8";
        readonly iconsFolder: "icons/";
    };
}, {
    readonly name: "jam-icons";
    readonly requiresFill: true;
    readonly defaultWidth: 1.5;
    readonly source: {
        readonly url: "https://github.com/michaelampr/jam";
        readonly branch: "master";
        readonly commitHash: "c8501b14e0480c8becac58a626e72502bca90084";
        readonly iconsFolder: "icons/";
    };
}, {
    readonly name: "eva-icons";
    readonly requiresFill: true;
    readonly defaultWidth: 2;
    readonly source: {
        readonly url: "https://github.com/akveo/eva-icons";
        readonly branch: "master";
        readonly commitHash: "70d2471ff88ab1385d3310b93a406243377b53d5";
        readonly iconsFolder: "package/icons/fill/svg";
    };
}, {
    readonly name: "fontawesome-icons";
    readonly requiresFill: true;
    readonly defaultWidth: 2;
    readonly source: {
        readonly url: "https://github.com/FortAwesome/Font-Awesome";
        readonly branch: "6.x";
        readonly commitHash: "96cafbd73ec4339b8c73c36673ce1518db82cc5c";
        readonly iconsFolder: "svgs/solid/";
    };
}, {
    readonly name: "ant-design-icons";
    readonly requiresFill: true;
    readonly defaultWidth: 2;
    readonly source: {
        readonly url: "https://github.com/ant-design/ant-design-icons";
        readonly branch: "master";
        readonly commitHash: "2758f1c614979acc588ffa151805e75266cd5777";
        readonly iconsFolder: "packages/icons-svg/svg/filled/";
    };
}];

type IconPack = {
    name: string;
    requiresFill: boolean;
    iconsCount?: number;
    defaultWidth: number;
    source: {
        url: string;
        branch: string;
        commitHash: string;
        iconsFolder: string;
    };
};

export { ICONS, IconPack };
