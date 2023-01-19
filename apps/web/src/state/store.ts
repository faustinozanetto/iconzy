import { iconsCustomizationSlice } from '@modules/icons/state/customization.slice';
import { selectedIconsSlice } from '@modules/icons/state/selected-icons.slice';
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
  selectedIcons: selectedIconsSlice.reducer,
  iconsCustomization: iconsCustomizationSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
