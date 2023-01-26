import ADMZip from 'adm-zip';
import parse from 'html-react-parser';
import { toBlob, toPng } from 'html-to-image';
import { Options } from 'html-to-image/lib/types';
import { renderToStaticMarkup } from 'react-dom/server';
import { useToast } from 'ui';

import { useIconsContext } from '../context/icons/icons-context';
import { useIconsSelectionContext } from '../context/selection/icons-selection-context';
import { useIconsSettingsContext } from '../context/settings/icons-settings-context';
import { applyIconCustomizationStyles } from '../lib/icons-utils';
import { Icon, IconExportPlatforms, IconExportTypes } from '../typings/icon.typings';

type Attribute = {
  attribute: string;
  propName: string;
  content: string;
};

/**
 * Function that generates the react jsx code.
 * @param props The props string.
 * @param element The source code of the generated element.
 */
const REACT_JSX_TEMPLATE = (props: string, element: string) => {
  return `
    import React from 'react';

    export const Icon = (props) => {
      ${props}

      return (
        ${element}
      );
    };
    `;
};

/**
 * Function that generates the react tsx code.
 * @param attributes The attributes array to generate the types.
 * @param props The props string.
 * @param element The source code of the generated element.
 */
const REACT_TSX_TEMPLATE = (attributes: Attribute[], props: string, element: string) => {
  const generatedPropsType = `
  export type IconProps = {
    ${attributes
      .map((attribute) => {
        return `${attribute.propName}?: ${typeof attribute.content};`;
      })
      .join('\n')}
  }
  `;

  return `
    import React from 'react';

    ${generatedPropsType}

    export const Icon: React.FC<IconProps> = (props) => {
      ${props}

      return (
        ${element}
      );
    };
    `;
};

export const useSaveIcons = () => {
  const { toast } = useToast();
  const { state: iconsState } = useIconsContext();
  const { state: iconsSelectionState } = useIconsSelectionContext();
  const { state: iconsSettingsState } = useIconsSettingsContext();

  const ICONS_SELECTED =
    iconsSettingsState.export.selection === 'selected' ? iconsSelectionState.selectedIcons : iconsState.icons;

  const SINGLE_FILE = ICONS_SELECTED.length === 1;
  const EXPORT_TYPE: IconExportTypes = iconsSettingsState.export.type;
  const EXPORT_PLATFORM: IconExportPlatforms = iconsSettingsState.export.platform;

  /**
   * Function that takes a icon with its JSX.Element and compiles it with the styles applied and returns the parsed JSX with the source string.
   * @param icon The icon to compile.
   * @returns A tuple containing the icon, compiled JSX and the string source.
   */
  const compileIcon = (icon: Icon): [Icon, JSX.Element, string] => {
    const stylesApplied = applyIconCustomizationStyles(icon.source, iconsState.iconPack.type);
    const parsedToJSX = parse(stylesApplied) as JSX.Element;

    return [icon, parsedToJSX, stylesApplied];
  };

  /**
   * Compiles all the selected icons and sets them to state.
   */
  const compileSelectedIcons = (): ReturnType<typeof compileIcon>[] => {
    return ICONS_SELECTED.map((icon) => compileIcon(icon));
  };

  /**
   * Function that takes a JSX.Element and returns a HTMLElement of it.
   * @param element The element to parse.
   * @returns The HTMLElement
   */
  const convertJSXToHTML = (element: JSX.Element): HTMLElement => {
    const output = document.createElement('svg');
    const staticElement = renderToStaticMarkup(element);
    output.innerHTML = staticElement;
    return output.children[0] as HTMLElement;
  };

  /**
   * Function that given a JSX.Element it converts it to a specific export type.
   * @param element The element to convert.
   * @param type The type of export, example: png.
   * @param requiresBlob Wether we should convert to blob or not.
   * @returns The converted element.
   */
  const convertIconExtension = async (
    element: JSX.Element,
    type: IconExportTypes,
    requiresBlob = false
  ): Promise<Blob | string> => {
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
      skipFonts: true,
    };
    // Used when exporting to png but multiple files.
    if (requiresBlob) {
      const blob = await toBlob(parsedElement, options);
      if (blob) return blob;
    }
    // Normal export type to png when single file.
    if (type === 'png') return toPng(parsedElement, options).then((dataUrl) => dataUrl);
    throw new Error('Unsupported extension type');
  };

  /**
   * Function for parsing a attribute of a svg html element.
   * @param svgElement The element to get the attribute.
   * @param attribute The attribute for search.
   * @param fallback The fallback value if not found.
   * @returns The parsed attribute or null.
   */
  const parseElementAttribute = (
    svgElement: HTMLElement,
    attribute: string,
    propName: string,
    fallback: string
  ): Attribute | null => {
    if (!svgElement.hasAttribute(attribute) || svgElement.getAttribute(attribute) === 'none') return null;

    const content = svgElement.getAttribute(attribute) || fallback;

    const attributeData: Attribute = {
      attribute: attribute,
      propName: propName,
      content: content,
    };
    return attributeData;
  };

  /**
   * Function that generates the react source code of a icon.
   * @param svgJSXSource The jsx source code of the svg icon.
   * @returns The resulting string containing the react code.
   */
  const generateReactSourceCode = (svgJSXSource: JSX.Element): string => {
    const svgElement = convertJSXToHTML(svgJSXSource);
    const attributes: Map<string, Attribute> = new Map<string, Attribute>();

    const strokeAttribute = parseElementAttribute(
      svgElement,
      'stroke',
      'stroke',
      iconsSettingsState.customization.color
    );
    if (strokeAttribute) attributes.set('stroke', strokeAttribute);

    const strokeWidthAttribute = parseElementAttribute(
      svgElement,
      'stroke-width',
      'strokeWidth',
      String(iconsSettingsState.customization.width)
    );
    if (strokeWidthAttribute) attributes.set('stroke-width', strokeWidthAttribute);

    const fillAttribute = parseElementAttribute(svgElement, 'fill', 'fill', iconsSettingsState.customization.color);
    if (fillAttribute) attributes.set('fill', fillAttribute);

    const sizeFallback = `${iconsSettingsState.customization.width}`;
    const widthAttribute = parseElementAttribute(svgElement, 'width', 'width', sizeFallback);
    if (widthAttribute) attributes.set('width', widthAttribute);

    const heightAttribute = parseElementAttribute(svgElement, 'height', 'height', sizeFallback);
    if (heightAttribute) attributes.set('height', heightAttribute);

    const values = Array.from(attributes.values());

    const customProps = values
      .map((value) => {
        return `${value.propName} = '${value.content}', `;
      })
      .join('');

    const props = `const { ${customProps} } = props;`;
    let serialized = new XMLSerializer().serializeToString(svgElement);
    attributes.forEach((attribute) => {
      serialized = serialized.replace(
        new RegExp(`${attribute.attribute}="(.*?)"`, 'g'),
        `${attribute.attribute}={${attribute.propName}}`
      );
    });

    if (EXPORT_TYPE === 'jsx') return REACT_JSX_TEMPLATE(props, serialized);
    return REACT_TSX_TEMPLATE(values, props, serialized);
  };

  /**
   * Function for saving a single file to pc for html platform.
   */
  const saveSingleFileHTML = async () => {
    const [icon, compiledJSX, compiledString] = compileSelectedIcons()[0];

    const fileName = `${icon.name}.${iconsSettingsState.export.type}`;
    const link = document.createElement('a');
    link.download = fileName;

    // If the export type is not svg, we have to convert it.
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

  /**
   * Function for generating the file blob when handling multiple files.
   * @param zipFile The zip file.
   */
  const createMultipleFilesBlob = (zipFile: ADMZip) => {
    const zipBlob = new Blob([zipFile.toBuffer()], { type: 'application/zip' });
    const fileURL = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = `icons.zip`;
    link.click();
  };

  /**
   * Function for saving multiple files to the computer for html platform.
   */
  const saveMultipleFilesHTML = async () => {
    const compiledIcons = compileSelectedIcons();
    const zipFile = new ADMZip();
    await Promise.all(
      compiledIcons.map(async ([icon, compiledJSX, compiledString], index) => {
        const iconMetadata = ICONS_SELECTED[index];
        const fileName = `${iconMetadata.name}.${iconsSettingsState.export.type}`;
        let rawContent = Buffer.alloc(0);
        // If export type is not svg we have to convert it to the proper extension and parse the blob
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

    // Create zip blob and file.
    createMultipleFilesBlob(zipFile);
  };

  /**
   * Function for saving a single file to pc for react platform.
   */
  const saveSingleFileReact = () => {
    // Compile the first selected icon, parse and generate the jsx code, convert to blob and generate url.
    const [icon, compiledJSX, compiledSource] = compileSelectedIcons()[0];
    const generatedSource = generateReactSourceCode(compiledJSX);
    const fileBlob = new Blob([generatedSource]);
    const converted = URL.createObjectURL(fileBlob);

    const fileName = `${icon.name}.${iconsSettingsState.export.type}`;
    const link = document.createElement('a');
    link.download = fileName;
    link.href = converted;
    link.click();
  };

  /**
   * Function for saving multiple files to the computer for react platform.
   */
  const saveMultipleFilesReact = async () => {
    const compiledIcons = compileSelectedIcons();
    const zipFile = new ADMZip();
    await Promise.all(
      compiledIcons.map(async ([icon, compiledJSX], index) => {
        const iconMetadata = ICONS_SELECTED[index];
        const fileName = `${iconMetadata.name}.${iconsSettingsState.export.type}`;
        const generatedSource = generateReactSourceCode(compiledJSX);
        const fileBlob = new Blob([generatedSource]);
        const arrayBuffer = await fileBlob.arrayBuffer();
        const data = Buffer.from(arrayBuffer);
        zipFile.addFile(fileName, data);
      })
    );

    // Create zip blob and file.
    createMultipleFilesBlob(zipFile);
  };

  /**
   * Main function for exporting icons for html platform.
   */
  const exportIconHTMLPlatform = async () => {
    if (SINGLE_FILE) await saveSingleFileHTML();
    else await saveMultipleFilesHTML();
  };

  /**
   * Main function for exporting icons for react platform.
   */
  const exportIconReactPlatform = async () => {
    if (SINGLE_FILE) saveSingleFileReact();
    else await saveMultipleFilesReact();
  };

  /**
   * Main function for handling the export of icons.
   */
  const exportIcons = async () => {
    if (!ICONS_SELECTED.length) return toast({ variant: 'error', content: 'No icons selected!' });
    try {
      toast({ variant: 'info', content: 'Started packing icons...' });

      compileSelectedIcons();

      if (EXPORT_PLATFORM === 'html') await exportIconHTMLPlatform();
      else if (EXPORT_PLATFORM === 'react') await exportIconReactPlatform();
      toast({ variant: 'success', content: 'Icons downloaded successfully!' });
    } catch (error) {
      toast({ variant: 'error', content: 'An error occurred!' });
    }
  };

  /**
   * Function for copying a icon to the clipboard for html platform.
   */
  const copyIconHTMLPlatform = async () => {
    const [icon, compiledJSX, compiledString] = compileSelectedIcons()[0];

    if (EXPORT_TYPE === 'svg') {
      await navigator.clipboard.writeText(compiledString);
    } else {
      const converted = (await convertIconExtension(compiledJSX, iconsSettingsState.export.type, true)) as Blob;
      await navigator.clipboard.write([
        new window.ClipboardItem({
          [converted.type]: converted,
        }),
      ]);
    }
  };

  /**
   * Function for copying a icon to the clipboard for react platform.
   */
  const copyIconReactPlatform = async () => {
    const [icon, compiledJSX, compiledString] = compileSelectedIcons()[0];

    const generatedCode = generateReactSourceCode(compiledJSX);
    await navigator.clipboard.writeText(generatedCode);
  };

  /**
   * Main function for handling the copy of icons.
   */
  const copyIcon = async () => {
    try {
      if (!SINGLE_FILE) return;

      if (EXPORT_PLATFORM === 'html') await copyIconHTMLPlatform();
      else if (EXPORT_PLATFORM === 'react') await copyIconReactPlatform();
      toast({ variant: 'success', content: 'Icon successfully copied to clipboard.' });
    } catch (error) {
      toast({ variant: 'error', content: 'An error occurred!' });
    }
  };

  return { exportIcons, copyIcon, isSingleFile: SINGLE_FILE };
};
