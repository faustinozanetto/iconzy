import { IconPack } from '@iconzy/icons-fetching';
import { create } from 'zustand';
import { Icon } from '../typings/icon.typings';

interface IconsSliceState {
  iconPack: IconPack | null;
  icons: Icon[];
}

interface IconsSliceActions {
  setIconPack: (iconPack: IconPack) => void;
  setIcons: (icons: Icon[]) => void;
}

export const useIconsStore = create<IconsSliceState & IconsSliceActions>((set) => ({
  iconPack: null,
  icons: [],
  setIconPack(iconPack) {
    set({ iconPack });
  },
  setIcons(icons) {
    set({ icons });
  },
}));
