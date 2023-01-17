import type { IconsActions, IconsState } from './types';
import { IconsActionType } from './types';

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
    case IconsActionType.SET_ICON_SIZE: {
      return {
        ...state,
        iconCustomization: {
          ...state.iconCustomization,
          size: action.payload.size,
        },
      };
    }
    case IconsActionType.SET_ICON_COLOR: {
      return {
        ...state,
        iconCustomization: {
          ...state.iconCustomization,
          color: action.payload.color,
        },
      };
    }
    case IconsActionType.SET_ICON_WIDTH: {
      return {
        ...state,
        iconCustomization: {
          ...state.iconCustomization,
          width: action.payload.width,
        },
      };
    }
  }
};
