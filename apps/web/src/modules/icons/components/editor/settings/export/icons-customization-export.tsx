import { useIconsSettingsContext } from '@modules/icons/context/settings/icons-settings-context';
import { IconsSettingsActionType } from '@modules/icons/context/settings/reducer/types';
import { useSaveIcons } from '@modules/icons/hooks/use-save-icons';
import {
  ICONS_EXPORT_PLATFORMS,
  ICONS_EXPORT_SELECTION,
  ICONS_EXPORT_TYPES_HTML,
  ICONS_EXPORT_TYPES_REACT,
} from '@modules/icons/lib/constants';
import { IconExportPlatforms, IconExportTypes, IconsExportSelection } from '@modules/icons/typings/icon.typings';
import React from 'react';
import { Button, MultiButtonInput, MultiButtonInputOption, Separator } from 'ui';

const IconsCustomizationExport: React.FC = () => {
  const { state, dispatch } = useIconsSettingsContext();
  const { exportIcons, copyIcon, isSingleFile } = useSaveIcons();

  const EXPORT_TYPE_OPTIONS = state.export.platform === 'html' ? ICONS_EXPORT_TYPES_HTML : ICONS_EXPORT_TYPES_REACT;

  const handlePlatformChange = (value: MultiButtonInputOption<IconExportPlatforms>) => {
    dispatch({
      type: IconsSettingsActionType.SET_EXPORT_PLATFORM,
      payload: {
        platform: value,
      },
    });
    dispatch({
      type: IconsSettingsActionType.SET_EXPORT_TYPE,
      payload: {
        type: value === 'html' ? ICONS_EXPORT_TYPES_HTML[0] : ICONS_EXPORT_TYPES_REACT[0],
      },
    });
  };

  const handleTypeChange = (value: MultiButtonInputOption<IconExportTypes>) => {
    dispatch({
      type: IconsSettingsActionType.SET_EXPORT_TYPE,
      payload: {
        type: value,
      },
    });
  };

  const handleSelectionChange = (value: MultiButtonInputOption<IconsExportSelection>) => {
    dispatch({
      type: IconsSettingsActionType.SET_EXPORT_SELECTION,
      payload: {
        selection: value,
      },
    });
  };

  const handleExport = async () => {
    await exportIcons();
  };

  return (
    <div className="flex flex-col space-y-3">
      <h3 className="text-xl font-semibold">Export Settings</h3>
      <Separator />
      <div className="flex flex-col space-y-2">
        <MultiButtonInput
          id="export-platform"
          label="Export Platform"
          defaultSelected={state.export.platform}
          options={ICONS_EXPORT_PLATFORMS}
          onValueChanged={(value) => handlePlatformChange(value)}
          optionRender={(option: IconExportPlatforms) => option.toUpperCase()}
        />
        <MultiButtonInput
          id="export-type"
          label="Export Type"
          defaultSelected={state.export.type}
          options={EXPORT_TYPE_OPTIONS}
          onValueChanged={(value) => handleTypeChange(value)}
          optionRender={(option: IconExportTypes) => option.toUpperCase()}
        />
        <MultiButtonInput
          id="export-selection"
          label="Export Selection"
          defaultSelected="selected"
          options={ICONS_EXPORT_SELECTION}
          onValueChanged={(value) => handleSelectionChange(value)}
          optionRender={(option: IconsExportSelection) => option.toUpperCase()}
        />
      </div>
      <Separator />
      <div className="flex flex-col space-y-2">
        {isSingleFile ? (
          <Button className="w-full" variant="ghost" colorScheme="rose" onClick={copyIcon}>
            Copy
          </Button>
        ) : null}
        <Button className="w-full" onClick={handleExport}>
          Export
        </Button>
      </div>
    </div>
  );
};

export default IconsCustomizationExport;
