import { createContext, useContext, useEffect, useState } from 'react';

export type ThemeType = 'dark' | 'light';

type ThemeContextState = {
  theme: ThemeType;
  toggle: () => void;
};

const initialState: ThemeContextState = {
  theme: 'dark',
  toggle: () => {},
};

const ThemeContext = createContext<ThemeContextState>(initialState);

/**
 * Hook for accessing the theme context.
 * @returns The theme context.
 */
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('Tried to use ThemeContext with no context avaiable!');
  return context;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<ThemeType>(initialState.theme);

  const updateLocalItem = (appliedTheme: ThemeType) => {
    window.localStorage.setItem('theme', appliedTheme);
  };

  const updateBodyClasses = (appliedTheme: ThemeType) => {
    if (appliedTheme === 'light') document.body.classList.remove('dark');
    else document.body.classList.add('dark');
  };

  useEffect(() => {
    const localTheme = (window.localStorage.getItem('theme') as ThemeType) || initialState.theme;
    if (localTheme) {
      setTheme(localTheme);
      updateLocalItem(localTheme);
      updateBodyClasses(localTheme);
    }
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const newTheme: ThemeType = prev === 'dark' ? 'light' : 'dark';
      updateLocalItem(newTheme);
      updateBodyClasses(newTheme);
      return newTheme;
    });
  };

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
