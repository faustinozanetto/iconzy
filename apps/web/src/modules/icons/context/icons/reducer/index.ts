import type { IconsActions, IconsState } from './types';
import { IconsActionType } from './types';

/**
 * Reducer for the icons context.
 * @param state State of the reducer.
 * @param action Action to execute.
 * @returns The modified state.
 */
export const reducer = (state: IconsState, action: IconsActions): IconsState => {
  switch (action.type) {
    case IconsActionType.SET_ICON_PACK: {
      return {
        ...state,
        iconPack: action.payload.iconPack,
      };
    }
    case IconsActionType.SET_ICONS: {
      return {
        ...state,
        icons: action.payload.icons,
      };
    }
  }
};
