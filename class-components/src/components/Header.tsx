import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <Link to={'/'}>
        <img src="images/star-wars-logo.png" alt="Star Wars logo" />
      </Link>
      Star Wars planet finder app
    </div>
  </header>
);

export default Header;
