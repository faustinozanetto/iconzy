import useMediaQuery from '@modules/common/hooks/use-media-query';
import { useIconsContext } from '@modules/icons/context/icons-context';
import { IconsActionType } from '@modules/icons/context/types';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import theme from 'tailwindcss/defaultTheme';
import { ColorInput, RangeInput, Separator } from 'ui';

const IconsCustomization: React.FC = () => {
  const isSmallDevice = useMediaQuery(`(max-width: ${theme.screens.sm}`);
  const [panelToggled, setPanelToggled] = useState(false);
  const { state, dispatch } = useIconsContext();

  useEffect(() => {
    setPanelToggled(isSmallDevice);
  }, [isSmallDevice]);

  return (
    <section
      className={clsx(
        panelToggled ? 'hidden' : 'flex flex-col',
        'w-[280px] overflow-y-auto h-full bg-neutral-50 border-l-neutral-300 border-l-[1px] dark:bg-neutral-800 dark:border-l-neutral-700 p-4'
      )}
    >
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
    </section>
  );
};

export default IconsCustomization;
