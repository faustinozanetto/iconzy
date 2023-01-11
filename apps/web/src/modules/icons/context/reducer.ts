import { IconsActions, IconsActionType, IconsState } from './types';

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
