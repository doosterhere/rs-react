import { Outlet } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Fallback from './Fallback';
import SearchBar from './SearchBar';

const Layout = () => {
  return (
    <>
      <ErrorBoundary fallbackComponent={<Fallback />}>
        <header>
          <div>
            <img
              src="../../public/images/star-wars-logo.png"
              alt="Star Wars logo"
            />
            Star Wars planet finder app
          </div>
          <SearchBar />
        </header>
        <Outlet />
        <footer>2024</footer>
      </ErrorBoundary>
    </>
  );
};

export default Layout;
