import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@state/store';

import { Icon, IconWithElement } from '../typings/icon.typings';

export type IconsSelectionState = {
  selectedIcons: Icon[];
};

const initialState: IconsSelectionState = {
  selectedIcons: [],
};

export const selectedIconsSlice = createSlice({
  initialState,
  name: 'selected-icons',
  reducers: {
    addSelectedIcon: (state, action: PayloadAction<Icon>) => {
      const updatedIcons = [...state.selectedIcons, action.payload];
      state.selectedIcons = updatedIcons;
    },
    removeSelectedIcon: (state, action: PayloadAction<Icon['name']>) => {
      const updatedIcons = state.selectedIcons.filter((icon) => icon.name !== action.payload);
      state.selectedIcons = updatedIcons;
    },
    setSelectedIcons: (state, action: PayloadAction<IconWithElement[]>) => {
      state.selectedIcons = action.payload;
    },
    clearSelectedIcons: (state) => {
      state.selectedIcons = [];
    },
  },
});

export const { addSelectedIcon, removeSelectedIcon, setSelectedIcons, clearSelectedIcons } = selectedIconsSlice.actions;
export const selectSelectedIcons = (state: RootState) => state.selectedIcons.selectedIcons;
