import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage, Page404 } from '../pages';
import { ListItemDetailed } from '.';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Page404 />,
    children: [
      {
        path: 'detail/:id',
        element: <ListItemDetailed />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export { AppRouter };
