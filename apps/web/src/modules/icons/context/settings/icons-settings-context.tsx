import {
  ICONS_DEFAULT_EXPORT_PLATFORM,
  ICONS_DEFAULT_EXPORT_SELECTION,
  ICONS_DEFAULT_EXPORT_TYPE,
} from '@modules/icons/lib/constants';
import React, { createContext, useContext, useMemo, useReducer } from 'react';

import { reducer } from './reducer';
import { IconsSettingsContextState } from './reducer/types';

const initialState: IconsSettingsContextState = {
  state: {
    customization: { size: 35, color: '#000', width: 2 },
    export: {
      platform: ICONS_DEFAULT_EXPORT_PLATFORM,
      type: ICONS_DEFAULT_EXPORT_TYPE,
      selection: ICONS_DEFAULT_EXPORT_SELECTION,
    },
  },
  dispatch: () => {},
};

const IconsSettingsContext = createContext<IconsSettingsContextState>(initialState);

type IconsSettingsProviderProps = {
  children: React.ReactNode;
};

/**
 * Hook that returns the icons selection context.
 * @returns The context if valid.
 */
export const useIconsSettingsContext = () => {
  const context = useContext(IconsSettingsContext);
  if (!context) throw new Error('Tried to use IconsSettingsContext with no context avaiable!');
  return context;
};

export const IconsSettingsProvider: React.FC<IconsSettingsProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState.state);

  const value = useMemo(() => {
    return { state, dispatch };
  }, [state]);

  return <IconsSettingsContext.Provider value={value}>{children}</IconsSettingsContext.Provider>;
};
