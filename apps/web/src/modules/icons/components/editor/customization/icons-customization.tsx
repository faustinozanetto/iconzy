import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import theme from 'tailwindcss/defaultTheme';

import useMediaQuery from '@modules/common/hooks/use-media-query';
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
        'w-[280px] overflow-y-auto h-full bg-neutral-50 border-r-neutral-300 border-r-[1px] dark:bg-neutral-800 dark:border-r-neutral-700 p-4'
      )}
    >
      <IconsCustomizationSettings />
      <IconsCustomizationExport />
    </section>
  );
};

export default IconsCustomization;
