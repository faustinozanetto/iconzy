import React, { useMemo } from 'react';
import { createContext, useContext, useReducer } from 'react';

import { reducer } from './reducer';
import type { IconsActions, IconsState } from './types';

type IconsContextState = {
  /**
   * The state of the context.
   */
  state: IconsState;
  /**
   * The dispatch of the context reducer.
   */
  dispatch: React.Dispatch<IconsActions>;
};

const initialState: IconsContextState = {} as IconsContextState;

const IconsContext = createContext<IconsContextState>(initialState);

/**
 * Hook for accessing the icons context.
 * @returns The icons context.
 */
export const useIconsContext = () => {
  const context = useContext(IconsContext);
  if (!context) throw new Error('Tried to use IconsContext with no context avaiable!');
  return context;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const IconsProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    iconPack: null,
    icons: [],
  });

  const memoizedValue = useMemo(() => {
    return { state, dispatch };
  }, [state]);

  return <IconsContext.Provider value={memoizedValue}>{children}</IconsContext.Provider>;
};

export default IconsProvider;
