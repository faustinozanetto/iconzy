import { ActionMap, Icon } from '@modules/icons/typings/icon.typings';

export type IconsSelectionState = {
  selectedIcons: Icon[];
};

export type IconsSelectionContextState = {
  state: IconsSelectionState;
  dispatch: React.Dispatch<IconsSelectionActions>;
};

export enum IconsSelectionActionType {
  SET_SELECTED_ICONS,
  ADD_SELECTED_ICON,
  REMOVE_SELECTED_ICON,
  CLEAR_SELECTED_ICONS,
}

type IconsSelectionPayload = {
  [IconsSelectionActionType.SET_SELECTED_ICONS]: {
    icons: Icon[];
  };
  [IconsSelectionActionType.ADD_SELECTED_ICON]: {
    icon: Icon;
  };
  [IconsSelectionActionType.REMOVE_SELECTED_ICON]: {
    name: Icon['name'];
  };
  [IconsSelectionActionType.CLEAR_SELECTED_ICONS]: object;
};

export type IconsSelectionActions = ActionMap<IconsSelectionPayload>[keyof ActionMap<IconsSelectionPayload>];
