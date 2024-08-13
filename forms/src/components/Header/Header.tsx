import classes from './Header.module.scss';

import { NAV_ITEMS } from '../../constants';
import { Navigation } from '../Navigation';

function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Navigation navLinks={NAV_ITEMS} />
      </nav>
    </header>
  );
}
export { Header };
