import React from 'react';
import { IconsActionType } from '@modules/icons/context/types';
import { Separator, RangeInput, ColorInput } from 'ui';
import { useIconsContext } from '@modules/icons/context/icons-context';

const IconsCustomizationSettings: React.FC = () => {
  const { state, dispatch } = useIconsContext();
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-lg">Customize Icons</h3>
      <Separator />
      <div className="flex flex-col space-y-4 mt-2">
        <RangeInput
          id="icon-size"
          label="Size"
          min={5}
          max={60}
          placeholder={String(state.iconCustomization.size)}
          onValueChanged={(value) => dispatch({ type: IconsActionType.SET_ICON_SIZE, payload: { size: value } })}
        />
        <RangeInput
          id="stroke-width"
          label="Width"
          min={0.1}
          max={3}
          step={0.01}
          placeholder={String(state.iconCustomization.width)}
          onValueChanged={(value) => dispatch({ type: IconsActionType.SET_ICON_WIDTH, payload: { width: value } })}
        />
        <ColorInput
          id="icon-color"
          label="Color"
          placeholder="#000000"
          onValueChanged={(color) => {
            dispatch({
              type: IconsActionType.SET_ICON_COLOR,
              payload: {
                color,
              },
            });
          }}
        />
      </div>
    </div>
  );
};

export default IconsCustomizationSettings;
