'use client';

import classes from './ThemeButton.module.css';

import { useTheme } from '../ThemeContext';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  const toggle = () => {
    toggleTheme();
  };

  return (
    <div className={classes.theme}>
      {theme.value === 'light' && (
        <div className={classes.button} onClick={toggle} role="button">
          <i className="fa-solid fa-sun" />
        </div>
      )}
      {theme.value === 'dark' && (
        <div className={classes.button} onClick={toggle} role="button">
          <i className="fa-solid fa-moon"></i>
        </div>
      )}
    </div>
  );
};

export { ThemeButton };
