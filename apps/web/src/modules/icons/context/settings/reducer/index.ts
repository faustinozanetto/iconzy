import { IconsSettingsActions, IconsSettingsActionType, IconsSettingsState } from './types';

/**
 * Reducer for the selected icons context.
 * @param state State of the reducer.
 * @param action Action to execute.
 * @returns The modified state.
 */
export const reducer = (state: IconsSettingsState, action: IconsSettingsActions): IconsSettingsState => {
  switch (action.type) {
    case IconsSettingsActionType.SET_ICON_SIZE: {
      const iconSize = action.payload.size;
      document.documentElement.style.setProperty('--grid-icon-size', `${iconSize}px`);

      return {
        ...state,
        customization: {
          ...state.customization,
          size: iconSize,
        },
      };
    }
    case IconsSettingsActionType.SET_ICON_COLOR: {
      const iconColor = action.payload.color;
      document.documentElement.style.setProperty('--grid-icon-color', iconColor);

      return {
        ...state,
        customization: {
          ...state.customization,
          color: iconColor,
        },
      };
    }
    case IconsSettingsActionType.SET_ICON_WIDTH: {
      const iconWidth = action.payload.width;
      document.documentElement.style.setProperty('--grid-icon-width', String(iconWidth));

      return {
        ...state,
        customization: {
          ...state.customization,
          width: iconWidth,
        },
      };
    }
    case IconsSettingsActionType.SET_EXPORT_PLATFORM: {
      const platform = action.payload.platform;

      return {
        ...state,
        export: {
          ...state.export,
          platform,
        },
      };
    }
    case IconsSettingsActionType.SET_EXPORT_TYPE: {
      const type = action.payload.type;

      return {
        ...state,
        export: {
          ...state.export,
          type,
        },
      };
    }
    case IconsSettingsActionType.SET_EXPORT_SELECTION: {
      const selection = action.payload.selection;

      return {
        ...state,
        export: {
          ...state.export,
          selection,
        },
      };
    }
    default:
      throw new Error('The action you requested does not exists!');
  }
};
