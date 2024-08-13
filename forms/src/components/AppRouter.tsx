import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ROUTES } from '../constants';

import { Layout } from './Layout';
import { ControlledForm } from '../pages/ControlledForm';
import { UncontrolledForm } from '../pages/UncontrolledForm';
import { HomePage } from '../pages/HomePage';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.UNCONTROLLED_FORM, element: <UncontrolledForm /> },
      { path: ROUTES.CONTROLLED_FORM, element: <ControlledForm /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export { AppRouter };
