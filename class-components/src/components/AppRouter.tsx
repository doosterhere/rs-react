import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { MainPage, Page404 } from '../pages';
import ListItemDetailed from './ListItemDetailed';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<MainPage />}>
            <Route path=":name" element={<ListItemDetailed />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
