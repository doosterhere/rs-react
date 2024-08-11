import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { configStore } from '../store';
import { ThemeProvider } from '../components/ThemeContext';
import { ThemeContainer } from '../components/ThemeContainer';

const renderWithProvider = (component: React.ReactNode) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={configStore({})}>
      <ThemeProvider>
        <ThemeContainer>{children}</ThemeContainer>
      </ThemeProvider>
    </Provider>
  );

  return render(component, { wrapper: Wrapper });
};

export { renderWithProvider };
