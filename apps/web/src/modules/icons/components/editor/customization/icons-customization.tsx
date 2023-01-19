import useMediaQuery from '@modules/common/hooks/use-media-query';
import { IconsCustomizationProvider } from '@modules/icons/context/customization/icons-customization-context';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import theme from 'tailwindcss/defaultTheme';
import { Separator } from 'ui';

import IconsCustomizationExport from './icons-customization-export';
import IconsCustomizationSettings from './icons-customization-settings';

const IconsCustomization: React.FC = () => {
  const isSmallDevice = useMediaQuery(`(max-width: ${theme.screens.md}`);
  const [panelToggled, setPanelToggled] = useState(false);

  useEffect(() => {
    setPanelToggled(isSmallDevice);
  }, [isSmallDevice]);

  return (
    <IconsCustomizationProvider>
      <section
        className={clsx(
          panelToggled ? 'hidden' : 'flex flex-col justify-between',
          'h-full w-[280px] space-y-2 overflow-y-auto border-r-[1px] border-r-neutral-300 bg-neutral-50 p-3.5 dark:border-r-neutral-700 dark:bg-neutral-800'
        )}
      >
        <div className="mb-2 flex flex-row">
          <h3 className="text-xl font-semibold">Customization</h3>
          {/* <IconCustomizationToggle onClick={handlePanelToggled} /> */}
        </div>
        <Separator />
        <div className="flex flex-1 flex-col justify-between">
          <IconsCustomizationSettings />
          <IconsCustomizationExport />
        </div>
      </section>
    </IconsCustomizationProvider>
  );
};

export default IconsCustomization;
