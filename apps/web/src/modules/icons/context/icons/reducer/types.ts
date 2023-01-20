import { ActionMap, Icon } from '@modules/icons/typings/icon.typings';
import type { IconPack } from 'icons-fetching';

export type IconsState = {
  iconPack: IconPack;
  icons: Icon[];
};

export enum IconsActionType {
  SET_ICON_PACK,
  SET_ICONS,
}

type IconsPayload = {
  [IconsActionType.SET_ICON_PACK]: {
    iconPack: IconPack;
  };
  [IconsActionType.SET_ICONS]: {
    icons: Icon[];
  };
};

export type IconsActions = ActionMap<IconsPayload>[keyof ActionMap<IconsPayload>];
