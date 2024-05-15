import { IconsSettingsProvider } from '@modules/icons/context/settings/icons-settings-context';
import React from 'react';

import IconsCustomizationSettings from './customization/icons-customization-settings';
import IconsCustomizationExport from './export/icons-customization-export';

const IconsCustomization: React.FC = () => {
  return (
    <IconsSettingsProvider>
      <section
        className="hidden h-full w-[280px] flex-col
          justify-between space-y-2 overflow-y-auto border-r p-3.5 md:flex"
      >
        <div className="flex flex-1 flex-col justify-between">
          <IconsCustomizationSettings />
          <IconsCustomizationExport />
        </div>
      </section>
    </IconsSettingsProvider>
  );
};

export default IconsCustomization;
