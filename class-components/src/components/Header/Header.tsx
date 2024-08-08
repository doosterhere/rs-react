'use client';
import Link from 'next/link';
import Image from 'next/image';

import clsx from 'clsx';

import classes from './Header.module.css';

import { useTheme } from '../ThemeContext';
import { ThemeButton } from '../ThemeButton';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={clsx(classes.header, classes[theme.value])} role="heading">
      <div>
        <Link href={'/?search=&page=1'}>
          <Image src="/images/star-wars-logo.png" alt="Star Wars logo" width={80} height={32} />
        </Link>
        <div>Star Wars planet finder app</div>
        <ThemeButton />
      </div>
    </header>
  );
};

export { Header };
