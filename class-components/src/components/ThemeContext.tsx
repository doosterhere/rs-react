'use client';

import { createContext, ReactNode, useMemo, useState, useContext } from 'react';

type ThemeType = {
  value: 'light' | 'dark';
};

interface IThemeContext {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>({ value: 'light' });

  const toggleTheme = () => {
    setTheme(prev => ({ value: prev.value === 'light' ? 'dark' : 'light' }));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export { ThemeProvider, useTheme };
