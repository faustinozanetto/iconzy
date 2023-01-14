declare const ICONS: IconPackRaw[];
type IconPackRaw = {
    name: string;
    requiresFill: boolean;
    iconsCount?: number;
    source: {
        url: string;
        branch: string;
        commitHash: string;
        iconsFolder: string;
    };
};

export { ICONS, IconPackRaw };
