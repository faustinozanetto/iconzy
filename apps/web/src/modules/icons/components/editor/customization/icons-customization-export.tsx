import { useIconsSelectionContext } from '@modules/icons/context/selection/icons-selection-context';
import { convertJSXToString } from '@modules/icons/lib/icons-utils';
import React, { useMemo } from 'react';
import { Button, Separator, useToast } from 'ui';

const IconsCustomizationExport: React.FC = () => {
  const { state } = useIconsSelectionContext();
  const { toast } = useToast();

  const elementSource = useMemo(() => {
    const selectedIcon = state.selectedIcons[0];
    if (selectedIcon) return convertJSXToString(selectedIcon.element);
  }, [state.selectedIcons]);

  const handleExport = () => {
    if (!elementSource) return;
    try {
      const file = new Blob([elementSource], { type: 'text/plain' });
      const fileURL = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = fileURL;
      link.download = `icon.svg`;
      link.click();
    } catch (err) {
      console.error('Failed to export svg', err);
    }
  };

  const handleCopy = async () => {
    if (elementSource) {
      await navigator.clipboard.writeText(elementSource).then(() => {
        toast({ variant: 'success', content: 'Icon successfully copied to clipboard.' });
      });
    } else {
      toast({ variant: 'error', content: 'No icon is selected.' });
    }
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">Export Settings</h3>
      <Separator />
      <div className="mt-2 flex flex-col space-y-2">
        <Button className="w-full" variant="ghost" colorScheme="rose" onClick={handleCopy}>
          Copy
        </Button>
        <Button className="w-full" colorScheme="sky" onClick={handleExport}>
          Export
        </Button>
      </div>
    </div>
  );
};

export default IconsCustomizationExport;
