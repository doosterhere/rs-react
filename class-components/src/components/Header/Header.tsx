import Link from 'next/link';
import Image from 'next/image';

import classes from './Header.module.css';
import { ThemeButton } from '../ThemeButton';

const Header = () => {
  return (
    <header className={classes.header} role="heading">
      <div>
        <Link href={'/'}>
          <Image src="/images/star-wars-logo.png" alt="Star Wars logo" width={80} height={32} />
        </Link>
        <div>Star Wars planet finder app</div>
        <ThemeButton />
      </div>
    </header>
  );
};

export { Header };
