import { screen } from '@testing-library/react';

import { renderWithRouter } from '../../utils';
import { Header } from '..';

describe('Header', () => {
  it('should render correctly', () => {
    renderWithRouter(<Header />);

    expect(screen.getByText(/Star Wars planet finder app/i)).toBeInTheDocument();

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
