import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ROUTES } from '@/constants';

import { configStore } from '@/store/store';
import { Layout } from './Layout';
import { ControlledForm } from '@/pages/ControlledForm';
import { UncontrolledForm } from '@/pages/UncontrolledForm';
import { HomePage } from '@/pages/HomePage';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.UNCONTROLLED_FORM, element: <UncontrolledForm /> },
      { path: ROUTES.CONTROLLED_FORM, element: <ControlledForm /> },
      { path: '*', element: <HomePage /> },
    ],
  },
]);

const AppRouter = () => {
  return (
    <Provider store={configStore()}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export { AppRouter };
