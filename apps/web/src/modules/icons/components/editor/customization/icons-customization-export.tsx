import { useIconsContext } from '@modules/icons/context/icons-context';
import { convertJSXToString } from '@modules/icons/lib/icons-utils';
import React, { useMemo } from 'react';
import { Button, Separator } from 'ui';

const IconsCustomizationExport: React.FC = () => {
  const { state } = useIconsContext();

  const elementSource = useMemo(() => {
    const selectedIcon = state.selectedIcon;
    if (selectedIcon) return convertJSXToString(selectedIcon.element);
  }, [state.selectedIcon]);

  const handleExport = () => {
    if (!elementSource) return;
    try {
      const file = new Blob([elementSource], { type: 'text/plain' });
      const fileURL = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = fileURL;
      link.download = 'icon.svg';
      link.click();
    } catch (err) {
      console.error('Failed to export svg', err);
    }
  };

  const handleCopy = () => {
    try {
      if (elementSource) {
        void navigator.clipboard.writeText(elementSource);
      }
    } catch (err) {
      console.error('Failed to copy svg: ', err);
    }
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">Export Settings</h3>
      <Separator />
      <div className="mt-2 flex flex-row space-x-2">
        <Button className="w-full" colorScheme="sky" onClick={handleExport}>
          Export
        </Button>
        <Button className="w-full" colorScheme="rose" onClick={handleCopy}>
          Copy
        </Button>
      </div>
    </div>
  );
};

export default IconsCustomizationExport;
