import { selectedIconsSlice } from '@modules/icons/state/selected-icons.slice';
import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const reducers = combineReducers({
  selectedIcons: selectedIconsSlice.reducer,
});

export const store = () =>
  configureStore({
    reducer: reducers,
    devTools: true,
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export const wrapper = createWrapper<AppStore>(store);
