import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../store';
import { ThemeProvider } from '../components';

const renderWithProvider = (component: React.ReactNode) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );

  return render(component, { wrapper: Wrapper });
};

export { renderWithProvider };
