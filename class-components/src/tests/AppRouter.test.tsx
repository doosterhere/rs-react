import { screen } from '@testing-library/react';

import { renderWithRouter } from '../utils';
import { HomePage, Page404 } from '../pages';
import { ListItemDetailed } from '../components';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('../pages', () => ({
  HomePage: () => <div data-testid="home">Home</div>,
  Page404: () => <div data-testid="page404">Page404</div>,
}));

jest.mock('../components', () => ({
  ListItemDetailed: () => <div data-testid="detailed">Detailed</div>,
}));

describe('AppRouter', () => {
  it('should render Homepage', () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  it('should render Page404', () => {
    renderWithRouter(<Page404 />);

    expect(screen.getByTestId('page404')).toBeInTheDocument();
  });

  it('should render ListItemDetailed', () => {
    renderWithRouter(<ListItemDetailed />, { initialEntries: ['/detail/1'] });

    expect(screen.getByTestId('detailed')).toBeInTheDocument();
  });
});
