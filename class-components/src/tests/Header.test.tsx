import { screen } from '@testing-library/react';

import { Header } from '../components/Header';
import { renderWithProvider } from '../utils';

describe('Header', () => {
  it('should render correctly', () => {
    const { container } = renderWithProvider(<Header />);

    expect(container).toMatchSnapshot();

    expect(screen.getByText(/Star Wars planet finder app/i)).toBeInTheDocument();

    expect(screen.getByRole('link')).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
