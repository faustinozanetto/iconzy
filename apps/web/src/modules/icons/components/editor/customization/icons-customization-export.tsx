import { useSaveIcons } from '@modules/icons/hooks/use-save-icons';
import React from 'react';
import { Button, Separator } from 'ui';

const IconsCustomizationExport: React.FC = () => {
  const { exportIcons, copyIcon, isSingleFile } = useSaveIcons();

  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">Export Settings</h3>
      <Separator />
      <div className="mt-2 flex flex-col space-y-2">
        {isSingleFile ? (
          <Button className="w-full" variant="ghost" colorScheme="rose" onClick={copyIcon}>
            Copy
          </Button>
        ) : null}
        <Button className="w-full" onClick={exportIcons}>
          Export
        </Button>
      </div>
    </div>
  );
};

export default IconsCustomizationExport;
