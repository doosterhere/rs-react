// import { screen } from '@testing-library/react';

// import HomePage from '../pages';
// import { renderWithProvider } from '../utils';

jest.mock('../components', () => ({
  Header: () => <div data-testid="header">Header</div>,
  SearchBar: () => <div data-testid="search">Search</div>,
  List: () => <div data-testid="list">List</div>,
  Pagination: () => <div data-testid="pagination">Pagination</div>,
  Flyout: () => <div data-testid="flyout">Flyout</div>,
}));

describe('HomPage', () => {
  it('should render correctly', () => {
    // renderWithProvider(<HomePage />);
    // expect(screen.getByTestId('header')).toBeInTheDocument();
    // expect(screen.getByTestId('search')).toBeInTheDocument();
    // expect(screen.getByText(/no results/i)).toBeInTheDocument();
    // expect(screen.getByTestId('flyout')).toBeInTheDocument();
  });
});
