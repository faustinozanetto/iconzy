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

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<ThemeType>(initialState.theme);

  const updateBodyClasses = (appliedTheme: ThemeType) => {
    if (appliedTheme === 'light') document.body.classList.remove('dark');
    else document.body.classList.add('dark');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as ThemeType;
    if (localTheme) {
      setTheme(localTheme);
      updateBodyClasses(localTheme);
    }
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const newTheme: ThemeType = prev === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem('theme', newTheme);
      updateBodyClasses(newTheme);
      return newTheme;
    });
  };

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
