import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import clsx from 'clsx';

import classes from './Header.module.css';

import { ThemeContext } from '../ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggle = () => {
    toggleTheme();
  };

  return (
    <header className={clsx(classes.header, classes[theme.value])} role="heading">
      <div>
        <Link href={'/'}>
          <Image src="/images/star-wars-logo.png" alt="Star Wars logo" width={80} height={32} />
        </Link>
        <div>Star Wars planet finder app</div>
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
      </div>
    </header>
  );
};

export { Header };
