import { screen, render } from '@testing-library/react';

import { Header } from '../components';

describe('Header', () => {
  it('should render correctly', () => {
    render(<Header />);

    expect(screen.getByText(/Star Wars planet finder app/i)).toBeInTheDocument();

    expect(screen.getByRole('link')).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
