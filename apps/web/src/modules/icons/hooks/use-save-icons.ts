import ADMZip from 'adm-zip';
import { useToast } from 'ui';

import { useIconsContext } from '../context/icons/icons-context';
import { useIconsSelectionContext } from '../context/selection/icons-selection-context';
import { applyIconCustomizationStyles, convertJSXToString, getSVGSourceIntoComponent } from '../lib/icons-utils';

export const useSaveIcons = () => {
  const { state: iconsState } = useIconsContext();
  const { state: iconsSelectionState } = useIconsSelectionContext();

  const { toast } = useToast();

  const SINGLE_FILE = iconsSelectionState.selectedIcons.length === 1;

  const compiledIcons = () => {
    const elements = iconsSelectionState.selectedIcons.map((selectedIcon) => {
      const source = getSVGSourceIntoComponent(selectedIcon.source, iconsState.iconPack.type, 'grid-icon');
      const content = convertJSXToString(source);
      const stylesApplied = applyIconCustomizationStyles(content, iconsState.iconPack.type);
      const compiledIcon = { ...selectedIcon, compiled: stylesApplied };

      return compiledIcon;
    });
    return elements;
  };

  const saveSingleFile = () => {
    const compiled = compiledIcons();
    const singleIcon = compiled[0];
    const fileBlob = new Blob([singleIcon.compiled], { type: 'application/zip' });
    const fileURL = URL.createObjectURL(fileBlob);
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = `${singleIcon.name}.svg`;
    link.click();
  };

  const saveMultipleFiles = () => {
    const compiled = compiledIcons();
    const zipFile = new ADMZip();
    compiled.map((icon) => {
      zipFile.addFile(`${icon.name}.svg`, Buffer.from(icon.compiled, 'utf-8'));
    });

    const zipBlob = new Blob([zipFile.toBuffer()], { type: 'application/zip' });
    const fileURL = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = `icons.zip`;
    link.click();
  };

  const exportIcons = () => {
    if (!iconsSelectionState.selectedIcons.length) return toast({ variant: 'error', content: 'No icons selected!' });
    try {
      if (SINGLE_FILE) saveSingleFile();
      else saveMultipleFiles();
    } catch (error) {
      toast({ variant: 'error', content: 'An error occurred!' });
    }
  };

  const copyIcon = async () => {
    if (!SINGLE_FILE) return;
    try {
      const compiled = compiledIcons();
      await navigator.clipboard
        .writeText(compiled[0].compiled)
        .then(() => toast({ variant: 'success', content: 'Icon successfully copied to clipboard.' }));
    } catch (error) {
      toast({ variant: 'error', content: 'An error occurred!' });
    }
  };

  return { exportIcons, copyIcon, isSingleFile: SINGLE_FILE };
};
