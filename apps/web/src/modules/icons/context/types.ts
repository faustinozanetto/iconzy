import { Icon, IconCustomization, IconPack } from '../typings/icon.typings';

export type ActionMap<M extends { [index: string]: any }> = {
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
};

export type IconsActions = ActionMap<IconsPayload>[keyof ActionMap<IconsPayload>];
