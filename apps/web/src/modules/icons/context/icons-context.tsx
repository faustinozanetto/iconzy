import React, { useMemo } from 'react';
import { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';
import { IconsActions, IconsState } from './types';

type IconsContextState = {
  state: IconsState;
  dispatch: React.Dispatch<IconsActions>;
};

const initialState: IconsContextState = {} as IconsContextState;

const IconsContext = createContext<IconsContextState>(initialState);

export const useIconsContext = () => {
  return useContext(IconsContext);
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const IconsProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    iconPack: null,
    icons: [],
    selectedIcon: null,
    iconCustomization: { size: 35, color: '#000', width: 2 },
  });

  const memoizedValue = useMemo(() => {
    return { state, dispatch };
  }, [state]);

  return <IconsContext.Provider value={memoizedValue}>{children}</IconsContext.Provider>;
};

export default IconsProvider;
