import { IconsSelectionActions, IconsSelectionActionType, IconsSelectionState } from './types';

export const reducer = (state: IconsSelectionState, action: IconsSelectionActions): IconsSelectionState => {
  switch (action.type) {
    case IconsSelectionActionType.SET_SELECTED_ICONS: {
      return {
        ...state,
        selectedIcons: action.payload.icons,
      };
    }
    case IconsSelectionActionType.ADD_SELECTED_ICON: {
      return {
        ...state,
        selectedIcons: [...state.selectedIcons, action.payload.icon],
      };
    }
    case IconsSelectionActionType.REMOVE_SELECTED_ICON: {
      const updatedIcons = state.selectedIcons.filter((icon) => icon.name !== action.payload.name);
      return {
        ...state,
        selectedIcons: updatedIcons,
      };
    }
    case IconsSelectionActionType.CLEAR_SELECTED_ICONS: {
      return {
        ...state,
        selectedIcons: [],
      };
    }
    default:
      throw new Error('The action you requested does not exists!');
  }
};
