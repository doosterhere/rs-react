import { screen, render } from '@testing-library/react';

import Loading from '../../app/loading';

describe('ErrorPage', () => {
  it('should render correctly', () => {
    render(<Loading />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
