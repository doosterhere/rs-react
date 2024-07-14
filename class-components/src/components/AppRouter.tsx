import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { MainPage, Page404 } from '../pages';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
