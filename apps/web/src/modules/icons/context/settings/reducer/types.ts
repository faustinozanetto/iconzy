import {
  ActionMap,
  IconCustomization,
  IconExportPlatforms,
  IconExportTypes,
  IconsExport,
} from '@modules/icons/typings/icon.typings';

export type IconsSettingsState = {
  customization: IconCustomization;
  export: IconsExport;
};

export type IconsSettingsContextState = {
  state: IconsSettingsState;
  dispatch: React.Dispatch<IconsSettingsActions>;
};

export enum IconsSettingsActionType {
  SET_ICON_SIZE,
  SET_ICON_COLOR,
  SET_ICON_WIDTH,
  SET_EXPORT_PLATFORM,
  SET_EXPORT_TYPE,
}

type IconsSettingsPayload = {
  [IconsSettingsActionType.SET_ICON_SIZE]: {
    size: number;
  };
  [IconsSettingsActionType.SET_ICON_COLOR]: {
    color: string;
  };
  [IconsSettingsActionType.SET_ICON_WIDTH]: {
    width: number;
  };
  [IconsSettingsActionType.SET_EXPORT_PLATFORM]: {
    platform: IconExportPlatforms;
  };
  [IconsSettingsActionType.SET_EXPORT_TYPE]: {
    type: IconExportTypes;
  };
};

export type IconsSettingsActions = ActionMap<IconsSettingsPayload>[keyof ActionMap<IconsSettingsPayload>];
