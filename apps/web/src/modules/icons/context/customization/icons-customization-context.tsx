import React, { createContext, useContext, useReducer } from 'react';

import { reducer } from './reducer';
import { IconsCustomizationContextState } from './reducer/types';

const initialState: IconsCustomizationContextState = {
  state: {
    customization: { size: 35, color: '#000', width: 2 },
  },
  dispatch: () => {},
};

const IconsCustomizationContext = createContext<IconsCustomizationContextState>(initialState);

type IconsCustomizationProviderProps = {
  children: React.ReactNode;
};

/**
 * Hook that returns the icons selection context.
 * @returns The context if valid.
 */
export const useIconsCustomizationContext = () => {
  const context = useContext(IconsCustomizationContext);
  if (!context) throw new Error('Tried to use IconsCustomizationContext with no context avaiable!');
  return context;
};

export const IconsCustomizationProvider: React.FC<IconsCustomizationProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    customization: initialState.state.customization,
  });

  return (
    <IconsCustomizationContext.Provider value={{ state, dispatch }}>{children}</IconsCustomizationContext.Provider>
  );
};
