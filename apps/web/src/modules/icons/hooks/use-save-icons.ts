import ADMZip from 'adm-zip';
import { useMemo } from 'react';
import { useToast } from 'ui';

import { useIconsSelectionContext } from '../context/selection/icons-selection-context';
import { convertJSXToString } from '../lib/icons-utils';

export const useSaveIcons = () => {
  const { state } = useIconsSelectionContext();
  const { toast } = useToast();

  const compiledIcons = useMemo(() => {
    return state.selectedIcons.map((icon) => {
      const content = convertJSXToString(icon.element);
      return {
        name: icon.name,
        content,
      };
    });
  }, [state.selectedIcons]);

  const isSingleFile = compiledIcons.length === 1;
  const noIconsSelected = !compiledIcons.length;

  const saveSingleFile = () => {
    const singleIcon = compiledIcons[0];
    const fileBlob = new Blob([singleIcon.content], { type: 'application/zip' });
    const fileURL = URL.createObjectURL(fileBlob);
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = `${singleIcon.name}.svg`;
    link.click();
  };

  const saveMultipleFiles = () => {
    const zipFile = new ADMZip();
    compiledIcons.map((icon) => {
      zipFile.addFile(`${icon.name}.svg`, Buffer.from(icon.content, 'utf-8'));
    });

    const zipBlob = new Blob([zipFile.toBuffer()], { type: 'application/zip' });
    const fileURL = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = `icons.zip`;
    link.click();
  };

  const exportIcons = () => {
    if (noIconsSelected) return toast({ variant: 'error', content: 'No icons selected!' });
    try {
      if (isSingleFile) saveSingleFile();
      else saveMultipleFiles();
    } catch (error) {
      toast({ variant: 'error', content: 'An error occurred!' });
    }
  };
  const copyIcon = async () => {
    if (!isSingleFile) return;
    try {
      const uniqueElement = compiledIcons[0];
      await navigator.clipboard
        .writeText(uniqueElement.content)
        .then(() => toast({ variant: 'success', content: 'Icon successfully copied to clipboard.' }));
    } catch (error) {
      toast({ variant: 'error', content: 'An error occurred!' });
    }
  };

  return { exportIcons, copyIcon, isSingleFile };
};
