import { IconCustomization } from '@modules/icons/typings/icon.typings';

import { ActionMap } from '../../icons/types';

export type IconsCustomizationState = {
  customization: IconCustomization;
};

export type IconsCustomizationContextState = {
  state: IconsCustomizationState;
  dispatch: React.Dispatch<IconsCustomizationActions>;
};

export enum IconsCustomizationActionType {
  SET_ICON_SIZE,
  SET_ICON_COLOR,
  SET_ICON_WIDTH,
}

type IconsCustomizationPayload = {
  [IconsCustomizationActionType.SET_ICON_SIZE]: {
    size: number;
  };
  [IconsCustomizationActionType.SET_ICON_COLOR]: {
    color: string;
  };
  [IconsCustomizationActionType.SET_ICON_WIDTH]: {
    width: number;
  };
};

export type IconsCustomizationActions =
  ActionMap<IconsCustomizationPayload>[keyof ActionMap<IconsCustomizationPayload>];
