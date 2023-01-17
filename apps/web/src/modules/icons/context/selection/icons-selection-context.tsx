import React, { createContext, useContext, useReducer } from 'react';

import { reducer } from './reducer';
import { IconsSelectionContextState } from './reducer/types';

const initialState: IconsSelectionContextState = {
  state: { selectedIcons: [] },
  dispatch: () => {},
};

const IconsSelectionContext = createContext<IconsSelectionContextState>(initialState);

type IconsSelectionProviderProps = {
  children: React.ReactNode;
};

/**
 * Hook that returns the icons selection context.
 * @returns The context if valid.
 */
export const useIconsSelectionContext = () => {
  const context = useContext(IconsSelectionContext);
  if (!context) throw new Error('Tried to use IconsSelectionContext with no context avaiable!');
  return context;
};

export const IconsSelectionProvider: React.FC<IconsSelectionProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    selectedIcons: [],
  });

  return <IconsSelectionContext.Provider value={{ state, dispatch }}>{children}</IconsSelectionContext.Provider>;
};
