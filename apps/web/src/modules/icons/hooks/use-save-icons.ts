import ADMZip from 'adm-zip';
import parse from 'html-react-parser';
import { toBlob, toPng } from 'html-to-image';
import { Options } from 'html-to-image/lib/types';
import { renderToStaticMarkup } from 'react-dom/server';
import { useToast } from 'ui';

import { useIconsContext } from '../context/icons/icons-context';
import { useIconsSelectionContext } from '../context/selection/icons-selection-context';
import { useIconsSettingsContext } from '../context/settings/icons-settings-context';
import { applyIconCustomizationStyles, convertJSXToString } from '../lib/icons-utils';
import { IconExportTypes, IconWithElement } from '../typings/icon.typings';

export const useSaveIcons = () => {
  const { toast } = useToast();
  const { state: iconsState } = useIconsContext();
  const { state: iconsSelectionState } = useIconsSelectionContext();
  const { state: iconsSettingsState } = useIconsSettingsContext();

  const SINGLE_FILE = iconsSelectionState.selectedIcons.length === 1;

  const compileIcon = (icon: IconWithElement): [JSX.Element, string] => {
    const elementToString = convertJSXToString(icon.element);
    const stylesApplied = applyIconCustomizationStyles(elementToString, iconsState.iconPack.type);
    const parsedToJSX = parse(stylesApplied) as JSX.Element;

    return [parsedToJSX, stylesApplied];
  };

  const convertJSXToHTML = (element: JSX.Element): HTMLElement => {
    const output = document.createElement('svg');
    const staticElement = renderToStaticMarkup(element);
    output.innerHTML = staticElement;
    return output;
  };

  const convertIconExtension = async (element: JSX.Element, type: IconExportTypes, requiresBlob = false) => {
    const parsedElement: HTMLElement = convertJSXToHTML(element);

    const scale = Number(document.documentElement.style.getPropertyValue('--grid-icon-size').slice(0, -2));
    const scaleRatio = scale / 50;

    const options: Options = {
      canvasWidth: parsedElement.clientWidth + 50 * scaleRatio,
      canvasHeight: parsedElement.clientHeight + 50 * scaleRatio,
      width: parsedElement.clientWidth + 50 * scaleRatio,
      height: parsedElement.clientHeight + 50 * scaleRatio,
      pixelRatio: 12,
      quality: 1,
    };

    if (requiresBlob) return toBlob(parsedElement, options).then((blob) => blob);

    if (type === 'png') return toPng(parsedElement, options).then((dataUrl) => dataUrl);

    throw new Error('Unsupported extension type');
  };

  const saveSingleFile = async () => {
    const icon = iconsSelectionState.selectedIcons[0];
    const [compiledJSX, compiledString] = compileIcon(icon);

    const fileName = `${icon.name}.${iconsSettingsState.export.type}`;
    const link = document.createElement('a');
    link.download = fileName;

    if (iconsSettingsState.export.type !== 'svg') {
      const converted = (await convertIconExtension(compiledJSX, iconsSettingsState.export.type)) as string;
      link.href = converted;
    } else {
      const fileBlob = new Blob([compiledString]);
      const fileURL = URL.createObjectURL(fileBlob);
      link.href = fileURL;
    }
    link.click();
  };

  const saveMultipleFiles = async () => {
    const compiled = iconsSelectionState.selectedIcons.map((icon) => {
      return compileIcon(icon);
    });

    const zipFile = new ADMZip();
    await Promise.all(
      compiled.map(async ([compiledJSX, compiledString], index) => {
        const iconMetadata = iconsSelectionState.selectedIcons[index];
        const fileName = `${iconMetadata.name}.${iconsSettingsState.export.type}`;
        let rawContent = Buffer.alloc(0);
        if (iconsSettingsState.export.type !== 'svg') {
          const converted = (await convertIconExtension(compiledJSX, iconsSettingsState.export.type, true)) as Blob;
          const arrayBuffer = await converted.arrayBuffer();
          rawContent = Buffer.from(arrayBuffer);
        } else {
          const fileBlob = new Blob([compiledString]);
          const converted = URL.createObjectURL(fileBlob);
          const data = Buffer.from(converted, 'utf8');
          rawContent = Buffer.concat([rawContent, data], rawContent.length + data.length);
        }

        zipFile.addFile(fileName, rawContent);
      })
    );

    const zipBlob = new Blob([zipFile.toBuffer()], { type: 'application/zip' });
    const fileURL = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = `icons.zip`;
    link.click();
  };

  const exportIcons = async () => {
    if (!iconsSelectionState.selectedIcons.length) return toast({ variant: 'error', content: 'No icons selected!' });
    try {
      toast({ variant: 'info', content: 'Started packing icons...' });
      await new Promise((res) => {
        if (SINGLE_FILE) res(saveSingleFile());
        res(saveMultipleFiles());
      }).then(() => {
        toast({ variant: 'success', content: 'Icons downloaded successfully!' });
      });
    } catch (error) {
      toast({ variant: 'error', content: 'An error occurred!' });
    }
  };

  const copyIcon = async () => {
    if (!SINGLE_FILE) return;
    try {
      const icon = iconsSelectionState.selectedIcons[0];
      const [compiledJSX, compiledString] = compileIcon(icon);

      if (iconsSettingsState.export.type === 'svg') {
        await navigator.clipboard
          .writeText(compiledString)
          .then(() => toast({ variant: 'success', content: 'Icon successfully copied to clipboard.' }));
      } else {
        const converted = (await convertIconExtension(compiledJSX, iconsSettingsState.export.type, true)) as Blob;
        await navigator.clipboard
          .write([
            new window.ClipboardItem({
              [converted.type]: converted,
            }),
          ])
          .then(() => toast({ variant: 'success', content: 'Icon successfully copied to clipboard.' }));
      }
    } catch (error) {
      toast({ variant: 'error', content: 'An error occurred!' });
    }
  };

  return { exportIcons, copyIcon, isSingleFile: SINGLE_FILE };
};
