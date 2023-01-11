import { Icon, IconPack } from '../typings/editor.typings';

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
