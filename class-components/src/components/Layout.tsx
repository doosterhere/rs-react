import { Outlet } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Fallback from './Fallback';

const Layout = () => {
  return (
    <>
      <ErrorBoundary fallbackComponent={<Fallback />}>
        <header>Star Wars planet finder app</header>
        <Outlet />
        <footer>2024</footer>
      </ErrorBoundary>
    </>
  );
};

export default Layout;
