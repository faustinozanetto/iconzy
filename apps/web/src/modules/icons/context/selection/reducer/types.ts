import { IconWithElement } from '@modules/icons/typings/icon.typings';

import { ActionMap } from '../../icons/types';

export type IconsSelectionState = {
  selectedIcons: IconWithElement[];
};

export type IconsSelectionContextState = {
  state: IconsSelectionState;
  dispatch: React.Dispatch<IconsSelectionActions>;
};

export enum IconsSelectionActionType {
  ADD_SELECTED_ICON,
  REMOVE_SELECTED_ICON,
  CLEAR_SELECTED_ICONS,
}

type IconsSelectionPayload = {
  [IconsSelectionActionType.ADD_SELECTED_ICON]: {
    icon: IconWithElement;
  };
  [IconsSelectionActionType.REMOVE_SELECTED_ICON]: {
    name: IconWithElement['name'];
  };
  [IconsSelectionActionType.CLEAR_SELECTED_ICONS]: object;
};

export type IconsSelectionActions = ActionMap<IconsSelectionPayload>[keyof ActionMap<IconsSelectionPayload>];
