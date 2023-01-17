import { Icon, IconCustomization } from '@modules/icons/typings/icon.typings';
import type { IconPack } from 'icons-fetching';

export type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type IconsState = {
  iconPack: IconPack | null;
  icons: Icon[];
  iconCustomization: IconCustomization;
};

export enum IconsActionType {
  SET_ICON_PACK,
  SET_ICONS,
  SET_ICON_SIZE,
  SET_ICON_COLOR,
  SET_ICON_WIDTH,
}

type IconsPayload = {
  [IconsActionType.SET_ICON_PACK]: {
    iconPack: IconPack;
  };
  [IconsActionType.SET_ICONS]: {
    icons: Icon[];
  };
  [IconsActionType.SET_ICON_SIZE]: {
    size: number;
  };
  [IconsActionType.SET_ICON_COLOR]: {
    color: string;
  };
  [IconsActionType.SET_ICON_WIDTH]: {
    width: number;
  };
};

export type IconsActions = ActionMap<IconsPayload>[keyof ActionMap<IconsPayload>];
