import { Outlet } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Fallback from './Fallback';

const Layout = () => {
  return (
    <>
      <ErrorBoundary fallbackComponent={<Fallback />}>
        <header>
          <img
            src="../../public/images/star-wars-logo.png"
            alt="Star Wars logo"
          />
          Star Wars planet finder app
        </header>
        <Outlet />
        <footer>2024</footer>
      </ErrorBoundary>
    </>
  );
};

export default Layout;
