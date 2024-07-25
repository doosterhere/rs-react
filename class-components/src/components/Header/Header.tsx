import { Link } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => (
  <header className={classes.header} role="heading">
    <div>
      <Link to={'/'}>
        <img src="images/star-wars-logo.png" alt="Star Wars logo" />
      </Link>
      Star Wars planet finder app
    </div>
  </header>
);

export { Header };
