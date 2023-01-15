import React from 'react';
import { IconsActionType } from '@modules/icons/context/types';
import { Separator, RangeInput, ColorInput } from 'ui';
import { useIconsContext } from '@modules/icons/context/icons-context';
import { DEFAULT_ICON_SIZE, ICON_SIZE_LIMITS, ICON_WIDTH_LIMITS } from '@modules/icons/lib/constants';

const IconsCustomizationSettings: React.FC = () => {
  const { state, dispatch } = useIconsContext();

  const handelSizeChanged = (value: number) => {
    dispatch({ type: IconsActionType.SET_ICON_SIZE, payload: { size: value } });
  };

  const handleWidthChanged = (value: number) => {
    dispatch({ type: IconsActionType.SET_ICON_WIDTH, payload: { width: value } });
  };

  const handleColorChanged = (value: string) => {
    dispatch({
      type: IconsActionType.SET_ICON_COLOR,
      payload: {
        color: value,
      },
    });
  };

  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-lg">Customize Icons</h3>
      <Separator />
      <div className="flex flex-col space-y-4 mt-2">
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
          disabled={state.iconPack?.requiresFill}
          onValueChanged={handleWidthChanged}
        />
        <ColorInput id="icon-color" label="Color" placeholder="#a781ee" onValueChanged={handleColorChanged} />
      </div>
    </div>
  );
};

export default IconsCustomizationSettings;
