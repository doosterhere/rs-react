// import { screen } from '@testing-library/react';

import { renderWithProvider } from '../utils';
import Page404 from '../pages';

// jest.mock('react-redux');

describe('Page404', () => {
  it('should render correctly', () => {
    renderWithProvider(<Page404 />);

    // expect(screen.getByText(/This page doesn't exist/i)).toBeInTheDocument();

    // expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
