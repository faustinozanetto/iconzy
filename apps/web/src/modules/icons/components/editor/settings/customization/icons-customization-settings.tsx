import { ColorInput, RangeInput, Separator } from '@iconzy/ui';
import { useIconsSettingsContext } from '@modules/icons/context/settings/icons-settings-context';
import { IconsSettingsActionType } from '@modules/icons/context/settings/reducer/types';
import {
  DEFAULT_ICON_SIZE,
  ICON_SIZE_LIMITS,
  ICON_WIDTH_LIMITS,
  ICONS_DEFAULT_COLOR,
} from '@modules/icons/lib/constants';
import { useIconsStore } from '@modules/icons/state/icons.slice';
import React from 'react';

const IconsSettingsSettings: React.FC = () => {
  const { iconPack } = useIconsStore();
  const { dispatch: IconsSettingsDispatch } = useIconsSettingsContext();

  /**
   * Callback function when the size changes.
   * @param value The new size.
   */
  const handelSizeChanged = (value: number) => {
    IconsSettingsDispatch({ type: IconsSettingsActionType.SET_ICON_SIZE, payload: { size: value } });
  };

  /**
   * Callback function when the width changes.
   * @param value The new width.
   */
  const handleWidthChanged = (value: number) => {
    IconsSettingsDispatch({ type: IconsSettingsActionType.SET_ICON_WIDTH, payload: { width: value } });
  };

  /**
   * Callback function when the color changes.
   * @param value The new color.
   */
  const handleColorChanged = (value: string) => {
    IconsSettingsDispatch({
      type: IconsSettingsActionType.SET_ICON_COLOR,
      payload: {
        color: value,
      },
    });
  };

  return (
    <div className="flex flex-col space-y-3">
      <h3 className="text-lg font-semibold">Customization</h3>
      <Separator />
      <div className="flex flex-col space-y-4">
        <RangeInput
          id="icon-size"
          label="Size"
          min={ICON_SIZE_LIMITS.min}
          max={ICON_SIZE_LIMITS.max}
          placeholder={String(DEFAULT_ICON_SIZE)}
          onValueChange={handelSizeChanged}
          aria-label="Icon Size"
        />
        <RangeInput
          id="stroke-width"
          label="Width"
          min={ICON_WIDTH_LIMITS.min}
          max={ICON_WIDTH_LIMITS.max}
          placeholder="2"
          onValueChange={handleWidthChanged}
          disabled={iconPack?.type === 'fill'}
          aria-label="Icon Width"
        />
        <ColorInput
          id="icon-color"
          label="Color"
          placeholder={ICONS_DEFAULT_COLOR}
          onValueChange={handleColorChanged}
          aria-label="Icon Color"
        />
      </div>
    </div>
  );
};

export default IconsSettingsSettings;
