declare const ICONS: IconPack[];

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
