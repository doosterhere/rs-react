import { render, screen } from '@testing-library/react';

import Loader from '../Loader';

describe('Loader', () => {
  it('should render correctly', () => {
    render(<Loader />);

    expect(screen.getByRole('progressbar')).toBeVisible();
  });
});
