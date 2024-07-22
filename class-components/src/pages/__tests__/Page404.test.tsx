import { screen } from '@testing-library/react';

import { renderWithRouter } from '../../utils';

import Page404 from '../Page404';

describe('Page404', () => {
  it('should render correctly', () => {
    renderWithRouter(<Page404 />);

    expect(screen.getByText(/This page doesn't exist/i)).toBeInTheDocument();

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
