import { useIconsContext } from '@modules/icons/context/icons/icons-context';
import {
  DEFAULT_ICON_SIZE,
  ICON_SIZE_LIMITS,
  ICON_WIDTH_LIMITS,
  ICONS_DEFAULT_COLOR,
} from '@modules/icons/lib/constants';
import { setIconColor, setIconSize, setIconWidth } from '@modules/icons/state/customization.slice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ColorInput, RangeInput } from 'ui';

const IconsCustomizationSettings: React.FC = () => {
  const { state: iconsState } = useIconsContext();
  const dispatch = useDispatch();

  /**
   * Callback function when the size changes.
   * @param value The new size.
   */
  const handelSizeChanged = (value: number) => {
    dispatch(setIconSize(value));
  };

  /**
   * Callback function when the width changes.
   * @param value The new width.
   */
  const handleWidthChanged = (value: number) => {
    dispatch(setIconWidth(value));
  };

  /**
   * Callback function when the color changes.
   * @param value The new color.
   */
  const handleColorChanged = (value: string) => {
    dispatch(setIconColor(value));
  };

  return (
    <div className="flex flex-col">
      <div className="mt-2 flex flex-col space-y-4">
        <RangeInput
          id="icon-size"
          label="Size"
          min={ICON_SIZE_LIMITS.min}
          max={ICON_SIZE_LIMITS.max}
          placeholder={String(DEFAULT_ICON_SIZE)}
          onValueChanged={handelSizeChanged}
        />
        <RangeInput
          id="stroke-width"
          label="Width"
          min={ICON_WIDTH_LIMITS.min}
          max={ICON_WIDTH_LIMITS.max}
          step={0.01}
          placeholder="2"
          disabled={iconsState.iconPack?.type === 'fill' || false}
          onValueChanged={handleWidthChanged}
        />
        <ColorInput
          id="icon-color"
          label="Color"
          placeholder={ICONS_DEFAULT_COLOR}
          onValueChanged={handleColorChanged}
        />
      </div>
    </div>
  );
};

export default IconsCustomizationSettings;
