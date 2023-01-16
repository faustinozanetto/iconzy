import useMediaQuery from '@modules/common/hooks/use-media-query';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import theme from 'tailwindcss/defaultTheme';

import IconsCustomizationExport from './icons-customization-export';
import IconsCustomizationSettings from './icons-customization-settings';

const IconsCustomization: React.FC = () => {
  const isSmallDevice = useMediaQuery(`(max-width: ${theme.screens.md}`);
  const [panelToggled, setPanelToggled] = useState(false);

  useEffect(() => {
    setPanelToggled(isSmallDevice);
  }, [isSmallDevice]);

  return (
    <section
      className={clsx(
        panelToggled ? 'hidden' : 'flex flex-col justify-between',
        'h-full w-[280px] overflow-y-auto border-r-[1px] border-r-neutral-300 bg-neutral-50 p-4 dark:border-r-neutral-700 dark:bg-neutral-800'
      )}
    >
      <IconsCustomizationSettings />
      <IconsCustomizationExport />
    </section>
  );
};

export default IconsCustomization;
