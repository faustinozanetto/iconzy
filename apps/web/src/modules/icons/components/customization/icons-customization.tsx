import useMediaQuery from '@modules/common/hooks/use-media-query';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import theme from 'tailwindcss/defaultTheme';
import { Separator } from 'ui';

const IconsCustomization: React.FC = () => {
  const isSmallDevice = useMediaQuery(`(max-width: ${theme.screens.sm}`);
  const [panelToggled, setPanelToggled] = useState(false);

  useEffect(() => {
    setPanelToggled(isSmallDevice);
  }, [isSmallDevice]);

  return (
    <section
      className={clsx(
        panelToggled ? 'hidden' : 'flex flex-col',
        'w-[250px] overflow-y-auto h-full bg-neutral-50 border-l-neutral-300 border-l-[1px] dark:bg-neutral-800 dark:border-l-neutral-700 p-2'
      )}
    >
      <h3 className="font-semibold text-base">Customize Icons</h3>
      <Separator />
    </section>
  );
};

export default IconsCustomization;
