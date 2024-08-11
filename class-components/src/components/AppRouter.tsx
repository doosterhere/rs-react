import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ROUTES } from '../constants';

import { HomePage, Page404 } from '../pages';
import { ListItemDetailed } from './ListItemDetailed/ListItemDetailed';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
    errorElement: <Page404 />,
    children: [
      {
        path: ROUTES.DETAIL,
        element: <ListItemDetailed />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export { AppRouter };
