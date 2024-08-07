import { render, screen } from '@testing-library/react';

import { Loader } from '../components';

describe('Loader', () => {
  it('should render correctly', () => {
    const { container } = render(<Loader />);

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
