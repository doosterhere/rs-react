'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

import classes from './ThemeContainer.module.css';

import { useTheme } from '../ThemeContext';

const ThemeContainer = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  return <main className={clsx(classes.main, classes[theme.value])}>{children}</main>;
};

export { ThemeContainer };
