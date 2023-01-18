import { useIconsSelectionContext } from '@modules/icons/context/selection/icons-selection-context';
import { convertJSXToString } from '@modules/icons/lib/icons-utils';
import ADMZip from 'adm-zip';
import React, { useMemo } from 'react';
import { Button, Separator, useToast } from 'ui';

const IconsCustomizationExport: React.FC = () => {
  const { state } = useIconsSelectionContext();
  const { toast } = useToast();

  const elementSources = useMemo(() => {
    return state.selectedIcons.map((icon) => {
      const content = convertJSXToString(icon.element);
      return {
        name: icon.name,
        content,
      };
    });
  }, [state.selectedIcons]);

  const handleExport = () => {
    if (!elementSources.length) return;

    try {
      const zip = new ADMZip();
      elementSources.map((file) => {
        zip.addFile(`${file.name}.svg`, Buffer.from(file.content, 'utf-8'));
      });

      const zipBlob = new Blob([zip.toBuffer()], { type: 'application/zip' });
      const fileURL = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = fileURL;
      link.download = `icons.zip`;
      link.click();
    } catch (error) {
      toast({ variant: 'error', content: 'An error occurred!' });
    }
  };

  const handleCopy = async () => {
    if (elementSources.length !== 1) return;

    try {
      const uniqueElement = elementSources[0];
      await navigator.clipboard.writeText(uniqueElement.content).then(() => {
        toast({ variant: 'success', content: 'Icon successfully copied to clipboard.' });
      });
    } catch (error) {
      toast({ variant: 'error', content: 'An error occurred!' });
    }
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">Export Settings</h3>
      <Separator />
      <div className="mt-2 flex flex-col space-y-2">
        {state.selectedIcons.length === 1 ? (
          <Button className="w-full" variant="ghost" colorScheme="rose" onClick={handleCopy}>
            Copy
          </Button>
        ) : null}
        <Button className="w-full" colorScheme="sky" onClick={handleExport}>
          Export
        </Button>
      </div>
    </div>
  );
};

export default IconsCustomizationExport;
