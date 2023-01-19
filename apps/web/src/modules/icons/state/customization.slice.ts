import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@state/store';

import { IconCustomization } from '../typings/icon.typings';

export type IconsCustomizationState = {
  customization: IconCustomization;
};

const initialState: IconsCustomizationState = {
  customization: { size: 50, color: '#6936f5', width: 2 },
};

export const iconsCustomizationSlice = createSlice({
  initialState,
  name: 'selected-icons',
  reducers: {
    setIconSize: (state, action: PayloadAction<number>) => {
      const iconSize = action.payload;
      document.documentElement.style.setProperty('--grid-icon-size', `${iconSize}px`);
      state.customization.size = iconSize;
    },
    setIconWidth: (state, action: PayloadAction<number>) => {
      const iconWidth = action.payload;
      document.documentElement.style.setProperty('--grid-icon-width', `${iconWidth}px`);
      state.customization.width = iconWidth;
    },
    setIconColor: (state, action: PayloadAction<string>) => {
      const iconColor = action.payload;
      document.documentElement.style.setProperty('--grid-icon-color', iconColor);
      state.customization.color = iconColor;
    },
  },
});

export const { setIconSize, setIconWidth, setIconColor } = iconsCustomizationSlice.actions;
export const selectIconsCustomization = (state: RootState) => state.iconsCustomization.customization;
