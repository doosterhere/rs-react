import 'whatwg-fetch';
import { screen } from '@testing-library/react';

import { renderWithRouter } from '../utils';
import { Header } from '../components';

describe('Header', () => {
  it('should render correctly', () => {
    renderWithRouter(<Header />);

    expect(screen.getByText(/Star Wars planet finder app/i)).toBeInTheDocument();

    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it.todo('should call toggleTheme after restore the theme.value from localStorage if it different from current theme');

  it.todo('should call toggle after click and save the theme.value in localStorage');
});
