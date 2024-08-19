import { Outlet } from 'react-router-dom';

import { Header } from '../Header';
import { Footer } from '../Footer';

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
export { Layout };
