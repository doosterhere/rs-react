import { render, screen } from '@testing-library/react';

import { Loader } from '..';

describe('Loader', () => {
  it('should render correctly', () => {
    render(<Loader />);

    expect(screen.getByRole('progressbar')).toBeVisible();
  });
});
