import useMediaQuery from '@modules/common/hooks/use-media-query';
import { IconsSettingsProvider } from '@modules/icons/context/settings/icons-settings-context';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import theme from 'tailwindcss/defaultTheme';
import { Separator } from 'ui';

import IconsCustomizationSettings from './customization/icons-customization-settings';
import IconsCustomizationExport from './export/icons-customization-export';

const IconsCustomization: React.FC = () => {
  const isSmallDevice = useMediaQuery(`(max-width: ${theme.screens.md}`);
  const [panelToggled, setPanelToggled] = useState(false);

  useEffect(() => {
    setPanelToggled(isSmallDevice);
  }, [isSmallDevice]);

  return (
    <IconsSettingsProvider>
      <section
        className={clsx(
          panelToggled ? 'hidden' : 'flex flex-col justify-between',
          'h-full w-[280px] space-y-2 overflow-y-auto border-r-[1px] border-r-neutral-300 bg-neutral-50 p-3.5 dark:border-r-neutral-700 dark:bg-neutral-800'
        )}
      >
        <div className="mb-2 flex flex-row">
          <h3 className="text-xl font-semibold">Customization</h3>
        </div>
        <Separator />
        <div className="flex flex-1 flex-col justify-between">
          <IconsCustomizationSettings />
          <IconsCustomizationExport />
        </div>
      </section>
    </IconsSettingsProvider>
  );
};

export default IconsCustomization;
