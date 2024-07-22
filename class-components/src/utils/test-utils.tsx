import { render } from '@testing-library/react';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';

const renderWithRouter = (component: React.ReactNode, options: MemoryRouterProps = {}) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <MemoryRouter {...options}> {children} </MemoryRouter>
  );

  return render(component, { wrapper: Wrapper });
};

export { renderWithRouter };
