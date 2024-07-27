import { createContext, FC, ReactNode, useState } from 'react';

type ThemeType = {
  value: 'light' | 'dark';
};

interface IThemeContext {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({ theme: { value: 'light' }, toggleTheme: () => {} });

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>({ value: 'light' });

  const toggleTheme = () => {
    if (theme.value === 'light') {
      setTheme({ value: 'dark' });
    } else {
      setTheme({ value: 'light' });
    }
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
