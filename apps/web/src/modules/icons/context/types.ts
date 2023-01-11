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
  iconPack: string;
};

export enum IconsActionType {
  SET_ICON_PACK,
}

type IconsPayload = {
  [IconsActionType.SET_ICON_PACK]: {
    iconPack: string;
  };
};

export type IconsActions = ActionMap<IconsPayload>[keyof ActionMap<IconsPayload>];
