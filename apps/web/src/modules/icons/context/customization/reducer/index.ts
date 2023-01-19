import { IconsCustomizationActions, IconsCustomizationActionType, IconsCustomizationState } from './types';

/**
 * Reducer for the selected icons context.
 * @param state State of the reducer.
 * @param action Action to execute.
 * @returns The modified state.
 */
export const reducer = (state: IconsCustomizationState, action: IconsCustomizationActions): IconsCustomizationState => {
  switch (action.type) {
    case IconsCustomizationActionType.SET_ICON_SIZE: {
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
    case IconsCustomizationActionType.SET_ICON_COLOR: {
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
    case IconsCustomizationActionType.SET_ICON_WIDTH: {
      const iconWidth = action.payload.width;
      document.documentElement.style.setProperty('--grid-icon-width', `${iconWidth}px`);

      return {
        ...state,
        customization: {
          ...state.customization,
          width: iconWidth,
        },
      };
    }
    default:
      throw new Error('The action you requested does not exists!');
  }
};
