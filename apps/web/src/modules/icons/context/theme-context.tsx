import { createContext, useContext, useEffect, useReducer, useState } from 'react';
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
    iconPack: 'feather',
  });

  return <IconsContext.Provider value={{ state, dispatch }}>{children}</IconsContext.Provider>;
};

export default IconsProvider;
