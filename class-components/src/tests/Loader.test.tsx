import { render, screen } from '@testing-library/react';

import { Loader } from '../components';

describe('Loader', () => {
  it('should render correctly', () => {
    render(<Loader />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
