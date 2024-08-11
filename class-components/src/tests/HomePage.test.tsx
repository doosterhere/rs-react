import { screen } from '@testing-library/react';

import { HomePage } from '../pages';
import { renderWithRouter } from '../utils';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('../components', () => ({
  Header: () => <div data-testid="header">Header</div>,
  SearchBar: () => <div data-testid="search">Search</div>,
  List: () => <div data-testid="list">List</div>,
  Pagination: () => <div data-testid="pagination">Pagination</div>,
  Flyout: () => <div data-testid="flyout">Flyout</div>,
}));

describe('HomPage', () => {
  it.only('should render correctly', async () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.getByText(/no results/i)).toBeInTheDocument();
    expect(screen.getByTestId('flyout')).toBeInTheDocument();
  });
});
